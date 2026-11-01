# brand/logos — the approved logo set (v2.1.1, variant A — dotted i, CEO decision 30 Oct 2026; v2.1.1 = pure-vector shadow, no SVG filter)

Every file here is generated from one geometry (`v2.1/_masters/wordmark-geometry.json`, variant A) by `scripts/build-logo-pack.mjs` and checked by `scripts/verify-logo-pack.mjs`. The mark is the official tile and swoosh (cleaned to true vector); the wordmark is the official outline with a tittle on the i. Rules, placements, minimum sizes, clear space, colourways, CMYK: `USAGE.md`. Measurements: `FORENSICS.md`. The decision record: `LOGO-OPTIONS.md` + `APPROVED.md`.

| Folder | Files | Status | Use |
|---|---|---|---|
| svg/ | fiper-{lockup-horizontal, lockup-stacked, wordmark, mark}-{colour, colour-paper, white, black, red}.svg + fiper-*-clear-space.svg | APPROVED (CEO pick) | masters: colour on charcoal, colour-paper (#2C2929 wordmark) on paper, white / black / red for one-colour reproduction |
| png/{lockup-horizontal, lockup-stacked, wordmark, mark}/ | fiper-<kind>[-paper|-on-charcoal|-on-paper]-h{24…1024}@{1,2,3}x.png | APPROVED (renders) | rasters where SVG is impossible; transparent (white wordmark), transparent dark wordmark (`-paper`), on charcoal, on paper |
| favicon/ | favicon.ico (16+32+48), favicon.svg, favicon-16/32/48.png | APPROVED | browser tab |
| app-icon/ | icon-180.png (apple-touch-icon), icon-192.png, icon-512.png, icon-192-maskable.png, icon-512-maskable.png, icon.svg, icon-maskable.svg | APPROVED | iOS / Android / PWA |
| og/ | og-1200x630-charcoal.png (default), og-1200x630-paper.png | APPROVED | share image |
| social/ | avatar-400.png, avatar-800.png (+ -paper) | APPROVED | profile pictures |
| email/ | email-header-{120,160}-paper.png / -paper@2x.png (dark lockup flattened on the paper token #F7F4F1 — the mail shell), email-header-{120,160}-transparent.png / @2x (alpha) | APPROVED (v2.3.4 — the white-box and dark headers of v2.1–v2.3.3 moved to `_deprecated/email/`, FI7-017) | mail headers (320 × 112 → 160 × 56 CSS px) |
| print/ | fiper-<kind>-<colour>.eps / .pdf (RGB) and -cmyk.eps / -cmyk.pdf (DeviceCMYK, PROPOSED conversion) | APPROVED files · CMYK values PROPOSED | office and press print |
| _source-fiper.io/ | the v2.0 files from fiper.io and the landing-page repo (dotless i) + the quarantined v1.0 copies | **SUPERSEDED / DEPRECATED** — provenance only, referenced by nothing (`verify-identity` fails on a reference) | geometry source of the mark; history |
| v2.1/ | _masters (geometry JSON), _forensics (typeface evidence), MANIFEST.json of the candidate round | build inputs / evidence | — |

Still missing (official file does not exist): the **Arabic lockup «فايبر»** (name set as text beside the logo) and the Fipo character — `brand/MISSING-ASSETS.md`. Never modify these files; regenerate from the geometry instead (`node scripts/build-logo-pack.mjs`).
