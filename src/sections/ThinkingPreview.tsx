import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { articles } from "../data/articles";

export default function ThinkingPreview() {
  const preview = articles.slice(0, 3);

  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="06"
            title="Thinking"
            description="Notes on architecture, systems, and the decisions that don't show up in a changelog."
          />
          <Link
            to="/thinking"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] text-mute transition-colors hover:text-paper"
          >
            All notes
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Reveal>

      <div className="mt-16 hairline">
        {preview.map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.04}>
            <div className="flex flex-col gap-2 border-b border-line py-7 md:flex-row md:items-baseline md:justify-between md:gap-8 md:py-8">
              <div className="md:max-w-xl">
                <span
                  className="font-mono text-[11.5px] text-faint"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {article.topic}
                </span>
                <h3
                  className="mt-2 text-[17px] font-medium leading-snug text-paper"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {article.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">{article.excerpt}</p>
              </div>
              <span className="shrink-0 text-[12.5px] text-faint">
                {article.status === "published" ? article.date : "Coming soon"}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
