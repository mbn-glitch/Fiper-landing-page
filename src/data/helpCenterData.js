/* Help-centre categories. `icon` = a Lucide v0.468.0 name from the package sprite (brand/icons/REGISTRY.md), used beside
   the category title as a navigation icon (never in a tile). */
const categoryDefs = [
  { id: "getting-started", icon: "credit-card", titleKey: "cat1", prefix: "gs", count: 5 },
  { id: "virtual-vs-physical", icon: "layers", titleKey: "cat2", prefix: "vp", count: 8 },
  { id: "topup-transfers", icon: "arrow-up-down", titleKey: "cat3", prefix: "tt", count: 7 },
  { id: "fees-limits", icon: "coins", titleKey: "cat4", prefix: "fl", count: 7 },
  { id: "payments-usage", icon: "wallet", titleKey: "cat5", prefix: "pu", count: 10 },
  { id: "atm-withdrawals", icon: "landmark", titleKey: "cat6", prefix: "aw", count: 2 },
  { id: "security-lost-cards", icon: "shield-check", titleKey: "cat7", prefix: "sl", count: 7 },
  { id: "shipping-delivery", icon: "globe", titleKey: "cat8", prefix: "sd", count: 4 },
  { id: "troubleshooting", icon: "circle-alert", titleKey: "cat9", prefix: "ts", count: 5 },
];

export function getCategories(t) {
  return categoryDefs.map((def) => ({
    id: def.id,
    icon: def.icon,
    title: t(`helpCenter.${def.titleKey}`),
    faqs: Array.from({ length: def.count }, (_, i) => ({
      q: t(`helpCenter.${def.prefix}_q${i + 1}`),
      a: t(`helpCenter.${def.prefix}_a${i + 1}`),
    })),
  }));
}

export default categoryDefs;
