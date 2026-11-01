# MISSING ASSETS — what does not exist in any source, what stands in for it, and its limits (v2.1.0, 30 Oct 2026)

**v2.1.0 (30 Oct 2026):** the CEO approved the refined wordmark (variant A, dotted i) and generalised it: `brand/logos/` now holds a true-vector dark-on-light lockup, mono (white / black / single-red) versions and a mark-only file in every format (`logos/USAGE.md`). Rows 1–3 are therefore **AVAILABLE — APPROVED**; row 7 carries documented PROPOSED CMYK values (press proof pending). Row 4 (Arabic lockup) is unchanged: still missing.

Status unchanged in v2.0: the approval of the visual direction does not approve any item in this file; every row keeps its documented state.

Rules (CEO addendum item 5, CEO review v1.1 item 5): a missing official asset is recorded here, **never created** and never presented as official. **No modified version of the logo is allowed under any label** — the one exception was the CEO-ordered v2.1 refinement (30 Oct 2026), approved the same day (variant A) and now the official set in `brand/logos/` — no recolouring, cropping, retracing, flattening or re-centring; labelling a modified copy PROPOSED does not override logo protection. Ready-to-use assets are only the official files listed in `brand/logos/README.md`; templates and components reference those and nothing else. Owner to supply: Fiper Global brand owner (the founder) or the original logo designer.

## 1. Missing assets and the official substitute that IS available

| # | Missing asset | What exists (official) | Interim use and its limits | Who supplies |
|---|---|---|---|---|
| 1 | **Dark-on-light vector lockup** (SVG / AI / EPS) | **AVAILABLE — APPROVED (v2.1.0)**: `brand/logos/svg/fiper-lockup-horizontal-colour-paper.svg`, `print/fiper-lockup-horizontal-colour-paper.pdf|.eps` | none | — |
| 2 | **Mono / flat single-colour** version (one-colour print, embossing, engraving, watermark) | **AVAILABLE — APPROVED (v2.1.0)**: `brand/logos/svg/fiper-mark-black.svg`, `fiper-*-white.svg`, `fiper-*-red.svg`, `print/*-black.*` — one-colour reproduction only; on screen the gradient stays | none | — |
| 3 | **Mark-only file in any format** (vector or raster) | **AVAILABLE — APPROVED (v2.1.0)**: `brand/logos/svg/fiper-mark-colour.svg`, `png/mark/*`, `favicon/*`, `app-icon/*`, `social/avatar-*` | none | — |
| 4 | **Arabic lockup / Arabic wordmark** «فايبر» | **DECIDED: not needed (CEO 30 Oct 2026)** — the Fiper logo is Latin-only on every surface, including Arabic-direction materials; Arabic layouts place the Latin lockup per the RTL rule (inline-start), the logo itself is never mirrored; the Arabic name «فايبر» stays text beside it | — | — |
| 5 | **Fipo visual character** (mascot / avatar of the Fiper Hub assistant) | Searched `fipo-dashboard`, `fipo-telegram`, `fipo-proxy`, `fiperhub-site` (code, handoff docs, screenshots): no character artwork, no avatar file, no description | None created. Fipo is referred to by name in text only (product descriptor under the master brand, README § A). Any chat avatar today = the official app icon `icon-512.png` | Brand owner (a character needs its own brief and approval) |
| 6 | Logo sheet with the gradient `#E63939 → #951212` named in the task file | Not found under `/home/builder/Projects` (searched `*logo*.svg`, `Fiper_Logo*`, `*.ai`, `*.eps`) | The published SVG gradient `#E03636 → #AD1D1C → #9C1515` governs (APPROVED: official logo file) | Brand owner to confirm which file is canonical |
| 7 | **CMYK / Pantone / RAL** values of the brand red and the warm black | Not provided in any source. **PROPOSED CMYK documented** (`brand/logos/USAGE.md` § 5, naive sRGB → CMYK) and carried in `brand/logos/print/*-cmyk.*` | Pantone / RAL: none; press proof pending — REQUIRED DECISION after a proof | Brand owner + printer proof |
| 8 | Official **product-name lockups** (Fiper Card, Fiper Funds …) and the **"by Fiper" endorsement lockup** | None (fiper.io writes product names as text; `p6.h3` = "SPUS by Fiper" as text) | Text rules in § 3 (PROPOSED); text beside the lockup only; no lockup files shipped | — (rule-based unless the owner wants a file) |
| 9 | Official **partner co-branding lockup** (Zenova, Rostova …) | None | Rule in § 3 (PROPOSED) | Partner programme owner |
| 10 | Official **motion / video brand template** (AE, Premiere, DaVinci) | None | HTML/CSS motion source + rendered WebM samples in `brand/templates/video/` (not a native editing template — stated in `deliverables-manifest.md`) | Video team |
| 12 | Bespoke icon set (a more professional replacement for Lucide) | Lucide v0.468.0 APPROVED (CEO 30 Oct 2026, decision item 5) and in use; icons are consumed through the sprite so a bespoke set can replace them later without touching surfaces | NOT REQUESTED — note only | Brand owner |

