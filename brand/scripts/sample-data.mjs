// ONE consistent SAMPLE dataset for every reference chart/table (report, portfolio, slide, mockups, manual). Figures are SAMPLE, arithmetically consistent.
export const SAMPLE = {
  currency: 'USD', asOf: '2026-10-31', periodLabel: { ar: 'نوفمبر 2025 → أكتوبر 2026', en: 'Nov 2025 → Oct 2026' },
  // month-end portfolio value (USD cents as integers) — 13 points: 31 Oct 2025 … 31 Oct 2026
  months: ['2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06','2026-07','2026-08','2026-09','2026-10'],
  monthsAr: ['أكتوبر 2025','نوفمبر','ديسمبر','يناير 2026','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر 2026'],
  portfolioCents: [1025000, 1038400, 1047900, 1031200, 1056800, 1072300, 1069100, 1088500, 1104200, 1112700, 1098900, 1124990, 1155365],
  // benchmark = S&P 500 Sharia index rebased to the portfolio's start value (same first point), in cents
  benchmarkCents: [1025000, 1033100, 1041700, 1029900, 1049400, 1061200, 1066800, 1078300, 1090100, 1101900, 1095400, 1109800, 1131200],
  holdings: [
    { sym:'SPUS', name:'S&P 500 Sharia', unitsMicro: 42000000, valueCents: 521430, monthChangeBps: 310 },
    { sym:'HLAL', name:'Wahed FTSE USA Shariah', unitsMicro: 60000000, valueCents: 310860, monthChangeBps: -80 },
    { sym:'UMMA', name:'Wahed Dow Jones Islamic', unitsMicro: 55000000, valueCents: 198075, monthChangeBps: 0 },
  ],
  cashCents: 125000, cashNote: { ar: 'إيداع قيد التسوية · 31 أكتوبر 2026', en: 'deposit settling · 31 Oct 2026' },
  feesCents: 875, feesBps: 8, depositsCents: 125000, ordersExecuted: 1284, ordersVolumeCents: 160532000, settlement: 'T+2', fundsListed: 17,
};
export const holdingsTotal = SAMPLE.holdings.reduce((s,h)=>s+h.valueCents,0);           // 1,030,365
export const totalCents = holdingsTotal + SAMPLE.cashCents;                               // 1,155,365 = last portfolio point
export const startOfMonthCents = SAMPLE.portfolioCents[SAMPLE.portfolioCents.length-2];   // 1,124,990
export const monthGainCents = totalCents - startOfMonthCents;                            // 30,375
export const monthGainBps = Math.round(monthGainCents / startOfMonthCents * 10000);       // 270
export const fmtCents = c => (c<0?'−':'') + (Math.abs(c)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
export const fmtBps = b => (b>0?'+':b<0?'−':'') + (Math.abs(b)/100).toFixed(2) + ' %';
export const fmtUnits = m => (m/1e6).toFixed(4).replace(/\.?0+$/,'');
if (totalCents !== SAMPLE.portfolioCents.at(-1)) throw new Error('SAMPLE inconsistent: holdings+cash ≠ last point');
