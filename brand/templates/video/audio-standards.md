# Audio standards — Fiper video (v2.3.1; CEO-approved broadcast chain of 15 Oct 2026, adopted from `brand/references/production-notes-2026-10-30.md` § 4-ب)

Values live in `audio-mix.json`; the chain is implemented as ffmpeg filter strings in `lib/audio-chain.mjs`; delivery is verified by `scripts/check-audio-loudness.mjs` (ffmpeg `ebur128`). Measure, never assume.

| Stage | Setting |
|---|---|
| Voice-over clean-up | highpass 80 Hz → compressor threshold −22 dB, ratio 3:1, attack 6 ms, release 100 ms → EQ +1.5 dB @ 4.5 kHz → loudnorm −16 LUFS, TP −2, LRA 7 |
| Music | loudnorm −20 LUFS, then −1…−2 dB trim (`trim_db` −1.5) |
| **Ducking under speech** | **−9…−12 dB across the WHOLE speech span — from the first word to the last — with 0.3 s ramps. Never duck and recover between sentences** (that made the music swell in the pauses; the CEO rejected it). `duckExpr(spans)` takes `[[t0,t1],…]` in seconds |
| SFX | whoosh on transitions −14…−16 dB · boom when the takeaway lands on the last shot (official films; there is no closing card since v2.3.1) · click on button presses · chime on a notification · person-led reels: SFX only for a visible graphic event, never on cuts (`partner-edit.md` § 12-أ 11) |
| Final bus | alimiter 0.89 → loudnorm −14 LUFS, TP −1.5 |
| **Second pass** | measure the final bus with `ebur128`, then apply `volume=(−14.1 − I) dB` and measure again — single-pass loudnorm lands ±0.3 LU off target on short films; the limiter already holds the true peak |
| Verification | `ebur128` on the delivered file: integrated **−14.0…−14.2 LUFS**, true peak **≤ −1.5 dBTP** → `node scripts/check-audio-loudness.mjs <file>` |
| Delivery codecs | AAC 256k (MP4 master / share), Opus 160k (WebM samples); 48 kHz stereo |

Mix command: `mixArgs({ vo, music, spans, out, sfx:[{file, at, kind}] })` in `lib/audio-chain.mjs` returns the ffmpeg argument list (VO chain, music chain + duck, SFX gains, amix, final bus).

Phone dialogue of a partner reel: the chain of `partner-edit.md` § 7-ب before this bus (noise floor per take, afftdn by floor, highpass 80, de-esser 0.35, every take to −20 LUFS short-term before the join, then the package compressor / EQ / −16 LUFS stem), and the final bus **in two passes** to −14.0…−14.2 LUFS / TP ≤ −1.5 — the −16 is the stem, never the delivered file.

Package samples: the three WebM samples carry a **synthetic placeholder bed** (brown noise, low-passed, swell) pushed through the music chain, a duck under a notional speech span and the final bus — it exists so the loudness gate measures a real −14 LUFS mix; it is not music and not a music direction. Music rules: `music.md`. Voice: `voice-over.md`.
