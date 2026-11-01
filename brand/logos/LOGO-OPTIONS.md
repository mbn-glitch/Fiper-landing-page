**DECIDED 30 Oct 2026: the CEO approved variant A (dotted i) and ordered it generalised across the whole identity. `brand/logos/` is now the A set; B and C are archived in `dist/archive/logo-v2.1-unpicked/` (history, never used). The text below is the decision record as presented.**

# Logo refinement v2.1 — the three wordmark variants (for the CEO's pick, 30 Oct 2026)

Decision asked of the CEO: **which "i"** goes into the Fiper wordmark. The board `dist/logo-options/board-2400.png` (+ `board.pdf`, preview `/logo-options/`) shows each variant beside the current logo at 16 / 26 / 40 / 120 px on charcoal and on paper, with the 14 px readability test. Nothing here is approved until the pick is recorded (`OPEN-ITEMS.md` § C row 12).

What is constant in every variant: the **mark** (tile 152 × 154, rx 23 %, gradient `#E03636 → #AD1D1C → #9C1515`, swoosh outline, shadow dx 2 dy 3 α .25) is the official geometry, only cleaned (dead white rect removed, ids normalised, shadow as a vector shape in print). The letters **F, p, e, r** are the official outlines. The lockup ratios (gap 0.157 × tile, cap 0.538 × tile, stacked 0.262 / 0.137) are the measured official values (`FORENSICS.md`).

| | A — Dotted i | B — Serif-foot i (dotless) | C — Dotted i + optical spacing |
|---|---|---|---|
| The i | tittle added: round, slightly oval (rx 7.62 × ry 8.08 units = 1.15 × stem), centred on the stem (x 253.36), top 1 unit under the cap line (y 36.8–52.9), gap to the i 7.5 units (0.57 stem) | no dot; the one-sided wedge head replaced by a bilateral bracketed serif = the foot serif mirrored about the i's vertical midline (y 89.57); width 25.9 (same as the foot) | A's i |
| Other letters | unchanged | unchanged | unchanged outlines, **tracking** opened: F–i +2, i–p +4, p–e +2, e–r +2 units; **uniform outline weight** +1.2 units (+0.6 per side): stem 13.26 → 14.46 (+9 %), same for F p e r |
| Lockup box | identical to the current master (439 × 154) | identical | 449.2 × 154 (+2.3 % wide); gap tile → wordmark unchanged |
| Reads as at 14 px 1× (board test) | "Fiper" — the dot survives as one bright pixel pair above the stem | "Fıper" — no "1" flag, but a small-capital-I look; the weakest of the three at 14 px | "Fiper" — the clearest at 14–16 px (thicker stem + dot + open i–p) |
| At 120 px + | indistinguishable from the current logo except the dot | reads as a designed dotless i (Turkish ı); unusual for an English word | visibly heavier and wider than the current logo; the optical-size idea |
| Change to existing placements | none (same box) | none (same box) | every placement re-measures (+2.3 % width); header 26 px → 75.8 px wide instead of 74 |
| Risk | the dot is a new element the designer never drew; its size/position are PROPOSED (measured from the family's conventions, not from a font — the typeface is unidentified) | the "1" problem is solved only partly: a dotless i is still a dotless i | heaviest intervention: changes the colour (weight) of the whole word; two masters in practice (C for small, A for large) would be the honest use |

## Recommendation (marked only — the CEO decides)

**A — Dotted i.** It removes the "F1per" reading with the smallest possible change: one tittle in the family's own convention, every other outline, the lockup box, every size rule and every existing placement unchanged. It passes the 14 px test on both grounds (board, last row of each column).

If the brief is strictly "the 16–26 px header must be as legible as possible", **C** is the better small-size master (thicker stem, open i–p gap) — but it should then be used only below ≈ 40 px with A above, which is a two-master system. **B** is the conservative "no new element" option; it kills the figure-1 flag but keeps a dotless i, which readers of English still stumble on.

## What is in the pack for each variant (`brand/logos/`)

SVG masters (lockup-horizontal, lockup-stacked, wordmark, mark × colour / colour-paper / white / black / red + clear-space guides) · PNG @1x/@2x/@3x at 24–1024 px heights (transparent white-wordmark, transparent dark-wordmark, on charcoal, on paper) · favicon 16/32/48 PNG + multi-size ICO + SVG · app icons 180/192/512 + maskable 192/512 + SVG · OG 1200 × 630 (charcoal, paper) · avatars 400/800 (charcoal, paper) · e-mail headers 120/160 CSS px @2x (white, charcoal) · print EPS + PDF (RGB) and EPS + PDF (CMYK, documented conversion) for every lockup. Gate: `node scripts/verify-logo-pack.mjs` → `dist/checks/logo-pack.md`. Rules: `USAGE.md`.

## After the pick (one command)

`node scripts/freeze-logo-variant.mjs <A|B|C>` — moves the picked variant to `brand/logos/`, archives the other two under `dist/archive/logo-v2.1-unpicked/`, updates `logos/README.md`, `MISSING-ASSETS.md`, `OPEN-ITEMS.md` and the manual's logo chapter to the picked files, then the normal release steps (render-manual → package → verify-unzipped → deploy) and `git tag v2.1.0`.
