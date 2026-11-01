// Gate (v2.3.0, shipped in brand/scripts since v2.3.1): integrated loudness −14.0…−14.2 LUFS and true peak ≤ −1.5 dBTP on every delivered film (ffmpeg ebur128). usage: node scripts/check-audio-loudness.mjs file1 [file2 …]
import fs from 'node:fs'; import { spawnSync } from 'node:child_process';
const MIX = JSON.parse(fs.readFileSync('brand/templates/video/audio-mix.json', 'utf8')).values.verify;
const files = process.argv.slice(2); if (!files.length) { console.error('usage: node scripts/check-audio-loudness.mjs <media…>'); process.exit(2); }
let fail = 0; const rows = [];
for (const f of files) {
  const r = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', f, '-map', '0:a:0', '-af', 'ebur128=peak=true', '-f', 'null', '-'], { encoding: 'utf8' });
  const err = (r.stderr || ''); const I = +(err.match(/\bI:\s*(-?[\d.]+) LUFS/g)?.pop()?.match(/(-?[\d.]+)/)[1] ?? NaN); const tp = +(err.match(/Peak:\s*(-?[\d.]+) dBFS/g)?.pop()?.match(/(-?[\d.]+)/)[1] ?? NaN); const lra = +(err.match(/LRA:\s*(-?[\d.]+) LU/g)?.pop()?.match(/(-?[\d.]+)/)[1] ?? NaN);
  const noAudio = /does not contain any stream|Stream map '0:a:0' matches no streams/.test(err);
  const pass = !noAudio && I >= MIX.lufs_min && I <= MIX.lufs_max && tp <= MIX.tp_max;
  rows.push({ f, I, tp, lra, pass, noAudio }); console.log(`${pass ? 'PASS' : 'FAIL'} ${f} — ${noAudio ? 'no audio stream' : `I ${I} LUFS (need ${MIX.lufs_min}…${MIX.lufs_max}) · TP ${tp} dBTP (≤ ${MIX.tp_max}) · LRA ${lra}`}`); if (!pass) fail++;
}
fs.mkdirSync('dist/checks', { recursive: true }); fs.writeFileSync('dist/checks/audio-loudness.json', JSON.stringify(rows, null, 1));
process.exit(fail ? 1 : 0);
