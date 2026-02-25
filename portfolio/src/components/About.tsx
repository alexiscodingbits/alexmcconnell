import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading label="01" title="About" />

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <ScrollReveal delay={100}>
            <div className="space-y-5 text-slate-light/80 leading-relaxed">
              <p>
                Hi!, I&apos;m Alex, an Engineering with Management student at Trinity College Dublin,
                having previously studied Computer Science at UCD. I have a passion for building, especially when those products have an impact on the world.
              </p>
              <p>
              
                I believe the best way to learn something is to build it. That philosophy
                has led me from accretion disk shaders to drone delivery software to an
                EdTech startup, and I&apos;m always looking for the next interesting problem.

              </p>
              <p>
                Some Favourite Quotes:
              </p>
              <p>
                "Do not be timid and squeamish about your actions. All life is an experiment. The more experiments you make the better." — Ralph Waldo Emerson
              </p>
              <p>
                "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out." — Steve Jobs
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="space-y-6">
              <div>
                <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-2">
                  Education
                </p>
                <p className="text-sm text-slate-light/90">
                  M.Eng Engineering with Management
                </p>
                <p className="text-sm text-slate/60">
                  Trinity College Dublin
                </p>
              </div>
              <div className="h-px bg-grid/40" />
              <div>
                <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-2">
                  Previously
                </p>
                <p className="text-sm text-slate-light/90">
                  Computer Science
                </p>
                <p className="text-sm text-slate/60">
                  University College Dublin
                </p>
              </div>
              <div className="h-px bg-grid/40" />
              <div>
                <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-2">
                  Secondary
                </p>
                <p className="text-sm text-slate-light/90">
                  Leaving Certificate — 613 / 625 Points
                </p>
                <p className="text-sm text-slate/60">
                  98th percentile
                </p>
                <p className="text-sm text-slate/60">
                  St. Michael&apos;s College, 2023
                </p>
              </div>
              <div className="h-px bg-grid/40" />
              <div>
                <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-2">
                  Languages
                </p>
                <p className="text-sm text-slate-light/90">
                  Gaeilge, English, German, Spanish
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
