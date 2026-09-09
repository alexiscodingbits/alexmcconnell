/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about">
      <img className="art art-rugby" src="/art/rugby-dither.png" alt="" />
      <div className="wrap">
        <SectionHeading num="01" title="About" />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Hi! I&apos;m Alex — previously Founding Engineer at ProvenMetal, a YC-backed startup, and
              currently an Engineering with Management student at Trinity College Dublin. My passion for
              building is driven by the impact I want to have on the world.
            </p>
            <p>
              <strong>The best way to learn something is to do it.</strong> The early days at ProvenMetal
              and building an EdTech startup from scratch taught me more than any lecture or textbook, and
              I&apos;m always looking for the next problem worth learning that way.
            </p>
            <p className="quote serif">
              &ldquo;Do not be timid and squeamish about your actions. All life is an experiment. The more
              experiments you make the better.&rdquo; — Ralph Waldo Emerson
            </p>
          </div>

          <div className="fact-card">
            <div className="fact">
              <div className="k">Experience</div>
              <div className="v">Founding Engineer — ProvenMetal</div>
              <div className="s">YC-backed startup</div>
            </div>
            <div className="fact">
              <div className="k">Education</div>
              <div className="v">M.Eng Engineering with Management</div>
              <div className="s">Trinity College Dublin</div>
            </div>
            <div className="fact">
              <div className="k">Secondary</div>
              <div className="v">Leaving Certificate — 613 / 625</div>
              <div className="s">98th percentile · St. Michael&apos;s College, 2023</div>
            </div>
            <div className="fact">
              <div className="k">Languages</div>
              <div className="v">Gaeilge, English, German, Spanish</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
