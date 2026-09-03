import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="container-edge flex min-h-[92vh] flex-col justify-center pt-32 pb-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[13px] text-faint"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Software engineer & architect
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-4xl text-balance text-[40px] font-medium leading-[1.08] tracking-tight text-paper sm:text-[56px] md:text-[68px]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        I build the softwares behind ambitious digital products.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-xl text-[17px] leading-relaxed text-mute md:text-lg"
      >
        I work at the intersection of product and engineering — turning
        ambiguous requirements into architecture, and architecture into
        software that keeps working after launch day.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex flex-wrap items-center gap-4"
      >
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[14px] font-medium text-void transition-transform hover:scale-[1.02]"
        >
          Explore the work
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-medium text-paper transition-colors hover:border-paper/40"
        >
          Start a conversation
        </Link>
      </motion.div>
    </section>
  );
}
