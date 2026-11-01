# Perspective compositing — a screen recording on a device photo (v2.3.0, production notes § 4-د)

- **Measure** the four screen corners on the device plate by edge inspection. A 16:10 laptop panel shows a 16:9 recording with **natural black bars** (never stretch).
- **Transform**: homography from the recording's corners to the measured corners → CSS `matrix3d` (helper `lib/compositing.mjs` → `matrix3d(w, h, dst)`); mask matched to the panel with 0.8 px feather.
- **Realism**: 0.6 px softness on the screen; screen light spill on the keyboard in the plate's mean colour; a faint diagonal sheen.
- **Handheld**: multi-frequency sine drift **±7 px**, rotation **±0.35°**, slow push-in.
- **Vertical crop** of a landscape composite: zoom **1.27** so the screen fills the 9:16 frame.
- Asset type is always `screen` (Q10): the recording is real and unaltered — red elements inside a trading app stay as they are (never "corrected" by a reviewer).
