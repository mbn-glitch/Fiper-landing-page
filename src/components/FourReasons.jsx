import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const keys = ["r1", "r2", "r3", "r4"];

/** Four reasons as ruled rows — no decorative numbering (the reasons are not a sequence). */
export default function FourReasons() {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead label={t("fourReasons.label")} heading1={t("fourReasons.heading1")} heading2={t("fourReasons.heading2")} />
        <ul className="grid gap-x-10 sm:grid-cols-2 max-w-5xl mx-auto border-t border-divider">
          {keys.map((key, i) => (
            <Reveal as="li" key={key} delay={Math.min(i, 2) * 0.08} className="py-7 border-b border-line">
              <h3 className="text-lg font-semibold text-fg mb-2">{t(`fourReasons.${key}Title`)}</h3>
              <p className="text-base leading-relaxed text-muted">{t(`fourReasons.${key}Desc`)}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--secondary">
            {t("fourReasons.cta")}
            <Icon name="arrow-right" size="md" dir />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
