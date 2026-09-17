"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

type Project = {
  key: string;
  title: string;
  subtitle: string;
  year: string;
  tagline: string;
  tech: string[];
  link: string | null;
  /* thumbnail shown on the card: an image, or the dithered art as a fallback */
  thumb: string;
  badge?: string;
  /* not shipped yet — card is marked, and the download link lands here once it is */
  comingSoon?: boolean;
  /* README-style long form, shown in the modal */
  readme: { heading: string; body?: string; bullets?: string[] }[];
  gallery?: { src: string; alt: string; video?: boolean }[];
};

const projects: Project[] = [
  {
    key: "smartcert",
    title: "SmartCert.ie",
    subtitle: "EdTech Startup",
    year: "2025 — Present",
    tagline: "An AI-powered Leaving Cert study platform with real users.",
    tech: ["Next.js", "AI/LLM", "Web Dev", "InfoSec"],
    link: "https://smartcert.ie",
    thumb: "/smart_cert_photo.png",
    badge: "Active users, real product",
    readme: [
      {
        heading: "What it is",
        body: "An AI-powered Leaving Cert study platform that helps students prepare more effectively. Built from scratch as a real product rather than a side project — it has active users paying attention to whether it works.",
      },
      {
        heading: "What I built",
        bullets: [
          "The full web application, front to back, in Next.js.",
          "AI/LLM integration for generating and marking practice questions against the real marking schemes.",
          "Information security work: auth, data handling, and keeping student data safe.",
          "Everything operational — deployment, monitoring, and the feedback loop with actual students.",
        ],
      },
      {
        heading: "What I learned",
        body: "Shipping to real students is a completely different discipline to building for yourself. Most of the hard problems turned out to be product and trust problems, not technical ones.",
      },
    ],
    gallery: [{ src: "/smart_cert_photo.png", alt: "SmartCert screenshot" }],
  },
  {
    key: "engmang",
    title: "EngMang.ie",
    subtitle: "Community Platform",
    year: "2025",
    tagline: "A full-stack platform for TCD Engineering Management students.",
    tech: ["Next.js", "TypeScript", "Supabase", "Prisma", "Pusher", "Cloudflare R2", "Twilio", "Vercel"],
    link: "https://engmang.ie",
    thumb: "/eng_mang_photo1.png",
    badge: "Production-grade",
    readme: [
      {
        heading: "What it is",
        body: "A full-stack community platform for Engineering with Management students at Trinity — the place the course actually coordinates itself.",
      },
      {
        heading: "What I built",
        bullets: [
          "Real-time messaging with Pusher, so conversations update live.",
          "Role-based access control, separating students, class reps, and admins.",
          "File storage on Cloudflare R2 for notes, past papers, and course material.",
          "SMS notifications via Twilio for anything time-critical.",
          "The whole stack, from auth through to deployment on Vercel.",
        ],
      },
      {
        heading: "Why it mattered",
        body: "It replaced a mess of group chats and shared drives. Getting the permissions model right was the part that took the most thought — everything else followed from it.",
      },
    ],
    gallery: [
      { src: "/eng_mang_photo1.png", alt: "EngMang screenshot 1" },
      { src: "/eng_mang_photo2.png", alt: "EngMang screenshot 2" },
    ],
  },
  {
    key: "seo",
    title: "SEO Intelligence Pipeline",
    subtitle: "Data Engineering",
    year: "2025",
    tagline: "A distributed pipeline over 10M+ web pages from Common Crawl.",
    tech: ["PySpark", "Databricks", "Apache Spark", "AWS S3", "Parquet"],
    link: null,
    thumb: "/art/mss-site.jpg",
    badge: "10M+ pages · 500k+ domains",
    readme: [
      {
        heading: "What it is",
        body: "A distributed data pipeline on Databricks that ingests and processes more than 10 million web pages from Common Crawl, stored in AWS S3, and turns them into structured SEO intelligence.",
      },
      {
        heading: "What I built",
        bullets: [
          "PySpark jobs extracting structured SEO signals: meta tags, canonical tags, HTTPS adoption, and link profiles.",
          "Data cleaning and URL standardisation, so the same domain doesn't appear five different ways.",
          "Feature engineering to compute weighted SEO scores across 500k+ domains, benchmarked by TLD and industry.",
          "A client comparison tool that scores any given domain against those web-wide benchmarks and produces an actionable audit.",
          "Storage and query optimisation using the Parquet columnar format.",
        ],
      },
      {
        heading: "The interesting part",
        body: "At this scale the bottleneck stops being the analysis and becomes the shape of your data. Most of the work was in partitioning and storage layout, not in the scoring logic.",
      },
    ],
  },
  {
    key: "blackhole",
    title: "Black Hole Visualisation",
    subtitle: "Graphics & Physics",
    year: "2024",
    tagline: "A real-time black hole renderer in custom GLSL shaders.",
    tech: ["Python", "OpenGL", "GLSL", "Ray Marching"],
    link: null,
    thumb: "/art/blackhole-still.jpg",
    badge: "Custom shaders, real physics",
    readme: [
      {
        heading: "What it is",
        body: "A personal favourite. An interactive, real-time black hole renderer written in custom GLSL shaders — light bending around a massive object, simulated properly rather than faked.",
      },
      {
        heading: "The physics in it",
        bullets: [
          "Ray marching, to trace how light actually travels through curved spacetime.",
          "Gravitational lensing — light bends around mass, so you see the disk behind the hole.",
          "Doppler shifting, so the side of the disk rotating toward you appears brighter and bluer.",
          "Accretion disk physics for the glowing matter spiralling inward.",
        ],
      },
      {
        heading: "Why I built it",
        body: "I have a real interest in astrophysics — A Brief History of Time and Brian Cox and Jeff Forshaw's Black Holes are among my favourite books. The best way to understand how light behaves near a black hole was to make my machine draw it. It runs at interactive frame rates on consumer hardware, though it's borderline on older laptops.",
      },
    ],
    gallery: [
      { src: "/blackhole_v1.mov", alt: "Black hole render V1", video: true },
      { src: "/blackhole_v2.mov", alt: "Black hole render V2", video: true },
      { src: "/blackhole_v3.mp4", alt: "Black hole render V3", video: true },
    ],
  },
  {
    key: "slate",
    title: "Slate",
    subtitle: "macOS Menu-Bar App",
    year: "2026",
    tagline: "A window switcher for Claude Code sessions — one hotkey, any terminal.",
    tech: ["Swift", "SwiftUI", "AppKit", "AppleScript"],
    link: null,
    thumb: "/art/slate-tile.jpg",
    badge: "Developer ID signed",
    comingSoon: true,
    readme: [
      {
        heading: "What it is",
        body: "Rectangle, but for Claude Code sessions. One global hotkey opens a fuzzy-search palette of every session running on your machine, and focuses the exact terminal tab it lives in — in under a second.",
      },
      {
        heading: "What it does",
        bullets: [
          "A global hotkey opens a fuzzy palette over every live session — around 550–800ms from Return to the right tab being frontmost.",
          "Handles Terminal.app and iTerm2 in one list, down to focusing an exact split pane.",
          "Shows at a glance which sessions are working and which are waiting on you, with click-to-focus notifications when one finishes or blocks.",
          "Workspaces group related sessions and share a brief that's injected at session start — without ever editing your project's own config.",
          "A scriptable CLI, a state snapshot and a slate:// URL scheme, so other launchers can drive it. Two Raycast commands ship with it.",
        ],
      },
      {
        heading: "How it works",
        body: "Observer-only by design. It scans running processes, talks to the terminal over AppleScript, and reads session metadata that Claude Code writes out through hooks — then joins the two on the tty. It never injects input or takes control of anything.",
      },
      {
        heading: "Status",
        body: "v1.1.0, Developer ID signed with a hardened runtime, and in daily use on my own machine. Notarisation is the last step before the download goes up here.",
      },
    ],
  },
  {
    key: "fumble",
    title: "Fumble",
    subtitle: "macOS Menu-Bar App",
    year: "2026",
    tagline: "A typing coach that already knows what you're bad at.",
    tech: ["Swift", "SwiftUI", "CoreGraphics", "AppKit"],
    link: null,
    thumb: "/art/fumble-tile.jpg",
    badge: "On-device, free",
    comingSoon: true,
    readme: [
      {
        heading: "What it is",
        body: "Typing trainers make you practise synthetic letter soup and guess at what to fix. Fumble watches how you actually type all day, works out which keys and finger transitions genuinely cost you time, and drills those instead.",
      },
      {
        heading: "What it does",
        bullets: [
          "Ranks your weak keys by seconds lost today — how much slower than your own baseline, multiplied by how often you hit them.",
          "Separates real motor stumbles from thinking pauses using a threshold that adapts per key-transition to your own typing.",
          "Five practice modes, including a keybr-style adaptive trainer seeded from the typing it has actually watched, with an on-screen keyboard coloured by confidence.",
          "A speed heatmap over the keyboard, a per-app breakdown of where you type, and a trend line over time.",
          "Counts and shows every excluded keystroke, so the words-per-minute figure is auditable rather than magic.",
        ],
      },
      {
        heading: "On privacy",
        body: "It reads physical keycodes and never resolves them to characters, so it cannot reconstruct what you typed. No ordered sequence is ever stored, everything is dropped while a password field is focused, and the app contains no networking code at all.",
      },
      {
        heading: "Status",
        body: "Feature complete and in daily use, with 185 tests green and a universal, Developer ID signed build. What's left before release is validating the injected-keystroke filter against real automation tools, then notarisation and a Homebrew cask. It'll be free and MIT licensed.",
      },
    ],
  },
  {
    key: "claudometer",
    title: "Claudometer",
    subtitle: "macOS Menu-Bar App",
    year: "2026",
    tagline: "A live spend meter for Claude Code, sitting in your menu bar.",
    tech: ["Swift", "SwiftUI", "AppKit"],
    link: null,
    thumb: "/art/claudometer-tile.jpg",
    badge: "Accurate to 0.009%",
    comingSoon: true,
    readme: [
      {
        heading: "What it is",
        body: "A menu-bar app that reads Claude Code's local usage logs and tells you, live, what you're spending — or, if you're on a subscription, the API-equivalent value you're getting out of it. Everything stays on the machine.",
      },
      {
        heading: "What it does",
        bullets: [
          "Live cost in the menu bar, with breakdowns by model, project, skill and subagent.",
          "A rolling five-hour usage gauge, cache savings, spend projection, and a 7/30-day sparkline.",
          "Budget alerts, launch-at-login, and an optional cyberpunk theme.",
          "Warns loudly when a newly released model isn't in the pricing table, rather than quietly reporting $0.",
        ],
      },
      {
        heading: "On being right",
        body: "The cost engine is validated against ccusage as an independent oracle, and currently agrees to within 0.009% on real logs. Worth being precise about what that means: it's agreement with another tool built the same way, not a reconciliation against an Anthropic invoice. Every figure is an estimate, and the gauge is labelled approximate because Anthropic publishes no hard caps.",
      },
      {
        heading: "Status",
        body: "Feature complete and in daily use, with 100 tests green and a universal, Developer ID signed build. A DMG installer script, a release workflow and a Homebrew cask are all prepped — publishing is pending notarisation.",
      },
    ],
  },
];

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="modal-back" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>

        <div className="modal-head">
          <div>
            <p className="label">
              {project.subtitle} · {project.year}
            </p>
            <h3>{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="chips modal-chips">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.comingSoon ? (
            <span className="visit muted-visit">Download coming soon</span>
          ) : (
            project.link && (
              <a className="visit" href={project.link} target="_blank" rel="noopener noreferrer">
                Visit ↗
              </a>
            )
          )}
        </div>

        {project.gallery && (
          <div className="modal-gallery">
            {project.gallery.map((g) =>
              g.video ? (
                <video key={g.src} src={g.src} loop muted autoPlay playsInline preload="metadata" />
              ) : (
                <img key={g.src} src={g.src} alt={g.alt} />
              )
            )}
          </div>
        )}

        <div className="readme">
          {project.readme.map((s) => (
            <div key={s.heading} className="readme-block">
              <h4>
                <span className="hash">##</span> {s.heading}
              </h4>
              {s.body && <p>{s.body}</p>}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeading num="03" title="Projects" />

        <div className="proj-grid">
          {projects.map((p) => (
            <button key={p.key} className={`proj${p.comingSoon ? " soon" : ""}`} onClick={() => setOpen(p)}>
              <span className="proj-thumb">
                <img src={p.thumb} alt="" />
                {p.badge && <span className="proj-badge">{p.badge}</span>}
                {p.comingSoon && <span className="proj-soon">Coming soon</span>}
              </span>

              <span className="proj-body">
                <span className="proj-top">
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-year">{p.year}</span>
                </span>
                <span className="proj-tagline">{p.tagline}</span>
                <span className="chips">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && <span className="chip">+{p.tech.length - 3}</span>}
                </span>
                <span className="proj-foot">
                  <span className="proj-view">{p.comingSoon ? "> read more" : "> view project"}</span>
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M3 9L9 3M9 3H4M9 3V8" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && <Modal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
