"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

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
    <div className="taped-video">
      <video ref={videoRef} src="/manna_vid.mp4" loop muted playsInline preload="metadata" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeading num="02" title="Experience" />

        <div className="cards">
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

          {/* Manna — logo sits in the card, the portrait clip is taped on over the edge
              so the card doesn't have to stretch to the height of the video */}
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
              <div className="card-logo tile">
                <img src="/manna_logo.jpg" alt="Manna Air Delivery" />
              </div>
            </div>
            <MannaMedia />
          </div>
        </div>
      </div>
    </section>
  );
}
