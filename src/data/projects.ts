// Selected Work content. This is the single place to add, edit, or reorder projects —
// homepage summaries and detail pages both read from here.
//
// Facts here were verified against each repo's README before writing (see plan.md).
// Do not add a metric or claim without a source: repo README, or explicitly
// caveated as coming from outside the repo (see the thesis `resultCaveat` field).

export interface ProjectImage {
  src: string;
  alt: string;
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
  index: string;
  title: string;
  problem: string;
  summary: string;
  stat?: string;
  statCaveat?: string;
  tech: string[];
  github: string;
  relatedGithub?: { label: string; href: string };
  images?: ProjectImage[];
  pipeline?: string[];
  detail: ProjectDetail;
}

export const projects: Project[] = [
  {
    slug: 'eeg-complex-valued-models',
    index: '01',
    title: 'Complex-Valued Models for EEG Motor Imagery',
    problem:
      'Can complex-valued representations reveal structure in EEG that standard real-valued models miss?',
    summary:
      'I built a fold-safe pipeline comparing real-valued CSP, complex-valued CSP, and a complex-valued neural architecture (TIMBRE) on motor-imagery EEG, with leakage checks and spectral diagnostics built in.',
    stat: '~10 point accuracy improvement over baseline',
    statCaveat:
      'reported in the broader honors thesis, not a number stated in the repository README itself',
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
    detail: {
      overview:
        'My undergraduate honors thesis: an end-to-end machine learning pipeline for high-dimensional EEG motor-imagery data, built to answer whether complex-valued signal representations carry information a real-valued baseline discards.',
      problem:
        'Motor-imagery EEG is high-dimensional, noisy, and easy to overfit to spurious structure. Standard approaches reduce each trial to real-valued band-power features before classifying. That discards phase information, which may or may not matter for decoding — the thesis set out to test whether it does, carefully enough that a positive result could be trusted.',
      approach:
        'The pipeline compares three approaches on the same motor-imagery data: real-valued Common Spatial Patterns (CSP), complex-valued CSP, and TIMBRE, a complex-valued neural architecture. Preprocessing includes bandpass filtering and analytic-signal construction (Hilbert transform) to produce the complex-valued representations, followed by whitening. Hyperparameters were tuned with Optuna.',
      implementation:
        'Built in Python with MNE for EEG preprocessing, scikit-learn for the CSP baselines, and TensorFlow/Keras for TIMBRE. Evaluation is fold-safe: cross-validation splits are constructed so that no information from a held-out fold leaks into training through preprocessing or hyperparameter selection, a common failure mode in EEG decoding pipelines. The pipeline also includes explicit leakage and sanity checks, plus spectral analysis of the learned representations to check that gains are localized where they should be, not artifacts of the pipeline.',
      evaluation:
        'The complex-valued approaches surfaced structure in the EEG that the real-valued CSP baseline did not capture, consistent with phase carrying decodable information beyond band power alone. The broader thesis reports an accuracy improvement of roughly 10 absolute percentage points over baseline; that figure comes from the full thesis writeup rather than being computed directly in the repository, so it is presented here with that caveat rather than as a repo-verified number.',
      learned:
        "The leakage and sanity checks mattered as much as the modeling. It's easy to get an EEG pipeline that reports a great number because of a subtle preprocessing leak, not because the model learned anything real — building in fold-safe evaluation and diagnostics from the start was what made the comparison between methods trustworthy.",
    },
  },
  {
    slug: 'grounded-ai-resume-builder',
    index: '02',
    title: 'Grounded AI Résumé Builder',
    problem: 'LLMs make things up, which is a problem when the thing is your résumé.',
    summary:
      'I built a Gradio app that extracts job requirements, retrieves evidence from your résumé and GitHub history, and checks its own output for unsupported claims before it reaches you.',
    tech: ['Python', 'LLMs (Gemini)', 'retrieval', 'grounded generation', 'evaluation', 'Gradio', 'pytest', 'GitHub Actions'],
    github: 'https://github.com/gguillermomendoza/ai_resume_builder',
    detail: {
      overview:
        'An applied AI system that tailors résumés and drafts cover letters against a specific job description, built around the constraint that every claim it produces should be traceable back to real evidence rather than generated freely.',
      problem:
        'Generic LLM résumé tools tend to produce fluent text that quietly invents skills, experience, or achievements the applicant does not have. For a document whose entire purpose is to be trusted, that is disqualifying. The problem is not "generate résumé text," it is "generate résumé text that is grounded and can be checked."',
      approach:
        'The system extracts structured requirements from a target job description, retrieves supporting evidence from the résumé and optional GitHub data, and generates recommendations from that retrieved evidence rather than from the model\'s unconstrained output. It separates factual evidence (things that are true and verifiable) from writing-style examples (phrasing to imitate but not to source facts from), and evaluates requirement coverage explicitly so gaps are visible instead of silently glossed over.',
      implementation:
        'Built in Python with a Gradio interface and Gemini as the underlying LLM. Generated output is checked for unsupported claims before being surfaced, and the system provides source tracing so a claim can be traced back to the evidence it came from. The project includes API logging, error handling, a pytest test suite, and a GitHub Actions CI workflow that runs the tests.',
      evaluation:
        "There is no single accuracy percentage to report here — the meaningful result is the grounding machinery itself: requirement-coverage evaluation surfaces gaps between a job description and a résumé, and the unsupported-claims check catches generated statements that don't trace back to real evidence, which is the actual failure mode this project was built to prevent.",
      learned:
        'Grounding is mostly an evaluation problem, not a prompting problem. The hard part was not getting the model to write reasonable résumé text — it was building checks that could catch the cases where it did not, and separating "this is a fact about you" from "this is a style to imitate" so the two failure modes are caught differently.',
    },
  },
  {
    slug: 'twitter-coronavirus-mapreduce',
    index: '03',
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
      { src: '/images/twitter/reduced-all-lang-coronavirus.png', alt: 'Top coronavirus-related hashtag counts by language, aggregated across the full 2020 dataset.' },
      { src: '/images/twitter/alternative-reduce.png', alt: 'Alternative aggregation of coronavirus hashtag trends produced by the reduce stage.' },
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
    slug: 'postgres-query-optimization',
    index: '04',
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
];
