"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-3">
      <div
        className={`mx-auto rounded-full border transition-all duration-700 ease-in-out ${
          scrolled
            ? "max-w-2xl bg-navy/80 backdrop-blur-xl border-grid/50 shadow-lg shadow-black/20"
            : "max-w-6xl bg-transparent border-transparent shadow-none"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
            scrolled ? "px-5 h-12" : "px-2 h-14"
          }`}
        >
          <a
            href="#"
            className="font-[family-name:var(--font-heading)] text-sm text-copper tracking-wider"
          >
            A.McC
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-[family-name:var(--font-heading)] text-xs text-slate-light/70 hover:text-copper transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-light p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" />
              ) : (
                <>
                  <path d="M3 5H17" />
                  <path d="M3 10H17" />
                  <path d="M3 15H17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-2xl bg-navy/95 backdrop-blur-xl border border-grid/50 rounded-2xl px-6 py-4 shadow-lg shadow-black/20">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-[family-name:var(--font-heading)] text-sm text-slate-light/80 hover:text-copper transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
