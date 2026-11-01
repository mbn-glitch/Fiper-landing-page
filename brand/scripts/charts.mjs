// Reference line chart generated from data (positions, axes and labels all computed). Themes: paper | dark. Returns an SVG string.
import { SAMPLE, fmtCents } from './sample-data.mjs';
const C = { paper:{ line:'#120D0E', bench:'#6B635E', grid:'rgba(18,13,14,.12)', text:'#6B635E', strong:'#120D0E', dot:'#DC2626' }, dark:{ line:'#EDEAE6', bench:'#8E8681', grid:'rgba(237,234,230,.08)', text:'#8E8681', strong:'#EDEAE6', dot:'#DC2626' } };
const nice = (min,max,ticks=4) => { const span=max-min; const raw=span/ticks; const mag=Math.pow(10,Math.floor(Math.log10(raw))); const step=[1,2,2.5,5,10].map(m=>m*mag).find(s=>s>=raw); const lo=Math.floor(min/step)*step, hi=Math.ceil(max/step)*step; const t=[]; for(let v=lo; v<=hi+1e-9; v+=step) t.push(Math.round(v)); return t; };
export function lineChart({ theme='paper', width=660, height=200, x:ox=null, y:oy=null, data=SAMPLE.portfolioCents, bench=SAMPLE.benchmarkCents, labels=SAMPLE.monthsAr, lang='ar', fontSize=11, padL=54, padR=14, padT=14, padB=26, showBench=true, showEnd=true, showStart=true, xEvery=3, fontFamily="IBM Plex Mono, IBM Plex Sans Arabic, Inter" } = {}) {
  const c=C[theme]; const all=showBench?data.concat(bench):data; const ticks=nice(Math.min(...all)/100, Math.max(...all)/100, 4);
  const y0=ticks[0]*100, y1=ticks.at(-1)*100; const W=width-padL-padR, H=height-padT-padB; const n=data.length;
  const x=i=>padL+i*(W/(n-1)); const y=v=>padT+H-(v-y0)/(y1-y0)*H;
  const path=a=>a.map((v,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(v).toFixed(1)).join(' ');
  const grid=ticks.map(t=>`<line x1="${padL}" y1="${y(t*100).toFixed(1)}" x2="${width-padR}" y2="${y(t*100).toFixed(1)}" stroke="${c.grid}"/>`).join('');
  const yl=ticks.map(t=>`<text x="${padL-8}" y="${(y(t*100)+4).toFixed(1)}" text-anchor="end" fill="${c.text}">${(t/1000).toFixed(1)}k</text>`).join('');
  const xl=labels.map((l,i)=>(i%xEvery===0||i===n-1)?`<text x="${x(i).toFixed(1)}" y="${height-6}" text-anchor="${i===0?'start':i===n-1?'end':'middle'}" fill="${c.text}">${l}</text>`:'').join('');
  const endLabel=showEnd?`<circle cx="${x(n-1).toFixed(1)}" cy="${y(data.at(-1)).toFixed(1)}" r="3.5" fill="${c.dot}"/><text x="${(x(n-1)-8).toFixed(1)}" y="${(y(data.at(-1))-8).toFixed(1)}" text-anchor="end" fill="${c.strong}" font-weight="600">${fmtCents(data.at(-1))}</text>`:'';
  const startLabel=showStart?`<text x="${(x(0)+6).toFixed(1)}" y="${(y(data[0])+14).toFixed(1)}" fill="${c.text}">${fmtCents(data[0])}</text>`:'';
  return `<svg viewBox="0 0 ${width} ${height}" ${ox!==null?`x="${ox}" y="${oy}" width="${width}" height="${height}"`:'width="100%"'} font-family="${fontFamily}" font-size="${fontSize}" direction="ltr" role="img" aria-label="portfolio value chart" data-chart="sample-portfolio-12m">${grid}${yl}${xl}${showBench?`<path d="${path(bench)}" fill="none" stroke="${c.bench}" stroke-width="1.5" stroke-dasharray="4 4"/>`:''}<path d="${path(data)}" fill="none" stroke="${c.line}" stroke-width="2"/>${startLabel}${endLabel}</svg>`;
}
// Replace <!--CHART:{json}--> … <!--/CHART--> markers in a file with a generated chart (idempotent)
export function injectCharts(html){ return html.replace(/<!--CHART:(\{[\s\S]*?\})-->[\s\S]*?<!--\/CHART-->/g,(m,j)=>`<!--CHART:${j}-->${lineChart(JSON.parse(j))}<!--/CHART-->`); }
