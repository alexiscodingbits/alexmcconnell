"use client";

import { useState, useRef } from "react";
import Image from "next/image";
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

const rugbySounds = [
  "/sevennation.mp3",
  "/gonnaflynow.mp3",
  "/shippinguptoboston.mp3",
  "/cantstop.mp3",
  "/chelsea_dagger.m4a",
];

const interests = [
  {
    label: "Rugby",
    detail: "Old Belvedere RFC. UCD McCorry Cup winner. Coached at school level.",
    image: "/ucd_rugby_photo.jpg",
  },
  {
    label: "Music",
    detail: "Self-taught piano and guitar.",
    image: null,
  },
  {
    label: "Languages",
    detail: "Gaeilge, English, German, and self-taught Spanish.",
    image: null,
  },
  {
    label: "Maths Tutor",
    detail: "Passionate about mathematics and find teaching it incredibly rewarding. Tutor college, Leaving Cert, and Junior Cert students.",
    image: null,
  },
  {
    label: "Student2Student Mentor TCD",
    detail: "Selected as a Peer Mentor, managing the academic and social onboarding of students, demonstrating strong communication and relationship-building skills.",
    image: null,
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
                  <div
                    key={item.label}
                    className="group relative"
                    onMouseEnter={() => {
                      if (!item.image) return;
                      setHovered(item.label);
                      if (item.label === "Rugby") {
                        const src = rugbySounds[Math.floor(Math.random() * rugbySounds.length)];
                        audioRef.current = new Audio(src);
                        audioRef.current.play().catch(() => {});
                      }
                    }}
                    onMouseLeave={() => {
                      setHovered(null);
                      if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current.currentTime = 0;
                        audioRef.current = null;
                      }
                    }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="font-[family-name:var(--font-heading)] text-xs text-copper/50">
                        //
                      </span>
                      <span className={`text-sm font-medium transition-colors ${item.image ? "cursor-default text-off-white hover:text-copper-light" : "text-off-white"}`}>
                        {item.label}
                      </span>
                      {item.image && (
                        <span className="font-[family-name:var(--font-heading)] text-[10px] text-copper/40 tracking-wider">
                          // hover
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-light/55 ml-5 mt-0.5">
                      {item.detail}
                    </p>

                    {/* Hover photo */}
                    {item.image && (
                      <div
                        className="pointer-events-none absolute left-0 -top-48 z-50 transition-all duration-300"
                        style={{
                          opacity: hovered === item.label ? 1 : 0,
                          transform: hovered === item.label ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
                        }}
                      >
                        <div
                          className="rounded-2xl p-[3px]"
                          style={{
                            background: "linear-gradient(135deg, #d4884a, #e8a76a, #9a5f2a, #d4884a)",
                            boxShadow: "0 8px 32px rgba(212,136,74,0.3), 0 2px 8px rgba(0,0,0,0.5)",
                          }}
                        >
                          <div className="rounded-2xl overflow-hidden">
                            <Image
                              src={item.image}
                              alt="Rugby photo"
                              width={240}
                              height={160}
                              className="object-cover block rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    )}
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
