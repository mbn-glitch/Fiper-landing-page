import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const keys = ["s1", "s2", "s3", "s4"];

export default function TrustSecurity() {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 md:py-28 bg-coal border-y border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead label={t("trustSecurity.label")} heading1={t("trustSecurity.heading1")} heading2={t("trustSecurity.heading2")} />
        <ul className="grid gap-x-10 sm:grid-cols-2 max-w-4xl mx-auto border-t border-divider">
          {keys.map((key, i) => (
            <Reveal as="li" key={key} delay={Math.min(i, 2) * 0.08} className="py-7 border-b border-line">
              <h3 className="text-lg font-semibold text-fg mb-2">{t(`trustSecurity.${key}Title`)}</h3>
              <p className="text-base leading-relaxed text-muted">{t(`trustSecurity.${key}Desc`)}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
