#!/usr/bin/env node
// check-partner-edit.mjs — Fiper brand v2.3.x (v2.3.3) — gate for PERSON-LED edits (partner / CEO reels)
// Measures what can be measured on an edit decision list (EDL) + its rendered file.
// Usage: node scripts/check-partner-edit.mjs --edl edit.json [--video final.mp4] [--tokens brand/tokens.json] [--out report.md]
// Exit 0 = PASS (warnings allowed), 1 = FAIL, 2 = bad input.
//
// EDL schema (written by the editing engine, timeline in seconds):
// {
//   "fps": 23.976,                               // output frame rate
//   "tier": "person" | "official",
//   "sources": { "c03": "/abs/path/c03.wav" },   // any file ffmpeg can decode (wav/mp4/mov)
//   "segments": [ { "clip": "c03", "in": 17.18, "out": 18.39, "line": 1 } ],   // in output order; output time = running sum
//   "words":    [ [0.00, 0.40, "وصلك"] ],        // OUTPUT timeline, from word-level ASR, after remap
//   "source_words": { "c03": [[17.18, 17.58, "وصلك"]] },   // optional: SOURCE timeline words, for the in-word test
//   "words_aligned": true,                       // true only for FORCED alignment (e.g. WhisperX + Arabic wav2vec2);
//                                                // plain Whisper word times drift 0.3–0.9 s on Gulf dialect → word tests downgrade to WARN
//   "captions": [ { "start": 0.00, "end": 1.20, "words": [["وصلك", 0.00, 0], ["هذا", 0.40, 0]] } ],  // 3rd = emphasis 0/1
//   "speech_span": [0.00, 20.31],                // first word → last word of the body in the OUTPUT
//   "takeaway": { "start": 18.6, "end": 20.3, "text": "…" },  // short takeaway text OVER the speaker (v2.3.1)
//   "closing": null                              // v2.3.1: closing cards are forbidden in every tier → any closing = FAIL
//   captions[].words[][2] emphasis: 0 | "danger" | "profit" | "info" (or legacy 2 / 3 / 1) → #F05252 / #2AB37A / #D9A441
//   v2.3.2 (CEO 31 Oct 2026, studio items 5 / 10 / 11 / 12): "danger" / "profit" only on a financial VALUE (a number, %, currency) — a word such as «مخاطر» takes "info" (the alert amber);
//   a caption group is ≤ 26 characters on one line (max_chars_per_group); the caption text is the spoken words as recorded, never the script;
//   G7 exception: the caption group whose text matches the takeaway is HIDDEN while the takeaway is on, so the captions may stop at takeaway.start when the last group repeats the takeaway text.
//   "lower_third": { "name": "…", "role": "…", "credential_documented": false },   // optional (v2.3.3): the role line = the partner's SELF-DESCRIPTION (CR-C models by partner role, or the partner's own form);
//                                                // G11: no partnership disclosure in it (CR-B — «بالشراكة مع فايبر», «شراكة مدفوعة», «إعلان», "paid partnership" = FAIL) and no title implying a licence / regulatory status
//                                                // («مرخص», «معتمد», licensed, certified, regulated) unless credential_documented: true (the document is in the partner's profile)
//   "caption_text": "…"                          // optional (v2.3.3): the post caption as published → G11 refuses a disclosure tag in it (CR-B) and «ترخيص» / License with a number
// }
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const DEFAULTS = {  // mirrors tokens.json → video.person_edit (v2.3.1 proposal); --tokens overrides
  loudness: { lufs_min: -14.2, lufs_max: -14.0, tp_max: -1.5 },
  cut: { quiet_below_speech_db: 25, fail_above_speech_db: -12, probe_ms: 15, word_guard_ms: 20 },
  pause: { joined_min_s: 0.12, joined_max_s: 0.90, internal_max_s: 1.30 },
  segment: { min_s: 1.2 },
  rhythm: { cuts_per_min_warn: 12, cuts_per_min_fail: 18 },
  captions: { onset_tolerance_ms: 80, max_emphasis_per_group: 1, max_words_per_group: 5, max_chars_per_group: 26 },
  speed: { frame_tolerance: 1 },
  closing: { allowed: 0 },
  takeaway: { read_base_s: 0.5, read_per_word_s: 0.3, read_min_s: 1.5 }
};

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, arr) => (v.startsWith('--') ? a.concat([[v.slice(2), arr[i + 1]]]) : a), []));
if (!args.edl || !existsSync(args.edl)) { console.error('usage: --edl edit.json [--video final.mp4] [--tokens tokens.json] [--out report.md]'); process.exit(2); }
const T = structuredClone(DEFAULTS);
if (args.tokens && existsSync(args.tokens)) {
  try {
    const tok = JSON.parse(readFileSync(args.tokens, 'utf8'));
    const pe = tok?.video?.person_edit ?? tok?.['video.person_edit'];
    if (pe) for (const k of Object.keys(T)) for (const kk of Object.keys(T[k])) {
      const v = pe?.[k]?.[kk]; const val = (v && typeof v === 'object' && '$value' in v) ? v.$value : v;
      if (typeof val === 'number') T[k][kk] = val;
    }
  } catch (e) { console.error('tokens unreadable, using defaults:', e.message); }
}
const E = JSON.parse(readFileSync(args.edl, 'utf8'));
const fps = E.fps || 30, frame = 1 / fps;
const results = []; // {id, status: PASS|WARN|FAIL|SKIP, detail}
const add = (id, status, detail) => results.push({ id, status, detail });

