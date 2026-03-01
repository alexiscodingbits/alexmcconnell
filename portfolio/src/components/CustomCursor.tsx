"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = cursorRef.current;
    if (!el) return;

    el.style.opacity = "0";

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";

      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], iframe");
      if (interactive && !isHoveringRef.current) {
        isHoveringRef.current = true;
        el.style.transform = "translate(-50%, -50%) scale(1.5)";
      } else if (!interactive && isHoveringRef.current) {
        isHoveringRef.current = false;
        el.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const onLeave = () => { el.style.opacity = "0"; };
    const onEnter = () => { el.style.opacity = "1"; };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        transform: "translate(-50%, -50%)",
        transition: "transform 0.15s ease, opacity 0.2s ease",
        willChange: "left, top",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Outer ring */}
        <circle cx="14" cy="14" r="9" stroke="rgba(212,136,74,0.35)" strokeWidth="0.75" />
        {/* Center dot */}
        <circle cx="14" cy="14" r="1.5" fill="rgba(212,136,74,0.9)" />
        {/* Top line */}
        <line x1="14" y1="2" x2="14" y2="9" stroke="rgba(212,136,74,0.85)" strokeWidth="1" />
        {/* Bottom line */}
        <line x1="14" y1="19" x2="14" y2="26" stroke="rgba(212,136,74,0.85)" strokeWidth="1" />
        {/* Left line */}
        <line x1="2" y1="14" x2="9" y2="14" stroke="rgba(212,136,74,0.85)" strokeWidth="1" />
        {/* Right line */}
        <line x1="19" y1="14" x2="26" y2="14" stroke="rgba(212,136,74,0.85)" strokeWidth="1" />
        {/* Corner ticks */}
        <line x1="14" y1="2" x2="14" y2="2" stroke="rgba(212,136,74,0.6)" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="26" x2="14" y2="26" stroke="rgba(212,136,74,0.6)" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="14" x2="2" y2="14" stroke="rgba(212,136,74,0.6)" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="14" x2="26" y2="14" stroke="rgba(212,136,74,0.6)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
