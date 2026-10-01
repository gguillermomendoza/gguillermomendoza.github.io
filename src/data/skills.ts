// Technical toolkit, grouped by category. Kept as plain text lists intentionally —
// see PORTFOLIO_SPEC.md: no logo walls, no progress bars.

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'MATLAB', 'C++', 'HTML / CSS'],
  },
  {
    category: 'ML / Statistics',
    items: [
      'scikit-learn',
      'TensorFlow / Keras',
      'statistical modeling',
      'feature engineering',
      'model validation',
      'cross-validation',
      'hyperparameter optimization',
      'error analysis',
      'time-series analysis',
      'signal processing',
    ],
  },
  {
    category: 'Applied AI',
    items: [
      'Gemini',
      'Vertex AI',
      'LLM workflows',
      'RAG',
      'structured extraction',
      'retrieval evaluation',
      'grounded generation',
    ],
  },
  {
    category: 'Cloud / Data',
    items: [
      'Google Cloud Run Jobs',
      'Cloud Scheduler',
      'Firestore',
      'PostgreSQL',
      'ETL',
      'MapReduce',
      'Docker',
      'REST APIs',
      'OAuth',
      'large-scale data processing',
    ],
  },
  {
    category: 'Engineering',
    items: [
      'Git',
      'GitHub Actions',
      'Linux',
      'pytest',
      'Pydantic',
      'shell scripting',
      'API logging',
      'retry handling',
      'rate limiting',
    ],
  },
];
