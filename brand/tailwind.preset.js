// Fiper Brand Identity System v2.3.4 — tailwind.preset.js (GENERATED from brand/tokens.json by scripts/build-tokens.mjs; do not edit)
// Every value below is derived from tokens.json. Observed-only site treatments (button glow, .core chip tracking) are intentionally absent.
// usage (Tailwind 3.4 / 4.x compat): module.exports = { presets: [require('./brand/tailwind.preset.js')], content: [...] } — requires brand/tokens.css loaded.
module.exports = {
  theme: {
    extend: {
      colors: {
  'ground-bg': "var(--fp-ground-bg)",
  'ground-coal': "var(--fp-ground-coal)",
  'ground-panel': "var(--fp-ground-panel)",
  'ground-frame': "var(--fp-ground-frame)",
  'ground-chrome': "var(--fp-ground-chrome)",
  'ground-bezel': "var(--fp-ground-bezel)",
  'line-ash': "var(--fp-line-ash)",
  'line-strong': "var(--fp-line-strong)",
  'line-frame': "var(--fp-line-frame)",
  'line-brand': "var(--fp-line-brand)",
  'line-brand-soft': "var(--fp-line-brand-soft)",
  'line-dark-mail': "var(--fp-line-dark-mail)",
  'line-input': "var(--fp-line-input)",
  'line-divider': "var(--fp-line-divider)",
  'text-primary': "var(--fp-text-primary)",
  'text-muted': "var(--fp-text-muted)",
  'text-risk': "var(--fp-text-risk)",
  'text-disclaimer': "var(--fp-text-disclaimer)",
  'text-on-brand': "var(--fp-text-on-brand)",
  'text-selection': "var(--fp-text-selection)",
  'text-icon-on-brand': "var(--fp-text-icon-on-brand)",
  'text-on-success': "var(--fp-text-on-success)",
  'text-on-danger': "var(--fp-text-on-danger)",
  'text-label': "var(--fp-text-label)",
  'brand-red': "var(--fp-brand-red)",
  'brand-red-deep': "var(--fp-brand-red-deep)",
  'brand-red-gradient-end': "var(--fp-brand-red-gradient-end)",
  'brand-ember': "var(--fp-brand-ember)",
  'brand-red-wash': "var(--fp-brand-red-wash)",
  'brand-red-wash-strong': "var(--fp-brand-red-wash-strong)",
  'brand-selection-bg': "var(--fp-brand-selection-bg)",
  'brand-logo-gradient': "var(--fp-brand-logo-gradient)",
  'action-primary': "var(--fp-action-primary)",
  'action-primary-end': "var(--fp-action-primary-end)",
  'action-primary-pressed': "var(--fp-action-primary-pressed)",
  'action-focus-ring': "var(--fp-action-focus-ring)",
  'action-disabled-fg': "var(--fp-action-disabled-fg)",
  'action-disabled-bg': "var(--fp-action-disabled-bg)",
  'state-success': "var(--fp-state-success)",
  'state-danger': "var(--fp-state-danger)",
  'state-warning': "var(--fp-state-warning)",
  'state-info': "var(--fp-state-info)",
  'state-success-wash': "var(--fp-state-success-wash)",
  'state-danger-wash': "var(--fp-state-danger-wash)",
  'state-warning-wash': "var(--fp-state-warning-wash)",
  'state-info-wash': "var(--fp-state-info-wash)",
  'finance-gain': "var(--fp-finance-gain)",
  'finance-loss': "var(--fp-finance-loss)",
  'finance-neutral': "var(--fp-finance-neutral)",
  'finance-pending': "var(--fp-finance-pending)",
  'chart-series-1': "var(--fp-chart-series-1)",
  'chart-series-2': "var(--fp-chart-series-2)",
  'chart-series-3': "var(--fp-chart-series-3)",
  'chart-series-4': "var(--fp-chart-series-4)",
  'chart-series-5': "var(--fp-chart-series-5)",
  'chart-series-6': "var(--fp-chart-series-6)",
  'chart-candle-up': "var(--fp-chart-candle-up)",
  'chart-candle-down': "var(--fp-chart-candle-down)",
  'chart-grid': "var(--fp-chart-grid)",
  'chart-axis': "var(--fp-chart-axis)",
  'chart-crosshair': "var(--fp-chart-crosshair)",
  'chart-area-fill': "var(--fp-chart-area-fill)",
  'chart-benchmark': "var(--fp-chart-benchmark)",
  'media-grade': "var(--fp-media-grade)",
  'bg': "var(--fp-bg)",
  'surface': "var(--fp-surface)",
  'surface-2': "var(--fp-surface-2)",
  'line': "var(--fp-line)",
  'fg': "var(--fp-fg)",
  'fg-muted': "var(--fp-fg-muted)",
  'primary': "var(--fp-primary)",
  'primary-fg': "var(--fp-primary-fg)",
  'gain': "var(--fp-finance-gain)",
  'loss': "var(--fp-finance-loss)",
  'neutral': "var(--fp-finance-neutral)",
  'pending': "var(--fp-finance-pending)"
},
      fontFamily: {
  'display': [
    "Barlow Condensed",
    "sans-serif"
  ],
  'body': [
    "Inter",
    "sans-serif"
  ],
  'mono': [
    "IBM Plex Mono",
    "monospace"
  ],
  'arabic': [
    "IBM Plex Sans Arabic",
    "Inter",
    "sans-serif"
  ],
  'sans-alt': [
    "IBM Plex Sans",
    "sans-serif"
  ],
  'ui': [
    "var(--fp-font-ui)"
  ]
},
      fontSize: {
  'xs': "0.68rem",
  'sm': "0.75rem",
  'md': "0.85rem",
  'base': "0.92rem",
  'lg': "0.98rem",
  'xl': "1.3rem",
  '2xl': "1.9rem",
  '3xl': "2rem",
  '4xl': "2.9rem",
  'app-caption': "12px",
  'app-body': "15px",
  'app-title': "20px",
  'app-display': "28px"
},
      fontWeight: {
  'regular': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700,
  'display': 800
},
      lineHeight: {
  'body': "1.65",
  'heading': "1.05",
  'arabic-body': "1.9",
  'arabic-heading': "1.3",
  'legal': "1.7"
},
      letterSpacing: {
  'heading': "0.5px",
  'eyebrow': "0.06em",
  'arabic': "0"
},
      spacing: {
  '1': "4px",
  '2': "8px",
  '3': "12px",
  '4': "16px",
  '5': "20px",
  '6': "24px",
  '7': "28px",
  '8': "32px",
  '10': "40px",
  '12': "48px",
  '16': "64px",
  '24': "96px",
  '30': "120px",
  'btn-y': "14px",
  'btn-x': "32px",
  'btn-sm-y': "10px",
  'btn-sm-x': "22px",
  'card-y': "26px",
  'card-x': "24px",
  'gutter': "16px",
  'section-min': "64px",
  'section-max': "120px",
  'wrap-max': "1200px",
  'wrap-pct': "92%",
  'logo-nav-h': "26px",
  'touch-min': "44px",
  'icon-tile': "52px",
  'icon-sm': "16px",
  'icon-md': "20px",
  'icon-lg': "24px",
  'header-h': "56px",
  'tabbar-h': "56px"
},
      borderRadius: {
  'pill': "999px",
  'card': "16px",
  'media': "14px",
  'sheet': "18px",
  'input': "12px",
  'sm': "8px",
  'logo-mark': "23%",
  'device': "22px"
},
      boxShadow: {
  'primary': "none",
  'primary-hover': "none",
  'overlay': "var(--fp-shadow-overlay)",
  'none': "none"
},
      zIndex: {
  'raised': "10",
  'sticky': "20",
  'header': "80",
  'scrim': "90",
  'sheet': "100",
  'toast': "110",
  'tooltip': "120"
},
      transitionDuration: {
  'press': "140ms",
  'hover': "250ms",
  'state': "300ms",
  'surface': "350ms",
  'reveal': "800ms"
},
      transitionTimingFunction: {
  'standard': "cubic-bezier(0.2,0.7,0.2,1)",
  'exit': "cubic-bezier(0.22,1,0.36,1)",
  'press': "ease-out"
},
      screens: {
  'min': "360px",
  'design': "390px",
  'sm': "640px",
  'md': "900px",
  'lg': "1200px"
},
      backgroundImage: { 'btn-primary': "linear-gradient(120deg, var(--fp-brand-red), var(--fp-brand-red-gradient-end))" }
    }
  }
};
