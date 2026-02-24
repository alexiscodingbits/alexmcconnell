"use client";

import { useEffect, useRef } from "react";

export default function ParallaxGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const y = window.scrollY * 0.15;
        ref.current.style.backgroundPosition = `0 ${y}px, 0 ${y}px, 0 ${y * 0.5}px, 0 ${y * 0.5}px`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 blueprint-grid pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
