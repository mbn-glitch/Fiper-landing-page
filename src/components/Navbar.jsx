import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";
import { BRAND_EASE } from "./Reveal";

/** Sticky header: the official lockup at 26 px (never mirrored), text links (44 px targets), the language switch and a
 *  SECONDARY "get your card" button — the one primary action of the first screen is the hero CTA. */
export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.cards"), href: "#cards" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.helpCenter"), href: "/help-center", isRoute: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "features", "cards", "how-it-works", "faq"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const linkBase = "inline-flex items-center min-h-11 px-3 text-sm transition-colors duration-200 rounded-sm";
  const linkState = (isActive) => (isActive ? "text-fg shadow-[inset_0_-2px_0_var(--fp-brand-red)]" : "text-muted hover:text-fg");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[80] border-b transition-colors duration-300 ${
        scrolled ? "bg-header backdrop-blur-[14px] border-line" : "bg-transparent border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 min-h-14 py-2">
          <a href="#home" className="lockup inline-flex items-center min-h-11 flex-shrink-0" aria-label="Fiper">
            <img src="/brand/fiper-lockup-horizontal-colour.svg" alt="Fiper" width="74" height="26" className="h-[26px] w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !link.isRoute && link.href === `#${activeSection}`;
              return link.isRoute ? (
                <Link key={link.href} to={link.href} className={`${linkBase} ${linkState(false)}`}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} aria-current={isActive ? "true" : undefined} className={`${linkBase} ${linkState(isActive)}`}>
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--secondary fp-btn--sm">
              {t("nav.getYourCard")}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="fp-btn fp-btn--ghost fp-btn--icon"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? "x" : "menu"} size="lg" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: BRAND_EASE }}
            className="lg:hidden bg-coal border-t border-line"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = !link.isRoute && link.href === `#${activeSection}`;
                const cls = `flex items-center min-h-12 px-3 text-base rounded-sm border-b border-line ${isActive ? "text-fg" : "text-muted hover:text-fg"}`;
                return link.isRoute ? (
                  <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={cls}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} aria-current={isActive ? "true" : undefined} className={cls}>
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4">
                <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="fp-btn fp-btn--secondary fp-btn--block">
                  {t("nav.getYourCard")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
