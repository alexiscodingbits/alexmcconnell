"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "SmartCert.ie",
    subtitle: "EdTech Startup",
    description:
      "An AI-powered Leaving Cert study platform that helps students prepare more effectively. Built from scratch as a real product, handling everything from web development to AI/LLM integration and information security.",
    tech: ["Next.js", "AI/LLM", "Web Dev", "InfoSec"],
    annotation: "// active users, real product",
    link: "https://smartcert.ie",
  },
  {
    title: "EngMang.ie",
    subtitle: "Community Platform",
    description:
      "A full-stack platform for TCD Engineering Management students featuring real-time messaging, role-based access control, file storage, and SMS notifications. The whole stack, from auth to deployment.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Prisma",
      "Pusher",
      "Cloudflare R2",
      "Twilio",
      "Vercel",
    ],
    annotation: "// full-stack, production-grade",
    link: "https://engmang.ie",
  },
  {
    title: "Black Hole Visualisation",
    subtitle: "Graphics & Physics",
    description:
      "An interactive real-time black hole renderer using custom GLSL shaders. Implements ray marching, gravitational lensing, Doppler shifting, and accretion disk physics — all running at interactive frame rates on consumer hardware.",
    tech: ["Python", "OpenGL", "GLSL", "Ray Marching"],
    annotation: "// custom shaders, real physics",
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="02" title="Projects" />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="group relative border border-grid/40 hover:border-copper/40 transition-all duration-300 p-6 md:p-8 bg-navy-light/30 hover:bg-navy-light/50">
                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-copper/40 group-hover:border-copper/70 transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-copper/40 group-hover:border-copper/70 transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-copper/40 group-hover:border-copper/70 transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-copper/40 group-hover:border-copper/70 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-off-white group-hover:text-copper-light transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-[family-name:var(--font-heading)] text-xs text-slate/60 tracking-wider uppercase mt-1">
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Annotation tooltip */}
                  <span className="font-[family-name:var(--font-heading)] text-[11px] text-copper/0 group-hover:text-copper/70 transition-all duration-300 whitespace-nowrap md:mt-1">
                    {p.annotation}
                  </span>
                </div>

                <p className="text-sm text-slate-light/70 leading-relaxed mb-5 max-w-2xl">
                  {p.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-[family-name:var(--font-heading)] text-[10px] tracking-wider text-slate/60 border border-grid/40 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-[family-name:var(--font-heading)] text-xs text-copper/60 hover:text-copper transition-colors flex items-center gap-1"
                    >
                      Visit
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 9L9 3M9 3H4M9 3V8" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
