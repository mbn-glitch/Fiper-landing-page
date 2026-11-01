# Regulatory text matrix — which block, for which product, entity and channel — v2.0

Status unchanged in v2.0: the approval of the visual direction does not approve any item in this file; every row keeps its documented state.

Rule: original texts stay **verbatim** (`brand/templates/legal/regulatory-block.html` = the fiper.io footer captured 2026-10-29, index.html md5 `7628659a07bb6e98407b61f776c100c4`). The site footer is **not** assumed to fit every product and document. Every scope without a documented source is a **REQUIRED DECISION** (legal/compliance owner answers; nothing is generalised in the meantime). Blank/writable templates carry no warnings (approved decision); final documents that legally require disclosures carry the approved block for their entity once decided.

## 0. Entities — APPROVED texts (CEO decision 30 Oct 2026; the Mauritius number corrected 31 Oct 2026)

**Correction (CEO decision 31 Oct 2026, v2.3.2):** the Mauritius company registration number is **GB23201759**. The fiper.io footer captured on 2026-10-29 carried the typo **G823201759** in its «Company registration number» field; the package corrects it in every authored place (this matrix, `templates/legal/regulatory-block.html`, the e-mail footer, the caption template, the examples) and the live fiper.io footer is corrected in the fiper-v2 round (`dist/consumers/UPGRADE-v2.3.2.md`). **The wording stays «Company registration number»** — no licence line and no word License / Licence / ترخيص with any number on any authored surface: the Partners Studio request to treat «License No. GB23201759» as valid wording was **refused** (the number is right, the wording is not). Gates: `verify-identity` LICENCE-WORDING (refuses License / Licence No. with any number) and REG-NUMBER-WORDING (accepts 2422384 and GB23201759 only behind «Company registration number»; refuses the typo). The captured licence sentence inside the verbatim block R3 is fiper.io's own text and is not a package template.

| Entity | Exact text (never retyped; addresses stay in Latin script inside Arabic footers — no invented transliteration) | Regulator / licence line | Products mapped |
|---|---|---|---|
| Fiper Global UAE | Fiper Global UAE — Company registration number: 2422384 — Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. | RESOLVED-FOR-NOW (CEO 30 Oct 2026, v2.2.1): the company registration number is sufficient — no regulator / licence line until the CEO supplies one | PENDING — CEO to supply |
| Fiper Global MAU | Fiper Global MAU — Company registration number: GB23201759 — Registration Address: Office 306, 3rd Floor, Ebene Junction, Rue de la Democratie, Ebene 72201, Mauritius. | RESOLVED-FOR-NOW (CEO 30 Oct 2026, v2.2.1): the company registration number is sufficient — no regulator / licence line until the CEO supplies one (the fiper.io footer cites Investment Dealer Licence GB23201759 / Mauritius FSC; not restated until confirmed) | PENDING — CEO to supply |

Both entities are shipped as selectable blocks in `templates/legal/regulatory-block.html` (`data-entity="uae"` / `"mau"`) and the e-mail footer carries the UAE text by default until the entity→product mapping is decided.

**Partner-tier exception (CEO decision, evening of 31 Oct 2026 — v2.3.3; G-Q1 / G-Q2 / G-Q3 answered by the CEO himself):** on the surfaces of **partner content only** (`tier=person`: the side risk line burnt into the frames and the partner post caption) the Mauritius entity is written in the short form **«Fiper Global»** as the CEO wrote it, with the company registration number only — Arabic «Fiper Global، رقم السجل التجاري GB23201759» / English "Fiper Global, Company registration number GB23201759" — in the language of the content, one entity per partner post (no UAE line, no 2422384). The two verbatim entity texts of the table above stay unchanged for the official tier (legal block, e-mail footer, official captions, documents). This short form and the entity → product mapping are to be shown to legal within Q30 without blocking the partner surfaces (`OPEN-ITEMS.md` § G). Tokens: `video.person_edit.risk_line.text_ar` / `text_en` / `entity_name`, `component.video.entity-line-person`. The licence wording stays refused everywhere.

## 1. Blocks available today (verbatim sources)

