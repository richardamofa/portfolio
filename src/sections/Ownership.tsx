import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const POINTS = [
  {
    title: "Turning ambiguity into systems",
    body: "Most early requirements are directional, not precise. Part of the job is asking the questions that turn 'something like this' into a system that can actually be built.",
  },
  {
    title: "Making the architectural decisions",
    body: "Where a boundary sits, what's synchronous, what's eventually consistent — these decisions are cheap to make early and expensive to unmake later.",
  },
  {
    title: "Connecting product requirements to engineering",
    body: "A feature request and a technical spec aren't the same document. Translating between them, in both directions, is where good systems come from.",
  },
  {
    title: "Building software beyond the prototype",
    body: "A demo proves an idea works once. Production software has to keep working under load, under failure, and under a team that changes over time.",
  },
  {
    title: "Owning technical outcomes",
    body: "Shipping isn't the finish line. Watching how a system behaves in production — and being accountable for it — is part of building it.",
  },
];

export default function Ownership() {
  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <SectionHeading
          index="01"
          title="Why teams need technical ownership"
          description="Good ideas fail for engineering reasons more often than product reasons. This is the part of the work that prevents that."
        />
      </Reveal>

      <div className="mt-16 hairline">
        {POINTS.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.04}>
            <div className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-10">
              <h3
                className="text-[19px] font-medium leading-snug text-paper md:text-[20px]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {point.title}
              </h3>
              <p className="max-w-xl text-[15px] leading-relaxed text-mute">{point.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
