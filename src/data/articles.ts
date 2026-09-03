import type { Article } from "../types/article";

// Articles are data-driven so this list can later be sourced from
// Markdown files or a headless CMS without changing the page components.
export const articles: Article[] = [
  {
    slug: "on-technical-debt",
    title: "Technical debt is a financing decision, not a moral failing",
    excerpt:
      "Treating debt as a spectrum of trade-offs — some deliberate and cheap to repay, some silent and compounding — instead of a single guilty word.",
    topic: "Engineering decisions",
    date: null,
    status: "planned",
  },
  {
    slug: "boundaries-before-frameworks",
    title: "Draw the system boundaries before picking a framework",
    excerpt:
      "Why the shape of a system's boundaries matters more than the tools inside them, and how to find those boundaries before writing code.",
    topic: "Architecture",
    date: null,
    status: "planned",
  },
  {
    slug: "consistency-is-a-choice-per-read-path",
    title: "Consistency is a choice you make per read path",
    excerpt:
      "Strong and eventual consistency aren't competing philosophies — most real systems need both, applied deliberately in different places.",
    topic: "Data & systems",
    date: null,
    status: "planned",
  },
  {
    slug: "apis-as-product-surfaces",
    title: "An API is a product surface, not an implementation detail",
    excerpt:
      "Designing APIs for the humans who'll integrate against them, not just for the data model that happens to sit behind them.",
    topic: "APIs",
    date: null,
    status: "planned",
  },
];