// ---------- audio helpers ----------
const SR = 16000, HOP = 160; // 10 ms frames
const cache = {};
function rmsDb(path) {
  if (cache[path]) return cache[path];
  const p = spawnSync('ffmpeg', ['-v', 'error', '-i', path, '-vn', '-ac', '1', '-ar', String(SR), '-f', 'f32le', '-'], { maxBuffer: 1 << 30 });
  if (p.status !== 0) throw new Error('ffmpeg decode failed: ' + path);
  const a = new Float32Array(p.stdout.buffer, p.stdout.byteOffset, p.stdout.byteLength / 4);
  const n = Math.floor(a.length / HOP), r = new Float32Array(n);
  for (let i = 0; i < n; i++) { let s = 0; for (let j = 0; j < HOP; j++) { const x = a[i * HOP + j]; s += x * x; } r[i] = 10 * Math.log10(s / HOP + 1e-12); }
  const sorted = Float32Array.from(r).sort();
  const ref = sorted[Math.floor(sorted.length * 0.95)]; // speech reference = 95th percentile frame level
  return (cache[path] = { r, ref });
}
const frameAt = (t) => Math.max(0, Math.round(t * 100));
function levelAround(A, t, ms) { const w = Math.max(1, Math.round(ms / 10)); let m = -200; for (let i = frameAt(t) - w; i <= frameAt(t) + w; i++) if (i >= 0 && i < A.r.length) m = Math.max(m, A.r[i]); return m; }
function silenceRun(A, t, dir, thr, maxS = 3) { // length of quiet run starting at t going dir (+1 forward / -1 backward)
  let i = frameAt(t), n = 0; while (i >= 0 && i < A.r.length && A.r[i] < thr && n < maxS * 100) { n++; i += dir; } return n / 100;
}

