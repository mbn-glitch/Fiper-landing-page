# Fiper UI components — specification v2.0

Reference implementation: `components.css` v2.0 (prefix `.fp-`), live preview: `preview.html` (toggles: light PROPOSED — not approved for apps / AR-RTL ↔ EN-LTR). Reference applications: `../mockups/` (board.html + standalone pages), built from the same sample dataset by `scripts/build-mockups.mjs`.
Requires `fonts/fonts.css` → `tokens.css` → `components.css`. Every colour is a token; status of each token (official / derived / proposed) is in `tokens.json`.
Global rules (v2.0, approved direction): apps on the charcoal ground (light mode for apps is NOT approved — a separate decision); a screen has one dominant element — the figure that carries it (`.fp-figure`), a headline, or the official product image — never all three at equal weight; cards and boxes only where they group related information or bound an action (`.fp-group`, the chart frame, a card teaser with its one action) — everywhere else rules (`.fp-section`, `.fp-holding`) separate content; red has three roles — the logo tile, the primary action, the active state — and never emphasises a number; finance semantics are separate (gain green, loss coral, pending amber, neutral muted — always word + sign + colour); labels are plain (no slash prefix, no decorative numbering — numbers only where a sequence is real); supporting information stays readable (≥ 12 px on phones, ≥ 15 px body); margins on phones 20–28 px (lockup-derived); one primary action per screen; touch targets ≥ 44 px; logical CSS properties only; Arabic in IBM Plex Sans Arabic with letter-spacing 0; every number in IBM Plex Mono, Latin digits, `direction:ltr; unicode-bidi:isolate` (`.fp-num`); amount+currency, sign+number+percent and date parts are ONE unbreakable unit (`.fp-unit`: nowrap + bidi isolation) — tested by `scripts/check-units.mjs`; every financial state = word + sign + colour; brand red never for losses, never decorative.

---

## 1. Buttons `.fp-btn`
**Purpose** The single primary action of a screen, plus secondary / ghost / destructive companions.
**Anatomy** label (+ optional 16/20 px icon leading in reading direction) inside a pill.
**Tokens** `--fp-brand-red` → `--fp-brand-red-gradient-end` (120deg gradient, from fiper.io `.btn-red` — without its glow), `--fp-c-button-primary-shadow` (= none), `--fp-action-primary-pressed`, `--fp-action-focus-ring`, `--fp-action-disabled-bg/fg`, `--fp-line-ash`, `--fp-line-strong`, `--fp-state-danger(-wash)`, `--fp-radius-pill`, `--fp-space-btn-y/x`, `--fp-motion-duration-press/state`, `--fp-motion-press-scale`.
**Sizes** md: 44 px min height, padding 14 px / 32 px, label 0.92 rem 700 (official). sm: 36 px, 10 px / 22 px, 0.85 rem (official `.nav-cta`). icon-only: 44 × 44. block: 100 % width.

| Variant | Default | Hover (pointer only) | Focus | Active / pressed | Disabled | Loading |
|---|---|---|---|---|---|---|
| primary | red gradient, white label, **no shadow** (`--fp-c-button-primary-shadow: none`) | slightly deeper gradient end, no shadow | 2 px ember ring, offset 2 | scale .97, fill red-deep, no shadow | disabled-bg / disabled-fg, no shadow | label hidden, `···` mono pulse 1.2 s, pointer-events none |
| secondary | panel fill, ash border | border line-strong | ring | scale .97 | same | same, dots in text-primary |
| ghost | transparent, ash border | border line-strong | ring | scale .97 | same | same |
| danger `.fp-btn-danger` (outline; `.fp-btn--destructive` = alias) | transparent, **danger border + danger label + icon** — never filled | danger-wash fill | ring | danger-wash fill, scale .97 | same | same |
| danger text `.fp-btn-danger.fp-btn--text` | no border, danger label + icon | danger-wash fill | ring | same | same | same |
| danger solid `.fp-btn-danger-solid` — **inside the final confirmation dialog only** | danger fill, bg-coloured label | brightness .92 | ring | same | same | same |

