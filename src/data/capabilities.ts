export interface CapabilityGroup {
  domain: string;
  description: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    domain: "Product engineering",
    description: "Turning requirements into interfaces and flows that hold up under real use.",
    items: ["React", "TypeScript", "Accessibility", "State management"],
  },
  {
    domain: "Backend",
    description: "APIs and services that stay predictable as traffic and team size grow.",
    items: ["Node.js", "REST & GraphQL APIs", "Authentication"],
  },
  {
    domain: "Data",
    description: "Modeling and storing data so the schema tells the truth about the domain.",
    items: ["PostgreSQL", "Data modeling", "Caching strategy"],
  },
  {
    domain: "System design",
    description: "Drawing boundaries between services before deciding what runs inside them.",
    items: ["Service boundaries", "Event-driven design", "Scalability", "Reliability"],
  },
  {
    domain: "Infrastructure",
    description: "The path from a working build to a system someone can operate at 3am.",
    items: ["CI/CD", "Cloud deployment", "Observability"],
  },
  {
    domain: "Engineering practice",
    description: "The habits that keep a codebase legible after the person who wrote it moves on.",
    items: ["Code review", "Testing strategy", "Technical documentation", "Incident review"],
  },
];
