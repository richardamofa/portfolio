import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";

const LINKS = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Systems", to: "/#systems" },
  //{ label: "Thinking", to: "/thinking" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(32);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile panel on route change.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Escape to close + focus return to the toggle button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.7 }}
        className="pointer-events-auto flex flex-col overflow-hidden rounded-[28px] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.86)" : "rgba(10,10,10,0.62)",
        }}
        aria-label="Primary"
      >
        {/* Desktop row */}
        <motion.div
          layout
          className="hidden items-center md:flex"
          animate={{
            paddingLeft: scrolled ? "18px" : "22px",
            paddingRight: scrolled ? "10px" : "12px",
            paddingTop: scrolled ? "8px" : "12px",
            paddingBottom: scrolled ? "8px" : "12px",
            gap: scrolled ? "22px" : "30px",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.7 }}
        >
          <NavLink
            to="/"
            className="whitespace-nowrap font-medium tracking-tight text-paper"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <motion.span
              layout
              animate={{ fontSize: scrolled ? 13 : 14 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="block"
            >
              Richard Amofa
            </motion.span>
          </NavLink>

          <ul className="flex items-center whitespace-nowrap" style={{ gap: scrolled ? "18px" : "24px" }}>
            {LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-[13px] transition-colors duration-200 ${
                      isActive && link.to !== "/#systems"
                        ? "text-paper"
                        : "text-mute hover:text-paper"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile row */}
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 md:hidden">
          <NavLink to="/" className="text-[15px] font-medium text-paper" style={{ fontFamily: "var(--font-sans)" }}>
            R
          </NavLink>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="flex h-8 w-8 items-center justify-center rounded-full text-paper transition-colors hover:bg-white/10"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile expanding panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-nav-panel"
              ref={panelRef}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 pb-4 pt-1">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-3 py-2.5 text-[15px] transition-colors ${
                          isActive && link.to !== "/#systems"
                            ? "bg-white/10 text-paper"
                            : "text-mute hover:bg-white/5 hover:text-paper"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
