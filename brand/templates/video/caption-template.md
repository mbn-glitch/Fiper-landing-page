# Post caption template — video (v2.3.3). Official content: the entity line is never burnt into the video (CEO 31 Oct 2026, studio item 4) — it lives here. Partner content (tier = person): since v2.3.3 (CEO evening 31 Oct 2026, CR-A final form) the entity and its company registration number are ALSO inside the side risk line on the frames; the caption carries the same entity line — Arabic and English

Every published video carries this text in its description / caption. The caption follows the language of the video: an Arabic video takes the Arabic caption, an English video the English one; a bilingual official post may carry both blocks, Arabic first. The regulatory block of the product, when required (`regulatory-matrix.md`), goes to the end of an official caption — never on the image.

**Entity line wording — binding:** «**Company registration number**» / «**رقم السجل التجاري**» only (`glossary.md` § 6). **Never "License No." / "Licence No." / «ترخيص» with any number** — the studio request to treat «License No. GB23201759» as valid wording was refused by the CEO on 31 Oct 2026 (the number is right, the wording is not; re-confirmed in the evening: «رقم كيان موريشيوس ولا شيء إضافي غير رقم التسجيل والرقم حالياً»); `verify-identity` LICENCE-WORDING and REG-NUMBER-WORDING enforce it. GB23201759 is the correct Mauritius company registration number (the captured fiper.io typo G823201759 is wrong).

**No partnership disclosure on any surface (CR-B, CEO 31 Oct 2026):** no «بالشراكة مع فايبر», no «شراكة مدفوعة» tag, no «إعلان» / "paid partnership" / "#ad" — in the caption, on the image, in the lower third, in the description, at any imprint level. The Fiper mention in a partner post is the entity line below and, where the partner chose it, the partner's **self-description** (CR-C: «[المنصب] في فايبر», «مدير مكتب فايبر — [المدينة]», «فريق فايبر», «وكيل معتمد لشركة فايبر», «شريك استراتيجي لفايبر», «شريك فايبر الرسمي في [البلد]», «مزود استراتيجية في فايبر», «استراتيجيتي متاحة للنسخ في فايبر», «شريك محتوى مع فايبر», «بالتعاون مع فايبر», or the partner's own form — never a title implying a licence or a regulatory status the partner does not hold). Platform-side «paid partnership» toggles are outside this package and are not switched on for partner content.

## Official content (tier = official)

Official frames carry **no entity and no number** (studio item 4); the official side line is the bilingual fixed wording verbatim. The caption carries the entity. Default entity Fiper Global UAE (`component.video.entity-line`); the Mauritius alternative when the product maps to Fiper Global MAU (`component.video.entity-line-mau`). The entity → product mapping is still PENDING (`regulatory-matrix.md` § 0, Q30): UAE by default.

Arabic video:
```text
<الخلاصة بجملة واحدة — نص الفيديو نفسه أو امتداده>

fiper.me

الاستثمار ينطوي على مخاطر · Investing involves risk
Fiper Global UAE — Company registration number: 2422384
```

English video:
```text
<One-sentence takeaway — the film's own line or its extension>

fiper.me

Investing involves risk · الاستثمار ينطوي على مخاطر
Fiper Global UAE — Company registration number: 2422384
```

Mauritius entity (official content, when the product maps to Fiper Global MAU — same position, same wording rule):
```text
Fiper Global MAU — Company registration number: GB23201759
```

Rules: the risk line is the one fixed wording (`component.risk-line.text`; in an English caption the English half may lead); the entity line = «Company registration number» only, the verbatim entity texts of `regulatory-matrix.md` § 0; the link is `fiper.me` (one link, optional on a reel that has no destination); one CTA at most; no hashtag flood, no emoji.

## Person-led content (tier = person — partner / personal brand)

**v2.3.3 — CEO decisions of the evening of 31 Oct 2026 (G-Q1 · G-Q2 · G-Q3 answered by the CEO; they override the v2.3.2 closure):** the partner's frames carry the entity **inside the side risk line only** — «الاستثمار ينطوي على مخاطر — Fiper Global، رقم السجل التجاري GB23201759» on an Arabic reel, "Investing involves risk — Fiper Global, Company registration number GB23201759" on an English reel (`video.person_edit.risk_line.text_ar` / `text_en`; one language = the language of the content, never bilingual on partner content) — and the caption carries **the Mauritius entity with its company registration number only**: no UAE entity, no 2422384, no second entity, nothing else (`component.video.entity-line-person`). The entity name is **«Fiper Global»** as the CEO wrote it (not «Fiper Global MAU») — a CEO-approved exception for partner-tier surfaces (`regulatory-matrix.md` § 0), to be shown to legal within Q30 without blocking.

Arabic video:
```text
<الخلاصة بجملة واحدة بصوت الشريك>

<رابط اختياري — الوجهة التي اختارها الشريك في سكربته، إن وُجدت>

الاستثمار ينطوي على مخاطر
Fiper Global — رقم السجل التجاري GB23201759
```

English video:
```text
<One-sentence takeaway in the partner's own voice>

<optional link — the destination the partner chose in the script, if any>

Investing involves risk
Fiper Global — Company registration number GB23201759
```

Rules: no Fiper logo in the video (D-C); the caption is in the language of the video, like the side line; the entity line is exactly the one above — no UAE line, no «MAU», no licence wording; the Fiper mention beyond it is the partner's self-description (CR-C) if the partner chose one — never a disclosure (CR-B); the optional link is the one the partner's script names (type and placement per the Scripts Constitution — bio / description / pinned comment); no promises, no signals, no numbers outside the script's approved source (`claims.md`, `partner-edit.md` § 6.9).

## Where the values live
`component.risk-line.text` (official line) · `video.person_edit.risk_line.text_ar` / `text_en` / `language` / `entity_name` / `number_wording` (partner line) · `component.video.entity-line` (UAE, official caption) · `component.video.entity-line-mau` (MAU, official caption) · `component.video.entity-line-person` (partner caption) · `component.video.entity-line-placement` = caption (official) · `component.video.entity-line-placement-person` = inside-risk-line (partner) · `regulatory-matrix.md` § 0 (entity texts + the partner-tier exception) and § 3 (which block per product — REQUIRED DECISION rows).
