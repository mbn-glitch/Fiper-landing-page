import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const keys = ["f1", "f2", "f3", "f4", "f5", "f6"];

/** Features as ruled rows (composition-rules § 5: no box around every item, no icon tiles). */
export default function WhyFiper() {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead label={t("whyFiper.label")} heading1={t("whyFiper.heading1")} heading2={t("whyFiper.heading2")} />
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3 border-t border-divider max-w-6xl mx-auto">
          {keys.map((key, i) => (
            <Reveal as="li" key={key} delay={Math.min(i, 2) * 0.08} className="py-7 border-b border-line">
              <h3 className="text-lg font-semibold text-fg mb-2">{t(`whyFiper.${key}Title`)}</h3>
              <p className="text-base leading-relaxed text-muted">{t(`whyFiper.${key}Desc`)}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
