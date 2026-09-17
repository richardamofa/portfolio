import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function AboutTeaser() {
  return (
    <section className="container-edge py-28 md:py-36">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <SectionHeading index="06" title="About" />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="max-w-xl">
            <p className="text-[16px] leading-relaxed text-mute md:text-[17px]">
              I approach engineering as a series of decisions, not a series of
              tasks. Before writing code, I want to understand what has to be
              true for the system to succeed - technically and for the
              product it serves.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-mute md:text-[17px]">
              That means spending real time on boundaries, trade-offs, and
              failure modes early, so the implementation phase is mostly
              execution rather than discovery.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] text-paper transition-opacity hover:opacity-70"
            >
              More about how I work
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
