import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Reveal from "./Reveal";

/** Closing block: one headline, one line, the one primary action — no glow, no halo. */
export default function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 md:py-28 bg-coal border-t border-line">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-fg">
            {t("finalCta.heading1")} <span className="text-muted">{t("finalCta.heading2")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t("finalCta.subtext")}</p>
          <div className="mt-10">
            <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--primary">
              {t("finalCta.cta")}
              <Icon name="arrow-right" size="md" dir />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
