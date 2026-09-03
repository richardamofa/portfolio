import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="container-edge py-28 md:py-36">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            title="Selected work"
            description="A sample of softwares and systems I've designed and built — the problem behind each one mattered as much as the code."
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] text-mute transition-colors hover:text-paper"
          >
            View all work
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05} className="h-full">
            <Link
              to={`/work/${project.slug}`}
              className="group flex h-full flex-col justify-between bg-surface p-8 transition-colors hover:bg-panel md:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[12px] text-faint" style={{ fontFamily: "var(--font-mono)" }}>
                    {project.year} · {project.status}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                  />
                </div>
                <h3
                  className="mt-5 text-[22px] font-medium leading-snug tracking-tight text-paper md:text-[24px]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {project.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{project.summary}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.slice(0, 1).flatMap((g) => g.items).slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-[12px] text-faint"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
