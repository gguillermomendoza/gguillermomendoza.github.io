# Portfolio Plan — gguillermomendoza.github.io

Research and planning pass for the portfolio, based on `PORTFOLIO_SPEC.md`. No site code has been written yet.

## 1. Repo state

`gguillermomendoza.github.io` is currently an empty git repo (no commits, no remote configured) containing only `PORTFOLIO_SPEC.md`. Nothing to preserve. The directory name confirms this is meant to be the GitHub Pages **user site** — production URL will be `https://gguillermomendoza.github.io/`, no base path needed. A GitHub remote still needs to be created/linked before the Actions deploy workflow can run; that happens at implementation/deploy time, not now.

## 2. Positioning

Every substantive project follows the same pattern: take a large or messy dataset (EEG signals, 1.1B tweets, 31M rows, unstructured résumé/job text), build a real pipeline around it, and validate it carefully (fold-safe CV, leakage checks, coverage/fact-checking, query-time benchmarks) instead of stopping once it runs. That's the throughline: a builder who turns messy or large data into validated systems, across research ML, applied AI/LLMs, and data engineering. Not branded narrowly as "AI engineer" or as "neuroscientist."

## 3. Featured projects and why

1. **Complex-Valued Models for EEG Motor Imagery** (`complex-valued-models-on-BCI-thesis`) — honors thesis. Verified via README: compares rCSP, cCSP, and TIMBRE on BCI-competition EEG data; pipeline includes filtering, Hilbert-transform/analytic-signal construction, whitening, Optuna tuning, fold-safe evaluation, and leakage diagnostics. Repo has no separate figures folder, only `README.md` plus one large notebook (`user_friendly_notebook.ipynb`) — any detail-page figures would need to come from notebook output cells, unverified whether usable ones exist. The README does not itself state a specific accuracy number; the "~10 point improvement" figure in the spec comes from the broader thesis, not the repo, so it will be captioned as such rather than presented as a repo-verified metric.

2. **Grounded AI Résumé Builder** (`ai_resume_builder`) — confirmed via README: requirement extraction, evidence retrieval from résumé/GitHub data, coverage evaluation, unsupported-claim checking, style/fact separation, Gradio UI, Gemini API, pytest suite, and a real `.github/workflows/tests.yml` CI file. This repo is a fork of `camunity/ai_resume_builder` (a workshop starter), but commit history shows 13+ commits under the user's own account building the grounding/evaluation logic on top of it. Copy should frame this honestly (built during an applied-AI workshop, extended into a grounding/evaluation system) rather than implying fully from scratch.

3. **Coronavirus Twitter Analysis** (`twitter_coronavirus`) — confirmed via README: ~1.1B geotagged tweets from 2020, custom MapReduce (`map.py`/`reduce.py`), one mapper per day launched via `nohup`/background POSIX processes, streamed compressed archives without decompressing to disk, and real generated PNG figures (`reduced.all.lang.coronavirus.png`, `alternative_reduce.png`, etc.) that are good direct screenshot candidates. It's a fork of `mikeizbicki/twitter_coronavirus` (course assignment template); the mapper/reducer/visualizer implementation is the student's own.

4. **PostgreSQL Query Optimization** (`twitter_postgres_indexes`) — the fourth project. Confirmed via README: ~31M tweets over 10 days, normalized vs. denormalized schema design, indexing strategy (3 B-tree + 1 GIN index per the reference solution), and a real benchmark: denormalized queries went from ~39 minutes to ~3 seconds. Chosen over the alternatives because it adds genuine data-engineering/systems breadth instead of another ML project, and has the most concrete, verifiable before/after number of any repo.
   - Ruled out `WavNet-EEG-Sonification`: despite the name, the README and file contents (NSynth conditioning, `.wav` audio, μ-law tokenization) show it is a WaveNet-style audio-generation experiment with no EEG data or sonification anywhere in the repo. Framing it as EEG work would be fabrication.
   - Ruled out `goodreads-review-summaries`: legitimate (shell/jq/`llm`-CLI RAG pipeline over 15.7M reviews) but conceptually redundant with the résumé builder (both LLM/RAG projects) and has no quantitative benchmark to anchor it.

## 4. Homepage structure

