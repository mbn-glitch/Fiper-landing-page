# Logo forensics — Fiper wordmark and mark (v2.1 work, 30 Oct 2026; outcome: variant A approved, the files examined here are now in `_source-fiper.io/`)

Scope: what the official logo files actually contain, measured, before any refinement. Nothing here changes an official file. Measurements are in the master's own units (the SVG viewBox `0 0 439 154`); px figures are computed for the two header sizes the CEO named (26 px nav lockup, 16 px minimum).

## 1. Sources examined

| # | File | md5 | Pixels / units | Vector or raster | Finding |
|---|---|---|---|---|---|
| S1 | `brand/logos/_source-fiper.io/svg/fiper-lockup-white.svg` (superseded 30 Oct 2026; was `brand/logos/svg/`) (= `https://fiper.io/logos/fiper-white.svg`, = `~/Projects/fiper-v2/logos/fiper-white.svg`) | `71f488d6afe1324a9757625efad13893` | 439 × 154 units | **vector**, 6 `<path>`, 2 `<rect>`, 1 `linearGradient`, 1 drop-shadow `filter`; **no `<text>`, no `font-family`** — the wordmark is outlined paths (no font dependency) | the only vector master; white wordmark |
| S2 | `brand/logos/_source-fiper.io/png/Fiper_Logo_2_black.OFFICIAL-PNG-ONLY-3000.png` (`~/Projects/Fiper-landing-page/Fiper Logo 2 black.png`, also in `wtraders-card/`, `my-landing-page/`) | `628114640e3abd2fb6391c3072e71d26` | 3000 × 3000 RGBA, trim 1526 × 531 at +737 +1149 | raster | dark-wordmark horizontal lockup; wordmark colour **`#2C2929`** (not black); tile 529 × 529 px |
| S3 | `brand/logos/_source-fiper.io/png/Fiper_Logo_white2.OFFICIAL-STACKED-WHITE-720.png` (`Fiper Logo white2.png`) | `3cd44513ef573939a5b046feae2758a9` | 720 × 720 RGBA, trim 264 × 394 at +228 +164 | raster | **stacked** white lockup: tile 264 × 263 px above the wordmark |
| S4 | `brand/logos/_source-fiper.io/app-icon/icon-512.png` (`https://fiper.io/icon-512.png`) | `b8ea93ac6f0bfa670f61b76258754c11` | 512 × 512 | raster | the **stacked lockup on charcoal `#090708`** (tile 158 px at x 176–333, wordmark below) — not a mark-only tile |
| S5 | `brand/logos/_source-fiper.io/app-icon/apple-touch-icon-180.png` | `17328b70628d00dee123ca4f9b67a6bc` | 180 × 180 | raster | same composition as S4 |
| S6 | `brand/logos/_source-fiper.io/favicon/favicon.ico` | `bafa37b5e749f36cb8e7ef0df841d558` | one 32 × 32 PNG entry | raster | single size only |
| S7 | `brand/logos/_source-fiper.io/og/og-image-1200x630.png` | `e7c62574855ee4a302a1418430deb786` | 1200 × 630 | raster | stacked lockup, small, on charcoal with a radial wash |
| — | `*.ai`, `*.eps`, any mark-only or Arabic file | — | — | — | **none found** under `~/Projects` (searched `*.ai`, `*.eps`, `*fiper*logo*`) |

Verdict: S1 is the single geometric source for the wordmark and the mark; S2 and S3 are rasters of the same artwork (S2 confirms the dark wordmark colour and the lockup ratios; S3 gives the stacked composition). Everything in v2.1 is derived from S1's geometry and S3's proportions.

## 2. Master anatomy (S1)

| Element | Measured | Note |
|---|---|---|
| viewBox | 0 0 439 154 | lockup aspect 2.851 : 1 |
| Mark tile | `rect 0 0 152 154`, `rx 35` | aspect 0.987 : 1; corner = 23.0 % of tile width |
| Tile gradient | `linearGradient userSpaceOnUse x1 152 → x2 0, y 77`: `#9C1515` @0 · `#AD1D1C` @0.5 · `#E03636` @1 | horizontal; **light on the left, dark on the right** (`#E03636 → #AD1D1C → #9C1515` reading left → right) |
| Swoosh ("F" symbol) | one `<path>`, two sub-contours (upper blade, lower blade); bbox x 17.0–134.5, y 24.0–128.8 (117.5 × 104.8) | fill white |
| Swoosh shadow | `filter`: `feOffset dx 2 dy 3`, `feGaussianBlur stdDeviation 1`, black α .25, composited **outside** the glyph only (`feComposite operator=out`) | part of the artwork (README § B misuse 3) |
| Dead geometry | `<rect x 12 y 16 width 130 height 115 fill white>` drawn **before** the tile — fully covered, invisible | removed in the cleaned mark (no visual change) |
| Gap tile → wordmark | 176.11 − 152 = 24.11 units = **0.157 × tile height** | S2 measures 83 / 529 = 0.157 — identical |
| Wordmark band | x 176.11 → 438.53 (width 262.4 = 1.73 × tile width); y 35.78 → 146.87 | |
| Cap height (F) | 35.78 → 118.67 = **82.89** = 0.538 × tile height | S2: 289 / 529 = 0.546 (raster rounding) |
| Baseline | y = **118.67** (= 0.771 of tile height) | F, i, e, r sit on it; p descends |
| x-height | i stem top 60.47 → 58.2 = **0.702 × cap**; e with overshoot 60.17 = 0.726 × cap | high x-height |
| Descender (p) | 118.67 → 146.87 = 28.2 = 0.34 × cap | |
| Letter boxes | F 176.11–235.99 (w 59.9) · i 239.44–265.93 (w 26.5) · p 269.38–327.38 (w 58.0) · e 335.00–386.29 (w 51.3) · r 393.70–438.53 (w 44.8) | bbox gaps F→i 3.45, i→p 3.45, p→e 7.62, e→r 7.41 (bbox, not optical) |
| i stem width | **13.26 units** between the outline edges (x 246.33 → 259.59; 12.85 at the 50 % raster threshold) = 0.16 × cap | |
| Dark wordmark colour | `#2C2929` (S2) | used for the paper versions in v2.1 |

