# Pre-release identity checklist — Fiper Brand v2.0

Answer every item yes/no before a release (58 items; v2.0 adds 51–58 for the approved composition language). Status vocabulary of values: APPROVED / OBSERVED / PROPOSED / DEPRECATED (`tokens.json`). Automated part: `node brand/scripts/verify-identity.mjs src public` must print `→ PASS`. "Test" is the command or action that proves it. Fail = block.

## Screen
| # | Check | Test |
|---|---|---|
| 1 | Ground is `--fp-ground-bg` `#0A0708`, never `#000` | `grep -rnE "#000\b|#000000|black" src/ --include=*.css --include=*.tsx` → 0 outside comments |
| 2 | Exactly one primary (red) CTA per screen | open each route at 390 px; count `.fp-btn--primary` visible → 1 |
| 3 | A card/box exists only where it groups related information or bounds an action (facts table, chart frame, sheet, selectable fund card) — never the default container; when used: panel fill, 1 px border, 12–16 px radius, no shadow | list every box on the screen and name what it groups or bounds |
| 3a | No glow / halo / neon around any button or card (`--fp-c-button-primary-shadow: none`; the site glow is observed, not applied) | `grep -rnE "box-shadow.*220, ?38, ?38" src/` → 0 |
| 3b | Composition varies by function on one grid — not the same boxed template on every page/post (no hairline box around every block, no equal tiles, no tiny decorative labels) | visual review of each screen type against `references/composition-rules.md` |
| 4 | Header 56 px with the white lockup at 26 px; tab bar 56 px + safe-area | screenshot at 390 × 844 with `env(safe-area-inset-bottom)` emulated |
| 5 | Empty, loading (skeleton) and error states exist for every data view | throttle API to error / empty / slow; screenshot each |

## Type
| # | Check | Test |
|---|---|---|
| 6 | Arabic renders in IBM Plex Sans Arabic everywhere — paragraphs, table headers, inputs, buttons, badges, captions, mixed runs; no Cairo, no FreeSerif/Liberation fallback | DevTools → Rendered Fonts on each element type; PDFs: `python3 scripts/check-pdf-fonts.py file.pdf` → PASS |
| 7 | Latin digits inside Arabic runs, same font, no fallback box | render `الرصيد 1,250.00 USD` → Rendered Fonts = IBM Plex Sans Arabic only |
| 8 | `letter-spacing: 0` on every Arabic element — no exception, not even eyebrows | `grep -rn "letter-spacing" src/` → no non-zero value under `[lang=ar]` / `[dir=rtl]` (verify-identity ARABIC-LETTER-SPACING = 0) |
| 9 | No synthetic bold (real 600/700 loaded) | `font-synthesis: none` set; weights present in `fonts.css` |
| 10 | Numbers and code in IBM Plex Mono tabular (`.fp-num`, `code`, OTP) — nowhere else: no mono eyebrows, labels, table headers, headings, captions | `grep -rn "monospace\|Plex Mono" src/` → only `.fp-num`/`code`/OTP (verify-identity MONO-ON-LABEL = 0) |
| 10a | Small labels only where they name a value: Inter 600 .75rem uppercase, letter-spacing ≤ .06em, colour `--fp-text-label`; Arabic Plex Arabic 600, ls 0; no slash label prefix, no decorative numbering; no Latin caps tracked beyond .06em anywhere; no futuristic / decorative font | inspect `.fp-eyebrow`; verify-identity LATIN-LETTER-SPACING = 0 |
| 11 | Dates human with time zone, no ISO in UI | `grep -rnE "\d{4}-\d{2}-\d{2}T" src/ dist/` → 0 in rendered strings |

## Colour
| # | Check | Test |
|---|---|---|
| 12 | No hex literal outside tokens (apps); no DEPRECATED value (`#F42821`, `#A30100`, `#0A0A0A`, Cairo) | `node brand/scripts/verify-identity.mjs src` → PASS |
| 13 | Brand red only in its roles: the logo tile, the one primary action, the active state (tab icon + bar, range marker, current-value dot) — never on small labels, eyebrows, financial figures or decoration | visual pass; `grep -rn "fp-brand-red" src/` reviewed |
| 14 | Red text only under the large-text exception: ≥ 24 CSS px regular or ≥ 18.67 CSS px bold (14 px bold does NOT qualify); else `--fp-brand-ember` or a text colour | inspect every red text node's computed size/weight |
| 14a | Secondary text never darker than `#8E8681` on the dark ground (lighter raises contrast) | computed colour of muted text ≥ 5.6:1 |
| 14b | Field / control boundaries ≥ 3:1 (`--fp-line-input`); `--fp-line-strong` only as a hover affordance | inspect input border on `--fp-ground-panel` and `--fp-ground-bg` |
| 14c | Text over the primary gradient is `#FFFFFF` (4.83 / 7.92); focus ring, error border and disabled states measured | `node scripts/check-a11y.mjs` state-contrast table |
| 15 | Every text/ground pair ≥ 4.5:1 (3:1 large) | `node scripts/contrast.mjs` on new pairs |
| 16 | No purple/neon/multi-stop gradients; the only gradient is the primary button | `grep -rn "gradient" src/` reviewed |

