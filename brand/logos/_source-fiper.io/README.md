# _source-fiper.io — SUPERSEDED logo files (provenance only)

These are the v2.0 official files as published on https://fiper.io (29 Oct 2026 capture) and the two PNGs from the Fiper-landing-page repo, plus the quarantined v1.0 derived copies (`_unapproved-proposals/`). On 30 Oct 2026 the CEO approved the refined wordmark (variant A, dotted i) and ordered it generalised across the identity; the approved set now lives in `brand/logos/{svg,png,favicon,app-icon,og,social,email,print}`.

**Status: DEPRECATED for every surface.** Nothing in the package references these files (`scripts/verify-identity.mjs` fails on any reference: rule OLD-LOGO-FILE). They are kept because (1) the mark's geometry and the lockup ratios were measured from them (`../FORENSICS.md`), (2) `scripts/logo-variants.py` reads `svg/fiper-lockup-white.svg` as the outline source when regenerating the geometry, and (3) consumers migrating from v2.0 need the old names to find what to replace (`../USAGE.md` § 8).

| Old file | md5 | Replaced by |
|---|---|---|
| svg/fiper-lockup-white.svg | 71f488d6afe1324a9757625efad13893 | ../svg/fiper-lockup-horizontal-colour.svg |
| png/Fiper_Logo_2_black.OFFICIAL-PNG-ONLY-3000.png, png/fiper-lockup-dark*.png | 628114640e3abd2fb6391c3072e71d26 | ../svg/fiper-lockup-horizontal-colour-paper.svg, ../png/lockup-horizontal/*-paper-* |
| png/Fiper_Logo_white2.OFFICIAL-STACKED-WHITE-720.png, png/fiper-lockup-stacked-white*.png | 3cd44513ef573939a5b046feae2758a9 | ../svg/fiper-lockup-stacked-colour.svg, ../png/lockup-stacked/* |
| favicon/favicon.ico (32 only), favicon-16/32/48/64.png | bafa37b5e749f36cb8e7ef0df841d558 | ../favicon/favicon.ico (16+32+48), favicon.svg, favicon-16/32/48.png |
| app-icon/apple-touch-icon-180.png, icon-192.png, icon-512.png | 17328b70628d00dee123ca4f9b67a6bc / b8ea93ac6f0bfa670f61b76258754c11 | ../app-icon/icon-180.png, icon-192.png, icon-512.png (+ maskable) |
| og/og-image-1200x630.png | e7c62574855ee4a302a1418430deb786 | ../og/og-1200x630-charcoal.png |
| email/fiper-email-header-dark@2x.png, -white@2x.png | — | ../email/email-header-160@2x.png, email-header-160-dark@2x.png |
