# Anti-AI-tells checklist (binding) — Fiper Brand v2.0

Each tell: the rule, why it reads as generated, and how to detect it. All must pass before any Fiper surface ships — and passing this blocklist is **not** proof of a non-generic design: every surface is reviewed visually (item 20). One command covers 1, 2, 3, 4, 5, 6, 7, 9, 15–18: `node brand/scripts/verify-identity.mjs src public` → `→ PASS`.

| # | Tell (never) | Rule | Detect |
|---|---|---|---|
| 1 | Pure `#000` grounds | Ground is `#0A0708` (warm black); surfaces `#120D0E` / `#171112` | `grep -rnE "#000\b|#000000|rgb\(0, ?0, ?0\)|\bblack\b" src/ templates/` → 0 (comments excluded) |
| 2 | Monospace outside numbers / code | IBM Plex Mono only on `.fp-num`, `code`, OTP boxes — never eyebrows, labels, table headers, headings, captions (the site's mono eyebrow is a source observation, not adopted) | `grep -rn "Plex Mono\|monospace\|font-mono" src/` → every hit on `.fp-num` / `code` / OTP; verify-identity MONO-ON-LABEL = 0 |
| 3 | Brand red for decoration, small labels or as a button-like figure | Red = its roles only: logo tile, the one primary action, the active state — plus the exempt finance red for a real loss (`--fp-finance-loss`, word + sign, Plex Mono, never on a red ground) (no slash label prefix exists in v2.0; the former slash prefix); labels `--fp-text-label`; loss = `--fp-finance-loss`; never red to emphasise a number | `grep -rn "fp-brand-red\|#DC2626" src/` reviewed; render a negative P&L row → colour `#E8785A` |
| 4 | ISO timestamps in UI | Human date + time + zone | `grep -rnE "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}" dist/ templates/` → 0 in visible text |
| 5 | Purple / neon / multi-colour gradients | One gradient: primary button `120deg #DC2626 → #A31212`; logo keeps its own | `grep -rniE "gradient" src/ \| grep -viE "DC2626|A31212|fp-brand|220,38,38"` → 0; `grep -rniE "#[89A-F][0-9A-F]?[0-9A-F]?[0-9A-F]?(F|E)[0-9A-F]|purple|violet|indigo|cyan|neon" src/` → 0 |
| 6 | Glow, halo, neon around buttons / cards, sparkles, pulsing halos | No glow anywhere in the system (`--fp-c-button-primary-shadow: none`; the site's button glow is observed-not-applied); marketing: only the fiper.io radial wash `rgba(220,38,38,.16)` | `grep -rnE "blur\(|drop-shadow\(|box-shadow" src/` → only `--fp-shadow-overlay`; verify-identity RED-GLOW = 0; `grep -rn "@keyframes" src/` → none pulsing opacity |
| 7 | Hype emojis, Unicode symbols as icons | No emoji; no ■ ◔ ▲ ✓ as product/navigation icons (Lucide only, `icons/ICONS.md`); ✓/✕ only as text marks in sentences | `grep -rnP "[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B50}\x{2705}]" src/ templates/` → 0 |
| 8 | Generic stock hero scenes, "tech" backgrounds, decorative graphics without information | Real product (official card artwork, composited real screens) or a generated environment with no people, no text; no grids/particles/circuit lines/abstract waves | review every image: has it a real Fiper asset or the brand ground? does every graphic carry information? |
| 9 | Letter-spaced Arabic; over-tracked Latin caps | Arabic `letter-spacing: 0` everywhere, no exception; Latin uppercase labels ≤ `.06em` | `grep -rn "letter-spacing" src/` → 0 under `[lang=ar]` / `[dir=rtl]`; verify-identity ARABIC-LETTER-SPACING + LATIN-LETTER-SPACING = 0 |
| 10 | Invented statistics | Only figures from fiper.io or live data; placeholders obviously fake (`1,250.00`) and labelled «بيانات تجريبية / Sample data» | review literals: `grep -rnE "[0-9]{2,}[%+]" src/i18n templates/` each sourced |
| 10a | Implied certificates / certifiers | Sharia badge only for a documented `compliant` state; certifier named only from the data | render a fund with `certifier: null` |
| 11 | Fake bold / synthesized italics in Arabic | real weights only | `font-synthesis: none` present |
| 12 | 3D glossy icons, icon fonts, duotone, mixed line/filled styles | Lucide v0.468.0 line icons only, one meaning per icon | `grep -rn "fontawesome\|material-icons\|phosphor\|heroicons" package.json src/` → 0; `fill="` on an icon path reviewed |
| 13 | Walls of centred text, decorative dividers, "✨ Premium" labels | left/start-aligned body, hairline dividers, `.core` chip only | review |
| 14 | Floating / tilting cards and parallax in apps | fiper.io marketing only | `grep -rn "cardfloat\|perspective(" src/` → 0 in apps |
| 15 | Futuristic / decorative / "tech" display fonts, fake tech headings | Barlow Condensed (headline voice), Inter, IBM Plex Mono (numbers/code), IBM Plex Sans Arabic — nothing else | verify-identity NON-BRAND-FONT = 0 |
| 16 | One template for everything: repeated boxes, hairline border around every block, tiny labels, equal tiles | Composition varies by function on one grid/spacing/hierarchy (`references/composition-rules.md`) | visual review of 3+ screen types side by side |
| 17 | Modified logo versions (recoloured, cropped, outlined) | Official files only (`logos/README.md`); `_unapproved-proposals/` never referenced | verify-identity UNAPPROVED-LOGO = 0; `md5sum` |
| 18 | Financial red for emphasis (a gain shown in red) | gain = ▲ + word + success colour; loss = ▼ + word + loss colour; `finance.loss` ≠ `state.danger`; zero ≠ missing | render a gain; computed colour ≠ `#DC2626` |
| 19 | "Tested in dark-mode clients" without client, version, evidence | Chromium emulation of `prefers-color-scheme: dark` = browser preview only; real clients NOT TESTED unless evidenced (`templates/email/TEST-MATRIX.md`) | read the claim; demand the evidence path |
| 20 | Calling a design non-generated because the blocklist passed | Visual review by a human against items 1–19 before release | reviewer initials + date in the release note |

## v2.0 additions (approved composition)
| # | Tell | Rule | Detection |
|---|---|---|---|
| 21 | Slash label prefix, decorative numbering, technical eyebrows (historical fiper.io treatments) | labels only where they name a value; numbers only for real sequences | `grep -rnE "(^|>)\s*//\s*[^/ ]" src/ templates/ --include=*.html --include=*.tsx --include=*.svg` → 0 |
| 22 | One template everywhere: small logo, big headline, wide void, dividing lines | three poles, one dominant element, supporting information at readable size | visual review per surface type against `references/composition-rules.md` § 3 and § 7 |
| 23 | Box around everything | a box groups related information or bounds an action, nothing else | count boxes and name each one's job |
| 24 | Relabelled chart (path does not match its labels) | charts generated from `sample-data.mjs` by `charts.mjs` | `grep -rn "data-chart=" rendered.html`; compare labelled start/end values with the dataset |
| 25 | `%` or currency code separated from its number in Arabic text | `.fp-unit` / `<bdi class="num">`, nowrap, isolate | render at 320–390 px and in the PDF; `getClientRects().length === 1` per unit |
| 26 | Social body text unreadable at phone size | essential body ≥ 42 px on 1080 (≈ 14 px at 360); shorten or split | open the export at actual size, no zoom |
