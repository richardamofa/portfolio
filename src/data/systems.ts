export interface SystemLayer {
  label: string;
  title: string;
  description: string;
  concerns: string[];
}

export const systemLayers: SystemLayer[] = [
  {
    label: "01",
    title: "Product",
    description:
      "What the system needs to be true for the person using it - the requirement before it becomes a schema.",
    concerns: ["Requirements", "Constraints", "Success criteria"],
  },
  {
    label: "02",
    title: "Application",
    description:
      "The interfaces and flows that turn product requirements into something a user can act on.",
    concerns: ["UI state", "Client-side validation", "Offline behavior"],
  },
  {
    label: "03",
    title: "APIs",
    description:
      "The contract between the application and everything behind it - designed for the integrator, not just the data.",
    concerns: ["Authentication", "Versioning", "Idempotency"],
  },
  {
    label: "04",
    title: "Services",
    description:
      "Where business logic lives, and where the boundaries between responsibilities get drawn - or don't.",
    concerns: ["Service boundaries", "Background jobs", "Event handling"],
  },
  {
    label: "05",
    title: "Data",
    description:
      "The system of record, and the decisions about consistency, caching, and access that sit around it.",
    concerns: ["Data modeling", "Caching", "Consistency guarantees"],
  },
  {
    label: "06",
    title: "Infrastructure",
    description:
      "What keeps the whole thing running, visible, and recoverable once it's live.",
    concerns: ["Deployment", "Observability", "Scalability & reliability"],
  },
];