// ---------- G1 speed: no time-stretch, frame-accurate slots ----------
let outT = 0; const slots = [];
for (const s of E.segments) { const d = s.out - s.in; slots.push({ ...s, o: outT, d }); outT += d; }
{
  const bad = slots.filter(s => s.d <= 0);
  add('G1 no speed change / valid segments', bad.length ? 'FAIL' : 'PASS',
    bad.length ? `${bad.length} segment(s) with out ≤ in` : `${slots.length} segments, body ${outT.toFixed(2)} s; voice is only cut, never re-timed (any atempo/rubberband in the render = FAIL by review)`);
  if (args.video && existsSync(args.video)) {
    const p = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', args.video]);
    const dur = parseFloat(String(p.stdout));
    const closing = E.closing ? (E.closing.end - E.closing.start) : 0;
    const lead = E.speech_span ? E.speech_span[0] : 0;
    const expect = outT + closing;
    const diff = dur - expect;
    add('G1b rendered length = sum of segments (+closing)', Math.abs(diff) <= (T.speed.frame_tolerance + 1) * frame + lead + 0.05 ? 'PASS' : 'FAIL',
      `file ${dur.toFixed(3)} s vs EDL ${expect.toFixed(3)} s (Δ ${diff.toFixed(3)} s) — a shorter file means the voice was sped up or a segment dropped`);
  }
}

// ---------- G2 cuts on quiet, never inside a word ----------
{
  const fails = [], warns = []; const aligned = E.words_aligned === true;
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i]; const src = E.sources?.[s.clip]; if (!src) { warns.push(`seg ${i}: no source for ${s.clip}`); continue; }
    const A = rmsDb(src); const thr = A.ref - T.cut.quiet_below_speech_db;
    for (const [edge, t] of [['in', s.in], ['out', s.out]]) {
      const lv = levelAround(A, t, T.cut.probe_ms);
      const rel = lv - A.ref;
      if (rel > T.cut.fail_above_speech_db) fails.push(`seg ${i} ${edge} @src ${t.toFixed(2)} s: ${rel.toFixed(1)} dB re speech — cut inside voiced sound (fail above ${T.cut.fail_above_speech_db})`);
      else if (lv > thr) warns.push(`seg ${i} ${edge} @src ${t.toFixed(2)} s: ${rel.toFixed(1)} dB re speech — boundary without a pause (target ≤ −${T.cut.quiet_below_speech_db}); check by ear`);
      const sw = E.source_words?.[s.clip];
      if (sw) { const g = T.cut.word_guard_ms / 1000; const hit = sw.find(w => t > w[0] + g && t < w[1] - g); if (hit) (aligned ? fails : warns).push(`seg ${i} ${edge} @src ${t.toFixed(2)} s inside ASR word «${hit[2].trim()}» [${hit[0]}–${hit[1]}]${aligned ? '' : ' (unaligned ASR — confirm by ear/energy)'}`); }
    }
  }
  add('G2 cut points on quiet, outside words', fails.length ? 'FAIL' : (warns.length ? 'WARN' : 'PASS'), fails.concat(warns).join('; ') || `all ${slots.length * 2} edges ≤ −${T.cut.quiet_below_speech_db} dB re speech`);
}

// ---------- G3 joined pauses: not choked, not dead ----------
{
  const fails = [], info = [];
  for (let i = 1; i < slots.length; i++) {
    const a = slots[i - 1], b = slots[i]; const Aa = E.sources?.[a.clip] && rmsDb(E.sources[a.clip]); const Ab = E.sources?.[b.clip] && rmsDb(E.sources[b.clip]);
    if (!Aa || !Ab) continue;
    const tail = silenceRun(Aa, a.out - 0.005, -1, Aa.ref - T.cut.quiet_below_speech_db);
    const head = silenceRun(Ab, b.in + 0.005, +1, Ab.ref - T.cut.quiet_below_speech_db);
    const j = tail + head; info.push(j.toFixed(2));
    if (j < T.pause.joined_min_s) fails.push(`join ${i} @out ${b.o.toFixed(2)} s: ${j.toFixed(2)} s (choked, < ${T.pause.joined_min_s})`);
    if (j > T.pause.joined_max_s) fails.push(`join ${i} @out ${b.o.toFixed(2)} s: ${j.toFixed(2)} s (dead air at a cut, > ${T.pause.joined_max_s})`);
  }
  add('G3 pause at every join', fails.length ? 'FAIL' : 'PASS', fails.join('; ') || `joins (s): ${info.join(', ') || '—'}`);
}

