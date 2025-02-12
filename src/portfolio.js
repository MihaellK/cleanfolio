const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MihaellK',
  title: 'Mihaell.Dev',
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

const gameProjects = [
  {
    name: 'Kard Race',
    briefDescription:'In-Development Racing Card Game. Selected for Trovalad Incubation Program',
    description:
      'Low-Poly Racing Card Game conceived during the HUG Jam, it was soon selected for incubation at Trovadoria. Since then, it has been showcased and featured in various game events, including EAI Jogos, HUG Verso, FIAP, and Inteli GameLab Showcase. I worked as a Game Designer, Lead Programmer, and contributed to the business aspects. It is currently my graduation thesis (TCC)',
    image: '',
    images: ['https://picsum.photos/id/238/200/300', 'https://picsum.photos/id/225/200/300',],
    stack: ['Unity', 'C#', 'Game Design', 'Design Patterns', 'AI Navmesh', 'Business',],
    responsibilities: ['Designed the core gameplay loop integrating cards and racing mechanics.', 'Architected and implemented the Race AI system using Unity’s NavMesh.', 'Successfully formatted and submitted the project for a public call.',],
    achievements: [ 'EAI Jogos – Showcased to the public at ', 'HUGVerso Pitch Competition – Selected project', 'Trovalab – Selected for Trovadoria’s Incubation Program','Pitch Deck - Created and presented a professional pitch deck',],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Escape Sunnyrise VR',
    briefDescription:'Escape Room VR developed as part of the Immersive Technologies module in the Computer Engineering course at Inteli',
    description:
      'Escape Room VR developed as part of the Immersive Technologies module in the Computer Engineering course at Inteli. Created in just three weeks, this was my first experience with Virtual Reality, where I learned more about dynamic lighting and optimization techniques. I worked as a Game Designer and Programmer.',
    image: 'https://picsum.photos/id/227/200/300',
    images: ['https://picsum.photos/id/238/200/300', 'https://picsum.photos/id/225/200/300',],
    stack: ['Virtual Reality', 'Unity', 'C#', 'Dynamic Lights', 'Enviromnent Design','Game Design'],
    responsibilities: ['Optimized game performance with Light Probes, Texture Resizing, and Occlusion Culling, ensuring smoother gameplay and enhanced visual quality on VR hardware.', 'Programmed puzzle logic and mechanics.', 'Integrated Meta Quest 3 with Unity and structured Git repository for seamless VR development and team collaboration.',],
    achievements: [ 'High-Quality Prototype – A first contact with VR in a 3-week project.',],
    sourceCode: '',
    livePreview: '',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    image: 'https://picsum.photos/id/237/200/300',
    images: ['https://picsum.photos/id/234/200/300', 'https://picsum.photos/id/232/200/300'],
    name: 'Tree Counting with Computer Vision',
    description:
      'Tree Counting System using Drone images utilizing Computer Vision models. Project developed in partnership with Abundance Brasil.',
    stack: ['AWS', 'Python', 'AI', 'NextJS'],
    responsibilities: ['responsabilidade 1', 'responsabilidade 2'],
    achievements: ['conquista 1', 'conquista 2'],
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

export { header, about, gameProjects, projects, skills, contact }
