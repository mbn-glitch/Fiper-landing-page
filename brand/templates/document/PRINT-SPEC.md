# QR code (v2.2.0, Q11 — APPROVED; closed 31 Oct 2026, v2.3.2): **≥ 160 px (the minimum stays a minimum), recommended 12 % of the short edge, never above 300 px — a 260 px cover QR is accepted**; quiet zone 4 modules, bottom-start corner inside the safe margin on covers and ads (`tokens.json component.qr.*`: `min-side` 160px · `side-ratio` 0.12 recommended · `max-side` 300px); the QR is black on the paper ground or white on charcoal, never red, never inside the logo clear space.

# Print specification — Fiper Brand Identity System v2.0

## Fit for purpose (what the files ARE)
| File | Trim / page | Colour | Bleed | Fit for |
|---|---|---|---|---|
| `dist/Fiper-Brand-Manual-v2.0.pdf` | A4 210 × 297 mm at 100 % | RGB (sRGB), dark ground | none | screen, office/laser printing |
| `report.html` + `print.css` → PDF, `Fiper-Report.docx`, `Fiper-Letterhead.docx`, `letterhead.html` | A4, 18 mm margins | RGB | none | screen, office printing |
| `business-card.html`, `Fiper-Business-Card.docx` | 85 × 55 mm at 100 % | RGB | none | layout proof, office card printers |
| `../social/*.svg` + `exports/*.png` | pixel sizes | RGB | n/a | screen only |

Print from the PDF at **100 % (no "fit to page")** so trims stay true. Dark pages are ink-heavy; office printing of the manual is expected to be occasional.

## NOT press-ready — stated plainly
None of the above is a commercial-print (offset/digital press) file. Declaring press readiness would require the items below, **none of which exist in any source and none of which are guessed here**:

| REQUIRED DECISION | Why it is missing |
|---|---|
| CMYK build or Pantone reference for the brand red `#DC2626` and the logo gradient `#E03636 → #AD1D1C → #9C1515` | No print colour values exist in fiper.io, the logo file or any earlier kit. A conversion by software is a guess and is not provided. |
| CMYK values for the dark ground `#0A0708` (rich black recipe) and text `#EDEAE6` | Same — never guess rich-black recipes. |
| 3 mm bleed + crop marks on the business card, letterhead and any cover | The templates are built at trim size without bleed. |
| Paper stock, finish, weight (card and letterhead) | No specification exists. |
| A proofed PDF/X-1a or PDF/X-4 export with embedded ICC profile and a hard proof approved by Fiper | Not produced; requires the values above first. |
| Minimum logo size on press (proposed 6 mm lockup / 4 mm mark) confirmed on a physical proof | PROPOSED only (`tokens.json` component.logo). |

Until these are decided, treat every print file as **office-print only**.
