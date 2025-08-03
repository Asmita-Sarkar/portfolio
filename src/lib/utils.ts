import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Experience, Project } from '@/interface';
import dracoImage from '../assets/website/dracko.png';
import bridgeImage from '../assets/website/bridge.png';
import sitterImage from '../assets/website/sitter.png';
import axiaImage from '../assets/website/axia.png';
import clicbeatImage from '../assets/website/clicbeat.png';
import vlancerImage from '../assets/website/vlancer.png';
import tourismImage from '../assets/website/turismapp.png';
import heakanizeImage from '../assets/website/hekanize.png';
import classmateImage from '../assets/website/classmate.png';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Drako Media",
    description: "Enhanced location-based advertising platforms by developing Angular map tools and Node.js APIs for precise area targeting and audience management.",
    image: dracoImage,
    tech: ["Angular", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    link: "https://www.drakomediagroup.com/"
  },
  {
    id: 2,
    title: "Sitter Live",
    description: "Designed and implemented secure RESTful APIs with Node.js, Fastify, PostgreSQL, and AWS S3 to enable role-based parent-babysitter communication, task scheduling, and real-time notifications.",
    image: sitterImage,
    tech: ["Node.js", "PostgreSQL", "MongoDB", "React Native"],
    role: "Backend Developer",
    link: "https://sitter.live/"
  },
  {
    id: 3,
    title: "ClicBeat",
    description: "Built a React and Node.js web app for a music company featuring Firebase authentication, Dropbox-integrated artist registration, data sync between Firebase and PostgreSQL, and booking management.",
    image: clicbeatImage,
    tech: ["React", "Node.js", "Firebase", "PostgreSQL"],
    role: "Full Stack Developer",
    link: "https://clibbeat.com/"
  },
  {
    id: 4,
    title: "Tourismapp Admin",
    description: "Enhanced a tourism admin portal with Angular and NestJS by developing CRUD features for areas, guides, places, and itineraries, including integrated image uploads.",
    image: tourismImage,
    tech: ["Angular", "Nest.js", "MongoDB"],
    role: "Full Stack Developer",
    link: "https://tourismapp.it/"
  },
  {
    id: 5,
    title: "Vlancer",
    description: "Integrated Stripe payment gateway with automated recurring billing via cron jobs to enable secure and seamless payment processing in the web application.",
    image: vlancerImage,
    tech: ["React", "Node.js", "Firebase", "PostgreSQL"],
    role: "Full Stack Developer",
    link: "https://vlancer.com/"
  },
  {
    id: 6,
    title: "Bridge Logistica",
    description: "Enhanced a React-based logistics platform by creating dynamic forms, managing API integrations with validation, and implementing advanced data filtering for efficient dataset handling.",
    image: bridgeImage,
    tech: ["React"],
    role: "Frontend Developer",
    link: "https://bridgelogistica.it/en/"
  }, 
  {
    id: 7,
    title: "Axia Care",
    description: "Developed a dynamic form engine with Node.js and MySQL for healthcare products, enabling customizable patient management forms, secure data handling, and scalable APIs for hospitals.",
    image: axiaImage,
    tech: ["Node", "PostgreSQL"],
    role: "Backend Developer",
    link: "https://sitter.live/"
  },
  {
    id: 8,
    title: "Classmate",
    description: "Built a React-based cloud portal integrated with Azure APIs for Irish schools to manage schoolbook inventory, grants, and compliance through interactive dashboards and automated workflows.",
    image: classmateImage,
    tech: ["React"],
    role: "Frontend Developer",
    link: "https://classmate.ie/"
  },
  {
    id: 8,
    title: "Hekanize",
    description: "Built and optimized responsive survey, performance, and approval form UIs using Vue.js and Tailwind CSS, integrating existing form packages with backend APIs on a new platform.",
    image: heakanizeImage,
    tech: ["Vue"],
    role: "Frontend Developer",
    link: "https://hekanize.com/"
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Hupp Technologies Private Limited",
    role: "Software Developer",
    location: "Ahmedabad, India",
    tech: ["React", "Node.js", "Angular", "Vue.js", "MongoDB", "PostgreSQL", "MySQL",  "Firebase", "Git"]
  },
  {
    id: 2,
    company: "Epistic Technologies Pvt Ltd",
    role: "Jr. Software Developerr",
    location: "Ahmedabad, India",
    tech: ["HTML", "CSS", "JavaScript", "Angular"]
  },
];

export const skills = [
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg"
  },
  {
    name: "Vue.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Git",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
];