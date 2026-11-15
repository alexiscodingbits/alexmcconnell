import type { Metadata } from "next";
import Topo from "./Topo";
import Boil from "./Boil";
import s from "./page.module.css";

const DMG = "https://github.com/alexiscodingbits/lidless/releases/latest/download/Lidless.dmg";
const REPO = "https://github.com/alexiscodingbits/lidless";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexmcconnell.ie"),
  title: "Lidless — keep your Mac awake with the lid shut",
  description: "A switch in your Mac's menu bar that keeps it awake when you shut the lid, so your long jobs keep going. Free and open source.",
  openGraph: {
    title: "Lidless",
    description: "Close the lid. It stays awake. A free menu-bar switch for Mac.",
    images: [{ url: "/lidless/og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Lidless", description: "Close the lid. It stays awake.", images: ["/lidless/og.jpg"] },
  icons: { icon: "/lidless/icon.png" },
};

export default function Lidless() {
  return (
    <main className={s.page}>
      <Topo />
      <Boil />
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="ink" x="-10%" y="-30%" width="120%" height="160%"><feTurbulence id="inkT" type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="1" /><feDisplacementMap in="SourceGraphic" scale="3" xChannelSelector="R" yChannelSelector="G" /></filter>
        <marker id="head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L8 5L1 9" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></marker>
      </svg>
      <a className={s.home} href="/">← alexmcconnell.ie</a>

      <div className={s.center}>
        <iframe className={s.hero} src="/lidless/hero.html?bg=0" title="Lidless: close the lid, it stays awake" tabIndex={-1} />
        <iframe className={s.heroSq} src="/lidless/hero.html?bg=0&fmt=square" title="Lidless: close the lid, it stays awake" tabIndex={-1} />
        <p className={s.lead}>A switch in your Mac&apos;s menu bar that keeps it awake when you shut the lid, so your long jobs keep going.</p>
        <div className={s.btns}>
          <a className={s.btn} href={DMG}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>Download for Mac</a>
          <a className={`${s.btn} ${s.ghost}`} href={REPO}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>GitHub</a>
        </div>
        <p className={s.meta}>Free · macOS 13 or later · 200 KB · open source</p>
      </div>

      <aside className={`${s.note} ${s.why}`}>
        <h2 className={s.h2}>Why</h2>
        <p className={s.p}>Because closing the lid stops Claude jobs.</p>
        <svg className={s.arrow} viewBox="0 0 200 120" aria-hidden="true"><path d="M8 12 C 70 10, 120 40, 188 104" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" markerEnd="url(#head)" /></svg>
      </aside>

      <aside className={`${s.note} ${s.nerds}`}>
        <h2 className={s.h2}>For the nerds</h2>
        <p className={s.p}>It flips <span className={s.code}>pmset disablesleep</span> for you. The first click asks for your password once, then never again. No account, no tracking, no network code.</p>
        <svg className={s.arrow} viewBox="0 0 200 120" aria-hidden="true"><path d="M192 20 C 140 30, 80 20, 12 70" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" markerEnd="url(#head)" /></svg>
      </aside>

      <aside className={`${s.note} ${s.warn}`}>
        <h2 className={s.h2}><svg className={s.tri} viewBox="0 0 24 22" aria-hidden="true"><path d="M12 2 L22.5 20 H1.5 Z" fill="none" stroke="#e0301e" strokeWidth="2.2" strokeLinejoin="round" /><path d="M12 8.5 V13.5" stroke="#e0301e" strokeWidth="2.2" strokeLinecap="round" /><circle cx="12" cy="16.8" r="1.3" fill="#e0301e" /></svg>Explosion warning</h2>
        <p className={s.p}>Keeping it in your bag while it&apos;s on may cause it to heat up. It won&apos;t explode, probably.</p>
      </aside>

      <p className={s.foot}><a href={REPO}>Source on GitHub</a> · Made by <a href="/">Alex McConnell</a></p>
    </main>
  );
}
