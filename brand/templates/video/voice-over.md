# Voice-over rules — Fiper video (v2.3.0, from production notes § 4-ج, § 2-ب, § 7 and the CEO's standing direction)

- **English VO may be synthesized** (Gemini TTS was the proven tool) **with the approved style prompt, verbatim:**

```text
Female/Male voice-over for a luxury, high-energy product launch film
(think a flagship sports car reveal or an Apple product film).
Rich, polished, warm, charismatic, confident and ENERGETIC with forward drive;
every line lands with intent. Not sleepy, not whispery, not corporate, not salesy.
Short natural pause between lines. Say "TWO" as the word two, and "Fiper" as FYE-per.
```

- **Rate:** 2.4–2.5 words/s for fast ads; slightly slower for luxury films. Scripts: 7–9 short lines, one idea per line, last line "Visit fiper dot me".
- **Selection is comparison-based:** generate 4–5 voices, ask the reviewer for an explicit ranking by energy-without-cheapness, naturalness, word clarity, luxury. Scoring voices one by one does not discriminate (every voice got 10/10) — never do it.
- **Arabic generated VO is PROHIBITED** (mispronounced financial terms, documentary tone — the partner-video path was cancelled on 2 Oct 2026). Arabic VO is **human only**; until a human recording exists the film ships without Arabic VO.
- **Never synthesize the CEO's or a partner's voice**, and never recombine recorded words into a new sentence without consent; the alternative is a short re-recording.
- Pronunciation: **"Fiper" = FYE-per**; "TWO" = the word two.
- Timing: detect silences (`silencedetect` −38 dB, 0.22 s), re-space the lines with computed gaps; each scene starts 0.05–0.1 s before its line; the title appears with the first word.
- Then the audio chain: `audio-standards.md`.
