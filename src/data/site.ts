// Site-wide constants: identity, links, and copy blocks used across pages.
// Editing this file is the single place to update contact info or hero/about copy.

export const site = {
  name: 'Guillermo Mendoza o(*￣▽￣*)ブ',
  fullName: 'Guillermo A. Mendoza Franco',
  title: 'Guillermo Mendoza — Data Science, ML, & Applied AI', 
  description:
    'Portfolio of Guillermo Mendoza: data science, machine learning, and applied AI projects spanning EEG decoding, large-scale data processing, and grounded LLM systems.',
  email: 'gmendoza@students.pitzer.edu',
  github: 'https://github.com/gguillermomendoza',
  githubHandle: 'gguillermomendoza',
  linkedin: 'https://linkedin.com/in/guillermo-mendoza-franco',
  resumeHref: '/Guillermo_Mendoza_Resume.pdf',
} as const;

export const hero = {
  eyebrow: 'Guillermo Mendoza',
  headline: 'Data, ML, and applied AI.',
  description:
    'Recent Neuroscience & Data Science graduate. I build analytical and ML systems, work with messy or large datasets, and spend as much time checking whether a result holds up as I do producing it.',
} as const;

export const about = {
  paragraphs: [
    "I got into data science through neuroscience. Trying to make sense of noisy brain data got me into statistics, signal processing, and machine learning, and that's roughly what I've kept doing since, across EEG decoding, large Twitter datasets, database work, and a few applied LLM projects.",
    "I tend to like problems where it's not clear yet what to build or how to check if it worked. That's the part I spend most of my time on: setting up an evaluation I actually trust before I trust the result.",
    "I just finished up at Pitzer College this year and looking for a first full-time role in data science, ML, or applied AI.",
  ],
  credentials: [
    'B.A. with Honors, Neuroscience & Data Science, Pitzer College, Class of 2026',
    'GPA: 3.80',
  ],
} as const;

export const contact = {
  heading: 'Contact',
  cta: "I'm always interested in difficult data problems and teams where I can learn quickly and own meaningful work.",
} as const;
