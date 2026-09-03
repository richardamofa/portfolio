import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";

export default function Footer() {
  const showBackToTop = useScrolled(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-panel/90 text-paper shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors hover:bg-white/15 md:bottom-8 md:right-8"
        >
          <ArrowUp size={17} strokeWidth={1.8} aria-hidden="true" />
        </button>
      )}

      <footer className="hairline mt-32">
      <div className="container-edge flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[15px] text-paper" style={{ fontFamily: "var(--font-sans)" }}>
            Richard Amofa
          </p>
          <p className="mt-1 text-[13px] text-faint">Software engineer &amp;  architect</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-mute">
          <Link to="/work" className="hover:text-paper">Work</Link>
          <Link to="/thinking" className="hover:text-paper">Thinking</Link>
          <Link to="/about" className="hover:text-paper">About</Link>
          <Link to="/contact" className="hover:text-paper">Contact</Link>
          <a href="https://github.com/richardamofa" className="hover:text-paper">GitHub</a>
          <a href="https://www.linkedin.com/in/richard-osei-amofa-113414286/" className="hover:text-paper">LinkedIn</a>
        </nav>

        <p className="text-[12px] text-faint">© {new Date().getFullYear()}</p>
      </div>
      </footer>
    </>
  );
}
