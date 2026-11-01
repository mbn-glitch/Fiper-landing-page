# Logo usage — Fiper Brand v2.2.0 (approved set: variant A — dotted i, CEO decision 30 Oct 2026)

Master: `brand/logos/svg/fiper-lockup-horizontal-colour.svg` (439 × 154 units; mark tile 152 × 154, corner 23 %, gradient `#E03636 → #AD1D1C → #9C1515` — artwork only, never a UI fill; wordmark = the official outlines with a tittle on the i). Everything in `brand/logos/` is generated from the same geometry; full rules: `brand/logos/USAGE.md`.

| Need | File | Status |
|---|---|---|
| Lockup on charcoal (nav 26 px, app header) | `svg/fiper-lockup-horizontal-colour.svg` · `png/lockup-horizontal/fiper-lockup-horizontal-h48@1x/2x/3x.png` | APPROVED |
| Lockup on paper / white (documents, mail, light surfaces) | `svg/fiper-lockup-horizontal-colour-paper.svg` (wordmark `#2C2929`) · `png/lockup-horizontal/fiper-lockup-horizontal-paper-h48@1x/2x/3x.png` | APPROVED |
| Mark only (header icon slot, video corner, avatars) | `svg/fiper-mark-colour.svg` · `png/mark/*` · `social/avatar-400/800.png` | APPROVED — minimum 16 px |
| Stacked lockup (splash, square profiles — no video end cards since v2.3.1) | `svg/fiper-lockup-stacked-colour.svg` · `png/lockup-stacked/*` | APPROVED — ≥ 48 px high |
| Favicon | `favicon/favicon.ico` (16+32+48), `favicon.svg`, `favicon-16/32/48.png` | APPROVED |
| App icons | `app-icon/icon-180.png` (apple-touch-icon), `icon-192.png`, `icon-512.png`, `icon-192/512-maskable.png` | APPROVED |
| OG / share | `og/og-1200x630-charcoal.png` (default), `og-1200x630-paper.png` | APPROVED |
| E-mail header | `email/email-header-160-paper@2x.png` (dark lockup on the **paper** token `#F7F4F1`, 320 × 112 → 160 × 56 CSS px — v2.3.4, FI7-017); `-transparent@2x.png` only for a header on a white card; no dark header (paper in every mode); the old `email-header-160@2x.png` / `-dark@2x.png` are refused (`verify-identity` OLD-EMAIL-HEADER) | APPROVED |
| One-colour reproduction | `svg/fiper-*-white.svg`, `-black.svg`, `-red.svg` + `print/*-black.*` | APPROVED (red = PROPOSED colour) |
| Print | `print/fiper-*-colour-paper.pdf|.eps` (RGB), `*-cmyk.pdf|.eps` (DeviceCMYK, PROPOSED values) | APPROVED files |

Sizes: nav/app header 26 px high; minimum lockup **80 px wide** (28 px high) on screen / 6 mm print; mark ≥ 16 px / 4 mm; stacked ≥ 48 px; document header 8 mm; video corner 64 px on 1080 w; splash stacked 120–240 px. Clear space: **0.5 × mark height** on all sides. RTL: the lockup never mirrors. The Arabic name فايبر is text beside the logo, never a logo (MISSING ASSET #4).
Grounds: colour on charcoal; colour-paper on paper/white; mono files for one-colour reproduction only; never on brand red or on photography without a scrim; logos switch with the theme.
Superseded: the v2.0 fiper.io files (dotless i — `fiper-lockup-white.svg`, `fiper-lockup-dark@Nx.png`, `fiper-lockup-stacked-white-*.png`, `apple-touch-icon-180.png`, `og-image-1200x630.png`, `fiper-email-header-*.png`) live in `brand/logos/_source-fiper.io/` and must not be referenced (`verify-identity` rule OLD-LOGO-FILE). Migration table: `brand/logos/USAGE.md` § 7.
Never: recolour · flatten the gradient on screen · add glow/extra shadow/outline · stretch · rotate · place on red or busy photos · below minimum size · mirror · retype "Fiper" in any font · Arabic wordmark · circle/squircle re-crop by hand (use `app-icon/`) · use a superseded or candidate (B/C) file · scale the tittle or re-space the letters.