// ---------- G4 internal silences kept but bounded ----------
{
  const fails = [], kept = [];
  for (const [i, s] of slots.entries()) {
    const src = E.sources?.[s.clip]; if (!src) continue; const A = rmsDb(src); const thr = A.ref - T.cut.quiet_below_speech_db;
    let k = frameAt(s.in) + 1; const end = frameAt(s.out) - 1;
    while (k < end) { if (A.r[k] < thr) { let m = k; while (m < end && A.r[m] < thr) m++; const L = (m - k) / 100; if (L >= 0.2) kept.push(L); if (L > T.pause.internal_max_s) fails.push(`seg ${i} @src ${(k / 100).toFixed(2)} s: ${L.toFixed(2)} s silence kept (> ${T.pause.internal_max_s})`); k = m; } else k++; }
  }
  add('G4 internal pauses ≤ max (expressive pauses kept)', fails.length ? 'FAIL' : 'PASS', fails.join('; ') || `kept pauses ≥ 0.2 s: ${kept.sort((x, y) => x - y).map(x => x.toFixed(2)).join(', ') || 'none'}`);
}

// ---------- G5 segment length & cut rhythm ----------
{
  const short = slots.map((s, i) => [i, s.d]).filter(([, d]) => d < T.segment.min_s);
  add('G5 segment ≥ min length', short.length ? 'WARN' : 'PASS', short.length ? short.map(([i, d]) => `seg ${i} ${d.toFixed(2)} s`).join('; ') + ` (< ${T.segment.min_s} s — allowed only when it lands a full sentence; reviewer decides)` : `min ${Math.min(...slots.map(s => s.d)).toFixed(2)} s`);
  const cpm = outT > 0 ? (slots.length - 1) / outT * 60 : 0;
  add('G6 cuts per minute', cpm > T.rhythm.cuts_per_min_fail ? 'FAIL' : cpm > T.rhythm.cuts_per_min_warn ? 'WARN' : 'PASS',
    `${cpm.toFixed(1)}/min (warn > ${T.rhythm.cuts_per_min_warn}, fail > ${T.rhythm.cuts_per_min_fail} → re-shoot request instead of patching)`);
}

