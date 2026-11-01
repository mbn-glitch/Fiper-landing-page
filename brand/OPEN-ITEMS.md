# OPEN ITEMS — single register (v2.3.2, 31 Oct 2026 · § H: the Partners Studio change requests 1–12 + the pending v2.2.0 items DECIDED by the CEO and applied in v2.3.2 · § G: CR-A refused in its form, CR-B / CR-C / CR-D still registered)

The one place where every undecided, missing or untested item lives. Delivery acceptance of v2.1.0 does **not** change any status below and does **not** approve light mode for apps. Items close only by an explicit decision or a supplied asset, recorded here and in `CHANGELOG.md`.

Status vocabulary: **OPEN — PROPOSED default applied** (the package ships a labelled default; flipping it is a token/doc change + re-check) · **REQUIRED DECISION** (nothing applied beyond today's verbatim/approved content) · **MISSING ASSET** (no official file; interim substitute stated) · **NOT TESTED / NOT PROVIDED**.

## A. Decision items 1–5 — CLOSED by the CEO on 30 Oct 2026 (applied in v2.2.0 as APPROVED, source "CEO decision 30 Oct 2026")

| # | Item | Decision | Applied | Status |
|---|---|---|---|---|
| 1 | Latin pair | Barlow Condensed (uppercase headlines) + Inter (text) | `semantic.font.family.display/body` APPROVED | CLOSED |
| 2 | UI red | `#DC2626` for the primary action + active state; the logo tile keeps its own gradient | `semantic.color.brand.red` APPROVED | CLOSED |
| 3 | Light mode for apps | **APPROVED as OPTIONAL** — dark (charcoal) is the DEFAULT for every app/site; a complete light theme exists under `html[data-theme="light"]` (ground, panel, elevated, lines, text, actions, states, focus, overlay), user/system toggle; marketing surfaces stay charcoal; fiperhub.com keeps dark only until its own round | `semantic.color.light.*` (complete set), `components.css`, preview + mockups 01/03 light renders, `contrast.mjs` + `check-rendered-contrast --theme=light` | CLOSED |
| 4 | Loss / danger colour | **RED** (known psychological factor): `finance.loss` / `state.danger` = `#F05252` on charcoal (5.76 on bg, 5.36 on panel), `#B91C1C` on light (5.9 on paper); profit stays green. Red roles rule: three UI roles + the exempt finance semantics — a red figure is never a button, numbers in Plex Mono, never on a filled red ground, no red text otherwise | tokens, templates, charts, sample portfolio, review apps, mail; gates RED-FIGURE / LOSS-IN-BRAND-RED / NUM-ON-RED | CLOSED |
| 5 | Icon set | Lucide v0.468.0 — a bespoke / more professional set may replace it later; the icon layer stays swappable via the sprite | `icons/ICONS.md`, `icons/REGISTRY.md` (Q12 additions) | CLOSED |

The 17 production questions of the Creative Studio (Q1–Q17) are answered in `references/composition-rules.md` § 11 and `CHANGELOG.md` v2.2.0.

## B. Regulatory scope (`regulatory-matrix.md`) — REQUIRED DECISION rows

| Row | Question | Status |
|---|---|---|
| 1 | Entity of record per product — the two entity texts are APPROVED (CEO 30 Oct 2026: Fiper Global UAE · Fiper Global MAU, `regulatory-matrix.md` § 0); regulator / licence lines: RESOLVED-FOR-NOW — registration numbers are sufficient until the CEO supplies a line (v2.2.1); the entity → product mapping stays PENDING | PARTLY DECIDED — mapping PENDING |
| 2 | Direct trading / copy trading mails: which entity line, does the CFD warning (R4) apply to every mail | REQUIRED DECISION |
| 3 | Fiper Card: issuer / programme-manager disclosure (not in inputs) | REQUIRED DECISION |
| 4 | Fiper ETF · SPUS · Fiper Funds: funds-specific disclosures beyond `fnd.dis`; is a CFD warning wrong on a funds statement | REQUIRED DECISION |
| 5 | Client area crm.fiper.me and Fiper Hub / Fipo / Academy: block and entity | REQUIRED DECISION |
| 6 | Partner white-labels: which blocks (R1–R7) stay verbatim | REQUIRED DECISION |
| 7 | Internal documents footer unification (invoices R10+R11 vs meetings/careers R9+R10) | REQUIRED DECISION |
| 8 | OTP / security mails: which block, whether R4 belongs | REQUIRED DECISION (full verbatim block ships as a secondary footnote until decided) |
| 9 | Transactional mails: entity per product + blocks | REQUIRED DECISION |
| 10 | Statements: disclosures per product/entity (custody, settlement, Sharia scope) | REQUIRED DECISION |
| 11 | Marketing mails: block + unsubscribe/entity line (none shipped until decided) | REQUIRED DECISION |
| 12 | Social captions / video captions: minimum legal line per product (v2.3.1: there are no video end cards — the entity line is in the caption template, `templates/video/caption-template.md`, registration number only). **v2.3.2 (CEO 31 Oct 2026, studio item 4 + decisions 1–2): the entity line is NEVER burnt into a video — it lives in the caption template (Arabic and English) as «Company registration number» (2422384 UAE default / GB23201759 MAU); CR-A (a licence number inside the side line) refused in that form** — the entity → product mapping for the caption stays with legal. **v2.3.3 (CEO evening 31 Oct 2026): the PARTNER caption is decided — the Mauritius entity with its company registration number only («Fiper Global — رقم السجل التجاري GB23201759» / «Fiper Global — Company registration number GB23201759»), no UAE line, no second entity (G-Q3); the partner frames carry the same entity inside the side risk line (CR-A final form)** | partner caption: CLOSED (v2.3.3); official caption: REQUIRED DECISION (per product, Q30) — the caption template is the applied default |

Approved texts are never shortened or paraphrased; `templates/legal/regulatory-block.html` = fiper.io footer verbatim (captured 2026-10-29).

## C. Missing official assets (`MISSING-ASSETS.md`)

| # | Asset | Interim (stated limits) | Status |
|---|---|---|---|
| 1 | Dark-on-light **vector** lockup | `brand/logos/svg/fiper-lockup-horizontal-colour-paper.svg` + print files | AVAILABLE — APPROVED (v2.1.0) |
| 2 | Mono / flat single-colour logo | `brand/logos/svg/fiper-*-white|black|red.svg` + print — one-colour reproduction only | AVAILABLE — APPROVED (v2.1.0) |
| 3 | Mark-only file (any format) | `brand/logos/svg/fiper-mark-*.svg`, PNG, favicon, app icons, avatars | AVAILABLE — APPROVED (v2.1.0) |
| 4 | Arabic lockup «فايبر» | DECIDED: not needed — the logo is Latin-only on every surface, incl. Arabic-direction materials (CEO 30 Oct 2026); name set as text beside the lockup | DECIDED (v2.2.1) |
| 5 | Fipo visual character | none created | MISSING ASSET |
| 6 | Logo sheet with gradient `#E63939 → #951212` | the published SVG gradient `#E03636 → #AD1D1C → #9C1515` governs | MISSING ASSET |
| 7 | CMYK / Pantone / RAL values of the red and the warm black | PROPOSED CMYK documented (`logos/USAGE.md` § 5) and carried in `brand/logos/print/*-cmyk.*`; Pantone/RAL none; press proof pending | OPEN — PROPOSED default |
| 8 | Official product-name lockups and the "by Fiper" endorsement lockup | PROPOSED text rules (composition-rules.md) | MISSING ASSET |
| 9 | Partner co-branding lockup | PROPOSED rule | MISSING ASSET |
| 10 | Official app screenshots (cTrader / MT5 mobile / Fiper apps) | capture from the live product before use | MISSING ASSET |
| 11 | Motion / video brand template (AE, Premiere, DaVinci) | HTML/CSS/JSON source + WebM samples | NOT PROVIDED |
| 12 | **Logo wordmark variant** (A dotted i · B serif-foot i · C dotted i + optical spacing) | **CLOSED — CEO approved A on 30 Oct 2026 and generalised it**: `brand/logos/` = A set, B/C archived in `dist/archive/logo-v2.1-unpicked/`, v2.0 files superseded in `logos/_source-fiper.io/` | DECIDED (v2.1.0) |

Quarantined modified copies (`logos/_unapproved-proposals/`) are NOT approved and are referenced by nothing.

## D. Not tested / not provided

| Item | Status |
|---|---|
| Real mail clients (Gmail web/iOS/Android, Outlook desktop/web/iOS, Apple Mail macOS/iOS; light + dark) — only Chromium emulation evidence | NOT TESTED (`templates/email/TEST-MATRIX.md`) |
| Office rendering of PPTX / DOCX (structure verified only) | NOT TESTED |
| Commercial / press print (CMYK, bleed, crop marks, PDF/X) | NOT PROVIDED (`templates/document/PRINT-SPEC.md`) |
| Screen readers, real devices, Safari / Windows font rendering | NOT TESTED |
| H.264 / MP4 masters | build artefacts only (`dist/checks/video/*-master.mp4`, `*-share.mp4` from `scripts/render-video-examples.mjs`); the package ships the WebM samples | NOT IN THE PACKAGE (by design) |
| `verify-skill-wired.mjs` on a consumer repo | NOT TESTED (no consumer repo modified by design) |

## F. Video production register (v2.3.0 → v2.3.1)

| # | Item | Applied | Status |
|---|---|---|---|
| 1 | Risk line in film | **a small persistent SIDE line for the whole film** — v2.3.2 (studio item 3): **9:16 along the LEFT frame edge, 24 px at 1080 wide, muted at the divider token**, first frame to last, the wording verbatim with nothing added; 16:9 / 1:1 bottom-start 22 px — `RiskLine`, `component.video.risk-line.*`, gate ≥ 95 % incl. the first and the last frame + geometry / colour per 9:16 frame | **APPROVED (CEO 31 Oct 2026) — CLOSED; placement fixed in v2.3.2** |
| 2 | Entity line in video | **v2.3.2 (CEO 31 Oct 2026): official frames never carry it — in the caption template as «Company registration number» only; GB23201759 is the correct Mauritius company registration number (the captured G823201759 was a typo), 2422384 the UAE one. v2.3.3 (CEO evening 31 Oct 2026, CR-A final form): on PARTNER frames the entity «Fiper Global» + «رقم السجل التجاري / Company registration number GB23201759» INSIDE the side risk line only, in the reel's language; the partner caption carries the same entity line. Wording: the company registration number only — "Licence No." / "License No." / «ترخيص» with any number refused everywhere (`verify-identity` LICENCE-WORDING + REG-NUMBER-WORDING; «رقم السجل التجاري» accepted since v2.3.3)** | DECIDED (both tiers) — product mapping + the short entity form for legal (Q30), non-blocking |
| 3 | Arabic voice-over | generated Arabic VO PROHIBITED (mispronunciation); human only | DECIDED (CEO 2 Oct 2026, recorded v2.3.0) |
| 4 | Corner logo size | 96 px at 64 px (Q1); 56 px = UI header | DECIDED (v2.2.0) |
| 5 | HyperFrames CLI | not vendored (npm `hyperframes` 0.8.x exists); the kit follows its page contract and ships its own Playwright renderer | NOTE |
| 6 | Word emphasis colour in video captions | **semantic only, three values**: danger #F05252 · profit #2AB37A · info #D9A441 (amber-400 APPROVED), one per caption group, never brand red; the red-word ban stays for UI and static design — `component.video.caption-emphasis-*`, `Caption`, gate | **CLOSED — CEO 31 Oct 2026** |
| 7 | Logo on person-led (partner personal-brand) content | **none at all**; official content: the logo on every frame, never hidden, per content type (`video-rules.md` § Logo by content type) — `CornerLogo({ tier })`, `component.video.logo-presence-*`, gate 100 % / 0 % | **CLOSED — CEO 31 Oct 2026** |
| 8 | Closing / end card | **none in any video**; the takeaway over the speaker / last shot (≤ 8 words, readable; v2.3.2: 76 px inside 130 px margins), the side risk line to the last frame, one CTA at most (small red pill on official content only) — `Takeaway`; **the `Closing` component and its tokens removed in v2.3.2**; `component.video.closing-card`; gate FAILS a closing card | **CLOSED — CEO 31 Oct 2026; component removed v2.3.2** |
| 9 | Music licence for production (Warner Chappell Production Music / Intervox) | no approved licensed list; **no music by default in person-led videos until the CEO buys the licences** (`partner-edit.md` § 8.5–8.6, `music.md`) | OPEN — CEO purchase decision |
| 10 | Forced alignment tool (WhisperX + Arabic wav2vec2) so the «cut inside a word» test becomes FAIL instead of WARN | plain Whisper word times drift 0.3–0.9 s on Gulf dialect; the gate downgrades word tests to WARN until `words_aligned: true` (`partner-edit.md` § 1.4, § 14) | OPEN — not yet tried |
| 11 | Entity line after the closing card was removed | **Official tier (CEO 31 Oct 2026, v2.3.2, studio item 4): never burnt into the video — in the post caption (`templates/video/caption-template.md`) as «Company registration number» (UAE 2422384 default; MAU GB23201759). Partner tier (CEO evening 31 Oct 2026, v2.3.3 — Q26 answered «yes, for partner content only»): the entity and the company registration number ON the frames INSIDE the persistent side risk line («… — Fiper Global، رقم السجل التجاري GB23201759» / "… — Fiper Global, Company registration number GB23201759", 24 px, first to last frame) and in the partner caption; nowhere else on the frame — `RiskLine({ tier:'person' })`, `component.video.entity-line-placement-person`, gate** | **CLOSED — official: APPLIED (caption); partner: APPLIED (inside the risk line, v2.3.3)** |

## G. Change requests from the Partners Studio «Scripts & Ideas Constitution» v1.0 (CEO 31 Oct 2026) — registered in round FB-CR-SCRIPTS; the licence wording refused in v2.3.2; CR-A (final form), CR-B, CR-C, CR-D and G-Q4 / G-Q5 APPLIED in v2.3.3 by the CEO's decisions of the evening of 31 Oct 2026

**Source of the decisions:** «دستور السكربتات والأفكار — استوديو شركاء فايبر (الإصدار 1.0)», approved by the CEO on 31 Oct 2026 and being implemented in the `fiper-creative-studio` project (binding copy in that repository: `docs/SCRIPT_CONSTITUTION_AR.md` — § 4 the CTA, the link and the self-description · § 9 the prohibitions · § 12 the delivery package · § 15 the sixteen decisions). **Round FB-CR-SCRIPTS (31 Oct 2026, morning) only recorded the requests**; **v2.3.2** refused the licence wording of CR-A and closed G-Q1–Q3 on that basis before the CEO's answers arrived; **v2.3.3 (the CEO's answers of the evening of 31 Oct 2026 to Q26 and G-Q1…G-Q5 — these answers override the v2.3.2 closure)** applied CR-A in its final form (entity + company registration number inside the partner side line, registration-number wording only), CR-B, CR-C, CR-D, G-Q4 and G-Q5 — one version, per the governance rule (`README.md` § N) — and closes them here and in `CHANGELOG.md`. Under every request the Arabic «Binding text» is the CEO's wording as delivered to this package and is the text that binds; the English framing and the «touches» lists are a summary for the implementer, not a decision.

