import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

/** Mobile sticky bar: the one primary action once the hero CTA has scrolled away; hidden near the footer. */
export default function StickyMobileCTA() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const nearFooter = window.innerHeight + window.scrollY > document.body.offsetHeight - 400;
      setShow(scrolled > 600 && !nearFooter);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[70] lg:hidden transition-transform duration-[350ms] ease-exit ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!show}
    >
      <div className="px-4 py-3 bg-header backdrop-blur-[14px] border-t border-line">
        <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--primary fp-btn--block" tabIndex={show ? 0 : -1}>
          {t("nav.getYourCard")}
          <Icon name="arrow-right" size="md" dir />
        </a>
      </div>
    </div>
  );
}
