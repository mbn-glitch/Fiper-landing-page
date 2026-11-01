# Composition rules — the approved Fiper composition language (v2.0 · corrected v2.0.1 · video / e-mail / QR / app-screen rules of v2.3.2, CEO 31 Oct 2026 · destructive-action rule v2.3.4, CEO 1 Nov 2026)

Status: **APPROVED direction** (CEO approval of the v1.2.1 review, 29 Oct 2026) as the basis for every Fiper surface. Decision items 1–5 were CLOSED by the CEO on 30 Oct 2026 (`OPEN-ITEMS.md` § A; v2.2.0): light mode for **apps** is APPROVED as optional with dark as the default (§ 1), loss/danger is red (§ 6), Barlow Condensed + Inter, UI red #DC2626 and Lucide are approved; the regulatory matrix (mapping, licence lines), missing assets and untested items keep their documented state. Values come from `tokens.json`; the site (fiper.io, captured 2026-10-29) remains the documented **source of values and assets**, not of composition: its page composition, the slash-prefixed eyebrow, decorative numbering and repeated card grids are no longer binding and are not used.

Fixed and binding regardless of composition: official logo files only, approved colours, IBM Plex Sans Arabic for all Arabic, naming (فايبر / Fiper), verbatim regulatory texts, no glow/neon, no monospace outside numbers/code, no artificial Arabic letter-spacing.

## 1. Two grounds, two jobs

| Ground | Token | Used for | Not for |
|---|---|---|---|
| Paper | `#F7F4F1` (`semantic.color.light.bg`), text `#120D0E`, muted `#6B635E`, divider `--fp-line-divider` light = `rgba(18,13,14,.22)` (`semantic.color.light.divider`) | documents (reports, letters, invoices), system e-mails, educational and corporate social posts, presentations — **and the OPTIONAL light theme of apps** (`html[data-theme="light"]`, the complete set in `semantic.color.light.*`; CEO decision 30 Oct 2026, item 3) | marketing surfaces (site, ads, product posts) — they stay charcoal |
| Charcoal | `--fp-ground-bg #0A0708`, text `--fp-text-primary`, muted `--fp-text-muted`, divider `--fp-line-divider` = `rgba(237,234,230,.28)` (`semantic.color.line.divider`, Q9) | **the DEFAULT of every app and site** (portfolio, funds, orders, dashboard), the card advertisement, product/market social posts, marketing surfaces | printed documents, mail bodies |

Theme rule (APPROVED, CEO decision 30 Oct 2026): **dark is the default, light is optional** — a user/system toggle (`prefers-color-scheme` honoured only behind a user setting on finance screens); every component renders in both (`components.css` through `tokens.css`; gates `check-rendered-contrast --theme=light`, `contrast.mjs` light pairs). Marketing surfaces stay charcoal. fiperhub.com keeps dark only until its own round.

The two grounds read as one institution because the core (below) is identical on both.

## 2. The constant core (every surface)

| Element | Rule |
|---|---|
| Lockup | the approved lockup (`logos/svg/fiper-lockup-horizontal-colour.svg` on charcoal, `-colour-paper.svg` on paper); **top-start**; height sets the margin unit (§ 4). **Latin-only on every surface, including Arabic-direction materials** (DECIDED, CEO 30 Oct 2026 — no Arabic lockup): an RTL layout places it at the inline-start per the mirroring rule, the lockup itself is never mirrored |
| Arabic headline | IBM Plex Sans Arabic 700, line-height 1.15–1.2, letter-spacing 0; one headline per surface |
| English secondary line | Inter 500, muted, 1/3 of the headline size, under or beside the Arabic headline |
| Numeric column | IBM Plex Mono 600, tabular, right-aligned in LTR cells; currency code as a small Inter label beside the amount |
| Rules | one 1 px divider `--fp-line-divider` (charcoal `rgba(237,234,230,.28)`, paper/light `rgba(18,13,14,.22)` — Q9 tokens) between hierarchy levels; a 2 px rule in full text colour opens a key-figure block |
| Meta foot | Inter / Plex Arabic 11–13 px muted: entity line, reference, date, SAMPLE note — bottom-start, above one rule |
| Icons | Lucide only, for navigation, state and action; never on headings, never in a tile |