## 2. Quarantined proposals — NOT APPROVED, not used anywhere

`brand/logos/_source-fiper.io/_unapproved-proposals/` holds the modified copies made in v1.0 and withdrawn in v1.1. They are **not** brand assets: no template, component, mockup or document references them, `scripts/verify-identity.mjs` fails on any reference, and they may be deleted at the founder's word. Kept only so the proposal attached to this record is inspectable.

| File | What was done to the official file | Why it is not allowed |
|---|---|---|
| `fiper-lockup-dark.DERIVED.svg`, `fiper-lockup-dark@1x/2x/3x.DERIVED.png`, `fiper-email-header-dark@2x.DERIVED.png` | wordmark paths of the master recoloured `#0A0708` | recolouring — the official dark raster (row 1) replaces every use |
| `fiper-mark.DERIVED-crop.svg`, `fiper-mark@1x/2x/3x.png` | master cropped to its first 152 × 154 units | cropping — no mark-only asset exists (row 3) |
| `fiper-mark-CROP-of-stacked.OFFICIAL-trim.png`, `fiper-mark-CROP-of-stacked@1x/2x/3x.png`, `-512.png` | tile cut out of the stacked 720² PNG | cropping — same |

## 3. PROPOSED lockup rules (text beside the lockup; ratios from `tokens.json component.logo.product-lockup`)

Reference unit: **M** = mark tile height inside the lockup (the 154-unit tile). The lockup's own values are APPROVED measurements of the master: lockup aspect 2.851 : 1, tile aspect 0.987 : 1, gap tile → wordmark 0.156 × M, wordmark band y 35.8 → 146.9 units. Because no mark-only file exists, every rule below uses the **full lockup**.

### A. Product descriptor beside the lockup (apps, documents)
```
[ Fiper lockup, height H ]  clear 0.5 H  |  1 px line.ash divider (height 0.8 H)  |  gap 0.4 H  Product name (IBM Plex Sans Arabic 700 / Barlow Condensed 700), cap height = 0.62 H
```
- App headers (< 640 px): lockup at 26 px + product name as text after the divider; if the row cannot hold both at ≥ 20 px lockup, the product name becomes the screen title and the lockup stands alone.
- Vertical alignment: product name centred on the lockup's vertical centre, baseline aligned with the wordmark baseline when sizes allow.
- Arabic product names read right-to-left: the lockup stays at the **inline-start** (right in RTL), text to its left; the lockup itself never mirrors.
- Never: product name inside the clear space (0.5 H), larger than 0.62 H, in red, or a second mark.

### B. "by Fiper" / "من فايبر" endorsement (affiliated products: SPUS by Fiper, TWO Markets by Fiper)
```
PRODUCT NAME (its own type, cap height P)   gap 10 px   by   gap 10 px   [ Fiper lockup, height = 0.5 P ]
```
- "by" / "من" in body font 400, `--fp-text-muted`, same baseline as the product name.
- Fiper lockup height = **0.5 × the product name's cap height** (Fiper endorses, it is not the hero); minimum 20 px / 6 mm applies — below that, write "by Fiper" as text only.
- In Arabic «SPUS من فايبر» as text is the primary form (OBSERVED, fiper.io `p6.h3`); the lockup form only on wide surfaces.

### C. Partner / third-party logos beside Fiper (cTrader, MT5, Visa; white-labels)
```
[ Fiper lockup, height H ]  clear 0.5 H  |  1 px line.ash divider (height H)  |  clear 0.5 H  [ partner logo, optical height = H ]
```
- Partner logo from its **official pack, unmodified**, with its own clear space; optical height matched to H, never larger.
- Order: Fiper first in the reading direction on Fiper surfaces; on a partner's white-label surface the partner leads and Fiper appears in the legal footer only (README § A).
- Never recolour either mark, never place both on brand red, never stack them without the divider.

Status of A–C: PROPOSED (no official lockup exists). Changing a ratio = edit `tokens.json component.logo.product-lockup.*` and re-check `components/preview.html`, the mockups and the templates (layout re-check rule — not a one-token flip).
