import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Director of AI Automation Solutions",
    company: "Media Sphere Solutions",
    period: "Aug 2025 — Present",
    tag: "Current",
    description:
      "Leading the design and deployment of end-to-end AI automation solutions — intelligent voice agents for inbound reception and outbound lead qualification via Twilio, and autonomous AI-powered website auditing tools with actionable SEO performance scoring. Driving operational efficiency and scalable client acquisition for partner businesses.",
  },
  {
    role: "Global Corporate & Investment Banking — Spring Insight",
    company: "Bank of America",
    period: "April 2026",
    tag: "Incoming",
    description:
      "Selected for a competitive spring insight programme in global corporate and investment banking.",
  },
  {
    role: "Technology Hardware Analyst",
    company: "Trinity Student Managed Fund",
    period: "Sep 2025 — Present",
    tag: "Current",
    description:
      "Analysing technology hardware equities for a student-managed portfolio with over €700k in AUM. Building DCF models, running comparable company analyses, and presenting investment theses to the fund.",
  },
  {
    role: "Software Development Intern",
    company: "Manna Aero Drone Delivery",
    period: "May — Sep 2024",
    tag: null,
    description:
      "Worked on optimising drone delivery operations. Wrote production code that improved system efficiency and reliability across the delivery pipeline.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading label="03" title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-copper/40 via-grid/40 to-transparent" />

          <div className="space-y-10 pl-8 md:pl-14">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.company + exp.role} delay={i * 120}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-8 md:-left-14 top-1.5 w-2 h-2 border border-copper/70 bg-navy rotate-45" />

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-sm md:text-base text-off-white">
                      {exp.role}
                    </h3>
                    {exp.tag && (
                      <span className="font-[family-name:var(--font-heading)] text-[10px] text-copper border border-copper/40 px-2 py-0.5 tracking-wider uppercase">
                        {exp.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-copper/70">{exp.company}</span>
                    <span className="text-slate/30">—</span>
                    <span className="font-[family-name:var(--font-heading)] text-xs text-slate/50">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-light/65 leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
