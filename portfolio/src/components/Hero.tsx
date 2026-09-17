/* eslint-disable @next/next/no-img-element */
import HoverBadge from "./HoverBadge";

export default function Hero() {
  return (
    <section className="hero">
      <img className="art art-campanile" src="/art/campanile-dither.png" alt="" />
      <img className="art art-bridge" src="/art/bridge-dither.png" alt="" />

      <div className="hero-inner">
        <div className="portrait">
          <img src="/art/profile.jpg" alt="Alex McConnell" width={624} height={780} />
        </div>

        <p className="label">{"// portfolio"}</p>
        <h1>
          Alex <br className="brk" />
          McCon<span className="serif">n</span>ell
        </h1>
        <p className="hero-sub">
          I like to <span className="serif">build</span> things.
        </p>

        <div className="btn-row">
          <a className="btn btn-primary" href="#projects">
            View work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <p className="hint">
          👋 Anytime you see a <HoverBadge /> badge, hover over it — and 🔊 turn up your volume for maximum fun
        </p>
      </div>

      <div className="scroll-cue">
        <div className="bar" />
        <p className="label">Scroll</p>
      </div>
    </section>
  );
}
