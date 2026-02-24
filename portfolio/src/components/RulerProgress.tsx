"use client";

import { useEffect, useState } from "react";

export default function RulerProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ticks = 50;

  return (
    <div className="ruler-track">
      <svg width="24" height="100%" className="h-full">
        {/* Track background */}
        <rect x="0" y="0" width="24" height="100%" fill="rgba(15,23,41,0.8)" />
        <line x1="0" y1="0" x2="0" y2="100%" stroke="rgba(30,58,95,0.5)" strokeWidth="1" />

        {/* Tick marks */}
        {Array.from({ length: ticks + 1 }).map((_, i) => {
          const y = (i / ticks) * 100;
          const major = i % 10 === 0;
          const mid = i % 5 === 0;
          return (
            <g key={i}>
              <line
                x1={major ? 0 : mid ? 8 : 14}
                y1={`${y}%`}
                x2="24"
                y2={`${y}%`}
                stroke="rgba(30,58,95,0.6)"
                strokeWidth={major ? 1 : 0.5}
              />
              {major && (
                <text
                  x="3"
                  y={`${y + 0.8}%`}
                  fill="rgba(148,163,184,0.4)"
                  fontSize="7"
                  fontFamily="var(--font-heading)"
                >
                  {Math.round(y)}
                </text>
              )}
            </g>
          );
        })}

        {/* Progress indicator */}
        <rect
          x="0"
          y="0"
          width="3"
          height={`${progress * 100}%`}
          fill="#d4884a"
          opacity="0.8"
        />
        <circle
          cx="12"
          cy={`${progress * 100}%`}
          r="3"
          fill="#d4884a"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
