interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightBackground?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  lightBackground = true,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-brand-navy"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-brand-navy font-display">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          lightBackground ? "text-slate-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            lightBackground ? "text-slate-600" : "text-slate-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
