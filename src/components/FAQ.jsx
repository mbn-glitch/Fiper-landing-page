import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import Reveal, { BRAND_EASE } from "./Reveal";
import SectionHead from "./SectionHead";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];

function FAQSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/** One FAQ row: rules, not boxes; a 44 px toggle with the Lucide chevron (rotates when open). */
export function FAQItem({ q, a, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 py-4 min-h-14 text-start group" aria-expanded={isOpen} aria-controls={id}>
        <span className={`text-base font-medium transition-colors duration-300 sm:text-lg ${isOpen ? "text-fg" : "text-fg/90 group-hover:text-fg"}`}>{q}</span>
        <span className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <Icon name="chevron-down" size="md" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: BRAND_EASE }} className="overflow-hidden">
            <p className="pb-5 text-base leading-relaxed text-muted max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = faqKeys.map((key, i) => ({ q: t(`faq.${key}`), a: t(`faq.a${i + 1}`) }));

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHead label={t("faq.label")} heading1={t("faq.heading1")} heading2={t("faq.heading2")} sub={t("faq.subtext")} />
        <Reveal className="border-t border-divider">
          {faqs.map((f, i) => (
            <FAQItem key={faqKeys[i]} id={`faq-${i}`} q={f.q} a={f.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Link to="/help-center" className="fp-btn fp-btn--ghost">
            {t("faq.viewAll")}
            <Icon name="arrow-right" size="sm" dir />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
