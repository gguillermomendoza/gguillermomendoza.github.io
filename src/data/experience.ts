// Experience / research entries. Intentionally compact — see PORTFOLIO_SPEC.md:
// this should read as a short list explaining the projects, not a résumé dump.

export interface ExperienceEntry {
  role: string;
  org: string;
  period?: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Research Assistant',
    org: 'beatLab',
    summary:
      'Ran hands-on experiments and analyzed the resulting data as part of an ongoing research program, working from an open question toward a defensible finding.',
  },
  {
    role: 'Research Assistant / Lab Manager',
    org: 'Sheung Lab',
    summary:
      'Owned day-to-day lab operations alongside data collection and analysis, balancing experimental work with the logistics that keep a lab running.',
  },
  {
    role: 'AI Marketing Strategy Consultant / Project Manager',
    org: 'Airis Garden',
    summary:
      'Applied AI tools to a marketing problem while managing stakeholder-facing deliverables, translating technical options into decisions a non-technical team could act on.',
  },
  {
    role: 'Portal & Form Developer',
    org: 'Independent contract',
    summary:
      'Built and maintained internal tooling and forms, working directly with the people who used them to figure out what the tool actually needed to do.',
  },
  {
    role: 'Computer Science & Machine Learning Tutor',
    org: 'Independent',
    summary:
      'Taught programming and ML concepts one-on-one, adapting explanations of the same idea to students with very different backgrounds.',
  },
];
