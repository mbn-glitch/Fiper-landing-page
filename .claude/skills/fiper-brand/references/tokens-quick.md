# tokens-quick — every `--fp-*` variable (GENERATED from brand/tokens.json, DTCG 2025.10; do not edit)

Layers: `--fp-p-*` primitives (do not use directly in apps) · `--fp-*` semantic roles (use these) · `--fp-c-*` component tokens. Status vocabulary: **APPROVED** (explicit decision or official logo file) · **OBSERVED** (captured from https://fiper.io/ on 2026-10-29, index.html md5 7628659a07bb6e98407b61f776c100c4; an observed value is not automatically a rule) · **PROPOSED** (no source; recommended default) · **DEPRECATED** (never use) · ALIAS (reference). Light-mode values live under `[data-theme="light"]` (PROPOSED, decision item 3).

## Semantic roles
| Variable | Value | Status | Role |
|---|---|---|---|
| `--fp-ground-bg` | `#0A0708` | OBSERVED | Page ground (canonical dark). Never #000. |
| `--fp-ground-coal` | `#120D0E` | OBSERVED | Raised ground: nav scrim, trust bar, secondary surface. |
| `--fp-ground-panel` | `#171112` | OBSERVED | Card / panel surface. |
| `--fp-ground-frame` | `#0E0C0D` | OBSERVED | Screenshot / media frame background. |
| `--fp-ground-chrome` | `#141011` | OBSERVED | Window chrome bar inside media frames. |
| `--fp-ground-bezel` | `#1B1516` | OBSERVED | Device bezel border (4px). |
| `--fp-line-ash` | `rgba(237,234,230,0.09)` | OBSERVED | Default hairline: borders, dividers, table rules. |
| `--fp-line-strong` | `rgba(237,234,230,0.35)` | OBSERVED | Hover / active border (ghost button hover, language button hover). |
| `--fp-line-frame` | `rgba(237,234,230,0.12)` | OBSERVED | Media frame border. |
| `--fp-line-brand` | `rgba(220,38,38,0.45)` | OBSERVED | Card hover border (brand accent line). |
| `--fp-line-brand-soft` | `rgba(220,38,38,0.40)` | OBSERVED | Icon tile border. |
| `--fp-line-dark-mail` | `#2A2325` | PROPOSED | Solid hairline for dark-mode mail clients. |
| `--fp-line-input` | `rgba(237,234,230,0.40)` | PROPOSED | Field / control boundary. ≥ 3:1 against bg and panel (WCAG 1.4.11). line.strong (.35, 2.78) is hover-only, never the sole boundary. |
| `--fp-line-divider` | `rgba(237,234,230,0.28)` | APPROVED | Divider between hierarchy levels on charcoal (ads, covers, posts). Light counterpart: light.divider. |
| `--fp-text-primary` | `#EDEAE6` | OBSERVED | Primary text. Never pure white for running text. |
| `--fp-text-muted` | `#8E8681` | OBSERVED | Secondary text, labels, captions (AA on bg and panel). |
| `--fp-text-risk` | `rgba(142,134,129,0.9)` | OBSERVED | Risk line under a CTA. |
| `--fp-text-disclaimer` | `rgba(142,134,129,0.85)` | OBSERVED | Disclaimer line in cards. |
| `--fp-text-on-brand` | `#FFFFFF` | OBSERVED | Text on brand-red fills (buttons, CORE chip). #FFFFFF = 4.83:1 on #DC2626 (AA). NOT #EDEAE6 (4.03:1, fails AA body). |
| `--fp-text-selection` | `#FFFFFF` | OBSERVED | Selected text colour. |
| `--fp-text-icon-on-brand` | `#FFFFFF` | PROPOSED | Icons on brand-red fills (3:1 non-text minimum; white = 4.83). |
| `--fp-text-on-success` | `#0A0708` | PROPOSED | Text/icon on a solid success fill (7.48:1). |
| `--fp-text-on-danger` | `#0A0708` | PROPOSED | Text/icon on a solid danger fill (6.94:1). |
| `--fp-text-label` | `#8E8681` | PROPOSED | Small labels, eyebrows, table headers, captions: text.muted (5.61 on bg). Brand red is NEVER a small-label colour. |
| `--fp-brand-red` | `#DC2626` | APPROVED | Brand UI red = the one primary action + the active state (and the brand badge). The logo tile keeps its own gradient. Finance semantics (loss red #F05252 / profit green) are a separate, exempt role: a red figure is never a button. |
| `--fp-brand-red-deep` | `#7A1512` | OBSERVED | Deep red: pressed primary, dark accents. |
| `--fp-brand-red-gradient-end` | `#A31212` | OBSERVED | End stop of the primary button gradient (120deg, red → this). |
| `--fp-brand-ember` | `#F0421B` | OBSERVED | Warm accent: focus ring, live indicator. Not a second primary. |
| `--fp-brand-red-wash` | `rgba(220,38,38,0.06)` | OBSERVED | Tinted fill for icon tiles / selected rows. |
| `--fp-brand-red-wash-strong` | `rgba(220,38,38,0.16)` | OBSERVED | Hero radial wash (marketing only). |
| `--fp-brand-selection-bg` | `rgba(220,38,38,0.35)` | OBSERVED | Text selection background. |
| `--fp-brand-logo-gradient` | `linear-gradient(90deg, #E03636 0%, #AD1D1C 50%, #9C1515 100%)` | APPROVED | The logo tile's own gradient — logo artwork only, never a UI fill. |
| `--fp-action-primary` | `#DC2626` | ALIAS | Primary button fill start. |
| `--fp-action-primary-end` | `#A31212` | ALIAS | Primary button fill end (gradient 120deg). |
| `--fp-action-primary-pressed` | `#7A1512` | PROPOSED | Pressed state fill (PROPOSED role for the OBSERVED --red-deep). |
| `--fp-action-primary-shadow` | `rgba(220,38,38,0.35)` | OBSERVED | OBSERVED glow colour — documentation only, NOT applied. |
| `--fp-action-primary-shadow-hover` | `rgba(220,38,38,0.5)` | OBSERVED | OBSERVED hover glow colour — documentation only, NOT applied. |
| `--fp-action-focus-ring` | `#F0421B` | PROPOSED | Keyboard focus ring 2px, offset 2px. PROPOSED role (fiper.io has no custom focus style). |
| `--fp-action-disabled-fg` | `rgba(237,234,230,0.38)` | PROPOSED | Disabled text. |
| `--fp-action-disabled-bg` | `rgba(237,234,230,0.08)` | PROPOSED | Disabled fill. |
| `--fp-state-success` | `#2AB37A` | OBSERVED | Success / live / connected. |
| `--fp-state-danger` | `#F05252` | APPROVED | Error / destructive / danger (system). Red #F05252 on charcoal: AA 5.17 on bg, 4.85 on panel; light #B91C1C. Separate token from finance.loss (same colour, different meaning). |
| `--fp-state-warning` | `#D9A441` | PROPOSED | Warning / pending / attention. AA 8.92 on bg. |
| `--fp-state-info` | `#5B9BD5` | PROPOSED | Informational. AA 6.78 on bg. |
| `--fp-state-success-wash` | `rgba(42,179,122,0.12)` | PROPOSED | color.state.success-wash |
| `--fp-state-danger-wash` | `rgba(220,38,38,0.12)` | APPROVED | color.state.danger-wash |
| `--fp-state-warning-wash` | `rgba(217,164,65,0.12)` | PROPOSED | color.state.warning-wash |
| `--fp-state-info-wash` | `rgba(91,155,213,0.12)` | PROPOSED | color.state.info-wash |
| `--fp-finance-gain` | `#2AB37A` | OBSERVED | Gain / up movement of a value. Always word + '+' + colour. |
| `--fp-finance-loss` | `#F05252` | APPROVED | Loss / down movement of a VALUE (a market fact). Red #F05252 on charcoal; light #B91C1C. finance.loss ≠ state.danger in meaning, same colour. |
| `--fp-finance-neutral` | `#8E8681` | ALIAS | Unchanged / 0.00 / no data. |
| `--fp-finance-pending` | `#D9A441` | ALIAS | Pending settlement / awaiting. |
| `--fp-chart-series-1` | `#DC2626` | PROPOSED | Primary series (the brand). One brand-red series per chart at most. |
| `--fp-chart-series-2` | `#EDEAE6` | PROPOSED | color.chart.series-2 |
| `--fp-chart-series-3` | `#8E8681` | PROPOSED | color.chart.series-3 |
| `--fp-chart-series-4` | `#D9A441` | PROPOSED | color.chart.series-4 |
| `--fp-chart-series-5` | `#5B9BD5` | PROPOSED | color.chart.series-5 |
| `--fp-chart-series-6` | `#2AB37A` | PROPOSED | color.chart.series-6 |
| `--fp-chart-candle-up` | `#2AB37A` | ALIAS | color.chart.candle-up |
| `--fp-chart-candle-down` | `#F05252` | ALIAS | color.chart.candle-down |
| `--fp-chart-grid` | `rgba(237,234,230,0.07)` | PROPOSED | color.chart.grid |
| `--fp-chart-axis` | `#8E8681` | ALIAS | color.chart.axis |
| `--fp-chart-crosshair` | `rgba(237,234,230,0.35)` | PROPOSED | color.chart.crosshair |
| `--fp-chart-area-fill` | `rgba(220,38,38,0.12)` | PROPOSED | Fill under the primary line. |
| `--fp-chart-benchmark` | `#8E8681` | ALIAS | Benchmark / index line, dashed. |
| `--fp-media-grade` | `rgba(10,7,8,0.08)` | APPROVED | Image grade overlay: 8 % warm charcoal over the asset; applied as a flat layer, never a red or warm colour cast. |
| `--fp-font-family-display` | `Barlow Condensed, sans-serif` | APPROVED | Latin display: uppercase headlines, stats, wordmark-style labels, weights 600/700/800. APPROVED (decision item 1, CEO 30 Oct 2026). |
| `--fp-font-family-body` | `Inter, sans-serif` | APPROVED | Latin body / UI, weights 400–700. |
| `--fp-font-family-mono` | `IBM Plex Mono, monospace` | OBSERVED | Tabular numbers, codes, eyebrows. Weights 400/600. Never for running text. |
| `--fp-font-family-arabic` | `IBM Plex Sans Arabic, Inter, sans-serif` | APPROVED | Arabic UI + body + headings, weights 400/500/600/700. Standing decision 27 Oct 2026 (replaces Cairo). The complete official font file includes Latin + digits, so digits inside Arabic runs never fall back. |
| `--fp-font-family-sans-alt` | `IBM Plex Sans, sans-serif` | PROPOSED | Alternative Latin pair (decision item 1 option B). Shipped, not active. |
| `--fp-font-family-deprecated-arabic` | `Cairo` | DEPRECATED | DEPRECATED for all new surfaces (observed on fiper.io until its round). |
| `--fp-font-weight-regular` | `400` | PROPOSED | font.weight.regular |
| `--fp-font-weight-medium` | `500` | PROPOSED | font.weight.medium |
| `--fp-font-weight-semibold` | `600` | PROPOSED | font.weight.semibold |
| `--fp-font-weight-bold` | `700` | PROPOSED | font.weight.bold |
| `--fp-font-weight-display` | `800` | PROPOSED | Barlow Condensed headings on fiper.io (h1/h2 800). |
| `--fp-font-size-xs` | `0.68rem` | OBSERVED | Disclaimer / eyebrow (10.9px). |
| `--fp-font-size-sm` | `0.75rem` | OBSERVED | Caption, table meta, card stat line (12px). |
| `--fp-font-size-md` | `0.85rem` | OBSERVED | Secondary body, nav links, card body (13.6px). |
| `--fp-font-size-base` | `0.92rem` | OBSERVED | Button label; app body default (14.7px). |
| `--fp-font-size-lg` | `0.98rem` | OBSERVED | Lead paragraph (15.7px). |
| `--fp-font-size-xl` | `1.3rem` | OBSERVED | Card title h3 (20.8px). |
| `--fp-font-size-2xl` | `1.9rem` | OBSERVED | Stat number minimum (30.4px) — fluid up to 3rem. |
| `--fp-font-size-3xl` | `2rem` | OBSERVED | h2 minimum (32px) — fluid clamp(2rem,4.6vw,3.1rem). |
| `--fp-font-size-4xl` | `2.9rem` | OBSERVED | h1 minimum (46.4px) — fluid clamp(2.9rem,8.2vw,6rem). |
| `--fp-font-size-app-caption` | `12px` | PROPOSED | font.size.app-caption |
| `--fp-font-size-app-body` | `15px` | PROPOSED | Mobile body (Arabic needs ≥15px). |
| `--fp-font-size-app-title` | `20px` | PROPOSED | font.size.app-title |
| `--fp-font-size-app-display` | `28px` | PROPOSED | Balance / hero number on mobile. |
| `--fp-font-lineHeight-body` | `1.65` | OBSERVED | font.lineHeight.body |
| `--fp-font-lineHeight-heading` | `1.05` | OBSERVED | Latin display headings. |
| `--fp-font-lineHeight-arabic-body` | `1.9` | OBSERVED | font.lineHeight.arabic-body |
| `--fp-font-lineHeight-arabic-heading` | `1.3` | OBSERVED | Arabic h1 (h2 1.45; card titles 1.5). |
| `--fp-font-lineHeight-legal` | `1.7` | OBSERVED | font.lineHeight.legal |
| `--fp-font-letterSpacing-heading` | `0.5px` | OBSERVED | font.letterSpacing.heading |
| `--fp-font-letterSpacing-eyebrow` | `0.06em` | PROPOSED | Latin eyebrow / small label tracking (Inter 600, uppercase). The site's .28em mono eyebrow is an observed marketing treatment, not applied in the system. |
| `--fp-font-letterSpacing-tag` | `0.2em` | OBSERVED | OBSERVED .2em tracking of the site's .core chip — documentation only, NOT applied (chips use letterSpacing.eyebrow .06em). |
| `--fp-font-letterSpacing-arabic` | `0` | APPROVED | Arabic is NEVER letter-spaced — 0 everywhere including eyebrows and labels (the site's .02em on html[lang=ar] .eyebrow is a source observation, not a rule). |
| `--fp-space-1` | `4px` | PROPOSED | space.1 |
| `--fp-space-2` | `8px` | PROPOSED | space.2 |
| `--fp-space-3` | `12px` | PROPOSED | space.3 |
| `--fp-space-4` | `16px` | PROPOSED | space.4 |
| `--fp-space-5` | `20px` | PROPOSED | space.5 |
| `--fp-space-6` | `24px` | PROPOSED | space.6 |
| `--fp-space-7` | `28px` | PROPOSED | space.7 |
| `--fp-space-8` | `32px` | PROPOSED | space.8 |
| `--fp-space-10` | `40px` | PROPOSED | space.10 |
| `--fp-space-12` | `48px` | PROPOSED | space.12 |
| `--fp-space-16` | `64px` | PROPOSED | space.16 |
| `--fp-space-24` | `96px` | PROPOSED | space.24 |
| `--fp-space-30` | `120px` | PROPOSED | space.30 |
| `--fp-space-btn-y` | `14px` | OBSERVED | space.btn-y |
| `--fp-space-btn-x` | `32px` | OBSERVED | space.btn-x |
| `--fp-space-btn-sm-y` | `10px` | OBSERVED | space.btn-sm-y |
| `--fp-space-btn-sm-x` | `22px` | OBSERVED | space.btn-sm-x |
| `--fp-space-card-y` | `26px` | OBSERVED | space.card-y |
| `--fp-space-card-x` | `24px` | OBSERVED | space.card-x |
| `--fp-space-gutter` | `16px` | OBSERVED | Mobile side gutter (nav padding minimum clamp(16px,4vw,44px)). |
| `--fp-space-section-min` | `64px` | OBSERVED | space.section-min |
| `--fp-space-section-max` | `120px` | OBSERVED | space.section-max |
| `--fp-size-wrap-max` | `1200px` | OBSERVED | size.wrap-max |
| `--fp-size-wrap-pct` | `92%` | OBSERVED | size.wrap-pct |
| `--fp-size-logo-nav-h` | `26px` | OBSERVED | size.logo-nav-h |
| `--fp-size-touch-min` | `44px` | PROPOSED | Minimum touch target. |
| `--fp-size-icon-tile` | `52px` | OBSERVED | size.icon-tile |
| `--fp-size-icon-sm` | `16px` | PROPOSED | size.icon-sm |
| `--fp-size-icon-md` | `20px` | PROPOSED | size.icon-md |
| `--fp-size-icon-lg` | `24px` | PROPOSED | size.icon-lg |
| `--fp-size-header-h` | `56px` | PROPOSED | size.header-h |
| `--fp-size-tabbar-h` | `56px` | PROPOSED | + safe-area-inset-bottom |
| `--fp-size-bp-min` | `360px` | PROPOSED | size.bp-min |
| `--fp-size-bp-design` | `390px` | PROPOSED | size.bp-design |
| `--fp-size-bp-sm` | `640px` | OBSERVED | size.bp-sm |
| `--fp-size-bp-md` | `900px` | OBSERVED | size.bp-md |
| `--fp-size-bp-lg` | `1200px` | OBSERVED | size.bp-lg |
| `--fp-radius-pill` | `999px` | OBSERVED | Buttons, chips, language toggle. |
| `--fp-radius-card` | `16px` | OBSERVED | Cards, fund panels, trust grid, trust bar top. |
| `--fp-radius-media` | `14px` | OBSERVED | Screenshots / frames / card artwork / icon tiles. |
| `--fp-radius-sheet` | `18px` | OBSERVED | Video box; bottom sheets (top corners). |
| `--fp-radius-input` | `12px` | PROPOSED | radius.input |
| `--fp-radius-sm` | `8px` | PROPOSED | radius.sm |
| `--fp-radius-logo-mark` | `23%` | APPROVED | Mark corner = 35/152 of the mark width (rx=35 in a 152-unit box). Scales with the mark; never a fixed 35px. |
| `--fp-radius-device` | `22px` | OBSERVED | radius.device |
| `--fp-shadow-primary` | `0 6px 26px rgba(220,38,38,0.35)` | OBSERVED | OBSERVED marketing glow on fiper.io .btn-red — documentation only, NOT applied (emitted as --fp-observed-* and excluded from the Tailwind preset). |
| `--fp-shadow-primary-hover` | `0 10px 36px rgba(220,38,38,0.5)` | OBSERVED | OBSERVED marketing hover glow — documentation only, NOT applied. |
| `--fp-shadow-overlay` | `0 22px 70px rgba(0,0,0,0.55)` | OBSERVED | Sheets, modals, menus. |
| `--fp-shadow-none` | `none` | PROPOSED | shadow.none |
| `--fp-z-base` | `0` | PROPOSED | elevation.base |
| `--fp-z-raised` | `10` | PROPOSED | elevation.raised |
| `--fp-z-sticky` | `20` | PROPOSED | elevation.sticky |
| `--fp-z-header` | `80` | OBSERVED | elevation.header |
| `--fp-z-scrim` | `90` | PROPOSED | elevation.scrim |
| `--fp-z-sheet` | `100` | PROPOSED | elevation.sheet |
| `--fp-z-toast` | `110` | PROPOSED | elevation.toast |
| `--fp-z-tooltip` | `120` | PROPOSED | elevation.tooltip |
| `--fp-motion-duration-press` | `140ms` | OBSERVED | motion.duration.press |
| `--fp-motion-duration-hover` | `250ms` | OBSERVED | motion.duration.hover |
| `--fp-motion-duration-state` | `300ms` | OBSERVED | motion.duration.state |
| `--fp-motion-duration-surface` | `350ms` | OBSERVED | motion.duration.surface |
| `--fp-motion-duration-reveal` | `800ms` | OBSERVED | motion.duration.reveal |
| `--fp-motion-easing-standard` | `0.2, 0.7, 0.2, 1` | OBSERVED | motion.easing.standard |
| `--fp-motion-easing-exit` | `0.22, 1, 0.36, 1` | OBSERVED | motion.easing.exit |
| `--fp-motion-easing-press` | `ease-out` | OBSERVED | motion.easing.press |
| `--fp-motion-press-scale` | `0.97` | OBSERVED | motion.press-scale |
| `--fp-motion-reveal-offset` | `26px` | OBSERVED | motion.reveal-offset |

## Light expression (PROPOSED) — values applied under `[data-theme="light"]`
| Token | Value | Status |
|---|---|---|
| `semantic.color.light.bg` | `#F7F4F1` | APPROVED |
| `semantic.color.light.coal` | `#EFEBE7` | APPROVED |
| `semantic.color.light.panel` | `#FFFFFF` | APPROVED |
| `semantic.color.light.frame` | `#EFEBE7` | APPROVED |
| `semantic.color.light.ash` | `rgba(18,13,14,0.10)` | APPROVED |
| `semantic.color.light.line-strong` | `rgba(18,13,14,0.35)` | APPROVED |
| `semantic.color.light.text` | `#120D0E` | APPROVED |
| `semantic.color.light.muted` | `#6B635E` | APPROVED |
| `semantic.color.light.red-text` | `#B91C1C` | APPROVED |
| `semantic.color.light.success` | `#146A45` | APPROVED |
| `semantic.color.light.danger` | `#B91C1C` | APPROVED |
| `semantic.color.light.warning` | `#7A520A` | APPROVED |
| `semantic.color.light.info` | `#275E94` | APPROVED |
| `semantic.color.light.chart-grid` | `rgba(18,13,14,0.08)` | APPROVED |
| `semantic.color.light.disabled-fg` | `rgba(18,13,14,0.38)` | APPROVED |
| `semantic.color.light.disabled-bg` | `rgba(18,13,14,0.08)` | APPROVED |
| `semantic.color.light.line-solid` | `#E6E1DC` | APPROVED |
| `semantic.color.light.line-solid-2` | `#E9E5E1` | APPROVED |
| `semantic.color.light.line-input` | `rgba(18,13,14,0.55)` | APPROVED |
| `semantic.color.light.chrome` | `rgba(247,244,241,0.85)` | APPROVED |
| `semantic.color.light.bezel` | `#1B1516` | APPROVED |
| `semantic.color.light.line-frame` | `rgba(18,13,14,0.18)` | APPROVED |
| `semantic.color.light.line-brand` | `rgba(220,38,38,0.45)` | APPROVED |
| `semantic.color.light.label` | `#6B635E` | APPROVED |
| `semantic.color.light.risk` | `#6B635E` | APPROVED |
| `semantic.color.light.disclaimer` | `#6B635E` | APPROVED |
| `semantic.color.light.focus-ring` | `#DC2626` | APPROVED |
| `semantic.color.light.selection` | `rgba(220,38,38,0.35)` | APPROVED |
| `semantic.color.light.success-wash` | `rgba(42,179,122,0.08)` | APPROVED |
| `semantic.color.light.danger-wash` | `rgba(220,38,38,0.08)` | APPROVED |
| `semantic.color.light.warning-wash` | `rgba(217,164,65,0.08)` | APPROVED |
| `semantic.color.light.info-wash` | `rgba(91,155,213,0.08)` | APPROVED |
| `semantic.color.light.chart-axis` | `#6B635E` | APPROVED |
| `semantic.color.light.chart-benchmark` | `#6B635E` | APPROVED |
| `semantic.color.light.chart-crosshair` | `rgba(18,13,14,0.35)` | APPROVED |
| `semantic.color.light.chart-area-fill` | `rgba(220,38,38,0.12)` | APPROVED |
| `semantic.color.light.divider` | `rgba(18,13,14,0.22)` | APPROVED |
| `semantic.color.light.scrim` | `rgba(18,13,14,0.55)` | APPROVED |
| `semantic.color.light.neutral` | `#6B635E` | APPROVED |
| `semantic.color.light.chart-series-2` | `#120D0E` | APPROVED |
| `semantic.color.light.chart-series-3` | `#6B635E` | APPROVED |
| `semantic.color.light.chart-series-4` | `#7A520A` | APPROVED |
| `semantic.color.light.chart-series-5` | `#275E94` | APPROVED |
| `semantic.color.light.chart-series-6` | `#146A45` | APPROVED |

## Component tokens
| Variable | Value | Status |
|---|---|---|
| `--fp-c-button-primary-fill` | `linear-gradient(120deg, #DC2626, #A31212)` | OBSERVED |
| `--fp-c-button-primary-text` | `#FFFFFF` | ALIAS |
| `--fp-c-button-primary-icon` | `#FFFFFF` | ALIAS |
| `--fp-c-button-primary-shadow` | `none` | PROPOSED |
| `--fp-c-button-primary-shadow-hover` | `none` | PROPOSED |
| `--fp-c-button-primary-fill-pressed` | `#7A1512` | ALIAS |
| `--fp-c-button-primary-radius` | `999px` | ALIAS |
| `--fp-c-button-primary-padding-y` | `14px` | ALIAS |
| `--fp-c-button-primary-padding-x` | `32px` | ALIAS |
| `--fp-c-button-primary-font-size` | `0.92rem` | ALIAS |
| `--fp-c-button-primary-font-weight` | `700` | ALIAS |
| `--fp-c-button-primary-press-scale` | `0.97` | ALIAS |
| `--fp-c-button-primary-press-duration` | `140ms` | ALIAS |
| `--fp-c-button-secondary-fill` | `#171112` | ALIAS |
| `--fp-c-button-secondary-border` | `rgba(237,234,230,0.35)` | ALIAS |
| `--fp-c-button-secondary-text` | `#EDEAE6` | ALIAS |
| `--fp-c-button-ghost-border` | `rgba(237,234,230,0.09)` | OBSERVED |
| `--fp-c-button-ghost-border-hover` | `rgba(237,234,230,0.35)` | ALIAS |
| `--fp-c-button-ghost-text` | `#EDEAE6` | ALIAS |
| `--fp-c-button-destructive-fill` | `#F05252` | PROPOSED |
| `--fp-c-button-destructive-text` | `#0A0708` | ALIAS |
| `--fp-c-button-destructive-default-style` | `outline or text — never filled` | APPROVED |
| `--fp-c-button-destructive-fill-scope` | `final-confirmation-dialog-only` | APPROVED |
| `--fp-c-button-disabled-fill` | `rgba(237,234,230,0.08)` | ALIAS |
| `--fp-c-button-disabled-text` | `rgba(237,234,230,0.38)` | ALIAS |
| `--fp-c-button-focus-ring` | `#F0421B` | ALIAS |
| `--fp-c-button-min-height` | `44px` | ALIAS |
| `--fp-c-button-small-padding-y` | `10px` | ALIAS |
| `--fp-c-button-small-padding-x` | `22px` | ALIAS |
| `--fp-c-button-small-font-size` | `0.82rem` | OBSERVED |
| `--fp-c-input-fill` | `#120D0E` | PROPOSED |
| `--fp-c-input-border` | `rgba(237,234,230,0.40)` | PROPOSED |
| `--fp-c-input-border-error` | `#F05252` | ALIAS |
| `--fp-c-input-text` | `#EDEAE6` | ALIAS |
| `--fp-c-input-placeholder` | `#8E8681` | ALIAS |
| `--fp-c-input-radius` | `12px` | ALIAS |
| `--fp-c-input-font-size` | `15px` | ALIAS |
| `--fp-c-input-min-height` | `44px` | ALIAS |
| `--fp-c-input-padding` | `12px 14px` | PROPOSED |
| `--fp-c-input-otp-width` | `44px` | PROPOSED |
| `--fp-c-input-otp-height` | `52px` | PROPOSED |
| `--fp-c-input-otp-font-size` | `22px` | PROPOSED |
| `--fp-c-input-otp-gap` | `8px` | PROPOSED |
| `--fp-c-input-otp-active-border` | `#F0421B` | ALIAS |
| `--fp-c-card-fill` | `#171112` | OBSERVED |
| `--fp-c-card-border` | `rgba(237,234,230,0.09)` | ALIAS |
| `--fp-c-card-border-hover` | `rgba(220,38,38,0.45)` | ALIAS |
| `--fp-c-card-radius` | `16px` | ALIAS |
| `--fp-c-card-padding-y` | `26px` | ALIAS |
| `--fp-c-card-padding-x` | `24px` | ALIAS |
| `--fp-c-card-title-size` | `1.3rem` | ALIAS |
| `--fp-c-table-header-fill` | `#120D0E` | ALIAS |
| `--fp-c-table-header-text` | `#8E8681` | ALIAS |
| `--fp-c-table-row-line` | `rgba(237,234,230,0.09)` | ALIAS |
| `--fp-c-table-row-height` | `48px` | PROPOSED |
| `--fp-c-table-row-height-compact` | `40px` | PROPOSED |
| `--fp-c-table-row-selected` | `rgba(220,38,38,0.06)` | ALIAS |
| `--fp-c-table-number-font` | `IBM Plex Mono,monospace` | ALIAS |
| `--fp-c-chip-height` | `24px` | PROPOSED |
| `--fp-c-chip-brand-height` | `20px` | OBSERVED |
| `--fp-c-chip-radius` | `999px` | ALIAS |
| `--fp-c-chip-wash-alpha` | `0.12` | PROPOSED |
| `--fp-c-chip-sharia-fill` | `rgba(42,179,122,0.12)` | ALIAS |
| `--fp-c-chip-sharia-text` | `#2AB37A` | PROPOSED |
| `--fp-c-toast-fill` | `#120D0E` | ALIAS |
| `--fp-c-toast-border` | `rgba(237,234,230,0.35)` | ALIAS |
| `--fp-c-toast-accent-width` | `3px` | PROPOSED |
| `--fp-c-toast-max-width` | `420px` | PROPOSED |
| `--fp-c-toast-duration` | `300ms` | ALIAS |
| `--fp-c-toast-auto-dismiss` | `5000ms` | PROPOSED |
| `--fp-c-tabbar-height` | `56px` | ALIAS |
| `--fp-c-tabbar-fill` | `rgba(10,7,8,0.92)` | PROPOSED |
| `--fp-c-tabbar-blur` | `14px` | OBSERVED |
| `--fp-c-tabbar-active` | `#DC2626` | ALIAS |
| `--fp-c-tabbar-inactive` | `#8E8681` | ALIAS |
| `--fp-c-tabbar-label-size` | `11px` | PROPOSED |
| `--fp-c-tabbar-icon-size` | `24px` | ALIAS |
| `--fp-c-header-height` | `56px` | ALIAS |
| `--fp-c-header-fill` | `rgba(10,7,8,0.85)` | OBSERVED |
| `--fp-c-header-border` | `rgba(237,234,230,0.09)` | ALIAS |
| `--fp-c-header-logo-height` | `26px` | ALIAS |
| `--fp-c-header-descriptor-min-width` | `640px` | APPROVED |
| `--fp-c-sheet-fill` | `#171112` | ALIAS |
| `--fp-c-sheet-radius` | `18px` | ALIAS |
| `--fp-c-sheet-scrim` | `rgba(10,7,8,0.72)` | PROPOSED |
| `--fp-c-sheet-shadow` | `0 22px 70px rgba(0,0,0,0.55)` | ALIAS |
| `--fp-c-sheet-handle` | `36px 4px` | PROPOSED |
| `--fp-c-sheet-in-duration` | `350ms` | ALIAS |
| `--fp-c-skeleton-fill` | `rgba(237,234,230,0.09)` | ALIAS |
| `--fp-c-skeleton-pulse-duration` | `1200ms` | PROPOSED |
| `--fp-c-skeleton-pulse-min-opacity` | `0.45` | PROPOSED |
| `--fp-c-skeleton-show-after` | `150ms` | PROPOSED |
| `--fp-c-skeleton-min-visible` | `400ms` | PROPOSED |
| `--fp-c-chart-background` | `#171112` | ALIAS |
| `--fp-c-chart-grid` | `rgba(237,234,230,0.07)` | ALIAS |
| `--fp-c-chart-axis-text` | `#8E8681` | ALIAS |
| `--fp-c-chart-axis-font-size` | `0.68rem` | ALIAS |
| `--fp-c-chart-line-width` | `2px` | PROPOSED |
| `--fp-c-chart-candle-body` | `10px` | PROPOSED |
| `--fp-c-chart-candle-wick` | `1px` | PROPOSED |
| `--fp-c-chart-up` | `#2AB37A` | ALIAS |
| `--fp-c-chart-down` | `#F05252` | ALIAS |
| `--fp-c-chart-benchmark-dash` | `4 4` | PROPOSED |
| `--fp-c-eyebrow-font` | `Inter,sans-serif` | PROPOSED |
| `--fp-c-eyebrow-size` | `0.75rem` | PROPOSED |
| `--fp-c-eyebrow-weight` | `600` | PROPOSED |
| `--fp-c-eyebrow-letter-spacing` | `0.06em` | PROPOSED |
| `--fp-c-eyebrow-color` | `#8E8681` | PROPOSED |
| `--fp-c-eyebrow-prefix` | `` | DEPRECATED |
| `--fp-c-eyebrow-arabic-font` | `IBM Plex Sans Arabic,Inter,sans-serif` | APPROVED |
| `--fp-c-eyebrow-arabic-weight` | `600` | PROPOSED |
| `--fp-c-eyebrow-arabic-letter-spacing` | `0` | APPROVED |
| `--fp-c-logo-nav-height` | `26px` | ALIAS |
| `--fp-c-logo-master-file` | `logos/svg/fiper-lockup-horizontal-colour.svg` | APPROVED |
| `--fp-c-logo-wordmark-v2-0` | `fiper-lockup-white.svg (dotless i, fiper.io master)` | DEPRECATED |
| `--fp-c-logo-clear-space` | `0.5` | PROPOSED |
| `--fp-c-logo-min-lockup-screen` | `20px` | PROPOSED |
| `--fp-c-logo-min-lockup-print` | `6mm` | PROPOSED |
| `--fp-c-logo-min-mark-screen` | `16px` | PROPOSED |
| `--fp-c-logo-min-mark-print` | `4mm` | PROPOSED |
| `--fp-c-logo-aspect` | `2.851` | APPROVED |
| `--fp-c-logo-mark-aspect` | `0.987` | APPROVED |
| `--fp-c-logo-mark-radius-ratio` | `23%` | APPROVED |
| `--fp-c-logo-gap-to-wordmark` | `0.156` | APPROVED |
| `--fp-c-logo-product-lockup-name-height` | `0.62` | PROPOSED |
| `--fp-c-logo-product-lockup-gap` | `0.4` | PROPOSED |
| `--fp-c-logo-product-lockup-by-fiper-lockup-height` | `0.5` | PROPOSED |
| `--fp-c-logo-product-lockup-partner-logo-height` | `1.0` | PROPOSED |
| `--fp-c-logo-video-corner-height` | `96px` | ALIAS |
| `--fp-c-video-logo-corner-height` | `96px` | APPROVED |
| `--fp-c-video-logo-corner-inset` | `64px` | APPROVED |
| `--fp-c-video-lower-third-hold` | `3400ms` | APPROVED |
| `--fp-c-video-lower-third-count` | `1` | APPROVED |
| `--fp-c-video-reveal-easing` | `0.2,0.7,0.2,1` | APPROVED |
| `--fp-c-video-fade-easing` | `linear` | APPROVED |
| `--fp-c-video-risk-line-size-1080` | `24px` | APPROVED |
| `--fp-c-video-risk-line-size-1920` | `22px` | APPROVED |
| `--fp-c-video-risk-line-placement-9x16` | `side-left-rotated` | APPROVED |
| `--fp-c-video-risk-line-placement-16x9` | `bottom-start` | APPROVED |
| `--fp-c-video-risk-line-color` | `rgba(237,234,230,0.28)` | APPROVED |
| `--fp-c-video-risk-line-presence` | `first-to-last-frame` | APPROVED |
| `--fp-c-video-corner-mark-fade` | `300ms` | APPROVED |
| `--fp-c-video-corner-word-delay` | `150ms` | APPROVED |
| `--fp-c-video-transition-fade` | `240ms` | APPROVED |
| `--fp-c-video-transition-opacity` | `0.9` | APPROVED |
| `--fp-c-video-grain-opacity-min` | `0.04` | APPROVED |
| `--fp-c-video-grain-opacity-max` | `0.06` | APPROVED |
| `--fp-c-video-grain-fps` | `24` | APPROVED |
| `--fp-c-video-vignette-max` | `0.45` | APPROVED |
| `--fp-c-video-entity-line` | `Fiper Global UAE — Company registration number: 2422384` | APPROVED |
| `--fp-c-video-master-encode` | `H.264 CRF 16 preset slow, AAC 256k, yuv420p, faststart` | APPROVED |
| `--fp-c-video-share-encode` | `H.264 CRF 21, maxrate 10M, bufsize 20M, AAC 256k, faststart` | APPROVED |
| `--fp-c-video-fps` | `30` | APPROVED |
| `--fp-c-video-closing-card` | `none` | APPROVED |
| `--fp-c-video-logo-presence-official` | `first-to-last-frame` | APPROVED |
| `--fp-c-video-logo-presence-person` | `none` | APPROVED |
| `--fp-c-video-entity-line-placement` | `caption` | APPROVED |
| `--fp-c-video-entity-line-placement-person` | `inside-risk-line` | APPROVED |
| `--fp-c-video-caption-emphasis-danger` | `#F05252` | APPROVED |
| `--fp-c-video-caption-emphasis-profit` | `#2AB37A` | APPROVED |
| `--fp-c-video-caption-emphasis-info` | `#D9A441` | APPROVED |
| `--fp-c-video-lower-third-total-max` | `4000ms` | APPROVED |
| `--fp-c-video-lower-third-placement-9x16` | `bottom-centre` | APPROVED |
| `--fp-c-video-lower-third-bottom-9x16` | `80%` | APPROVED |
| `--fp-c-video-takeaway-size-1080` | `76px` | APPROVED |
| `--fp-c-video-takeaway-side-margin-1080` | `130px` | APPROVED |
| `--fp-c-video-title-card-size-1080` | `76px` | APPROVED |
| `--fp-c-video-title-card-side-margin-1080` | `130px` | APPROVED |
| `--fp-c-video-caption-max-chars` | `26` | APPROVED |
| `--fp-c-video-caption-during-takeaway` | `hide-matching-group` | APPROVED |
| `--fp-c-video-caption-text-source` | `spoken-as-recorded` | APPROVED |
| `--fp-c-video-non-native-aspect` | `blurred-source-backdrop` | APPROVED |
| `--fp-c-video-entity-line-mau` | `Fiper Global MAU — Company registration number: GB23201759` | APPROVED |
| `--fp-c-video-entity-line-person` | `Fiper Global — Company registration number GB23201759` | APPROVED |
| `--fp-c-email-logo-width` | `160px` | APPROVED |
| `--fp-c-email-logo-height` | `56px` | APPROVED |
| `--fp-c-email-logo-file` | `email/email-header-160-paper@2x.png` | APPROVED |
| `--fp-c-email-logo-ground` | `#F7F4F1` | APPROVED |
| `--fp-c-email-scheme` | `paper-only` | APPROVED |
| `--fp-c-email-language-parity` | `recipient-language + one equivalence line` | APPROVED |
| `--fp-c-email-equivalence-line-ar` | `هذه الرسالة متاحة بالعربية` | APPROVED |
| `--fp-c-email-equivalence-line-en` | `This e-mail is also available in English` | APPROVED |
| `--fp-c-social-safe-margin-post-min` | `72px` | APPROVED |
| `--fp-c-social-safe-margin-post-max` | `84px` | APPROVED |
| `--fp-c-social-safe-margin-story` | `96px` | APPROVED |
| `--fp-c-social-risk-line-size` | `33px` | APPROVED |
| `--fp-c-social-risk-line` | `الاستثمار ينطوي على مخاطر · Investing involves risk` | APPROVED |
| `--fp-c-qr-side-ratio` | `0.12` | APPROVED |
| `--fp-c-qr-min-side` | `160px` | APPROVED |
| `--fp-c-qr-quiet-zone` | `4` | APPROVED |
| `--fp-c-qr-position` | `bottom-start` | APPROVED |
| `--fp-c-qr-max-side` | `300px` | APPROVED |
| `--fp-c-media-asset-types` | `screen \| artwork` | APPROVED |
| `--fp-c-media-grade` | `rgba(10,7,8,0.08)` | APPROVED |
| `--fp-c-media-frame-bezel` | `#1B1516` | APPROVED |
| `--fp-c-risk-line-text` | `الاستثمار ينطوي على مخاطر · Investing involves risk` | APPROVED |
| `--fp-c-risk-line-text-ar` | `الاستثمار ينطوي على مخاطر` | APPROVED |
| `--fp-c-risk-line-text-en` | `Investing involves risk` | APPROVED |
| `--fp-c-risk-line-placement` | `side or bottom corner inside the safe margin; never over the subject or the headline; never hidden` | APPROVED |
| `--fp-c-risk-line-color` | `#8E8681` | APPROVED |
| `--fp-c-risk-line-min-size-1080` | `12px` | APPROVED |
| `--fp-c-risk-line-min-size-2160` | `24px` | APPROVED |
| `--fp-c-risk-line-min-size-social-360` | `11px` | APPROVED |
| `--fp-c-risk-line-document-size` | `8pt` | APPROVED |
| `--fp-c-risk-line-email-size` | `11px` | APPROVED |

## Deprecated (never use)
| Token | Value | Why |
|---|---|---|
| `primitive.color.deprecated.old-kit-red` | `#F42821` | earlier fiper-tokens.css; now FPT-only (task file) |
| `primitive.color.deprecated.old-kit-red-dark` | `#A30100` | earlier fiper-tokens.css |
| `primitive.color.deprecated.old-kit-black` | `#0A0A0A` | earlier fiper-tokens.css; replaced by charcoal-950 #0A0708 |
| `primitive.color.deprecated.old-loss-coral` | `#E8785A` | CEO decision 30 Oct 2026 — loss / danger colour is RED (v2.2.0); the v2.0 coral is never used again |
| `primitive.color.deprecated.old-loss-coral-light` | `#A33D24` | CEO decision 30 Oct 2026 — loss / danger colour is RED (v2.2.0); the v2.0 coral is never used again |
| `primitive.color.deprecated.old-loss-coral-wash` | `rgba(232,120,90,0.12)` | CEO decision 30 Oct 2026 — loss / danger colour is RED (v2.2.0); the v2.0 coral is never used again |
| `semantic.font.family.deprecated-arabic` | `Cairo` | capture 2026-10-29, https://fiper.io/ index.html md5 7628659a07bb6e98407b61f776c100c4 line 259 html[lang=ar] body font-family Cairo |
| `component.eyebrow.prefix` | `` | v2.0 approved direction — labels carry no prefix |
| `component.logo.wordmark-v2-0` | `fiper-lockup-white.svg (dotless i, fiper.io master)` | CEO decision 30 Oct 2026 (logo refinement); https://fiper.io/logos/fiper-white.svg md5 71f488d6afe1324a9757625efad13893 |
