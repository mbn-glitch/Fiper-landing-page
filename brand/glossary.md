# Glossary AR – EN — product names, buttons, states, financial terms, taglines

Status: **OBSERVED** = verbatim from the fiper.io i18n block (`sources/fiper.io/index.html`, captured 2026-10-29; key cited) · **APPROVED** = standing decision (task file) · **PROPOSED** = wording this system recommends where no source exists (the Fiper Funds repo's own Arabic strings are noted where found; they are that repo's wording, not a brand decision). Arabic brand name is always **فايبر** (APPROVED).

## 1. Brand and product names
| Arabic | English | Key / source | Status |
|---|---|---|---|
| فايبر | Fiper | task file (brand name) | APPROVED |
| فايبر جلوبال | Fiper Global | `p1.h3`, `ft.p1` | OBSERVED |
| Fiper Global (داخل سطر مخاطر الشريك وكابشن الشريك، بالحروف اللاتينية) | Fiper Global — the short entity form on partner-tier surfaces only | CEO decision evening 31 Oct 2026 (v2.3.3, G-Q1): «Fiper Global» as written, not «Fiper Global MAU»; with «رقم السجل التجاري / Company registration number GB23201759»; official surfaces keep the verbatim entity texts (`regulatory-matrix.md` § 0) | APPROVED (partner tier) — to be shown to legal within Q30 |
| بطاقة فايبر | Fiper Card | `p2.h3`, `ft.p2`, `nav.card` (البطاقة / Card) | OBSERVED |
| FPT — فايبر برو تريدرز | FPT — Fiper Pro Traders | `p3.h3`, `ft.p3` (out of scope: own identity) | OBSERVED |
| فايبر إيدج | FIPER EDGE | `p4.h3` | OBSERVED |
| فايبر ETF | Fiper ETF | `p5.h3`, `fnd.etf.h3`, `ft.p4` | OBSERVED |
| SPUS من فايبر | SPUS by Fiper | `p6.h3`, `fnd.spus.h3` — the endorsement form | OBSERVED |
| نسخ الصفقات | Copy Trading | `nav.copy` | OBSERVED |
| المنصة | Platform | `nav.platform` | OBSERVED |
| الصناديق | Funds | `nav.funds` | OBSERVED |
| المنتجات | Products | `nav.products` | OBSERVED |
| صناديق فايبر | Fiper Funds | task file; fiper-funds `README.md` title «منصة صناديق فايبر» | PROPOSED (name given in the task file; Arabic form follows the repo) |
| فايبر تيرمينال | Fiper Terminal | task file | PROPOSED (Arabic transliteration) |
| فايبر هب · فيبو | Fiper Hub · Fipo | task file | PROPOSED (Arabic transliteration) |
| أكاديمية فايبر | Fiper Academy | task file | PROPOSED |
| برنامج شركاء فايبر | Fiper Partner Program | task file | PROPOSED |
| منطقة العميل | Client area (crm.fiper.me) | task file | PROPOSED |
| مركز المساعدة | Help Center | `ft.help` | OBSERVED |

## 2. Buttons and calls to action
| Arabic | English | Key | Status |
|---|---|---|---|
| افتح حسابك | Open Account | `nav.cta` | OBSERVED |
| افتح حسابك الآن | Open Account | `fin.cta1` (EN identical to nav.cta) | OBSERVED |
| تسجيل الدخول | Sign In | `nav.signin` | OBSERVED |
| استكشف المنظومة | — (EN: `hero.cta2`) | `hero.cta2` | OBSERVED |
| جرّب المنصة | Try the Platform | `plat.cta` | OBSERVED |
| ابدأ النسخ | Start Copying | `copy.cta` | OBSERVED |
| اطلب بطاقتك | Get Your Card | `card.cta1` | OBSERVED |
| موقع البطاقة | Card Website | `card.cta2` | OBSERVED |
| ابدأ التقييم | Start the Evaluation | `fpt.cta` | OBSERVED |
| كلّمنا | Talk to Us | `fin.cta2` | OBSERVED |
| تأكيد الطلب | Confirm order | — | PROPOSED |
| إلغاء | Cancel | — | PROPOSED |
| حفظ | Save | — | PROPOSED |
| إعادة المحاولة | Retry | — | PROPOSED |
| عرض الطلب | View order | — | PROPOSED |
| تحميل الكشف | Download statement | — | PROPOSED |
| استثمر الآن | Invest now | — | PROPOSED |
| تحويل | Transfer | — | PROPOSED |
| حذف الحساب | Delete account (destructive) | — | PROPOSED |

