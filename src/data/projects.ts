import {
  Brain,
  CalendarDays,
  GraduationCap,
  Lightbulb,
  Scale,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  imageAlt: string;
  displayUrl?: string;
  rotation: string;
  icon: LucideIcon;
  featured: boolean;
};

export const projects = [
  {
    id: "ai-vakil",
    name: "AI Vakil",
    category: "Legal AI Workspace",
    description:
      "A legal-document intelligence workspace enabling users to query contracts in plain English, extract critical clauses, and understand legal terms with source-backed AI answers.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/rheaadotcom/ai-vakil",
    image: "/images/projects/ai-vakil.png",
    imageAlt: "AI Vakil legal document workspace and AI intelligence preview",
    displayUrl: "github.com/rheaadotcom/ai-vakil",
    rotation: "-1.5deg",
    icon: Scale,
    featured: true,
  },
  {
    id: "people-priorities",
    name: "People's Priorities",
    category: "Civic Tech · Governance",
    description:
      "An AI-powered constituency intelligence platform for smart governance, turning citizen complaints into actionable insights with command center KPIs, GIS maps, and project tracking.",
    technologies: [
      "Next.js 16",
      "React 19",
      "FastAPI",
      "Python",
      "Groq API",
      "MongoDB",
    ],
    githubUrl: "https://github.com/rheaadotcom/people-priorities",
    liveDemoUrl: "https://people-priorities.vercel.app",
    image: "/images/projects/people-priorities.png",
    imageAlt:
      "People's Priorities smart governance platform and command center dashboard preview",
    displayUrl: "people-priorities.vercel.app",
    rotation: "1.2deg",
    icon: UsersRound,
    featured: true,
  },
  {
    id: "idea-validator-ai",
    name: "IdeaValidator AI",
    category: "Startup Intelligence",
    description:
      "An AI startup validation platform delivering market forecasts, competitor radar positioning, SWOT matrices, profitability readiness scores, and instant 10-slide investor decks.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Groq API",
      "MongoDB",
    ],
    githubUrl: "https://github.com/rheaadotcom/idea-validatorAI",
    liveDemoUrl: "https://idea-validator-ai.vercel.app",
    image: "/images/projects/idea-validatorai.png",
    imageAlt:
      "IdeaValidator AI startup idea validation and market research dashboard preview",
    displayUrl: "idea-validator-ai.vercel.app",
    rotation: "-1.0deg",
    icon: Lightbulb,
    featured: true,
  },
  {
    id: "college-hub",
    name: "College Hub",
    category: "EdTech · Discovery",
    description:
      "A modern college discovery platform for exploring and comparing Indian institutions, with NIRF rankings, placement records, fee structures, courses, and student reviews.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/rheaadotcom/college-hub",
    liveDemoUrl: "https://college-hub-eight.vercel.app/",
    image: "/images/projects/college-hub.png",
    imageAlt: "College Hub college discovery and comparison portal preview",
    displayUrl: "college-hub-eight.vercel.app",
    rotation: "1.4deg",
    icon: GraduationCap,
    featured: true,
  },
  {
    id: "cognito-lab",
    name: "CognitoLab",
    category: "Cognitive Research SaaS",
    description:
      "A research-grade SaaS platform empowering scientists and educators to build, run, and analyze web-based psychological tasks with millisecond-accurate reaction time data.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Data Analytics",
    ],
    liveDemoUrl: "https://cognito-lab.vercel.app/",
    image: "/images/projects/cognito-lab.png",
    imageAlt:
      "CognitoLab cognitive research experiment builder and analytics dashboard preview",
    displayUrl: "cognito-lab.vercel.app",
    rotation: "-1.2deg",
    icon: Brain,
    featured: true,
  },
  {
    id: "wall-calendar",
    name: "Wall Calendar",
    category: "Interactive Design · Productivity",
    description:
      "An aesthetic interactive digital wall calendar featuring monthly timeline views, personal notes workspace, daily status tracking, and smooth calendar-flip interactions.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "UI/UX Design",
    ],
    liveDemoUrl: "https://wall-calender-three.vercel.app/",
    image: "/images/projects/wall-calender.png",
    imageAlt:
      "Wall Calendar interactive spiral-bound calendar and notes preview",
    displayUrl: "wall-calender-three.vercel.app",
    rotation: "0.9deg",
    icon: CalendarDays,
    featured: true,
  },
] satisfies readonly Project[];
