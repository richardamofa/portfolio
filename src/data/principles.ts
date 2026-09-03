export interface Principle {
  statement: string;
  note: string;
}

export const principles: Principle[] = [
  {
    statement: "Simplicity beats unnecessary complexity.",
    note: "The simplest system that meets the real requirements is usually the right one — complexity should be earned, not assumed.",
  },
  {
    statement: "Architecture is about trade-offs.",
    note: "Every structural decision gives something up. The job is making that trade consciously, and being able to explain it later.",
  },
  {
    statement: "Software should be designed for change.",
    note: "Requirements move. Systems that assume they won't tend to become the reason the next change is expensive.",
  },
  {
    statement: "Technical decisions should serve the product.",
    note: "An elegant solution to the wrong problem isn't elegant. Engineering choices are judged by the outcomes they enable.",
  },
  {
    statement: "Ownership extends beyond writing code.",
    note: "Shipping is the midpoint, not the finish line — a system's behavior in production is still your responsibility.",
  },
];
