import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { getCategories } from "../data/helpCenterData";
import useDirection from "../hooks/useDirection";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import LanguageSwitcher from "../components/LanguageSwitcher";
import WhatsAppButton, { WhatsAppIcon } from "../components/WhatsAppButton";
import StickyMobileCTA from "../components/StickyMobileCTA";
import RiskLine, { EntityLine } from "../components/RiskLine";
import { FAQItem } from "../components/FAQ";

const WHATSAPP_URL = "https://wa.me/97433600905?text=Hello%2C%20I%20need%20help%20with%20my%20Fiper%20Card";
const RECENT_KEY = "fiper_recent_searches";

function CategorySection({ category }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <section id={category.id} className="scroll-mt-32">
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-muted"><Icon name={category.icon} size="lg" /></span>
          <h2 className="h-display text-2xl text-fg">{category.title}</h2>
        </div>
        <div className="border-t border-divider">
          {category.faqs.map((faq, i) => (
            <FAQItem key={i} id={`${category.id}-${i}`} q={faq.q} a={faq.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default function HelpCenter() {
  const { t } = useTranslation();
  useDirection();
  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY);
      return stored ? JSON.parse(stored).slice(0, 5) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.title = t("helpCenter.heroTitle1") + " " + t("helpCenter.heroTitle2") + " | Fiper Card";
    window.scrollTo(0, 0);
  }, [t]);

  useEffect(() => {
    const timer = setTimeout(() => setQuery(rawQuery), 300);
    return () => clearTimeout(timer);
  }, [rawQuery]);

  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
        setRawQuery("");
        setQuery("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const categories = useMemo(() => getCategories(t), [t]);

  const fuse = useMemo(() => {
    const allFaqs = categories.flatMap((cat) => cat.faqs.map((f) => ({ ...f, categoryId: cat.id, categoryTitle: cat.title, categoryIcon: cat.icon })));
    return new Fuse(allFaqs, { keys: [{ name: "q", weight: 0.7 }, { name: "a", weight: 0.3 }], threshold: 0.4, ignoreLocation: true, includeMatches: true, minMatchCharLength: 2 });
  }, [categories]);

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const results = fuse.search(query.trim());
    const grouped = {};
    results.forEach((r) => {
      const item = r.item;
      if (!grouped[item.categoryId]) grouped[item.categoryId] = { id: item.categoryId, title: item.categoryTitle, icon: item.categoryIcon, faqs: [] };
      grouped[item.categoryId].faqs.push({ q: item.q, a: item.a });
    });
    return Object.values(grouped);
  }, [query, fuse, categories]);

  const totalResults = filtered.reduce((n, c) => n + c.faqs.length, 0);

  useEffect(() => {
    const q = query.trim();
    if (!q || totalResults === 0) return;
    setRecentSearches((prev) => {
      const next = [q, ...prev.filter((s) => s !== q)].slice(0, 5);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      } catch {
        // ignore quota / privacy mode errors
      }
      return next;
    });
  }, [query, totalResults]);

  const clearSearch = () => {
    setRawQuery("");
    setQuery("");
  };

  const chip = "fp-chip text-sm";

  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <a href="#help-main" className="skip-link">Skip to main content</a>
      <nav className="fixed top-0 left-0 right-0 z-[80] bg-header backdrop-blur-[14px] border-b border-line" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 min-h-14 py-2">
            <Link to="/" className="lockup inline-flex items-center min-h-11 flex-shrink-0" aria-label="Fiper"><img src="/brand/fiper-lockup-horizontal-colour.svg" alt="Fiper" width="74" height="26" className="h-[26px] w-auto" /></Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/" className="hidden sm:inline-flex items-center gap-2 min-h-11 px-2 text-sm text-muted hover:text-fg transition-colors">
                <Icon name="arrow-left" size="sm" dir />
                {t("helpCenter.backToHome")}
              </Link>
              <LanguageSwitcher />
              <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--secondary fp-btn--sm">
                {t("nav.getYourCard")}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main id="help-main" className="pt-28 pb-24">
        <section className="relative">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Reveal>
              <h1 className="h-display text-4xl sm:text-5xl md:text-6xl text-fg">
                {t("helpCenter.heroTitle1")} <span className="text-muted">{t("helpCenter.heroTitle2")}</span>
              </h1>
              <p className="mt-4 text-lg text-muted">{t("helpCenter.heroSubtext")}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <div className="relative">
                <span className="absolute start-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"><Icon name="search" size="md" /></span>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={rawQuery}
                  onChange={(e) => setRawQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder={t("helpCenter.searchPlaceholder")}
                  aria-label={t("helpCenter.searchPlaceholder")}
                  className="fp-input min-h-12 text-base" style={{ paddingInlineStart: 48, paddingInlineEnd: 80 }}
                />
                {rawQuery ? (
                  <button onClick={clearSearch} aria-label="Clear search" className="absolute end-2 top-1/2 -translate-y-1/2 fp-btn fp-btn--ghost fp-btn--sm min-h-9">
                    {t("helpCenter.clear")}
                  </button>
                ) : (
                  !searchFocused && (
                    <kbd className="hidden md:inline-flex absolute end-4 top-1/2 -translate-y-1/2 items-center px-2 py-0.5 rounded-sm border border-line text-xs text-muted font-mono pointer-events-none">/</kbd>
                  )
                )}
              </div>
              {query && <p className="mt-3 text-sm text-muted"><span className="fp-num">{totalResults}</span> {totalResults === 1 ? "result" : "results"}</p>}
              {!rawQuery && recentSearches.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-xs text-muted">Recent:</span>
                  {recentSearches.map((s) => (
                    <button key={s} onClick={() => setRawQuery(s)} className={chip}>{s}</button>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 mt-14">
          <Reveal delay={0.15} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const matchedCount = query ? (filtered.find((f) => f.id === cat.id)?.faqs.length ?? 0) : cat.faqs.length;
              const isMatched = !query || matchedCount > 0;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`fp-card fp-card--compact fp-card--interactive flex items-start gap-3 ${isMatched ? "" : "opacity-40 pointer-events-none"}`}
                  aria-disabled={!isMatched || undefined}
                >
                  <span className="text-muted mt-0.5"><Icon name={cat.icon} size="md" /></span>
                  <span>
                    <h3 className="text-sm font-semibold text-fg">{cat.title}</h3>
                    <p className="text-xs text-muted mt-1"><span className="fp-num">{matchedCount}</span> {matchedCount === 1 ? "article" : "articles"}</p>
                  </span>
                </a>
              );
            })}
          </Reveal>
        </section>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 mt-16 space-y-14">
          {filtered.map((cat) => <CategorySection key={cat.id} category={cat} />)}
          {query && filtered.length === 0 && (
            <div className="fp-empty">
              <Icon name="search" size="lg" />
              <p className="fp-empty__title">{t("helpCenter.noResults", { query })}</p>
              <p className="fp-empty__body">{t("helpCenter.noResultsHint")}</p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                <span className="text-xs text-muted">Try:</span>
                {["activation", "Apple Pay", "ATM", "fees", "delivery"].map((s) => (
                  <button key={s} onClick={() => setRawQuery(s)} className={chip}>{s}</button>
                ))}
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--secondary fp-btn--sm mt-4">
                Contact Support
              </a>
            </div>
          )}
        </div>

        <section className="mx-auto max-w-3xl px-4 sm:px-6 mt-20">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="h-display text-3xl sm:text-4xl text-fg">
                {t("helpCenter.contactTitle1")} <span className="text-muted">{t("helpCenter.contactTitle2")}</span>
              </h2>
              <p className="mt-3 text-muted">{t("helpCenter.contactSubtext")}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fp-card fp-card--interactive block group">
                <span className="text-fg"><WhatsAppIcon className="w-6 h-6" /></span>
                <h3 className="text-lg font-semibold text-fg mt-4 mb-2">{t("helpCenter.whatsappTitle")}</h3>
                <p className="text-sm text-muted mb-4">{t("helpCenter.whatsappDesc")}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fg min-h-11">
                  {t("helpCenter.whatsappCta")} <Icon name="arrow-right" size="sm" dir />
                </span>
              </a>
              <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className="fp-card fp-card--interactive block group">
                <span className="text-fg"><Icon name="circle-help" size="lg" /></span>
                <h3 className="text-lg font-semibold text-fg mt-4 mb-2">{t("helpCenter.ticketTitle")}</h3>
                <p className="text-sm text-muted mb-4">{t("helpCenter.ticketDesc")}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fg min-h-11">
                  {t("helpCenter.ticketCta")} <Icon name="arrow-right" size="sm" dir />
                </span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link to="/" className="lockup inline-flex" aria-label="Fiper"><img src="/brand/fiper-lockup-horizontal-colour.svg" alt="Fiper" loading="lazy" decoding="async" width="91" height="32" className="h-8 w-auto" /></Link>
            <p className="text-xs text-muted">{t("footer.copyright")}</p>
          </div>
          <EntityLine />
          <RiskLine />
        </div>
      </footer>

      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
