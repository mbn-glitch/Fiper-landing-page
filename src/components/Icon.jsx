/**
 * Lucide v0.468.0 through the package sprite only (brand/icons/ICONS.md): <use href="/brand/icons.svg#i-<name>">.
 * Sizes per the icon grid: sm 16 / md 20 / lg 24. `dir` mirrors directional icons in RTL. Decorative by default
 * (aria-hidden); pass `label` for a meaningful icon.
 */
export default function Icon({ name, size = "md", dir = false, label, className = "" }) {
  const cls = `fp-icon fp-icon--${size}${dir ? " fp-icon--dir" : ""}${className ? ` ${className}` : ""}`;
  return (
    <svg className={cls} aria-hidden={label ? undefined : true} role={label ? "img" : undefined} aria-label={label} focusable="false">
      <use href={`/brand/icons.svg#i-${name}`} />
    </svg>
  );
}
