"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

function YCTag() {
  return (
    <span className="tag tag-yc">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#f26522" />
        <path d="M7.4 5.6 12 12.6l4.6-7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="square" />
        <path d="M12 12.4V18.6" stroke="#fff" strokeWidth="2.4" strokeLinecap="square" />
      </svg>
      YC-backed
    </span>
  );
}

/* Plays only while it's on screen — no reason to decode video the reader can't see. */
function MannaMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="card-photo-stack portrait">
      <div className="card-photo">
        <video ref={videoRef} src="/manna_vid.mp4" loop muted playsInline preload="metadata" />
      </div>
      <div className="mini-tile">
        <img src="/manna_logo.jpg" alt="Manna Air Delivery" />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeading num="02" title="Experience" />

        <div className="cards">
          {/* ProvenMetal */}
          <div className="card">
            <div className="card-split">
              <div>
                <div className="card-top tight">
                  <h3>Founding Engineer</h3>
                  <YCTag />
                </div>
                <div className="sub sub-logo">
                  <a
                    className="sticker"
                    href="https://provenmetal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ProvenMetal"
                  >
                    <img src="/art/provenmetal-logo.png" alt="ProvenMetal" />
                  </a>
                </div>
                <p>
                  Moved to San Francisco to help build ProvenMetal as one of a team of four, taking on the
                  electronics supply chain in the US. Joined before the first dollar of revenue and saw the
                  company grow to ~$150k, working across every part of the business along the way — sourcing
                  software, internal tooling, customer ops and go-to-market.
                </p>
                <div className="chips">
                  <a className="visit" href="https://provenmetal.com" target="_blank" rel="noopener noreferrer">
                    provenmetal.com ↗
                  </a>
                </div>
              </div>
              <div className="pm-stack">
                <div className="card-photo pm-c">
                  <img src="/art/provenmetal-site.jpg" alt="The ProvenMetal website" />
                </div>
                <div className="card-photo pm-b">
                  <img src="/art/provenmetal-team-us.jpg" alt="ProvenMetal team with US flags by the Bay Bridge" />
                </div>
                <div className="card-photo pm-a">
                  <img src="/art/provenmetal-team.jpg" alt="ProvenMetal team at the Golden Gate Bridge" />
                </div>
              </div>
            </div>
          </div>

          {/* Media Sphere Solutions */}
          <div className="card">
            <div className="card-split">
              <div>
                <div className="card-top tight">
                  <h3>Director of AI Automation Solutions</h3>
                  <span className="tag">Current</span>
                </div>
                <div className="sub">
                  <span className="co">Media Sphere Solutions</span> — Aug 2025 — Present
                </div>
                <p>
                  Leading the design and deployment of end-to-end AI automation solutions — intelligent voice
                  agents for inbound reception and outbound lead qualification via Twilio, and autonomous
                  AI-powered website auditing tools with actionable SEO performance scoring.
                </p>
              </div>
              <div className="card-logo seal-dark">
                <img src="/art/mss-logo.png" alt="Media Sphere Solutions" />
              </div>
            </div>
          </div>

          {/* Bank of America */}
          <div className="card">
            <div className="card-split">
              <div>
                <div className="card-top tight">
                  <h3>Global Corporate &amp; Investment Banking — Spring Insight</h3>
                </div>
                <div className="sub">
                  <span className="co">Bank of America</span> — April 2026
                </div>
                <p>Selected for a competitive spring insight programme in global corporate and investment banking.</p>
              </div>
              <div className="card-photo-stack">
                <div className="card-photo">
                  <img src="/art/bofa-cohort.jpg" alt="Spring Insight cohort in London" />
                </div>
                <div className="card-logo paper small">
                  <img src="/art/bofa-logo.png" alt="Bank of America" />
                </div>
              </div>
            </div>
          </div>

          {/* Trinity SMF */}
          <div className="card">
            <div className="card-top tight">
              <h3>Technology Hardware Analyst</h3>
              <span className="tag">Current</span>
            </div>
            <div className="sub">
              <span className="co">Trinity Student Managed Fund</span> — Sep 2025 — Present
            </div>
            <p>
              Analysing technology hardware equities for a student-managed portfolio with over €700k in AUM.
              Building DCF models, running comparable company analyses, and presenting investment theses to
              the fund.
            </p>
          </div>

          {/* Manna */}
          <div className="card">
            <div className="card-split">
              <div>
                <div className="card-top tight">
                  <h3>Software Development Intern</h3>
                </div>
                <div className="sub">
                  <span className="co">Manna Aero Drone Delivery</span> — May — Sep 2024
                </div>
                <p>
                  Worked on optimising drone delivery operations. Wrote production code that improved system
                  efficiency and reliability across the delivery pipeline.
                </p>
              </div>
              <MannaMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