## 3. States (UI and finance)
| Arabic | English | Token | Status |
|---|---|---|---|
| قيد التسوية | Pending settlement | `finance.pending` + clock icon | PROPOSED |
| معلّق | Pending | `state.warning` — fiper-funds uses «الأوامر المعلّقة» (`activity.ts`) | PROPOSED |
| مسوّى | Settled | `state.success` + check | PROPOSED |
| منفَّذ | Executed | `state.success` — fiper-funds: «الكمية المنفَّذة (وحدات)» | PROPOSED |
| فشل | Failed | `state.danger` + ✕ + what to do | PROPOSED |
| مرفوض | Rejected | `state.danger` | PROPOSED |
| متوافق مع الشريعة | Sharia-compliant | `component.chip.sharia` (success) — reflects `sharia.status = "compliant"` in the registry only | PROPOSED |
| غير متوافق | Non-compliant | muted outline chip (never red) | PROPOSED |
| جارٍ التوثيق | Documenting (not yet verified) | `state.warning` — registry `_meta`: «null = جارٍ التوثيق» | OBSERVED (fiper-funds registry wording) |
| قيد المراجعة | Under review | `state.warning` | PROPOSED |
| لا بيانات | No data | `finance.neutral` + «—» (distinct from 0.00) | PROPOSED |
| بلا تغيّر | Unchanged | `finance.neutral`, `0.00 %` | PROPOSED |
| ربح | Gain | `finance.gain` + `+` | PROPOSED |
| خسارة | Loss | `finance.loss` + `−` (U+2212) | PROPOSED |
| نسخة تجريبية — أموال افتراضية | Demo — virtual money | warning wash banner — fiper-funds `README.md` wording | OBSERVED (repo) |
| بيانات تجريبية | Sample data | caption on every mockup / preview with invented figures | PROPOSED |

## 4. Financial terms
| Arabic | English | Note | Status |
|---|---|---|---|
| وحدة / وحدات | unit / units | fund units; micro-units in storage (`docs/money.md § 1`) | OBSERVED (repo) |
| سعر الوحدة | unit price | cents in storage | PROPOSED |
| صافي قيمة الأصول | NAV (net asset value) | per unit, with currency code | PROPOSED |
| تسوية T+2 | T+2 settlement | human date always shown next to it | PROPOSED |
| نافذة التسوية 16:00 بتوقيت دبي | settlement window 16:00 Dubai | fiper-funds `README.md` | OBSERVED (repo) |
| التطهير | purification | fiper-funds: «رصيد التطهير», «نسبة التطهير» (bps) | OBSERVED (repo) |
| التوزيعات | distributions | fiper-funds: «التوزيعات المعلنة من المزوّد» | OBSERVED (repo) |
| الصافي · صافي الشراء · صافي البيع | net · net buy · net sell | fiper-funds `finance` | OBSERVED (repo) |
| ورقة التسوية | settlement sheet | fiper-funds staff dashboard | OBSERVED (repo) |
| أصغر وحدة للعملة | minor unit | per ISO 4217 per currency: USD 2, JPY 0, BHD/KWD 3 — cash precision follows it, never a blanket 2 decimals; unit price 2 (cents), unit count ≤ 4 trimmed (micro-units), percentage 2 (bps) | PROPOSED |
| الفارق السعري | spread | — | PROPOSED |
| أقصى تراجع | maximum drawdown | display statistic in bps (`docs/money.md § 4`) | OBSERVED (repo) |
| نسبة المصاريف | expense ratio | registry `expenseRatioBps` (45 = 0.45 %) | OBSERVED (repo) |
| الرسوم | fees | always with code | PROPOSED |
| الرصيد المتاح · المحجوز | available · reserved balance | ledger accounts `cash`, `cash_reserved` | OBSERVED (repo) |
| كشف الحساب | account statement | — | PROPOSED |
| المحفظة | portfolio | — | PROPOSED |
| النشاط | activity | fiper-funds screen `activity` | OBSERVED (repo) |

| بيانات تجريبية | SAMPLE | chip on every preview / mockup figure that is not documented; no performance claims | PROPOSED |
| ربح / خسارة (قيمة) vs فشل (نظام) | loss (value fact) vs failure (system error) | `--fp-finance-loss` vs `--fp-state-danger` — same colour, never swapped | PROPOSED |