| ID | Block | Text (start) | Entity named | Source |
|---|---|---|---|---|
| R1 | Company Information | "Fiper Group operates through multiple regulated entities … this website is operated by **Fiper Markets LLC**. Company ID Number: 400378916 · TFZ Number: TFZ/201223/01 — TFZ Registration Details … managed under the supervision of the Georgian-licensed entity. Fiper on Trustpilot" | Fiper Markets LLC (Georgia, TFZ) | fiper.io footer `.friskbox` p1 |
| R2 | Companies & Licenses — UAE | "**UAE FZ License — Fiper Global LLC** · Company registration number: 2422384 · Registration Address: Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. … regional management and marketing hub … MENA region." | Fiper Global LLC (UAE FZ) | footer p2 |
| R3 | Companies & Licenses — Mauritius | "**FSC MAU Regulation — Fiper Global MAU LTD** · Company registration number: GB23201759 … Investment Dealer Licence (Full-Service Dealer, excluding Underwriting), License No. **GB23201759**, regulated by the Mauritius FSC — Online Public Register. The website FiperFX.net is operated by this entity …" (captured text with the one documented number correction; the licence sentence is fiper.io's and is never re-used as a package line — § 0) | Fiper Global MAU LTD (FSC) | footer p2 |
| R4 | Risk Warning (CFDs) | "Trading Contracts for Difference (CFDs) involves a high level of risk … You should not invest money that you cannot afford to lose." | — (product: CFDs) | footer p3 |
| R5 | Disclaimer (jurisdictions) | "FIPER does not offer its services to residents of certain jurisdictions such as the USA, UK, Iran, Canada (including Quebec), North Korea and Myanmar. …" | — | footer p4 |
| R6 | Marketing Material | "Please note that the content on this website is marketing material and not investment advice. …" | — | footer p5 |
| R7 | Legal Documentation + © | "Legal Documentation · © 2026 Fiper Global. All rights reserved." (links: fiper.me/legal-documentation) | Fiper Global | footer p6 |
| R12 | **Fixed production risk line** (APPROVED, CEO decision 30 Oct 2026, Q4) | «الاستثمار ينطوي على مخاطر» / "Investing involves risk" — ON the image (small, muted, bottom safe area), in the caption, in film as the persistent side line (no closing card since v2.3.1); the only risk wording allowed on templates (`verify-identity` RISK-WORDING) | Fiper Global | `brand/tokens.json component.social.risk-line / component.video.risk-line` |
| R8 | Short risk lines (captions) | `hero.risk` "Trading CFDs involves significant risk of loss." · `fpt.risk` "Trading involves substantial risk of loss." · `copy.dis` / `p6.dis` "Past/Historical performance does not guarantee future results." · `fnd.dis` "Historical performance does not guarantee future results. Investment products carry risk." | — | fiper.io i18n keys |
| R9 | One-line entity footer (internal systems) | "Fiper Global MAU LTD · Investment Dealer Licence, License No. GB23201759, regulated by the Mauritius FSC · Fiper Global LLC · UAE FZ License, registration number 2422384. Trading CFDs involves significant risk of loss." | MAU LTD + Global LLC | `fiper-careers/src/lib/email-layout.ts:24` (`LEGAL_ENTITY_LINE`), `fiper-meetings/src/lib/email-layout.ts:24`; shorter variant without "registration number" in both repos' `src/components/Shell.tsx:6` |
| R10 | Copyright line | "© {year} Fiper Global" | Fiper Global | `fiper-careers/src/components/Shell.tsx:26`, `fiper-meetings/src/components/Shell.tsx:26`, `fiper-invoices/src/components/Shell.tsx:17`, both `email-layout.ts:138` |
| R11 | Document issuer line | "This document was issued by Fiper Global L.L.C-FZ and its details match our records." / «هذا المستند صادر من Fiper Global وتفاصيله مطابقة لسجلاتنا.» | Fiper Global L.L.C-FZ | `fiper-invoices/src/app/v/[number]/[code]/page.tsx:52-53` |

Legal links (verbatim): `https://fiper.me/legal-documentation` (Terms, Privacy, Risk Disclosure, Legal Documentation) · `https://fiper.me/Fiper_TFZ.pdf` · `https://trustpilot.com/review/fiper.me` · `https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr` · `https://fiperfx.net/` · `https://fptraders.com` · `https://fiperhub.com` · `https://wa.me/97433600905` · `mailto:support@fiper.me`.

## 2. What each existing surface shows today (observed, read-only inputs)

| Surface | Legal text shown | Source |
|---|---|---|
| fiper.io (marketing) | R1–R7 full block, LTR English, under the footer columns | `sources/fiper.io/footer.html` |
| fiperhub.com (help centre) | No regulatory block found; only "Official Help Center — Fiper Global" and meta author "Fiper Global" | `fiperhub-site/index.html:19, 1314` |
| fiper-careers (site + mails) | R9 one-liner + R10 | `Shell.tsx:6, 26`; `email-layout.ts:24, 138` |
| fiper-meetings (site + mails) | R9 one-liner + R10 | same files |
| fiper-invoices (documents + verification page) | R10 in the shell; R11 on the verification page ("Fiper Global L.L.C-FZ"); mail subject "Fiper Global – Invoice {number}" | `Shell.tsx:17`, `page.tsx:52-53`, `i18n/en.json:412` |
| Fiper-landing-page (Fiper Card) | "© 2026 Fiper. All rights reserved." in 6 locales; no entity, no risk text | `src/locales/*.json:168` |
| fipo-dashboard (internal) | none found (handoff design mentions no block) | `fipo-dashboard/handoff/design/fipo-dashboard-v4.html` |
| fiper-funds | demo banner «نسخة تجريبية — أموال افتراضية»; no entity block in the inputs read | `README.md` |

Observation: three different entity statements are live (R1 Fiper Markets LLC for the website; R9 MAU LTD + Global LLC for internal systems; R11 "Fiper Global L.L.C-FZ" on invoices). Which one is right per product is not documented anywhere in the inputs — hence the decisions below.

## 3. Matrix — block × product × entity × channel

| Product / channel | Website / web app | System e-mail | Document (PDF) | Social caption | Video caption (no end card since v2.3.1 — `templates/video/caption-template.md`) | Status |
|---|---|---|---|---|---|---|
| fiper.io marketing | R1–R7 (full) | — | — | R8 line (caption) | R8 line | OBSERVED for web; captions/video PROPOSED pattern |
| Direct trading (cTrader/MT5), copy trading | R1–R7 inherited from fiper.io | REQUIRED DECISION — which entity line (R9?) and whether R4 applies to every mail | REQUIRED DECISION — statements: R3 (MAU dealer licence) or R1? | R8 `hero.risk` | R8 | REQUIRED DECISION |
| Fiper Card | "© Fiper" only today (landing page) | REQUIRED DECISION — card issuer / programme-manager disclosure text does not exist in the inputs | REQUIRED DECISION | REQUIRED DECISION — any card-scheme (Visa) marketing rule | REQUIRED DECISION | REQUIRED DECISION |
| Fiper ETF · SPUS by Fiper · **Fiper Funds** | R8 `fnd.dis` on fiper.io; the app shows the demo banner only | REQUIRED DECISION — is a CFD risk warning (R4/R9) wrong for a funds product? Which entity offers the funds? | REQUIRED DECISION — statements and order confirmations need an entity + a funds-specific risk line (R8 `fnd.dis` is the only funds wording that exists) | R8 `fnd.dis` | R8 `fnd.dis` | REQUIRED DECISION (blocks launch-grade documents) |
| Client area crm.fiper.me | REQUIRED DECISION (not in inputs) | REQUIRED DECISION | — | — | — | REQUIRED DECISION |
| Internal systems (invoices, meetings, careers, Fipo dashboard) | R9 + R10 observed (careers/meetings); invoices R10 + R11 | R9 + R10 observed | R11 observed (invoices) | — | — | OBSERVED but inconsistent entities → REQUIRED DECISION to unify |
| Fiper Hub / Fipo / Academy | nothing observed | REQUIRED DECISION | — | — | — | REQUIRED DECISION |
| Partner white-labels (Zenova, Rostova …) | Fiper block **verbatim** stays (approved rule) — which blocks (R1–R7 all?) | REQUIRED DECISION | REQUIRED DECISION | — | — | REQUIRED DECISION on scope, rule on verbatim is APPROVED |
| FPT, TWO Markets | own identities — out of scope | — | — | — | — | out of scope |

## 4. Required decisions (for the legal/compliance owner) — rows 8–11 added in v1.1 (§ 5)
1. Entity of record per product — **PENDING (CEO to supply)**: the two entity texts are APPROVED (§ 0: Fiper Global UAE · Fiper Global MAU); the mapping entity → product line (trading, card, funds, internal) and the regulator / licence lines are still to come.
2. Which blocks are mandatory on **system e-mails** (OTP, confirmation, statement) and which are forbidden (a CFD warning on a funds statement?). Today the templates in `brand/templates/email/` carry R1–R7 in the footer as the only verbatim source; this is a placeholder choice, not an approval.
3. Funds-specific disclosure wording beyond R8 `fnd.dis` (prospectus/KID references, settlement/custody statement, Sharia certification statement scope) — none exists in the inputs.
4. Card-scheme and issuer disclosures for Fiper Card (none in the inputs).
5. Social captions and video captions (the entity line left the frames in v2.3.1): minimum line per product (proposal: R8 per product; no block on the image).
6. Partner white-labels: which of R1–R7 must appear verbatim and where the partner's own entity goes.
7. Internal document footer unification (R9 vs R10 vs R11).

Until decided: templates ship with the verbatim fiper.io footer where a footer exists (e-mails, report) as a **visually secondary footer** (smaller muted type after a divider — the text itself is never shortened, reordered or paraphrased) and the fixed risk line «الاستثمار ينطوي على مخاطر» / "Investing involves risk" on every visual output including blank templates (CEO 30 Oct 2026, R12 — the only risk wording on templates); every rendered document states in its caption that the regulatory block is "placeholder — pending decision" in `deliverables-manifest.md` / `qa-report.md`.


## 5. Per message type — system e-mails (CEO review v1.1 item 10)

Observation that triggered this section: the OTP mail (`brand/templates/email/otp.html`) is dominated by the full fiper.io footer (R1–R7) because that footer is the **only** verbatim source available. No approved scope per message type exists in any input. Approved texts are **never** shortened, re-ordered or paraphrased; choosing which block applies to which message is a legal decision, not a design one.

| Message type | Example templates | What is approved today | Interim (shipped) | Status |
|---|---|---|---|---|
| OTP / sign-in code / security alert | `otp.html` | nothing specific — only the site footer exists | full verbatim block R1–R7 as a visually secondary footer below a divider; entity line R10 `© {year} Fiper Global` above it | **REQUIRED DECISION 8** — which block (if any) a security mail must carry; whether R4 (CFD risk) is wrong on a security mail |
| Transactional (order confirmation, transfer approved/rejected) | `confirmation.html` | nothing specific | full verbatim block as above | **REQUIRED DECISION 9** — entity of record per product + which blocks; funds mails: is R4/R9 (CFD) wrong? |
| Statements (monthly, tax, annual) | `statement.html`, `templates/document/report.html` | `fnd.dis` (R8) exists for funds on fiper.io | full verbatim block as above + `fnd.dis` in the caption for funds | **REQUIRED DECISION 10** — statement disclosures per product and entity (custody, settlement, Sharia scope) |
| Marketing / newsletter | — (none shipped) | R4–R7 apply on the website | not shipped until decided; captions follow R8 per product | **REQUIRED DECISION 11** — marketing-mail block + unsubscribe/entity line |
| Internal / staff notifications (meetings, careers, invoices) | `email-layout.ts` in the input repos | R9 + R10 observed | as observed in those repos | REQUIRED DECISION 7 (unification) |

Rendering rule for every message type until decided: **the mail is written in the recipient's language (Arabic `*.html`, English `*.en.html`) with ONE equivalence line in the other language — never the full bilingual duplicate (CEO 31 Oct 2026, v2.3.2); the paper ground in every mode, no dark-scheme rules;** the regulatory block is the last element, after a 1 px divider, in `--fp-text-muted` at 11 px, headings of the block kept, links under their original words; the body of the mail (greeting, code/figures, one button) must occupy the first screen at 360 px and the block must never appear above the button. Claims of mail-client testing: see `templates/email/TEST-MATRIX.md` — Chromium emulation of `prefers-color-scheme: dark` is a browser preview only; Gmail / Outlook / Apple Mail are NOT TESTED until evidence (client, version, screenshot) is attached.