**Content** Verb first, ≤ 3 words. AR / EN: «تأكيد الطلب / Confirm order», «افتح حسابك / Open your account», «إيداع / Deposit», «إلغاء / Cancel», «إغلاق الحساب / Close account». Never "OK", never "Submit", never a sentence.
**Accessibility** native `<button>`; icon-only buttons carry `aria-label`; loading sets `aria-busy="true"` and keeps the accessible name; disabled uses `disabled` (not only a class).
**Destructive actions (v2.3.4 — CEO decision 1 Nov 2026, recommendation B; invoices change request 3)** A destructive action — delete, cancel, void, reject — is **never a filled button**: it is `.fp-btn-danger` (outline) or `.fp-btn-danger.fp-btn--text` (text), in the danger colour, with an icon (`#i-x`, `#i-circle-x`, trash). A filled «Cancel» beside the primary reads as a second primary; this is a usage rule, not a colour change — danger `#F05252` / `#B91C1C` stands (CEO 30 Oct 2026). The **one exception**: the final confirmation dialog of the destructive action (`.fp-modal` / `.fp-sheet` / `<dialog>` / `role="dialog"`) may carry `.fp-btn-danger-solid` when the dialog holds no other primary action. Gate: `verify-identity` **DANGER-FILLED-OUTSIDE-DIALOG** refuses a filled danger button outside a dialog element (markup and CSS). Tokens: `component.button.destructive.default-style`, `fill-scope`.
**Do** one primary per screen, below the content it confirms. **Don't** two primaries, a red button for "delete" (use `.fp-btn-danger`), a filled danger button outside the confirmation dialog, a spinner, shadow on secondary buttons.

## 2. Inputs & forms `.fp-field`
**Anatomy** label (above, 0.85 rem 600, required mark in danger) → control → helper (0.75 rem muted) or error (danger, icon + one sentence).
**Tokens** `--fp-ground-coal` (field fill), `--fp-line-ash` / `--fp-line-strong`, `--fp-radius-input` (12 px, proposed), `--fp-action-focus-ring`, `--fp-state-danger`, `--fp-font-size-app-body` (15 px — Arabic needs ≥ 15 px and avoids iOS zoom).
**Sizes** min height 44 px; padding 12 px 14 px; textarea min 96 px; OTP box 44 × 52, mono 22 px 600, gap 8 px, always LTR.

| State | Border | Fill | Extra |
|---|---|---|---|
| default | ash | coal | placeholder muted |
| hover | line-strong | coal | |
| focus | line-strong | coal | ember ring 2 px offset 1 |
| invalid (`data-invalid="true"` + `aria-invalid`) | danger | coal | error line below, `aria-describedby` |
| disabled | ash | disabled-bg | text disabled-fg, cursor not-allowed |
| numeric (`.fp-input--num`) | — | — | mono, tabular, `direction:ltr`, affix (currency code) pinned right |

**Content** Label is a noun («المبلغ / Amount»), helper says what happens next («نرسل رمز التحقق إلى هذا البريد / We send the verification code here»), error says what is wrong + what to do (see table c).
**Accessibility** `<label for>` always; OTP boxes `inputmode="numeric"` + per-box `aria-label`; the error line is linked by `aria-describedby`; switches / checks are native inputs with visible focus.
**Do** currency code shown next to every amount field. **Don't** placeholder as label, red asterisk alone without the word "required" in helper for long forms, auto-advancing focus that skips the error.

