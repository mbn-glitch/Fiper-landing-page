/**
 * The card visuals.
 *  physical → the official Fiper Card artwork (public/fiper-physical-card.png), full width inside its column, native
 *             aspect, no tilt, no float, no glow (composition-rules § 3: image-dominant — the official product artwork,
 *             no crop; logo misuse 6: never on a glow).
 *  virtual  → no official artwork exists for the virtual card (brand/MISSING-ASSETS.md: never invent one), so the
 *             virtual card is a plain charcoal panel in the card's proportions carrying the official lockup and the
 *             descriptor "Virtual" as text (README § A: descriptors are text beside the master logo). PROPOSED.
 */
export default function CardVisual({ variant = "virtual", className = "" }) {
  if (variant === "physical") {
    return (
      <img
        src="/fiper-physical-card.png"
        alt="Fiper Physical Card"
        width="1500"
        height="951"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        className={`w-full h-auto select-none ${className}`}
      />
    );
  }
  return (
    <div
      className={`relative w-full aspect-[1500/951] rounded-media border border-line-frame bg-panel p-6 sm:p-7 flex flex-col justify-between ${className}`}
      role="img"
      aria-label="Fiper Virtual Card"
    >
      <span className="lockup inline-flex self-start">
        <img src="/brand/fiper-lockup-horizontal-colour.svg" alt="" width="91" height="32" className="h-8 w-auto" />
      </span>
      <span className="label-sm self-end">Virtual</span>
    </div>
  );
}
