// Selected Work content. This is the single place to add, edit, or reorder projects —
// homepage summaries and detail pages both read from here.
//
// Facts here were verified against each project's source material (see plan.md).
// Do not add a metric or claim without a specific comparison supported by that
// material. For the EEG project, the thesis is the authoritative source.

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  href?: string;
}

export interface ProjectDetail {
  overview: string;
  problem: string;
  approach: string;
  implementation: string;
  evaluation: string;
  learned: string;
}

export interface Project {
  slug: string;
  title: string;
  problem: string;
  summary: string;
  stat?: string;
  statCaveat?: string;
  tech: string[];
  github: string;
  document?: { label: string; href: string };
  relatedGithub?: { label: string; href: string };
  images?: ProjectImage[];
  pipeline?: string[];
  detail: ProjectDetail;
}

export const projects: Project[] = [
  {
    slug: 'eeg-complex-valued-models',
    title: 'Complex-Valued Models for EEG Motor Imagery',
    problem:
      'Can complex-valued representations reveal structure in EEG that standard real-valued models miss?',
    summary:
      'I built a fold-safe pipeline comparing real-valued CSP, complex-valued CSP, and TIMBRE on motor-imagery EEG. cCSP consistently outperformed rCSP across the three analyzed subjects and tested component counts; TIMBRE and optimization outcomes depended on the subject and configuration.',
    stat: 'cCSP outperformed rCSP across all 3 analyzed subjects and 4 tested component counts',
    tech: [
      'Python',
      'TensorFlow / Keras',
      'scikit-learn',
      'SciPy',
      'MNE',
      'Optuna',
      'signal processing',
      'cross-validation',
    ],
    github: 'https://github.com/gguillermomendoza/complex-valued-models-on-BCI-thesis',
    document: {
      label: 'Read thesis (PDF)',
      href: '/Thesis.pdf',
    },
    images: [
      {
        src: '/thesis-poster.webp',
        alt: 'Research poster summarizing complex-valued neural network and CSP results for EEG motor imagery decoding.',
        width: 1800,
        height: 1350,
        caption: 'A Complex-Valued Neural Network for Motor Imagery Decoding in EEG. Open the full-resolution poster (PDF).',
        href: '/thesis-poster.pdf',
      },
    ],
    detail: {
      overview:
        'My undergraduate honors thesis: an end-to-end machine learning pipeline for high-dimensional EEG motor-imagery data, built to answer whether complex-valued signal representations carry information a real-valued baseline discards.',
      problem:
        'Motor-imagery EEG is high-dimensional, noisy, and easy to overfit to spurious structure. In this study, rCSP used the real part of the analytic signal, while cCSP used its full complex covariance structure. The thesis tested whether that representational difference affected decoding performance, with TIMBRE evaluated as a separate complex-valued model.',
      approach:
        'The primary comparison held the CSP framework and logistic-regression classifier constant while changing the spatial filters from real-valued CSP (rCSP) to complex-valued CSP (cCSP). Both were tested with 1, 2, 4, and 8 components per class. TIMBRE, a complex-valued neural architecture, was evaluated separately across hidden-layer sizes and with Optuna tuning. Preprocessing included high-pass filtering, analytic-signal construction with the Hilbert transform, and whitening.',
      implementation:
        'Built in Python with MNE for EEG preprocessing, scikit-learn for logistic regression, and TensorFlow/Keras for TIMBRE. All models were evaluated per subject with 5-fold cross-validation, and whitening was fit only on each training fold. Hyperparameter searches used inner validation splits before evaluation on the held-out outer folds. Spectral analysis then examined complex projections on held-out data; class effects in TIMBRE activations were tested with a two-way ANOVA and false-discovery-rate correction.',
      evaluation:
        'The consistent result was specific to the CSP comparison: cCSP outperformed rCSP for each of the three analyzed subjects at every tested component count (1, 2, 4, and 8). TIMBRE remained competitive with cCSP but did not uniformly outperform it. Its performance and gains from optimization varied by subject and configuration, so the thesis does not support collapsing these results into one overall improvement percentage.',
      learned:
        'The cCSP-vs-rCSP result and the TIMBRE optimization results answer different questions and need to remain separate. The former was consistent across the analyzed subjects and component counts; the latter was subject- and configuration-dependent. Because the study used three selected subjects from one dataset, it does not establish how the quantitative results generalize to a broader population.',
    },
  },
  {
    slug: 'job-application-tracker',
    title: 'Privacy-Conscious Job Application Tracker',
    problem:
      'Application updates arrive in inconsistent emails, but giving an LLM direct control of a tracker creates a new class of mistakes.',
    summary:
      'I built a scheduled Cloud Run job that reads Gmail with read-only OAuth and uses Gemini to extract typed application events. Deterministic Python then matches applications, routes ambiguous cases to a Firestore review queue, and applies only validated changes to Google Sheets.',
    stat: 'No direct LLM writes — deterministic Python controls every mutation',
    tech: [
      'Python 3.13',
      'Gemini / Vertex AI',
      'Gmail API',
      'Google Sheets API',
      'Firestore',
      'Cloud Run Jobs',
      'Pydantic',
      'RapidFuzz',
      'Docker',
      'pytest',
    ],
    github: 'https://github.com/gguillermomendoza/application-tracker',
    pipeline: [
      'Read-only Gmail retrieval',
      'Gemini extracts a typed ApplicationEvent',
      'Deterministic matching and decision engine',
      'Validated Google Sheets write or Firestore review queue',
      'Scheduled Cloud Run Job exits after the batch',
    ],
    detail: {
      overview:
        'A privacy-conscious automation that keeps a job-application spreadsheet synchronized with lifecycle emails while preserving a strict boundary between probabilistic interpretation and persistent writes.',
      problem:
        'Confirmations, assessments, interviews, rejections, and offers all arrive in different formats, so manually reconciling them with a tracker is repetitive and easy to neglect. Letting an LLM choose spreadsheet rows or write statuses directly would replace that inconvenience with a less visible risk: a plausible but incorrect update.',
      approach:
        'The system gives Gemini one constrained responsibility: convert untrusted email text into a typed ApplicationEvent. A separate decision engine normalizes company and role names, performs controlled matching, and chooses create, update, review, or ignore. Missing identifiers, multiple matches, low confidence, and unsupported status transitions fail closed into review instead of being guessed.',
      implementation:
        'Built in Python 3.13 with Pydantic schemas, RapidFuzz matching, the Gmail and Google Sheets APIs, Gemini through Vertex AI, and Firestore for processed-message state and the review queue. Gmail access is read-only, Sheets read and write credentials are separated, and production runs as a scheduled Dockerized Cloud Run Job with structured operational logging.',
      evaluation:
        'The pytest suite exercises decision logic, matching, extraction configuration, orchestration, processed-message persistence, review-queue behavior, write intents, and configuration validation. The central invariant is behavioral rather than a model score: malformed, uncertain, or ambiguously matched input must not silently become a spreadsheet write.',
      learned:
        'LLMs are useful at interpreting varied language, but interpretation and mutation have different risk profiles and should not share an authority boundary. Running as an ephemeral job also made durable deduplication and retry state part of the core design rather than an operational afterthought.',
    },
  },
  {
    slug: 'twitter-coronavirus-mapreduce',
    title: 'Coronavirus Twitter Analysis',
    problem: 'How do hashtags spread across languages and countries during a pandemic?',
    summary:
      'I processed about 1.1 billion geotagged tweets from 2020 with a custom MapReduce pipeline, streaming compressed daily archives in parallel across POSIX background processes instead of decompressing them to disk.',
    stat: '~1.1 billion geotagged tweets processed',
    tech: ['Python', 'shell scripting', 'MapReduce', 'POSIX', 'large-scale data processing', 'visualization'],
    github: 'https://github.com/gguillermomendoza/twitter_coronavirus',
    relatedGithub: {
      label: 'twitter_postgres_indexes',
      href: 'https://github.com/gguillermomendoza/twitter_postgres_indexes',
    },
    images: [
      {
        src: '/images/twitter/reduced-all-lang-coronavirus.png',
        alt: 'Top coronavirus-related hashtag counts by language, aggregated across the full 2020 dataset.',
        width: 2000,
        height: 1000,
      },
      {
        src: '/images/twitter/alternative-reduce.png',
        alt: 'Alternative aggregation of coronavirus hashtag trends produced by the reduce stage.',
        width: 2800,
        height: 1600,
      },
    ],
    pipeline: [
      'Daily compressed tweet archive (365 days, 2020)',
      'Parallel POSIX background mapper per day, streamed uncompressed',
      'Per-day hashtag counts by language & country',
      'Python reducer aggregates to yearly totals',
    ],
    detail: {
      overview:
        'A custom MapReduce pipeline built to study how COVID-related hashtags spread geographically and linguistically, run directly over roughly 1.1 billion geotagged tweets from 2020 without a distributed-computing framework.',
      problem:
        'The 2020 Twitter archive is far too large to load into memory or process with ordinary scripts, and decompressing a full year of daily archives to disk before processing would have been slow and disk-prohibitive. The task was to extract hashtag-by-language-by-country trends from that volume of data on ordinary hardware.',
      approach:
        'The pipeline follows a classic map/reduce split, implemented from scratch rather than through a managed framework: one mapper process per day of data, launched as parallel POSIX background processes, each streaming its compressed archive directly rather than decompressing it to disk first. Python reducers then aggregate the per-day outputs into yearly hashtag counts, broken down by language and country.',
      implementation:
        'Mapper and reducer logic is plain Python and shell, orchestrated with `nohup`-style background process management to run many days of data in parallel and to survive terminal disconnects on long jobs. Streaming compressed archives directly (rather than gunzipping to disk first) was the key constraint that shaped the whole pipeline, since a year of tweet archives decompressed would not fit comfortably on disk.',
      evaluation:
        'The pipeline successfully aggregated hashtag distributions across languages and countries for the full ~1.1 billion tweet dataset and produced the trend visualizations shown above, tracking how coronavirus-related hashtags rose and spread over the course of 2020 by language.',
      learned:
        "At this scale, the systems constraints (disk space, process parallelism, streaming vs. decompressing) determine the design as much as the analysis question does. I also used this dataset as the starting point for a follow-up project on query performance — see twitter_postgres_indexes below, which works with a ~31 million row subset loaded into PostgreSQL.",
    },
  },
  {
    slug: 'grounded-ai-resume-builder',
    title: 'Grounded AI Resume Builder',
    problem: 'LLMs make things up, which is a problem when the thing is your resume.',
    summary:
      'I built a Gradio app that extracts job requirements, retrieves evidence from your resume and GitHub history, and checks its own output for unsupported claims before it reaches you.',
    tech: ['Python', 'LLMs (Gemini)', 'retrieval', 'grounded generation', 'evaluation', 'Gradio', 'pytest', 'GitHub Actions'],
    github: 'https://github.com/gguillermomendoza/ai_resume_builder',
    detail: {
      overview:
        'An applied AI system that tailors resumes and drafts cover letters against a specific job description, built around the constraint that every claim it produces should be traceable back to real evidence rather than generated freely.',
      problem:
        'Generic LLM resume tools tend to produce fluent text that quietly invents skills, experience, or achievements the applicant does not have. For a document whose entire purpose is to be trusted, that is disqualifying. The problem is not "generate resume text," it is "generate resume text that is grounded and can be checked."',
      approach:
        'The system extracts structured requirements from a target job description, retrieves supporting evidence from the resume and optional GitHub data, and generates recommendations from that retrieved evidence rather than from the model\'s unconstrained output. It separates factual evidence (things that are true and verifiable) from writing-style examples (phrasing to imitate but not to source facts from), and evaluates requirement coverage explicitly so gaps are visible instead of silently glossed over.',
      implementation:
        'Built in Python with a Gradio interface and Gemini as the underlying LLM. Generated output is checked for unsupported claims before being surfaced, and the system provides source tracing so a claim can be traced back to the evidence it came from. The project includes API logging, error handling, a pytest test suite, and a GitHub Actions CI workflow that runs the tests.',
      evaluation:
        "There is no single accuracy percentage to report here — the meaningful result is the grounding machinery itself: requirement-coverage evaluation surfaces gaps between a job description and a resume, and the unsupported-claims check catches generated statements that don't trace back to real evidence, which is the actual failure mode this project was built to prevent.",
      learned:
        'Grounding is mostly an evaluation problem, not a prompting problem. The hard part was not getting the model to write reasonable resume text — it was building checks that could catch the cases where it did not, and separating "this is a fact about you" from "this is a style to imitate" so the two failure modes are caught differently.',
    },
  },
  {
    slug: 'postgres-query-optimization',
    title: 'PostgreSQL Query Optimization',
    problem: "A benchmark query set that took 39 minutes unindexed isn't usable.",
    summary:
      'I redesigned the schema (normalized vs. denormalized) and built targeted B-tree and GIN indexes to bring a 5-query benchmark on ~31M tweets down to under 2 seconds.',
    stat: '~39 min unindexed → ~1.9 sec indexed, same 5-query benchmark',
    tech: ['PostgreSQL', 'SQL', 'database indexing', 'schema design', 'query optimization'],
    github: 'https://github.com/gguillermomendoza/twitter_postgres_indexes',
    detail: {
      overview:
        'A database-engineering follow-up to the Twitter MapReduce project, built for a database systems course: loading roughly 31 million tweets spanning 10 days into PostgreSQL and optimizing schema and indexing so a slow benchmark query set runs in seconds instead of tens of minutes.',
      problem:
        'Against a denormalized schema with no indexes, the assignment\'s benchmark queries over ~31 million tweet records took on the order of 39 minutes combined — far too slow for interactive use. A normalized, unindexed version of the same benchmark took about 2 minutes 5 seconds, still too slow.',
      approach:
        'I compared normalized and denormalized schema designs for the same tweet data and evaluated the query-performance tradeoff between them, then designed a targeted indexing strategy for the query patterns the benchmark actually exercises, rather than indexing every column.',
      implementation:
        'PostgreSQL, using a combination of three B-tree indexes and one GIN index matching the reference solution, chosen for the specific filter and join patterns in the benchmark queries. Denormalizing traded disk space for query speed: the denormalized database uses about 75 GB on disk versus about 25 GB normalized, against 17 GB of raw source data.',
      evaluation:
        'With indexes in place, the same 5-query benchmark ran in about 1.87 seconds total on the denormalized schema and about 0.70 seconds total on the normalized schema — down from roughly 39 minutes (denormalized) and 2 minutes 5 seconds (normalized) unindexed. All 5 queries passed their correctness checks in both configurations.',
      learned:
        'Schema design and indexing are not independent decisions: denormalizing traded disk space for query speed and changed which indexes were worth building. The biggest wins came from matching index type (B-tree vs. GIN) to the actual query pattern rather than indexing by default.',
    },
  },
  {
    slug: 'conditional-wavenet-audio',
    title: 'Conditional WaveNet Audio Generation',
    problem:
      'How can raw audio be modeled one sample at a time while still controlling the instrument family and pitch it generates?',
    summary:
      'I built PyTorch experiments for WaveNet-style autoregressive audio generation, including unconditional and NSynth-conditioned models. The pipeline trims 16 kHz audio into one-second chunks, encodes waveforms as 8-bit μ-law tokens, and generates new samples conditioned on instrument and pitch embeddings.',
    stat: '16 kHz audio → 1-second chunks → 256 μ-law token classes',
    tech: [
      'Python',
      'PyTorch',
      'librosa',
      'NumPy',
      'NSynth',
      'μ-law companding',
      'autoregressive modeling',
      'signal processing',
    ],
    github: 'https://github.com/gguillermomendoza/WavNet-EEG-Sonification',
    pipeline: [
      'Load and trim 16 kHz mono audio',
      'Split audio into one-second chunks',
      'Encode each sample into 256 μ-law classes',
      'Train a dilated residual model with instrument and pitch conditioning',
      'Autoregressively sample tokens and decode a waveform',
    ],
    detail: {
      overview:
        'A set of PyTorch experiments in raw-waveform generation: WaveNet-style models learn next-token prediction over audio, with a conditional variant that uses NSynth instrument-family and pitch metadata to steer generation.',
      problem:
        'Raw audio sampled at 16 kHz produces a long sequence even for a one-second sound. Modeling it autoregressively requires a representation with manageable output classes, a receptive field that can capture temporal structure, and a way to inject labels without discarding the sample-level generation objective.',
      approach:
        'Audio is loaded as mono at 16 kHz, trimmed for leading and trailing silence, divided into one-second chunks, and compressed into 256 discrete values with μ-law encoding. The model predicts each next token from earlier tokens. The conditional architecture embeds instrument family and pitch, then injects that context into gated, dilated residual blocks.',
      implementation:
        'The repository includes minimal and conditional WaveNet implementations, PyTorch Dataset wrappers, preprocessing utilities, and training loops. The conditional model combines one-by-one input and output projections with residual blocks using dilation rates 1, 2, 4, and 8; training uses cross-entropy, CUDA automatic mixed precision, checkpoints, loss curves, entropy diagnostics, and predicted-token histograms. Generation samples one token at a time from a temperature-scaled distribution and decodes the sequence back to a waveform.',
      evaluation:
        'This is an experimental implementation rather than a benchmarked audio model, so the repository does not support a quantitative audio-quality claim. Its diagnostics track training loss, output entropy, and token distributions, while generated samples can be auditioned and inspected as spectrograms to identify collapse or poor conditioning behavior.',
      learned:
        'Sample-level generation makes computational cost and receptive-field design impossible to ignore: even one second requires thousands of sequential predictions. The project also made the boundary between preprocessing and modeling concrete, because companding, chunk length, conditioning labels, and sampling temperature all directly shape what the network can learn and produce.',
    },
  },
  {
    slug: 'goodreads-ai-review-summaries',
    title: 'Goodreads AI Review Summaries',
    problem:
      'How do you retrieve a useful cross-section of opinion from millions of reviews without loading multi-gigabyte datasets into an application?',
    summary:
      'I built a shell pipeline that streams compressed Goodreads data, resolves every edition matching a title prefix, retrieves their reviews, and sends a bounded sample to an LLM for a short synthesis. Temporary intermediates are isolated per run and removed automatically.',
    stat: '15.7M reviews across 2.3M books in compressed JSONL',
    statCaveat: 'source dataset, 2006–2017',
    tech: [
      'shell scripting',
      'POSIX utilities',
      'jq',
      'grep',
      'gzip',
      'JSONL',
      'LLM CLI',
      'retrieval-augmented generation',
    ],
    github: 'https://github.com/gguillermomendoza/goodreads-review-summaries',
    pipeline: [
      'Stream compressed book metadata',
      'Prefix-match a title and collect edition IDs',
      'Stream reviews matching any collected ID',
      'Select up to 20 review texts with jq',
      'Generate a two-to-three-sentence LLM summary',
    ],
    detail: {
      overview:
        'A lightweight retrieval-and-summarization tool implemented as a shell script over the public Goodreads dataset. Given a title, it finds matching editions, gathers their reviews, and asks an LLM to synthesize a concise view of reader sentiment.',
      problem:
        'The source data contains about 2.3 million book records and 15.7 million reviews in multi-gigabyte, gzip-compressed JSON Lines files. A title can also have many hardcover, paperback, audio, and translated editions, so querying one book ID would miss much of the available discussion.',
      approach:
        'The pipeline prefix-matches the requested title against streamed book metadata, extracts every matching book ID, and builds an alternation pattern for a second streaming pass over the review corpus. It counts all retrieved reviews but bounds the LLM context to at most 20 review texts before requesting a two-to-three-sentence summary.',
      implementation:
        'Implemented with a portable shell entry point and standard data-processing tools: zcat streams compressed JSONL, grep performs title and ID retrieval, jq extracts identifiers and review text, and wc and head count and bound the result. Each run works inside a mktemp directory, handles empty book or review matches explicitly, invokes the llm CLI, and removes its intermediate files afterward.',
      evaluation:
        'The documented example for The Name of the Wind resolves 35 editions and retrieves 5,992 matching reviews before summarizing a sample of 20. That demonstrates the multi-edition retrieval path, but the project does not include an automated factuality or representativeness evaluation for the generated summary.',
      learned:
        'For large compressed corpora, retrieval can remain useful without a database when the workflow is narrow and sequential. The important tradeoff is that limiting context keeps inference small and predictable, but a first-20 sample cannot guarantee a statistically representative summary of every matching review.',
    },
  },
];
