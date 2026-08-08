# Redesign Plan — Visual Language

## Context

Reviewed the current implementation (`src/styles/global.css`, `Hero.astro`, `SelectedWork.astro`, `[slug].astro`) and three references: girledm.com, akriila.online, terriblebeautytour.com.

The current site is a competent editorial template: Source Serif headings, Inter body, off-white/dark warm neutrals, numbered project list, thin borders, restrained reveal-on-scroll. It's safe and readable but reads as "nice Notion export" — nothing about it is distinctive yet. IA is solid (Hero → Selected Work → Experience → About → Toolkit → Contact) and should stay exactly as-is.

Reference takeaways:
- **girledm.com** — raw glitch-logo type over a plain white canvas, blue underlined links, a tiny custom cursor icon.
- **akriila.online** — bold flat-color single-artifact page (a spinning vinyl, a "create your own cover" generator) with one typographic indulgence (blackletter) against otherwise plain layout.
- **terriblebeautytour.com** — a soft radial "torchlight" cursor that reveals a dark page — an interaction, not a chrome effect.

## 1. Design thesis

**"Field notes from a lab that also runs a record label."** The site should read as a personal technical notebook — the kind of raw, hand-built page someone made in 1999 to document an experiment, except the experiment is EEG decoding and the dataset has a billion rows. Authority comes from precision (file paths, dates, run indices), not from polish. Personality comes from restraint used deliberately, not from decoration.

## 2. Visual system

- **Ground**: off-white `#f7f5f0`-ish with a very faint grain/noise texture (CSS `background-image` noise SVG, ~3% opacity) — kills the "generic SaaS white" flatness without becoming textured wallpaper.
- **Type**: drop the serif entirely. One strong grotesk/sans for body and headings (e.g. a neutral geometric-humanist like Inter/Neue Montreal-ish), one monospace for *all* metadata, labels, numbers, paths (e.g. JetBrains Mono / IBM Plex Mono). The serif was the template's "editorial" tell — removing it is the single highest-leverage change.
- **Color**: near-black ink on off-white, one accent used sparingly and functionally (link blue, not decorative) — literal classic-web blue, slightly desaturated so it doesn't look like an unstyled `<a>`. Keep current dark-mode swap but re-tune tokens to match.
- **Links**: real underlines, real blue (`#1a4fd6`-ish), not the current same-as-text link color. This is a deliberate "early web" signal recruiters will read as confidence, not neglect.
- **Structure marks**: dotted/thin rules instead of solid borders in places; project numbers rendered as `001`, `002` in mono; section labels as bracketed tags `[PROJECT]`, `[2026]`, `[PYTHON]`; breadcrumbs as filesystem paths, e.g. `/work/eeg-motor-imagery/`.
- **Imagery**: no stock/decorative graphics — only real artifacts (terminal output, plots, EEG traces, screenshots), presented like scanned lab printouts: thin border, mono caption, no drop shadows/rounded corners.

## 3. Homepage changes

- Hero becomes more like a terminal/log header: name as a large plain wordmark, a `whoami`-style one-liner, then a metadata block in mono (`role`, `location`, `graduating 2026`) rather than a soft descriptive paragraph.
- Selected Work keeps its numbered-list architecture but each entry gains a path-style tag (`/work/eeg/`) and bracketed stack labels instead of the current dot-separated tech list.
- Section headings gain the `[SECTION]` / index-range treatment already hinted at (`01–04`) — push that further, it's the site's best existing idea.
- Homepage is where grain, mono labeling, and the interactive artifact live; density and expressiveness stay higher here than anywhere else on the site.

## 4. Cursor concept

Not a copy of terriblebeautytour's spotlight — theirs is atmospheric/soft; this one should be instrumentational, like a measurement device:

- **Default**: a small crosshair/plus (a few px lines + center dot), thin, monochrome — reads like a reticle, not a game cursor.
- **Over a project card**: crosshair snaps into a mono `VIEW` tag that follows the cursor, small tick marks at the corners of the hovered card (like a targeting/scan frame).
- **Over an external link**: crosshair swaps to `↗` in mono type.
- **Over a figure/screenshot**: swaps to `INSPECT`, and the image gets a 1px "scan line" or dotted frame while hovered.
- Implementation: single fixed-position element driven by `mousemove` + `data-cursor` attributes on targets, `pointer: fine` gate, native cursor restored under `prefers-reduced-motion` and on any touch/coarse-pointer device, real focus-visible states kept independently for keyboard users (cursor is a bonus layer, never the only affordance).

## 5. One interactive artifact (AKRIILA-inspired)

A small **live "signal" strip** near the top of the homepage — not a hero centerpiece, a quiet instrument. Concept: a thin EEG-style waveform line rendered in canvas/SVG that idles with a plausible noisy signal, and reacts subtly to the cursor (like a real recording flinching from EMG artifact when you move near it) or ticks a mono counter (`n = 128 channels`, `fs = 250Hz`) alongside it. It should feel like a diagnostic readout left running in the corner of a lab, not a toy. Bounded height, no sound, `prefers-reduced-motion` freezes it to a static frame.

## 6. Micro-details

- Hover on nav items underlines with a slight delay/snap rather than a fade — mechanical, not smooth.
- Project index numbers (`001`) increment in mono and get a hover state that ticks like an odometer digit (optional, very subtle, skip under reduced-motion).
- Footer rendered like a file listing (`site.ts`, `last modified 2026-08-07`) instead of generic social icons.
- External links always show `↗` inline next to the text, not just on cursor.
- Section dividers as dotted rules with a small inline label (`— 03 —`) instead of plain `<hr>`-style borders.
- Figures get mono captions formatted like a plot title (`fig. 2 — accuracy by fold`).
- Selection color (`::selection`) tuned to the accent blue instead of default OS blue.
- A faint corner tag on the page (`v1.0`, or a build date) — the kind of stamp an internal tool has.

## 7. What stays unchanged

Full information architecture and section order; recruiter-facing content and copy; project detail page structure (overview/problem/approach/implementation/evaluation/learned); all links (résumé, GitHub, LinkedIn) and their placement; the "keep detail pages highly readable" constraint — those pages get the mono/label treatment for metadata only, body copy stays a clean readable measure with minimal motion and no cursor gimmicks beyond the default reticle.

## 8. Prioritized implementation plan

1. Type + color token overhaul (drop serif, real link-blue, grain background) — highest visual impact, lowest risk.
2. Metadata language pass: bracketed labels, path-style tags, mono numbering across Hero/SelectedWork/detail pages.
3. Custom cursor system with the four states + reduced-motion/touch fallback.
4. Micro-detail pass (hover mechanics, footer-as-filesystem, selection color, dotted rules).
5. Homepage signal-strip artifact (isolated component, easiest to cut if time-constrained).
6. Cross-page QA: mobile cursor fallback, reduced-motion audit, detail-page readability check against the new tokens.
