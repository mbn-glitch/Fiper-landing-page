# Logo usage — Fiper Brand v2.1.1 · e-mail headers v2.3.4 (`brand/logos/`, the approved set: variant A — dotted i, CEO decision 30 Oct 2026)

The files in `brand/logos/{svg,png,favicon,app-icon,og,social,email,print}` are the only logo files for every Fiper surface. The v2.0 fiper.io files (dotless i) are superseded and kept in `logos/_source-fiper.io/` for provenance only — never reference them (`verify-identity` fails on it).

## 1. Which file for which placement

| Placement | File (inside `brand/logos/`) | Size | Ground |
|---|---|---|---|
| Web navbar / app header | `svg/fiper-lockup-horizontal-colour.svg` | height **26 px** (= 74 px wide; C: 75.8) | charcoal (`#0A0708`) / nav scrim |
| Header on paper (documents, light surfaces, mail) | `svg/fiper-lockup-horizontal-colour-paper.svg` (dark wordmark `#2C2929` = the official dark PNG's colour) | 26 px app · 8 mm document header | paper `#F7F4F1` / white |
| Mark alone (app header icon slot, video corner, chat avatar) | `svg/fiper-mark-colour.svg` · `png/mark/fiper-mark-h{24…1024}@{1,2,3}x.png` | **≥ 16 px**; 20 px in a 26 px header | charcoal or paper (the tile carries its own ground) |
| Stacked lockup (splash, square profiles — no video end cards since v2.3.1) | `svg/fiper-lockup-stacked-colour.svg` · `png/lockup-stacked/…` | ≥ 48 px high; splash 120–240 px | charcoal |
| Wordmark alone | `svg/fiper-wordmark-colour(-paper).svg` | ≥ 12 px cap height (≈ 20 px lockup) | only beside the mark elsewhere on the same surface; never as an icon |
| Favicon | `favicon/favicon.ico` (16 + 32 + 48), `favicon.svg` (`<link rel="icon" type="image/svg+xml">`), `favicon-16/32/48.png` | 16–48 | transparent; the tile is the ground |
| iOS home screen | `app-icon/icon-180.png` (`apple-touch-icon`) — full-bleed gradient square, the OS rounds it | 180 | — |
| Android / PWA | `app-icon/icon-192.png`, `icon-512.png` (`purpose: any`) and `icon-192-maskable.png`, `icon-512-maskable.png` (`purpose: maskable`, swoosh inside the 80 % safe zone) | 192 · 512 | — |
| Share image (OG / Twitter) | `og/og-1200x630-charcoal.png` (default) · `og-1200x630-paper.png` (light contexts) | 1200 × 630 | in file |
| Social avatars | `social/avatar-400.png`, `avatar-800.png` (charcoal) · `-paper` | 400 · 800 | in file; survives circular crops (tile = 66 % of the frame) |
| E-mail header | `email/email-header-160-paper@2x.png` (320 × 112 → 160 × 56 CSS px; the dark lockup flattened on the **paper** token `#F7F4F1` = the mail shell) — the one mail header; `-paper.png` 1x, `-120-paper[@2x].png`; `email-header-{120,160}-transparent[@2x].png` (alpha) only for a header on another light ground such as a white card. **v2.3.4:** the v2.1–v2.3.3 `email-header-*@2x.png` (opaque **white** box on the paper mail — invoices defect FI7-017) and the `-dark@2x` files are superseded → `logos/_deprecated/email/`; no dark header (mails ship one paper rendering in every mode) | 160 / 120 CSS px wide | paper `#F7F4F1` (baked) · transparent |
| Print (office and press) | `print/fiper-lockup-horizontal-colour-paper.pdf` / `.eps` (RGB) · `-cmyk.pdf` / `-cmyk.eps` (press) · `-colour` (on dark) · `-black` (one-colour) | ≥ 6 mm high (lockup) · ≥ 4 mm (mark) | — |

Android (Q5, explicit): the official **maskable** icons `app-icon/icon-192-maskable.png` and `icon-512-maskable.png` (swoosh inside the 80 % safe zone) ship in the package since v2.1 beside the `any` icons — declare both purposes; never re-crop the mark yourself. Video (Q1; CEO 31 Oct 2026): corner lockup 96 px high on a 1080 px short side at 64 px inset, on every frame of official content; no closing card in any video; no Fiper logo at all on partner personal-brand (person-tier) reels; per content type: `templates/video/video-rules.md` § Logo by content type. E-mail (Q6): one size — `email/email-header-160-paper@2x.png` rendered 160 × 56 CSS px (v2.3.4: paper ground baked in; the transparent twin for other light grounds). Below 640 px (Q15) the logo stands alone (no product descriptor).

Manifest snippet (PWA): `{"icons":[{"src":"icon-192.png","sizes":"192x192","type":"image/png"},{"src":"icon-512.png","sizes":"512x512","type":"image/png"},{"src":"icon-192-maskable.png","sizes":"192x192","type":"image/png","purpose":"maskable"},{"src":"icon-512-maskable.png","sizes":"512x512","type":"image/png","purpose":"maskable"}]}`

## 2. Minimum sizes (PROPOSED, measured on the renders)

| | Screen | Print |
|---|---|---|
| Mark | **16 px** | 4 mm |
| Horizontal lockup | **80 px wide** (= 28 px high); 26 px high in headers only where the header is the only place the brand appears at that size | 6 mm high (17 mm wide) |
| Stacked lockup | 48 px high | 12 mm |
| Wordmark alone | 12 px cap height | 3.5 mm cap height |

## 2a. Arabic-direction materials (DECIDED, CEO 30 Oct 2026)

The Fiper logo is **Latin-only on every surface**, including Arabic-direction materials — there is no Arabic lockup and none is needed (MISSING-ASSETS #4 closed). An Arabic (RTL) layout places the Latin lockup where the RTL mirroring rule puts the brand element (inline-start = top-right), but the lockup itself is never mirrored (`direction: ltr` on the brand element); the Arabic name «فايبر» is set as text beside it, never drawn as a logo.

## 3. Clear space

**0.5 × mark height** on every side (= half the tile; `svg/fiper-*-clear-space.svg` draws it). Nothing — text, icons, borders, other logos — enters it. Product names, "by Fiper" and partner logos keep the ratios in `MISSING-ASSETS.md` § 3 outside the clear space.

## 4. Grounds and colourways

- **Colour** (`-colour`, white wordmark): on charcoal `#0A0708`, its coal/panel tones, or the red tile's own ground. **Colour-paper** (`-colour-paper`, `#2C2929` wordmark): on paper `#F7F4F1` or white. The tile keeps its gradient on both.
- **White (reverse)** `-white`: one-colour white (tile white, swoosh knocked out) — only when colour printing is impossible or on photography with a dark scrim; never on paper.
- **Black (mono)** `-black`: one-colour black (`#000000`, the one place pure black is allowed) — one-colour print, embossing, engraving, watermarks, fax/stamp.
- **Single-colour red** `-red`: brand UI red `#DC2626` as one spot/process colour (PROPOSED) — silk-screen, merchandise, single-colour press. Not for screens.
- **Never on red**: no lockup or mark on brand red or on the tile's gradient (the tile already is the red). Never on busy photography without a scrim.
- Logos switch with the theme: colour on charcoal, colour-paper on paper. No other recolouring, no opacity, no blend modes.

## 5. CMYK (PROPOSED — documented naive sRGB → CMYK conversion; press proof pending, `MISSING-ASSETS.md` #7)

| Colour | sRGB | CMYK in the `-cmyk` files |
|---|---|---|
| Tile, light stop | `#E03636` | C0 M76 Y76 K12 |
| Tile, middle stop | `#AD1D1C` | C0 M83 Y84 K32 |
| Tile, dark stop | `#9C1515` | C0 M87 Y87 K39 |
| Dark wordmark | `#2C2929` | C0 M7 Y7 K83 |
| Single-colour red | `#DC2626` | C0 M83 Y83 K14 |
| Swoosh shadow | tile stops × 0.75 (opaque) | computed from the darkened stops |

The CMYK files are `DeviceCMYK` vector PDFs/EPS with the axial shading kept as a shading (no raster). A printer's ICC conversion of the RGB files may differ; the press proof decides and replaces this table.

## 6. Never (unchanged from README § B, plus v2.1)

1 recolour · 2 flatten the gradient on screen (the mono files are for one-colour reproduction only) · 3 add a glow, extra shadow or outline · 4 stretch or condense · 5 rotate · 6 place on red or on a photo without a scrim · 7 below minimum size · 8 mirror in RTL · 9 retype "Fiper" in any font · 10 Arabic wordmark (still a MISSING ASSET) · 11 re-crop the tile into a circle or squircle yourself (use the app-icon files) · 12 use any superseded v2.0 file (dotless i) or a candidate B / C file · 13 scale the tittle, re-space or re-weight letters: the geometry is final per variant.

## 7. Migration from v2.0 (what to replace where)

| v2.0 file (superseded, `_source-fiper.io/`) | v2.1.0 file |
|---|---|
| `svg/fiper-lockup-white.svg` | `svg/fiper-lockup-horizontal-colour.svg` |
| `png/fiper-lockup-dark@1x/2x/3x.png` (dark lockup on light) | `svg/fiper-lockup-horizontal-colour-paper.svg` or `png/lockup-horizontal/fiper-lockup-horizontal-paper-h48@1x/2x/3x.png` |
| `png/fiper-lockup-white@1x/2x/3x.png` | `png/lockup-horizontal/fiper-lockup-horizontal-h48@1x/2x/3x.png` |
| `png/fiper-lockup-stacked-white-h80/160/240.png` | `png/lockup-stacked/fiper-lockup-stacked-h128/256@1x.png` (or the SVG) |
| `favicon/favicon.ico` (32 only), `favicon-64.png` | `favicon/favicon.ico` (16+32+48), `favicon.svg`, `favicon-48.png` |
| `app-icon/apple-touch-icon-180.png`, `icon-192/512.png` | `app-icon/icon-180.png`, `icon-192/512.png` + `-maskable` |
| `og/og-image-1200x630.png` | `og/og-1200x630-charcoal.png` |
| `email/fiper-email-header-dark@2x.png`, `-white@2x.png` | `email/email-header-160-paper@2x.png` (v2.3.4; the v2.1 `email-header-160@2x.png` white-box raster and `-dark@2x.png` are themselves superseded → `_deprecated/email/`) |
| — (no mark-only, no mono, no vector dark lockup existed) | `svg/fiper-mark-*.svg`, `svg/fiper-*-white|black|red.svg`, `print/*` |

Consumers: replace the files at the paths they serve today (fiper.io: `/logos/fiper-white.svg`, `/favicon.ico`, `/apple-touch-icon.png`, `/icon-512.png`, `/og-image.png`), keep the file names their HTML expects, and pin **fiper-brand v2.1.0**. Hand-off zip: `dist/fiper-logo-v2.1.0.zip`.

## 8. Files and gates

Everything is generated: `python3 scripts/logo-variants.py` (wordmark geometry from the official outlines) → `node scripts/build-logo-pack.mjs` (every file above into `brand/logos/`; the e-mail headers take their paper ground from `tokens.json` `semantic.color.light.bg`, never a free hex) → `node scripts/verify-logo-pack.mjs` (existence, SVG parse, no font/text/raster references, PNG dimensions, ICO sizes, vector-only print files, contrast; v2.3.4: the four corners of every `-paper` mail header equal the paper token — an opaque white pixel fails —, the `-transparent` corners are α0, and no superseded header may remain in `logos/email/`). Superseded files: `logos/_deprecated/README.md`. Board: `node scripts/build-logo-board.mjs`. Source of the measurements: `FORENSICS.md`.
