import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSeo } from "../lib/useSeo";

export default function NotFound() {
  useSeo({ title: "Page not found" });

  return (
    <section className="container-edge flex min-h-[80vh] flex-col items-start justify-center pt-24">
      <p className="font-mono text-[13px] text-faint" style={{ fontFamily: "var(--font-mono)" }}>
        404
      </p>
      <h1
        className="mt-4 text-[32px] font-medium tracking-tight text-paper md:text-[40px]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        This route doesn't exist.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mute">
        The page you're looking for isn't here. It may have moved, or the
        link might be out of date.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 text-[14px] text-paper hover:opacity-70"
      >
        <ArrowLeft size={15} />
        Back home
      </Link>
    </section>
  );
}