## 3. Three poles — never one repeated composition

| Pole | Dominant element | Second | Where it is used (reference) |
|---|---|---|---|
| Image-dominant | the official product artwork at full width (card), no crop | one Arabic headline anchored bottom-start, no number | card advertisement (`review/apps/01-card-ad.html`), product social |
| Headline-dominant | one Arabic headline (or a question) at 1/12–1/16 of the canvas width | a comparison table or meta column; no hero number | report cover (`03a`), educational post (`02`), corporate social, letterhead |
| Number-dominant | one figure in IBM Plex Mono at 1/8–1/10 of the canvas width (slides) or 38–40 px (phone) with its currency label | headline or list second; gain/loss line in finance semantics | portfolio screen (`05`), presentation slide (`04`), report inner page (`03b`), statements, dashboards |

Rule: choose the pole from the content's job, then let the other two elements recede. A surface with two dominant elements is wrong; a surface with none is a template.

## 4. Margins and spacing derived from the lockup (per medium)

| Medium | Lockup height | Margin = 2 × lockup height | Inner gaps |
|---|---|---|---|
| Social posts 1080 × 1080 / 1350 | 36–40 px | 72–84 px (`component.social.safe-margin-post-*`) | 24–56 px between blocks |
| Story 1080 × 1920 | 40 px | **96 px** (`component.social.safe-margin-story`, Q8) | 24–56 px between blocks |
| Presentation 1920 × 1080 | 56 px | 112 px | 48–96 px between columns |
| A4 document (794 × 1123 CSS px / 210 mm) | 32 px (8 mm) | 64 px (17 mm) — cover and inner pages | 34–44 px between sections |
| Phone 360–430 px | 22 px | 20 px gutter (the exception: the lockup is small, the gutter follows the 4-pt scale) | 12–26 px |
| E-mail 600 px | 26 px | 28–40 px | 22–28 px |
| Web ≥ 900 px | 26 px | 44–64 px | per `tokens.json semantic.space` |

Alignment: everything starts on the lockup's start edge (one vertical start line per surface); numbers align on their own right edge in LTR cells.

## 5. Cards and boxes — use-serving, not banned

A box is justified when it **groups related information** or **bounds an action**; it is not the default container.

| Justified | Not justified |
|---|---|
| the facts table of a transactional e-mail (groups the order data apart from prose) | a box around every section of a page |
| the chart frame on a phone screen (one unit: title, period, axis, range control) | equal tiles for unrelated items |
| a bottom sheet / modal (bounds an action) | hairline boxes around headings or labels |
| a fund card in a browsing grid where each card is one selectable item | a box around a single number or a single line of text |

When a box is used: panel fill (`--fp-ground-panel` on charcoal, `#FFFFFF` on paper), 1 px rule-coloured border, 12–16 px radius, no shadow (overlays excepted).

## 6. Red — three UI roles + the exempt finance semantics (APPROVED, CEO decision 30 Oct 2026)

| Role | Where | Token |
|---|---|---|
| Brand | the logo tile (always present) | the official artwork (its own gradient) |
| Primary action | the one primary button / CTA arrow of the surface | `--fp-brand-red` `#DC2626` (+ gradient end) with `--fp-text-on-brand` |
| Active state | the active range marker, the active tab icon + bar, the current-value dot on a chart | `--fp-brand-red` |
| **Finance semantics (exempt)** | a loss figure and a danger state: **loss red** `--fp-finance-loss` `#F05252` on charcoal / `#B91C1C` on light; profit stays green `--fp-finance-gain` | the CEO kept red for losses (known psychological factor) — it is a separate role, not the brand red |

