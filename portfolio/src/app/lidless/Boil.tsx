"use client";
import { useEffect } from "react";

// Re-seeds the #ink turbulence a few times a second so the hand-drawn bits "boil",
// like the laptop and wordmark in the hero.
export default function Boil() {
  useEffect(() => {
    const t = document.getElementById("inkT");
    let s = 1;
    const id = setInterval(() => { s = (s % 3) + 1; t?.setAttribute("seed", String(s)); }, 140);
    return () => clearInterval(id);
  }, []);
  return null;
}