| CR | Subject | Answers / closes | Status |
|---|---|---|---|
| CR-A | The risk line on partner (person-tier) videos: one text carrying the entity and the Mauritius company registration number inside the small persistent side line, first frame to last | Q26 · F-11 · the studio constitution's open item 2 | **APPLIED IN ITS FINAL FORM — v2.3.3 (CEO evening 31 Oct 2026):** «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» (Arabic reel) / "Investing involves risk — Fiper Global, Company registration number GB23201759" (English reel), inside the side line, in the reel's language, partner content only; the licence wording stays REFUSED (v2.3.2, decisions 2 and 4 — reaffirmed in the evening: «رقم كيان موريشيوس ولا شيء إضافي غير رقم التسجيل والرقم حالياً»); the official tier unchanged |
| CR-B | Partnership disclosure abolished entirely, on every surface, at every imprint level | Q27 | **APPLIED — v2.3.3:** `caption-template.md`, `video-rules.md`, `person-led.md`, `partner-edit.md` § 9 / § 10-ب, `review-prompt.md`, `claims.md` 10, the skill, the manual; `LowerThird` throws on a disclosure, `check-video-delivery` (role line), `check-partner-edit` G11, `verify-identity` PARTNER-DISCLOSURE |
| CR-C | The partner's self-description = the role line of the lower third (suggested models by partner role — not constraints; one legal limit) | — | **APPLIED — v2.3.3:** the four role groups' models in `partner-edit.md` § 9, `video-rules.md` lower-third row, `person-led.md`, `caption-template.md`; the legal limit (no licence-implying title without a documented credential) enforced by `LowerThird({ credentialDocumented })`, `check-video-delivery`, `check-partner-edit` G11 (`lower_third.role`, `credential_documented`) |
| CR-D | The script → edit delivery contract: a fixed package of fourteen fields (constitution § 12), translated automatically into the engine's script contract (`templates/video/partner-edit.md` § 11) | — | **APPLIED — v2.3.3:** field-by-field mapping table `partner-edit.md` § 11-ج + the `delivery` block of the § 11-ب template; incl. the G-Q4 rule (tier) and the G-Q5 rule (screen texts) |
| CR-E | Constants confirmed without change | — | CONFIRMED — no change |
| CR-F | Dual reference: the Scripts Constitution owns the writing rules, the editing rules own picture / sound / on-screen text; a short referral section in `templates/video/partner-edit.md` § 17 | — | DONE (§ 17 updated in v2.3.3; no rule of the constitution copied — the self-description models and the delivery fields are the delivery interface, not writing rules) |

