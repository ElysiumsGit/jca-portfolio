
import { PanelsTopLeft, Database, Terminal } from 'lucide-react'

const cardData = [
  {
    title: 'Frontend engineering',
    description:
      'Responsive interfaces with a clear visual system and accessible, reusable components.',
    icon: PanelsTopLeft,
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML & CSS',
    ],
    focus: 'INTERACTION · ACCESSIBILITY · PERFORMANCE',
  },
  {
    title: 'Backend & data',
    description:
      'Well-defined APIs and dependable data models that keep the application connected.',
    icon: Database,
    technologies: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'REST APIs',
    ],
    focus: 'API DESIGN · AUTHENTICATION · DATA MODELING',
  },
  {
    title: 'Tools & delivery',
    description:
      'A practical workflow for versioning, testing, and taking an idea from local to live.',
    icon: Terminal,
    technologies: [
      'Git & GitHub',
      'Docker',
      'Vercel',
      'Figma',
      'Postman',
    ],
    focus: 'COLLABORATION · TESTING · DEPLOYMENT',
  },
]

export default cardData;