**Destructive actions (v2.3.4 — CEO decision 1 Nov 2026, recommendation B).** Delete, cancel, void and reject are **never filled buttons**: an outlined or text button in the danger colour with an icon (`.fp-btn-danger`, `.fp-btn-danger.fp-btn--text`), so the one filled red button of the screen stays the primary action. The danger colour itself (`#F05252` / `#B91C1C`) does not change (the 30 Oct 2026 decision: loss is red); the rule is about use. The one exception: the final confirmation dialog of the destructive action may carry a filled danger button (`.fp-btn-danger-solid`) when no other primary action is in that dialog. Gate: `verify-identity` DANGER-FILLED-OUTSIDE-DIALOG.

The finance exemption has its own rules: a red figure is **never a button**; numbers in IBM Plex Mono; never on a filled red ground; always word + ▼ + `−` + colour (gain = word + ▲ + `+`); `state.danger` (system error) shares the colour, not the meaning. **No red text otherwise** — labels, eyebrows, headings and ordinary numbers are never red; brand red as text only under the large-text exception (≥ 24 px regular / ≥ 18.67 px bold). Gates: `verify-identity` RED-FIGURE / LOSS-IN-BRAND-RED, `check-rendered-contrast` NUM-ON-RED. **Scope (CEO 31 Oct 2026, v2.3.2 — studio item 5): this «no red words» rule governs sites, apps and static design. Its one documented exception is the semantic word emphasis inside VIDEO captions / on-screen text (§ 13): a word is coloured by its role — profit `#2AB37A` and loss `#F05252` only on a financial VALUE in the line, alert / information words (e.g. «مخاطر») amber `#D9A441`, one word per caption group, brand red never — enforced by `check-video-delivery` and recorded in the scope note of `verify-identity`.** Ads and generated scenes: no crimson accent — red appears only in the logo tile and the one action (Q3, `README.md` § M appendix).

## 7. Order of importance without shrinking

Dominant element → supporting headline or figure → supporting data → meta. Supporting information keeps a readable size on its real medium: social body ≥ 42 px on a 1080 canvas (≈ 14 px when the post is shown 360 wide — essential text only; marginal meta may be smaller), phone body 14–15 px, phone meta ≥ 11 px, A4 body 14 px / meta 12 px, slides ≥ 26 px at 1920. Shorten or split across slides rather than shrink.

## 8. Charts — generated from one dataset

