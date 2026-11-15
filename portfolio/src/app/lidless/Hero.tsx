"use client";
import { useEffect, useState } from "react";

// The live 3D hero everywhere except WebKit (Safari, and every iPhone browser), where nested
// preserve-3d plus filters glitch. There it plays the same loop pre-rendered, feathered into the page.
export default function Hero({ fmt, className }: { fmt: "wide" | "square"; className: string }) {
  const [webkit, setWebkit] = useState(false);
  useEffect(() => { setWebkit("GestureEvent" in window); }, []);
  const title = "Lidless: close the lid, it stays awake";
  if (webkit)
    return (
      <video className={`${className} lidless-vid`} src={`/lidless/hero-${fmt}.mp4`} poster={`/lidless/hero-${fmt}.jpg`}
        autoPlay muted loop playsInline aria-label={title} />
    );
  return <iframe className={className} src={`/lidless/hero.html?bg=0${fmt === "square" ? "&fmt=square" : ""}`} title={title} tabIndex={-1} />;
}
