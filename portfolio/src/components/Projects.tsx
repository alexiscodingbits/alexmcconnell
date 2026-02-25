"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const engMangPhotos = [
  { src: "/eng_mang_photo1.png", alt: "EngMang screenshot 1" },
  { src: "/eng_mang_photo2.png", alt: "EngMang screenshot 2" },
];

const smartCertPhoto = "/smart_cert_photo.png";

const blackHoleVideos = [
  { label: "V1", src: "/blackhole_v1.mov", muted: true },
  { label: "V2", src: "/blackhole_v2.mov", muted: true },
  { label: "V3", src: "/blackhole_v3.mp4", muted: false },
];

const projects = [
  {
    title: "SmartCert.ie",
    subtitle: "EdTech Startup",
    description:
      "An AI-powered Leaving Cert study platform that helps students prepare more effectively. Built from scratch as a real product, handling everything from web development to AI/LLM integration and information security.",
    tech: ["Next.js", "AI/LLM", "Web Dev", "InfoSec"],
    annotation: "// active users, real product",
    link: "https://smartcert.ie",
    hoverVideos: false,
    hoverPhotos: false,
    hoverSmartCert: true,
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
    hoverVideos: false,
    hoverPhotos: true,
  },
  {
    title: "Large-Scale SEO Intelligence Pipeline",
    subtitle: "Data Engineering",
    description:
      "Designed and built a distributed data pipeline on Databricks that ingests and processes 10M+ web pages from Common Crawl (AWS S3) using PySpark, extracting structured SEO signals — meta tags, canonical tags, HTTPS adoption, and link profiles. Implemented data cleaning, URL standardisation, and feature engineering to compute weighted SEO scores across 500k+ domains benchmarked by TLD and industry. Built a client comparison tool that scores any domain against web-wide benchmarks, delivering actionable audit reports. Optimised storage and query performance with Parquet columnar format.",
    tech: ["PySpark", "Databricks", "Apache Spark", "AWS S3", "Parquet"],
    annotation: "// 10M+ pages, 500k+ domains",
    link: null,
    hoverVideos: false,
    hoverPhotos: false,
  },
  {
    title: "Black Hole Visualisation",
    subtitle: "Graphics & Physics",
    description:
      "Personal favourite, having a huge interest in physics. Inspired by books such as A Brief History of Time by Stephen Hawking and Black Holes by Brian Cox and Jeff Forshaw. I built interactive real-time black hole renderer using custom GLSL shaders (nerd talk). Implements ray marching (how light moves), gravitational lensing (light gets bendy with gravity), Doppler shifting , and accretion disk physics — all running at interactive frame rates (borderline on some older laptops) on consumer hardware.",
    tech: ["Python", "OpenGL", "GLSL", "Ray Marching"],
    annotation: "// custom shaders, real physics",
    link: null,
    hoverVideos: true,
    hoverPhotos: false,
  },
];

function SmartCertPopup({ visible }: { visible: boolean }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        bottom: "calc(100% + 16px)",
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? "0px" : "10px"}) scale(${visible ? 1 : 0.97})`,
      }}
    >
      <div
        className="rounded-2xl p-[3px] shrink-0"
        style={{
          background: "linear-gradient(135deg, #d4884a, #e8a76a, #9a5f2a, #d4884a)",
          boxShadow: "0 8px 32px rgba(212,136,74,0.3), 0 2px 8px rgba(0,0,0,0.6)",
        }}
      >
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={smartCertPhoto}
            alt="SmartCert screenshot"
            width={300}
            height={200}
            className="block rounded-2xl object-cover"
            style={{ width: 300, height: 200 }}
          />
        </div>
      </div>
    </div>
  );
}

function EngMangPopup({ visible }: { visible: boolean }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        bottom: "calc(100% + 16px)",
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? "0px" : "10px"}) scale(${visible ? 1 : 0.97})`,
      }}
    >
      <div className="flex items-center gap-10">
        {engMangPhotos.map((photo) => (
          <div
            key={photo.src}
            className="rounded-2xl p-[3px] shrink-0"
            style={{
              background: "linear-gradient(135deg, #d4884a, #e8a76a, #9a5f2a, #d4884a)",
              boxShadow: "0 8px 32px rgba(212,136,74,0.3), 0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={240}
                height={160}
                className="block rounded-2xl object-cover"
                style={{ width: 240, height: 160 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlackHolePopup({ visible }: { visible: boolean }) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (!vid) return;
      if (visible) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [visible]);

  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        bottom: "calc(100% + 16px)",
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? "0px" : "10px"}) scale(${visible ? 1 : 0.97})`,
      }}
    >
      <div className="flex items-center gap-10">
        {blackHoleVideos.map((v, i) => (
          <div key={v.label} className="flex items-center gap-10">
            {/* Video with copper frame */}
            <div
              className="rounded-2xl p-[3px] shrink-0"
              style={{
                background: "linear-gradient(135deg, #d4884a, #e8a76a, #9a5f2a, #d4884a)",
                boxShadow: "0 8px 32px rgba(212,136,74,0.3), 0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              <div className="rounded-2xl overflow-hidden bg-black">
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={v.src}
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="block rounded-2xl object-cover"
                  style={{ width: 200, height: 130 }}
                />
              </div>
              <p className="text-center font-[family-name:var(--font-heading)] text-[10px] text-copper/80 tracking-widest pt-1 pb-0.5">
                {v.label}
              </p>
            </div>

            {/* Arrow between videos */}
            {i < blackHoleVideos.length - 1 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="#d4884a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="02" title="Projects" />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div
                className="group relative border border-grid/40 hover:border-copper/40 transition-all duration-300 p-6 md:p-8 bg-navy-light/30 hover:bg-navy-light/50"
                onMouseEnter={() => (p.hoverVideos || p.hoverPhotos || p.hoverSmartCert) && setHoveredProject(p.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-copper/40 group-hover:border-copper/70 transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-copper/40 group-hover:border-copper/70 transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-copper/40 group-hover:border-copper/70 transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-copper/40 group-hover:border-copper/70 transition-colors" />

                {/* SmartCert photo popup */}
                {p.hoverSmartCert && (
                  <SmartCertPopup visible={hoveredProject === p.title} />
                )}
                {/* Black hole video popup */}
                {p.hoverVideos && (
                  <BlackHolePopup visible={hoveredProject === p.title} />
                )}
                {/* EngMang photo popup */}
                {p.hoverPhotos && (
                  <EngMangPopup visible={hoveredProject === p.title} />
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-off-white group-hover:text-copper-light transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-[family-name:var(--font-heading)] text-xs text-slate/60 tracking-wider uppercase mt-1">
                      {p.subtitle}
                    </p>
                  </div>

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
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
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
