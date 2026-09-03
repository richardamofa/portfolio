import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { capabilities } from "../data/capabilities";

export default function Capabilities() {
  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <SectionHeading
          index="05"
          title="Technical capabilities"
          description="Grouped by what each is for, not stacked into a wall of logos."
        />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => (
          <Reveal key={group.domain} delay={i * 0.03} className="h-full">
            <div className="flex h-full flex-col bg-surface p-7">
              <h3
                className="text-[15px] font-medium text-paper"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {group.domain}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-mute">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-[12px] text-faint"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
