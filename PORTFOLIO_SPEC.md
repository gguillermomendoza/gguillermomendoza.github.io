
## Goal

The site should help me land early-career roles in:

- Data Science
- Machine Learning / AI Engineering
- Data Engineering
- Applied AI
- Quantitative / technical analyst roles

The website should communicate that I am someone who can take ambiguous technical problems, work with messy or large datasets, build analytical/ML systems, validate them carefully, and communicate the results.

This should NOT feel like a generic software-engineer template or an online copy of my résumé.

The primary audience is recruiters, hiring managers, technical leads, and people I contact through networking.

## About me

Name: Guillermo A. Mendoza Franco

GitHub:
https\://github.com/gguillermomendoza

LinkedIn:
[https://linkedin.com/in/guillermo-mendoza-franco](https://linkedin.com/in/guillermo-mendoza-franco)

Education:
Pitzer College, Class of 2026
B.A. with Honors in Neuroscience & Data Science
GPA: 3.80

My background combines machine learning, neuroscience research, large-scale data processing, applied AI, and statistical analysis.

I am especially interested in building systems that turn messy, high-dimensional, or unstructured information into something useful.

## Design direction

Create something:

- clean
- minimal
- technical
- modern
- slightly editorial/research-oriented
- distinctive without being flashy
- extremely easy to scan

Think more "research engineer / applied scientist / thoughtful technical builder" than "crypto startup landing page."

Avoid:

- giant gradient blobs
- excessive animations
- skill progress bars
- typing animations
- huge walls of text
- generic stock illustrations
- dozens of technology logos
- cheesy phrases like "turning coffee into code"
- overusing cards for everything

Use generous whitespace, strong typography, subtle borders, and restrained motion.

Dark mode is optional, but if implemented it should be excellent.

## Information architecture

### 1. Hero

The first screen should immediately communicate who I am and what I do.

Use a concise headline along the lines of:

"Guillermo Mendoza
Data, machine learning, and applied AI."

Then a short 1–2 sentence description explaining that I am a recent Neuroscience & Data Science graduate who builds analytical and ML systems across research, large-scale data, and applied AI.

Do not make me sound narrowly like only a neuroscientist.

Include prominent links to:

- Selected Work
- GitHub
- LinkedIn
- Résumé

The hero should make someone want to scroll into the projects.

### 2. Selected Work

THIS SHOULD BE THE CENTERPIECE OF THE WEBSITE.

Do not simply display every GitHub repository.

Create approximately 4 featured projects.

#### Project 1 — Complex-Valued Models for EEG Motor Imagery

Repository:
https\://github.com/gguillermomendoza/complex-valued-models-on-BCI-thesis

This was my undergraduate honors thesis.

Core story:

- Built an end-to-end machine-learning pipeline for high-dimensional EEG motor-imagery data.
- Compared real-valued CSP, complex-valued CSP, and a complex-valued neural architecture called TIMBRE.
- Pipeline included filtering, analytic-signal construction, whitening, fold-safe evaluation, hyperparameter search, spectral analysis, and leakage/sanity checks.
- Complex-valued approaches revealed useful structure not captured by the standard real-valued baseline.
- Improved predictive accuracy by roughly 10 absolute percentage points over a baseline in my broader thesis work.

Technologies/concepts:
Python, TensorFlow/Keras, scikit-learn, SciPy, MNE, Optuna, signal processing, cross-validation, EEG.

Frame this as a modeling + experimental-validation project rather than merely "I trained a neural network."

#### Project 2 — Grounded AI Resume Builder

Repository:
https\://github.com/gguillermomendoza/ai\_resume\_builder

Core story:
I built an applied AI system that tailors résumés and generates cover letters while attempting to prevent unsupported claims.

Important functionality:

- extracts requirements from job descriptions
- retrieves evidence from résumé and optional GitHub data
- generates grounded recommendations
- evaluates requirement coverage
- checks outputs for unsupported claims
- separates factual evidence from writing-style examples
- provides source tracing
- includes API logging, error handling and tests
- Gradio interface
- Gemini integration

Frame this as an LLM reliability / grounding problem, not simply "used an API to generate a résumé."

Technologies/concepts:
Python, LLMs, retrieval, grounded generation, evaluation, Gradio, APIs, pytest, GitHub Actions.

#### Project 3 — Coronavirus Twitter Analysis

Repository:
https\://github.com/gguillermomendoza/twitter\_coronavirus

Core story:
Processed approximately 1.1 billion geotagged tweets from 2020 to study the geographic and linguistic spread of COVID-related hashtags.

Important implementation details:

- custom MapReduce pipeline
- one day of data per mapper
- POSIX background processes for parallel processing
- streamed compressed archives instead of decompressing them to disk
- Python reducers aggregated yearly counts
- analyzed hashtag distributions across languages and countries
- generated trend visualizations

Technologies/concepts:
Python, shell scripting, MapReduce, POSIX, large-scale data processing, compressed data, visualization.

Emphasize the scale: \~1.1B tweets.

Also link this project where appropriate to my PostgreSQL indexing work:
https\://github.com/gguillermomendoza/twitter\_postgres\_indexes

Mention that I subsequently worked with approximately 31M records and designed PostgreSQL indexes that reduced multi-minute query scans to seconds.

#### Project 4 — choose intelligently

Inspect my GitHub repositories and select the strongest fourth project.

Potential candidates include:

- Goodreads review summarization
- WavNet EEG Sonification
- PostgreSQL indexing
- another substantial project you find in my GitHub

Choose based on what adds the most breadth to the portfolio rather than simply repeating another ML project.

IMPORTANT:
Inspect the actual README/code before writing project copy. Do not fabricate functionality, metrics, or technology usage.

### Project presentation

For each major project, present:

- project name
- one-sentence problem statement
- 2–3 sentence explanation
- one prominent quantitative result or technical fact when available
- technologies
- GitHub link
- optional "Read more" expandable/detail page

Where useful, pull actual visualizations/screenshots from the repositories rather than adding decorative imagery.

I want the viewer to understand:

**Problem → what I built → what was technically difficult → result**

rather than just seeing a list of technologies.

### 3. Experience / Research

Keep this compact.

Highlight the experiences that explain the projects and my ability to work on open-ended problems:

- beatLab — Research Assistant
- Sheung Lab — Research Assistant / Lab Manager
- Airis Garden — AI Marketing Strategy Consultant / Project Manager
- Portal & Form Developer
- Computer Science & Machine Learning Tutor

Do not reproduce every résumé bullet.

Use short descriptions emphasizing:

- ownership
- experimentation
- data/ML work
- technical communication
- working with stakeholders

### 4. About

Write a short human introduction.

Something approximately like:

"My path into data science started through neuroscience: trying to understand noisy biological systems pushed me toward statistics, signal processing, and machine learning. Since then I've worked across EEG decoding, billion-record datasets, database optimization, and applied LLM systems."

Then briefly explain that I enjoy problems where the question is initially ambiguous and the work involves figuring out both what to build and how to evaluate whether it works.

Keep this to about 100–150 words.

Do not make it overly inspirational.

### 5. Technical toolkit

Do not create a giant logo wall.

Group skills simply:

Languages:
Python, SQL, R, MATLAB, C++

ML / Statistics:
scikit-learn, TensorFlow/Keras, statistical modeling, model validation, cross-validation, time-series analysis, signal processing

Data / Systems:
PostgreSQL, ETL, MapReduce, Docker, Linux, shell scripting

Applied AI:
LLM workflows, retrieval, grounded generation, evaluation, RAG

Engineering:
Git, GitHub Actions, APIs, HTML/CSS/JavaScript

Make this visually secondary to the projects.

### 6. Contact

Simple CTA:

"I'm always interested in difficult data problems and teams where I can learn quickly and own meaningful work."

Links:
Email
LinkedIn
GitHub

Do not include a contact form unless there is a compelling reason.

## Hosting and deployment — GitHub Pages

This portfolio MUST be designed specifically to deploy on **GitHub Pages**.

Use:

- Astro
- TypeScript
- static site generation
- minimal client-side JavaScript
- plain CSS or Tailwind, whichever keeps the implementation cleaner

Do NOT introduce:

- a backend
- server-side rendering
- databases
- Vercel-specific functionality
- Netlify-specific functionality
- services that prevent the site from running as a completely static GitHub Pages site

### GitHub Pages setup

Before configuring Astro, inspect the current Git repository and determine its GitHub repository name.

There are two possible deployment cases:

#### Case A — User site

If the repository is:

`gguillermomendoza.github.io`

then the production site should be:

`https://gguillermomendoza.github.io/`

Configure Astro accordingly, with no repository-name base path.

Avoid hardcoded root-relative asset paths that break on GitHub Pages project sites.

### GitHub Actions deployment

Create a production GitHub Actions workflow at:

`.github/workflows/deploy.yml`

Use GitHub's official Pages deployment workflow/actions.

The intended behavior is:

1. Push to `main`
2. GitHub Actions installs dependencies
3. Astro builds the static site
4. The generated `dist/` directory is uploaded as the Pages artifact
5. GitHub Pages automatically deploys the artifact

Use appropriate permissions for GitHub Pages deployment.

Do not require me to manually copy the `dist` directory into another branch.

### Package scripts

Ensure `package.json` includes sensible scripts such as:

- `npm run dev`
- `npm run build`
- `npm run preview`

The production build must work with:

`npm run build`

### Résumé asset

I will place my résumé at:

`public/Guillermo_Mendoza_Resume.pdf`

Make sure the résumé links work correctly under GitHub Pages regardless of whether this is deployed as a user site or project site.

Do not hardcode `/Guillermo_Mendoza_Resume.pdf` if that would break under a repository base path.

### GitHub repository links

My GitHub username is:

`gguillermomendoza`

Portfolio links to projects should point to the actual GitHub repositories.

Open external GitHub and LinkedIn links in a new tab with appropriate security attributes.

### Custom domain readiness

I may add a custom domain later.

Structure the configuration so changing from:

`gguillermomendoza.github.io`

to a custom domain later is straightforward and does not require rewriting components.

Do not add a CNAME file yet unless one already exists.

### Final deployment verification

After implementation:

1. Run the production build.
2. Verify there are no build errors.
3. Verify generated links respect the Astro base path.
4. Check that project detail routes work.
5. Check that images and static assets use correct URLs.
6. Check that the résumé link resolves correctly.
7. Check the GitHub Actions YAML for Pages deployment.
8. Tell me exactly what GitHub repository setting I need to select under:
   `Settings → Pages`
9. Tell me the expected final URL based on the repository name.

The finished site should require only:

- committing the files
- pushing to `main`
- enabling GitHub Pages through GitHub Actions

to become publicly accessible.

\#Content architecture

Do not hardcode all project content deep inside UI components.

Create a simple content/data layer so I can easily update:

- projects
- experience
- skills
- links

later without redesigning the site.

For example:

src/data/projects.ts
src/data/experience.ts

or Astro content collections if appropriate.

## Project detail pages

Create dedicated pages for the 3–4 strongest projects.

Each detail page should have:

1. Project overview
2. Problem
3. Approach
4. Technical implementation
5. Evaluation / results
6. What I learned
7. GitHub link

Keep the homepage summaries short and let these pages carry the detail.

Where the repository contains useful figures or screenshots, incorporate them into the detail page.

Never claim a result unless it is supported by the repository or supplied information.

## Résumé

Add a résumé button in the navigation and hero.

Structure the code so that I can place a PDF at:

public/Guillermo\_Mendoza\_Resume.pdf

and have the link automatically work.

Open it in a new tab.

## Navigation

Keep navigation minimal:

Guillermo Mendoza [wordmark/home]

Work
Experience
About
Résumé
GitHub

On mobile, use a simple accessible menu.

## Personality

The website should feel like it belongs to one person with an unusual combination of:

neuroscience + data science + ML + systems + applied AI.

Don't erase that breadth by branding me exclusively as an "AI Engineer."

At the same time, avoid presenting me as academically narrow.

The projects should demonstrate the common thread.

## Before coding

First:

1. Inspect the existing repository.
2. Inspect the relevant GitHub repositories/readmes if they are locally available or accessible.
3. Propose the site structure and visual direction in a short plan.
4. Identify any claims or content for which evidence is missing.
5. Then implement the site.

Do not stop after scaffolding.

Build the complete first version.

After implementation:

1. Run the build.
2. Fix all build/type/lint errors.
3. Check internal links.
4. Review the site at mobile and desktop widths.
5. Look for text overflow/layout problems.
6. Remove placeholder content.
7. Give me a concise summary of what you built and anything I still need to supply manually.

Favor simplicity and polish over adding more features.
