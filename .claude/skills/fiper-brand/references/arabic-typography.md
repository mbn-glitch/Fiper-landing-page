# Arabic typography — Fiper Brand v2.2.0

Family: **IBM Plex Sans Arabic** 400 / 500 / 600 / 700 for every Arabic surface (standing decision 27 Oct 2026, replaces Cairo; fiper.io migrates in its own round). The complete official file (no merging, no subsetting — reserved font names and OFL terms respected) carries Latin letters and digits, so `USD`, `SPUS`, `1,250.00` inside an Arabic sentence stay in the same font — do not add a Latin fallback in front of it.

Rules
1. `letter-spacing: 0` on every Arabic element — labels included, no exception (fiper.io line 267 shows `.02em` on its Arabic eyebrow: a source observation the decision overrides). Never track Arabic.
2. Real weights only: 600 for emphasis, 700 for headings. `font-synthesis: none`. No italics (no Arabic italic exists; use weight or colour).
3. Line-height: body **1.9**, h1 **1.3**, h2 1.45, card titles 1.5, legal 1.7. Paragraph measure ≤ 65 characters on desktop.
4. Headings: IBM Plex Sans Arabic 700, `text-transform: none`, sizes: h1 `clamp(2.1rem,6.2vw,4.5rem)`, h2 `clamp(1.7rem,3.9vw,2.6rem)`, card h3 1.18–1.22rem (fiper.io values). Never Barlow Condensed for Arabic words.
5. Digits: Latin `0-9` (`font-variant-numeric: lining-nums`, Intl `nu-latn`). Arabic-Indic digits never, not even in print.
6. Mixed runs: wrap Latin tokens in `<bdi>` or `<span dir="ltr" style="unicode-bidi:isolate">`: tickers, currency codes, e-mails, references (`FF-TRF-…`), phone numbers (`+974 …`), URLs. Amount + code order in AR: `1,250.00 USD`.
7. Punctuation: `،` `؛` `؟` in Arabic copy; Arabic quotation marks «…»; the dash is `—` with spaces.
8. Alignment: `text-align: start`, never `justify`; numbers in tables `text-align: end` with `dir="ltr"` cells.
9. Small labels in Arabic (field labels, table headers, chart period only): IBM Plex Sans Arabic 600, `letter-spacing: 0`, no uppercase, colour `--fp-text-label`; no slash label prefix and no decorative eyebrow in v2.0.
10. Dynamic type: layouts survive 130 % font size; Arabic needs ≥ 15 px body on mobile.
11. Mono: IBM Plex Mono for numbers, codes and OTP boxes only — never eyebrows, labels, table headers or any element that can carry Arabic (Plex Mono has no Arabic: the browser falls back to FreeSerif/Liberation, a defect).
13. Inheritance: table headers, inputs, buttons, badges, chips, captions and template text under `lang="ar"` must resolve to IBM Plex Sans Arabic with a real weight (400/500/600/700, `font-synthesis: none`). Verify the fonts actually used: DevTools Rendered Fonts on screen; `python3 scripts/check-pdf-fonts.py <pdf>` (or `pdffonts`) for PDFs — any non-brand font on any page is a FAIL.
12. English parity: every Arabic string has its English twin (`lang="en"`, Inter / Barlow Condensed rules apply there).
12. Numeric units inside Arabic text — amount+currency (`1,250.00 USD`), sign+number+percent (`+2.70 %`), date parts — are wrapped in `.fp-unit` or `<bdi class="num">` (nowrap, ltr, isolate) so they never break or reorder; verify in HTML, PDF and exports.
