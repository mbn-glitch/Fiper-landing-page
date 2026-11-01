# Icon registry — additions to the vendored Lucide subset (v2.2.0, Q12 — accepted by the CEO on 30 Oct 2026)

Same version (lucide-static 0.468.0, ISC), unmodified files, one meaning each, consumed through the sprite (`scripts/lucide-sprite.mjs`) so the whole layer can be swapped for a bespoke set later without touching a surface. Source of the list: Fiper Creative Studio `docs/IDENTITY_CONFORMANCE.md` § 2.9. The base subset (71 icons) stays in `ICONS.md`; the files below are vendored next to it in `icons/lucide/`.

| Icon (added) | Meaning (one per icon) |
|---|---|
| `chart-column` | results / outcomes |
| `book-open-text` | facts / knowledge base |
| `calendar-days` | studio booking / schedule |
| `clipboard-check` | compliance review |
| `clapperboard` | shoot / production pipeline |
| `film` | videos |
| `gavel` | jury / committee |
| `images` | assets library |
| `megaphone` | campaigns |
| `message-square-text` | partner editor / comments |
| `palette` | design |
| `pen-line` | writers / copy |
| `scroll-text` | scripts |
| `server-cog` | system |
| `sliders-horizontal` | settings |
| `sparkles` | generation (AI) |
| `users` | partners / people |
| `inbox` | empty state |
| `wifi-off` | offline |

Already in the base subset and reused by the Studio with their registered meaning: `check`, `x`, `clock`, `upload`, `chevron-left`, `log-out`, `house`, `user`, `wallet`, `activity`, `chart-line`, `file-text`, `menu`, `share-2`, `triangle-alert`.

Total vendored after v2.2.0: 90 icons + LICENSE. Adding an icon = copy the unmodified file from `lucide-static@0.468.0`, add a row here with its single meaning, rebuild the sprite; never a second icon for the same meaning, never a filled variant.
