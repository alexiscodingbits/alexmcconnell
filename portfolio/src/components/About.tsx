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
                I&apos;m an Engineering with Management student at Trinity College Dublin,
                having previously studied Computer Science at UCD. I sit at the
                intersection of technology, finance, and building things that matter &mdash;
                which is exactly where I like to be.
              </p>
              <p>
                When I&apos;m not writing code or modelling spreadsheets, you&apos;ll find me
                on the rugby pitch with Old Belvedere RFC, figuring out a new song on
                piano or guitar, or attempting to improve my Spanish. I also coached
                rugby at school level for a few years, which taught me more about
                communication and patience than any module ever has.
              </p>
              <p>
                I believe the best way to learn something is to build it. That philosophy
                has led me from accretion disk shaders to drone delivery software to an
                EdTech startup, and I&apos;m always looking for the next interesting problem.
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
                  B.A.I. Engineering with Management
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
                  98th percentile &mdash; St. Michael&apos;s College, 2023
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
