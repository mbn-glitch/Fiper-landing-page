#!/usr/bin/env node
/**
 * Identity gates for fipercard.com (fiper-brand v2.3.4), run against the built site served by `vite preview`:
 *   1. check-risk-line — `/` and `/help-center`, English and Arabic: the fixed line «الاستثمار ينطوي على مخاطر» /
 *      "Investing involves risk" is in the rendered page, never red; no Google Fonts request; no old logo file;
 *      the official lockup present; the body font is the package family.
 *   2. check-rendered-contrast — every visible text node ≥ 4.5:1 (3:1 for large text) against its effective background,
 *      at 390 and 1360 (the site is a marketing surface: charcoal only, no light theme).
 *   node scripts/gates/check-identity.mjs [--base http://host:port]   (without --base it builds nothing: it starts
 *   `vite preview` on a free port over the existing dist/ and stops it at the end)
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import { chromium } from "playwright";

const argv = process.argv.slice(2);
const opt = (k, d) => (argv.includes(k) ? argv[argv.indexOf(k) + 1] : d);
const AR = "الاستثمار ينطوي على مخاطر";
const EN = "Investing involves risk";

async function freePort() {
  return new Promise((res) => {
    const s = net.createServer();
    s.listen(0, () => {
      const p = s.address().port;
      s.close(() => res(p));
    });
  });
}

let base = opt("--base", null);
let server = null;
if (!base) {
  if (!fs.existsSync("dist/index.html")) {
    console.error("dist/index.html missing — run `npm run build` first");
    process.exit(2);
  }
  const port = await freePort();
  server = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], { stdio: "ignore" });
  base = `http://localhost:${port}`;
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(base + "/");
      if (r.ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
}

const routes = ["/", "/help-center"];
const langs = ["en", "ar"];
const widths = [390, 1360];
const results = [];
const ok = (name, pass, ev) => {
  results.push({ name, pass, ev });
  console.log(`${pass ? "PASS" : "FAIL"} ${name} — ${ev}`);
};

const browser = await chromium.launch();
try {
  for (const lang of langs) {
    for (const route of routes) {
      for (const width of widths) {
        const ctx = await browser.newContext({ viewport: { width, height: 900 }, locale: lang === "ar" ? "ar" : "en-US" });
        await ctx.addInitScript((l) => { try { localStorage.setItem("i18nextLng", l); } catch {} }, lang);
        const page = await ctx.newPage();
        await page.emulateMedia({ reducedMotion: "reduce" });
        const fontReq = [];
        page.on("request", (r) => { const u = r.url(); if (/googleapis|gstatic|\.woff2?(\?|$)/.test(u)) fontReq.push(u); });
        await page.goto(base + route, { waitUntil: "networkidle", timeout: 60000 });
        await page.evaluate(async () => { const step = Math.max(300, Math.floor(innerHeight * 0.8)); for (let y = 0; y < document.body.scrollHeight + step; y += step) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } scrollTo(0, 0); });
        await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
        await page.evaluate(() => document.fonts?.ready).catch(() => undefined);
        await page.waitForTimeout(300);
        const info = await page.evaluate(({ AR, EN }) => {
          const text = document.body.innerText;
          const risk = document.querySelector("[data-risk-line]");
          const riskColor = risk ? getComputedStyle(risk).color : null;
          const html = document.documentElement;
          return {
            lang: html.lang, dir: html.dir,
            riskAr: text.includes(AR), riskEn: text.includes(EN),
            riskColor, riskSize: risk ? parseFloat(getComputedStyle(risk).fontSize) : 0,
            bodyFont: getComputedStyle(document.body).fontFamily,
            lockup: !!document.querySelector('img[src*="fiper-lockup-horizontal-colour.svg"]'),
            oldLogo: !!document.querySelector('img[src*="Fiper_Logo"], img[src*="fiper-white"]'),
            googleFonts: !!document.querySelector('link[href*="fonts.googleapis"]'),
            bodyBg: getComputedStyle(document.body).backgroundColor,
          };
        }, { AR, EN });
        const name = `${route} [${lang} @${width}]`;
        const redRisk = info.riskColor && /rgb\(220,\s*38,\s*38\)/.test(info.riskColor);
        ok(`${name} risk line`, info.riskAr && info.riskEn && !redRisk && info.riskSize >= 11, `AR ${info.riskAr} · EN ${info.riskEn} · ${info.riskSize}px · ${info.riskColor}`);
        ok(`${name} identity`, info.lockup && !info.oldLogo && !info.googleFonts && !fontReq.some((u) => /googleapis|gstatic/.test(u)) && info.bodyBg === "rgb(10, 7, 8)" && /IBM Plex Sans Arabic|Inter/.test(info.bodyFont) && info.lang === lang,
          `lockup ${info.lockup} · old logo ${info.oldLogo} · google fonts ${info.googleFonts || fontReq.some((u) => /googleapis/.test(u))} · bg ${info.bodyBg} · font ${info.bodyFont.split(",")[0]} · lang ${info.lang}/${info.dir}`);

        const fails = await page.evaluate(() => {
          const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(",").map(Number); return { r, g, b, a }; };
          const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
          const L = (c) => 0.2126 * lin(c.r) + 0.7152 * lin(c.g) + 0.0722 * lin(c.b);
          const ratio = (a, b) => { const x = L(a), y = L(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
          const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
          const bodyBg = () => parse(getComputedStyle(document.body).backgroundColor) || { r: 10, g: 7, b: 8, a: 1 };
          const effBg = (el) => { let e = el; const layers = []; while (e && e !== document.body) { const cs = getComputedStyle(e); const bc = parse(cs.backgroundColor); const bi = cs.backgroundImage; if (bi && bi !== "none") { const m = bi.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/i); if (m) { const c = parse(m[0]); if (c) layers.push(c.a ? c : { ...c, a: 1 }); } if (!bi.includes("gradient") && !bi.includes("url(")) break; } if (bc && bc.a > 0) { layers.push(bc); if (bc.a >= 1) break; } e = e.parentElement; } let bg = bodyBg(); for (const l of layers.reverse()) bg = over(l, bg); return bg; };
          const res = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          while (w.nextNode()) { const t = w.currentNode; if (!t.textContent.trim()) continue; const el = t.parentElement; if (!el) continue; if (!el.offsetParent && getComputedStyle(el).position !== "fixed") continue; if (el.closest("svg,script,style,noscript,[aria-hidden='true'][data-skip],.skip-link")) continue; const cs = getComputedStyle(el); if (cs.visibility === "hidden" || cs.opacity === "0") continue; const rect = el.getBoundingClientRect(); if (rect.width === 0 || rect.height === 0) continue; const fg = parse(cs.color); if (!fg) continue; const bg = effBg(el); const fgc = fg.a < 1 ? over(fg, bg) : fg; const rt = ratio(fgc, bg); const size = parseFloat(cs.fontSize); const bold = parseInt(cs.fontWeight) >= 700; const need = size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5; if (rt < need) res.push({ text: t.textContent.trim().slice(0, 28), ratio: +rt.toFixed(2), need, fg: cs.color, bg: `rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})`, sel: (el.className || el.tagName).toString().slice(0, 40) }); }
          return res;
        });
        const seen = new Set(); const dedup = fails.filter((x) => { const k = x.sel + "|" + x.fg + "|" + x.bg; if (seen.has(k)) return false; seen.add(k); return true; });
        ok(`${name} contrast`, dedup.length === 0, `${dedup.length} text styles below threshold`);
        for (const x of dedup.slice(0, 20)) console.log(`    ${x.sel} · "${x.text}" ${x.ratio} < ${x.need} (${x.fg} on ${x.bg})`);
        await ctx.close();
      }
    }
  }
} finally {
  await browser.close();
  if (server) server.kill();
}
const all = results.every((r) => r.pass);
fs.mkdirSync("regression-out", { recursive: true });
fs.writeFileSync("regression-out/identity-gates.json", JSON.stringify(results, null, 1));
console.log(all ? "IDENTITY GATES: ALL PASS" : "IDENTITY GATES: FAIL");
process.exit(all ? 0 : 1);
