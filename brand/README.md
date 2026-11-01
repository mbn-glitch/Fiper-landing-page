# Fiper Brand Identity System v2.3.1 — operational rules

Single source of truth: the repo `Fiper-Global/fiper-brand` (this `brand/` folder is the drop-in copy). Version **v2.3.4** · 1 Nov 2026 (**v2.3.4 = the invoices system's three change requests — the mail header on the paper ground (FI7-017), textual token values quoted in `tokens.css` so PostCSS / Next parse it, destructive actions never filled (CEO 1 Nov 2026); v2.3.3 = the CEO's decisions of the evening of 31 Oct 2026 — CR-A in its final form: on partner content (tier=person) the side risk line carries the entity and the company registration number inside it, in the reel's language — «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» / "Investing involves risk — Fiper Global, Company registration number GB23201759" — and nowhere else on the frame, the partner caption carries the Mauritius entity line only, the licence wording stays refused; CR-B no partnership disclosure on any surface; CR-C the lower third's role line = the partner's self-description; CR-D the fourteen-field delivery package mapped to the script contract; every Partners-Studio script is tier=person (G-Q4); screen texts → annotate with one title card at most (G-Q5); official tier, e-mails and legal texts unchanged. v2.3.2 = the Partners Studio change requests 1–12 decided by the CEO on 31 Oct 2026 — the Mauritius company registration number corrected to GB23201759 everywhere (the captured typo G823201759; wording stays «Company registration number», no licence line), the 9:16 side risk line on the LEFT edge at 24 px muted, the lower third centre-bottom at 80 % ≤ 4 s, the entity line never burnt into video (caption template AR + EN), profit / loss colours only on financial values in video captions, caption groups ≤ 26 characters and caption text = the spoken words, the matching caption hidden under the takeaway, blurred backdrop for non-9:16 sources, takeaway / title card 76 px inside 130 px margins, `take-selection.md`, the `Closing` component removed; the pending v2.2.0 items closed: e-mails in the recipient's language with one equivalence line, the paper ground in every mode (no dark-scheme rules in mail), QR ≥ 160 px recommended 12 % never above 300 px, the fixed risk line in the foot of the sign-in screen and of every app screen with financial figures (`.fp-risk-foot`); v2.3.1 = the CEO decisions of 31 Oct 2026 on video — no closing card in any video, the logo on every frame of official content and never on partner personal-brand content, semantic word emphasis in video captions, no music by default until licensed — plus the approved editorial layer for partner reels `templates/video/partner-edit.md`, its tokens `video.person_edit`, its gate `scripts/check-partner-edit.mjs` and the caption template; v2.3.0 = the video & motion production kit — `templates/video/` component library, audio chain, voice/music/footage/compositing/claims/review rules, acceptance gates (`CHANGELOG.md`); v2.2.0 = the CEO closed decision items 1–5 and answered the 17 production questions of the Creative Studio: Barlow Condensed + Inter, UI red #DC2626, light theme for apps APPROVED as optional with dark as the default, loss/danger = red, Lucide; the fixed risk line on every visual output; entity texts in the regulatory matrix — `CHANGELOG.md`, `references/composition-rules.md` § 11; ** v2.1.1 = logo SVGs re-issued as pure vector: the drop shadow is an offset vector shape, no SVG filter — crisp on WebKit/iPhone at every DPR; artwork unchanged) (the v1.2.1 visual direction APPROVED and generalised in v2.0; v2.0.1 = limited correction round, frozen; **v2.1 = logo refinement ordered by the CEO on 30 Oct 2026 — three wordmark variants A / B / C in `logos/v2.1/` await the CEO's pick, see `logos/LOGO-OPTIONS.md`; rc1 freezes to v2.1.0 with that pick**; v1.0.0 / v1.1.0 / v1.2-review / v1.2.1-review are ARCHIVED history, see `CHANGELOG.md` and `dist/archive/`). The approval covers the visual direction only: decision items 1–5, the regulatory matrix, missing assets and untested items keep their documented state; light mode for apps is NOT approved. Every value carries a status (`tokens.json` `$extensions.fiper.status` + `fiper.source`): **APPROVED** — an explicit decision (task file / founder) or an official logo file; beats the site's implementation within its topic (IBM Plex Sans Arabic is APPROVED although fiper.io still serves Cairo; the official logo files govern the logo's form) · **OBSERVED** — captured from https://fiper.io/ production on 2026-10-29 (index.html md5 `7628659a07bb6e98407b61f776c100c4`, logo svg md5 `71f488d6afe1324a9757625efad13893`); governs values not settled by a newer decision; **an observed spacing or size is not automatically a rule** · **PROPOSED** — absent from every source; recommended default applied and labelled · **DEPRECATED** — never use (Cairo, `#F42821`, `#A30100`, `#0A0A0A`, the fixed 34/35 px logo radius, `Fiper-Brand-Guide.html`, `fiper-tokens.css`, `fiper-theme.css`). Origins: `value-sources.md`; missing official assets: `MISSING-ASSETS.md`; words: `glossary.md`; legal scope: `regulatory-matrix.md`; composition: `references/composition-rules.md`. The printed manual (`dist/Fiper-Brand-Manual-v2.1.0.pdf`) explains; this file is what you apply. Composition (the approved language — two grounds, three poles, lockup-derived margins, use-serving cards, red roles, chart contract, numeric units): `references/composition-rules.md`.

Open items (decision items 1–5, regulatory rows, missing assets, untested) live in ONE register: `brand/OPEN-ITEMS.md` — delivery acceptance does not change their status. Decision items 1–5 are CLOSED (CEO, 30 Oct 2026); light mode for apps is APPROVED as optional, dark stays the default.

Arabic brand name: **فايبر** (never فيبر). English: **Fiper** / **Fiper Global**. Arabic-first, RTL default, mobile-first (390 px design width). Apps are dark (charcoal); documents, e-mails, educational/corporate posts and presentations sit on the paper ground `#F7F4F1` (composition rule, not an app light mode).

## Install (any repo)

```sh
cp -r brand/ <repo>/brand/                       # tokens, fonts, logos, components, templates, checklists
mkdir -p <repo>/.claude/skills && cp -r brand/skill/fiper-brand <repo>/.claude/skills/   # every Claude Code session applies the identity
```
```html
<link rel="stylesheet" href="/brand/fonts/fonts.css">   <!-- before tokens.css -->
<link rel="stylesheet" href="/brand/tokens.css">        <!-- --fp-* variables, dark canonical, [data-theme=light] PROPOSED -->
<link rel="stylesheet" href="/brand/components/components.css">
<html lang="ar" dir="rtl">                              <!-- Arabic UI switches --fp-font-ui to IBM Plex Sans Arabic automatically -->
```
```js
// tailwind.config.js
module.exports = { presets: [require('./brand/tailwind.preset.js')], content: ['./src/**/*.{tsx,html}'] };
// classes: bg-bg text-fg text-fg-muted bg-surface border-line text-gain text-loss font-mono (numbers/code only) rounded-pill z-header
```
Never hard-code a hex in app code: use `var(--fp-…)` or the preset. Exceptions: e-mail HTML and SVG templates (hex copied from `tokens.json`).

### Tokens pipeline (one source, generated outputs)
`tokens.json` is primary — **DTCG Design Tokens Format Module 2025.10**, layered `primitive` (raw values, `--fp-p-*`, never used directly in apps) → `semantic` (roles, `--fp-*`) → `component` (`--fp-c-*`). Generated from it, never edited by hand: `tokens.css`, `tailwind.preset.js`, `skill/fiper-brand/references/tokens-quick.md`, the token table in `value-sources.md`. Tooling: Node **24.21.0**; Tailwind preset usable with 3.4 and 4.x (`theme.extend`); references are Style Dictionary 4-compatible (`{path.to.token}`); Playwright-core 1.56.1 for the checks.

```sh
# (A) INSIDE THE PACKAGE — run from the folder that CONTAINS brand/ (repo root, or the parent of the unzipped package). Node only, no Playwright.
node brand/scripts/build-tokens.mjs      # tokens.json → tokens.css + tailwind.preset.js (every preset value derived from tokens.json; observed-only site treatments emitted as --fp-observed-* documentation variables, excluded from the preset)
node brand/scripts/verify-tokens.mjs     # references resolve, status vocabulary, no raw hex in semantic/component, CSS vars used exist, no deprecated value in components/templates
node brand/scripts/contrast.mjs          # WCAG table read from tokens.json → ./checks/contrast.json (CONTRAST_OUT=… to override); exit 1 if a required pair is below threshold
node brand/scripts/verify-identity.mjs brand     # identity gate on the WHOLE package incl. the generated tokens.css + tailwind.preset.js (.js/.mjs/.cjs/.json are scanned; only --fp-observed-* lines are whitelisted)
node brand/scripts/verify-identity.mjs <paths>   # consumer gate (below)
node brand/scripts/verify-skill-wired.mjs        # consumer repo only: skill present, CLAUDE.md mandate, tokens.css + fonts.css wired
# modules: brand/scripts/charts.mjs (lineChart / injectCharts) + brand/scripts/sample-data.mjs (the one SAMPLE dataset)
```
```sh
# (B) BUILD REPO ONLY — Fiper-Global/fiper-brand (needs Playwright Chromium, pypdf, ImageMagick). NOT shipped in the zip.
node scripts/render-manual.mjs           # manual/index.src.html → dist/Fiper-Brand-Manual-v2.1.0.pdf + dist/pages (layout gate: overflow + intersections)
python3 scripts/check-pdf-fonts.py       # fonts actually used in the PDF = brand fonts only
node scripts/check-units.mjs --ref=…     # unbreakable numeric units in HTML and PDF
node scripts/check-rendered-contrast.mjs # contrast of the colours actually rendered inside manual examples / mockups (v2.0.1)
node scripts/check-mockups.mjs · check-components.mjs · check-a11y.mjs · check-fonts.mjs · check-templates.mjs · check-emails.mjs
node scripts/gen-doc-tables.mjs          # tokens-quick.md + value-sources token table
node scripts/build-review.mjs · build-preview.mjs · package.mjs · verify-unzipped.mjs <zip> <clean dir>
```
Regeneration must reintroduce no banned value: after `build-tokens`, `verify-identity brand` must still PASS and `git diff brand/tokens.css brand/tailwind.preset.js` must be empty against the delivered files. Consumers pin **fiper-brand v2.0.1** — git tag `v2.0.1` — `fiper-brand-v2.0.1.zip` (sha256 in `dist/fiper-brand-v2.0.1.zip.sha256`). One-token flip rule: applies to **colour, radius, motion and z-index** tokens only (edit → `build-tokens` → `verify-tokens` → `contrast`). A **font, icon-set or display-style change** (decision items 1 and 5) is never a one-token change: it requires re-checking `components/preview.html`, the eight mockups, the e-mail/document/social/video templates and the manual before release.

### Dev-tooling wiring (every consumer repo)
1. `cp -r brand/skill/fiper-brand .claude/skills/fiper-brand` and paste `brand/skill/fiper-brand/references/claude-md-paragraph.md` into the repo's `CLAUDE.md`.
2. `node brand/scripts/verify-skill-wired.mjs` — proves the reference is wired (skill present, CLAUDE.md mandate, tokens.css + fonts.css referenced from an entry file).
3. `node brand/scripts/verify-identity.mjs src public` before every commit (pre-commit hook or CI): fails on non-token hex colours, deprecated values, non-brand font families, any letter-spacing inside `[lang=ar]`/`[dir=rtl]` rules, Latin letter-spacing above `.06em` outside `.fp-num`/OTP, a monospace family on label/eyebrow/heading/caption/table-header selectors, red glow shadows (`rgba(220,38,38…)` in `box-shadow`), references to `_unapproved-proposals` or `DERIVED` logo files, ISO timestamps in display strings, emoji, pure black, non-brand gradients, raw URLs in e-mail text; it reports (without failing) Unicode symbols used as icons outside finance text spans.
Result on this package: see `qa-report.md` (v2.0.1 run). `verify-skill-wired` is for consumer repos (this repo is the source, not a consumer: 4 of 5 checks fail here by design).

## A · Brand architecture

| Level | Form | Rule |
|---|---|---|
| Master brand | Fiper / Fiper Global · فايبر / فايبر جلوبال | The only logo. Every surface carries it. |
| Product descriptors | Fiper Card · بطاقة فايبر / Fiper ETF · فايبر ETF / Fiper Terminal / Fiper Hub + Fipo / Fiper Academy / Fiper Funds / Partner Program / client area (crm.fiper.me) | Master logo + descriptor as **text** (display font EN, IBM Plex Sans Arabic 700 AR). No product gets its own mark. |
| Endorsement | **"X by Fiper" · "X من فايبر"** (e.g. SPUS by Fiper · SPUS من فايبر) | For affiliated products with their own name: the product name first, the endorsement line in muted text, master logo in the footer/corner. |
| Partner white-labels | Zenova, Rostova … | Palette-shifted clones: own name/colour, **Fiper's regulatory block verbatim** stays, Fiper logo in the legal footer only. |
| Out of scope | FPT / Fiper Pro Traders (own red `#F42821`, own logo), TWO Markets by Fiper (TWO master identity, endorsement line only), Fiper Tech Group | Only the endorsement rule above applies; nothing else from this system. |

Don't: create product sub-logos, colour-code products, put "by Fiper" on a core product (Fiper Card is not "Card by Fiper"). Names, buttons, states and taglines AR–EN: `glossary.md`. Lockup ratios (PROPOSED): `MISSING-ASSETS.md`.

## B · Logo system

**v2.1.0 (30 Oct 2026): the CEO approved the refined wordmark (variant A — the official letterforms with a tittle on the i; the dotless i read as "F1per") and generalised it. `logos/{svg,png,favicon,app-icon,og,social,email,print}` is the approved set, generated from one geometry (`scripts/build-logo-pack.mjs`, gate `scripts/verify-logo-pack.mjs`); rules: `logos/USAGE.md`; measurements: `logos/FORENSICS.md`; decision record: `logos/LOGO-OPTIONS.md`. The v2.0 fiper.io files are SUPERSEDED (`logos/_source-fiper.io/`, referenced by nothing — `verify-identity` rule OLD-LOGO-FILE).** Files in `logos/`. Master artwork: `svg/fiper-lockup-horizontal-colour.svg` (439 × 154 units, APPROVED). Official logo files govern the logo's **form**; missing variants are recorded in `MISSING-ASSETS.md` (never invented). Mark = 152 × 154 rounded square, corner `rx 35` = **23 % of the mark width** (scales with the mark; never a fixed 35 px). The mark's own gradient `#E03636 → #AD1D1C → #9C1515` is logo artwork only, never a UI fill.

| Placement | File | Size | Status |
|---|---|---|---|
| Navbar / app header (dark) | `svg/fiper-lockup-white.svg` | height **26 px** (= 74 px wide) | OBSERVED height (fiper.io `.blogo`); file APPROVED |
| Navbar / header on light ground | `png/fiper-lockup-dark@2x.png` / `@3x.png` (official raster, `Fiper Logo 2 black.png` trimmed and downscaled only) | 26 px | APPROVED raster; no official vector exists — MISSING ASSET #1 (raster only, max 531 px high at 100 %) |
| Mark only (app header, video corner, avatars) | **MISSING ASSET #3 — no mark-only file exists in any format** (the 720² `Fiper Logo white2.png` is the *stacked* lockup, not the mark). Interim: the full white lockup `svg/fiper-lockup-white.svg` at ≥ 20 px (26 px in headers); where a square tile is required, the official app icon `app-icon/icon-512.png` / `apple-touch-icon-180.png` | ≥ 20 px | interim rule PROPOSED; the earlier mark crops are quarantined (NOT APPROVED) |
| Stacked lockup (splash, square profiles, dark end cards) | `png/fiper-lockup-stacked-white-h80/h160/h240.png`, `png/fiper-lockup-stacked-white.OFFICIAL-trim.png` (official raster, `Fiper Logo white2.png` trimmed and downscaled only) | h 80–240 px | APPROVED raster (sizes PROPOSED) |
| Dark-on-light lockup, print | `png/Fiper_Logo_2_black.OFFICIAL-PNG-ONLY-3000.png` / `png/fiper-lockup-dark.OFFICIAL-trim.png` (1526 × 531) | up to ~130 mm wide at 300 dpi | APPROVED PNG only; no official vector exists (MISSING ASSET #1) |
| Favicon | `favicon/favicon.ico` (32), `favicon-16/32/48/64.png` | 16–64 | APPROVED ico; PNGs downscaled from the APPROVED `icon-512` (PROPOSED renders) |
| App icon | `app-icon/apple-touch-icon-180.png`, `icon-192.png`, `icon-512.png` | 180 / 192 / 512 | APPROVED (192 = downscale, PROPOSED). Never re-crop the mark into an OS mask yourself. |
| Splash | stacked white lockup `png/fiper-lockup-stacked-white-h240.png` centred on `--fp-ground-bg`, nothing else | h 160–240 px | PROPOSED |
| OG / share | `og/og-image-1200x630.png` | 1200 × 630 | APPROVED |
| E-mail header | `email/email-header-160-paper@2x.png` (official dark raster **flattened on the paper token** `#F7F4F1`, 320 × 112 → 160 × 56 CSS; v2.3.4 — the v2.1–v2.3.3 file sat on an opaque white box, FI7-017; `-transparent[@2x]` twin for a white card; old files in `logos/_deprecated/email/`) — the only mail header since v2.3.2: mails ship one paper rendering in every mode (no dark-scheme swap, CEO 31 Oct 2026) | 160 × 56 CSS | APPROVED rasters (sizes PROPOSED) |
| Document header | lockup 8 mm high, top-start corner, clear space respected | 8 mm | PROPOSED |
| Video corner | `svg/fiper-lockup-horizontal-colour.svg` **96 px** high on a 1080 px frame width at **64 px** inset, top-start, 100 % opacity, never animated after the reveal (56 px is the UI header only — Q1); **present on every frame of official content, never hidden; no closing card in any video (CEO 31 Oct 2026) — the film ends on the takeaway over the last shot; NO Fiper logo on partner personal-brand (person-tier) videos**; the risk line runs as a persistent SIDE line for the whole film to the last frame; the entity line in the post caption (`templates/video/video-rules.md` § Logo by content type, `caption-template.md`) | 96 px / 64 px | APPROVED (CEO 30–31 Oct 2026) |
| Raster lockups | `png/fiper-lockup-white@1x/2x/3x.png` (40/80/120 px high), `fiper-lockup-white-1756x616.png` | — | renders of the APPROVED master (PROPOSED sizes) |

**No modified version of the logo exists or is allowed** — no recolouring, cropping, retracing, flattening or re-centring, not even labelled PROPOSED; the earlier recoloured / cropped copies (dark SVG, mark-crop SVG, mark crops cut from the stacked PNG) are quarantined in `logos/_unapproved-proposals/` (NOT APPROVED, referenced by no template or component; `verify-identity` fails on any reference to them). Ready-to-use assets are only those listed above (`logos/README.md`). Rules (PROPOSED, measured from the artwork; product-name, "by Fiper" and partner lockup ratios: `MISSING-ASSETS.md` § PROPOSED lockup rules; no Fipo character exists — none created): clear space = **0.5 × lockup height** on all sides (= half the mark width); minimum lockup **20 px screen / 6 mm print**; stacked lockup minimum 48 px high (no mark-only file exists, so no mark minimum applies); the lockup never mirrors in RTL (`direction: ltr` on the brand element, as on fiper.io); the Arabic name **فايبر** is set as text next to the logo, never as a logo — **DECIDED (CEO 30 Oct 2026): the logo is Latin-only on every surface, including Arabic-direction materials; no Arabic lockup is needed (MISSING-ASSETS #4 closed)**; RTL layouts place the Latin lockup at the inline-start and never mirror it.

Misuse (never): 1 recolour the mark or wordmark · 2 strip the mark's gradient to flat red · 3 add a glow, shadow or outline (the artwork already carries its own drop shadow) · 4 stretch or condense · 5 rotate · 6 place on brand red or on a photo without the ground · 7 render the lockup under 20 px / the mark under 16 px · 8 mirror in RTL · 9 retype "Fiper" in Barlow Condensed as a logo · 10 build an Arabic wordmark · 11 re-crop the mark into a circle or an OS squircle · 12 put "by Fiper" on a core product or pair the logo with a product sub-mark.

## C · Colour

Tokens in `tokens.css` (`--fp-*`); roles below. Dark canonical; light PROPOSED under `[data-theme="light"]`.

| Role | Token | Dark (OBSERVED unless marked) | Light (PROPOSED) |
|---|---|---|---|
| Ground | `--fp-ground-bg` | `#0A0708` (never `#000`) | `#F7F4F1` |
| Raised ground / nav scrim | `--fp-ground-coal` | `#120D0E` | `#FFFFFF` |
| Card / panel | `--fp-ground-panel` | `#171112` | `#FFFFFF` |
| Media frame | `--fp-ground-frame` | `#0E0C0D` | `#EFEBE7` |
| Hairline | `--fp-line-ash` | `rgba(237,234,230,.09)` | `rgba(18,13,14,.10)` |
| Hover / active line (hover only, 2.78:1) | `--fp-line-strong` | `rgba(237,234,230,.35)` | `rgba(18,13,14,.35)` |
| Field / control boundary (≥ 3:1) | `--fp-line-input` | `rgba(237,234,230,.40)` PROPOSED | `rgba(18,13,14,.35)` + 1 px `#120D0E` focus |
| Small labels, eyebrows, table headers, captions | `--fp-text-label` | `#8E8681` (5.61:1) PROPOSED role | `#6B635E` |
| Text primary | `--fp-text-primary` | `#EDEAE6` (16.7:1) | `#120D0E` |
| Text muted | `--fp-text-muted` | `#8E8681` (5.6:1) | `#6B635E` |
| Brand red = brand + the single primary action | `--fp-brand-red` | `#DC2626` | same (buttons); as text use `--fp-red-as-text` `#B91C1C` |
| Primary gradient end | `--fp-brand-red-gradient-end` | `#A31212` | same |
| Pressed | `--fp-brand-red-deep` | `#7A1512` (PROPOSED role) | same |
| Focus ring / live accent | `--fp-brand-ember` | `#F0421B` (PROPOSED role) | same |
| Text / icon on brand red | `--fp-text-on-brand`, `--fp-text-icon-on-brand` | `#FFFFFF` (4.83:1 — `#EDEAE6` on red is 4.03:1 and **fails** AA body; never use it on buttons) | same |
| Text on solid success / danger fills | `--fp-text-on-success`, `--fp-text-on-danger` | `#0A0708` (7.48 / 6.94) PROPOSED | — |
| Success | `--fp-state-success` | `#2AB37A` | `#187A50` |
| Danger (system error) | `--fp-state-danger` | `#F05252` **APPROVED** (CEO 30 Oct 2026: loss/danger = red) | `#B91C1C` |
| Loss (value fact — separate token, same colour) | `--fp-finance-loss` | `#F05252` **APPROVED** (5.76 on bg, 5.36 on panel) | `#B91C1C` (5.9 on paper) |
| Warning / pending | `--fp-state-warning` | `#D9A441` **PROPOSED** | `#8A5F0B` |
| Info | `--fp-state-info` | `#5B9BD5` **PROPOSED** | `#2F6FAE` |

Rules (APPROVED, CEO decision 30 Oct 2026): brand red has **three UI roles** — the logo tile, the one primary action per screen, and the active state (active tab icon + bar, range marker, current-value dot) — **plus the exempt finance semantics: loss red `--fp-finance-loss` `#F05252` / profit green**; a red figure is never a button, numbers in IBM Plex Mono, never on a filled red ground, no red text otherwise (no decorative red, no red numbers for emphasis, **no red small labels** — labels use `--fp-text-label` = muted `#8E8681`, 5.61:1). Finance semantics are separate tokens, never brand red. Red as text (4.15:1 on bg, 3.86 on panel) is allowed only under the WCAG large-text exception: **≥ 24 CSS px (18 pt) regular or ≥ 18.67 CSS px (14 pt) bold** — a 14 px bold label does **not** qualify; below that use `--fp-brand-ember` (5.25:1) or a text colour. Secondary text on the dark ground: lighter raises contrast, darker lowers it — the floor is `#8E8681` (never darker). Field and control boundaries use `--fp-line-input` `rgba(237,234,230,.40)` (3.31:1 on bg, 3.39 on panel — WCAG 1.4.11); `--fp-line-strong` (.35, 2.78:1) is a hover affordance only, never the sole boundary or state cue. Text over the primary gradient is `#FFFFFF` (4.83:1 at `#DC2626`, 7.92 at `#A31212`). **No glow, halo or neon** around buttons or cards: the site's `box-shadow: 0 6px 26px rgba(220,38,38,.35)` is an OBSERVED marketing treatment recorded in `--fp-shadow-primary` and **not applied** (component token `--fp-c-button-primary-shadow: none`). Charts: `--fp-chart-series-1…6`, candles `--fp-chart-candle-up/down`, grid `--fp-chart-grid`; at most one brand-red series per chart. Measured contrast table: manual page "Colour" / `manual/contrast.json`.

### Finance semantics (binding)

| State | Token | Shown as |
|---|---|---|
| Gain | `--fp-finance-gain` (= success) | word **ربح / Gain** + sign `+` + colour |
| Loss | `--fp-finance-loss` (own token; **`#F05252`** on charcoal, `#B91C1C` on light — red by CEO decision 30 Oct 2026, **never the brand red token** `--fp-brand-red`). `finance.loss` is a *value fact* (price went down); `state.danger` is a *system error* (payment failed) — same colour, different token, never swapped | word **خسارة / Loss** + sign `−` (U+2212) + colour |
| Neutral | `--fp-finance-neutral` (= muted) | `0.00`, no sign — **zero is a value**; missing data is `—` + «لا بيانات», never `0.00` |
| Pending | `--fp-finance-pending` (= warning) | word **قيد التسوية / Pending** + clock icon + colour |

Never colour alone. Every amount: `<span class="fp-num" dir="ltr">1,250.00</span> USD` (mono, tabular, Latin digits, isolated). Precision follows the currency's minor unit and the data contract (USD = 2 decimals from integer cents; units up to 4 decimals trimmed; percentages 2 decimals from bps) — never "two decimals for everything"; details per product in `fiper-funds-application-note.md` § Precision.

## D · Typography

| Role | Family (weights) | Status |
|---|---|---|
| Latin display (headings, stats) | Barlow Condensed 600 / 700 / 800, uppercase, letter-spacing .5 px, line-height 1.05 | OBSERVED (decision item 1: keep — not yet APPROVED) |
| Latin body / UI | Inter 400–700, line-height 1.65 | OBSERVED (decision item 1) |
| Numbers and code **only** (`.fp-num`, `code`, OTP boxes, references) | IBM Plex Mono 400 / 600, `font-variant-numeric: tabular-nums lining-nums` — never on eyebrows, labels, table headers, captions, headings or body | APPROVED (standing decision; the site's mono eyebrow is a SOURCE OBSERVATION, not adopted) |
| Small labels (field labels, table headers, chart period) | Inter 600, `.75rem`, uppercase, letter-spacing `.06em` max, colour `--fp-text-label`; Arabic: IBM Plex Sans Arabic 600, `letter-spacing: 0`, no uppercase. No slash label prefix, no decorative eyebrow — a label exists only where it names a value (v2.0) | APPROVED direction (v2.0) |
| Arabic — everything | IBM Plex Sans Arabic 400 / 500 / 600 / 700 (replaces Cairo — DEPRECATED; fiper.io migrates in its own round) | APPROVED decision 27 Oct 2026 |
| Alternative Latin pair (shipped, inactive) | IBM Plex Sans 400–700 | PROPOSED (decision 1 option B) |

Arabic rules: `letter-spacing: 0` **always, everywhere, no exception** (the `.02em` on fiper.io's Arabic eyebrow, line 267, is a source observation that the decision overrides); real weights 600/700, never `font-synthesis` bold; line-height **1.9** body, **1.3** h1 (1.45 h2, 1.5 card titles); headings in IBM Plex Sans Arabic 700, `text-transform: none`; Latin digits (`numberingSystem latn`) everywhere; mixed runs wrapped in `<bdi>` or `unicode-bidi: isolate` with `dir="ltr"` on numbers, codes, tickers, e-mails; punctuation Arabic (، ؛ ؟) in Arabic copy; never a Latin display font for Arabic words. Font inheritance: every element that can carry Arabic (table headers, inputs, buttons, badges, chips, captions, mixed-script runs, template text) must resolve to IBM Plex Sans Arabic under `lang="ar"` — a monospace or Latin-only family on such an element produces a FreeSerif/Liberation fallback, which is a defect; verify the fonts actually used (`pdffonts` / `scripts/check-pdf-fonts.py` for PDFs, DevTools Rendered Fonts for screens). Art direction: no futuristic or decorative fonts, no fake "tech" headings, no letter-spaced Latin caps beyond `.06em`; the Latin display face is Barlow Condensed as the headline voice only.

Fonts are shipped as the complete official files per weight (Google Fonts full TTF → woff2, OFL 1.1, reserved font names untouched, no merging or subsetting — the IBM Plex Sans Arabic files already carry Latin letters, digits and currency symbols); rendering integrity evidence: `qa-report.md` § Fonts.

Type scale (rem on 16 px root; OBSERVED sizes from fiper.io, app sizes PROPOSED):

| Step | Mobile | Desktop | Use |
|---|---|---|---|
| xs | 0.68rem (10.9 px) | 0.68rem | disclaimer, axis labels |
| sm | 0.75rem (12 px) | 0.75rem | small label (Inter 600) |
| sm | 0.75rem (12 px) | 0.75rem | caption, table meta |
| md | 0.85rem | 0.85rem | secondary body, nav links |
| base | 0.92rem / app body 15 px | 0.92rem | body, button label |
| lg | 0.98rem | 0.98rem | lead paragraph |
| xl | 1.3rem / app title 20 px | 1.3rem | card title |
| 2xl | 1.9rem / app display 28 px | 3rem | stat number, balance |
| 3xl | 2rem | 3.1rem | h2 (`clamp(2rem,4.6vw,3.1rem)`) |
| 4xl | 2.9rem | 6rem | h1 (`clamp(2.9rem,8.2vw,6rem)`); Arabic h1 `clamp(2.1rem,6.2vw,4.5rem)` |

Formats (examples): amounts `1,250.00 USD` AR · `USD 1,250.00` or `$1,250.00` EN (currency code shown on every listing, never assumed; minor units per currency — USD: integer cents → 2 decimals; units up to 4 decimals, trailing zeros dropped; see `fiper-funds-application-note.md` § Precision); percentages `+2.35 %` / `−0.80 %`; dates **29 أكتوبر 2026** / **29 Oct 2026** (Latin digits in both); time **14:05 بتوقيت دبي (GMT+4)** / **14:05 GMT+4** — time zone always shown, 24 h; relative time only with the absolute one on tap. Never ISO (`2026-10-29T14:05:00Z`) in any UI, mail or document.

## E · Layout and spacing

4-pt scale `--fp-space-1…30` (4 → 120 px). Gutters 16 px mobile (`clamp(16px,4vw,44px)` OBSERVED), content width `min(1200px, 92%)`. Breakpoints 360 (min) · 390 (design) · 640 · 900 · 1200. Density: comfortable rows 56 px, compact tables 44 px (never below). Radii: pill 999 · card 16 · media/icon tile 14 · sheet 18 (top corners) · input 12 · sm 8. Elevation is **border-first**: level 0 ground, 1 hairline, 2 panel + hairline, 3 overlay (`--fp-shadow-overlay`); the only coloured shadow is the primary button's. z-index: raised 10 · sticky 20 · header 80 · scrim 90 · sheet 100 · toast 110 · tooltip 120. Touch targets ≥ 44 × 44 px. Safe areas: `padding-bottom: calc(56px + env(safe-area-inset-bottom))` on the tab bar, `env(safe-area-inset-top)` on the header. RTL: logical properties only (`inset-inline-end`, `margin-inline-start`); mirror chevrons, back arrows, progress, sliders, tabs order; never mirror the logo, numbers, charts' time axis, media chrome, phone numbers, the legal block (`direction: ltr`). Full table: `components/SPEC.md` § RTL.

## F · Composition (the approved language — full rules in `references/composition-rules.md`)

- **Two grounds**: paper `#F7F4F1` for documents, e-mails, educational/corporate posts and presentations; charcoal `--fp-ground-bg` for apps, market screens and the card advertisement. **Dark is the default; the light theme for apps is APPROVED as optional** (CEO 30 Oct 2026): a complete set under `[data-theme="light"]`, user/system toggle, marketing surfaces stay charcoal, fiperhub.com keeps dark only until its own round. (Former text — a separate open decision.
- **Constant core on every surface**: official lockup top-start (white SVG on charcoal, dark raster PNG on paper); one Arabic headline in IBM Plex Sans Arabic 700; English secondary line Inter 500 muted; numbers in IBM Plex Mono tabular on their own right edge; 1 px rules between hierarchy levels (2 px opening a key-figure block); meta foot bottom-start (entity · reference · date · SAMPLE).
- **Three poles, one per surface**: image-dominant (card ad, product post), headline-dominant (report cover, educational comparison, corporate post, letterhead), number-dominant (portfolio, slide, report inner page, statements, dashboards). Never two dominant elements; never one repeated template.
- **Margins derived from the lockup**: margin = 2 × lockup height per medium (social 72–84 px, slide 112 px, A4 64 px, e-mail 28–40 px; phone gutter 20 px); one vertical start line per surface.
- **Cards and boxes only when they group related information or bound an action** (e-mail facts table, phone chart frame, sheets, selectable fund cards); panel fill, 1 px border, 12–16 px radius, no shadow.
- **Red roles**: logo tile · the one primary action · active state (range marker, active tab icon + bar, current-value dot) **+ the exempt finance semantics** (loss red `--fp-finance-loss` / profit green): a red figure is never a button, numbers in Plex Mono, never on a filled red ground, no red text otherwise. Production rules Q1–Q17 and the risk-line placement rule: `references/composition-rules.md` § 11.
- **Readable supporting information**: social body ≥ 42 px on a 1080 canvas (≈ 14 px at 360 — essential text; marginal meta excluded), phone body 14–15 px, A4 body 14 px, slides ≥ 26 px; shorten or split across slides, never shrink.
- **Charts from one dataset**: `scripts/charts.mjs` + `scripts/sample-data.mjs`; positions, axes, labels and the benchmark are computed; every chart states what it shows, the period, the currency and the end value.
- **Unbreakable numeric units** inside Arabic text: `.fp-unit` / `<bdi class="num">` for amount+currency, sign+number+percent, date parts (nowrap, ltr, isolate).
- **No slash label prefix, no decorative numbering, no technical labels**; numbers as structure only for real sequences; comparisons are tables. Icons (Lucide) only for navigation, state and action — never on headings, never in tiles.

## G · Components

Specs, states and reference CSS: `components/SPEC.md` + `components/components.css` + `components/preview.html`. Covered: buttons (primary / secondary / ghost / danger — outline or text, never filled; `.fp-btn-danger-solid` inside the final confirmation dialog only, v2.3.4; hover, pressed .97, focus ring, disabled, loading), inputs + forms (focus, error copy rules, OTP boxes), cards, financial tables, tabs / segmented control, badges + chips (incl. the Sharia-compliance badge), toasts, empty / loading-skeleton / error states, navigation (bottom tab bar, header, **the risk-line foot `.fp-risk-foot`** — CEO 31 Oct 2026: the fixed line in the foot of the sign-in screen and of every screen that shows financial figures, one muted 11 px line, never red, never over content; mockups 01–04; gate `check-risk-line`), modals / sheets, charts.

## H · Motion

Three principles: **1 respond** (every press answers within 140 ms: scale .97), **2 settle** (surfaces move once, 250–350 ms, `cubic-bezier(.2,.7,.2,1)`, then stop), **3 reveal, don't perform** (content fades 26 px → 0 over 800 ms on first view only). Values: press 140 ms · hover 250 · state 300 · surface 350 · reveal 800; exit easing `cubic-bezier(.22,1,.36,1)`. Never moves: the logo, numbers while they are read, the legal block, tab bar items, table rows on data refresh (values change in place). Never: bounce, overshoot, glow pulses or halos, spinner theatre (skeleton instead), floating cards or parallax in apps (`.cardshow` float is fiper.io marketing only). `prefers-reduced-motion` honoured by `tokens.css`.

## I · Iconography and imagery

Icons: one set — **Lucide v0.468.0** (ISC, vendored subset in `icons/lucide/`, rules in `icons/ICONS.md`, added icons in `icons/REGISTRY.md`; decision item 5 **APPROVED** by the CEO on 30 Oct 2026 — a bespoke, more professional set may replace it later, so the layer stays swappable through the sprite): 24 px grid, line style only, stroke 1.75 / 2 / 2 at 16 / 20 / 24 px (active tab 2.25), round caps and joins, colour inherits the text colour, centred to the text line with an 8 px gap, ≥ 4 px inside a 44 px hit area; directional icons mirror in RTL. An icon exists only to explain a function or a state — never to fill space; no coloured tiles by default (the 52 px `--fp-brand-red-wash` tile is the marketing feature-grid treatment only); no filled variants mixed with line icons without a documented functional reason; no Unicode symbols (■ ▲ ◔ ✓) or emoji standing in for product icons (✓ / ✕ only as text marks inside sentences); no 3D / glossy / duotone icons, no icon fonts.

Imagery: real product only — the official Fiper Card artwork (never generated, never recoloured), composited real screens (cTrader / MT5 mobile app only, pixel-accurate, inside the device bezel `#1B1516`), third-party marks (cTrader, MT5, Autochartist, Trading Central, Visa) from their official packs, unmodified, with their clear space. No stock people, no AI faces by default; if people appear, a documented country-specific wardrobe reference reviewed locally, hands and devices real.

## J · Theme modes

Dark = the DEFAULT (`color-scheme: dark`). Light = **APPROVED as OPTIONAL** (CEO decision 30 Oct 2026, item 3) — **for sites and apps only: system e-mails are the paper ground in every mode and carry no dark-scheme rules (CEO 31 Oct 2026, v2.3.2 — mail clients invert them unpredictably; `component.email.scheme` paper-only)**: the complete app set under `[data-theme="light"]` (`semantic.color.light.*` — ground, panel, elevated, lines, text, actions, states, focus, overlay), same roles, a user/system toggle; marketing surfaces stay charcoal; fiperhub.com keeps dark only until its own round; never auto-switch finance screens on `prefers-color-scheme` without a user setting; logos switch with the theme (white lockup SVG on dark, the official dark lockup raster on light).

## K · Templates

Regulatory scope per product, entity and channel: `regulatory-matrix.md` (seven REQUIRED DECISIONS open; the fiper.io footer is a placeholder in e-mails and the report until decided).

`templates/email/` (base, OTP, confirmation, statement — **Arabic `*.html` and English `*.en.html`: one language per mail, the recipient's, with ONE equivalence line in the other language («This e-mail is also available in English» / «هذه الرسالة متاحة بالعربية») instead of the full bilingual block (CEO 31 Oct 2026, v2.3.2)**; paper ground in every mode — no dark-scheme rules; official dark logo raster @2x; every link under a button; previewed at 360 / 390 px in Chromium (light only); real mail clients NOT TESTED — `templates/email/TEST-MATRIX.md`; which regulatory block applies to which message type is open in `regulatory-matrix.md` § 5; the Mauritius company registration number in the verbatim block is GB23201759) · `templates/document/` (A4 report: cover, header/footer, table, chart, signature block, invoice; `print.css`) · `templates/presentation/` (16:9) · `templates/stationery/` (letterhead, business card, e-mail signature) · `templates/social/` (1080×1080, 1080×1350, 1080×1920, 1200×630 SVG, slogan line) · `templates/video/` (the production kit: component library, 9:16 and 16:9 safe areas, lower third centre-bottom ≤ 4 s, logo by tier, **no end card** — the takeaway, side risk line on the left edge of reels, captions ≤ 26 characters with semantic emphasis by role, caption template AR + EN, `take-selection.md`) · `templates/profile-sizes.md` (WhatsApp / Telegram). Every visual output — ads, stories, covers, video, documents, slides, the e-mail footer — carries the fixed risk line «الاستثمار ينطوي على مخاطر» / "Investing involves risk" (CEO 30 Oct 2026): side/bottom corner inside the safe margin, muted text colour, the smallest legible size per medium (≥ 12 px at 1080 width · ≥ 24 px at 2160 · social ≥ 11 px at 360, exempt from the 42-px rule), never over the subject or headline, never red, never hidden; gate `scripts/check-risk-line.mjs`. The full regulatory block lives in captions, mail footers and legal pages. Regulatory block and legal links: verbatim from `templates/legal/regulatory-block.html` (copied from the fiper.io footer), never retyped.

## L · Anti-AI-tells (binding)

No `#000` grounds · no monospace outside numbers / code (labels included) · no slash label prefix or decorative numbering · no relabelled charts · no `%` or currency code separated from its number · brand red never for losses, decoration or small labels · no ISO timestamps · no purple / neon / multi-colour gradients · no glow, halo or neon around buttons / cards, no hero glows in apps · no hype emojis, no Unicode symbols as icons · no generic stock or "tech" backgrounds, no decorative graphics that carry no information · no letter-spaced Arabic, no letter-spaced Latin caps beyond `.06em` · no futuristic / decorative fonts · no one-template-for-everything (repeated boxes, hairline borders, tiny labels, equal blocks) · no invented statistics. Passing this list is necessary, not sufficient: every surface is reviewed visually. Detection commands: `checklists/anti-ai-tells.md`.

## M · AI generation kit (Higgsfield)

Generated scenes are **environments around real assets**; the asset (card artwork, phone with a real screen, logo) is composited afterwards, pixel-accurate, never generated. Prompt fragments (ads appendix, Q3 — **no crimson**: red appears only in the logo tile and the one action, composited afterwards; image grade `--fp-media-grade` 8 % warm-charcoal overlay): `warm charcoal ground #0A0708, matte surfaces, soft top-left key light, no neon, no purple, no red, no text, no logos, no people, no screens` (v2.3.0 wording — the former fragment: `warm charcoal ground #0A0708, matte surfaces, neutral warm light, soft directional key light from the top-left, shallow depth, no neon, no purple, no lens flare, no text, no logos, no people, no screens, photographic realism, 35 mm, f/2.8` · negative: `text, watermark, logo, UI, numbers, faces, hands holding cards, neon, purple, glitter, sparkles, bokeh balls, glossy 3D icons`. Never generate: logos, app screens, charts or numbers, faces, the Fiper Card, third-party marks. Output check: ground not pure black, one accent hue, no text artefacts; then composite the real asset at its official aspect with the brand clear space.

## N · Governance

v2.1.0 (30 Oct 2026; v2.0.1 frozen, v2.0.0 superseded, v1.x ARCHIVED — `dist/archive/`). Labels: **APPROVED / OBSERVED / PROPOSED / DEPRECATED** travel with every value (`tokens.json` `$extensions.fiper.status` + `fiper.source`, `value-sources.md`). Change request: open an issue in `Fiper-Global/fiper-brand` with before / after, the source (file + line or URL), the surfaces affected; the lead applies it as one commit that bumps `CHANGELOG.md`; consumers pull the tag. Consumers: fiper.io (fiper-v2), crm.fiper.me, Fiper Funds, Fiper Hub + Fipo, fiper-invoices, fiper-meetings, fiper-careers, system e-mails, social and video templates, Higgsfield generation. Earlier kits (Fiper-Brand-Guide.html, fiper-tokens.css, fiper-theme.css) are superseded; the FPT guide stays for FPT only.

## Decision items (defaults applied, labelled PROPOSED — the CEO has not confirmed them; flips are one token for colour / radius / motion / z-index only; items 1 and 5 change a font or icon set and therefore require re-checking components, mockups, templates and the manual)

| # | Item | Observation | Reason | Options | Recommended default (applied) | Flip |
|---|---|---|---|---|---|---|
| 1 | Latin pair | fiper.io uses Barlow Condensed + Inter; the Arabic family is IBM Plex Sans Arabic (decided) | fiper.io is canonical; a Plex-only stack would unify EN/AR but changes the live site's voice | A keep Barlow Condensed + Inter · B unify on IBM Plex Sans + IBM Plex Mono | **A** | `font.family.display` / `font.family.body` in `tokens.json` → rebuild → re-check preview, mockups, templates, manual (not a one-token flip) |
| 2 | Brand red | UI `#DC2626` (fiper.io) vs logo gradient `#E03636→#AD1D1C→#9C1515` (official SVG; the `#E63939→#951212` sheet was not found) vs old kit `#F42821` | one UI token keeps every surface consistent; the artwork is never retouched | A UI = fiper.io, logo keeps its gradient · B flatten UI to a gradient stop · C old kit | **A**; FPT keeps `#F42821` | **CLOSED — APPROVED: #DC2626 for the primary action + active state; the logo tile keeps its gradient** |
| 3 | Light mode | fiper.io is dark only; mail clients, print and the staff dashboard need a light ground | derive, don't design: same roles | A none · B derived light expression | **B as PROPOSED**, dark canonical | **CLOSED — APPROVED as OPTIONAL: dark default, complete light set `color.light.*`, user/system toggle** |
| 4 | Loss / danger | no loss or error colour exists on fiper.io; brand red is reserved | losses must be readable (AA) and never look like the brand | A `#E8785A` warm coral (6.9:1) · B amber · C brand red (rejected) | **A** (`#B5452A` light) | **CLOSED — APPROVED: loss/danger = RED (`#F05252` charcoal / `#B91C1C` light), profit green; red figures never buttons** |
| 5 | Icon set | fiper-v2 uses ✓ glyphs only | one open, well-known set with Arabic-neutral metaphors | A Lucide (ISC) · B Phosphor · C Material Symbols | **A** | replace `icons/lucide/` + `icons/ICONS.md` + every inline icon in components / mockups / templates → re-check all (not a one-token flip) | **CLOSED — APPROVED: Lucide v0.468.0; a bespoke set may replace it later (sprite stays swappable)** |

## Historical notes — fiper.io observations (NOT for new use)
Recorded only so the site can be read as a source of values. None of these is an instruction; agents must not reintroduce them on any surface: the mono eyebrow with a double-slash prefix (IBM Plex Mono .68rem, letter-spacing .28em, red — fiper.io line 39), the `.core` chip set in mono .55rem with .2em tracking (line 128), the trust-bar dot with a red glow (line 115), the numbered `.tg .n` section labels (line 188), the hero radial wash (line 75) and `.cardshow` glow, the floating/tilting card (`cardfloat`, lines 162–168), the button glow `0 6px 26px rgba(220,38,38,.35)` (lines 46–49), letter-spaced Latin caps beyond .06em, and the red hero stat numbers (`.stat b`, line 204). Current rules: labels are Inter 600 .06em / IBM Plex Sans Arabic 600 with no prefix; the brand badge is Inter 600 uppercase .06em on a red fill; red has three roles (logo tile, primary action, active state); numbers are never red for emphasis; no glow anywhere.
