import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function ContactCTA() {
  return (
    <section className="container-edge py-28 md:py-36">
      <Reveal>
        <div className="rounded-3xl border border-line bg-panel px-8 py-16 text-center md:px-16 md:py-24">
          <h2
            className="text-balance text-[32px] font-medium leading-[1.15] tracking-tight text-paper md:text-[44px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Have a problem?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-mute md:text-base">
            Tell me what you're building, what isn't working, or what you're
            trying to figure out.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[14px] font-medium text-void transition-transform hover:scale-[1.02]"
            >
              Start a conversation
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
