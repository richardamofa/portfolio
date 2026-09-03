interface SectionHeadingProps {
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ index, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-baseline gap-4 ${align === "center" ? "justify-center" : ""}`}>
        {index && (
          <span className="font-mono text-sm text-faint" style={{ fontFamily: "var(--font-mono)" }}>
            {index}
          </span>
        )}
        <h2
          className="text-balance text-[28px] font-medium leading-[1.15] tracking-tight text-paper md:text-[34px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-mute md:text-base">{description}</p>
      )}
    </div>
  );
}
