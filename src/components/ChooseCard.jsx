import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import CardVisual from "./CardVisual";

/** Two selectable plan cards (a justified box each: the product, its facts and its one action). Figures in IBM Plex Mono.
 *  The physical plan carries the primary button, the virtual plan a secondary one — one primary per screen. */
export default function ChooseCard() {
  const { t } = useTranslation();

  // PRICING MODEL — confirmed with operations (unchanged):
  // Virtual Card: $50 issuing fee → $30 loaded to card balance → $20 actual cost · Physical Card: $100 issuing fee.
  // These values MUST match helpCenter.vp_a1 in src/locales/*.json.
  const plans = [
    {
      name: t("chooseCard.virtualCard"),
      price: "$50",
      badge: t("chooseCard.virtualBadge"),
      variant: "virtual",
      cta: t("chooseCard.virtualCta"),
      tag: t("chooseCard.mostPopular"),
      primary: false,
      features: [
        { text: t("chooseCard.vf1"), included: true },
        { text: t("chooseCard.vf2"), included: true },
        { text: t("chooseCard.vf3"), included: true },
        { text: t("chooseCard.vf4"), included: true },
        { text: t("chooseCard.vf5"), included: true },
        { text: t("chooseCard.vf6"), included: false },
      ],
      facts: [
        { label: t("chooseCard.loadedToCard"), value: "+ $30" },
        { label: t("chooseCard.actualCost"), value: "$20" },
      ],
      fees: [
        { label: t("chooseCard.topUp"), value: t("chooseCard.topUpVal") },
        { label: t("chooseCard.transaction"), value: t("chooseCard.transactionVal") },
        { label: t("chooseCard.declined"), value: t("chooseCard.declinedVal") },
        { label: t("chooseCard.fxRate"), value: t("chooseCard.fxRateVal") },
      ],
    },
    {
      name: t("chooseCard.physicalCard"),
      price: "$100",
      badge: t("chooseCard.physicalBadge"),
      variant: "physical",
      cta: t("chooseCard.physicalCta"),
      tag: t("chooseCard.premiumChoice"),
      primary: true,
      features: [
        { text: t("chooseCard.pf1"), included: true },
        { text: t("chooseCard.pf2"), included: true },
        { text: t("chooseCard.pf3"), included: true },
        { text: t("chooseCard.pf4"), included: true },
        { text: t("chooseCard.pf5"), included: false },
        { text: t("chooseCard.pf6"), included: false },
      ],
      facts: [
        { label: t("chooseCard.atmAccess"), value: "$2k / week" },
        { label: t("chooseCard.validity"), value: t("chooseCard.threeYears"), text: true },
      ],
      fees: [
        { label: t("chooseCard.topUp"), value: t("chooseCard.topUpVal") },
        { label: t("chooseCard.transaction"), value: t("chooseCard.transactionVal") },
        { label: t("chooseCard.declined"), value: t("chooseCard.declinedVal") },
        { label: t("chooseCard.delivery"), value: t("chooseCard.deliveryVal") },
      ],
    },
  ];

  return (
    <section id="cards" className="relative py-20 md:py-28 bg-coal border-y border-line">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead label={t("chooseCard.label")} heading1={t("chooseCard.heading1")} heading2={t("chooseCard.heading2")} />

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.1} className={`fp-card min-w-0 overflow-hidden ${plan.primary ? "border-line-strong" : ""}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-6">
                <span className="fp-badge fp-badge--outline h-auto min-h-6 py-1 whitespace-normal">{plan.badge}</span>
                <span className={`fp-badge ${plan.primary ? "fp-badge--brand" : "fp-badge--neutral"}`}>{plan.tag}</span>
              </div>
              <div className="mb-8 mx-auto max-w-[360px]">
                <CardVisual variant={plan.variant} />
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <h3 className="text-xl font-semibold text-fg">{plan.name}</h3>
                <div className="text-end">
                  <span className="fp-num text-3xl font-semibold text-fg">{plan.price}</span>
                  <p className="text-xs text-muted mt-1">{t("chooseCard.oneTimeFee")}</p>
                </div>
              </div>

              <dl className="fp-group fp-group--tight mb-6">
                {plan.facts.map((f) => (
                  <div key={f.label} className="fp-kv">
                    <dt>{f.label}</dt>
                    <dd>{f.text ? f.value : <span className="fp-num">{f.value}</span>}</dd>
                  </div>
                ))}
              </dl>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className={`mt-0.5 ${f.included ? "text-fg" : "text-muted"}`}><Icon name={f.included ? "check" : "x"} size="sm" /></span>
                    <span className={`text-sm ${f.included ? "text-fg" : "text-muted line-through"}`}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-line pt-4 mb-8">
                <p className="label-sm mb-2">{t("chooseCard.feesTitle")}</p>
                <dl>
                  {plan.fees.map((fee) => (
                    <div key={fee.label} className="fp-kv py-2">
                      <dt className="text-sm">{fee.label}</dt>
                      <dd className="text-sm font-medium text-fg">{fee.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <a href="https://crm.fiper.me" target="_blank" rel="noopener noreferrer" className={`fp-btn fp-btn--block ${plan.primary ? "fp-btn--primary" : "fp-btn--secondary"}`}>
                {plan.cta}
                <Icon name="arrow-right" size="md" dir />
              </a>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-8">{t("chooseCard.footnote")}</p>
      </div>
    </section>
  );
}
