# Delivery record — v2.3.4 (the invoices system's three change requests — paper mail header FI7-017, strict-PostCSS tokens.css, destructive buttons never filled; 1 Nov 2026) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.3.4** (branch `v2.3.4` → `main`, git tag `v2.3.4`) — assignment BRAND-V2-3-4-INVOICES-CR-20261101-023828 |
| CR 1 — mail header | `logos/email/email-header-{120,160}-{paper,transparent}[@2x].png` regenerated from the vector source; the paper raster is the mail header (`component.email.logo-file`); white / dark headers → `logos/_deprecated/email/`; proof `dist/checks/email/header-paper-proof.png` (old header: 19,328 white ground pixels · new: 0, all paper #F7F4F1) |
| CR 2 — tokens.css | textual values quoted by `build-tokens.mjs`; `verify-tokens` parses `tokens.css` with the strict PostCSS parser (0 warnings, 574+ declarations) and proves every «;»-bearing string quoted; negative proof: the unquoted v2.3.3 line → `POSTCSS PARSE FAIL Unknown word never (line 443:77)` + `UNQUOTED SEMICOLON STRING` |
| CR 3 — destructive buttons | `.fp-btn-danger` outline / `.fp-btn--text`, `.fp-btn-danger-solid` in the confirmation dialog only; `verify-identity` DANGER-FILLED-OUTSIDE-DIALOG (negative proof: a filled danger button outside a dialog, an inline solid fill and a CSS rule → 3 findings → FAIL; the same button inside `role="dialog"` → PASS) |
| Package | `fiper-brand-v2.3.4.zip` — SHA-256 in `dist/fiper-brand-v2.3.4.zip.sha256` and in `FIPER-BRAND-V2-3-4-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.3.4.pdf` 37 pages, LAYOUT PASS, brand fonts only; B (logo table), G1 (danger rule), K1 / K3 (header), N (version) |
| Gates (build repo) | verify-tokens (+ PostCSS) · verify-identity brand (+ OLD-EMAIL-HEADER, DANGER-FILLED-OUTSIDE-DIALOG) · verify-logo-pack (+ header corners) · check-emails (+ header pixels) · check-components · check-mockups · rendered-contrast dark + light · check-a11y (danger outline 5.76:1, danger solid 5.76:1) · check-fonts · check-risk-line · check-units · check-docs · check-manifest · render-manual LAYOUT · check-pdf-fonts · pdf-metadata · verify-unzipped — all PASS (evidence in the report) |
| Not changed | the video kit, the e-mail wording / footer, the legal texts, the logo artwork; no published tag; no consumer project |
| Still open | real mail clients NOT TESTED (Chromium previews only — `TEST-MATRIX.md`); the v2.3.3 items (legal Q30, Q35, music licence, WhisperX) |

# Delivery record — v2.3.3 (CR-A in its final form + CR-B / CR-C / CR-D + G-Q4 / G-Q5 — the CEO's decisions of the evening of 31 Oct 2026) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.3.3** (branch `v2.3.3` → `main`, git tag `v2.3.3`) — assignment FB-V233-PARTNER-SCRIPTS-20261031-192124 |
| Governing decisions | the CEO answered Q26 and G-Q1…G-Q5 himself (evening 31 Oct 2026; these answers override the v2.3.2 closure of G-Q1–Q3): the entity on the image — yes, partner content only, INSIDE the side risk line; wording = the company registration number only (no licence word); entity name «Fiper Global»; the line in the language of the content; partner caption = the Mauritius entity + registration number only; every studio script tier=person; screen texts → annotate, one title card at most |
| The partner line | AR «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» · EN "Investing involves risk — Fiper Global, Company registration number GB23201759" — `video.person_edit.risk_line.text_ar` / `text_en`; geometry as v2.3.2 (left edge, 24 px, divider .28, first to last frame; 28 px option kept) |
| CR-B / CR-C / CR-D | no partnership disclosure on any surface (`LowerThird` throws; `check-video-delivery`, `check-partner-edit` G11, `verify-identity` PARTNER-DISCLOSURE); role line = self-description with the models by role (`partner-edit.md` § 9) and the one legal limit; the fourteen-field delivery package → script contract (`partner-edit.md` § 11-ج) |
| Kit | `lib/fiper-video.mjs` v2.3.3 (`RiskLine({ tier, lang })`, `checkRoleLine`); the person 9:16 example rebuilt and re-rendered; stills `dist/checks/video/stills-v2.3.3/`; `check-video-delivery` proven on four hand-broken films |
| Package | `fiper-brand-v2.3.3.zip` — SHA-256 in `dist/fiper-brand-v2.3.3.zip.sha256` and in `FIPER-BRAND-V233-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.3.3.pdf`: K4 / K5 (partner line with the entity, role line, tier rule), CEO page, governance |
| Gates (build repo) | verify-tokens · verify-identity brand (+ PARTNER-DISCLOSURE, the Arabic registration wording accepted, «ترخيص» + number refused) · check-risk-line · check-video-delivery (3 films + negative proof ×4) · check-audio-loudness · check-partner-edit-samples (G11) · check-docs (§ 15 identical) · check-manifest · rendered contrast dark + light · templates · components · mockups · emails · a11y · fonts · logo pack · render-manual LAYOUT · PDF fonts · PDF metadata |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` (check-partner-edit from the copy expects G2 / G3 / G7 / G8 / G11) |
| Not changed | the official tier, e-mails and their footer, the campaign ad, the verbatim legal texts; no published tag; no consumer project |
| Still open | legal Q30: the short entity form «Fiper Global» + entity → product mapping (non-blocking, G-Q6); music licence; WhisperX; Q35 (24 vs 28 px); a real partner phone recording not yet tested |

# Delivery record — v2.3.2 (the Partners Studio change requests 1–12 + the Mauritius registration number + the pending v2.2.0 e-mail / QR / app items, CEO 31 Oct 2026) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.3.2** (branch `v2.3.2` → `main`, git tag `v2.3.2`) — shipped as v2.3.2 because v2.3.1 was already tagged, pushed and reported before this assignment arrived |
| Governing decisions | GB23201759 = the Mauritius company registration number (captured typo G823201759 corrected everywhere authored; sources kept as captured); wording «Company registration number» only — the studio's «License No. GB23201759» wording REFUSED (CR-A refused in its form); verbatim block R1–R7 otherwise unchanged; the risk line verbatim, small, side, persistent; no Arabic lockup, loss red / profit green, dark default |
| The twelve video items | 1 `Closing` removed · 2 logo by tier confirmed · 3 left-edge risk line 24 px divider token · 4 entity line in the caption only (AR + EN) · 5 profit / loss colours on values only, alert words amber (red-word ban exception documented in `verify-identity` + `composition-rules`) · 6 lower third centre-bottom 80 % ≤ 4 s · 7 blurred backdrop for non-9:16 sources · 8–9 `take-selection.md` · 10 matching caption hidden under the takeaway (G7 exception) · 11 caption = spoken words · 12 takeaway / title card 76 px / 130 px, caption ≤ 26 chars |
| Pending v2.2.0 items closed | e-mail in the recipient's language + one equivalence line (`*.html` AR, `*.en.html` EN); paper ground in every mode (no dark-scheme rules); QR ≥ 160 px / recommended 12 % / ≤ 300 px; `.fp-risk-foot` on sign-in and every screen with financial figures (mockups 01–04) |
| Kit | `lib/fiper-video.mjs` v2.3.2 (RiskLine left, LowerThird centre-bottom, Takeaway 76/130, TitleCard, Caption ≤ 26 + value-only colours, Footage contain backdrop, takeaway-hide, no Closing) · examples rebuilt and re-rendered (official 9:16 with the card over its blurred copy, person 9:16, 16:9) · `check-video-delivery` v2.3.2 proven on six hand-broken films · `check-partner-edit` G7 + samples re-cut (pass → 0, fail → 1 on G2/G3/G7/G8) |
| Package | `fiper-brand-v2.3.2.zip` — SHA-256 in `dist/fiper-brand-v2.3.2.zip.sha256` and in `FIPER-BRAND-V2-3-2-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.3.2.pdf`: K1 (e-mail language + paper only), K4 / K5 (left-edge risk line, lower third, captions, sizes, blurred backdrop, Closing removed), CEO page (Q2 / Q4 / Q11 / Q14 + the v2.3.2 line), governance, Funds pin |
| Gates (build repo) | verify-tokens · verify-identity brand (+ REG-NUMBER-WORDING / -TYPO, VIDEO-EMPHASIS-ON-WORD) · check-risk-line (incl. mockups 01–04) · check-emails (8 mails: validate, URLs, verbatim block with the corrected number, no dark rule, one language + one equivalence line) · check-audio-loudness · check-video-delivery · check-partner-edit-samples · check-docs · check-manifest · rendered contrast dark + light · templates · components · mockups · a11y · fonts · units · verify-logo-pack · render-manual LAYOUT · PDF fonts · PDF metadata — results in `FIPER-BRAND-V2-3-2-REPORT.md` |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` (English mails and `take-selection.md` required; `check-partner-edit` from the copy) |
| Still open | entity → product mapping (legal); music licence; WhisperX; CR-B / CR-C / CR-D (§ G); G-Q4 / G-Q5 |

# Delivery record — v2.3.1 (CEO decisions 31 Oct 2026 on video + the approved partner editorial layer) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.3.1** (branch `v2.3.1` → `main`, git tag `v2.3.1`) |
| CEO decisions 31 Oct 2026 (APPROVED, applied to the whole kit) | 1 no closing card in any video — the takeaway over the speaker / last shot, the side risk line to the last frame, the entity line in the caption template · 2 logo by tier — official: every frame, never hidden, per content type; person-led: no Fiper logo at all · 3 semantic word emphasis in video — danger #F05252 / profit #2AB37A / info #D9A441 (amber-400 APPROVED), one per group, never brand red; the red-word ban scoped to UI and static design · 4 no music by default in person-led videos until licensed |
| Approved files (copied verbatim) | `templates/video/partner-edit.md` (+ § 15 verbatim blocks: gate code, `video.person_edit` values — drift-checked), `scripts/check-partner-edit.mjs` (shipped in `brand/scripts/`), `tokens.json` → `video.person_edit` (applied / proposed → APPROVED with the evidence kept in the source; leaf-level status inherited) |
| Kit | `lib/fiper-video.mjs`: `Takeaway`, `Caption`, `Footage` new; `CornerLogo({ tier })`; `Closing` DEPRECATED; `film()` ends on the takeaway · examples: `film-9x16`, `film-16x9` (official, no closing card) + `film-person-9x16` (person tier) · samples re-rendered (placeholder bed, −14.0/−14.1 LUFS) · `caption-template.md` · synthetic gate samples `samples/partner-edit/` |
| Package | `fiper-brand-v2.3.1.zip` — SHA-256 in `dist/fiper-brand-v2.3.1.zip.sha256` and in `FIPER-BRAND-V2-3-1-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.3.1.pdf`: K4 video table (takeaway, logo by tier, semantic emphasis), K5 (components, values, person-tier sample, two tiers, don'ts), CEO page, governance, Funds pin; LAYOUT PASS, PDF fonts PASS, metadata v2.3.1 |
| Gates (build repo) | verify-tokens PASS (480 tokens) · verify-identity brand PASS · check-risk-line ALL PASS (3 examples) · check-audio-loudness PASS (3 samples) · check-video-delivery ALL PASS (3 films: no closing card, logo 100 % official / 0 % person, risk line 100 % incl. the last frame, emphasis colours, takeaway, entity line absent) · **check-partner-edit-samples ALL PASS** (edit-pass exit 0 · edit-fail exit 1 on G2/G3/G7/G8) · check-docs PASS incl. the § 15 drift check · verify-logo-pack · rendered contrast dark + light · templates / components / mockups / emails / a11y / fonts · check-manifest |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` ALL PASS incl. `check-partner-edit` from the copy on the shipped samples |
| Visual self-check | frame boards of the three films every 0.5 s (official: logo on every frame, takeaway + small CTA pill over the card shot, no closing; person: no logo, captions with one coloured word, lower third once, takeaway over the speaker); full-resolution frames; manual pages K4 / K5 |
| Memory rules | strictly sequential, one Playwright lane closed after each round, heavy steps under `nice -n 19 ionice -c3`, free memory checked before each render |
| Open items | `OPEN-ITEMS.md` § F: 6 emphasis colour CLOSED · 7 logo per tier CLOSED · 8 closing CLOSED · 9 music licence OPEN · 10 WhisperX forced alignment OPEN · 11 entity line in the caption APPLIED (reviewable) |

# Delivery record — v2.3.0 (video & motion production kit, 31 Oct 2026; CEO decision on the film risk line) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.3.0** (branch `v2.3` → `main`, git tag `v2.3.0`) |
| Source adopted | `references/production-notes-2026-10-30.md` = the production chat's standards document, verbatim (md5-identical copy); `references/production-notes-corrections.md` = where v2.2.x wins (logo A, corner 96/64, no crimson, registration number only — GB23201759 "licence" INVALID, one risk wording, loss red, fonts from `brand/fonts`, one CTA, Ruq'ah not identity) |
| CEO decision 31 Oct 2026 (APPROVED, replaces A.11) | the film risk line is a SMALL PERSISTENT SIDE line for the whole film, never on the closing: 9:16 rotated 90° along the start edge inside the safe margin, 16:9 bottom-start corner; muted, never red; ≥ 24 px at 1080 / ≥ 22 px at 1920; first to last frame; hidden only during colliding logo-reveal frames — `component.video.risk-line.*`, `RiskLine`, `Closing` without the line, gate ≥ 95 % of sampled frames |
| Kit | `templates/video/lib/fiper-video.mjs` (component library, GSAP 3.12.5 vendored, HyperFrames page contract), `lib/audio-chain.mjs` + `audio-mix.json`, `lib/compositing.mjs`, `examples/film-9x16.html` + `film-16x9.html` (library only), `samples/fiper-film-*.webm` + posters (13.8 s, 30 fps, VP9 + Opus, placeholder bed through the chain), `audio-standards.md`, `voice-over.md`, `music.md`, `real-footage.md`, `screen-compositing.md`, `claims.md`, `review-prompt.md`, `person-led.md`, `ACCEPTANCE.md`; composition rules § 12 (two tiers) + § 13 (video rules); the v2.0 `source/reveal.html` + `fiper-reveal-*` retired |
| Package | `fiper-brand-v2.3.0.zip` — SHA-256 in `dist/fiper-brand-v2.3.0.zip.sha256` and in `FIPER-BRAND-V2-3-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.3.0.pdf`, 37 pages: new K5 "Video production kit" (p. 29), K4 video table (closing without the risk line, K5 pointer), M (environment prompt v2.3 verbatim), CEO page Q4 row, governance + Funds pin v2.3.0; LAYOUT PASS, PDF fonts PASS, metadata v2.3.0 |
| Gates (build repo) | verify-tokens PASS (473 tokens) · verify-identity brand PASS incl. new LICENCE-WORDING (fires on a test file; the verbatim e-mail regulatory block is out of scope) · check-risk-line ALL PASS (examples included) · check-audio-loudness PASS both samples (−14.1 LUFS, TP −3.4) · check-video-delivery ALL PASS (lint, safe area per 0.5 s, side risk line 100 % of frames, not on the closing, approved logos, no red text, corner hidden on the closing, loudness, boards) · verify-logo-pack ALL PASS · check-rendered-contrast dark + light exit 0 · check-templates / components / mockups / emails / a11y / fonts PASS · check-docs PASS · check-manifest PASS (168 paths) |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` ALL PASS (tokens regenerate byte-identical from `brand/scripts/`) |
| Visual self-check | frame boards of both films every 0.5 s (scene grouping fixed so no scene bleeds into the next; the 9:16 card overflow and the 16:9 sub-line over the device fixed and re-rendered); full-resolution frames at 4.5 s; manual page K5 |
| Memory rules | strictly sequential, one Playwright lane closed after each round, heavy steps under `nice -n 15 ionice -c3`; film render peak RSS 0.9 GB (414 frames × 2); Chromium processes of another session (fpt-platform) seen and left untouched |
| Open items | `OPEN-ITEMS.md` § F: 1 risk line in film CLOSED (CEO 31 Oct 2026), 2 entity line DECIDED (product mapping PENDING), 3 Arabic generated VO prohibited, 4 corner 96/64, 5 HyperFrames CLI not vendored (page contract + own renderer) |

# Delivery record — v2.2.0 (CEO decisions 30 Oct 2026: items 1–5 closed, 17 production answers, 3 additions) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.2.0** (branch `v2.2` → `main`, git tag `v2.2.0`) |
| Decisions applied (APPROVED, source "CEO decision 30 Oct 2026") | 1 Barlow Condensed + Inter · 2 UI red #DC2626 (logo tile keeps its gradient) · 3 light theme for apps APPROVED as optional, dark default — complete `semantic.color.light.*` set, components + preview + mockups 01/03 light renders, gates on both themes · 4 loss/danger = red `#F05252` / `#B91C1C`, profit green; red-roles rule rewritten (finance semantics exempt; a red figure is never a button); coral deprecated everywhere · 5 Lucide approved, swappable sprite; Q1–Q17 answered (`references/composition-rules.md` § 11); additions: fixed risk line on every visual output (`component.risk-line.*`, gate `check-risk-line`), entity texts (`regulatory-matrix.md` § 0, selectable legal blocks), Hub dark/light toggle noted for its next round |
| Package | `fiper-brand-v2.2.0.zip` — SHA-256 in `dist/fiper-brand-v2.2.0.zip.sha256` and in `FIPER-BRAND-V2-2-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.2.0.pdf`, 36 pages: J (light theme for apps), C2/C4 (finance red, candles), F2 (margins incl. story 96, red roles), K2/K3/K4 (risk line, video table 96/64, stacked closing card, e-mail 160 × 56), M (ads appendix: no crimson, risk line, asset types, QR, grade), DEC (decisions closed + Q table) |
| Gates (build repo) | verify-tokens PASS (453 tokens; coral hex refused as DEPRECATED) · verify-identity brand PASS incl. new RED-FIGURE / LOSS-IN-BRAND-RED / RISK-WORDING · check-risk-line ALL PASS (templates, mockups 05–08, video, legal, DOCX/PPTX XML, social exports) · contrast.mjs: loss 5.76 bg / 5.36 panel / 5.54 coal, light 5.9 paper / 6.47 white, no text pair below 4.5 · rendered contrast dark 11/11 PASS and light 5/5 PASS (preview + mockups 01–04; transitions disabled before measuring) · LAYOUT PASS (OVERFLOW/INTERSECT none) · PDF fonts brand-only · units 477/0 · check-emails · check-templates · check-mockups (incl. light renders) · check-components · verify-logo-pack ALL PASS · check-docs · check-manifest 152/152 |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` ALL PASS; PDF fonts PASS on the shipped PDF |
| Visual self-check | manual pages J / DEC / M / C2 viewed; light mockups 01/03; stacked video closing card with the risk line; social exports and the confirmation e-mail (risk line + entity text) |
| Open items | `OPEN-ITEMS.md`: § A items 1–5 CLOSED; regulatory mapping + licence lines PENDING (CEO to supply); missing assets unchanged (+#12 note); untested items unchanged |

# Delivery record — v2.1.0 (CEO decision 30 Oct 2026: wordmark variant A approved and generalised) — earlier records below stay as history

| Item | Value |
|---|---|
| Version / tag | **v2.1.0** (git tag `v2.1.0` on the final build commit of branch `logo-v2.1`, merged into `main`); v2.0.1 and v2.1.0-rc1 artefacts archived (`dist/archive/`) |
| What changed | the logo only: `brand/logos/{svg,png,favicon,app-icon,og,social,email,print}` = the approved A set (440 files, generated), v2.0 fiper.io files superseded in `brand/logos/_source-fiper.io/`; every template (e-mail, document, presentation PPTX, DOCX, social SVG + PNG exports, video source + WebM), components preview, mockups + renders, review apps, manual chapter B, skill, README, USAGE, MISSING-ASSETS (#1/#2/#3 AVAILABLE — APPROVED), OPEN-ITEMS (C-12 closed), value-sources § 4, tokens (`component.logo.master-file` APPROVED, `component.logo.wordmark-v2-0` DEPRECATED) |
| Package | `fiper-brand-v2.1.0.zip` — SHA-256 in `dist/fiper-brand-v2.1.0.zip.sha256` and in `FIPER-LOGO-V2-1-FINAL-REPORT.md` (outside the zip by necessity) |
| Consumer hand-off | `fiper-logo-v2.1.0.zip` — 8.1 MB, 381 entries, SHA-256 `c8d9b5bb3cb76373381a908e6c04de5a4215911d89a1dc1a27415f376fee6c33` (`scripts/package-logo.mjs`) |
| Manual | `Fiper-Brand-Manual-v2.1.0.pdf` (zip root and `dist/`), 36 pages, metadata v2.1.0 |
| Gates (build repo) | verify-tokens PASS · verify-identity brand PASS incl. the new rule **OLD-LOGO-FILE** (no superseded logo file referenced anywhere) · verify-logo-pack ALL PASS (`dist/checks/logo-pack.md`) · LAYOUT GATE PASS (OVERFLOW none, INTERSECT none) · PDF fonts = brand only · units HTML 455/0, PDF 0 broken · rendered contrast manual + components preview + 8 mockups: 0 below threshold · check-docs PASS · check-manifest 152/152 · check-emails PASS · check-templates PASS · check-components PASS · check-mockups PASS |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` ALL PASS (required files incl. the approved logo set and the superseded-sources README, fonts, 15 pages, build-tokens / verify-tokens / contrast / verify-identity from the copy); PDF fonts PASS on the shipped PDF; `verify-skill-wired` 4 FAIL by design (consumer-repo check) |
| Visual self-check | regenerated social export, mockup render and video poster inspected: dotted i everywhere; manual pages 5–8 inspected |
| Open items | `brand/OPEN-ITEMS.md` — C-12 DECIDED; still open: Arabic lockup (#4), CMYK press proof (#7 PROPOSED values), decision items 1–5, regulatory rows, untested items |

# Delivery record — v2.1.0-rc1 (logo refinement candidates, 30 Oct 2026) — v2.0.1 record below stays frozen

| Item | Value |
|---|---|
| Version / tag | **v2.1.0-rc1** (branch `logo-v2.1`, git tag `v2.1.0-rc1`); v2.0.1 tag and zip untouched |
| What changed | logo refinement only: `logos/v2.1/A|B|C/` packs (440 files each), `logos/FORENSICS.md`, `logos/LOGO-OPTIONS.md`, `logos/USAGE.md`, manual chapter B (p. 5–8) rebuilt, token `primitive.color.logo-wordmark-dark`, version strings; rules, templates, components, mockups unchanged |
| Package | `fiper-brand-v2.1.0-rc1.zip` — SHA-256 in `dist/fiper-brand-v2.1.0-rc1.zip.sha256` and in `FIPER-LOGO-V2-1-REPORT.md` |
| Manual | `Fiper-Brand-Manual-v2.1.0-rc1.pdf` (zip root and `dist/`), 36 pages, PDF metadata set to v2.1.0-rc1 |
| Gates (build repo) | logo pack gate `scripts/verify-logo-pack.mjs` ALL PASS × 3 variants (`dist/checks/logo-pack.md`); verify-tokens PASS; verify-identity brand PASS; LAYOUT GATE PASS (OVERFLOW none, INTERSECT none); PDF fonts = brand only; units HTML 451/0 · PDF 0 broken; rendered contrast manual 0 below threshold; check-docs PASS; check-manifest 146/146 |
| Gates (clean unzipped copy outside the repo) | `dist/unzipped-verification.md` ALL PASS (53 required files incl. v2.1 pack samples, fonts, pages, build-tokens / verify-tokens / contrast / verify-identity from the copy); PDF fonts PASS on the shipped PDF; `verify-skill-wired` 4 FAIL by design (consumer-repo check, this is the source) |
| Visual self-check | 14 px / 16 px renders of every variant inspected (`dist/logo-options/readability-14px.png`): current reads "F1per", A and C read "Fiper", B reads "Fıper" |
| Open items | `brand/OPEN-ITEMS.md` — new row C-12 **logo variant pick (REQUIRED DECISION, CEO)**; rows C-1/2/3 become AVAILABLE on the pick; C-7 CMYK PROPOSED values documented; everything else unchanged |

# Delivery record — v2.0.1 (closed build, 29 Oct 2026)

| Item | Value |
|---|---|
| Version / tag | **v2.0.1** (git tag `v2.0.1` on the final build commit — `git rev-parse v2.0.1`; the SHA is also printed in `FIPER-BRAND-CLOSE-REPORT.md`) |
| Package | `fiper-brand-v2.0.1.zip` — SHA-256 in `dist/fiper-brand-v2.0.1.zip.sha256` and in `FIPER-BRAND-CLOSE-REPORT.md` (outside the zip by necessity: the zip cannot contain its own hash) |
| Manual | `Fiper-Brand-Manual-v2.0.1.pdf` (zip root and `dist/`), PDF metadata title/subject/keywords set to v2.0.1 |
| Rendered-contrast check (visible result) | `dist/checks/contrast/rendered.json` — produced by `node scripts/check-rendered-contrast.mjs`; summary: **manual 36 pages, every visible text node (0 below threshold; 199 before the v2.0.1 round)**; components preview (0); mockups 01, 02, 03, 04, 06, 08, 09 (0); e-mail statement, report, presentation templates (0). Threshold 4.5:1, 3:1 for ≥ 24 px or ≥ 18.67 px bold. **Exceptions (skipped by design):** disabled controls (`.disabled`, `[disabled]`), elements marked `data-contrast-exempt` — the intentionally wrong anti-AI-tells example (manual p.31) and the loading-state label whose text is hidden behind dots; SVG text (charts) is covered by the token contrast table instead |
| Other closing gates | layout gate (OVERFLOW/INTERSECT none), PDF fonts = brand only (`scripts/check-pdf-fonts.py`), numeric units (`scripts/check-units.mjs`: HTML + PDF), e-mail gates, verify-identity on brand/ incl. integration files, docs + manifest, unzipped-copy verification (`dist/unzipped-verification.md`) |
| Open items | ONE register: `brand/OPEN-ITEMS.md` — decision items 1–5, regulatory rows, missing assets, untested/not provided. Acceptance changes none of them and does not approve light mode for apps |

# QA addendum — v2.0.1 (29 Oct 2026, limited correction round)

| # | CEO item | Change | Evidence |
|---|---|---|---|
| 1 | Example contrast on the paper manual (p.10 rows, p.22 motion map, p.23 icons; dark gain/loss values) | Every dark-UI example sits in a complete charcoal panel (`.sheet`, `.dark`, buttons, icons); paper-ground state colours raised so chip text passes on its own wash (light success #146A45, danger #A33D24, info #275E94, warning #7A520A — tokens.json, tokens.css, manual); labels use the paper label colour; TOC/eyebrow red = #B91C1C on paper | `node scripts/check-rendered-contrast.mjs manual/index.html` → 0 text styles below threshold (was 199 before the round); mockups 01–04/06/09 + components preview → 0; `dist/pages/page-10/22/23.png` |
| 2 | Rule text vs approved direction (p.9 two roles, p.13 "// THE ECOSYSTEM", p.20 CORE mono .2em) | Three roles of red everywhere; no slash prefix instruction — fiper.io treatments moved into labelled HISTORICAL NOTE blocks (manual p.13, README, references, SPEC, skill, checklists); CORE badge = Inter 600 uppercase .06em on red | commit 37a1083 (docs), manual p.9/13/20; `node scripts/check-docs.mjs` slash-instruction lines 0 |
| 3 | Install version mismatch (pin v2.0.0 vs tag v1.1.0) | One pinned version everywhere: fiper-brand v2.0.1 · tag v2.0.1 · fiper-brand-v2.0.1.zip; package-internal commands (A, node only) separated from build-repo commands (B, not shipped) | `brand/README.md` § install, SKILL.md, claude-md-paragraph.md, application note, manifest |
| 4 | Closing check must cover the visible result | New gate `scripts/check-rendered-contrast.mjs` (computed text colour vs effective composited background of every visible text node, 4.5 / 3 large, exempt: disabled + intentionally-wrong examples) added to the closing gates; all 36 pages re-rendered and viewed; package verified from a clean unzipped copy | `dist/checks/contrast/rendered.json`, `dist/pages/`, `dist/unzipped-verification.md` |

Gates re-run for v2.0.1: LAYOUT GATE PASS (OVERFLOW none, INTERSECT none) · PDF fonts = brand only · units HTML 454/0, PDF 70/0 · rendered contrast 0 failures (manual, preview, mockups) · mockups PASS · docs/manifest PASS · unzipped copy ALL PASS. Open decisions, missing assets and untested items: unchanged.

# QA report — Fiper Brand Identity System v2.0 (29 Oct 2026)

Evidence-based acceptance for the approved direction (v1.2.1 review) generalised to every deliverable. PASS / FAIL / PARTIAL / NOT TESTED / NOT PROVIDED with evidence paths (repo-relative; `dist/` lives in the GitHub repo and on the preview host, not in the zip).

## 0. CEO v2.0 round — items → result → evidence

| # | Item | Result | Evidence |
|---|---|---|---|
| 1 | Educational post readability (≥ 42 px on 1080 ≈ 14 px at 360) | PASS — body 44 px source → 14.67 px at 360; comparison layout, no numbering | `brand/templates/social/educational-1080x1350.svg`, `dist/checks/social/educational-360.png` |
| 2 | Charts match their data (ONE dataset, computed positions/axes/labels, benchmark consistent) | PASS — every reference chart (report, statement, portfolio, dashboard, slide, data post, manual C4/F2/G3) is generated by `brand/scripts/charts.mjs` from `brand/scripts/sample-data.mjs`; start/end labels at their true positions; benchmark = index rebased to the start value | `scripts/inject-charts.mjs`, `scripts/build-mockups.mjs`, `scripts/render-manual.mjs` (`injectCharts`), `data-chart="sample-portfolio-12m"` on every SVG |
| 3 | Number cohesion in Arabic text (amount+currency, sign+number+percent, dates unbreakable, bidi isolated) | PASS — `.fp-unit` / `.unit` / `.fp-num` nowrap + isolate; gate in HTML (every unit renders on one line), PDF (every reference unit's tokens found on one text line) and exports | `node scripts/check-units.mjs --ref=manual/index.html manual/index.html dist/Fiper-Brand-Manual-v2.0.pdf` → 454 units 0 broken · 71 reference units 0 missing; templates: 4 mails + 4 documents + social wrappers PASS; mockups + preview 28/7/18/20/44/26/11 units 0 broken; `dist/checks/document/report.pdf` 18 units 0 broken |
| 4 | Direction generalised to manual, templates, package, application note, skill | PASS — manual = paper document with charcoal app examples (F1/F2 composition pages, approved-applications page); templates (mail, documents, PPTX/DOCX, social, video); components (`.fp-figure`, `.fp-group`, holding rows, plain labels); mockups; README/SKILL/references/checklists/application note | commits `cde2f16`, `dc21cb3`, `bdd5e1b`, lead commits; `brand/references/composition-rules.md`, `brand/skill/fiper-brand/references/composition.md`, `brand/fiper-funds-application-note.md` |
| 5 | Version unified to v2.0; v1.x ARCHIVED | PASS — file names `Fiper-Brand-Manual-v2.0.pdf`, `fiper-brand-v2.0.zip`; v1.x PDFs/zips in `dist/archive/v1.x/` with an ARCHIVED README; CHANGELOG marks v1.0–v1.2.1 as history; `/review/` kept live as the record of the approved direction | `dist/archive/`, `brand/CHANGELOG.md`, `brand/deliverables-manifest.md` |
| 6 | Package checks after unzipping into a clean folder; PDF pages and exports inspected | PASS — see § 1 and § 2 | `dist/unzipped-verification.md`, `dist/pages/page-01…36.png` |

## 1. Unzipped-copy verification (clean folder outside the build repo)

`node scripts/verify-unzipped.mjs dist/fiper-brand-v2.0.zip <clean dir>` → ALL PASS: 45 required files present; 17 woff2 + 4 OFL licence texts inside `brand/fonts/licenses/`; 15 pages (component preview, mockups 01/02/03/04/06/09 + board, 3 e-mails, 3 documents, video source) open from the copy with images, fonts and local refs resolving inside the package (e-mail bodies use system fallbacks by design); `build-tokens`, `verify-tokens`, `contrast` (creates `checks/contrast.json`) and `verify-identity brand` (css/html/svg/js/json) run from the copy and PASS; regenerated `tokens.css` and `tailwind.preset.js` byte-identical to the delivered files. Full table: `dist/unzipped-verification.md`.

## 2. Manual v2.0

| Check | Result | Evidence |
|---|---|---|
| 36 A4 pages (cap 36), AR + EN, paper document with charcoal only inside app examples | PASS | `dist/Fiper-Brand-Manual-v2.0.pdf` |
| Layout gate: OVERFLOW none · INTERSECT none | PASS | `node scripts/render-manual.mjs` → `LAYOUT GATE: PASS` |
| Fonts used inside the PDF = brand fonts only (36/36 pages) | PASS | `python3 scripts/check-pdf-fonts.py dist/Fiper-Brand-Manual-v2.0.pdf` |
| Every page rendered to PNG and viewed after generalisation | PASS — all 36 viewed (cover, contents, A–N, approved applications, mockups, decisions, Funds, sources) | `dist/pages/page-NN.png` |
| Units unbroken in the PDF text | PASS — 71 reference units, 0 missing | `scripts/check-units.mjs --ref=…` |
| Charts in the manual generated from the dataset (C4, F2, G3) | PASS | `data-chart` SVGs in `manual/index.html` |

## 3. Charts — one dataset, computed geometry

| Surface | Generated from `sample-data.mjs` | Axis/labels computed | Benchmark = description |
|---|---|---|---|
| Report inner page (`templates/document/report.html`) + `report.pdf` | yes | yes (nice ticks, months, start/end) | yes (rebased index, dashed) |
| Portfolio mockup 02 / review app 05 | yes (dark theme) | yes | yes |
| Presentation chart slide + PPTX chart image | yes | yes | yes |
| Statement mockup 06, dashboard 04, data post | yes | yes | yes |
| Manual C4, F2, G3 | yes | yes | yes |

Arithmetic: holdings 10,303.65 + cash 1,250.00 = 11,553.65 USD = last data point; month gain +303.75 USD = +2.70 % (asserted in `sample-data.mjs`).

## 4. Social readability

| Master | Body text @1080 | @360 | Result |
|---|---|---|---|
| educational-1080x1350 | 44 px | 14.67 px | PASS (comparison table, no numbering) |
| announcement-product-1080x1350 | headline 84 px, support 24 px (non-essential) | — | PASS (image-dominant) |
| data-1080x1080 | figure 150 px, labels 44 px | 14.67 px | PASS |
| corporate-1080x1920 | statement ≥ 44 px | ≥ 14.67 px | PASS |

## 5. Templates, components, mockups — gates

| Check | Result | Evidence |
|---|---|---|
| E-mail validity (html-validate 8) · raw URLs in visible text · regulatory block identical | PASS 0 errors · 0/0/0/0 · 4/4 | `node scripts/check-emails.mjs`, `dist/checks/email/*-360/390-*.png` |
| Documents rendered and viewed; `report.pdf` fonts = brand only | PASS | `dist/checks/document/*` |
| PPTX (1 master, 6 layouts, 5 slides) · DOCX ×3 structure | PASS structural · visual NOT TESTED | `dist/checks/editables/` |
| Social exports 100 % + educational at 360 | PASS | `brand/templates/social/exports/*.png`, `dist/checks/social/` |
| Video source + 2 WebM samples | PARTIAL (VP9 only, no NLE template) | `brand/templates/video/` |
| components.css 0 hex; preview 390 dark/light/LTR | PASS | `dist/checks/components/` |
| Mockups 01–09 AR + EN at 2×, no overflow / broken images / missing icons | PASS 17 renders | `dist/checks/mockups/*.png`, `board.png` |
| a11y: focus, names, 44 px targets, 320 + 200 % reflow, reduced motion | PASS (documented exempt pairs only) | `dist/checks/a11y/results.md` |
| Arabic text elements resolve to IBM Plex Sans Arabic | PASS 0 offenders | `dist/checks/fonts/arabic-elements.md` |
| verify-identity on brand/ incl. integration files | PASS | `node brand/scripts/verify-identity.mjs brand` |
| Docs tables/paths/vocabulary; manifest paths | PASS | `node scripts/check-docs.mjs`, `node scripts/check-manifest.mjs` |

## 6. Still NOT TESTED / NOT PROVIDED / awaiting decision (unchanged)

- Real mail clients (Gmail/Outlook/Apple Mail), Office rendering of PPTX/DOCX, commercial print (CMYK/bleed), screen readers/devices, Safari/Windows font rendering: NOT TESTED.
- NLE-native video template, H.264/MP4: NOT PROVIDED.
- Decision items 1–5 (incl. light mode for APPS), regulatory matrix (incl. legal scope per message type), missing official assets (mark-only, dark vector lockup, mono, Arabic lockup, app screenshots, Fipo, CMYK): documented, unchanged, not assumed approved.


# ARCHIVED history — QA report v1.1 / v1.2 Track B (29 Oct 2026)

Evidence-based acceptance. Every row is PASS, FAIL, PARTIAL, NOT TESTED or NOT PROVIDED with its evidence path (repo-relative; `dist/` is in the GitHub repo and on the preview host, not in the zip). v1.0 rows that changed are marked **v1.1**.

## 0. CEO review round v1.1 — item → change → file → evidence

| # | Item | Change made | Files | Evidence |
|---|---|---|---|---|
| 1 | Manual layout (page 11 overlap, mid-value breaks, cramped boxes) | Dark contrast table alone on p.11, light rows moved to p.24; numeric cells `nowrap` unless the table is `wrapnum`; hashes/paths wrap only at token boundaries; open layout (panels only for Rule / Don't), larger base type (9.5 pt), board split into two pages | `manual/manual.css`, `manual/index.src.html`, `scripts/render-manual.mjs` | render log `OVERFLOW: none`; `dist/pages/page-11.png`, `page-24.png`, `page-36.png` |
| 2 | Arabic font everywhere (FreeSerif on 28 pages) | Every Latin/mono family carries `'IBM Plex Sans Arabic'` as fallback; labels/headers no longer mono; unsupported glyphs (✕ ◔ ▣ emoji) replaced by × / Lucide icons / text; components + templates audited for Arabic inheritance | `manual/manual.css`, `brand/components/components.css`, `brand/templates/**`, `scripts/check-pdf-fonts.py`, `scripts/check-fonts.mjs` | **PDF fonts used: Plex Arabic / Plex Mono / Inter / Barlow only → PASS** (`python3 scripts/check-pdf-fonts.py`); `dist/checks/fonts/arabic-elements.md` 37 → 0 offenders; `dist/checks/fonts/results.md` |
| 3 | Anti-generic art direction (mono labels, letter-spaced caps, glow, repeated boxes) | Eyebrow = Inter 600 .75rem ls .06em `text.label` (// may be red); mono = numbers/code only; button glow removed (site glow kept as OBSERVED, not applied); compositions varied per mockup/social type; no decorative graphics | `brand/tokens.json` (eyebrow, shadow none), `components.css`, `mockups/*`, `templates/social/*`, `manual.css` | `verify-identity` MONO-ON-LABEL / LATIN-LETTER-SPACING / RED-GLOW = 0 on components, mockups, templates; renders viewed: `dist/checks/mockups/*.png`, `brand/templates/social/exports/*.png` |
| 4 | Icon system + real implementation | Lucide v0.468.0 (ISC) vendored (72 svg); `.fp-icon` 16/20/24, stroke 1.75/2/2 (+2.25 active), alignment/space rules; all placeholder squares / Unicode stand-ins replaced in preview, mockups and manual; no tiles by default | `brand/icons/lucide/*`, `brand/icons/ICONS.md`, `components.css` § icons, `mockups/*`, `manual/index.src.html` | `scripts/check-mockups.mjs` missing-icon check 0; manual pages 19–21, 23 |
| 5 | Modified logo versions | Recoloured SVG, cropped tile and their renders quarantined in `brand/logos/_source-fiper.io/_unapproved-proposals/` (referenced by nothing); official dark raster from `Fiper Logo 2 black.png`, stacked white lockup from `Fiper Logo white2.png` (it is NOT a mark — mark-only = MISSING ASSET in every format) | `brand/logos/README.md`, `brand/MISSING-ASSETS.md`, `brand/logos/png/*`, templates, manual pages 5–8 | `verify-identity` UNAPPROVED-LOGO = 0 across brand/; `grep -r DERIVED brand/templates brand/components brand/mockups` = 0 |
| 6 | Contrast rules | Thresholds corrected (≥ 18.67 px bold / ≥ 24 px regular); “lighter raises contrast” sentence fixed; `text.label` for all small labels (no red); `line.input` α .40 = 3.31 / 3.39 for field boundaries; states re-measured | `tokens.json`, `manual` p.11, `README`, `checklists/accessibility.md`, `contrast.mjs` | `manual/contrast.json`; `dist/checks/a11y/results.md` (states incl. both gradient stops, focus, error, boundaries) |
| 7 | Rule/example/check conflicts | Arabic ls 0 everywhere (no .02em); eyebrow mono exception removed; decision-flip rule: font/icon/display change ⇒ re-check components, mockups, templates, manual | `tokens.json`, `manual` p.14, 17, 31, 34, `README`, `SKILL.md` | `check-docs` PASS (0 old vocabulary); `verify-identity` ARABIC-LETTER-SPACING 0 |
| 8 | Financial semantics | Presentation stat and mockup 08: `+2.7 %` = gain semantics (▲ + «ربح» + success) never red; precision per data type (cash by minor unit, unit price, unit count, %); finance.loss ≠ state.danger; zero ≠ missing; SAMPLE chips | `templates/document/presentation-16x9.html`, PPTX STAT layout, `mockups/08`, manual p.15, 27, `glossary.md`, funds note | `dist/checks/mockups/08-ar.png`, `dist/checks/editables/*`, manual p.15 |
| 9 | Real assets + inspectable previews + social variety | Official card artwork (`sources/assets/fiper-physical-card.OFFICIAL.png`) and the site’s card poster used on p.18, 23 and in mockup 01 / social; app screens = MISSING ASSET (no official screenshot in inputs); 8 mockups standalone at `/mockups/` on the preview + board 2 per row; four social compositions | `manual` p.18, 23, 29–30, `brand/mockups/*`, `scripts/build-mockup-previews.mjs`, `templates/social/*.svg` | `dist/preview/mockups/index.html`; `dist/checks/mockups/board.png`; `templates/social/exports/*.png` |
| 10 | E-mail footer + proof wording | OTP footer visually secondary (text verbatim), “why you received this” line; per-message-type legal scope = REQUIRED DECISION rows 8–11; all “tested in dark-mode clients” wording replaced by “Chromium prefers-color-scheme emulation (browser preview)”; real clients NOT TESTED | `templates/email/*`, `templates/email/README.md`, `TEST-MATRIX.md`, `regulatory-matrix.md` § 5, manual p.25 | `dist/checks/email/*-360-{light,dark}.png`; e-mail gates below |
| 11 | Editable deliverables proven | Manifest rewritten with file, format, tool, status and a “preview ≠ deliverable” column; PPTX (6 layouts), DOCX ×3, social SVG sources + exports, video source + WebM samples present; NOT PROVIDED stated | `brand/deliverables-manifest.md`, `scripts/check-manifest.mjs` | `node scripts/check-manifest.mjs` → 101 paths present, 0 missing |
| 12 | Evidence round | This report, regenerated manual (36 pages viewed), previews, package, tag v1.1.0 | — | see § 1–9 |

## 1. Sources and tokens

| Check | Result | Evidence |
|---|---|---|
| fiper.io capture + diff against the local copy | PASS — CSS identical, 6 text hunks | `sources/fiper.io/index.html` (md5 7628659a…), `sources/local/diff-local-vs-prod.patch` |
| Official logo files hashed; modified copies quarantined (**v1.1**) | PASS | `brand/logos/README.md`, `brand/value-sources.md` |
| tokens.json references, statuses, no raw hex outside primitives | PASS | `node scripts/verify-tokens.mjs` → VERIFY PASS (372 tokens) |
| Generated tokens.css / tailwind preset | PASS | `node scripts/build-tokens.mjs` |
| Non-approved values, mono on labels, Latin tracking > .06em, red glow, unapproved logo refs (**v1.1 checks**) | PASS (0) on components, mockups, templates (1 report-only Unicode mark inside a social `<text>`) | `node scripts/verify-identity.mjs brand/components brand/mockups brand/templates` |

## 2. Colour and contrast

| Check | Result | Evidence |
|---|---|---|
| WCAG ratio for every text/ground pair | PASS with restrictions | `manual/contrast.json`; manual p.11 (dark) + p.24 (light) |
| Brand red as text | RESTRICTED — large text only (≥ 24 px regular / ≥ 18.67 px bold); never a small label (**v1.1**) | contrast.json |
| `#EDEAE6` on `#DC2626` | FAIL 4.03 — documented forbidden pair; `text.on-brand` = #FFFFFF 4.83 / 7.92 on the gradient end / 10.81 pressed | contrast.json; `dist/checks/a11y/results.md` |
| Field boundaries (**v1.1**) | PASS — `line.input` 3.31 on bg, 3.39 on panel; `line.strong` 2.78 hover-only | contrast.mjs, components.css |
| Component states (primary both stops, secondary, ghost, destructive, inputs, chips, Sharia badge, toast, gain/loss, tab active label) | PASS; `btn disabled` 3.18 (WCAG-exempt) | `dist/checks/a11y/results.md` |

## 3. Logo

| Check | Result | Evidence |
|---|---|---|
| SVG master viewBox, no rasters; renders 16–512 px viewed | PASS | `dist/logo-checks/*.png` |
| No modified logo referenced anywhere in brand/ (**v1.1**) | PASS | verify-identity UNAPPROVED-LOGO 0 |
| Missing variants recorded, none invented (**v1.1**: mark-only missing in every format) | PASS (recorded) | `brand/MISSING-ASSETS.md` |

## 4. Fonts

| Check | Result | Evidence |
|---|---|---|
| Complete official files, licences, no merging | PASS | `sources/licences/*`, `dist/checks/fonts/results.md` |
| Real weights / no synthetic bold / shaping / digits in Arabic runs | PASS | `dist/checks/fonts/results.md` |
| Fonts actually used inside the final PDF (**v1.1**) | PASS — brand fonts only on all 36 pages | `python3 scripts/check-pdf-fonts.py dist/Fiper-Brand-Manual-v1.1.pdf` |
| Arabic elements resolve to IBM Plex Sans Arabic in components/mockups (**v1.1**) | PASS — 0 offenders (was 37) | `dist/checks/fonts/arabic-elements.md` |
| Safari/iOS, Windows DirectWrite, print raster | NOT TESTED | — |

## 5. Components, mockups, accessibility

| Check | Result | Evidence |
|---|---|---|
| components.css: 0 hex literals, all vars defined, no glow, Lucide icons (**v1.1**) | PASS | verify-tokens (114 vars), check-components |
| preview.html 390 dark/light/LTR viewed | PASS | `dist/checks/components/*.png` |
| 8 mockups AR + EN, varied compositions, official assets, SAMPLE chips (**v1.1**) | PASS | `dist/checks/mockups/*.png`, `results.json`, `board.png` |
| Standalone inspectable pages (**v1.1**) | PASS | `dist/preview/mockups/index.html` (+ 9 pages) |
| Stress 390/360/320 (long AR headline, longest fund name, −1,234,567.89 USD, +12,345.67 %, missing, pending, zero) | PASS | `dist/checks/mockups/stress-*.png` |
| Keyboard focus visible; accessible names; targets ≥ 44 (effective hit box); 320 px + 200 % reflow; reduced motion | PASS (0 small targets on all 4 pages) | `dist/checks/a11y/results.md` |
| Real screen readers / devices | NOT TESTED | — |

## 6. Templates and editables

| Check | Result | Evidence |
|---|---|---|
| E-mail validity (html-validate 8) | PASS 0 errors (4 mails + 4 documents) | `brand/templates/.htmlvalidate.json`, `scripts/check-templates.mjs` |
| Raw URLs in visible mail text (href/src allowed) | PASS 0/0/0/0 | same |
| Regulatory block identical to fiper.io after tag-strip; verbatim, visually secondary (**v1.1**) | PASS 4/4 | `brand/templates/legal/regulatory-block.html` |
| 360 px light + Chromium `prefers-color-scheme: dark` emulation (browser preview only) | PASS | `dist/checks/email/*.png` |
| Gmail / Outlook / Apple Mail (web, desktop, iOS, Android; light + dark) | NOT TESTED | `brand/templates/email/TEST-MATRIX.md` |
| Legal scope per message type / entity per product | REQUIRED DECISION (rows 8–11) | `brand/regulatory-matrix.md` § 5 |
| Documents (report, invoice, letterhead, card, deck, signature) rendered and viewed; official dark PNG; fonts used in report.pdf | PASS | `dist/checks/document/*`, pypdf check in the templates run |
| PPTX: 1 master, 6 layouts (incl. STAT with gain placeholder), 5 slides, rtl/lang/typeface | PASS structural · visual NOT TESTED (no Office/LibreOffice) | `brand/templates/presentation/Fiper-Presentation-Template.pptx`, `dist/checks/editables/` |
| DOCX ×3 (letterhead, report, business card) | PASS structural · visual NOT TESTED | `brand/templates/document/*.docx` |
| Social: 4 content-type masters (announcement, educational, data, corporate) + link, editable `<text>`, exports viewed | PASS | `brand/templates/social/*.svg`, `exports/*.png` |
| Video: editable source (HTML/CSS/JSON, official lockup) + 2 WebM samples | PARTIAL — WebM/VP9 only (no H.264 encoder), no audio, no NLE native template (stated) | `brand/templates/video/README.md`, `samples/*.webm`, `dist/checks/editables/video-*.png` |
| Press-ready print | NOT PROVIDED — office print only; CMYK/Pantone, bleed, PDF/X = REQUIRED DECISION | `brand/templates/document/PRINT-SPEC.md` |
| Manifest paths present | PASS 101/101 | `node scripts/check-manifest.mjs` |

## 7. Manual and preview

| Check | Result | Evidence |
|---|---|---|
| 36 A4 pages (cap 36), AR primary + EN, rule/value/example/don't per page | PASS | `dist/Fiper-Brand-Manual-v1.1.pdf` |
| Overflow / overlap | PASS — `OVERFLOW: none` | render log |
| Fonts embedded and USED = brand fonts only (**v1.1**) | PASS | `scripts/check-pdf-fonts.py` |
| Every page rendered to PNG and viewed (**v1.1**: all 36 viewed after the restyle) | PASS | `dist/pages/page-01…36.png` |
| No placeholders / invented statistics; sample data marked | PASS | manual p.10, 15, 29–30 |
| Phone preview reflows at 390 (not a shrunk A4) | PASS | `dist/checks/preview-390-*.png`, preview URL in the report |

## 8. Docs and wiring

| Check | Result | Evidence |
|---|---|---|
| Markdown tables, referenced paths, vocabulary (**v1.1** docs) | PASS (24 docs) | `node scripts/check-docs.mjs` |
| verify-skill-wired on a consumer repo | NOT TESTED (no consumer repo modified by design) | `brand/scripts/verify-skill-wired.mjs` |

## 9. Remaining gaps / blockers

1. Decision items 1–5 still PROPOSED defaults (CEO has not confirmed); items 1 and 5 require a full re-check when flipped.
2. Regulatory scope: entity of record per product and legal footer per message type — REQUIRED DECISION rows 1–11 (`brand/regulatory-matrix.md`).
3. MISSING ASSETS: mark-only logo (any format), dark vector lockup, mono version, Arabic lockup, official app screenshots, Fipo character, CMYK/Pantone red.
4. NOT TESTED: real mail clients, real devices / screen readers, PPTX/DOCX visual rendering, Safari/Windows font rendering. NOT PROVIDED: press-ready print, NLE native video template, H.264/MP4 samples.
5. Lucide is vendored as SVG files (72); no icon font / React package — consumers import the SVGs.

Not final: the version is usable for limited work with the limits above; it is not declared rollout-ready while items 1–3 remain open.

## v1.2 — Track B (technical fixes to the proven v1.1 defects, 29 Oct 2026)

Scope of every PASS below: run on the build repo AND repeated from a clean unzipped copy of `dist/fiper-brand-v1.1.zip` in a folder outside the repo (`node brand/scripts/…` from the unzipped parent).

| Defect | Fix (source → output) | Evidence |
|---|---|---|
| (a) `tailwind.preset.js` carried red `boxShadow.primary/-hover` and `letterSpacing.eyebrow .28em / tag .2em`; integration files were excluded from `verify-identity` | `scripts/build-tokens.mjs` rewritten: every preset value derived from `tokens.json`; `semantic.shadow.primary/-hover`, `color.action.primary-shadow/-hover`, `font.letterSpacing.tag` flagged `fiper.observed-only` → emitted only as `--fp-observed-*` documentation variables in `tokens.css`, absent from the preset; deprecated primitives no longer emitted. `verify-identity.mjs` now scans `.js/.mjs/.cjs/.json` (incl. `tokens.css` + `tailwind.preset.js`), flags JS `letterSpacing` objects > .06em and any shadow-like `rgba(220,38,38…)` value; only `--fp-observed-*` lines are whitelisted | `node brand/scripts/verify-identity.mjs brand` → 113 files, `summary: {} → PASS`; preset: `boxShadow {primary:'none','primary-hover':'none',overlay,none}`, `letterSpacing {heading:'0.5px',eyebrow:'0.06em',arabic:'0'}` (load-tested) |
| (b) Manual p.15: type-scale table overlapped the currency/date table | D3 tables set to wrap (`wrapnum`), fluid clamp values shortened; `render-manual.mjs` adds an intra-page intersection check (boxes neither ancestor nor descendant must not overlap > 2 px) and exits 1 on overflow or intersections | render log: `OVERFLOW: none · INTERSECT: none · LAYOUT GATE: PASS`; `dist/pages/page-15.png` (also caught and fixed: p.13 table spill 8 px, p.16 phone overlap 10 px) |
| (c) mockup 01 referenced `../../sources/assets/…` (outside the ZIP) | canonical `brand/assets/fiper-physical-card.OFFICIAL.png` (+ README); mockup 01 → `../assets/…`; `build-mockup-previews.mjs` copies from `brand/assets`; social SVG keeps its sibling copy (identical file) | unzipped copy: `grep -rln 'sources/' brand` (html/svg/css/mjs) → none; mockup 01 local links all resolve (6/6) |
| (d) Font licences pointed outside the package | `brand/fonts/licenses/` with the four OFL 1.1 texts (copyright lines + reserved font names verified) and `README.md` mapping family → files → licence → RFN → source URL → modifications (TTF→WOFF2 only); `fonts.css` header and `fonts/README.md` point to it | files present in the unzipped copy |
| (e) Stale docs in the manual | p.13 caption → Inter 600 .06em / Arabic 0, mono = numbers only; p.16 elevation line → no button shadow (site glow observed-only), overlay only; p.33 + p.35 version refs → v1.1 / `fiper-brand-v1.1.zip`; p.36 status counts generated from the current `tokens.json` at render (`<!--STATUS_COUNTS-->`) | `dist/pages/page-13/16/33/35/36.png` |
| (f) `contrast.mjs` depended on `manual/contrast.json` and a hard-coded colour list | rewritten: reads `brand/tokens.json` (references resolved, rgba blended over the ground), 47 pairs by token path (on-brand vs red / gradient end / pressed; finance; states; boundaries; light), creates `./checks/contrast.json` (`CONTRAST_OUT` override), exit 1 below threshold; `render-manual.mjs` reads that file. Added `light.line-input` (α .55 → 4.16 / 4.26) because `light.line-strong` (2.28) cannot be a field boundary | unzipped copy: `node brand/scripts/contrast.mjs` → `47 pairs → checks/contrast.json · PASS` |
| Regeneration from the unzipped copy | `build-tokens` → `verify-tokens` PASS → `contrast` PASS → `verify-identity brand` PASS; regenerated `tokens.css` and `tailwind.preset.js` byte-identical to the delivered files (`cmp`) | this section; `PROGRESS.md` |
| PDF | fonts used = brand fonts only on 36 pages | `python3 scripts/check-pdf-fonts.py` → PASS |

Not covered here (lead / later): Track A review page; real mail clients, Office rendering, commercial print, missing official assets and regulatory decisions remain at their recorded limits.
