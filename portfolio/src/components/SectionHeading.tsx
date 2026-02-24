import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <ScrollReveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-widest uppercase">
          {label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-copper/40 to-transparent max-w-32" />
      </div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-off-white tracking-tight">
        {title}
      </h2>
    </ScrollReveal>
  );
}
