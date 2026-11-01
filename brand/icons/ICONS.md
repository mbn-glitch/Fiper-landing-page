# Icons — Fiper Brand v2.2.0 (decision item 5 — APPROVED by the CEO on 30 Oct 2026; a bespoke, more professional set may replace Lucide later, so the icon layer stays swappable: every surface consumes icons through the sprite `scripts/lucide-sprite.mjs` / `<use href="#name">`, never by pasting paths)

**One set: Lucide v0.468.0** (ISC licence — `brand/icons/lucide/LICENSE`; vendored subset of 71 icons in `brand/icons/lucide/*.svg`, unmodified from `lucide-static@0.468.0`). No second set, no icon font, no 3D / glossy / duotone icons, no emoji or Unicode symbols standing in for product icons. Changing the set (decision item 5) is **not** a one-token flip: every inline icon in components, mockups, templates and the manual is re-checked.

## Rules
| Rule | Value |
|---|---|
| Grid | 24 × 24 viewBox, 1 px optical padding inside the box |
| Sizes | **16 px** inline with text and inside chips/badges · **20 px** list rows, inputs, buttons · **24 px** tab bar, header actions, empty states (48 px only for an empty-state illustration-free mark, muted) |
| Stroke | 1.75 px at 16 · 2 px at 20 and 24 (the file default) · 2.25 px for the **active** tab-bar icon only; `stroke-linecap: round; stroke-linejoin: round` |
| Style | **line only** — no filled variants. A functional exception (e.g. a filled star for "saved") must be documented here with the reason; none exists today |
| Colour | `stroke="currentColor"` — the icon inherits the text colour of its context (`--fp-text-primary`, `--fp-text-muted`, a state colour, `--fp-text-on-brand` on buttons). Brand red only on the active tab icon and the primary button's icon, never as decoration |
| Alignment | vertically centred to the text line (`vertical-align: -0.125em` inline, `align-items: center` in flex rows); **8 px** gap to the label (`--fp-space-2`); in RTL the icon sits at the inline-start of the label unless it is a trailing disclosure |
| Surrounding space | min **4 px** between the icon box and any border; inside a **44 × 44 px** hit area for every interactive icon (`components.css` hit-box rule); never two icons within 8 px of each other |
| Tiles | **no coloured tile by default** — an icon sits on the surface. The 52 px `--fp-brand-red-wash` tile with the `--fp-line-brand-soft` border is the marketing feature-grid treatment only (fiper.io `.eco i`, OBSERVED), never in app lists, headers or badges |
| Direction | icons that imply reading direction (chevrons, arrows, log-out, external-link, trending arrows do **not** mirror — they describe value, not direction) mirror under `[dir="rtl"]` with `transform: scaleX(-1)` (`components.css .fp-icon--dir`); numbers, charts, clocks, logos never mirror |
| Meaning | an icon exists to help the user understand a **function** (action) or a **state**; one icon = one meaning across all surfaces (table below). Never an icon to fill space, decorate a heading, or repeat the label's meaning on a tile |
| Accessibility | decorative icons `aria-hidden="true"`; icon-only buttons carry `aria-label` in the UI language; state icons are always accompanied by the state word (finance semantics: ▲/▼ glyphs are text marks inside `.fp-num`/`.fp-delta` spans, not icons) |
| Text marks vs icons | `✓` and `✕` may appear as **text marks inside sentences** (lists, check copy); they are never product icons, never alone as a state indicator (use `circle-check` / `circle-x` + word) |

## Usage table — icon → function or state
| Icon | Function / state |
|---|---|
| `activity` | Activity tab / النشاط |
| `arrow-down-right` | Incoming / buy |
| `arrow-left` | Back in a sheet header (mirrors) |
| `arrow-right` | Proceed (mirrors) |
| `arrow-up-down` | Sort |
| `arrow-up-right` | Outgoing / sell |
| `badge-check` | Verified account |
| `banknote` | Cash / deposit |
| `bell` | Notifications |
| `briefcase` | Business / partner programme |
| `building-2` | Entity / office |
| `calendar` | Date |
| `chart-candlestick` | Candle chart |
| `chart-line` | Performance chart |
| `chart-pie` | Funds tab / الصناديق (allocation) |
| `check` | Confirm / selected |
| `chevron-down` | Expand / select |
| `chevron-left` | Back (mirrors in RTL) |
| `chevron-right` | Forward / row disclosure (mirrors) |
| `chevron-up` | Collapse |
| `circle-alert` | Blocking error in a field |
| `circle-check` | Success / settled |
| `circle-help` | Help / explanation |
| `circle-x` | Error / failed / rejected |
| `clock` | Pending / settlement time |
| `coins` | Units / holdings |
| `copy` | Copy reference |
| `credit-card` | Fiper Card / payment method |
| `download` | Download (statement PDF) |
| `ellipsis` | Overflow actions |
| `external-link` | Opens outside the app (under a button only) |
| `eye` | Show (password) |
| `eye-off` | Hide (password) |
| `file-text` | Document / certificate |
| `filter` | Filter |
| `globe` | Website / region |
| `hash` | Reference number |
| `house` | Home tab / الرئيسية |
| `info` | Informational note |
| `landmark` | Bank transfer / institution |
| `languages` | Language switch |
| `layers` | Fund family / tiers |
| `loader` | Loading (static icon; motion = skeleton, never a spinning loader) |
| `lock` | Security / locked |
| `log-out` | Sign out |
| `mail` | E-mail |
| `menu` | More tab / المزيد |
| `message-circle` | Support chat |
| `minus` | Remove / decrease |
| `moon` | Dark mode (after decision 3) |
| `percent` | Percentage / ratio |
| `phone` | Phone |
| `plus` | Add / increase |
| `qr-code` | QR code |
| `receipt` | Statement / invoice |
| `refresh-cw` | Refresh / retry |
| `scan-line` | Scan |
| `search` | Search |
| `settings` | Settings |
| `share-2` | Share |
| `shield-check` | Sharia-compliant badge (state: documented compliant) |
| `square-check` | Checklist item done |
| `star` | Favourite |
| `sun` | Light mode (after decision 3) |
| `trending-down` | Loss / down (always with word + sign) |
| `trending-up` | Gain / up (always with word + sign) |
| `triangle-alert` | Warning / attention |
| `upload` | Upload / deposit proof |
| `user` | Account / profile |
| `wallet` | Portfolio tab / المحفظة |
| `x` | Close / dismiss |

## Implementation
```html
<svg class="fp-icon" width="20" height="20" aria-hidden="true"><use href="/brand/icons/sprite.svg#house"/></svg>   <!-- or inline the file's <svg> -->
```
```css
.fp-icon{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;vertical-align:-.125em}
.fp-icon--16{width:16px;height:16px;stroke-width:1.75} .fp-icon--24{width:24px;height:24px}
[dir="rtl"] .fp-icon--dir{transform:scaleX(-1)}
```
Adding an icon: copy it from `lucide-static@0.468.0` (same version, unmodified), add its row above with one meaning, run `node scripts/verify-identity.mjs`. Never draw a custom icon, never edit a Lucide path, never mix in another library's icon "because it was missing".