## Logo
| # | Check | Test |
|---|---|---|
| 17 | Logo files come from `brand/logos/` unchanged — official SVG, official dark raster, official stacked raster, official icons; nothing recoloured, cropped or retraced, no reference to `logos/_unapproved-proposals/` or any `DERIVED` file | `md5sum` against the package; verify-identity UNAPPROVED-LOGO = 0 |
| 18 | Lockup ≥ 20 px (26 px headers), stacked lockup ≥ 48 px, clear space 0.5 × height; where a mark alone was planned: full lockup or the official app icon (no mark-only asset exists) | measure in DevTools |
| 19 | Logo not mirrored in RTL | `direction: ltr` on the brand element |
| 20 | Favicon, 180, 192, 512 and OG wired | `curl -I` each path → 200 |

## Finance
| # | Check | Test |
|---|---|---|
| 21 | Gain = ▲ + word + `+` + `--fp-finance-gain`; Loss = ▼ + word + `−` + `--fp-finance-loss` (`#F05252` / light `#B91C1C` — the finance red, never the `--fp-brand-red` token); a red figure is never a button and never sits on a filled red ground; no other red text (a `+2.7 %` in red is a defect) | render a gain and a loss row; computed colours `#2AB37A` / `#E8785A`; `grep` red classes on numeric spans → 0 |
| 22 | Currency code shown next to every amount | grep rendered amounts for a bare number without a code |
| 23 | Cash from integer minor units with the currency's own precision (USD 2), `,` thousands `.` decimal, `dir=ltr` | unit test on `formatCents` per currency |
| 24 | Pending / settled / failed states carry word + icon + colour | screenshot the order flow |
| 25 | No invented figures in copy or placeholders | review all literals; demo data labelled «بيانات تجريبية / Sample data» |
| 25a | Display precision follows the value type and the currency's minor unit (cents → 2 dp USD; units ≤ 4 dp trimmed; bps → 2 dp) — never a blanket 2 decimals | unit tests on `formatCents` / `formatUnits` / `formatBps`; a JPY/BHD line would show 0/3 dp |
| 25b | Zero shown as a value (`0.00`), missing data as `—` + «لا بيانات»; never a zero for missing | render a fund with no price |
| 25c | `--fp-finance-loss` only on value movement; `--fp-state-danger` only on failures | grep the two tokens; review each use |
| 25d | Sharia badge appears only for `sharia.status = compliant`; certifier named only when present in the data | render SPUS and a fund with `certifier: null` |

## Icons
| # | Check | Test |
|---|---|---|
| 41 | One set only (Lucide v0.468.0 from `brand/icons/lucide/`), line style, sizes 16/20/24, stroke 1.75/2/2 (active tab 2.25), 8 px gap, 44 px hit area | `grep -rn "<svg" src/` reviewed against `icons/ICONS.md`; no other library in `package.json` |
| 42 | Every icon explains a function or state (one meaning per icon, table in `icons/ICONS.md`); no icon as decoration, no square placeholder shapes, no coloured tiles in app lists | visual pass of navigation, lists, badges |
| 43 | No Unicode symbols (■ ◔ ▲ as icons) or emoji standing in for product icons; ✓/✕ only as text marks in sentences | verify-identity UNICODE-SYMBOL-ICON report reviewed |
| 44 | Directional icons mirror in RTL (`.fp-icon--dir`); value icons, numbers, charts, logo never mirror | screenshot ar/en |

## RTL
| # | Check | Test |
|---|---|---|
| 26 | Only logical properties (`inline-start/end`) | `grep -rnE "margin-left\|margin-right\|padding-left\|padding-right\|left:\|right:" src/*.css` → 0 |
| 27 | Chevrons, back arrows, progress, tabs mirror; numbers, charts, codes, phone numbers don't | screenshot ar + en side by side |
| 28 | Mixed runs isolated (`<bdi>` / `unicode-bidi: isolate`) | render `SPUS · 1,250.00 USD · فايبر` in a sentence |
| 29 | Arabic punctuation (، ؛ ؟) in Arabic copy | `grep -rn "," src/i18n/ar*` reviewed |

