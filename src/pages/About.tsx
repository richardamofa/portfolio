import RichardAmofa from "../assets/about/about_image_1.jpg";
import Reveal from "../components/Reveal";
import { useSeo } from "../lib/useSeo";
import Experience from "../sections/Experience";

export default function About() {
  useSeo({
    title: "About",
    description: "How I approach engineering, architecture, and technical ownership.",
  });

  return (
    <>
      <section className="container-edge pb-16 pt-40 md:pt-48">
        <Reveal>
          <p className="font-mono text-[13px] text-faint" style={{ fontFamily: "var(--font-mono)" }}>
            About
          </p>
          <h1
            className="mt-4 max-w-2xl text-balance text-[34px] font-medium leading-[1.15] tracking-tight text-paper md:text-[44px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            I care more about how a system fails than how it demos.
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <div className="group relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-line bg-panel p-[1px] md:max-w-none">
              <div className="relative h-full w-full overflow-hidden rounded-[15px]">
                <img
                  src={RichardAmofa}
                  alt="Richard Amofa"
                  className="h-full w-full object-cover object-center grayscale-[10%] transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/[0.02]" />

                <div className="pointer-events-none absolute inset-0 border border-white/[0.04]" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="max-w-xl space-y-5">
              <p className="text-[16px] leading-relaxed text-mute">
                I'm a software engineer who spends as much time thinking about
                structure as I do writing implementation. A feature that
                works today but can't survive the next requirement isn't
                finished - it's deferred work.
              </p>
              <p className="text-[16px] leading-relaxed text-mute">
                My process usually starts with questions rather than code:
                what has to stay true as this grows, where does this system
                need to bend, and what's the cost of being wrong about either
                one. Getting those answers early is cheaper than discovering
                them in production.
              </p>
              <p className="text-[16px] leading-relaxed text-mute">
                I've worked across the stack - from interface to
                infrastructure - but the common thread is ownership: caring
                about a system's behavior after it ships, not just its
                correctness on the day it does.
              </p>
              <p className="text-[16px] leading-relaxed text-mute">
                Outside of client and employer work, I spend time on smaller
                technical experiments - see{" "}
                <a
                  href="https://github.com/richardamofa"
                  className="text-paper underline decoration-line underline-offset-4"
                >
                  GitHub
                </a>{" "}
                - usually about the same questions: boundaries, data, and
                what happens when things go wrong.
              </p>
              <p className="text-[15px] leading-relaxed text-faint">
                "If you think it's simple then you don't understand the complexity of it" ~ Bjarne!           
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Experience />
    </>
  );
}
