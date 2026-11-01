// tokens.json (DTCG 2025.10, layered primitive → semantic → component) → brand/tokens.css + brand/tailwind.preset.js
// Run from the folder that contains brand/ (e.g. the repo root or the unzipped package parent): node brand/scripts/build-tokens.mjs
// CSS variable names: semantic.<group>.<path> → --fp-<path without 'color'> ; component.<x> → --fp-c-<x> ; primitive → --fp-p-<x>
// Tokens flagged $extensions["fiper.observed-only"] (the site's button glow, the .core chip tracking) are documentation only:
//   emitted as --fp-observed-* variables in tokens.css and EXCLUDED from the Tailwind preset. Deprecated primitives are never emitted.
import fs from 'node:fs'; import path from 'node:path';
const BRAND = fs.existsSync('brand/tokens.json') ? 'brand' : path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const T = JSON.parse(fs.readFileSync(path.join(BRAND,'tokens.json'),'utf8'));
const get = p => p.split('.').reduce((o,k)=>o?.[k], T);
const resolveRef = v => typeof v==='string' ? v.replace(/\{([^}]+)\}/g,(_,p)=>{const n=get(p); if(!n||!('$value' in n)) throw new Error('unresolved reference '+p); return resolveRef(n.$value);}) : v;
const flat = (node, path=[], out=[]) => { for (const [k,v] of Object.entries(node)) { if (k.startsWith('$')) continue; if (v && typeof v==='object' && '$value' in v) out.push({path:[...path,k], value:v.$value, raw:v}); else if (v && typeof v==='object') flat(v,[...path,k],out);} return out; };
const all = flat(T).filter(t => t.path[0] !== 'video'); // v2.3.1 (kept in v2.3.2): the `video` layer (video.person_edit — edit-engine parameters, arrays/objects/booleans) is not CSS and is never emitted; read it from tokens.json (scripts/check-partner-edit.mjs --tokens)
const status = t => t.raw.$extensions?.['fiper.status'] || 'alias';
const observedOnly = t => !!t.raw.$extensions?.['fiper.observed-only'];
const css = v => Array.isArray(v) ? (typeof v[0]==='number' ? `cubic-bezier(${v.join(',')})` : v.map(f=>/\s/.test(f)?`'${f}'`:f).join(', ')) : v;
// v2.3.4 (invoices CR 2 — FI7 «Unknown word»): a TEXTUAL token value is emitted as a CSS <string> — wrapped in double quotes, inner quotes and backslashes escaped — unless every token of it is a number / dimension / percentage / hex colour / CSS function / CSS keyword
//   (none, auto, ease-out, linear …) or a font-family list (multi-word names single-quoted). Unquoted prose with «;» (tokens.css --fp-c-risk-line-placement) terminated the declaration early and broke PostCSS / Next; verify-tokens now parses tokens.css with the strict PostCSS parser.
const CSS_KEYWORDS = new Set(['none','auto','normal','inherit','initial','unset','revert','transparent','currentcolor','linear','ease','ease-in','ease-out','ease-in-out','step-start','step-end','solid','dashed','dotted','sans-serif','serif','monospace','system-ui','tabular-nums','lining-nums','ltr','rtl','nowrap','bold','italic','uppercase','lowercase','capitalize']);
const GENERIC_FAMILY = /^(sans-serif|serif|monospace|system-ui|ui-sans-serif|ui-monospace|cursive|fantasy)$/i;
const splitTokens = v => { const out=[]; let cur='', depth=0, q=null; for (const ch of v) { if (q) { cur+=ch; if (ch===q) q=null; continue; } if (ch==="'"||ch==='"') { q=ch; cur+=ch; continue; } if (ch==='(') depth++; if (ch===')') depth--; if (depth===0 && (ch===' '||ch===',')) { if (cur) out.push(cur); cur=''; continue; } cur+=ch; } if (cur) out.push(cur); return out; };
const cssSafeToken = t => /^[+-]?(\d+\.?\d*|\.\d+)([a-zA-Z%]*)$/.test(t) || /^#[0-9a-fA-F]{3,8}$/.test(t) || /^-?[a-zA-Z][a-zA-Z0-9-]*\(.*\)$/.test(t) || /^'[^']*'$/.test(t) || CSS_KEYWORDS.has(t.toLowerCase());
const isFontList = v => { const parts=v.split(',').map(x=>x.trim()); return parts.length>1 && parts.every(x=>/^[A-Za-z][A-Za-z0-9 -]*$/.test(x)) && GENERIC_FAMILY.test(parts.at(-1)); };
export const cssString = s => '"' + s.replace(/\\/g,'\\\\').replace(/"/g,'\\"') + '"';
export const cssDecl = v => { if (typeof v!=='string') return css(v); if (/[;"\\]/.test(v)) return cssString(v); if (isFontList(v)) return v.split(',').map(x=>x.trim()).map(f=>/\s/.test(f)?`'${f}'`:f).join(', '); return splitTokens(v).every(cssSafeToken) ? v : cssString(v); };
export const varName = p => { const [layer,...rest]=p; if (layer==='primitive') return '--fp-p-'+rest.slice(1).join('-'); if (layer==='component') return '--fp-c-'+rest.join('-'); const r = rest[0]==='color' ? rest.slice(1) : rest[0]==='elevation' ? ['z',...rest.slice(1)] : rest; return '--fp-'+r.join('-'); };
const nameOf = t => observedOnly(t) ? varName(t.path).replace(/^--fp-/,'--fp-observed-') : varName(t.path);
let out = `/* Fiper Brand Identity System v2.3.4 — tokens.css (GENERATED from brand/tokens.json, DTCG 2025.10; do not edit by hand)\n   Layers: --fp-p-* primitives · --fp-* semantic roles · --fp-c-* component tokens · --fp-observed-* = site observations kept for documentation, never to be used (verify-identity whitelists only these lines).\n   Dark (charcoal) is the DEFAULT for every app and site; the light theme is APPROVED as OPTIONAL (CEO decision 30 Oct 2026, decision item 3): <html data-theme="light"> — a complete semantic set, user/system toggle; marketing surfaces stay charcoal.\n   Status of every value (approved / observed / proposed / deprecated): tokens.json $extensions.fiper.status\n   v2.3.4: textual values (file names, placements, fixed wordings) are CSS <string>s in double quotes — a consumer that reads one from CSS strips the quotes (or reads tokens.json directly); the file parses with the strict PostCSS parser (gate: verify-tokens). */\n:root{\n`;
const emit = t => `  ${nameOf(t)}: ${cssDecl(resolveRef(t.value))};${status(t)==='proposed'?' /* PROPOSED */':observedOnly(t)?' /* OBSERVED ONLY — not applied */':''}\n`;
const usable = all.filter(t => status(t)!=='deprecated' && t.path[1]!=='deprecated');
out += '  /* primitives */\n'; for (const t of usable.filter(t=>t.path[0]==='primitive')) out += emit(t);
out += '  /* semantic */\n'; for (const t of usable.filter(t=>t.path[0]==='semantic' && t.path[2]!=='light')) out += emit(t);
out += '  /* component */\n'; for (const t of usable.filter(t=>t.path[0]==='component')) out += emit(t);
out += `  /* short aliases used by components.css */\n  --fp-bg: var(--fp-ground-bg); --fp-surface: var(--fp-ground-panel); --fp-surface-2: var(--fp-ground-coal);\n  --fp-line: var(--fp-line-ash); --fp-fg: var(--fp-text-primary); --fp-fg-muted: var(--fp-text-muted);\n  --fp-primary: var(--fp-brand-red); --fp-primary-fg: var(--fp-text-on-brand);\n  --fp-red-as-text: var(--fp-brand-red);\n  --fp-font-ui: var(--fp-font-family-body); --fp-font-heading: var(--fp-font-family-display);\n  color-scheme: dark;\n}\n`;
out += `:root[dir="rtl"], :root[lang="ar"], [lang="ar"]{ --fp-font-ui: var(--fp-font-family-arabic); --fp-font-heading: var(--fp-font-family-arabic); }\n`;
out += `/* APPROVED OPTIONAL light theme — decision item 3 (CEO 30 Oct 2026): dark is the default, this block is the complete light set for apps (and the paper ground of documents) */\n:root[data-theme="light"]{\n`;
const L = T.semantic.color.light; const map = {bg:'ground-bg',coal:'ground-coal',panel:'ground-panel',frame:'ground-frame',chrome:'ground-chrome',bezel:'ground-bezel',ash:'line-ash','line-strong':'line-strong','line-frame':'line-frame','line-brand':'line-brand','line-input':'line-input',divider:'line-divider',text:'text-primary',muted:'text-muted',label:'text-label',risk:'text-risk',disclaimer:'text-disclaimer',selection:'text-selection','focus-ring':'action-focus-ring','disabled-fg':'action-disabled-fg','disabled-bg':'action-disabled-bg',success:'state-success',danger:'state-danger',warning:'state-warning',info:'state-info','success-wash':'state-success-wash','danger-wash':'state-danger-wash','warning-wash':'state-warning-wash','info-wash':'state-info-wash','chart-grid':'chart-grid','chart-axis':'chart-axis','chart-benchmark':'chart-benchmark','chart-crosshair':'chart-crosshair','chart-area-fill':'chart-area-fill'};
Object.assign(map,{neutral:'finance-neutral','chart-series-2':'chart-series-2','chart-series-3':'chart-series-3','chart-series-4':'chart-series-4','chart-series-5':'chart-series-5','chart-series-6':'chart-series-6'});
for (const [k,v] of Object.entries(L)) { if (k.startsWith('$')) continue; if (map[k]) out += `  --fp-${map[k]}: ${resolveRef(v.$value)};\n`; }
// component tokens that alias a semantic colour re-resolve to the light value (so --fp-c-* colours follow the theme)
{ const inv = {}; for (const [k,v] of Object.entries(map)) inv['semantic.color.'+v.replace(/^(ground|line|text|action|state|chart|finance)-/,'$1.')] = k; for (const t of usable.filter(t=>t.path[0]==='component' && typeof t.value==='string' && /^\{semantic\.color\./.test(t.value))) { const ref = t.value.slice(1,-1); const lk = inv[ref]; if (lk && L[lk]) out += `  ${varName(t.path)}: ${resolveRef(L[lk].$value)};\n`; } }
out += `  --fp-red-as-text: ${resolveRef(L['red-text'].$value)};\n  --fp-finance-gain: ${resolveRef(L.success.$value)}; --fp-finance-loss: ${resolveRef(L.danger.$value)}; --fp-finance-pending: ${resolveRef(L.warning.$value)};\n  --fp-chart-candle-up: ${resolveRef(L.success.$value)}; --fp-chart-candle-down: ${resolveRef(L.danger.$value)};\n  --fp-shadow-overlay: 0 22px 70px rgba(18,13,14,0.18);\n  --fp-c-input-fill: #FFFFFF; --fp-c-table-header-fill: var(--fp-ground-frame); --fp-c-toast-fill: #FFFFFF; --fp-c-sheet-fill: #FFFFFF; --fp-c-sheet-scrim: ${resolveRef(L.scrim.$value)}; --fp-c-chart-background: #FFFFFF; --fp-c-card-fill: #FFFFFF; --fp-c-header-fill: ${resolveRef(L.chrome.$value)}; --fp-c-button-primary-shadow: none;\n  color-scheme: light;\n}\n`;
out += `/* base */\nhtml{background:var(--fp-bg);color:var(--fp-fg);font-family:var(--fp-font-ui);line-height:var(--fp-font-lineHeight-body);-webkit-font-smoothing:antialiased;font-synthesis:none}\n[lang="ar"]{line-height:var(--fp-font-lineHeight-arabic-body);letter-spacing:0}\n.fp-num,[data-num]{font-family:var(--fp-font-family-mono);font-variant-numeric:tabular-nums lining-nums;direction:ltr;unicode-bidi:isolate}\n::selection{background:var(--fp-brand-selection-bg);color:var(--fp-text-selection)}\n:focus-visible{outline:2px solid var(--fp-action-focus-ring);outline-offset:2px}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition-duration:1ms!important}}\n/* v2.0 — unbreakable numeric units inside Arabic text: amount+currency, sign+number+percent, date parts */\n.fp-unit,.unit{display:inline-block;white-space:nowrap;direction:ltr;unicode-bidi:isolate;font-family:var(--fp-font-family-mono);font-variant-numeric:tabular-nums}\n.fp-num{white-space:nowrap}\n`;
fs.writeFileSync(path.join(BRAND,'tokens.css'), out);
// ── Tailwind preset: every value DERIVED from tokens.json (observed-only tokens excluded)
const sem = (group) => { const o={}; for (const t of usable.filter(t=>t.path[0]==='semantic' && t.path.slice(1,group.length+1).join('.')===group.join('.') && !observedOnly(t))) o[t.path.slice(group.length+1).join('-')] = css(resolveRef(t.value)); return o; };
const col = {}; for (const t of usable.filter(t=>t.path[0]==='semantic' && t.path[1]==='color' && t.path[2]!=='light' && !observedOnly(t))) col[t.path.slice(2).join('-')]=`var(${varName(t.path)})`;
Object.assign(col, { bg:'var(--fp-bg)', surface:'var(--fp-surface)', 'surface-2':'var(--fp-surface-2)', line:'var(--fp-line)', fg:'var(--fp-fg)', 'fg-muted':'var(--fp-fg-muted)', primary:'var(--fp-primary)', 'primary-fg':'var(--fp-primary-fg)', gain:'var(--fp-finance-gain)', loss:'var(--fp-finance-loss)', neutral:'var(--fp-finance-neutral)', pending:'var(--fp-finance-pending)' });
const fam = {}; for (const [k,v] of Object.entries(T.semantic.font.family)) { if (k.startsWith('$') || v.$extensions?.['fiper.status']==='deprecated') continue; fam[k]=v.$value; } fam.ui=['var(--fp-font-ui)'];
const shadow = { primary: resolveRef(T.component.button.primary.shadow.$value), 'primary-hover': resolveRef(T.component.button.primary['shadow-hover'].$value), overlay: 'var(--fp-shadow-overlay)', none: 'none' };
const sizes = sem(['size']); const screens = {}; for (const [k,v] of Object.entries(sizes)) if (k.startsWith('bp-')) screens[k.slice(3)] = v; const spacing = sem(['space']); for (const [k,v] of Object.entries(sizes)) if (!k.startsWith('bp-')) spacing[k]=v;
const dur = sem(['motion','duration']); const ease = {}; for (const [k,v] of Object.entries(T.semantic.motion.easing)) { if (k.startsWith('$')) continue; ease[k] = css(v.$value); }
const z = {}; for (const [k,v] of Object.entries(sem(['elevation']))) if (k!=='base') z[k]=String(v);
const J = o => JSON.stringify(o, null, 2).replace(/"([a-zA-Z0-9-]+)":/g, "'$1':");
const tw = `// Fiper Brand Identity System v2.3.4 — tailwind.preset.js (GENERATED from brand/tokens.json by scripts/build-tokens.mjs; do not edit)
// Every value below is derived from tokens.json. Observed-only site treatments (button glow, .core chip tracking) are intentionally absent.
// usage (Tailwind 3.4 / 4.x compat): module.exports = { presets: [require('./brand/tailwind.preset.js')], content: [...] } — requires brand/tokens.css loaded.
module.exports = {
  theme: {
    extend: {
      colors: ${J(col)},
      fontFamily: ${J(fam)},
      fontSize: ${J(sem(['font','size']))},
      fontWeight: ${J(sem(['font','weight']))},
      lineHeight: ${J(Object.fromEntries(Object.entries(sem(['font','lineHeight'])).map(([k,v])=>[k,String(v)])))},
      letterSpacing: ${J(sem(['font','letterSpacing']))},
      spacing: ${J(spacing)},
      borderRadius: ${J(sem(['radius']))},
      boxShadow: ${J(shadow)},
      zIndex: ${J(z)},
      transitionDuration: ${J(dur)},
      transitionTimingFunction: ${J(ease)},
      screens: ${J(screens)},
      backgroundImage: { 'btn-primary': ${JSON.stringify(resolveRef(T.component.button.primary.fill.$value).replace(/#DC2626/,'var(--fp-brand-red)').replace(/#A31212/,'var(--fp-brand-red-gradient-end)'))} }
    }
  }
};
`;
fs.writeFileSync(path.join(BRAND,'tailwind.preset.js'), tw);
console.log('tokens.css lines', out.split('\n').length, '| tokens', all.length, '| preset: colours', Object.keys(col).length, '| shadows', JSON.stringify(shadow), '| letterSpacing', JSON.stringify(sem(['font','letterSpacing'])));