## 5. Taglines (verbatim; use as given, never paraphrase)
| Arabic | English | Key | Status |
|---|---|---|---|
| علامة مرخصة واحدة للتداول والتمويل والإنفاق والاستثمار — تحت سقف واحد. | One licensed brand for trading, funding, spending, and investing — all under one roof. | `hero.sub` | OBSERVED |
| منظومة مالية مرخصة: تداول وتمويل وإنفاق واستثمار — تحت سقف واحد. | A licensed financial ecosystem: trade, fund, spend, and invest — under one roof. | `ft.desc` — the brand line on blank templates and social | OBSERVED |
| علامة واحدة. منظومة واحدة. | One Brand. One Ecosystem. | `eco.h2` | OBSERVED |
| ستة منتجات. رؤية واحدة. | Six Products. One Vision. | `prod.h2` | OBSERVED |
| الثقة تُبنى في التفاصيل | Trust Is Built in the Details | `tr.h2` | OBSERVED |
| استثمار يُدار بشفافية | Managed Investing, Transparently | `fnd.h2` | OBSERVED |
| الخطوة لك | THE MOVE IS YOURS | `fin.h2` | OBSERVED |
| تداول برأس مالنا. | Trade Our Capital. | `fpt.h2` (FPT, out of scope) | OBSERVED |
| هذه غرفة عملياتك | This Is Your Command Center | `plat.h2` | OBSERVED |
| انسخ المُثبَت. لا تخمّن. | Copy the Proven. Skip the Guesswork. | `copy.h2` | OBSERVED |
| تداوَل · تموَّل · أنفِق · استثمِر | Trade · Fund · Spend · Invest | `eco.trade/fund/spend/invest` | OBSERVED |
| مرخصة وخاضعة للرقابة | Licensed & Regulated | `tr.1b` | OBSERVED |
| استثمار متوافق مع الشريعة | Sharia-Compliant Investing | `tr.5b` | OBSERVED |
| حساب واحد لكل شيء | One Account for Everything | `tr.6b` | OBSERVED |

Risk line on every production surface (APPROVED, CEO decision 30 Oct 2026, Q4 — the ONE fixed wording, placed ON the image small and muted inside the bottom safe area, in the caption, and in film as a small persistent side line for the whole film, first frame to last, in both tiers — there is no closing card since v2.3.1 (CEO 31 Oct 2026); any other risk wording on a template fails `verify-identity` RISK-WORDING): **«الاستثمار ينطوي على مخاطر» / "Investing involves risk"** (`component.social.risk-line`, `component.video.risk-line`).

Legal risk / disclaimer lines (verbatim, legal pages, mail footers and regulatory blocks only — never retyped, never on an image): `hero.risk` «ينطوي تداول عقود الفروقات على مخاطر خسارة كبيرة.» / "Trading CFDs involves significant risk of loss." · `copy.dis` «الأداء السابق لا يضمن النتائج المستقبلية.» · `fnd.dis` «الأداء التاريخي لا يضمن النتائج المستقبلية. المنتجات الاستثمارية تنطوي على مخاطر.» / "Historical performance does not guarantee future results. Investment products carry risk." — see `regulatory-matrix.md` for where each may appear. No new tagline is approved; anything else is PROPOSED and must be labelled.

## 6. E-mail lines (APPROVED, CEO decision 31 Oct 2026 — v2.3.2)
| Arabic | English | Use | Status |
|---|---|---|---|
| هذه الرسالة متاحة بالعربية | This e-mail is also available in English | the ONE equivalence line: an English mail carries the Arabic line, an Arabic mail carries the English line — the mail itself is written in the recipient's language; `component.email.equivalence-line-ar` / `-en` | APPROVED |
| رقم السجل التجاري | Company registration number | the only wording for an entity's number on any authored surface (2422384 Fiper Global UAE · GB23201759 Fiper Global MAU); never «رقم الترخيص» / "Licence No." / "License No." with any number | APPROVED |

## 7. Composition terms (v2.0, approved direction)
| Arabic | English | Meaning |
|---|---|---|
| قطب التركيب | composition pole | which element dominates a surface: صورة مهيمنة / عنوان مهيمن / رقم مهيمن (image- / headline- / number-dominant) |
| الأرضية الورقية | paper ground | `#F7F4F1` for documents, e-mails, educational and corporate posts, presentations — not an app light mode |
| أرضية الفحم | charcoal ground | `#0A0708` for apps, market screens and the card advertisement |
| النواة الثابتة | constant core | lockup top-start, Arabic headline, numeric column, rules, meta foot — identical on both grounds |
| هامش مشتق من الشعار | lockup-derived margin | margin = 2 × lockup height for the medium |
| وحدة رقمية غير قابلة للكسر | unbreakable numeric unit | amount + currency, sign + number + percent, date parts in `.fp-unit` |
| بطاقة مبرَّرة | justified card | a box that groups related information or bounds an action |
| بيانات تجريبية | SAMPLE data | figures from `brand/scripts/sample-data.mjs`, arithmetically consistent, never a claim |
