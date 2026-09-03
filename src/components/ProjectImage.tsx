import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
}: ProjectImageProps) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-[#0a0a0a] ${className}`}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/20">
          Image coming soon
        </span>
      </div>
    );
  }

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      {/* Dark edge treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5 opacity-60" />

      {/* Hover border */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/0 transition-colors duration-500 group-hover:border-white/15" />

      {/* View icon */}
      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/60 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:border-white/20 group-hover:text-white group-hover:opacity-100">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}