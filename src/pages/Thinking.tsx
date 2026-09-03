import Reveal from "../components/Reveal";
import { articles } from "../data/articles";
import { useSeo } from "../lib/useSeo";

export default function Thinking() {
  useSeo({
    title: "Thinking",
    description: "Notes on architecture, systems design, and engineering decisions.",
  });

  return (
    <section className="container-edge pb-28 pt-40 md:pt-48">
      <Reveal>
        <p className="font-mono text-[13px] text-faint" style={{ fontFamily: "var(--font-mono)" }}>
          Thinking
        </p>
        <h1
          className="mt-4 max-w-2xl text-balance text-[36px] font-medium leading-[1.12] tracking-tight text-paper md:text-[48px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Notes on architecture and engineering decisions.
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-mute">
          Longer-form writing on systems, trade-offs, and the reasoning behind
          technical decisions.
        </p>
      </Reveal>

      <div className="mt-16 hairline">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.04}>
            <div className="flex flex-col gap-2 border-b border-line py-8 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <div className="md:max-w-2xl">
                <span
                  className="font-mono text-[11.5px] text-faint"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {article.topic}
                </span>
                <h2
                  className="mt-2 text-[19px] font-medium leading-snug text-paper"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {article.title}
                </h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-mute">{article.excerpt}</p>
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