1. **Hero** — name, headline, 1–2 line description, links: Selected Work / GitHub / LinkedIn / Résumé.
2. **Selected Work** (centerpiece) — 4 project entries in this order: EEG thesis → Résumé Builder → Twitter/MapReduce → Postgres indexing. Each entry links out in two places: a "Read more" to its own detail page, and a direct link to its GitHub repo, so a visitor can go straight to the code without visiting the detail page first.
3. **Experience** — compact, 5 entries, 1–2 lines each.
4. **About** — short, casual paragraph.
5. **Technical Toolkit** — grouped text list, visually quiet, below About.
6. **Contact** — one CTA line plus Email/LinkedIn/GitHub.

Navigation: wordmark (home), Work, Experience, About, Résumé, GitHub. Mobile: simple disclosure menu.

## 5. Visual direction

"Research paper, not landing page." A single-column, generous-margin editorial layout that reads like a well-typeset technical report.

- **Typography:** a restrained serif for headings (e.g. Source Serif 4 or Fraunces) paired with a clean sans for body/UI text (Inter or IBM Plex Sans). Body text capped at a comfortable reading width (~65–75ch).
- **Spacing:** generous vertical rhythm between sections, separated by whitespace and a single hairline rule, not colored bands.
- **Page width:** content column max-width ~720–840px even on wide monitors; never stretches edge to edge.
- **Project presentation:** each project is a horizontal record: small index number (01–04), title, one-sentence problem statement, 2–3 sentence explanation, one quantitative fact set apart typographically (not a colored stat badge), plain-text tech list, GitHub link, "Read more" link to detail page. No card shadows, no hover-lift effects.
- **Borders/backgrounds:** flat background (off-white / near-black in dark mode), thin 1px hairline borders as the only separators, no gradients, no drop shadows.
- **Imagery:** sparing, only where repo evidence exists. The Twitter project's actual generated PNGs belong on its detail page. The Postgres project shows a plain-text query-timing snippet instead of a screenshot. The EEG thesis page uses a pulled notebook figure only if one is confirmed usable during implementation, otherwise a simple text/CSS pipeline diagram, not stock imagery.
- **Interactions/animation:** restrained: a subtle fade/slide-in on scroll (a few px, under 200ms) at most, underline transitions on links. No parallax, no typing effects, no progress bars.
- **Mobile:** single column throughout, nav collapses to a disclosure menu, index numbers and stat callouts stack cleanly, generous tap targets, nothing hidden behind hover-only interaction.

## 6. Draft copy

**Hero headline:**
> Guillermo Mendoza
> Data, machine learning, and applied AI.

**Hero description:**
> Recent Neuroscience & Data Science graduate. I build analytical and ML systems, work with messy or large datasets, and spend as much time checking whether a result holds up as I do producing it.

**Homepage project summaries** (each links to its GitHub repo and its detail page):

1. *EEG Motor Imagery, Complex-Valued Models.* Can complex-valued representations reveal structure in EEG that standard real-valued models miss? I built a fold-safe pipeline comparing real-valued CSP, complex-valued CSP, and a complex-valued neural architecture (TIMBRE) on motor-imagery EEG, with leakage checks and spectral diagnostics built in.

2. *Grounded AI Résumé Builder.* LLMs make things up, which is a problem when the thing is your résumé. I built a Gradio app that extracts job requirements, retrieves evidence from your résumé and GitHub history, and checks its own output for unsupported claims before it reaches you.

3. *Coronavirus Twitter Analysis.* How do hashtags spread across languages and countries during a pandemic? I processed about 1.1 billion geotagged tweets from 2020 with a custom MapReduce pipeline, streaming compressed daily archives in parallel across POSIX background processes instead of decompressing them to disk.

4. *PostgreSQL Query Optimization.* A 31 million row query that takes 39 minutes isn't usable. I redesigned the schema (normalized vs. denormalized) and built targeted B-tree and GIN indexes to bring that down to about 3 seconds.

**Experience** (drafted from titles only, placeholders, see §8):
- **beatLab, Research Assistant** — supported ongoing research requiring hands-on experimentation and data analysis.
- **Sheung Lab, Research Assistant / Lab Manager** — combined lab operations ownership with data collection and analysis work.
- **Airis Garden, AI Marketing Strategy Consultant / Project Manager** — applied AI tools to a marketing problem while managing stakeholder-facing deliverables.
- **Portal & Form Developer** — built and maintained internal tooling and forms.
- **CS & ML Tutor** — taught technical concepts one on one, translating ML/CS material for varied backgrounds.

