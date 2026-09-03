import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { principles } from "../data/principles";

export default function Principles() {
  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <SectionHeading index="04" title="Engineering principles" />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
        {principles.map((p, i) => (
          <Reveal key={p.statement} delay={i * 0.04}>
            <blockquote className="border-l border-line pl-6">
              <p
                className="text-[19px] font-medium leading-snug text-paper md:text-[21px]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.statement}
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-mute">{p.note}</p>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
