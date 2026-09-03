export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  context: string;
  impact: string[];
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  type: "Library" | "Application" | "Experiment" | "Tool";
  url: string;
}
