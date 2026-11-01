# Finance semantics — Fiper Brand v2.2.0

| State | Word AR / EN | Sign / icon | Token | Example |
|---|---|---|---|---|
| Gain | ربح / Gain | `▲` + `+` | `--fp-finance-gain` (`#2AB37A`; light `#187A50`) | `<span class="fp-delta fp-delta--gain"><bdi dir="ltr">+2.35 %</bdi> ربح</span>` |
| Loss | خسارة / Loss | `▼` + `−` U+2212 (never hyphen) | `--fp-finance-loss` (`#F05252` APPROVED — red by CEO decision 30 Oct 2026; light `#B91C1C`) — never the `--fp-brand-red` token; a red figure is never a button, never on a filled red ground | `<span class="fp-delta fp-delta--loss"><bdi dir="ltr">−0.80 %</bdi> خسارة</span>` |
| Neutral | بلا تغيير / Unchanged | none | `--fp-finance-neutral` (= muted) | `0.00` |
| Pending | قيد التسوية / Pending | clock icon (Lucide `clock`) | `--fp-finance-pending` (= warning) | `قيد التسوية · 16:00 بتوقيت دبي` |
| Settled | مُسوّى / Settled | check icon | `--fp-state-success` | `مُسوّى · 29 أكتوبر 2026` |
| Failed / rejected | مرفوض / Rejected | x-circle icon | `--fp-state-danger` | `مرفوض — السبب: رصيد غير كافٍ` |

Rules
1. Word + sign/icon + colour, always all three. Colour alone is a defect (WCAG 1.4.1 and the brand rule).
2. Precision per quantity, never a blanket rule: **cash** by the currency's minor unit (USD 2 decimals from integer cents; JPY 0, BHD/KWD 3; CAD/GBP listings in the registry convert per `docs/money.md`) · **unit price** cents → 2 · **unit count** micro-units → up to 4 decimals, trailing zeros trimmed · **percentage** basis points / tenths → 2. Format: `,` thousands, `.` decimal, Latin digits, `IBM Plex Mono` tabular lining; wrap in `.fp-num` (`dir="ltr"; unicode-bidi: isolate`). ` %` with a space in AR copy (consistent per product in EN).
3. Currency: ISO code next to every amount on every listing (`1,250.00 USD` in AR; `USD 1,250.00` in EN; `$` only in USD-only marketing). Never assume the currency from context; a table with one currency still shows the code in the column header and the total.
4. Sign placement: before the number inside the LTR span (`+2.35 %`, `−12.50 USD`); colour on the whole number, not on the sign only.
5. Candles / lines: up = gain token, down = loss token; one brand-red series per chart at most; benchmark dashed muted.
6. Big numbers (balance): **IBM Plex Mono 600** in text colour for account balances in apps (tabular, 28 px). never red for emphasis — the site's red Barlow Condensed hero stat is a historical observation, not for new use of a marketing section (≥ 30 px) — **never brand red to emphasise a financial figure**: a `+2.7 %` gain is ▲ + «ربح / Gain» + `--fp-finance-gain`, not red.
7. Dates/times beside money: human form with zone (`29 أكتوبر 2026، 14:05 بتوقيت دبي`); settlement windows name the zone (`16:00 بتوقيت دبي (GMT+4)`).
8. Demo / estimated figures: every preview or mockup number is documented (source) or carries the visible chip «بيانات تجريبية · SAMPLE»; no performance claims.


## Precision and zero vs missing (CEO addendum item 9)
- Minor units follow the currency (ISO 4217): USD 2 decimals from integer cents; never "two decimals for everything". Fund units ≤ 4 decimals from micro-units, trailing zeros trimmed; execution averages from micro-dollars ≤ 4 decimals; percentages 2 decimals from basis points.
- `0.00` / `0` is a value (neutral colour, no sign). Missing data is `—` with «لا بيانات» / "No data", never a zero.
- `--fp-finance-loss` = a value went down (market fact). `--fp-state-danger` = something failed (system). Same colour today, different tokens; a failed order is danger + word «فشل», a negative return is loss + word «خسارة».
- The Sharia badge reflects only a documented product state (`sharia.status` in the data) and names a certifier only when the data carries one; never imply a certificate or a certifying body that is not in the record.

v2.0: amount + currency and sign + number + percent are unbreakable units (`.fp-unit` / `<bdi class="num">`); every reference figure comes from `brand/scripts/sample-data.mjs` (holdings 10,303.65 + cash 1,250.00 = 11,553.65 USD; month gain +303.75 USD = +2.70 %) and every reference chart from `brand/scripts/charts.mjs`.
