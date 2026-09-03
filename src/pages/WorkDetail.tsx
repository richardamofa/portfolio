import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import ProjectImage from "../components/ProjectImage";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { useSeo } from "../lib/useSeo";
import type { ProjectImage as ProjectImageType, ProjectSection } from "../types/project";

function Block({ section }: { section: ProjectSection }) {
  return (
    <div className="border-b border-line py-10 first:pt-0 md:py-12">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[220px_1fr] md:gap-12">
        <h2
          className="text-[16px] font-medium text-paper"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {section.heading}
        </h2>

        <div className="max-w-2xl space-y-4">
          {section.body.map((para, i) => (
            <p
              key={i}
              className="text-[15.5px] leading-relaxed text-mute"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudyImage({
  image,
  priority = false,
}: {
  image: ProjectImageType;
  priority?: boolean;
}) {
  return (
    <figure className="my-10 md:my-14">
      <ProjectImage
        src={image.src}
        alt={image.alt}
        priority={priority}
        className="aspect-[16/9] w-full rounded-2xl border border-line bg-[#0a0a0a]"
      />

      {image.caption && (
        <figcaption className="mt-3 px-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  useSeo({
    title: project ? project.name : "Project not found",
    description: project?.summary,
  });

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = projects.findIndex(
    (p) => p.slug === project.slug,
  );

  const next = projects[(currentIndex + 1) % projects.length];

  const images = project.images ?? [];

  return (
    <article className="container-edge pb-28 pt-40 md:pt-48">
      {/* Header */}
      <Reveal>
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-[13.5px] text-mute transition-colors hover:text-paper"
        >
          <ArrowLeft size={14} />
          All work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span
            className="font-mono text-[12.5px] text-faint"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {project.year}
          </span>

          <span className="text-[12.5px] text-faint">·</span>

          <span className="text-[12.5px] text-faint">
            {project.status}
          </span>

          <span className="text-[12.5px] text-faint">·</span>

          <span className="text-[12.5px] text-faint">
            {project.role}
          </span>
        </div>

        <h1
          className="mt-5 max-w-3xl text-balance text-[34px] font-medium leading-[1.14] tracking-tight text-paper md:text-[46px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {project.name}
        </h1>

        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-mute">
          {project.problem}
        </p>

        <div className="mt-6 flex items-center gap-5">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13.5px] text-paper transition-colors hover:text-mute"
            >
              Visit project
              <ArrowUpRight size={14} />
            </a>
          )}

          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13.5px] text-mute transition-colors hover:text-paper"
            >
              Source
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </Reveal>

      {/* Stack */}
      <Reveal delay={0.05}>
        <div className="mt-14 flex flex-wrap gap-8 rounded-2xl border border-line bg-panel px-7 py-6">
          {project.stack.map((group) => (
            <div key={group.domain}>
              <p className="text-[11.5px] text-faint">
                {group.domain}
              </p>

              <p className="mt-1.5 text-[14px] text-paper">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Hero screenshot */}
      {images[0] && (
        <Reveal delay={0.08}>
          <CaseStudyImage image={images[0]} priority />
        </Reveal>
      )}

      {/* Context */}
      <div className="mt-6">
        <Reveal>
          <Block section={project.sections.context} />
        </Reveal>

        {/* Second screenshot */}
        {images[1] && (
          <Reveal>
            <CaseStudyImage image={images[1]} />
          </Reveal>
        )}

        {/* Constraints */}
        <Reveal>
          <Block section={project.sections.constraints} />
        </Reveal>

        {/* Architecture */}
        <Reveal>
          <Block section={project.sections.architecture} />
        </Reveal>

        {/* Third screenshot */}
        {images[2] && (
          <Reveal>
            <CaseStudyImage image={images[2]} />
          </Reveal>
        )}

        {/* Decisions */}
        <Reveal>
          <Block section={project.sections.decisions} />
        </Reveal>

        {/* Implementation */}
        <Reveal>
          <Block section={project.sections.implementation} />
        </Reveal>

        {/* Challenges */}
        <Reveal>
          <Block section={project.sections.challenges} />
        </Reveal>

        {/* Remaining screenshots */}
        {images.slice(3).map((image, index) => (
          <Reveal key={`${image.src}-${index}`}>
            <CaseStudyImage image={image} />
          </Reveal>
        ))}

        {/* Outcome */}
        <Reveal>
          <Block section={project.sections.outcome} />
        </Reveal>

        {/* Lessons */}
        <Reveal>
          <div className="py-10 md:py-12">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[220px_1fr] md:gap-12">
              <h2
                className="text-[16px] font-medium text-paper"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.sections.lessons.heading}
              </h2>

              <div className="max-w-2xl space-y-4">
                {project.sections.lessons.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15.5px] leading-relaxed text-mute"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Next project */}
      <Reveal>
        <Link
          to={`/work/${next.slug}`}
          className="group mt-16 flex items-center justify-between rounded-2xl border border-line px-7 py-8 transition-colors hover:bg-panel"
        >
          <div>
            <p className="text-[12px] text-faint">
              Next case study
            </p>

            <p
              className="mt-1.5 text-[19px] font-medium text-paper"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {next.name}
            </p>
          </div>

          <ArrowUpRight
            size={20}
            className="text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
          />
        </Link>
      </Reveal>
    </article>
  );
}