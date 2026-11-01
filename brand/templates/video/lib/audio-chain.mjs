// Fiper Brand v2.3.0 — the CEO-approved broadcast audio chain (15 Oct 2026) as ffmpeg filter strings. Values: ../audio-mix.json. Requires a full ffmpeg (loudnorm, ebur128, acompressor, alimiter, equalizer).
import fs from 'node:fs'; import path from 'node:path';
export const MIX = JSON.parse(fs.readFileSync(path.resolve(path.dirname(new URL(import.meta.url).pathname), '../audio-mix.json'), 'utf8'));
const v = MIX.values;
/** Voice-over clean-up: highpass 80 Hz → compressor −22 dB / 3:1 / 6 ms / 100 ms → +1.5 dB @ 4.5 kHz → loudnorm −16 LUFS, TP −2, LRA 7 */
export const voChain = () => `highpass=f=${v.vo.highpass_hz},acompressor=threshold=${v.vo.comp_threshold_db}dB:ratio=${v.vo.comp_ratio}:attack=${v.vo.comp_attack_ms}:release=${v.vo.comp_release_ms},equalizer=f=${v.vo.eq_hz}:t=q:w=1:g=${v.vo.eq_gain_db},loudnorm=I=${v.vo.lufs}:TP=${v.vo.tp}:LRA=${v.vo.lra}`;
/** Music bed: loudnorm −20 LUFS then −1…−2 dB trim */
export const musicChain = (trimDb = v.music.trim_db) => `loudnorm=I=${v.music.lufs}:TP=${v.music.tp}:LRA=${v.music.lra},volume=${trimDb}dB`;
/** Duck −9…−12 dB across the WHOLE speech span (first word → last word) with 0.3 s ramps; never between sentences. spans = [[t0,t1],…] seconds */
export function duckExpr(spans, depthDb = v.duck.depth_db, ramp = v.duck.ramp_s) {
  const g = Math.pow(10, depthDb / 20); // linear gain under speech
  const parts = spans.map(([a, b]) => `if(between(t,${(a - ramp).toFixed(3)},${a.toFixed(3)}),1-(1-${g})*((t-${(a - ramp).toFixed(3)})/${ramp}),if(between(t,${a.toFixed(3)},${b.toFixed(3)}),${g},if(between(t,${b.toFixed(3)},${(b + ramp).toFixed(3)}),${g}+(1-${g})*((t-${b.toFixed(3)})/${ramp}),1)))`);
  return `volume='${parts.length ? parts.reduce((acc, p) => `min(${acc},${p})`) : '1'}':eval=frame`;
}
/** Final bus: alimiter 0.89 → loudnorm −14 LUFS, TP −1.5 (verify with ebur128: −14.0…−14.2) */
export const finalChain = () => `alimiter=limit=${v.final.limiter}:level=false,loudnorm=I=${v.final.lufs}:TP=${v.final.tp}:LRA=${v.final.lra}`;
/** SFX gains */
export const sfxGain = kind => `${v.sfx[kind] ?? -14}dB`;
/** Full mix command (strings) — vo + music (+ optional sfx) → out.m4a / out.opus; spans mark speech */
export function mixArgs({ vo, music, spans = [], out, sfx = [] }) {
  const inputs = ['-i', vo, '-i', music, ...sfx.flatMap(s => ['-itsoffset', String(s.at), '-i', s.file])];
  const sfxLabels = sfx.map((s, i) => `[${i + 2}:a]volume=${sfxGain(s.kind)}[s${i}]`).join(';');
  const fc = `[0:a]${voChain()}[vo];[1:a]${musicChain()},${duckExpr(spans)}[mu];${sfxLabels ? sfxLabels + ';' : ''}[vo][mu]${sfx.map((_, i) => `[s${i}]`).join('')}amix=inputs=${2 + sfx.length}:normalize=0,${finalChain()}[out]`;
  return ['-y', ...inputs, '-filter_complex', fc, '-map', '[out]', ...(out.endsWith('.opus') || out.endsWith('.webm') ? ['-c:a', 'libopus', '-b:a', '160k'] : ['-c:a', 'aac', '-b:a', '256k']), out];
}
