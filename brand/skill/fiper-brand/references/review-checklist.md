# Review checklist pointer — Fiper Brand v2.2.0

Run, in this order, before claiming any Fiper surface done:
1. `brand/checklists/anti-ai-tells.md` — 14 tells with grep commands (binding).
2. `brand/checklists/pre-release-identity.md` — 40 yes/no items (screen, type, colour, logo, finance, RTL, a11y, copy) with the test for each.
3. `brand/checklists/accessibility.md` — WCAG 2.2 AA items for finance apps.
4. Contrast for any new colour pair: `node scripts/contrast.mjs` (repo) or the formula in `brand/README.md § C`.
5. E-mails: HTML valid, Chromium 360 px screenshot — light only (v2.3.2: the paper ground in every mode, no dark-scheme rules; one language per mail + one equivalence line; browser preview only; real clients NOT TESTED unless evidenced per `templates/email/TEST-MATRIX.md`), `grep -oE "https?://[^\"'<> ]+"` → only inside `href` of buttons.
5a. Fonts actually used: `python3 scripts/check-pdf-fonts.py` on every PDF; DevTools Rendered Fonts on Arabic table headers, inputs, badges → IBM Plex Sans Arabic only.
5b. Visual review against the anti-generic list (`brand/README.md § L`): a passing blocklist is not proof.
6. Values you added that are not in `brand/value-sources.md` → list them as PROPOSED in your report with the reason.
Report failures plainly; never call a surface ready with an open fail.

v2.0: also run items 51–58 of `brand/checklists/pre-release-identity.md` (composition, social text threshold, charts from data, unbreakable units) and read `references/composition.md` before drawing any surface.