**About copy** (casual, sober, no em dashes, ~110 words):
> I got into data science through neuroscience. Trying to make sense of noisy brain data got me into statistics, signal processing, and machine learning, and that's roughly what I've kept doing since, across EEG decoding, large Twitter datasets, database work, and a few applied LLM projects.
>
> I tend to like problems where it's not clear yet what to build or how to check if it worked. That's the part I spend most of my time on: setting up an evaluation I actually trust before I trust the result.
>
> I'm finishing up at Pitzer College this year and looking for a first full-time role in data science, ML, or applied AI.

**Contact CTA:**
> I'm always interested in difficult data problems and teams where I can learn quickly and own meaningful work.
> [Email] · [LinkedIn] · [GitHub]

## 7. Project-page content plan

Each detail page: Overview, Problem, Approach, Technical Implementation, Evaluation/Results, What I Learned, GitHub link.

- **EEG thesis:** Approach covers the CSP/cCSP/TIMBRE comparison and preprocessing chain. Evaluation sticks to what the README states (comparative accuracy trends, fold-wise diagnostics) and caveats any headline number as coming from the broader thesis, not the repo itself. What I Learned can cover the leakage/sanity-check discipline the README highlights.
- **Résumé Builder:** Approach covers requirement extraction, evidence retrieval, grounded generation, coverage/fact-check evaluation. Technical Implementation names `pipeline.py`/`gradio_app.py`, Gemini API, pytest, CI. Evaluation describes the coverage-gap and unsupported-claims checks as the result; no accuracy percentage exists to cite, so none is invented.
- **Twitter/MapReduce:** Approach covers the mapper/reducer/visualizer split and POSIX parallelism. Evaluation embeds the real PNG figures from the repo, states the ~1.1B tweet scale, and links to the Postgres project as the natural next step.
- **Postgres Indexing:** Approach covers normalized vs. denormalized schema decisions and index types (3 B-tree + 1 GIN per the reference solution). Evaluation states the 39-minute to ~3-second figure with the row count (~31M) and time window (10 days) attached. What I Learned addresses the trade-off between schema design and indexing strategy for query performance.

## 8. Missing information / open items

- **Résumé PDF** — user will supply the final rendering once the site is otherwise complete, to be placed at `public/Guillermo_Mendoza_Resume.pdf`. Implementation will build the résumé link/button against that path now so it works the moment the file is dropped in; no placeholder content needed in the meantime.
- **No résumé text available yet** — the Experience bullets above are inferred from job titles alone and are placeholders, not verified descriptions. Should be revisited once the résumé is available, or replaced with input from the user directly.
- **EEG thesis headline accuracy number** ("~10 points over baseline") is stated in the spec as coming from the broader thesis, not confirmed in the repo README. Will be presented with that caveat, not as a repo-sourced metric.
- **EEG thesis figures** — repo has no dedicated images folder; the only source is the large notebook file, not yet opened cell by cell to confirm it contains exportable static plots. Needs to be checked during implementation before promising a screenshot on that detail page.
- Every other technical claim used in this plan (all four projects' functionality, the 1.1B tweet count, the 31M row / 39-minute-to-3-second benchmark, the résumé builder's grounding features) was verified directly against each repository's README or GitHub API metadata.

## 9. Implementation architecture (for the next phase)

- Astro + TypeScript, static output, minimal client JS (mobile nav toggle, subtle scroll-in effect only).
- Content layer: `src/data/projects.ts`, `src/data/experience.ts`, `src/data/skills.ts`, `src/data/links.ts`, typed plain objects. Each project entry carries both its homepage summary and its detail-page sections so nothing is duplicated between the two.
- Routing: `src/pages/index.astro` plus `src/pages/work/[slug].astro` for the four project detail pages.
- Assets: repo-pulled PNGs (Twitter project) copied into `public/images/` or `src/assets/`; résumé and other static assets referenced through Astro's base-path handling rather than hardcoded root paths, so a future custom domain move doesn't require rewriting links.
- Styling: plain CSS with custom properties for the type/spacing/color tokens in §5.
- Deployment: `.github/workflows/deploy.yml` using `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages` on push to `main`. No CNAME file until a custom domain is actually chosen.
