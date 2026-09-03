import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { systemLayers } from "../data/systems";

export default function Systems() {
  return (
    <section id="systems" className="container-edge py-28 md:py-36">
      <Reveal>
        <SectionHeading
          index="03"
          title="How I think about systems &amp; softwares"
          description="Every product decision eventually becomes an infrastructure decision. Working through that chain deliberately is most of the job."
        />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-6 md:gap-4">
        {systemLayers.map((layer, i) => (
          <Reveal key={layer.title} delay={i * 0.04} className="relative">
            <div className="flex flex-col border-b border-line py-6 md:min-h-[280px] md:border-b-0 md:border-l md:border-line md:py-0 md:pl-4">
              <span
                className="font-mono text-[12px] text-faint"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {layer.label}
              </span>
              <h3
                className="mt-3 text-[17px] font-medium text-paper"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {layer.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mute">{layer.description}</p>
              <ul className="mt-4 space-y-1.5">
                {layer.concerns.map((c) => (
                  <li key={c} className="text-[12.5px] text-faint">
                    {c}
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