Every reference chart (report, portfolio, presentation, statements, manual) is produced by `brand/scripts/charts.mjs` from `brand/scripts/sample-data.mjs` (one SAMPLE dataset, arithmetically consistent: holdings + cash = last point = 11,553.65 USD; month gain +303.75 USD = +2.70 %). Positions, axes (nice ticks), x labels, start/end values and the benchmark (S&P 500 Sharia rebased to the portfolio's first point) are computed — never a pre-drawn path relabelled. Charts carry: what they show, the period, the currency, axis labels, the end value; one line in the text colour, the benchmark dashed muted, the single red dot = current value. Marker in HTML: `<!--CHART:{json}-->…<!--/CHART-->` (see `charts.mjs` `injectCharts`).

## 9. Numeric units inside Arabic text

Amount + currency (`1,250.00 USD`), sign + number + percent (`+2.70 %`), and date parts are **unbreakable units**: `<span class="fp-unit">` / `<bdi class="num">` (tokens.css: `white-space: nowrap; direction: ltr; unicode-bidi: isolate; IBM Plex Mono tabular`). Never let `%` or the currency code wrap away from its number; test in HTML, PDF and exports (`qa-report.md` § units).

## 10. Labels, numbering, icons

- No slash label prefix, no decorative numbering, no technical labels. A small label exists only where it names a value (field label, table header, chart period).
- Numbers as structure only when the sequence is real (ordered steps); a comparison is a table with axis and option columns, not a numbered list.
- Icons clarify a function or a state (navigation, actions, pending/settled/failed, Sharia badge). No icon on headings, none in coloured tiles.

## Don't

Ornaments, effects, a new typeface or icon set for the sake of difference; two dominant elements; a box around everything; red to emphasise an ordinary number (a real loss carries the finance red with its word and sign); a filled danger button outside the final confirmation dialog (a destructive action is outline or text); shrinking supporting text below the medium's floor; a relabelled chart; a percent sign or currency code separated from its number; a light theme on a marketing surface; a product label under a supporting shot; a second lower third for the same speaker; a risk wording other than the fixed line.

## 11. Production rules added 30 Oct 2026 (the 17 production questions — CEO decisions)

| # | Rule | Token / file |
|---|---|---|
| Q1 | Video logo corner = **96 px** high on a 1080-wide frame at **64 px** inset, top-start; 56 px is the UI header only | `component.video.logo-corner-height/-inset`, `templates/video/video-rules.md` |
| Q2 | ~~Closing card on dark endings = the stacked lockup~~ — **RETIRED**: no closing / end card in any video (CEO 31 Oct 2026); since v2.3.2 the library has no `Closing` component and no end-card tokens; the film ends on the takeaway over the speaker / last shot | `component.video.closing-card` none, `templates/video/video-rules.md` |
| Q3 | Generated scenes and ads: **no crimson accent** — red only in the logo tile and the one action | `README.md` § M (ads appendix) |
| Q4 | **Risk line, one fixed wording**: «الاستثمار ينطوي على مخاطر» / "Investing involves risk" — on EVERY visual output (ads, stories, covers, documents, slides, the e-mail footer — CEO addition 30 Oct 2026; in film: the persistent side line, § 13; **in apps (CEO 31 Oct 2026, v2.3.2 — confirmed): in the foot of the sign-in screen and of every screen that shows financial figures, as one muted 11 px line `.fp-risk-foot` above the tab bar / at the end of the main column — side, unobtrusive, never hides content; mockups 01–04 carry it and `check-risk-line` checks them**): a side/bottom corner inside the safe margin, muted text colour (`component.risk-line.color`), the smallest legible size per medium (≥ 12 px at 1080 width · ≥ 24 px at 2160 · social: exempt from the 42-px rule but ≥ 11 px at 360 = 33 px on a 1080 master · documents 8 pt · e-mail 11 px), never over the subject or the headline, never red, never hidden; gate `scripts/check-risk-line.mjs` fails when a template, mockup, slide or export source lacks the exact line; in the caption and on the video closing card as well; any other risk wording on a template fails `verify-identity` RISK-WORDING (the verbatim regulatory block of legal pages and mail footers is exempt) | `component.social.risk-line`, `component.video.risk-line`, `glossary.md`, `regulatory-matrix.md` R12 |
| Q5 | Android: the official **maskable** icons `app-icon/icon-192-maskable.png` / `icon-512-maskable.png` ship in the package since v2.1 (`purpose: maskable`), beside `icon-192/512.png` (`any`) | `logos/USAGE.md` § 1 |
| Q6 | E-mail logo: **one value** — 160 CSS px wide @2x (`email/email-header-160-paper@2x.png`, 320 × 112 file, flattened on the paper token — v2.3.4, FI7-017) rendered **160 × 56** | `component.email.logo-*`, `templates/email/*.html` |
| Q7 | Motion: the logo reveal keeps the brand easing `cubic-bezier(.2,.7,.2,1)`; fades of the lower third, the captions and the takeaway ground **may be linear** (the closing card no longer exists) | `component.video.reveal-easing`, `fade-easing` |
| Q8 | Story 1080 × 1920 safe margin = **96 px**; posts keep 72–84 px | `component.social.safe-margin-*` |
| Q9 | Divider token `--fp-line-divider` = `rgba(237,234,230,.28)` on charcoal, `rgba(18,13,14,.22)` on light | `semantic.color.line.divider`, `light.divider` |
| Q10 | Media library asset type: **`screen`** (inside the device frame, 4 px bezel `--fp-ground-bezel`) vs **`artwork`** (card, print — full bleed, no frame) | `component.media.asset-types`, `templates/social/README.md` |
| Q11 | QR code: **≥ 160 px (the minimum stays a minimum), recommended 12 % of the short edge, never above 300 px** — a 260 px cover QR is accepted (CEO 31 Oct 2026, v2.3.2: the pending «12 % / ≥ 160 px» question closed); quiet zone **4 modules**, **bottom-start** corner inside the safe margin on covers and ads | `component.qr.*` (`min-side` 160px · `side-ratio` 0.12 recommended · `max-side` 300px), `templates/document/PRINT-SPEC.md` |
| Q12 | Icon registry: the Studio's added Lucide icons (same v0.468.0, unmodified, one meaning each) are accepted and vendored | `icons/REGISTRY.md` |
| Q13 | **No product label** under a supporting shot or inside the ad frame; the product name lives in the caption / sub-line | this document |
| Q14 | Lower third **once** per speaker; **v2.3.2 (CEO 31 Oct 2026, studio item 6): ≤ 4 s on screen IN TOTAL including the entrance and the exit (hold 3.4 s); on 9:16 reels centred at the bottom with its bottom edge at 80 % of the height** (was: start edge at 17 %, «4 s hold») | `component.video.lower-third-hold` 3400ms · `lower-third-total-max` 4000ms · `lower-third-placement-9x16` · `lower-third-bottom-9x16` |
| Q15 | Below **640 px** the logo stands alone — no product descriptor beside the lockup; the product name becomes the screen title | `component.header.descriptor-min-width`, `MISSING-ASSETS.md` § 3 A |
| Q16 | Image grade `--fp-media-grade` = **8 % warm-charcoal tint** overlay (`rgba(10,7,8,.08)`) on every photo/video frame — no red cast, no LUT | `semantic.color.media.grade`, `component.media.grade` |
| Q17 | = decision items 1–5 (closed) | `OPEN-ITEMS.md` § A |

## 12. Two content tiers (v2.3.1 — the CEO's 14 Oct 2026 direction + the CEO decisions of 31 Oct 2026 — `templates/video/person-led.md`, `templates/video/partner-edit.md`)

| Tier | What it is | Identity |
|---|---|---|
| **Official company content** | product films, campaign films, corporate announcements, documents, mails | the full identity — this document, the video kit, every gate |
| **Person-led content** | the CEO's or a partner's reels, talking directly | the person's presence first; the identity at its minimum: **NO Fiper logo on the video** (CEO 31 Oct 2026), the persistent side risk line first frame to last, **no closing card** — the reel ends on the speaker with a short takeaway (≤ 8 words), IBM Plex Sans Arabic, the caption style with at most one semantically coloured word per group (danger #F05252 / profit #2AB37A / info #D9A441), the partner's lower third once after the hook (centre-bottom, bottom edge at 80 %, ≤ 4 s in total; **its role line = the partner's self-description, never a disclosure — CR-B / CR-C, v2.3.3**), **the entity inside the side risk line (v2.3.3, CR-A final form): «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» / "Investing involves risk — Fiper Global, Company registration number GB23201759" in the reel's language, nowhere else on the frame; the partner caption carries the Mauritius entity line only**; **every script through the Partners Studio is tier=person (G-Q4)**; **no music by default until licensed**; the edit per `partner-edit.md` (cuts on energy, pauses kept, never a sped-up voice) and its gate `scripts/check-partner-edit.mjs`; editorial analytical graphics only; one question per reel, a true strong opening, no repetition, pauses kept, the voice never sped up, no cartoon or rubbery motion, no black-and-gold stiffness, music measured / curious / confident and not continuous, dialogue-only version first, one CTA at most, A/B sample before redoing a set; never a synthesized or recombined version of the person's voice |

## 13. Video production rules (v2.3.1 — `templates/video/README.md`, `video-rules.md`, `ACCEPTANCE.md`, `partner-edit.md`)

- Films are composed from the official component library only (`templates/video/lib/fiper-video.mjs`); every value is a token; an identity change reaches every film by re-export.
- Corner logo 96 px at 64 px on **official** content — reveal from the first frame (mark 0.3 s, word +0.15 s), static, **on every frame, never hidden**; per content type (reels/stories, 16:9, 1:1, paid ads, in-product) in `video-rules.md` § Logo by content type; **none on person-led content** (CEO 31 Oct 2026); scene cut = ground-colour fade 0.9→0 in 0.24 s; grain 0.04–0.06 at 24 fps steps; vignette ≤ 0.45; motion by x/y/scale only; the brand easing on the reveal, linear fades allowed (Q7).
- **No closing card in any video, official or person-led (CEO 31 Oct 2026).** The film ends on the speaker (official films without a speaker: on the last shot) with the **takeaway**: ≤ 8 words over the picture, readable 0.5 s + 0.3 s/word (≥ 1.5 s), IBM Plex Sans Arabic 700 / Barlow Condensed 700 over a soft ground gradient; one CTA at most — as part of the takeaway or a short line; the single small red pill on official content only, never a card. The entity line (registration number only — never "Licence No.") moved to the post caption (`templates/video/caption-template.md`; applied decision, the CEO may change it).
- **Semantic word emphasis in video** (CEO 31 Oct 2026; roles fixed in v2.3.2, studio item 5): in captions and on-screen text, when it serves the meaning, the word is coloured **by its role** — **profit `#2AB37A` and loss `#F05252` only on a financial VALUE in the line**, **alert / information words (e.g. «مخاطر») amber `#D9A441`**; at most one coloured word per caption group; brand red `#DC2626` never on words. The red-word ban stays for sites, apps and static design (§ 6) — this is its one documented exception (`verify-identity` scope note).
- **Captions (v2.3.2, studio items 10–12):** one line, **≤ 26 characters per group** (the box stays), the text is **the spoken words as recorded — never the script**; **the caption group that repeats the takeaway text is hidden while the takeaway is on** (the documented G7 exception) and every caption is hidden under the single title card. **Takeaway and title card: 76 px inside 130 px side margins on a 1080-wide 9:16 frame.**
- **Lower third (v2.3.2, studio item 6):** once per speaker; on 9:16 **centre-bottom with its bottom edge at 80 % of the height**; **≤ 4 s on screen in total** including the entrance and the exit.
- **Non-native-aspect sources (v2.3.2, studio item 7):** a source that is not 9:16 (or not the frame's aspect) is shown complete **over a blurred, enlarged copy of itself** — never solid pillarbox / letterbox bars, never a gradient band (`Footage fit:'contain'`).
- **Take selection (v2.3.2, studio items 8–9, `templates/video/take-selection.md`):** number words ↔ digits, compound numbers and plural suffixes are equal before the eligibility ratio; adjacent transcript cuts of ONE continuous take are merged first — the official reading of «no half line from two takes».
- **Risk line in film (APPROVED, CEO 31 Oct 2026; placement fixed in v2.3.2, studio item 3; partner text fixed in v2.3.3):** a SMALL, PERSISTENT SIDE line for the whole film in both tiers — present from the first to the last frame (there is no closing card). **Official tier:** the one wording **verbatim with nothing added inside it** (no entity, no number). **Partner tier (CR-A final form, CEO evening 31 Oct 2026):** the line carries the entity and the company registration number inside it, in the language of the reel — «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» / "Investing involves risk — Fiper Global, Company registration number GB23201759" (`video.person_edit.risk_line.text_ar` / `text_en`); the licence wording stays refused. **9:16 → rotated 90° along the LEFT frame edge inside the safe margin** (the right edge collides with the Reels / Shorts interface; the left edge is a frame edge and does not flip with the text direction), **24 px high on a 1080-wide frame (text size = strip thickness), muted at the divider token `rgba(237,234,230,.28)`**, reading upwards from the bottom; 16:9 and 1:1 → the bottom-start corner inside the safe margin, 22 px at 1920 wide, unless it collides with the platform UI. Never red; never over the subject or the headline; never hidden for a lower third — only during logo-reveal frames that would collide (`component.video.risk-line.*`; gate: ≥ 95 % of sampled frames incl. the first and the last + edge / thickness / colour on every 9:16 frame).
- **The entity line on OFFICIAL content is never burnt into the video (v2.3.2, studio item 4):** it lives in the post caption (`templates/video/caption-template.md`) as «Company registration number: 2422384» (Fiper Global UAE, default) or «Company registration number: GB23201759» (Fiper Global MAU). **On PARTNER content (v2.3.3) the entity is on the frames inside the side risk line only** (in no other element — gate) and in the partner caption as «Fiper Global — رقم السجل التجاري GB23201759» / «Fiper Global — Company registration number GB23201759» (the Mauritius entity only). Never "Licence No." / "License No." / «ترخيص» with any number (`verify-identity` LICENCE-WORDING + REG-NUMBER-WORDING).
- **No partnership disclosure on any surface (CR-B, v2.3.3):** «بالشراكة مع فايبر», «شراكة مدفوعة», «إعلان», "paid partnership" never appear — on the image, in the caption, in the lower third, in the description, at any imprint level. **The role line of the lower third is the partner's self-description (CR-C):** the models by partner role from the Scripts Constitution § 4 or the partner's own form; the one legal limit is a title implying a licence or a regulatory status the partner does not hold (`LowerThird` throws; `check-video-delivery`, `check-partner-edit` G11, `verify-identity` PARTNER-DISCLOSURE). **The delivery package (fourteen fields, constitution § 12) maps field by field to the script contract (`partner-edit.md` § 11-ج, CR-D); screen texts (≤ 3) become `annotate` with at most one `title_card` (G-Q5).**
- Audio: the broadcast chain (`audio-standards.md`), −14.0…−14.2 LUFS / TP ≤ −1.5 measured; English VO per the approved prompt, **Arabic generated VO prohibited** (human only); music by beat detection, banned genres, **none by default on person-led content until licensed**; honesty rules (`claims.md`); reviewer with the FULL identity (`review-prompt.md`) and manual frame verification.
- Generated environments: `warm charcoal ground #0A0708, matte surfaces, soft top-left key light, no neon, no purple, no red, no text, no logos, no people, no screens` — no crimson, grade 8 %.

## Historical notes — fiper.io observations (NOT for new use)
Recorded only so the site can be read as a source of values. None of these is an instruction; agents must not reintroduce them on any surface: the mono eyebrow with a double-slash prefix (IBM Plex Mono .68rem, letter-spacing .28em, red — fiper.io line 39), the `.core` chip set in mono .55rem with .2em tracking (line 128), the trust-bar dot with a red glow (line 115), the numbered `.tg .n` section labels (line 188), the hero radial wash (line 75) and `.cardshow` glow, the floating/tilting card (`cardfloat`, lines 162–168), the button glow `0 6px 26px rgba(220,38,38,.35)` (lines 46–49), letter-spaced Latin caps beyond .06em, and the red hero stat numbers (`.stat b`, line 204). Current rules: labels are Inter 600 .06em / IBM Plex Sans Arabic 600 with no prefix; the brand badge is Inter 600 uppercase .06em on a red fill; red has three roles (logo tile, primary action, active state); numbers are never red for emphasis; no glow anywhere.
