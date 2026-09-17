import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProjectImage from "../components/ProjectImage";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { useSeo } from "../lib/useSeo";

export default function Work() {
  useSeo({
    title: "Work",
    description:
      "Selected systems, products, and engineering work across architecture and product development.",
  });

  return (
    <section className="container-edge pb-28 pt-40 md:pt-48">
      <Reveal>
        <p
          className="font-mono text-[13px] text-faint"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Selected work
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1
            className="max-w-2xl text-balance text-[36px] font-medium leading-[1.08] tracking-tight text-paper md:text-[52px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Softwares and systems built to solve real problems.
          </h1>

          <p className="max-w-sm text-[15px] leading-relaxed text-mute md:pb-1">
            A selection of products, systems, and engineering work - with the
            reasoning behind each build.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-x-5 gap-y-16 md:grid-cols-2">
        {projects.map((project, i) => {
          const image = project.images?.[0];

          return (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link
                to={`/work/${project.slug}`}
                className="group block"
              >
                {/* Project screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-[#0a0a0a]">
                  <ProjectImage
                    src={image?.src}
                    alt={image?.alt ?? `${project.name} screenshot`}
                    priority={i < 2}
                    className="h-full w-full"
                  />
                </div>

                {/* Project information */}
                <div className="mt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[11px] text-faint"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.year}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span className="text-[11px] uppercase tracking-[0.08em] text-faint">
                        {project.status}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-2 flex items-start justify-between gap-5">
                    <div>
                      <h2
                        className="text-[22px] font-medium tracking-tight text-paper transition-colors duration-300 group-hover:text-white/65 md:text-[24px]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {project.name}
                      </h2>

                      <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-mute">
                        {project.summary}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-faint">
                      {project.role}
                    </span>

                    {project.stack.slice(0, 2).flatMap((group) =>
                      group.items.slice(0, 2).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-faint"
                        >
                          {item}
                        </span>
                      )),
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}