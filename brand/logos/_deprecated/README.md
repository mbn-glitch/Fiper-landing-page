# brand/logos/_deprecated — superseded files kept for provenance (never reference them)

| File | Superseded in | By | Why |
|---|---|---|---|
| `email/email-header-120@2x.png`, `email/email-header-160@2x.png` | v2.3.4 (1 Nov 2026) | `logos/email/email-header-{120,160}-paper[@2x].png` | the dark lockup sat on an **opaque white** box while the mail shell is paper `#F7F4F1` (invoices defect FI7-017, every paper mail in the system) |
| `email/email-header-120-dark@2x.png`, `email/email-header-160-dark@2x.png` | v2.3.4 | — (no dark header: mails ship one paper rendering in every mode, CEO 31 Oct 2026) | the dark-scheme swap was retired in v2.3.2; the file had no consumer |

Gates: `verify-identity` OLD-EMAIL-HEADER refuses any reference to these files outside this folder; `check-emails` refuses them by name and by pixel (an opaque white corner); `verify-logo-pack` fails if one of them is still inside `logos/email/`. Rollout: `dist/consumers/LOGO-ROLLOUT-STATUS.md` § v2.3.4.
