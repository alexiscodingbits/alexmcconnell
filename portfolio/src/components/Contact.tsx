import SectionHeading from "./SectionHeading";

/* Deterministic bar widths so the barcode looks real but never shifts between renders. */
const BARS = [3, 1, 2, 1, 1, 4, 1, 2, 3, 1, 1, 1, 3, 2, 1, 4, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 4, 2, 1, 1, 2, 1, 3, 1, 1, 2];

function Barcode({ className = "" }: { className?: string }) {
  return (
    <div className={`barcode ${className}`} aria-hidden="true">
      {BARS.map((w, i) => (
        <span key={i} style={{ width: w }} />
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <SectionHeading num="05" title="Contact" />

        <div className="pass">
          {/* main stub */}
          <div className="pass-main">
            <div className="pass-head">
              <span className="pass-brand">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2c1.6 2.1 2.4 4.3 2.4 6.6l5.2 3.1c.4.2.6.6.6 1v1.6l-6.2-1.9c-.1 1.6-.5 3.2-1 4.7l2.2 1.7v1.5L12 20.4 8.8 21.8v-1.5l2.2-1.7c-.5-1.5-.9-3.1-1-4.7L3.8 15.8V14.2c0-.4.2-.8.6-1l5.2-3.1C9.6 6.3 10.4 4.1 12 2z"
                    fill="currentColor"
                  />
                </svg>
                Alex McConnell
              </span>
              <span className="pass-title">Boarding Pass</span>
            </div>

            <div className="pass-body">
              <div className="pass-route">
                <div className="leg">
                  <span className="iata">DUB</span>
                  <span className="place">Dublin</span>
                </div>
                <div className="hop" aria-hidden="true">
                  <span className="line" />
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21 16v-2l-8-2.5V6.5a1.5 1.5 0 0 0-3 0V11.5L2 14v2l8-1.5V19l-2.5 1.5V22L11.5 21l4 1v-1.5L13 19v-4.5L21 16z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="line" />
                </div>
                <div className="leg to">
                  <span className="iata unknown">???</span>
                  <span className="place">Destination unknown</span>
                </div>
              </div>

              <div className="pass-grid">
                <div className="field">
                  <span className="k">Passenger</span>
                  <span className="v">McConnell / Alex</span>
                </div>
                <div className="field">
                  <span className="k">Flight</span>
                  <span className="v">EI 2026</span>
                </div>
                <div className="field">
                  <span className="k">Date</span>
                  <span className="v">10 SEP 2026</span>
                </div>
                <div className="field">
                  <span className="k">Boarding</span>
                  <span className="v">Any time</span>
                </div>
                <div className="field wide">
                  <span className="k">Email</span>
                  <a className="v link" href="mailto:almcconn@tcd.ie">
                    almcconn@tcd.ie
                  </a>
                </div>
                <div className="field wide">
                  <span className="k">LinkedIn</span>
                  <a
                    className="v link"
                    href="https://www.linkedin.com/in/alexmcconnell1002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /in/alexmcconnell1002 ↗
                  </a>
                </div>
              </div>

              <div className="pass-foot">
                <Barcode />
                <p className="pass-note">
                  Always happy to chat about interesting projects, opportunities, or ideas. Drop me a line.
                </p>
              </div>
            </div>
          </div>

          {/* tear-off stub */}
          <div className="pass-stub">
            <div className="pass-head">
              <span className="pass-title">Have a nice flight</span>
            </div>
            <div className="pass-body">
              <div className="field">
                <span className="k">Passenger</span>
                <span className="v">McConnell / Alex</span>
              </div>
              <div className="stub-row">
                <div className="field">
                  <span className="k">From</span>
                  <span className="v">DUB</span>
                </div>
                <div className="field">
                  <span className="k">To</span>
                  <span className="v unknown">???</span>
                </div>
              </div>
              <div className="stub-row">
                <div className="field">
                  <span className="k">Flight</span>
                  <span className="v">EI 2026</span>
                </div>
                <div className="field">
                  <span className="k">Seat</span>
                  <span className="v">1A</span>
                </div>
              </div>
              <div className="field">
                <span className="k">Date</span>
                <span className="v">10 SEP 2026</span>
              </div>
              <Barcode className="small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