// ---------- G7 captions in sync, grouped by meaning, selective emphasis ----------
if (Array.isArray(E.captions) && E.captions.length && Array.isArray(E.words) && E.words.length) {
  const tol = T.captions.onset_tolerance_ms / 1000, fails = [], warns = [];
  for (const [i, c] of E.captions.entries()) {
    const first = c.words?.[0]; if (!first) continue;
    const near = E.words.reduce((b, w) => (Math.abs(w[0] - first[1]) < Math.abs(b[0] - first[1]) ? w : b), E.words[0]);
    if (Math.abs(c.start - near[0]) > tol) (E.words_aligned === true ? fails : warns).push(`group ${i} starts ${c.start.toFixed(2)} vs word «${near[2]}» ${near[0].toFixed(2)}`);
    const emph = c.words.filter(w => w[2]).length;
    const badC = c.words.filter(w => w[2] && ![1, 2, 3, 'danger', 'profit', 'info'].includes(w[2])); if (badC.length) fails.push(`group ${i}: emphasis "${badC[0][2]}" is not a semantic colour (danger/profit/info)`);
    const isValue = w => /[\d٠-٩]/.test(w) || /%|٪|\b(USD|EUR|GBP|AED|SAR|QAR|KWD|BHD|OMR|MUR|GEL)\b|[$€£]/i.test(w); // v2.3.2 item 5: profit / loss colours are for a financial VALUE only
    const badV = c.words.filter(w => ['danger', 'profit', 2, 3].includes(w[2]) && !isValue(w[0])); if (badV.length) fails.push(`group ${i}: «${badV[0][0]}» is a word, not a value — profit / loss colours only on a financial value; an alert or information word takes "info"`);
    if (emph > T.captions.max_emphasis_per_group) warns.push(`group ${i}: ${emph} emphasised words`);
    if (c.words.length > T.captions.max_words_per_group) warns.push(`group ${i}: ${c.words.length} words`);
    const chars = c.words.map(w => w[0]).join(' ').length; if (T.captions.max_chars_per_group && chars > T.captions.max_chars_per_group) fails.push(`group ${i}: ${chars} characters (≤ ${T.captions.max_chars_per_group} on one line — v2.3.2 item 12)`);
  }
  const lastWord = E.words[E.words.length - 1][1], lastCap = Math.max(...E.captions.map(c => c.end));
  // v2.3.2 item 10 (G7 exception): while the takeaway is on screen the caption group that repeats its text is hidden — the captions may therefore stop at takeaway.start when the remaining words are the takeaway's own text
  const norm = t => String(t).replace(/[\p{P}\p{S}]+/gu, ' ').replace(/\s+/g, ' ').trim(); const takeStart = E.takeaway && E.takeaway.text ? E.takeaway.start : Infinity; const tailWords = E.words.filter(w => w[0] >= lastCap - tol).map(w => w[2]).join(' ');
  const hiddenUnderTakeaway = E.takeaway && lastCap + tol >= takeStart && norm(tailWords) !== '' && norm(E.takeaway.text).includes(norm(tailWords));
  if (lastCap + tol < lastWord && !hiddenUnderTakeaway) fails.push(`captions stop at ${lastCap.toFixed(2)} s, speech runs to ${lastWord.toFixed(2)} s`);
  if (E.captions[0].start > (E.speech_span?.[0] ?? 0) + tol) fails.push(`first caption at ${E.captions[0].start.toFixed(2)} s, speech starts ${(E.speech_span?.[0] ?? 0).toFixed(2)} s`);
  add('G7 captions: onset ±' + T.captions.onset_tolerance_ms + ' ms, from first word, to last word (or to the takeaway when the last group repeats it)', fails.length ? 'FAIL' : (warns.length ? 'WARN' : 'PASS'), fails.concat(warns).join('; ') || `${E.captions.length} groups`);
} else add('G7 captions', 'SKIP', 'no captions/words in EDL (Clean version)');

// ---------- G8 no closing card (CEO 31 Oct 2026, every tier); takeaway readable ----------
if (E.closing && (E.closing.end - E.closing.start) > 0) add('G8 no closing card', 'FAIL', `closing card ${(E.closing.end - E.closing.start).toFixed(2)} s present — forbidden in every tier since v2.3.1; end on a short takeaway over the speaker`);
else add('G8 no closing card', 'PASS', 'no closing card');
if (E.takeaway) {
  const n = String(E.takeaway.text || '').trim().split(/\s+/).filter(Boolean).length; const L = E.takeaway.end - E.takeaway.start;
  const need = Math.max(T.takeaway.read_min_s, T.takeaway.read_base_s + T.takeaway.read_per_word_s * n);
  add('G8b takeaway readable', L + 0.01 >= need ? 'PASS' : 'FAIL', `${n} words on screen ${L.toFixed(2)} s (needs ≥ ${need.toFixed(2)} s)`);
}