### CR-A — the risk line on partner videos (person tier) — answers Q26, decides the «entity line placement» item (F-11) for the person tier

**FINAL OUTCOME (CEO decisions of the evening of 31 Oct 2026 — v2.3.3; Q26 and G-Q1…G-Q3 answered by the CEO himself, overriding the v2.3.2 closure):** **APPLIED in its final form — partner content only.** Q26 «the entity on the image?» → **yes, for partner content only**: the entity name and its number **inside the persistent side risk line itself**, small, from the first frame to the last, no closing card, no spoken text. **Wording: the company registration number only** («رقم كيان موريشيوس ولا شيء إضافي غير رقم التسجيل والرقم حالياً، والتحسينات لاحقاً») — no «ترخيص» / License anywhere. G-Q1 → **«Fiper Global»** as the CEO wrote it (not «Fiper Global MAU»; a partner-tier exception recorded in `regulatory-matrix.md` § 0, for legal within Q30 without blocking). G-Q2 → **the language of the content**: Arabic line on an Arabic video, English line on an English video, never bilingual on partner content. G-Q3 → the partner caption carries **the Mauritius entity with its company registration number only** (no UAE entity, no 2422384). **The final texts:** AR «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» · EN "Investing involves risk — Fiper Global, Company registration number GB23201759" — `video.person_edit.risk_line.text_ar` / `text_en` / `language` / `entity_name` / `number_wording`; `RiskLine({ tier:'person', lang })`; `component.video.entity-line-placement-person` = inside-risk-line; `component.video.entity-line-person` (caption); `check-video-delivery` (verbatim text per frame, the number inside `.fv-risk` only — proven on four hand-broken films); `verify-identity` REG-NUMBER-WORDING accepts «رقم السجل التجاري GB23201759»; `caption-template.md` person section; the person 9:16 sample re-rendered with stills in `dist/checks/video/stills-v2.3.3/`. The official tier keeps the v2.3.2 rule (entity in the caption only; the bilingual fixed line with nothing added). Size 24 px default, 28 px option kept (Q35, `video.person_edit.risk_line.height_px_option_at_1080w`).

