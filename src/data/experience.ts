// Experience / research entries. Intentionally compact — see PORTFOLIO_SPEC.md:
// this should read as a short list explaining the projects, not a resume dump.

export interface ExperienceEntry {
  role: string;
  org: string;
  period?: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Research Assistant',
    org: 'Beat Lab (Computational Neuroscience Lab)',
    summary:
      'Researched EEG motor-imagery decoding by comparing rCSP, cCSP, and TIMBRE. cCSP consistently outperformed rCSP across the three analyzed subjects and tested component counts; TIMBRE and optimization outcomes varied by subject and configuration.',
  },
  {
    role: 'Research Assistant',
    org: 'Sheung Lab (Experimental Biophysics Lab)',
    summary:
      'Day-to-day lab operations alongside data collection and analysis, balancing experimental work with the logistics that keep a lab running.',
  },
  {
    role: 'AI Consultant – Airis Garden Practicum',
    org: 'Airis Garden',
    summary:
      'Applied AI tools to a marketing problem while managing stakeholder-facing deliverables, translating technical options into decisions a non-technical team could act on.',
  },
  {
    role: 'Web Developer (Portal & Forms)',
    org: 'Pitzer College',
    summary:
      'Built and maintained internal tooling and forms, working directly with the people who used them to figure out what the tool actually needed to do.',
  },
  {
    role: 'Computer Science & Machine Learning Tutor',
    org: 'Pitzer College',
    summary:
      'Taught programming and ML concepts one-on-one, adapting explanations of the same idea to students with very different backgrounds.',
  },
];
