"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      {/* what's-new banner in the site's moss & gold, carrying the Fumble wordmark (wordmark-on-dark.png: the same gradient, lifted so the navy end reads on moss) — folds away once you scroll */}
      <a href="#fumble" className={`fumble-bar${scrolled ? " hidden" : ""}`} tabIndex={scrolled ? -1 : 0}>
        {/* the wordmark's letters sit on the PNG's bottom edge, so baseline alignment puts them on the text's line */}
        <span className="fumble-bar-line">
          <img className="fumble-bar-mark" src="/fumble/wordmark-on-dark.png" alt="Fumble" width={51} height={22} />
          <span className="fumble-bar-text">I made a better typing coach for mac, check it out!</span>
          <span className="fumble-bar-arrow" aria-hidden="true">
            ↗
          </span>
        </span>
      </a>

      <div className={`nav-pill${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          A.<span>McC</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-cta" href="#contact">
            Get in touch
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
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

      {menuOpen && (
        <div className="nav-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
