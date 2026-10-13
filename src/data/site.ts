// Site-wide constants: identity, links, and copy blocks used across pages.
// Editing this file is the single place to update contact info or hero/about copy.

export const site = {
  name: 'Guillermo Mendoza o(*￣▽￣*)ブ',
  fullName: 'Guillermo A. Mendoza Franco',
  title: 'Guillermo Mendoza — Data Science, ML, & Applied AI', 
  description:
    'Portfolio of Guillermo Mendoza: data science, machine learning, and applied AI projects spanning EEG decoding, large-scale data processing, and grounded LLM systems.',
  email: 'guillermomendozafranco@gmail.com',
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

export const aboutMe = {
  heading: 'About Me',
  background:
    "I got into computational work through neuroscience. Trying to make sense of noisy EEG recordings led me to statistics and signal processing, and from there to machine learning. I've kept working in those areas since, in lab research and on projects of my own.",
  cta: "I'm always interested in difficult problems and teams where I can learn quickly and own meaningful work.",
} as const;
