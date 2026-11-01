import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "./Icon";
import CardVisual from "./CardVisual";
import { BRAND_EASE } from "./Reveal";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: BRAND_EASE } } };

/** Image-dominant hero: one headline, one lead, the ONE primary action, the official card artwork, four figures on a rule. */
export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
    { value: t("hero.stat4Value"), label: t("hero.stat4Label") },
  ];

  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 md:pb-24">
      <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <span className="fp-badge fp-badge--outline h-auto py-1 text-center max-w-[90vw] whitespace-normal">{t("hero.badge")}</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="h-display mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {t("hero.headline1")}
          <br />
          {t("hero.headlineInto")} {t("hero.headline2")}
          <br />
          {t("hero.headline3")}
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          {t("hero.subtext")}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--primary">
            {t("hero.cta1")}
            <Icon name="arrow-right" size="md" dir />
          </a>
          <a href="#cards" className="fp-btn fp-btn--ghost">
            {t("hero.cta2")}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex justify-center lg:mt-14">
          <div className="w-full max-w-[520px]">
            <CardVisual variant="physical" />
          </div>
        </motion.div>

        <motion.dl variants={fadeUp} className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 border-t-2 border-fg pt-5 text-start sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="fp-num text-2xl font-semibold text-fg">{stat.value}</dd>
              <dt className="mt-1 text-xs font-semibold text-muted">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
