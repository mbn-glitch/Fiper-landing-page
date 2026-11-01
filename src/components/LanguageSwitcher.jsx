import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { LANGUAGES, changeLanguageSafely } from "../i18n";
import { BRAND_EASE } from "./Reveal";

/** Language switch: a 44 px ghost control with the Lucide `languages` icon; a dropdown on desktop, a bottom sheet on phones. No flags, no emoji. */
export default function LanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const select = async (code) => {
    setOpen(false);
    await changeLanguageSafely(code);
  };

  const Item = ({ lang, big }) => {
    const isActive = lang.code === i18n.language;
    return (
      <button
        key={lang.code}
        onClick={() => select(lang.code)}
        role="option"
        aria-selected={isActive}
        lang={lang.code}
        className={`w-full flex items-center justify-between gap-3 px-3 ${big ? "min-h-12 text-base" : "min-h-11 text-sm"} rounded-input transition-colors duration-200 ${isActive ? "bg-fiper-wash text-fg" : "text-muted hover:bg-coal hover:text-fg"}`}
      >
        <span className="font-medium">{lang.label}</span>
        {isActive && <Icon name="check" size="sm" />}
      </button>
    );
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button onClick={() => setOpen(!open)} className="fp-btn fp-btn--ghost fp-btn--sm min-h-11" aria-label="Select language" aria-expanded={open} aria-haspopup="listbox">
        <Icon name="languages" size="sm" />
        <span lang={current.code}>{current.native}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sm:hidden fixed inset-0 bg-scrim z-[90]" onClick={() => setOpen(false)} />

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: BRAND_EASE }}
              role="listbox"
              className="hidden sm:block absolute end-0 mt-2 w-56 rounded-card border border-line bg-panel shadow-overlay p-1.5 z-[90]"
            >
              {LANGUAGES.map((lang) => <Item key={lang.code} lang={lang} />)}
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: BRAND_EASE }}
              role="listbox"
              className="sm:hidden fixed bottom-0 left-0 right-0 z-[100] rounded-t-sheet border-t border-line bg-panel shadow-overlay p-4 pb-8"
            >
              <div className="mx-auto w-9 h-1 rounded-full bg-line-strong mb-4" />
              <p className="label-sm mb-3 px-2">Select language</p>
              <div className="space-y-1">
                {LANGUAGES.map((lang) => <Item key={lang.code} lang={lang} big />)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
