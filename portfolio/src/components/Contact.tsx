import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading label="05" title="Contact" />

        <ScrollReveal delay={100}>
          <div className="max-w-lg">
            <p className="text-slate-light/70 leading-relaxed mb-8">
              Always happy to chat about interesting projects, opportunities, or
              ideas. Drop me a line.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:almcconn@tcd.ie"
                className="group flex items-center gap-3 text-sm text-slate-light/80 hover:text-copper transition-colors"
              >
                <span className="font-[family-name:var(--font-heading)] text-xs text-copper/50 group-hover:text-copper/80 w-12">
                  mail
                </span>
                <span className="h-px flex-0 w-4 bg-grid/40 group-hover:bg-copper/40 transition-colors" />
                <span>almcconn@tcd.ie</span>
              </a>

              <a
                href="https://www.linkedin.com/in/alexmcconnell1002"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-light/80 hover:text-copper transition-colors"
              >
                <span className="font-[family-name:var(--font-heading)] text-xs text-copper/50 group-hover:text-copper/80 w-12">
                  in
                </span>
                <span className="h-px flex-0 w-4 bg-grid/40 group-hover:bg-copper/40 transition-colors" />
                <span>LinkedIn</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
