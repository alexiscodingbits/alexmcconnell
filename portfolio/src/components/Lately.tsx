import SectionHeading from "./SectionHeading";

/* The "what's new" section — the latest thing shipped, plus whatever's on my mind.
   The banner in Nav.tsx links here, so keep the two in step when this changes. */
export default function Lately() {
  return (
    <section id="lately" className="lately">
      <div className="wrap">
        <SectionHeading num="00" title="Lately" />

        <article className="news">
          <div className="news-media">
            <video
              src="/fumble/fumble-launch.mp4"
              poster="/fumble/fumble-launch-poster.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <div className="news-copy">
            <p className="label">Just shipped · Oct 2026</p>
            <h3>Fumble</h3>
            <p className="news-tagline">The typing coach that learns from your mistakes.</p>
            <p>
              A free, open-source Mac app that watches how you actually type all day, works out which keys and
              finger transitions cost you time, and drills exactly those. Everything stays on your machine.
            </p>
            <p className="news-fine">Free · Open source · macOS 14+ · Signed &amp; notarised</p>
            <div className="news-btns">
              <a className="btn btn-primary" href="https://fumble.alexmcconnell.ie" target="_blank" rel="noopener noreferrer">
                Download for Mac
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/alexiscodingbits/Fumble"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source ↗
              </a>
            </div>
          </div>
        </article>

        <figure className="verse">
          <p className="label">On my mind</p>
          <blockquote className="serif">
            &ldquo;That you are here — that life exists and identity, that the powerful play goes on, and you may
            contribute a verse.&rdquo;
          </blockquote>
          <figcaption>
            Walt Whitman, <em>O Me! O Life!</em> — as read by John Keating in <em>Dead Poets Society</em>.{" "}
            <span className="verse-q">What will your verse be?</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