### Stacked lockup proportions (S3, tile = 1.0)
Tile 264 × 263 px · wordmark cap height 69 px = **0.262 × tile** · wordmark width 219 px = **0.83 × tile width** · gap tile bottom → cap top 36 rows = **0.137 × tile** · wordmark bbox centre sits 7.5 px (2.8 % of the tile) right of the tile centre (optical / production offset; v2.1 centres the wordmark bbox exactly and records this).

## 3. Typeface finding (evidence, not a guess)

Method: every glyph of the master wordmark (F, p, e, r; i excluded because it is the subject of the change) was rasterised from its outlined path at a 200 px cap height and overlaid on the same glyph of **180 candidate serif fonts** (177 Google Fonts families/weights downloaded 30 Oct 2026 — Playfair Display, DM Serif, Prata, Lora, Libre Bodoni, Bodoni Moda, Gelasio, EB Garamond, Libre Baskerville, Merriweather, Crimson, Cormorant, Castoro, Fenix, Caudex, Spectral, Source Serif, PT Serif, Alegreya, Vollkorn, Old Standard, Caslon, Goudy, Jenson-type Venetians, Didones, slabs … — plus the system families Noto Serif, Liberation Serif/Tinos, FreeSerif, DejaVu Serif), normalised to the cap height, bbox-centred, and scored by pixel IoU (intersection over union); a second pass also searched a horizontal scale factor 0.80–1.20 to catch a condensed/extended use of a font. Script: `brand/logos/v2.1/_forensics/typeface-match.py` (fontTools + skia-python; overlay strip `overlay-top8.png`: logo white, candidate red, overlap yellow), ranking kept in `brand/logos/v2.1/_forensics/typeface-ranking.json`.

| Rank | Candidate | mean IoU (F p e r) | best with x-scale |
|---|---|---|---|
| 1 | Castoro Regular (Venetian old-style) | 0.798 | 0.798 @ 1.00 |
| 2 | Fenix | 0.758 | 0.763 @ 1.04 |
| 3 | Peddana | 0.747 | 0.750 @ 0.98 |
| 4 | Caudex Bold | 0.746 | 0.760 @ 0.96 |
| 5 | Libre Baskerville Bold | 0.741 | 0.782 @ 0.92 |
| … | (175 more) | < 0.74 | |

An exact source font scores ≥ 0.95 under this test (verified: a font against itself = 1.00; the same glyph outlines through a different rasteriser ≥ 0.97). **No candidate reaches 0.85** → the wordmark is **not** set in any of the 180 tested fonts. The letterforms are an old-style (humanist/Venetian) serif with high x-height, moderate contrast, wedge (cupped) serifs, a long drooping beak on the F's upper arm and a ball terminal on the r — closest free family Castoro (0.80), closest family in character: the Cochin/Centaur/Jenson group (commercial, not tested — not on disk, not free). Conclusion for the work: **the typeface is unidentified / custom-drawn; no font file can be used to generate letters.** Every v2.1 letter edit is therefore derived from the logo's own outlines (stem width, serif brackets, overshoots), and the tittle design follows the family's visible conventions (round, slightly oval, ≈ 1.15 × stem) rather than a font's glyph.

## 4. The "i" problem, measured

The i in the master is a **dotless i** whose head serif is a one-sided wedge (flag) on the left and whose foot serif is bilateral and flat — exactly the silhouette of a lining figure **1** in old-style serifs.

| Measure | units | at 26 px lockup (scale 0.169) | at 16 px lockup (scale 0.104) |
|---|---|---|---|
| Tittle | **absent** | — | — |
| Space above the i for a tittle (x-height top 60.47 → cap top 35.78) | 24.7 | 4.2 px | 2.6 px |
| i stem width | 13.26 (outline) | 2.24 px | 1.38 px |
| Head serif: left-only wedge, 239.44 → 258.63 at y 60.5–68.0 | 19.2 wide × 7.5 high | 3.2 × 1.3 px | 2.0 × 0.8 px |
| Foot serif: bilateral, 240.02 → 265.93 | 25.9 wide | 4.4 px | 2.7 px |
| F right arm → i head (bbox) | 3.45 | 0.58 px | 0.36 px |

Shape test (same cap-height scale, bbox-centred): the logo's i against Castoro's dotless **ı** = 0.887 IoU, against Castoro's **1** = 0.547 (Caudex ı 0.902 / 1 0.431). Geometrically it is an i; perceptually, below ≈ 20 px the 1.3 px wedge collapses to a flag and the 1.3 px stem with a 2.7 px foot reads as "1" — the CEO's observation is reproduced in the readability test on the comparison board (`LOGO-OPTIONS.md`).

## 5. What is and is not touched in v2.1

- Mark: geometry **unchanged** (tile, radius, gradient stops and direction, swoosh outlines, shadow parameters); cleaned only: dead white rect removed, ids normalised, viewBox per file, shadow kept as the filter in screen SVG and realised as a vector offset shape (dx 2 dy 3, α .25, no blur) in print PDF/EPS where filters are not vector.
- Wordmark: F, p, e, r outlines unchanged in variants A and B; the i receives a tittle (A, C) or a symmetric serif head (B); C additionally opens the spacing and adds a uniform outline weight (see `LOGO-OPTIONS.md` for the exact numbers).
