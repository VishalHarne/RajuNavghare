import { useState } from "react";
import { journey, socialLinks, workHighlights } from "./content";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Public work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Connect", href: "#contact" },
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.25 10h11.5m-4.75-4.75L15.75 10 11 14.75" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="opening-poster" aria-labelledby="poster-title">
        <div className="poster-backdrop" aria-hidden="true">
          <img src="/images/instagram-meeting.webp" alt="" />
        </div>
        <a className="poster-brand" href="#home" aria-label="Raju Navghare — enter website">
          <img src="/images/mla-logo.png" alt="" />
          <span>RAJU NAVGHARE<small>WITH THE PEOPLE · FOR BASMAT</small></span>
        </a>
        <span className="poster-role">MEMBER OF LEGISLATIVE ASSEMBLY <i /> BASMAT</span>
        <img
          className="poster-portrait"
          src="/images/profile-rajubhaiya.png"
          alt="Portrait of Raju Navghare"
          fetchPriority="high"
        />
        <div className="poster-copy">
          <p className="poster-kicker"><span /> PEOPLE FIRST · PUBLIC SERVICE</p>
          <h1 id="poster-title"><span>Raju</span><em>Navghare</em></h1>
          <p className="poster-tagline">आपलं वसमत · आपला राजूभैय्या</p>
          <span className="poster-rule" />
          <p className="poster-location">A life rooted in Basmat.<br />A commitment to its people.</p>
        </div>
        <a className="poster-scroll" href="#home">
          <span>SCROLL TO EXPLORE</span>
          <i aria-hidden="true">↓</i>
        </a>
        <span className="poster-edition" aria-hidden="true">PUBLIC SERVICE · PEOPLE · PROGRESS</span>
      </section>

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Raju Navghare — home"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/images/mla-logo.png" alt="" />
          <span>
            <strong>Raju Navghare</strong>
            <small>WITH THE PEOPLE · FOR BASMAT</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Get in touch <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-shell" id="home">
          <div className="hero-backdrop" aria-hidden="true">
            <img src="/images/hero-procession-background.png" alt="" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span /> PEOPLE FIRST · PUBLIC SERVICE</p>
            <h2>Basmat at heart.<br /><em>People first.</em></h2>
            <p className="hero-intro">
              Rooted in the people and possibilities of Basmat, committed to work that makes a difference in everyday life.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                See the work <ArrowIcon />
              </a>
              <a className="text-link" href="#journey">A journey of service <span>↘</span></a>
            </div>
            <div className="hero-signoff">
              <span className="signoff-rule" />
              <p><strong>आपलं वसमत · आपला राजूभैय्या</strong><br />A connection to this place, and the people who make it home.</p>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/images/hero-stage-speaker.png"
              alt="Raju Navghare addressing an audience at a public event"
              fetchPriority="high"
            />
            <figcaption className="hero-photo-caption">
              <strong>RAJU NAVGHARE</strong>
              <span>MEMBER OF LEGISLATIVE ASSEMBLY · BASMAT</span>
            </figcaption>
          </figure>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-section" id="about">
          <div className="page-shell intro-grid">
            <div className="section-label">
              <span>01</span>
              <p>THE PERSON<br />BEHIND THE WORK</p>
            </div>
            <div className="intro-copy">
              <p className="eyebrow">A life in public service</p>
              <h2>Leadership is not a title.<br /><em>It’s a responsibility.</em></h2>
              <p className="intro-body">
                From village leadership to the Maharashtra Legislative Assembly, Raju Navghare’s
                path has been shaped by a close connection to local life. His public work spans
                agriculture, co-operative institutions, healthcare, and education—with one
                constant: keeping people at the centre of progress.
              </p>
              <div className="intro-facts">
                <div>
                  <span>REPRESENTING</span>
                  <strong>Basmat, Maharashtra</strong>
                </div>
                <div>
                  <span>IN THE ASSEMBLY</span>
                  <strong>Since 2019</strong>
                </div>
                <div>
                  <span>ROOTED IN</span>
                  <strong>Agriculture &amp; community life</strong>
                </div>
              </div>
            </div>
            <div className="intro-aside">
              <span className="quote-mark">“</span>
              <p>Good public work starts with understanding what people need—and staying accountable to it.</p>
              <span className="aside-rule" />
              <small>A SIMPLE PRINCIPLE. A DAILY COMMITMENT.</small>
            </div>
          </div>
        </section>

        <section className="work-section page-shell" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> PEOPLE, PRIORITIES, PROGRESS</p>
              <h2>Work that meets<br /><em>real life.</em></h2>
            </div>
            <p className="section-heading-note">
              A selection of initiatives and community moments featured on the original website.
              Each is part of a broader conversation about opportunity and quality of life in Basmat.
            </p>
          </div>
          <div className="work-grid">
            {workHighlights.map((item, index) => (
              <article
                className={`work-card work-card-${item.layout}`}
                key={item.title}
              >
                <div className="work-image">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="work-number">0{index + 1}</span>
                </div>
                <div className="work-card-copy">
                  <p className="card-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="work-footnote">
            <span>↗</span>
            <p>Public work is ongoing. The stories here reflect initiatives shared on the original website.</p>
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="page-shell journey-layout">
            <div className="journey-heading">
              <p className="eyebrow"><span /> FROM LOCAL ROOTS TO PUBLIC SERVICE</p>
              <h2>A journey shaped<br />by <em>service.</em></h2>
              <p>
                Every role brings a closer understanding of the people and the work still to be done.
              </p>
              <a className="button button-light" href="#contact">
                Start a conversation <ArrowIcon />
              </a>
            </div>
            <ol className="timeline">
              {journey.map((item, index) => (
                <li key={item.years}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-entry">
                    <span className="timeline-years">{item.years}</span>
                    <h3>{item.role}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="timeline-index">0{index + 1}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact-section page-shell" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow"><span /> THE NEXT CHAPTER IS OURS TO SHAPE</p>
              <h2>Good ideas start<br />with a <em>conversation.</em></h2>
              <p>Share what matters to you. Let’s keep the conversation about Basmat’s future open, honest, and grounded in people’s everyday lives.</p>
              <a className="button button-dark" href="mailto:connect@mlarajubhaiyanavghare.com">
                Write to the office <ArrowIcon />
              </a>
            </div>
            <div className="contact-details">
              <div>
                <span>CALL THE OFFICE</span>
                <a href="tel:+917620368693">+91 76203 68693</a>
              </div>
              <div>
                <span>EMAIL</span>
                <a href="mailto:connect@mlarajubhaiyanavaghare.com">connect@mlarajubhaiyanavaghare.com</a>
              </div>
              <div>
                <span>VISIT</span>
                <p>Bahirji College Road, near Anande Cafe,<br />Food Park, Basmat, Maharashtra</p>
              </div>
              <div>
                <span>FOLLOW ALONG</span>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                      {social.mark}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="footer-brand" href="#home">Raju Navghare<span>·</span></a>
        <p>With the people. For Basmat.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <small>© {new Date().getFullYear()} Raju Navghare. All rights reserved.</small>
      </footer>
    </>
  );
}

export default App;
