import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const technicalSkills = [
  "Python",
  "C",
  "MATLAB",
  "TypeScript",
  "GLSL",
  "Next.js",
  "Supabase",
  "OpenGL",
  "AI / LLM",
];

const interests = [
  {
    label: "Rugby",
    detail:
      "Old Belvedere RFC. UCD McCorry Cup winner. Coached at school level.",
  },
  {
    label: "Music",
    detail: "Self-taught piano and guitar.",
  },
  {
    label: "Languages",
    detail: "Gaeilge, English, German, and self-taught Spanish.",
  },
  {
    label: "Student2Student Mentor TCD",
    detail: "Selected as a Peer Mentor, managing the academic and social onboarding of students, demonstrating strong communication and relationship-building skills.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading label="04" title="Skills & Interests" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Technical */}
          <ScrollReveal delay={100}>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-5">
                Technical
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {technicalSkills.map((s) => (
                  <span
                    key={s}
                    className="font-[family-name:var(--font-heading)] text-xs text-slate-light/80 border border-grid/50 hover:border-copper/40 hover:text-copper-light px-3 py-2 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Spotify embeds */}
              <div className="space-y-5">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-3">
                    // current playlist
                  </p>
                  <div className="border border-grid/40 overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/playlist/3uPqNpJ2n7IV43nCjfTREO?utm_source=generator&theme=0"
                      width="100%"
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ border: 0 }}
                    />
                  </div>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-3">
                    // current favourite
                  </p>
                  <div className="border border-grid/40 overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/track/5pkd9ib1RgbkAd1R9bIOCa?utm_source=generator&theme=0"
                      width="100%"
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ border: 0 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Beyond code */}
          <ScrollReveal delay={200}>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-xs text-copper/70 tracking-wider uppercase mb-5">
                Beyond Code
              </p>
              <div className="space-y-4">
                {interests.map((item) => (
                  <div key={item.label} className="group">
                    <div className="flex items-baseline gap-2">
                      <span className="font-[family-name:var(--font-heading)] text-xs text-copper/50">
                        //
                      </span>
                      <span className="text-sm text-off-white font-medium">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm text-slate-light/55 ml-5 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
