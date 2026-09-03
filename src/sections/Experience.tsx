import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <SectionHeading index="07" title="Experience" />
      </Reveal>

      <div className="mt-16 hairline">
        {experience.map((entry, i) => (
          <Reveal key={`${entry.organization}-${entry.role}`} delay={i * 0.04}>
            <div className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-[0.9fr_1.5fr] md:gap-12 md:py-10">
              <div>
                <p
                  className="text-[17px] font-medium text-paper"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {entry.role}
                </p>
                <p className="mt-1 text-[14px] text-mute">{entry.organization}</p>
                <p
                  className="mt-1 font-mono text-[12.5px] text-faint"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {entry.period}
                </p>
              </div>
              <div>
                <p className="text-[14.5px] leading-relaxed text-mute">{entry.context}</p>
                <ul className="mt-4 space-y-2">
                  {entry.impact.map((line) => (
                    <li key={line} className="flex gap-3 text-[14px] leading-relaxed text-mute">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
