# templates/social — editable masters (v2.2.0, approved composition + CEO production answers 30 Oct 2026)

Four content types, four compositions, one grid (safe margin = 2× lockup height: posts 72–84 px, story 96 px — Q8; lockup top-start 36–40 px high; the fixed risk line «الاستثمار ينطوي على مخاطر · Investing involves risk» ON every image, 22 px muted inside the bottom safe area, and in the caption — Q4; media library asset type `screen` (inside a 4 px device bezel) vs `artwork` (card, print: full bleed, no frame) — Q10; image grade 8 % warm-charcoal overlay — Q16; no product label under a supporting shot — Q13; Arabic IBM Plex Sans Arabic, letter-spacing 0; no "//" labels; red = logo tile + one functional accent):

| Master | Size | Composition | Use |
|---|---|---|---|
| `announcement-product-1080x1350.svg` | 1080×1350 | image-dominant: official card artwork full width, one Arabic headline bottom-start, quiet English line, CTA with a red arrow | product announcement |
| `educational-1080x1350.svg` | 1080×1350 | headline-dominant comparison table (axis column + two option columns, heavy top rule); no numbering (axes, not steps); body 44 px = 14.7 px when shown at 360 wide (gate) | educational / comparison |
| `data-1080x1080.svg` | 1080×1080 | number-dominant: hero figure (IBM Plex Mono) with currency + date, gain as word + sign + success colour, chart GENERATED from sample-data.mjs (dark theme), SAMPLE chip | data display (sample data only — never a performance claim) |
| `corporate-1080x1920.svg` | 1080×1920 | statement-led on paper: official dark lockup top-start, headline block at the optical centre, brand line + date at the foot | corporate announcement / story |
| `link-1200x630.svg` | 1200×630 | headline + support line on paper | link share image |

Rules: text stays `<text>` (editable in Illustrator / Inkscape / Figma); install `brand/fonts/*.woff2` before rendering; the fixed risk line is on the image and in the caption; the full regulatory block goes in the caption, never on the image; a percentage change is never red for emphasis — only `finance.loss` for a real loss with its word and sign. Exports at 100 % in `exports/` (`node scripts/build-editables.mjs social`, fonts verified loaded). The earlier generic size masters (post/portrait/story) were retired in v2.0 to avoid one repeated composition.

Regenerate: `node scripts/build-social.mjs && node scripts/inject-charts.mjs && node scripts/build-editables.mjs social` (the last step exports PNGs at 100 % and writes dist/checks/social/educational-360.png with the measured body size).
