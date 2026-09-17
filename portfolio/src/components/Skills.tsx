"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import HoverBadge from "./HoverBadge";
import SectionHeading from "./SectionHeading";

const technicalSkills = ["Python", "C", "MATLAB", "TypeScript", "GLSL", "Next.js", "Supabase", "OpenGL", "AI / LLM"];

const currentlyReading = [
  { title: "The Trial and Death of Socrates", author: "Plato" },
  { title: "Behave", author: "Robert M. Sapolsky" },
  { title: "A Practical Guide to Quantitative Finance Interviews", author: "Xinfeng Zhou", note: 'aka "the Green Book"' },
];

const interests = [
  { label: "Music", detail: "Self-taught piano and guitar." },
  { label: "Languages", detail: "Gaeilge, English, German, and self-taught Spanish." },
  {
    label: "Maths Tutor",
    detail: "Passionate about mathematics and find teaching it incredibly rewarding. Tutor college, Leaving Cert, and Junior Cert students.",
  },
  { label: "Juggling", detail: "Currently working up to 4 balls." },
  { label: "Poker", detail: "Always happy to take my friends' money." },
  {
    label: "Student2Student Mentor TCD",
    detail: "Selected as a Peer Mentor, managing the academic and social onboarding of students.",
  },
];

export default function Skills() {
  const [rugbyHover, setRugbyHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startRugby = () => {
    setRugbyHover(true);
    audioRef.current = new Audio("/chelsea_dagger.m4a");
    audioRef.current.play().catch(() => {});
  };
  const stopRugby = () => {
    setRugbyHover(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeading num="04" title="Skills & Interests" />

        <div className="skills-grid">
          {/* Technical */}
          <div>
            <p className="label">Technical</p>
            <div className="skill-chips">
              {technicalSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            <p className="label">{"// current playlist"}</p>
            <div className="embed">
              <iframe
                src="https://open.spotify.com/embed/playlist/3uPqNpJ2n7IV43nCjfTREO?utm_source=generator&theme=0"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Current playlist"
              />
            </div>

            <p className="label">{"// currently reading"}</p>
            <div className="reading">
              {currentlyReading.map((b) => (
                <div key={b.title} className="book">
                  <span className="title">{b.title}</span> <span className="auth">— {b.author}</span>
                  {b.note && <span className="note">{b.note}</span>}
                </div>
              ))}
              <p className="upd">Last updated: 9th September 2026</p>
            </div>

            <p className="label spaced">{"// past favourites"}</p>
            <div className="reading">
              <div className="book" onMouseEnter={() => setBookHover(true)} onMouseLeave={() => setBookHover(false)}>
                <div className={`pop${bookHover ? " on" : ""}`}>
                  <span className="frame tilt-l">
                    <img src="/1984.jpg" alt="1984 by George Orwell" style={{ width: 150 }} />
                  </span>
                </div>
                <span className="title">1984</span> <span className="auth">— George Orwell</span> <HoverBadge />
              </div>
            </div>
          </div>

          {/* Beyond code */}
          <div>
            <p className="label beyond">Beyond code</p>

            <div className="interest" onMouseEnter={startRugby} onMouseLeave={stopRugby}>
              <div className={`pop${rugbyHover ? " on" : ""}`}>
                <span className="frame tilt-l">
                  <img src="/art/rugby-ucd.jpg" alt="UCD rugby" style={{ width: 230 }} />
                </span>
                <span className="frame tilt-r">
                  <img src="/art/rugby-belvo.jpg" alt="Post-match at Old Belvedere" style={{ width: 170 }} />
                </span>
              </div>
              <div className="h">
                <span className="m">{"//"}</span>Rugby <HoverBadge audio />
              </div>
              <p>Old Belvedere RFC. UCD McCorry Cup winner. Coached at school level.</p>
            </div>

            {interests.map((item) => (
              <div key={item.label} className="interest">
                <div className="h">
                  <span className="m">{"//"}</span>
                  {item.label}
                </div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
