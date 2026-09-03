export interface ProjectStackGroup {
  domain: string;
  items: string[];
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  outcome: string;

  images?: ProjectImage[];

  stack: ProjectStackGroup[];

  featured: boolean;

  status: "In production" | "Case study" | "Experiment";

  sections: {
    context: ProjectSection;
    constraints: ProjectSection;
    architecture: ProjectSection;
    decisions: ProjectSection;
    implementation: ProjectSection;
    challenges: ProjectSection;
    outcome: ProjectSection;
    lessons: ProjectSection;
  };

  links?: {
    live?: string;
    repo?: string;
  };
}