## Accessibility (see accessibility.md)
| # | Check | Test |
|---|---|---|
| 30 | Focus ring visible (`--fp-brand-ember`, 2 px, offset 2) on every control | keyboard tab through each screen |
| 31 | Touch targets ≥ 44 × 44 | DevTools audit |
| 32 | Every input has a label; errors named in text | screen reader pass (VoiceOver AR) |
| 33 | `prefers-reduced-motion` removes reveal/transitions | emulate and record |
| 34 | Dynamic type to 130 % without clipping | `html{font-size:130%}` screenshot |

## Copy
| # | Check | Test |
|---|---|---|
| 35 | فايبر (never فيبر); Fiper / Fiper Global | `grep -rn "فيبر" .` → 0 |
| 36 | Product names as in README § A; "X by Fiper / X من فايبر" only for affiliated products | review nav + titles |
| 37 | Regulatory block and legal links verbatim from `templates/legal/regulatory-block.html` | `diff` against the package |
| 37a | The block shown matches the product / entity / channel row in `regulatory-matrix.md`; any REQUIRED DECISION row is resolved or the surface is marked «placeholder — pending decision» | review the matrix row for this surface |
| 37b | Blank templates carry no warnings; final documents needing disclosures carry the approved block for their entity | open each template and each final document type |
| 38 | E-mails: every link under a button, zero raw URLs | `grep -oE "https?://[^\"'<> ]+" mail.html` → only inside `href` |
| 39 | Blank templates carry the brand line, no risk filler | open each template |
| 40 | No emoji in UI strings | `grep -rnP "[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]" src/i18n` → 0 |
| 45 | Every preview / mockup number is documented or carries the visible «بيانات تجريبية · SAMPLE» chip; no performance claims | review each mockup / template |
| 46 | E-mail claims: a Chromium screenshot is a browser preview; any client not actually tested is written as NOT TESTED (`templates/email/TEST-MATRIX.md`) | read the evidence table |
| 47 | Regulatory block per message type / product follows `regulatory-matrix.md`; approved texts never shortened; open rows marked REQUIRED DECISION | review the matrix row |
| 48 | Decision-item flips: a font / icon-set / display change re-checked across preview, mockups, templates, manual (never shipped as a one-token change) | changelog entry names the re-check |
| 49 | Editable deliverables present as files (.pptx, .docx, SVG sources, motion source + sample); a preview PNG never counts as the deliverable | `deliverables-manifest.md` statuses |
| 50 | Visual review done against the anti-generic list (README § L) — not only the blocklist | reviewer initials + date in the release note |

## Composition (v2.0, approved direction — `references/composition-rules.md`)
| # | Check | Test |
|---|---|---|
| 51 | The surface has one pole (image-, headline- or number-dominant) and one dominant element; the constant core is present (lockup top-start, Arabic headline Plex Arabic 700, numeric column, meta foot) | name the pole and the dominant element; a second dominant element = fail |
| 52 | Ground by job: paper for documents / e-mails / educational / corporate / presentation, charcoal for app and market screens and the card ad by default; the optional light theme (`[data-theme="light"]`, APPROVED 30 Oct 2026) only behind a user/system toggle, never on marketing surfaces | check the ground token of each surface type |
| 53 | Margin = 2 × lockup height for the medium (social 72–84, slide 112, A4 64, e-mail 28–40 px; phone gutter 20) and one vertical start line | measure the lockup height and the start margin |
| 54 | No slash label prefix, no decorative numbering, no technical labels; numbering only for a real sequence, comparisons as tables | `grep -rn "//" src/ --include=*.tsx --include=*.html` on visible strings → 0; review lists vs tables |
| 55 | Social templates: essential body text ≥ 42 px on a 1080 canvas (≈ 14 px when shown 360 wide); export inspected at actual size without zoom | `node brand/scripts/verify-identity.mjs brand/templates/social` + open the export at 100 % |
| 56 | Every reference chart is generated from `brand/scripts/sample-data.mjs` via `brand/scripts/charts.mjs` (marker `<!--CHART:{…}-->`), states what it shows, period, currency, end value; benchmark matches its description | `grep -rn "data-chart=\"sample-portfolio" ` on the rendered file; no hand-drawn `<path>` for data |
| 57 | Amount + currency and sign + number + percent are unbreakable units (`.fp-unit` / `<bdi class="num">`): no line break inside a unit in HTML, PDF text extraction and exports | render at 320/360/390 px and A4; for each unit `getClientRects().length === 1`; PDF: text items keep the unit together |
| 58 | Sample data is arithmetically consistent (holdings + cash = total; gain amount ↔ percent) and marked SAMPLE | recompute from `sample-data.mjs` |
