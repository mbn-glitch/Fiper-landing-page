/**
 * The fixed risk line (fiper-brand v2.3.4, CEO 30 Oct 2026 — Q4): «الاستثمار ينطوي على مخاطر» / "Investing involves risk".
 * One muted 11 px line at the foot of every page, start-aligned, never red, never hidden. The wording is fixed; the
 * entity line below it is the approved text of regulatory-matrix § 0 (Fiper Global UAE by default), never retyped.
 */
export const RISK_AR = "الاستثمار ينطوي على مخاطر";
export const RISK_EN = "Investing involves risk";
export const ENTITY_UAE = "Fiper Global UAE — Company registration number: 2422384 — Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.";

export default function RiskLine({ className = "" }) {
  return (
    <p className={`text-[11px] leading-relaxed text-label text-start ${className}`} lang="ar" dir="rtl" data-risk-line="">
      {RISK_AR} · <span lang="en" dir="ltr" className="font-[var(--fp-font-family-body)]">{RISK_EN}</span>
    </p>
  );
}

export function EntityLine({ className = "" }) {
  return (
    <p className={`text-[11px] leading-relaxed text-muted text-left ${className}`} lang="en" dir="ltr">
      {ENTITY_UAE}
    </p>
  );
}