## 3. Cards `.fp-card` · grouping card `.fp-group` · hero figure `.fp-figure` · rows `.fp-holding`
**When a card is used (v2.0)** A box is a statement that its contents belong together or that an action is bounded by it. Use `.fp-group` for: the facts of one order / one transaction (`.fp-kv` rows), a chart together with its title, period and range control (`.fp-chart`), a product teaser whose one action belongs to the image (card teaser), a set of state badges that describe one object. Do NOT box: the hero figure, section lists (holdings, funds, orders) — these use `.fp-section` headers and `.fp-holding` rows separated by rules; KPI strips on documents and dashboards use `.fp-figure--ruled` (heavy top rule, no box). Never nest groups; never a card as the default container.
**`.fp-group`** panel fill, 1 px ash border, radius card (16 px) or `--tight` (12 px); `.fp-group__title` (Inter/Plex Arabic 600 + muted reference) above a rule; rows inside are `.fp-kv`.
**`.fp-figure`** the number that carries the screen: `__label` (muted, font-ui), `__value` (IBM Plex Mono 600, tabular, LTR; sizes `--hero` 38 px / `--md` 28 px / `--sm` 20 px; `--ruled` adds the 2 px top rule for documents and dashboards) with `__unit` (Inter 600, small, muted — the currency code is a label, never part of the number face size), `__delta` (icon 16 px + word + `.fp-unit` + optional `__since`). One `--hero` per screen.
**`.fp-holding`** holding / fund row: title + sub-line (name · units) at the start, `__amt` (mono + `<i>USD</i>` code) and `__st` (word + icon + `.fp-unit` percent in the finance colour) at the end; `--total` carries a strong top rule. Rows, not cards.
**Tokens** `--fp-ground-panel`, `--fp-line-ash`, `--fp-radius-card` (16 px official), padding `--fp-space-card-y/x` (26 / 24 official; compact 16), hover border `--fp-line-brand` (official `.card:hover`), corner chip `.fp-badge--brand` at 18 / 20 px inset (official `.core`).
**Variants** default; interactive (hover/active border brand, focus ring, `tabindex`); stat (`.fp-stat`: label muted 0.75 rem 600 → value mono 28 px → delta mono + word); fund (`.fp-fund`: ticker mono · exchange, name 20 px 600, Sharia badge slot, meta row price / today / expense ratio with currency code).
**Content** title ≤ 2 lines; body ≤ 3 lines muted; stat line bold with the number in text colour — never red for emphasis (the site's red `.stat b` is a historical observation).
**Do** one card = one object; a group only where grouping clarifies. **Don't** nested cards, shadows on cards, gradients, a red border at rest, a box around the hero figure, identical card grids for lists.

## 4. Financial table `.fp-table`
**Tokens** wrap `--fp-ground-panel` + ash border + radius card; header `--fp-ground-coal`, muted 0.68 rem 600 uppercase (AR: 0.75 rem, no uppercase); row rule ash; selected / hover row `--fp-brand-red-wash`; numbers `--fp-font-family-mono`.
**Density** regular 48 px rows, 14 px cell padding; compact (`.fp-table--compact`) 40 px, 12 px, 0.75 rem.
**Numbers** `.fp-td-num` cells: mono tabular, aligned to the end in LTR (right) and to the start in RTL; the value is a `.fp-unit` (nowrap, LTR, bidi-isolated) so amount+currency (`42.18 USD`) and sign+number+percent (`+0.62 %`, `−0.84 %`, `0.00 %`) never split across lines.
**Finance cells** gain = `.fp-gain` + «ربح / up», loss = `.fp-loss` + «خسارة / down», flat = `.fp-neutral` + «بلا تغيّر / flat».
**Behaviour** header sticky inside the wrap (max-height 70 vh); horizontal scroll inside the wrap only, never the page; first column holds the name + sub-line (`.fp-row-main` / `.fp-row-sub`).
**Accessibility** real `<table>` with `<th scope="col">`; sorting buttons inside `<th>`; row selection via `aria-selected`.
**Do** currency per row. **Don't** colour-only P&L, centred numbers, red for losses, more than 4 columns on 390 px (move the rest to the row detail).

## 5. Tabs `.fp-tabs` / segmented `.fp-seg`
**Tabs** scrollable row, 44 px, label muted 600 → selected text-primary + 2 px brand-red underline; `role="tablist"` / `tab` / `aria-selected`.
**Segmented** pill track `--fp-ground-coal` + ash border, 3 px padding, selected pill `--fp-ground-panel` + inset line-strong; `aria-pressed`; `.fp-seg--block` stretches (e.g. «متوافق / غير متوافق / الكل»). Range pickers (1D 1W 1M 1Y) are segmented, mono labels.
**Do** ≤ 5 tabs; ≤ 4 segments. **Don't** tabs for actions, both patterns on one screen level.

## 6. Badges & chips
**Badge `.fp-badge`** 24 px, pill, 0.75 rem 600. neutral (disabled-bg), brand (red fill, white label in the UI font: Inter 600 ≈ 9 px / 7 pt, uppercase, letter-spacing .06em; AR: IBM Plex Sans Arabic 600, no uppercase, letter-spacing 0 — the site's mono `.core` chip is a historical observation), success / warning / danger / info (wash fill + 1 px state border + state text), outline (muted).
**Sharia badge `.fp-sharia`** success-wash fill, success border + text, shield-check icon 14 px, text «متوافق مع الشريعة / Sharia-compliant», certifier slot `.fp-sharia__cert` (muted, separated by a line-strong rule, e.g. "AAOIFI · SP Funds"). Non-compliant: `.fp-sharia--off` (disabled-bg, muted, x icon, «غير متوافق / Non-compliant»). Never brand red, never a gold / green gradient, never without the certifier when one exists.
**Chip `.fp-chip`** 36 px, ash border; selected = red-wash fill + brand-red border; removable chips end with a 16 px x icon; `aria-pressed`.
**Do** one state badge per row. **Don't** badges as buttons, more than two badges side by side.

## 7. Toasts `.fp-toast`
**Position** desktop: top centre under the safe area; mobile (< 640 px): above the tab bar (`tabbar-h + safe-area + 12 px`). Region `z-toast` (110). Width ≤ 420 px.
**Kinds** success / warning / danger / info: coal fill, ash border, 3 px start border in the state colour, state-coloured 18 px icon, title 600, body muted 0.75 rem, optional text action (underlined). Enter: fade + 8 px rise, 300 ms standard easing. Auto-dismiss 5 s (success / info), persistent with action (warning / danger).
**Accessibility** success / info / warning `role="status"`; danger `role="alert"`; never more than 3 stacked.
**Do** state the fact («تم تنفيذ الطلب / Order executed») + one detail line with the number. **Don't** toasts for validation errors (use the field), red toasts for neutral info, icons only.

## 8. Empty · loading · error
**Empty `.fp-empty`** 40 px line icon in line-strong, title 15 px 600, body muted ≤ 28 ch, one sm primary action. Copy pattern: what is missing → what fills it («لا توجد أوامر بعد / No orders yet» → «أول طلب شراء يظهر هنا بعد التنفيذ»).
**Skeleton `.fp-skel`** see table (b).
**Error `.fp-errstate`** danger border + danger-wash fill, danger icon + title, muted body, secondary "retry" + ghost "support". Body says the data is safe and what to do. No stack traces, no codes in the body (codes go in a muted mono line only when support asks for them).
**Banner `.fp-banner`** inline, non-blocking (market closed, settlement window). warning / info only.

## 9. Navigation
**Header `.fp-header`** 56 px + safe-area-top, grid 44 / 1fr / 44, sticky `z-header` (80, official nav z-index), ground 85 % + blur 14 px (official nav scrim), ash bottom rule. Title 15 px 600 centred, ellipsis; brand header variant uses Barlow Condensed uppercase, always LTR (lockups never mirror). Back icon is directional (`.fp-icon--dir`).
**Tab bar `.fp-tabbar`** fixed bottom, 56 px + safe-area-bottom, 4–5 items, icon 24 px stroke 1.75 + label 11 px 600; active = brand red icon (stroke 2.25) + 2 px red bar + text-primary label (red = active state), `aria-current="page"`; unread dot `.fp-tabbar__dot` ember 6 px. Order in RTL follows reading order (first item at the right).
**List rows `.fp-listrow`** 56 px min, plain 20 px muted icon (no tile in apps; `--tile` is the marketing feature grid only), title 15 px 600 + sub 0.75 rem muted (each on its own line), end slot (number mono + delta) or directional chevron. Hover red-wash; focus ring inset.
**Risk-line foot `.fp-risk-foot`** (v2.3.2, CEO 31 Oct 2026 — confirmed): the fixed line «الاستثمار ينطوي على مخاطر · Investing involves risk» (`component.risk-line.text`) in the foot of the **sign-in screen** and of **every screen that shows financial figures** (home balance, portfolio, order / settlement, statements, staff dashboard). One muted 11 px line in `--fp-text-muted`, start-aligned, above the tab bar on phones (the last element of the scrolling content) or at the end of the main column on desktop; side / unobtrusive — never red, never bold, never a banner, never over content, never hidden behind a sheet; the wording is the one fixed line (`verify-identity` RISK-WORDING), the full regulatory block stays on legal pages and mail footers. Gate: `scripts/check-risk-line.mjs` includes the app mockups 01–04.
**Do** ≤ 5 tabs, labels always visible. **Don't** hamburger menus on phones, more than one action icon in the header's end slot, floating action buttons.

## 10. Modal & bottom sheet
**Scrim** `--fp-ground-bg` at 72 % (`color-mix`), `z-scrim` 90, fade 300 ms.
**Sheet `.fp-sheet`** bottom, panel fill, ash border, top radius `--fp-radius-sheet` 18 px, overlay shadow, grab handle 36 × 4 line-strong, padding 16 + safe-area-bottom, max 88 vh scrollable, rise 350 ms standard easing. Primary action full-width at the bottom of the sheet.
**Modal `.fp-modal__box`** ≤ 440 px, radius card, padding 24, actions end-aligned: ghost "back" then the primary — or, for the final confirmation of a destructive action, `.fp-btn-danger-solid` (the one place a filled danger button is allowed, v2.3.4). `role="dialog"` + `aria-labelledby`, focus trapped, Esc / swipe-down closes, scrim tap closes only when nothing is unsaved.
**Do** sheets on phones, modals on desktop. **Don't** nested sheets, a modal for a toast-sized message, full-screen scrims that hide the context entirely.

## 11. Charts `.fp-chart`
See table (f). Container: panel fill, ash border, radius card — the one box that is always justified (chart + title + period + range belong together). `__head--stack`: title (text-primary) + `__period` (what the chart shows · period · currency · sampling), `__body` hosts the generated SVG (`data-chart`), `__foot`: benchmark note + `__range--text` (active = red underline, the active-state role of red). **Charts are generated from data** — `brand/scripts/charts.mjs` `lineChart({theme:'dark'|'paper', …})` computes point positions, axis ticks (nice steps, ≤ 5), x labels and the start/end value labels from ONE dataset (`brand/scripts/sample-data.mjs`); templates and mockups carry `<!--CHART:{json}-->…<!--/CHART-->` markers filled by `scripts/build-mockups.mjs`. Never relabel a pre-drawn path. The benchmark is rebased to the series' first point and described as such. Canvas always LTR (time runs left → right in RTL too).

## 12. Progress & stepper
**Progress `.fp-progress`** 6 px track line-ash, fill brand-red (success / warning variants for completed / attention), width transition 350 ms. `role="progressbar"` with values.
**Stepper `.fp-step`** 28 px numbered circle (mono "01"…), connector 1 px ash; done = success fill + check, active = brand-red fill, pending = dashed border. Title 15 px 600 + sub muted (date · time zone).
**Do** ≤ 5 steps, dates with time zone («16:00 بتوقيت دبي / 16:00 GMT+4»). **Don't** percentage without a label, animated stripes.

## 13. Tooltip `.fp-tip`
coal fill, line-strong border, 0.75 rem, radius sm, overlay shadow, opacity 250 ms; opens on hover / focus-within / `data-open`; `role="tooltip"` + `aria-describedby`. One line only; never the only place a value lives (phones have no hover).

## 14. Key-value list `.fp-kv` · avatar `.fp-avatar` · divider
`.fp-kv` rows 10 px padding, ash rule, key muted, value mono LTR end-aligned — the standard confirmation layout (fund / amount / settlement). Avatar 36 px coal + ash, initials in Barlow Condensed 700.

---

## (a) RTL mirroring table

| Mirrors in RTL | Never mirrors |
|---|---|
| Layout flow, grids, flex order, list rows, tab order, tab-bar item order | Numbers, prices, percentages, dates in digits (`.fp-num`, `direction:ltr`) |
| Padding / margin / border / inset (logical properties only) | Charts, candles, time axis (left → right) |
| Text alignment (start / end) | Logo lockups, wordmarks, the brand header title |
| Back / forward / chevron / arrow icons (`.fp-icon--dir` → `scaleX(-1)`) | Media controls (play, rewind), clocks, checkmarks, warning / info icons |
| Sheet / modal action order (ghost first in reading order) | Currency affix inside numeric inputs (pinned right, input is LTR) |
| Progress fill direction, stepper connector side | OTP boxes (always LTR, digits typed left → right) |
| Switch knob travel (`translateX(-18px)` in RTL) | Keyboard shortcuts, codes, IBANs, e-mail addresses (`dir="ltr"`) |

## (b) Loading-skeleton rules
1. Skeleton = `--fp-line-ash` blocks, radius sm (8 px) for text, media radius for images; 1.2 s opacity pulse 1 → .45 only; no shimmer gradient, no colour.
2. Shapes mirror the final layout 1:1 (title 18 px 60 %, number 26 px 40 %, text 12 px 100 % / 80 %, block 120 px); never a generic grey card.
3. Show after 150 ms of waiting, keep ≥ 400 ms once shown (no flash); numbers never appear as `0.00` while loading.
4. Container gets `aria-busy="true"` + `aria-label`; skeleton nodes are `aria-hidden`.
5. Never skeleton the header, the tab bar or a primary button; never more than one screen of skeleton rows (6 rows max).
6. Reduced motion → pulse off (static blocks).

## (c) Form validation copy rules
Tone: calm, factual, one sentence, says what is wrong and what to do next; never blames («أدخلت بريداً غير صالح» is banned); no exclamation marks; no "oops"; numbers with code; Arabic first.

| Case | AR | EN |
|---|---|---|
| required | هذا الحقل مطلوب لإكمال الطلب. | This field is needed to complete the order. |
| invalid e-mail | تحقق من صيغة البريد الإلكتروني (name@example.com). | Check the e-mail format (name@example.com). |
| too short (password) | كلمة المرور 8 أحرف على الأقل، مع رقم وحرف كبير. | Password needs 8+ characters with a number and a capital letter. |
| below minimum | الحد الأدنى للطلب 100.00 USD — عدّل المبلغ وأعد المحاولة. | Minimum order is 100.00 USD — adjust the amount and try again. |
| insufficient balance | الرصيد المتاح 820.40 USD أقل من المبلغ المطلوب. | Available balance 820.40 USD is below the requested amount. |
| network | تعذّر الاتصال — تحقق من الشبكة ثم أعد المحاولة. | Connection lost — check your network and try again. |
| OTP wrong | الرمز غير صحيح — تحقق من آخر رسالة ثم أدخله من جديد. | That code didn’t match — check the latest message and enter it again. |
| OTP expired | انتهت صلاحية الرمز — اطلب رمزاً جديداً. | The code expired — request a new one. |
| too many attempts | توقّفت المحاولات مؤقتاً لمدة 15 دقيقة لحماية حسابك. | Attempts are paused for 15 minutes to protect your account. |
| market closed (inline banner) | السوق مغلق — الأوامر تُنفَّذ عند الافتتاح التالي. | Market closed — orders execute at the next open. |

Placement: under the field (live region `aria-live="polite"`), validated on blur and on submit, never on every keystroke; the first invalid field receives focus on submit.

## (d) Iconography sizing grid (decision item 5 — Lucide, PROPOSED)

| Size | Use | Stroke | Optical box | Touch target |
|---|---|---|---|---|
| 16 px (`.fp-icon--sm`) | inline in buttons sm, chips, helper lines, badges (13–14 px) | 1.75 | 14 px | inherits parent (≥ 44 px) |
| 20 px (`.fp-icon`) | buttons md, inputs affix, list rows (18 px in tiles) | 2 | 18 px | 44 × 44 |
| 24 px (`.fp-icon--lg`) | tab bar (stroke 1.75, active 2.25), header actions, empty states (40 px, stroke 1.5) | 2 | 22 px | 44 × 44 |

Rules: `currentColor` only; round caps and joins; one icon family per product (never mix filled and outline); no emoji, no 3D, no duotone; directional icons get `.fp-icon--dir`; decorative icons `aria-hidden="true"`, meaningful ones carry `aria-label` on the control.

## (e) Density

| Value | Compact | Regular (default) |
|---|---|---|
| table row | 40 px / 12 px padding / 0.75 rem | 48 px / 14 px / 0.85 rem |
| list row | 48 px | 56 px |
| button | sm 36 px | md 44 px |
| card padding | 16 px | 26 / 24 px |
| stack gap | 8 px | 12 px |
| section gap | 16 px | 24 px |

Compact is for staff dashboards on desktop only; phones stay regular (touch targets).

## (f) Chart treatment

| Element | Token / value |
|---|---|
| background | `--fp-ground-panel`; grid `--fp-chart-grid` 1 px; no vertical grid on phones |
| axis text | `--fp-chart-axis` (muted), IBM Plex Mono 0.68 rem (Arabic month labels fall back to IBM Plex Sans Arabic); prices left, time bottom, ≤ 5 nice ticks computed from the data; start and end values labelled |
| primary line | app charts: text colour 2 px (`#EDEAE6` on charcoal, `#120D0E` on paper) — red marks only the current value dot; marketing charts may use `--fp-chart-series-1`; no area gradients |
| benchmark / index | `--fp-chart-benchmark` 1.5 px dashed 4 4 |
| extra series | series-2 … series-6 in order; max 4 lines per chart; one brand-red series per chart |
| candles | up `--fp-chart-candle-up`, down `--fp-chart-candle-down` (never brand red), body 10 px / wick 1 px at 390 px |
| crosshair | `--fp-chart-crosshair` 1 px dashed 2 3; marker dot 3 px series colour |
| legend | 0.68 rem muted, 10 × 2 px swatch, benchmark named "(benchmark)" |
| lightweight-charts mapping | `layout.background` panel, `layout.textColor` axis, `grid.*.color` grid, `upColor/downColor`, `wickUpColor/wickDownColor`, `crosshair.*.color`, `priceFormat` 2 decimals + currency in the header, not on the axis |
| never | 3D, glow, drop shadows, gradients beyond area-fill, mirrored time axis in RTL, colour-only up/down without the sign in the header |

## Historical notes — fiper.io observations (NOT for new use)
Recorded only so the site can be read as a source of values. None of these is an instruction; agents must not reintroduce them on any surface: the mono eyebrow with a double-slash prefix (IBM Plex Mono .68rem, letter-spacing .28em, red — fiper.io line 39), the `.core` chip set in mono .55rem with .2em tracking (line 128), the trust-bar dot with a red glow (line 115), the numbered `.tg .n` section labels (line 188), the hero radial wash (line 75) and `.cardshow` glow, the floating/tilting card (`cardfloat`, lines 162–168), the button glow `0 6px 26px rgba(220,38,38,.35)` (lines 46–49), letter-spaced Latin caps beyond .06em, and the red hero stat numbers (`.stat b`, line 204). Current rules: labels are Inter 600 .06em / IBM Plex Sans Arabic 600 with no prefix; the brand badge is Inter 600 uppercase .06em on a red fill; red has three roles (logo tile, primary action, active state); numbers are never red for emphasis; no glow anywhere.