// ---------- G11 (v2.3.3, CR-B / CR-C — CEO 31 Oct 2026): the role line is a self-description, never a disclosure; no licence-implying title without a documented credential; no disclosure tag in the caption ----------
{
  const DISCLOSURE_RE = /بالشراكة مع|شراكة مدفوعة|شراكة مدفوعه|(^|[\s·—\-|])إعلان([\s·—\-|]|$)|paid partnership|sponsored|#ad\b/iu; const LICENCE_TITLE_RE = /مرخص|مرخّص|مُرخّص|معتمد(?!ة? لشركة فايبر| لدى فايبر)|مُعتمد|licen[cs]ed|certified|chartered|regulated|authori[sz]ed/iu; const LICENCE_NUMBER_RE = /(ترخيص|رقم الترخيص|Licen[cs]e\s*No\.?)\s*:?\s*[A-Z]{0,3}\s?\d{5,}/iu;
  const fails = [], info = []; const lt = E.lower_third; if (lt && typeof lt === 'object') { const role = String(lt.role || ''); if (DISCLOSURE_RE.test(role)) fails.push(`role line «${role}» is a partnership disclosure — abolished on every surface (CR-B); the role line is the partner's self-description`); if (LICENCE_TITLE_RE.test(role) && lt.credential_documented !== true) fails.push(`role line «${role}» implies a licence or a regulatory status (CR-C) — allowed only with credential_documented: true (document in the partner's profile)`); if (!fails.length) info.push(`role «${role}»${lt.credential_documented ? ' (credential documented)' : ''}`); }
  if (typeof E.caption_text === 'string') { if (DISCLOSURE_RE.test(E.caption_text)) fails.push('caption carries a partnership disclosure / tag — abolished (CR-B)'); if (LICENCE_NUMBER_RE.test(E.caption_text)) fails.push('caption carries a licence wording with a number — «رقم السجل التجاري» / «Company registration number» only'); if (!fails.length) info.push('caption clean'); }
  if (lt || typeof E.caption_text === 'string') add('G11 role line = self-description, no disclosure, no licence-implying title (CR-B / CR-C)', fails.length ? 'FAIL' : 'PASS', fails.join('; ') || info.join(' · ')); else add('G11 role line / caption', 'SKIP', 'no lower_third / caption_text in EDL');
}

// ---------- G9 loudness on the rendered file ----------
if (args.video && existsSync(args.video)) {
  const p = spawnSync('ffmpeg', ['-nostats', '-i', args.video, '-vn', '-af', 'ebur128=peak=true', '-f', 'null', '-'], { maxBuffer: 1 << 26 });
  const s = String(p.stderr); const I = parseFloat((s.match(/I:\s+(-?[\d.]+) LUFS/g) || []).pop()?.match(/-?[\d.]+/)[0]);
  const TP = parseFloat((s.match(/Peak:\s+(-?[\d.]+) dBFS/g) || []).pop()?.match(/-?[\d.]+/)[0]);
  const ok = I >= T.loudness.lufs_min && I <= T.loudness.lufs_max && TP <= T.loudness.tp_max;
  add('G9 loudness', ok ? 'PASS' : 'FAIL', `I ${I} LUFS (need ${T.loudness.lufs_min}…${T.loudness.lufs_max}), TP ${TP} dBTP (need ≤ ${T.loudness.tp_max}) — single-pass loudnorm misses by 0.4–0.9 LU: use two-pass`);
  // dead air inside the speech span of the FINAL mix
  const A = rmsDb(args.video), thr = A.ref - 35; const [s0, s1] = E.speech_span || [0, outT]; const long = [];
  let k = frameAt(s0); while (k < frameAt(s1)) { if (A.r[k] < thr) { let m = k; while (m < frameAt(s1) && A.r[m] < thr) m++; const L = (m - k) / 100; if (L > T.pause.internal_max_s) long.push(`${(k / 100).toFixed(2)} s (${L.toFixed(2)} s)`); k = m; } else k++; }
  add('G10 no dead air in the final mix', long.length ? 'FAIL' : 'PASS', long.join('; ') || `no silence > ${T.pause.internal_max_s} s between ${s0}–${s1} s`);
} else add('G9/G10 loudness & dead air', 'SKIP', 'no --video given');

// ---------- report ----------
const fail = results.some(r => r.status === 'FAIL');
const md = [`# Person-led edit gate — ${fail ? 'FAIL' : 'PASS'}`, '', `EDL: ${args.edl}${args.video ? ` · video: ${args.video}` : ''}`, '', '| Gate | Result | Detail |', '|---|---|---|',
  ...results.map(r => `| ${r.id} | ${r.status} | ${String(r.detail).replace(/\|/g, '/')} |`), ''].join('\n');
if (args.out) writeFileSync(args.out, md); console.log(md);
process.exit(fail ? 1 : 0);
