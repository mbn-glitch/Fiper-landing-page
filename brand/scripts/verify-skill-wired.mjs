#!/usr/bin/env node
// verify-skill-wired.mjs — proves a consumer repo is wired to the Fiper identity reference (run from the repo root).
// Checks: .claude/skills/fiper-brand/SKILL.md present · CLAUDE.md carries the mandate sentence · brand/tokens.css is referenced by an entry HTML/CSS/TS file · brand/README.md and tokens.json present. Exit 1 on failure.
import fs from 'node:fs'; import path from 'node:path';
const MANDATE = 'Fiper Brand Identity System';
const checks = [];
const ok = (name, pass, detail) => checks.push({ name, pass, detail });
ok('skill present', fs.existsSync('.claude/skills/fiper-brand/SKILL.md'), '.claude/skills/fiper-brand/SKILL.md');
ok('brand folder', fs.existsSync('brand/tokens.json') && fs.existsSync('brand/tokens.css') && fs.existsSync('brand/README.md'), 'brand/tokens.json + tokens.css + README.md');
const claude = fs.existsSync('CLAUDE.md') ? fs.readFileSync('CLAUDE.md', 'utf8') : '';
ok('CLAUDE.md mandate', claude.includes(MANDATE) && /verify-identity\.mjs/.test(claude), `CLAUDE.md mentions "${MANDATE}" and verify-identity.mjs`);
const roots = ['index.html', 'apps', 'app', 'src', 'public'].filter(p => fs.existsSync(p)); const files = [];
const list = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (/node_modules|dist|\.git/.test(p)) continue; if (e.isDirectory()) list(p); else if (/\.(html|css|ts|tsx|js|jsx|astro|vue)$/.test(e.name)) files.push(p); } };
for (const r of roots) fs.statSync(r).isDirectory() ? list(r) : files.push(r);
const ref = files.find(f => /tokens\.css/.test(fs.readFileSync(f, 'utf8')));
ok('tokens.css referenced', !!ref, ref || 'no entry file references brand/tokens.css');
const fontsRef = files.find(f => /fonts\.css/.test(fs.readFileSync(f, 'utf8')));
ok('fonts.css referenced', !!fontsRef, fontsRef || 'no entry file references brand/fonts/fonts.css');
for (const c of checks) console.log(`${c.pass ? 'PASS' : 'FAIL'}  ${c.name.padEnd(22)} ${c.detail}`);
const fails = checks.filter(c => !c.pass).length; console.log(fails ? `verify-skill-wired: ${fails} FAIL` : 'verify-skill-wired: PASS'); process.exit(fails ? 1 : 0);
