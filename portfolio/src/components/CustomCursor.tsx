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
        fontFamily: "var(--font-heading)",
        fontSize: "20px",
        fontWeight: 300,
        color: "rgba(212,136,74,0.85)",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      +
    </div>
  );
}
