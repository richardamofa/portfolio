import type { ExperienceEntry, Repo } from "../types/experience";

export const experience: ExperienceEntry[] = [
  {
    organization: "Voima",
    role: "FULL-STACK ENGINEER",
    period: "May 2026 - Present",
    context: 
      "Building and evolving Voima's production digital platform across the frontend, backend, CMS, and data layers. I translate changing product and organizational requirements into systems that are maintainable, reusable, and practical for the people operating them.",
    impact: [
      "Built the architecture for a CMS-driven platform where programs, news, research, stories, impact data, milestones, and other content can be managed and reused across the product without hardcoding each page.",
      "Made architectural decisions around the separation of React presentation, Sanity content, backend services, and PostgreSQL application data, allowing the platform to evolve without tightly coupling the content, UI, and business logic.",
    ],
  },
  /*{
    organization: "[Voima / organization name]",
    role: "[Job title]",
    period: "[Start] - [End]",
    context:
      "[One or two sentences on the team, product, and what you were responsible for.]",
    impact: [
      "[A specific system or capability you owned end to end.]",
      "[A technical decision you made and the trade-off behind it.]",
    ],
  },*/
];

export const repos: Repo[] = [
    {
    name: "Biggs Fitness App",
    description: "AI-powered fitness app. Modular-monolith backend, mobile-first React frontend.",
    language: "TypeScript",
    type: "Experiment",
    url: "https://github.com/richardamofa/biggs-fitness-app.v2.0",
  },
  {
    name: "Seek Jobs Ghana",
    description: "A uniformed layout for an online vacancy platform.",
    language: "HTML, CSS, JS, PHP",
    type: "Application",
    url: "https://github.com/richardamofa/seekjobsghana",
  },
  {
    name: "Authenticated Login System",
    description: "C++ console login system and is being developed into a web-based authentication system using Crow, Asio, and React.",
    language: "JavaScript, Tailwind CSS, C++, HTML",
    type: "Experiment",
    url: "https://github.com/richardamofa/cpp-login-system",
  },
  {
    name: "HMS",
    description: "A simple CRUD hospital management system.",
    language: "TypeScript",
    type: "Tool",
    url: "https://github.com/richardamofa/hms",
  },
];
