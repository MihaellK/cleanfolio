const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MihaellK',
  title: '.DevFolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mihaell Alves',
  role: 'Software Developer',
  description:
    "I am a developer working with Web, Augmented Reality, and Virtual Reality, specializing in game development.", 
  resume: 'https://docs.google.com/document/d/e/2PACX-1vTz-FZaBAfRKwzs2aUi4aESAeYgtiMs1239IKl75_CFl_c7Bu5W1nYq4Wr40f5kTKsllsAgpgbMmKGy/pub',
  social: {
    linkedin: 'https://www.linkedin.com/in/mihaellalves/',
    github: 'https://github.com/MihaellK',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tree Counting with Computer Vision',
    description:
      'Tree Counting System using Drone images utilizing Computer Vision models. Project developed in partnership with Abundance Brasil.l',
    stack: ['AWS', 'Python', 'AI', 'NextJS'],
    sourceCode: 'https://github.com/Inteli-College/2024-2A-T02-EC11-G03',
    livePreview: 'https://inteli-college.github.io/2024-2A-T02-EC11-G03/',
  },
  {
    name: 'Mobile App for Hospital Pharmacy Management',
    description:
      'Aiming to reduce service time, increase medication traceability, and provide reports, the mobile application was developed in partnership with Hospital Sírio-Libanês.',
    stack: ['Flutter', 'Dart'],
    sourceCode: 'https://github.com/Inteli-College/2024-1B-T02-EC10-G05',
    livePreview: 'https://inteli-college.github.io/2024-1B-T02-EC10-G05/',
  },
  {
    name: 'AI Chatbot Integrated with Autonomous Vehicle',
    description:
      'Development of an autonomous vehicle for warehouse support, integrated with a generative AI chatbot. Project in partnership with Ambev.',
    stack: ['JavaScript', 'Python', 'AI', 'Whisper',],
    sourceCode: 'https://github.com/2023M8T2-Inteli/grupo1',
    livePreview: 'https://2023m8t2-inteli.github.io/grupo1/',
  },
  {
    name: 'Predictive Model for Aircraft Maintenance',
    description:
      'Predictive maintenance model analyzing sensors from the Embraer E2 aircraft to reduce fuel consumption. Project in partnership with Azul Airlines.',
    stack: ['Python', 'AI', 'Jupyter Notebooks'],
    sourceCode: 'https://github.com/2023M7T2-Inteli/Blue-SkAI',
    livePreview: 'https://github.com/2023M7T2-Inteli/Blue-SkAI/blob/main/documentos/documentacao.md',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#',
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'TypeScript',
  'Docker',
  'AWS',
  'MySQL',
  'React',
  'NextJS',
  'Unity',
  'Godot',
  'Game Maker Studio',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mihaell.klosowski@gmail.com',
}

export { header, about, projects, skills, contact }
