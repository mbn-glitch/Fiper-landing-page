import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const stepKeys = ["step1", "step2", "step3"];

/** A real sequence: numbered 01–03 in IBM Plex Mono, muted, inside .fp-num; no tiles, no animated line. */
export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead label={t("howItWorks.label")} heading1={t("howItWorks.heading1")} heading2={t("howItWorks.heading2")} />
        <ol className="grid gap-x-10 lg:grid-cols-3 max-w-6xl mx-auto border-t border-divider">
          {stepKeys.map((key, i) => (
            <Reveal as="li" key={key} delay={i * 0.1} className="grid grid-cols-[40px_1fr] gap-3 py-7 border-b border-line">
              <span className="fp-num text-sm text-muted pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold text-fg mb-2">{t(`howItWorks.${key}Title`)}</h3>
                <p className="text-base leading-relaxed text-muted">{t(`howItWorks.${key}Desc`)}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--secondary">
            {t("howItWorks.cta")}
            <Icon name="arrow-right" size="md" dir />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