**Earlier outcome (CEO decision 31 Oct 2026 morning, the v2.3.2 assignment — decisions 1, 2 and 4): REFUSED IN THIS FORM — kept as the record of the licence-wording refusal, which still stands.** The number is right: **GB23201759 is the company registration number** of Fiper Global MAU (the captured fiper.io typo G823201759 corrected everywhere). The wording is not: **no licence line and no word License / Licence / ترخيص with any number in any template** — «رقم السجل يكفي حالياً» (CEO 30 Oct 2026, reaffirmed). The partner risk line stays the fixed wording **«الاستثمار ينطوي على مخاطر» / "Investing involves risk" verbatim**, small, side, persistent (v2.3.2: left edge, 24 px, muted) with nothing added inside it; the entity goes to the post caption as «Company registration number» (`caption-template.md`, AR + EN). G-Q1 – G-Q3 below are therefore closed. The binding text is kept as the record of the request:

**Binding text (CEO, verbatim — superseded by the refusal above):**

> النص الوحيد: «الاستثمار ينطوي على مخاطر — Fiper Global، ترخيص [رقم ترخيص الكيان الموريشي]» (اسم الكيان بالحروف اللاتينية داخل السطر العربي كما كتبه المالك). بخط صغير جانبي في موضع محدد وثابت من أول إطار إلى آخره، لا يشوه المحتوى والشكل إطلاقاً؛ لا بطاقة ختامية (D-B يبقى)؛ لا نص منطوق؛ لمحتوى الشركاء فقط وليس لأي شيء آخر — الطبقة الرسمية والبريد وذيله على قواعدهما الحالية (Q30 يبقى للقانوني). رقم الترخيص يؤخذ حرفياً من الكتلة القانونية الرسمية التي تشحنها الحزمة نفسها (`templates/legal`، «License No. GB23201759» كما على fiper.io)؛ قرار المالك في 31 أكتوبر يجيز استخدامه على فيديوهات الشركاء رغم تحفظ v2.3.0 على صيغة الترخيص في الذيول — التحفظ يبقى قائماً خارج فيديوهات الشركاء. الحجم: 24 px افتراضياً وخيار 28 px، والقرار النهائي لعين المالك على هاتفه (Q35).

