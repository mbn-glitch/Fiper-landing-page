# Take selection — normalisation and the eligibility test (v2.3.2, CEO 31 Oct 2026: the Partners Studio change requests 8 and 9). Companion to `partner-edit.md` § 2; values in `tokens.json` → `video.person_edit.take_selection`

`partner-edit.md` § 2 defines how the engine chooses between repeated takes of one script line: an **eligibility gate** (the take's transcript must match the script line at ≥ 0.90 after normalisation, measured by word-level edit distance) and then a **composite score** (completeness, delivery, audio cleanliness, energy). This file fixes two things the gate must do **before** it measures anything.

## 1. Number normalisation (item 8) — `normalise_number_words: true`

Number **words**, **digits**, **compound numbers** and **plural / dual suffixes** are the same token for the eligibility ratio and for the `must_keep` check. A speaker who says «سبعة دولارات» has said the script's «7 دولار»; the take is not penalised for it, and the caption still shows **what was spoken** (`caption-text-source` = spoken-as-recorded, item 11).

| Spoken (transcript) | Script | Equal after normalisation | Note |
|---|---|---|---|
| سبعة دولارات | 7 دولار | yes | number word → digit; plural «دولارات» → the unit «دولار» |
| سبع دولارات · سبعة دولار | 7 دولار | yes | gender / agreement variants of the number word |
| مئة ألف · مية ألف | 100000 · 100,000 · 100 ألف | yes | compound number; «مية» is the dialect form of «مئة»; thousands separators and the word «ألف» are notation |
| خمسة وعشرين بالمئة · خمسة وعشرين في المية | 25 % · 25٪ | yes | compound number + percent in words |
| ألفين وستة وعشرين | 2026 | yes | a year said in words |
| ثلاث سنوات · ثلاثة سنين | 3 سنوات | yes | plural / dialect form of the unit |
| ريالين · دولارين | 2 ريال · 2 دولار | yes | the dual suffix «ـين» is the number 2 |
| اثنين ونص · اثنين ونصف | 2.5 | yes | fractions in words |
| seven dollars | 7 USD · $7 · 7 dollars | yes | number word → digit; currency word ↔ code ↔ symbol |
| a hundred thousand · one hundred thousand | 100,000 · 100000 · 100k | yes | compound number; «k» is notation |
| twenty-five percent · twenty five per cent | 25 % | yes | compound number + percent |
| two and a half years | 2.5 years | yes | fraction in words; plural unit |
| twenty twenty-six | 2026 | yes | a year said in words |
| سبعة دولارات | 70 دولار | **no** | a different value is a different claim — the take is not eligible for that line and the reviewer is told why |
| seventeen | 70 | **no** | never fuzzy-match digits: 17 ≠ 70 |

Rules of the normaliser:
1. Convert every number word, compound (units + tens + hundreds + thousands, joined by «و» / «and» / hyphens), fraction («نص / نصف / ربع / ثلث», «half / quarter / third») and ordinal-as-number to its digit value; Arabic-Indic digits to Latin digits.
2. Strip thousands separators, «ألف / مليون / thousand / million / k / m» scale words become multiplication, `%` / `٪` / «بالمئة / في المية / percent / per cent» become one percent token.
3. Reduce a unit noun to its singular (دولارات / دولارين / دولار → دولار; years / سنوات / سنين → سنة), and map currency word ↔ ISO code ↔ symbol (دولار / dollar / USD / $).
4. Then the existing orthographic normalisation of § 2 (alef forms, taa marbuta, hamza) and the word-level edit distance.
5. **Values are compared exactly after normalisation** — 7 ≠ 70, 2.5 ≠ 25. A mismatch on a number is a `must_keep` failure, never a near miss.

## 2. Adjacent cuts of one continuous take are merged first (item 9) — `merge_adjacent_cuts_of_one_take: true`

The transcript of a take often arrives as several segments (the ASR splits on breaths, a hesitation, a short pause ≤ 1.3 s). **Segments that are adjacent in the SAME source take, in order, with no other speech between them, are merged into one candidate before the eligibility ratio is computed.** A take is therefore judged as the speaker delivered it, not as the transcriber cut it.

This is the **official reading of the prohibition in § 2 «ممنوع تركيب نصف سطر من محاولة ونصفه من أخرى»**: what is forbidden is joining pieces of **different takes** (or non-adjacent pieces of one take) into a sentence the person never said continuously — that recombines their words without consent. Merging the adjacent pieces of **one continuous take** reconstructs what they did say and is required, not forbidden.

| Situation | Treatment |
|---|---|
| Take 3 of line 5 is transcribed as «قبل ما تضغط» + «اقرأ الرسوم» (one breath between them, same clip, consecutive) | merged → «قبل ما تضغط اقرأ الرسوم»; eligibility measured on the merged text |
| Take 3 segment A + take 4 segment B | **never merged**: two takes → the best complete take is chosen, or a reshoot is requested |
| Take 3 segment A, then an off-script aside, then segment B | not adjacent (other speech between) → each piece is judged alone; the line is probably not eligible → reshoot request |
| Take 3 segment A + segment B with a pause > 1.3 s inside | merged for eligibility (it is one take); the pause itself is judged by § 1 (internal pause ≤ 1.3 s → otherwise a cut on quiet inside the take, G4) |

Order of operations in the engine: **merge adjacent segments of one take → normalise numbers → orthographic normalisation → eligibility ratio ≥ 0.90 → composite score → tie rules of § 2.**

## 3. What the gate and the reviewer see
- `check-partner-edit.mjs` does not re-run ASR; it receives the engine's EDL. The engine logs, per line, the candidate takes with their merged text, the normalised script line and the ratio; the reviewer (`partner-edit.md` § 10-ب) checks the log beside the EDL (`ACCEPTANCE.md` item 20).
- A number that the speaker said differently from the script (7 ≠ 70) is a critical finding, never auto-corrected in the caption (`claims.md` 1, `partner-edit.md` § 6.8).
- The caption shows the spoken form («سبعة دولارات» stays «سبعة دولارات» if that is what was said), one group ≤ 26 characters (`video-rules.md`).
