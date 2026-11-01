# Real-footage enhancement recipe — Fiper video (v2.3.0, proven on the Gulf flags film; production notes § 3-ج, § 5-د)

Ask first: **is the coloured light part of the place or a defect?** (the green LED strip stayed because it is real; the green cast on sky and flags was neutralised).

| Step | ffmpeg / tool | Setting |
|---|---|---|
| 1 Stabilise | `vidstabdetect` → `vidstabtransform` | `shakiness=6`, `smoothing=18`, `optzoom=1` |
| 2 Denoise | `hqdn3d` + `chromanr` | `hqdn3d=2.5:2:5:4`, `chromanr=thres=40` |
| 3 Cast neutralisation | Python + OpenCV in LAB | neutralise the cast on the **a** channel, stronger in the shadows; protect true light sources with a bright-and-saturated mask; add a slight cool blue in the shadows for night |
| 4 Contrast | soft S-curve on L | — |
| 5 Upscale | Topaz 2160p | then `colorbalance` to correct the green shift Topaz introduces |
| 6 Grain | `noise=c0s=4:c0f=t+u` | — |
| 7 Grade | `--fp-media-grade` | 8 % warm-charcoal overlay, no red cast (Q16) |
| Audio | `afftdn` + `loudnorm` | clean, then −20 LUFS for a bed / full chain for a film |

Slow motion 0.6–0.8× by interpolation: `minterpolate=mi_mode=mci:mc_mode=aobmc:me_mode=bidir` — **check on fast-moving objects** (ripples); never speed up a person's voice.
Commands:
```
ffmpeg -i in.mp4 -vf vidstabdetect=shakiness=6 -f null -
ffmpeg -i in.mp4 -vf "vidstabtransform=smoothing=18:optzoom=1,hqdn3d=2.5:2:5:4,chromanr=thres=40" -c:v libx264 -crf 16 -preset slow out-clean.mp4
ffmpeg -i out-clean.mp4 -vf "minterpolate=mi_mode=mci:mc_mode=aobmc:me_mode=bidir:fps=60,setpts=1.4*PTS" out-slow.mp4
ffmpeg -i out-graded.mp4 -vf "noise=c0s=4:c0f=t+u" -c:v libx264 -crf 16 -preset slow master.mp4
```
