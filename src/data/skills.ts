// Technical toolkit, grouped by category. Kept as plain text lists intentionally —
// see PORTFOLIO_SPEC.md: no logo walls, no progress bars.

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'R', 'MATLAB', 'C++'],
  },
  {
    category: 'ML / Statistics',
    items: [
      'scikit-learn',
      'TensorFlow / Keras',
      'statistical modeling',
      'model validation',
      'cross-validation',
      'time-series analysis',
      'signal processing',
    ],
  },
  {
    category: 'Data / Systems',
    items: ['PostgreSQL', 'ETL', 'MapReduce', 'Docker', 'Linux', 'shell scripting'],
  },
  {
    category: 'Applied AI',
    items: ['LLM workflows', 'retrieval', 'grounded generation', 'evaluation', 'RAG'],
  },
  {
    category: 'Engineering',
    items: ['Git', 'GitHub Actions', 'APIs', 'HTML / CSS / JavaScript'],
  },
];
