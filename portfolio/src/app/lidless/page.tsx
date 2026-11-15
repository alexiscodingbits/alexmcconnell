import type { Metadata } from "next";
import s from "./page.module.css";

const DMG = "https://github.com/alexiscodingbits/lidless/releases/latest/download/Lidless.dmg";
const REPO = "https://github.com/alexiscodingbits/lidless";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexmcconnell.ie"),
  title: "Lidless — keep your Mac awake with the lid shut",
  description: "A switch in your Mac's menu bar. Click it and your Mac stays awake, even with the lid shut. Free and open source.",
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
      <div className={s.wrap}>
        <a className={s.home} href="/">← alexmcconnell.ie</a>
        <video className={s.video} src="/lidless/lidless.mp4" poster="/lidless/poster.jpg" autoPlay muted loop playsInline />
        <h1 className={s.h1}>Lidless</h1>
        <p className={s.lead}>A switch in your Mac&apos;s menu bar. Click it and your Mac stays awake, even with the lid shut. Click it again and it sleeps like normal.</p>
        <a className={s.dl} href={DMG}>Download for Mac</a>
        <p className={s.meta}>Free · macOS 13 or later · 200 KB · <a href={REPO}>open source</a></p>

        <h2 className={s.h2}>Why</h2>
        <p className={s.p}>I kept closing my laptop on long jobs and coming back to find they&apos;d stopped. Keep-awake apps stop your Mac dozing off, but shutting the lid still puts it to sleep. Lidless stops that too.</p>

        <h2 className={s.h2}>How</h2>
        <p className={s.p}>It flips <span className={s.code}>pmset disablesleep</span> for you. The first click asks for your password once, then never again. No account, no tracking, no network code.</p>

        <h2 className={s.h2}>Careful</h2>
        <p className={s.p}>Don&apos;t put it in a bag while it&apos;s on. It will get hot.</p>

        <p className={s.links}><a href={REPO}>Source on GitHub</a> · Made by <a href="/">Alex McConnell</a></p>
      </div>
    </main>
  );
}
