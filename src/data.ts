import { Project, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'A responsive, minimalist portfolio website built with pure HTML and CSS, focusing on clean typography and semantic structure.',
    longDescription: 'This portfolio utilizes a dark glassmorphic design language designed to mimic high-end hardware. Crafted using pure, clean semantically correct markup layouts and robust style definitions to celebrate typography and balanced whitespace.',
    category: 'Web Web',
    tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    tags: ['UI/UX', 'Personal Brand', 'Tailwind-powered'],
    features: [
      'Minimalist Glassmorphic visual blocks mimicking premium industrial interfaces.',
      'Perfect lighthouse score with exceptional semantic structuring and high-contrast styling.',
      'Responsive, high-performance animations adjusting safely to user prefer-reduced-motion profiles.',
      'Integrated live syntax micro-terminal compiling pseudo-C commands on-the-fly.'
    ],
    icon: 'Browser',
    codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Avijit - Developer Portfolio</title>
  <style>
    body {
      background: #131315;
      color: #e4e2e4;
      font-family: 'Inter', sans-serif;
    }
  </style>
</head>
<body>
  <h1>Hi, I'm Avijit.</h1>
</body>
</html>`
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon...',
    description: 'An exciting new system or application is currently under construction. Stay tuned as more projects are built!',
    longDescription: 'This block acts as a dedicated holding area for upcoming projects. I am currently exploring advanced full-stack architectures, systems coding standards, and custom compilers integration.',
    category: 'C Programming',
    tech: ['C Programming', 'Data Structures', 'Git & GitHub'],
    tags: ['Future Work', 'Systems Design'],
    features: [
      'Upcoming dynamic products built with precise coding structures and performance scaling.',
      'Rigorous integration of algorithmic benchmarks and responsive layouts.',
      'Continuous deployment streams active. Check back soon for the official launch!'
    ],
    icon: 'Terminal',
    codeSnippet: `// Source code compilation pending active deployment...
// Stay tuned for the upcoming announcement!`
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'C Programming', category: 'Languages', level: 70, description: 'Proficient in procedural paradigms, custom structs, dynamic pointers, file IO systems, and recursive algorithm models.' },
  { name: 'HTML5 & CSS3', category: 'Languages', level: 95, description: 'Mastery of semantic markup architectures, grid-flex spacing alignments, custom CSS variable styling, and responsive design systems.' },
  // Web Dev
  { name: 'Tailwind CSS', category: 'Web Development', level: 95, description: 'Advanced implementation of bespoke design systems, theme overrides, utility grids, and responsive components.' },
  // Tools & Other
  { name: 'Git & GitHub', category: 'Tools & Other', level: 60, description: 'Expertise in repository structures, conflict resolutions, descriptive formatting branches, and custom actions.' },
  { name: 'Artificial Intelligence (AI)', category: 'Tools & Other', level: 90, description: 'Integrating models, leveraging structural API interfaces, and employing AI assistance workflows.' },
  { name: 'Technical Communication', category: 'Tools & Other', level: 95, description: 'Articulating technical architectural principles elegantly and documenting robust specifications.' }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-google-ai',
    title: 'Google AI Professional Certificate',
    issuer: 'Google / Coursera',
    date: 'May 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmEnLMU1yTVyBIN7CuIUyLzApM2ECzYy2FD2CmtnYE8GH5uuNSc7i81MAQyOwLZCbIBM7egujEk-Yikn0z_S-ApQVPBMbauvpklUF1FQRCEdrCrzvDuoASOz9P0qkR-1REa1yk5rEegj6cSGvkMqLqh73kXR-ZcBVwHcmZGVR28M4uOUhSIU_50fSgsTHEQWRY7O3uMDc_neOvG7HVYdGKgfwBAIskgy5xPDJ900_1v7YoaG2dJ_Q1hhjR5lLYC3l2kf09hgERmj_r',
    verificationId: 'G-AI-PROF-2026',
    link: 'https://coursera.org/verify/professional-cert/25K1VZH58PMB',
    highlights: [
      'In-depth study of foundational LLM architectures, transformer models, and prompt optimization principles.',
      'Gained deep practical insights on deploying specialized models into server-side environments.',
      'Explored ethical AI implications and industry-approved safety guardrails.'
    ]
  },
  {
    id: 'cert-speak-to-win',
    title: 'Speak To Win: Season 1',
    issuer: 'Seenjoy Academy',
    date: 'May 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAMKQyKrszfjGGs7HGjV2Whzd-IHrLQU9OZDbBRWF2_wD53UDOOhr6r1YorSliyQokGiMX8HX99R4Kw-Hd0jFhRnm1X1iwrCLUGklS_Z2Cr_1eWRm79fJLuIoMthIDt7PmYKIntmUJ68_Hh3d6_8F8pU12SB9ImRoaHKgpJMYU09AqN6hwq6digu5KTfPP-Ok9mfMJINOqbdNbSMmCAh3DzF-tqc2lngKxW00S905eGkYeZ1LbeSQK-NZuA1RyH5tQZwJChfOkd7x8',
    verificationId: 'STW-S1-2026-SA01',
    highlights: [
      'Completed masterclasses on persuasive presentation and structural speech architectures.',
      'Acquired expert-level tactics to manage vocal projections, body gestures, and target crowd triggers.',
      'Placed among the top performers pitching highly sophisticated technology systems.'
    ]
  },
  {
    id: 'cert-cyber-hygiene',
    title: 'Cyber Hygiene Training',
    issuer: 'The Asia Foundation & SAJIDA Foundation',
    date: 'May 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsqY_Or11m3pKRqs9HKcjXOnJcSek_g6Tk43P1k5xe5eGyi8x_NRPyiE4NklRBBnGGVn1q4YBeaH0g719Wi_g83sP2WqVOBGIrHieBJYMozj9K5ixfEtvLmPaxirvKX-tWxKD7XhKwNCu0Yzn2olNnkaSCvQrjS5IB9cnUA4caMvDOQTlPt8AtPZl9PSISY5Dfb8zMz5X7YSTl-J-F8DkUnPtx70d1DnmMxT0VJMDVIhN8vk8AW0Ay0ZDG7uiCeaxwujTEUi7S3Bou',
    verificationId: 'TAF-SF-CH-4856',
    highlights: [
      'Understood complex defense structures, phishing mechanisms, and multi-factor security layers.',
      'Studied strict identity mapping policies, password vaults setups, and network payload vetting processes.',
      'Analyzed standards to mitigate social engineering schemes.'
    ]
  }
];
