import re, glob, sys, os, json
import numpy as np, skia
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.svgLib.path import SVGPath
from fontTools.pens.basePen import BasePen
class SkiaPen(BasePen):
    def __init__(self,gs=None): super().__init__(gs); self.p=skia.Path()
    def _moveTo(self,pt): self.p.moveTo(*pt)
    def _lineTo(self,pt): self.p.lineTo(*pt)
    def _curveToOne(self,a,b,c): self.p.cubicTo(*a,*b,*c)
    def _qCurveToOne(self,a,b): self.p.quadTo(*a,*b)
    def _closePath(self): self.p.close()
    def _endPath(self): pass
def skpath_svg(d):
    pen=SkiaPen(); SVGPath.fromstring(('<svg xmlns="http://www.w3.org/2000/svg"><path d="%s"/></svg>'%d).encode()).draw(pen); return pen.p

svg=open('/home/builder/Projects/fiper-brand/brand/logos/svg/fiper-lockup-white.svg').read()
ds=re.findall(r'<path d="([^"]+)"',svg); order=['swoosh','p','F','e','r','i']
logo={n:d for n,d in zip(order,ds)}
def bounds_svg(d):
    pen=BoundsPen(None); SVGPath.fromstring(('<svg xmlns="http://www.w3.org/2000/svg"><path d="%s"/></svg>'%d).encode()).draw(pen); return pen.bounds
S=200.0  # target cap height in px
capL=bounds_svg(logo['F']); capH=capL[3]-capL[1]
def raster(d, scale, flipy=False, size=(300,420)):
    p=d if isinstance(d,skia.Path) else skpath_svg(d); b=bounds_svg(d) if not isinstance(d,skia.Path) else (lambda r:(r.left(),r.top(),r.right(),r.bottom()))(p.getBounds())
    surf=skia.Surface(*size); c=surf.getCanvas(); c.clear(skia.Color4f(0,0,0,1))
    m=skia.Matrix()
    # translate bbox centre to canvas centre
    cx=(b[0]+b[2])/2; cy=(b[1]+b[3])/2
    if flipy: m.setScale(scale,-scale); 
    else: m.setScale(scale,scale)
    m.postTranslate(size[0]/2-cx*scale, size[1]/2-(cy*(-scale) if flipy else cy*scale))
    c.concat(m); paint=skia.Paint(Color=skia.ColorWHITE,AntiAlias=True); c.drawPath(p,paint)
    img=surf.makeImageSnapshot().toarray()[:,:,0].astype(np.float32)/255
    return img
def iou(a,b): return float((np.minimum(a,b).sum())/(np.maximum(a,b).sum()+1e-6))
L={g:raster(logo[g], S/capH) for g in 'Fper'}
Lb={g:bounds_svg(logo[g]) for g in 'Fperi'}
feat_logo={'xh/cap':(Lb['e'][3]-Lb['e'][1])/capH,'desc/cap':(Lb['p'][3]-capL[3])/capH,'Fw/cap':(Lb['F'][2]-Lb['F'][0])/capH,'ew/cap':(Lb['e'][2]-Lb['e'][0])/capH,'rw/cap':(Lb['r'][2]-Lb['r'][0])/capH,'pw/cap':(Lb['p'][2]-Lb['p'][0])/capH}
res=[]
files=sorted(glob.glob('../fonts/*.ttf'))+glob.glob('/usr/share/fonts/truetype/**/*Serif*.ttf',recursive=True)+glob.glob('/usr/share/fonts/truetype/**/Liberation*Serif*.ttf',recursive=True)+glob.glob('/usr/share/fonts/**/FreeSerif*.ttf',recursive=True)
for f in files:
    try:
        t=TTFont(f); gs=t.getGlyphSet(); cmap=t.getBestCmap()
        def gpath(ch):
            gn=cmap[ord(ch)]; pen=SkiaPen(gs); gs[gn].draw(pen); bp=BoundsPen(gs); gs[gn].draw(bp); return (pen.p if bp.bounds else None), bp.bounds
        dF,bF=gpath('F'); fcap=bF[3]-bF[1]; sc=S/fcap
        scores={}
        for g in 'Fper':
            d,b=gpath(g); 
            if d is None: raise Exception('empty')
            scores[g]=iou(L[g], raster(d, sc, flipy=True))
        de,be=gpath('e'); dp,bp_=gpath('p'); dr,br=gpath('r')
        feat={'xh/cap':(be[3]-be[1])/fcap,'desc/cap':(bF[1]-bp_[1])/fcap,'Fw/cap':(bF[2]-bF[0])/fcap,'ew/cap':(be[2]-be[0])/fcap,'rw/cap':(br[2]-br[0])/fcap,'pw/cap':(bp_[2]-bp_[0])/fcap}
        res.append({'font':os.path.basename(f),'name':t['name'].getDebugName(4),'mean':float(np.mean(list(scores.values()))),**{'iou_'+k:round(v,3) for k,v in scores.items()},'feat':{k:round(v,3) for k,v in feat.items()}})
    except Exception as e: print('skip',f,e,file=sys.stderr)
res.sort(key=lambda r:-r['mean'])
print('LOGO features',{k:round(v,3) for k,v in feat_logo.items()})
for r in res[:25]: print(f"{r['mean']:.3f}  F {r['iou_F']:.3f} p {r['iou_p']:.3f} e {r['iou_e']:.3f} r {r['iou_r']:.3f}  {r['name']:32s} {r['feat']}")
json.dump({'logo':feat_logo,'ranking':res},open('ranking.json','w'),indent=1)