**Resolved line (the number filled from the shipped legal block):** «الاستثمار ينطوي على مخاطر — Fiper Global، ترخيص GB23201759» — the number is line 9 of `templates/legal/regulatory-block.html` (fiper.io footer verbatim, captured 2026-10-29: "Investment Dealer Licence (Full-Service Dealer, excluding Underwriting), License No. GB23201759"). The same number answers the studio constitution's open item 2.

**What stays exactly as in v2.3.1:** the official tier (bilingual side line «الاستثمار ينطوي على مخاطر · Investing involves risk», entity line in the post caption, `caption-template.md`); the e-mail footer and its regulatory block; documents, social, slides; no closing card anywhere (D-B); the licence-wording reservation (`production-notes-corrections.md`, F-2, `regulatory-matrix.md` § 0, `verify-identity` LICENCE-WORDING) everywhere outside partner videos.

**Touches in v2.3.2 (implementer's map — not decided here beyond the binding text):**
- Rules: `templates/video/video-rules.md` rows «Risk line» and «Entity line» (per tier), `person-led.md`, `partner-edit.md` § 4.7 and § 9 table, `claims.md` 6, `ACCEPTANCE.md` 6 and 8, `caption-template.md` (person section: the frames now carry the entity + licence), `review-prompt.md`, `references/composition-rules.md` § 12–13, the skill, the manual K4 / K5, the consumer note.
- Tokens: `component.video.risk-line.*` — the person-tier text as its own value; `size-1080` keeps 24 px APPROVED as the default and gains the 28 px option (the CEO decides on his phone, Q35); `component.video.entity-line-placement` becomes per tier (official = caption · person = inside the side line).
- Library and samples: `RiskLine({ tier })` renders the CR-A text for `person`; `examples/film-person-9x16.html` and its WebM / poster re-rendered.
- Gates: `check-video-delivery` — «entity line absent from the frames» becomes official-only; for the person tier it checks the exact CR-A text on ≥ 95 % of sampled frames including the last; `check-risk-line` / RISK-WORDING — the fixed wording «الاستثمار ينطوي على مخاطر» stays the prefix of the line; LICENCE-WORDING unchanged (the Arabic «ترخيص» is not the refused Latin string, and the gate scans templates, mockups and films, not partner frames rendered by the studio engine); `check-partner-edit` A8 — the template match of the side line uses the CR-A text.
- Open questions: G-Q1 (entity name form), G-Q2 (language of the line on non-Arabic partner videos), G-Q3 (two entities on one post until Q30) — table below.

### CR-B — partnership disclosure abolished entirely — answers Q27

**Binding text (CEO, verbatim):**

> لا «بالشراكة مع فايبر»، لا وسم «شراكة مدفوعة»، لا «إعلان»، على أي سطح (الصورة، الكابشن، شريط الاسم، الوصف)، في أي مستوى بصمة. سطر الدور في شريط الاسم = الوصف الذاتي الذي يختاره الشريك في ملفه وليس إفصاحاً.

**Touches in v2.3.2:** `caption-template.md` (person section: no disclosure line or tag; the «شريك فايبر · Fiper partner» profile mention is a self-description under CR-C, not a disclosure), `partner-edit.md` § 10-ب reviewer prompt (a disclosure tag is a finding), `review-prompt.md`, `video-rules.md` lower-third row, the skill. No gate exists for captions; the reviewer prompt carries the rule. Platform-side «paid partnership» toggles are outside the package — the rule is recorded for the studio's publishing step.

### CR-C — the partner's self-description (the role line of the lower third)

**Binding text (CEO, verbatim):**

> نماذج معتمدة بحسب صفة الشريك، أو صيغة الشريك نفسه: موظف أو مدير مكتب: «[المنصب] في فايبر»، «مدير مكتب فايبر — [المدينة]»، «فريق فايبر». وسيط معرّف: «وكيل معتمد لشركة فايبر»، «شريك استراتيجي لفايبر»، «شريك فايبر الرسمي في [البلد]». مزود استراتيجية: «مزود استراتيجية في فايبر»، «استراتيجيتي متاحة للنسخ في فايبر». صانع محتوى باتفاق: «شريك محتوى مع فايبر»، «بالتعاون مع فايبر». الحد القانوني الوحيد: لا صفة توحي بترخيص لا يملكه الشريك («مستشار مالي مرخص»، «محلل معتمد») إلا بوثيقة في ملفه.

**Touches in v2.3.2:** `video-rules.md` lower-third row (role line content = the self-description from the partner's profile; the v2.3.1 geometry stays: name 56 px / role 32 px #8E8681, once per speaker, ≥ 4 s, red bar on the start edge — the longer models must be fitted on one line at 1080 wide or wrapped by the engine, to verify on the frame board), `partner-edit.md` § 9 («شريط اسم الشريك»), `caption-template.md` person section (the profile mention follows the same models), `review-prompt.md` / § 10-ب (a role implying a licence the partner does not hold is a critical finding unless documented in the profile), the skill. The spelling of the partner's name follows `spelling[]` in the script contract.

### CR-D — the script → edit delivery contract (fourteen fields, constitution § 12)

**Binding text (CEO, verbatim):**

> الحقول: العنوان الداخلي · النص المنطوق (سطر لكل نفَس، بلا تعليمات) · الافتتاحيات الثلاث · الدعوة والرابط كما اختارهما الشريك بلا قيد (النوع، الموضع: بايو/وصف/تعليق مثبت/منطوقة، والسطر الذي تُقال عنده) · ملاحظات الأداء (ثلاث لحظات كحد أقصى) · الصيغة التصويرية والطول المتوقع · النوع والنمط ومستوى البصمة (0–3) وصفة الشريك · نصوص الشاشة (ثلاثة كحد أقصى، كل منها مربوط بسطر؛ الخط واللون والموضع من دستور المونتاج) · بطاقة البيانات (واحدة أو لا شيء: المبلغ، المدة، النسبة المفترضة، الناتج، سطر الظهور وسطر الاختفاء) · الجسر (المنتج، الجملة المعتمدة من قاعدة المعرفة بمرجعها، السطر؛ فارغ في المستويين 0 و1) · سجل الادعاءات · قرار الالتزام وتصحيحاته · الدرجة والنسخة · سطر المخاطر (ثابت لكل فيديو، لا علامة في السكربت). الحزمة تُترجم آلياً إلى عقد السكربت الحالي في المحرك؛ دستور المونتاج لا يعيد تعريف ما يخص الكتابة، بل يحيل إلى دستور السكربتات.

**Touches in v2.3.2:** `partner-edit.md` § 11 — a mapping table from the fourteen fields to the v2.3.1 contract (`question`, `cold_open_from`, `cta {line,text}` ← the CTA field when spoken, `takeaway`, `music_mode` none, `lines[]` with `must_keep` / `hold_after` / `emphasis_word` / `numbers[]` / `visual_intent` / `title_card_text` / `insert_assets[]` / `illustrative_ui` / `shot_hint`, `spelling[]`, `reshoot_policy`), plus the fields the v2.3.1 contract does not carry yet and the engine must accept from the package: the internal title, the three openings, performance notes (≤ 3, partner-facing only), the shooting format and expected length, type / pattern / imprint level 0–3 / partner role, screen texts (≤ 3, each bound to a line), the data card (0 or 1: amount, duration, assumed rate, result, show line and hide line), the bridge (product, the approved sentence with its knowledge-base reference, line; empty at levels 0 and 1), the claims log, the compliance decision and its corrections, the grade and version; the risk line is fixed per video and carries no mark in the script (CR-A text for the person tier). Fonts, colours and positions of screen texts and of the data card stay the editing layer's (`video-rules.md`, `partner-edit.md` § 6, tokens). Open question G-Q5 (screen texts vs the single title card).

### CR-E — constants confirmed without change

**Binding text (CEO, verbatim):**

> لا شعار فايبر على فيديوهات الشركاء (D-C)؛ لا بطاقة ختامية لأي فيديو (D-B)؛ لا أصوات أو وجوه مولّدة ولا صوت تجريبي للسكربت؛ الموافقة البشرية الوحيدة عند الفيديو المصوّر قبل النشر؛ لا ملصقات تحذيرية داخل الكلام ولا «مثال افتراضي» على الشاشة؛ الافتراض يُقال بلسان طبيعي وتُعرض عناصره في بطاقة البيانات.

**Where each constant already lives in v2.3.1 (nothing to change):** D-C → F-7, `video-rules.md` «Logo on person-led content», `CornerLogo({ tier })`, gate 0 %; D-B → F-8, `Takeaway`, `Closing` DEPRECATED, gate FAILS a closing card; no generated voices or faces → F-3 (Arabic generated VO prohibited), `claims.md` 5, `person-led.md` audio rule, `partner-edit.md` § 12-أ 2 and 6 — extended by the constitution to «no generated test voice for the script, even for preview» (recorded here; a documentation line in v2.3.2); the one human approval at the filmed video before publication → `ACCEPTANCE.md` 11 and 15, `partner-edit.md` § 10-أ A12 (the first five edits of a new partner go to the CEO or a delegate — this is that human approval, before compliance); no warning stickers in the speech and no «مثال افتراضي» on screen → `claims.md` 7, `partner-edit.md` § 6.9 and § 12-أ 8; the assumption spoken naturally with its elements on the data card → CR-D (the data card field). Open question G-Q4 (the tier of studio output for employees and office managers).

### CR-F — dual reference

**Binding text (CEO, verbatim):**

> دستور السكربتات هو مصدر قواعد الكتابة (الفكرة، البنية، اللهجة، الأرقام، الادعاءات، الممنوعات بأصنافها الثلاثة)، ودستور المونتاج مصدر قواعد الصورة والصوت والنص على الشاشة؛ يُضاف في `partner-edit.md` (أو الموضع الذي تراه الحزمة صحيحاً) قسم إحالة قصير يسمّي دستور السكربتات ومساره في مستودع الاستوديو (`docs/SCRIPT_CONSTITUTION_AR.md`) دون نسخ قواعده.

**Done in this round:** `templates/video/partner-edit.md` § 17 «الإحالة إلى دستور السكربتات» (names the constitution, its path in the studio repository, what each document owns, and points here); § 14 item 3 and § 16 carry the pointer. No rule of the constitution is copied into the package. In v2.3.2 the same referral line goes to `templates/video/README.md`, `person-led.md`, `review-prompt.md` and the skill.

### Questions raised by the recording (real conflicts with the v2.3.1 text — decisions, not changes; full context · consequence · options · recommendation in `FIPER-BRAND-CR-SCRIPTS-REPORT.md`)

| # | Question | Conflict with | Recommendation | Status |
|---|---|---|---|---|
| G-Q1 | The entity name inside the CR-A line | `regulatory-matrix.md` § 0 verbatim entity texts | (a) the CEO's form as written | **CLOSED by the CEO's own answer (evening 31 Oct 2026, v2.3.3): «Fiper Global»** as written — a partner-tier exception recorded in `regulatory-matrix.md` § 0; shown to legal within Q30 without blocking. (The v2.3.2 closure «no entity inside the line» was made before this answer arrived and is superseded.) |
| G-Q2 | The language of the CR-A line on non-Arabic partner videos | the v2.3.1 bilingual line | (b) the line in the video's language | **CLOSED by the CEO's own answer (evening 31 Oct 2026, v2.3.3): the language of the content** — Arabic line on an Arabic video, English line "Investing involves risk — Fiper Global, Company registration number GB23201759" on an English video; no bilingual line on partner content (`video.person_edit.risk_line.language`). (The v2.3.2 closure is superseded.) |
| G-Q3 | Two entities on one partner post | `caption-template.md` person section (UAE line) | (c) the partner caption carries the Mauritius entity | **CLOSED by the CEO's own answer (evening 31 Oct 2026, v2.3.3): the Mauritius entity with its company registration number only** in the partner caption — no UAE entity, no 2422384, nothing else (`component.video.entity-line-person`); the official caption stays on the Q30 mapping. (The v2.3.2 closure is superseded.) |
| G-Q4 | The `tier` of studio output for Fiper employees and office managers (the constitution allows «نحن في فايبر» and says the editing layer decides logo / closing from the imprint level and role) vs D-C (no logo on any partner video) and `tier` set in the script, never by the engine | `video-rules.md` tiers, F-7, CR-E | Every script that comes through the partners studio is `tier=person` (no logo), whatever the level 0–3 or the role; `tier=official` only for content the company produces itself | **CLOSED — CEO decision (evening 31 Oct 2026, v2.3.3): every script through the Partners Studio = `tier=person` (no logo), whatever the imprint level or the role, employees and office managers included; `tier=official` only for content the company produces itself** — `partner-edit.md` § 9 / § 11-ج, `video-rules.md`, `person-led.md`, the manual |
| G-Q5 | CR-D «screen texts, three at most, each bound to a line» vs `partner-edit.md` § 6.7 (one title card at most, ≤ 5 words, captions hidden during it) and the single `title_card_text` field | `partner-edit.md` § 6.7, § 11 | Screen texts map to `visual_intent: annotate` (an annotation over the speaker) or `title_card`; among the three at most one is a title card; the rest are annotations in the caption style | **CLOSED — CEO confirmed recommendation (a) (evening 31 Oct 2026, v2.3.3): screen texts → `annotate`; at most one becomes `title_card` (≤ 5 words, captions hidden); the candidate = the one the writer marks `title_card_candidate`, else the first; the single-title-card cap stays** — `partner-edit.md` § 6.12 + § 11-ج with an example |
| G-Q6 | For legal (Q30), non-blocking: the short entity form «Fiper Global» on partner surfaces (frames + caption) and the entity → product mapping | `regulatory-matrix.md` § 0 (partner-tier exception), B-1 | present both with the Q30 package; the partner surfaces ship as decided by the CEO | OPEN — legal (raised in v2.3.3) |

## H. v2.3.2 — the Partners Studio change requests 1–12 and the pending v2.2.0 items, DECIDED by the CEO on 31 Oct 2026 and APPLIED (assignment BRAND-V2-3-1-STUDIO-CR-20261031-071542, shipped as v2.3.2 because v2.3.1 was already tagged and published)

| # | Item | Decision | Where it lives | Status |
|---|---|---|---|---|
| D1 | Mauritius entity number | **GB23201759** (company registration number); G823201759 was the captured typo; UAE 2422384 unchanged | `regulatory-matrix.md` § 0 / R3 · `templates/legal/regulatory-block.html` · `templates/email/_regulatory-block.verbatim.html` → mails · `caption-template.md` · `component.video.entity-line-mau` · `verify-identity` REG-NUMBER-TYPO · `check-emails` (corrected reference) · UPGRADE-v2.3.2 (fiper.io footer in the fiper-v2 round) | CLOSED |
| D2 | Licence wording | **refused**: «Company registration number» only; LICENCE-WORDING keeps refusing License / Licence No. with any number; REG-NUMBER-WORDING accepts the two numbers only behind «Company registration number» | `verify-identity` · `regulatory-matrix.md` § 0 · glossary § 6 · CR-A (§ G) refused | CLOSED |
| D3 | Verbatim block R1–R7 | unchanged apart from the number | `templates/legal/regulatory-block.html` | CLOSED |
| D4 | Risk line | the fixed wording verbatim, small, side, persistent, no closing | `component.risk-line.text` · `RiskLine` | CLOSED |
| D5 | No Arabic lockup; loss red / profit green; dark default, light optional for sites and apps | reaffirmed | `USAGE.md` § 2a · `composition-rules.md` § 1 / § 6 | CLOSED |
| 1 | No closing card in any video | `Closing` component and end-card tokens removed; `film()` throws on `closingAt` | `lib/fiper-video.mjs` · tokens · docs · gate | CLOSED |
| 2 | Logo by tier | person: none; official: every frame | `CornerLogo({ tier })` · gate | CLOSED (v2.3.1, confirmed) |
| 3 | Side risk line on 9:16 | LEFT edge, 24 px at 1080, divider token .28, first to last frame; 16:9 / 1:1 bottom-start | `component.video.risk-line.*` · `RiskLine` · `check-video-delivery` (≥ 95 % + geometry / colour) | CLOSED |
| 4 | Entity line | never burnt in; caption template AR + EN (entity + risk line + optional link) | `caption-template.md` · gate | CLOSED |
| 5 | Semantic emphasis by role | profit / loss on a financial VALUE only; alert / information words amber; red-word ban stays for UI + static design, exception documented | `Caption` · `check-video-delivery` · `check-partner-edit` G7 · `verify-identity` scope note + VIDEO-EMPHASIS-ON-WORD · `composition-rules.md` § 6 / § 13 | CLOSED |
| 6 | Lower third in reels | centre-bottom, bottom edge at 80 %, ≤ 4 s in total | `component.video.lower-third-*` · `LowerThird` · gate | CLOSED |
| 7 | Non-9:16 source | over a blurred copy of itself, never bars | `Footage({ fit:'contain' })` · `component.video.non-native-aspect` · gate | CLOSED |
| 8 | Take-selection normalisation | number words ↔ digits, compounds, plural suffixes | `take-selection.md` § 1 · `video.person_edit.take_selection` · `partner-edit.md` § 2 | CLOSED (rule; engine implementation in the studio) |
| 9 | Adjacent cuts of one take | merged before eligibility — the official reading of «no half line from two takes» | `take-selection.md` § 2 · `partner-edit.md` § 2 | CLOSED (rule) |
| 10 | Caption under the takeaway | the matching group hidden; G7 exception | `film()` · `check-partner-edit` G7 · `check-video-delivery` · `partner-edit.md` § 6.11 | CLOSED |
| 11 | Caption text | the spoken words as recorded | `partner-edit.md` § 6.8 · `claims.md` 8 · `ACCEPTANCE` 19 | CLOSED (rule; manual check) |
| 12 | Sizes | takeaway / title card 76 px inside 130 px margins; caption box stays; caption group ≤ 26 characters | `component.video.takeaway-*` / `title-card-*` / `caption-max-chars` · `Takeaway` · `TitleCard` · `Caption` · gates | CLOSED |
| E1 | E-mail language | recipient's language + ONE equivalence line in the other | `build-emails.mjs` → `*.html` AR + `*.en.html` EN · `component.email.language-parity` / `equivalence-line-*` · `check-emails` | CLOSED |
| E2 | E-mail ground | paper in every mode; no dark-scheme rules (clients invert them unpredictably); light / dark belong to sites and apps | `build-emails.mjs` · `component.email.scheme` · `templates/email/README.md` + `TEST-MATRIX.md` · `check-emails` · `check-templates` light only | CLOSED |
| E3 | QR on covers | ≥ 160 px minimum, recommended 12 %, never above 300 px; 260 px accepted | `component.qr.max-side` · `PRINT-SPEC.md` · `composition-rules.md` Q11 | CLOSED |
| E4 | App screens | the fixed risk line in the foot of the sign-in screen and of every screen with financial figures; side, unobtrusive | `.fp-risk-foot` (`components.css`, `SPEC.md` § 9) · mockups 01–04 · `check-risk-line` | CLOSED (no sign-in mockup exists in the package — rule recorded in SPEC § 9) |

Still open after v2.3.2: F-2 / B-1 entity → product mapping (legal), F-9 music licence (CEO purchase), F-10 forced alignment (WhisperX), CR-B / CR-C / CR-D (§ G), G-Q4 and G-Q5. **v2.3.3 (CEO evening 31 Oct 2026) closed CR-A (final form), CR-B, CR-C, CR-D, G-Q1–Q5; still open after v2.3.3: F-2 / B-1 mapping + the short entity form «Fiper Global» for legal (G-Q6, Q30 — non-blocking), F-9 music licence, F-10 WhisperX, the real-partner phone recording not yet tested, Q35 (24 vs 28 px, the CEO's eye on his phone).**

## I. v2.3.4 — the invoices system's change requests (fiper-invoices, 1 Nov 2026) — APPLIED (assignment BRAND-V2-3-4-INVOICES-CR-20261101-023828)

| Item | Request | Decision / status | Where |
|---|---|---|---|
| I-1 (FI7-017) | the mail header raster sits on an opaque white box over the paper mail shell — every paper mail in the system | APPLIED: `email-header-{120,160}-{paper,transparent}[@2x].png` from the vector source, paper = `semantic.color.light.bg`; templates use the paper raster; old files → `logos/_deprecated/email/`; gates `verify-logo-pack` (corners), `check-emails` (pixels + name), `verify-identity` OLD-EMAIL-HEADER | `logos/USAGE.md` § 1, `templates/email/README.md`, `dist/checks/email/header-paper-proof.png` |
| I-2 | `tokens.css` breaks PostCSS / Next («Unknown word») — a prose value with semicolons unquoted | APPLIED: textual values are quoted CSS strings; `verify-tokens` runs the strict PostCSS parser + a quoted-string proof; consumers drop their generated workaround | `CHANGELOG.md` v2.3.4 § 2, `dist/consumers/UPGRADE-v2.3.4.md` |
| I-3 | the filled «Cancel» button reads as a second primary | CEO decision (recommendation B): a usage rule, not a colour change — destructive actions never filled (`.fp-btn-danger` outline / text); `.fp-btn-danger-solid` only in the final confirmation dialog; `verify-identity` DANGER-FILLED-OUTSIDE-DIALOG | `components/SPEC.md` § 1, `references/composition-rules.md` § 6, tokens `component.button.destructive.default-style` / `fill-scope` |
| I-Q1 | real-client rendering of the paper header (Gmail / Outlook / Apple Mail) | NOT TESTED in this environment — Chromium proof only; the flattened paper raster was chosen over the transparent twin for client inversions (reasoning in `templates/email/README.md`) | `TEST-MATRIX.md` |

## Where these items are referenced

`README.md` (introduction), the manual's governance page (N), `qa-report.md` § 6, `deliverables-manifest.md`, `CHANGELOG.md`. A change to any status comes only by an explicit change request — **§ G is the change-request register** (requests recorded with their binding text before implementation; each one is applied in a later version as one commit and closes here and in `CHANGELOG.md`).

## E. Documentation defects recorded after the v2.0.1 freeze (no re-issue)

| Item | Status |
|---|---|
| `brand/README.md` introduction still references the manual as v2.0 (file names and tag are v2.0.1) — v2.0.1 zip/PDF/tag stay frozen | CLOSED in v2.1.0 (README intro now names the rc manual) |
