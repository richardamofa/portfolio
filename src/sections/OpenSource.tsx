import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { repos } from "../data/experience";

export default function OpenSource() {
  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <SectionHeading
          index="08"
          title="GitHub &amp; open source"
          description="Repositories, experiments, and technical work outside client and employer projects."
        />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {repos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.04} className="h-full">
            <a
              href={repo.url}
              className="group flex h-full flex-col justify-between bg-surface p-6 transition-colors hover:bg-panel"
            >
              <div>
                <div className="flex items-center justify-between">
                  <FolderGit2 size={16} className="text-faint" />
                  <ArrowUpRight
                    size={14}
                    className="text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                  />
                </div>
                <p
                  className="mt-4 font-mono text-[14px] text-paper"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {repo.name}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{repo.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-faint">
                <span>{repo.language}</span>
                <span>·</span>
                <span>{repo.type}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
