import { ArrowUpRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import Reveal from "../components/Reveal";
import { useSeo } from "../lib/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact",
    description: "Tell me what you're building, what isn't working, or what you're trying to figure out.",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // [Placeholder: wire this up to a real endpoint, e.g. Formspree, a
    // serverless function, or mailto fallback.]
    setSubmitted(true);
  };

  return (
    <section className="container-edge pb-28 pt-40 md:pt-48">
      <Reveal>
        <p className="font-mono text-[13px] text-faint" style={{ fontFamily: "var(--font-mono)" }}>
          Contact
        </p>
        <h1
          className="mt-4 max-w-2xl text-balance text-[36px] font-medium leading-[1.14] tracking-tight text-paper md:text-[48px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Have a hard problem? Give it to Claude.
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-mute">
          Tell me what you're building, what isn't working, or what you're
          trying to figure out. A few sentences of context is enough to
          start.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-[1fr_0.8fr] md:gap-16">
        <Reveal>
          {submitted ? (
            <div className="rounded-2xl border border-line bg-panel px-7 py-10">
              <p className="text-[17px] font-medium text-paper" style={{ fontFamily: "var(--font-sans)" }}>
                Message received.
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-mute">
                I'll get back to you shortly. In the meantime, feel free to
                look through the work or the thinking section.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="text-[13px] text-mute">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-paper outline-none transition-colors placeholder:text-faint focus:border-paper/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-[13px] text-mute">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-paper outline-none transition-colors placeholder:text-faint focus:border-paper/40"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-[13px] text-mute">
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-paper outline-none transition-colors placeholder:text-faint focus:border-paper/40"
                  placeholder="A few sentences of context - what you're building, or what isn't working."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[14px] font-medium text-void transition-transform hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-8">
            <div>
              <p className="text-[13px] text-faint">Direct</p>
              <a
                href="mailto:richardamofa.software@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-[16px] text-paper hover:opacity-70"
              >
                <Mail size={15} />
                richardamofa.software@gmail.com
              </a>
              <p className="mt-1 text-[12.5px] text-faint">richardamofa.software@gmail.com</p>
            </div>

            <div>
              <p className="text-[13px] text-faint">Elsewhere</p>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="https://github.com/richardamofa"
                  className="inline-flex items-center gap-1.5 text-[15px] text-paper hover:opacity-70"
                >
                  GitHub <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/in/richard-osei-amofa-113414286/"
                  className="inline-flex items-center gap-1.5 text-[15px] text-paper hover:opacity-70"
                >
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div>
              <p className="text-[13px] text-faint">Response time</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-mute">
                Usually within 24 - 48 hours.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
