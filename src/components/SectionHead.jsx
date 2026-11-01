import Reveal from "./Reveal";

/** Section opening: a plain small label (no slash prefix, never red) + one display headline; the second line muted. */
export default function SectionHead({ label, heading1, heading2, sub, center = true, className = "" }) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12 md:mb-16 ${className}`}>
      {label && <p className="label-sm mb-3">{label}</p>}
      <h2 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-fg">
        {heading1}
        {heading2 && <span className="text-muted"> {heading2}</span>}
      </h2>
      {sub && <p className="mt-4 text-base text-muted">{sub}</p>}
    </Reveal>
  );
}
