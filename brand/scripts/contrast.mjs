#!/usr/bin/env node
// contrast.mjs — WCAG 2.x contrast for every text/ground pair of the Fiper identity, read from brand/tokens.json (no hard-coded colours).
// Run from the folder that contains brand/ (repo root or the unzipped package parent): node brand/scripts/contrast.mjs
// Output: ./checks/contrast.json (+ console table). Override with CONTRAST_OUT=path/to/contrast.json. Exit 1 if a body-text pair is below 4.5:1.
import fs from 'node:fs'; import path from 'node:path';
const BRAND = process.env.FIPER_BRAND_DIR || (fs.existsSync('brand/tokens.json') ? 'brand' : path.join(path.dirname(new URL(import.meta.url).pathname), '..'));
const T = JSON.parse(fs.readFileSync(path.join(BRAND, 'tokens.json'), 'utf8'));
const get = p => p.split('.').reduce((o, k) => o?.[k], T);
const resolve = v => typeof v === 'string' ? v.replace(/\{([^}]+)\}/g, (_, p) => { const n = get(p); if (!n) throw new Error('unknown token ' + p); return resolve(n.$value); }) : v;
const val = p => { const n = get(p); if (!n || !('$value' in n)) throw new Error('unknown token ' + p); return resolve(n.$value); };
const status = p => get(p)?.$extensions?.['fiper.status'] || 'alias';
const parse = c => { c = String(c).trim(); let m; if ((m = c.match(/^#([0-9a-f]{6})$/i))) return { rgb: [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16) / 255), a: 1 }; if ((m = c.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))) return { rgb: [m[1], m[2], m[3]].map(x => +x / 255), a: m[4] === undefined ? 1 : +m[4] }; throw new Error('cannot parse colour ' + c); };
const blend = (fg, bg) => fg.rgb.map((c, i) => c * fg.a + bg.rgb[i] * (1 - fg.a));
const lin = c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
const L = rgb => 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
const ratio = (f, b) => { const a = L(f), c = L(b); return (Math.max(a, c) + 0.05) / (Math.min(a, c) + 0.05); };
const hexOf = rgb => '#' + rgb.map(c => Math.round(c * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
const C = 'semantic.color.';
// [theme, foreground token, ground token, kind] — kind: text | large | nontext | forbidden
const PAIRS = [
  ['dark', C + 'text.primary', C + 'ground.bg', 'text'], ['dark', C + 'text.primary', C + 'ground.coal', 'text'], ['dark', C + 'text.primary', C + 'ground.panel', 'text'],
  ['dark', C + 'text.muted', C + 'ground.bg', 'text'], ['dark', C + 'text.muted', C + 'ground.panel', 'text'], ['dark', C + 'text.label', C + 'ground.bg', 'text'],
  ['dark', C + 'brand.red', C + 'ground.bg', 'large'], ['dark', C + 'brand.red', C + 'ground.panel', 'large'],
  ['dark', C + 'text.on-brand', C + 'brand.red', 'text'], ['dark', C + 'text.on-brand', C + 'brand.red-gradient-end', 'text'], ['dark', C + 'text.on-brand', C + 'action.primary-pressed', 'text'], ['dark', C + 'text.icon-on-brand', C + 'brand.red', 'nontext'],
  ['dark', C + 'text.primary', C + 'brand.red', 'forbidden'],
  ['dark', C + 'brand.ember', C + 'ground.bg', 'text'], ['dark', C + 'action.focus-ring', C + 'ground.bg', 'nontext'], ['dark', C + 'action.focus-ring', C + 'ground.panel', 'nontext'],
  ['dark', C + 'finance.gain', C + 'ground.bg', 'text'], ['dark', C + 'finance.gain', C + 'ground.panel', 'text'], ['dark', C + 'finance.loss', C + 'ground.bg', 'text'], ['dark', C + 'finance.loss', C + 'ground.panel', 'text'], ['dark', C + 'finance.pending', C + 'ground.bg', 'text'],
  ['dark', C + 'state.success', C + 'ground.bg', 'text'], ['dark', C + 'state.danger', C + 'ground.bg', 'text'], ['dark', C + 'state.warning', C + 'ground.bg', 'text'], ['dark', C + 'state.info', C + 'ground.bg', 'text'],
  ['dark', C + 'text.on-success', C + 'state.success', 'text'], ['dark', C + 'text.on-danger', C + 'state.danger', 'text'],
  ['dark', C + 'action.disabled-fg', C + 'ground.bg', 'exempt'],
  ['dark', C + 'line.input', C + 'ground.bg', 'nontext'], ['dark', C + 'line.input', C + 'ground.panel', 'nontext'], ['dark', C + 'line.strong', C + 'ground.bg', 'decorative'], ['dark', C + 'line.ash', C + 'ground.bg', 'decorative'],
  ['light', C + 'light.text', C + 'light.bg', 'text'], ['light', C + 'light.text', C + 'light.panel', 'text'], ['light', C + 'light.muted', C + 'light.bg', 'text'], ['light', C + 'light.muted', C + 'light.panel', 'text'],
  ['light', C + 'light.red-text', C + 'light.bg', 'text'], ['light', C + 'brand.red', C + 'light.bg', 'large'], ['light', C + 'text.on-brand', C + 'brand.red', 'text'],
  ['light', C + 'light.success', C + 'light.bg', 'text'], ['light', C + 'light.danger', C + 'light.bg', 'text'], ['light', C + 'light.warning', C + 'light.bg', 'text'], ['light', C + 'light.info', C + 'light.bg', 'text'],
  ['light', C + 'light.danger', C + 'light.panel', 'text'], ['light', C + 'light.success', C + 'light.panel', 'text'], ['light', C + 'light.label', C + 'light.bg', 'text'], ['light', C + 'light.text', C + 'light.coal', 'text'], ['light', C + 'light.muted', C + 'light.coal', 'text'], ['light', C + 'light.focus-ring', C + 'light.bg', 'nontext'], ['light', C + 'light.divider', C + 'light.bg', 'decorative'], ['light', C + 'text.on-brand', C + 'light.danger', 'text'],
  ['dark', C + 'line.divider', C + 'ground.bg', 'decorative'], ['dark', C + 'finance.loss', C + 'ground.coal', 'text'], ['dark', C + 'text.on-danger', C + 'finance.loss', 'text'],
  ['light', C + 'light.ash', C + 'light.bg', 'decorative'], ['light', C + 'light.line-strong', C + 'light.bg', 'decorative'], ['light', C + 'light.line-input', C + 'light.bg', 'nontext'], ['light', C + 'light.line-input', C + 'light.panel', 'nontext'],
];
const THRESH = { text: 4.5, large: 3, nontext: 3, forbidden: 4.5, exempt: 0, decorative: 0 };
const rows = []; let fail = 0;
for (const [theme, fgT, bgT, kind] of PAIRS) {
  const bg = parse(val(bgT)); const bgRgb = bg.a < 1 ? blend(bg, parse(val(theme === 'light' ? C + 'light.bg' : C + 'ground.bg'))) : bg.rgb;
  const fg = parse(val(fgT)); const fgRgb = fg.a < 1 ? blend(fg, { rgb: bgRgb }) : fg.rgb;
  const r = +ratio(fgRgb, bgRgb).toFixed(2); const need = THRESH[kind]; const pass = kind === 'decorative' || kind === 'exempt' ? true : kind === 'forbidden' ? false : r >= need;
  const level = r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA-large' : 'FAIL';
  const label = kind === 'forbidden' ? 'FORBIDDEN PAIR (documented)' : kind === 'exempt' ? 'exempt (disabled)' : kind === 'decorative' ? 'decorative (no requirement)' : pass ? 'PASS' : 'FAIL';
  if (!pass && kind !== 'forbidden') fail++;
  rows.push({ theme, fg: fgT.replace(C, ''), bg: bgT.replace(C, ''), fgHex: val(fgT), bgHex: val(bgT), fgEff: hexOf(fgRgb), bgEff: hexOf(bgRgb), status: status(fgT) === 'alias' ? status(bgT) : status(fgT), kind, need, ratio: r, level, result: label });
}
const outPath = process.env.CONTRAST_OUT || path.join('checks', 'contrast.json'); fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ generated: new Date().toISOString().slice(0, 10), source: path.join(BRAND, 'tokens.json'), rows }, null, 1));
for (const r of rows) console.log(r.theme.padEnd(6), (r.fg + ' / ' + r.bg).padEnd(48), r.fgEff.padEnd(8), r.bgEff.padEnd(8), String(r.ratio).padStart(6), r.level.padEnd(9), r.result);
console.log(`contrast: ${rows.length} pairs → ${outPath} · ${fail ? 'FAIL (' + fail + ' below threshold)' : 'PASS (all required pairs meet their threshold; forbidden/exempt/decorative pairs documented)'}`);
process.exit(fail ? 1 : 0);
