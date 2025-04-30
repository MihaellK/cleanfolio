const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MihaellK',
  title: 'Mihaell.Dev',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mihaell Alves',
  role: 'Software and Game Developer',
  description:
    "I am a Developer with experience in fullstack development, game design, and cloud computing. Specialized in Unity game development and web technologies. Worked on projects ranging from VR and AI-driven racing games to image analysis pipelines. Founder of Inteli Game Lab, leading game development initiatives and passionate about building immersive experiences.", 
  resume: 'https://docs.google.com/document/d/e/2PACX-1vSh14oKDyt4gELqtWPPg7RYrI1ROd5Dreng5teoDdLcLAcM3iqfMkSWHUmo6UbQgiw3QYXGZBNiRwDa/pub',
  itchio: 'https://mihaellk.itch.io',
  social: {
    linkedin: 'https://www.linkedin.com/in/mihaellalves/',
    github: 'https://github.com/MihaellK',
  },
}

const gameProjects = [
  {
    name: 'Kard Race',
    briefDescription:'In-Development Racing Card Game. Selected for Trovalab Incubation Program',
    description:
      'Low-Poly Racing Card Game conceived during the HUG Jam, it was soon selected for incubation at Trovadoria. Since then, it has been showcased and featured in various game events, including EAI Jogos, HUG Verso, FIAP, and Inteli GameLab Showcase. I worked as a Game Designer, Lead Programmer, and contributed to the business aspects. It is currently my graduation thesis (TCC)',
    image: 'https://raw.githubusercontent.com/MihaellK/cleanfolio/refs/heads/main/public/imgs/capa_pitchDeck.jpeg',
    images: ['https://github.com/MihaellK/cleanfolio/blob/main/public/imgs/print-game-fia-version.jpeg?raw=true', 'https://github.com/MihaellK/cleanfolio/blob/main/public/imgs/trovalab-pitchday.JPG?raw=true',],
    stack: ['Unity', 'C#', 'Game Design', 'Design Patterns', 'AI Navmesh', 'Business',],
    responsibilities: ['Designed the core gameplay loop integrating cards and racing mechanics.', 'Architected and implemented the Race AI system using Unity’s NavMesh.', 'Successfully formatted and submitted the project for a public call.',],
    achievements: [ 'Trovalab – Selected for Trovadoria’s Incubation Program', 'EAI Jogos – Showcased to the public', 'HUGVerso Pitch Competition – Selected project','Pitch Deck - Created and presented a professional pitch deck',],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Escape Sunnyrise VR',
    briefDescription:'Escape Room VR developed as part of the Immersive Technologies module in the Computer Engineering course at Inteli',
    description:
      'Escape Room VR developed as part of the Immersive Technologies module in the Computer Engineering course at Inteli. Created in just three weeks, this was my first experience with Virtual Reality, where I learned more about dynamic lighting and optimization techniques. I worked as a Game Designer and Programmer.',
    image: 'https://github.com/MihaellK/cleanfolio/blob/main/public/imgs/sunnyrise-vr-pitch-cover.jpeg?raw=true',
    images: ['https://github.com/MihaellK/cleanfolio/blob/main/public/imgs/sunnyrise-vr-menu.jpeg?raw=true', 'https://github.com/MihaellK/cleanfolio/blob/main/public/imgs/sunnyrise-vr-bedroom.jpeg?raw=true',],
    stack: ['Virtual Reality', 'Unity', 'C#', 'Dynamic Lights', 'Enviromnent Design','Game Design'],
    responsibilities: ['Optimized game performance with Light Probes, Texture Resizing, and Occlusion Culling, ensuring smoother gameplay and enhanced visual quality on VR hardware.', 'Programmed puzzle logic and mechanics.', 'Integrated Meta Quest 3 with Unity and structured Git repository for seamless VR development and team collaboration.',],
    achievements: [ 'High-Quality Prototype – First contact with VR in a 3-week project.',],
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
  'AI',
  'HTML',
  'CSS',
  'TypeScript',
  'Docker',
  'AWS',
  'MySQL',
  'React',
  'NextJS',
  'Unity',
  'Virtual Reality',
  'Augmented Reality',
  'Godot',
  'Game Maker Studio',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mihaell.klosowski@gmail.com',
}

export { header, about, gameProjects, projects, skills, contact }
