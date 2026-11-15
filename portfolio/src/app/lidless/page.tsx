import type { Metadata } from "next";
import Topo from "./Topo";
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
      <div className={s.content}>
        <a className={s.home} href="/">← alexmcconnell.ie</a>
        <iframe className={s.hero} src="/lidless/hero.html?bg=0" title="Lidless: close the lid, it stays awake" tabIndex={-1} />
        <iframe className={s.heroSq} src="/lidless/hero.html?bg=0&fmt=square" title="Lidless: close the lid, it stays awake" tabIndex={-1} />
        <div className={s.wrap}>
          <p className={s.lead}>A switch in your Mac&apos;s menu bar that keeps it awake when you shut the lid, so your long jobs keep going.</p>
          <div className={s.cta}>
            <a className="modal-cta" href={DMG}>
              <img src="/lidless/icon.png" alt="" />
              <span className="modal-cta-text">
                <strong>Download for Mac</strong>
                <small>free · macOS 13+ · 200 KB</small>
              </span>
              <span className="modal-cta-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
          <p className={s.meta}>Open source on <a href={REPO}>GitHub</a></p>

          <h2 className={s.h2}>Why</h2>
          <p className={s.p}>Because closing the lid stops Claude jobs.</p>

          <h2 className={s.h2}>For the nerds</h2>
          <p className={s.p}>It flips <span className={s.code}>pmset disablesleep</span> for you. The first click asks for your password once, then never again. No account, no tracking, no network code.</p>

          <h2 className={s.h2}>Explosion warning</h2>
          <p className={s.p}>Keeping it in your bag while it&apos;s on may cause it to heat up. It won&apos;t explode, probably.</p>

          <p className={s.links}><a href={REPO}>Source on GitHub</a> · Made by <a href="/">Alex McConnell</a></p>
        </div>
      </div>
    </main>
  );
}
