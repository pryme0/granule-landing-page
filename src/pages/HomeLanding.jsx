import { Download, QrCode } from "lucide-react";
import { homeFeatures, testimonials } from "../data/home";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionIntro } from "../components/SectionIntro";
import { HeroPhone } from "../components/home/HeroPhone";
import { StoreMini } from "../components/home/StoreMini";
import { UniqueFeatures } from "../components/home/UniqueFeatures";
import { SecuritySection } from "../components/home/SecuritySection";

export function HomeLanding() {
  useScrollReveal();

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__inner">
          <Header inverted={false} />
          <div className="home-hero__body">
            <div className="home-hero__copy" data-animate="up">
              <p className="home-kicker">Your Money</p>
              <h1>Your Freedom</h1>
              <p>
                Send money instantly, request payments with QR, schedule payments automatically,
                and even protect your balance with Panic Profile.
              </p>
              <div className="home-actions">
                <AppButton icon>Open an Account</AppButton>
                <a className="button button--hero-secondary" href="#download">
                  <span>Download app</span>
                  <Download size={18} strokeWidth={2.4} />
                </a>
                <div className="home-store-row">
                  <a href="#download" aria-label="Download on the App Store">
                    <img src="/assets/badge-app-store.png" alt="Download on the App Store" className="store-badge-img" />
                  </a>
                  <a href="#download" aria-label="Get it on Google Play">
                    <img src="/assets/badge-play-store.png" alt="Get it on Google Play" className="store-badge-img" />
                  </a>
                </div>
              </div>
              <div className="home-trust">
                <span>
                  Fully Licensed by the CBN
                  <img src="/assets/cbn-logo.png" alt="" />
                </span>
                <span>
                  Deposits Insured by
                  <img src="/assets/ndic-logo.png" alt="" />
                </span>
              </div>
            </div>
            <HeroPhone />
          </div>
        </div>
      </section>

      <section className="qr-callout" data-animate="up">
        <div className="qr-card">
          <div className="qr-pattern" aria-hidden="true">
            <QrCode size={118} />
            <img src="/assets/logo-mark-red.svg" alt="" />
          </div>
        </div>
        <div>
          <h2>It&apos;s all here, in a QR Code</h2>
          <p>Granule Bank brings modern banking to your doorstep-wherever you are.</p>
        </div>
      </section>

      <section className="home-feature-band" id="features">
        <div className="home-feature-grid">
          {homeFeatures.map(([title, text, Icon, href], index) => (
            <a
              className="home-feature"
              href={href}
              key={title}
              data-animate="up"
              style={{ "--delay": `${index * 90}ms` }}
            >
              <span>
                <Icon size={34} />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </a>
          ))}
        </div>
        <a className="see-all-button" href="#showcase" data-animate="scale">See All</a>
      </section>

      <UniqueFeatures />

      <section className="app-banner" id="download" data-animate="up">
        <div data-animate="left">
          <h2>Start Banking the Smarter Way</h2>
          <p>Join thousands of Nigerians who are already banking differently with Granule. Download now and experience the future of banking.</p>
          <div className="home-store-row">
            <StoreMini type="Google Play" />
            <StoreMini type="App Store" />
          </div>
        </div>
        <div className="app-banner__phone" data-animate="right" style={{ "--delay": "120ms" }}>
          <img src="/assets/start-banking-phone.png" alt="Granule app dashboard" />
        </div>
      </section>

      <SecuritySection />

      <section className="landing-steps">
        <h2 data-animate="left">How Granule works in 3 steps</h2>
        <div className="landing-step-grid">
          {["Download the granule app", "Create your account", "Start banking"].map((step, index) => (
            <article
              className="landing-step"
              key={step}
              data-animate="up"
              style={{ "--delay": `${index * 110}ms` }}
            >
              <strong>{index + 1}.</strong>
              <span>{step}</span>
            </article>
          ))}
        </div>
        <p data-animate="up" style={{ "--delay": "260ms" }}>No paperwork. No queues.</p>
      </section>

      <section className="license-strip">
        <div data-animate="left">
          <h2>Licensed by the CBN</h2>
          <img src="/assets/cbn-logo.png" alt="Central Bank of Nigeria logo" />
        </div>
        <span data-animate="scale" />
        <div data-animate="right">
          <h2>Insured by NDIC</h2>
          <img src="/assets/ndic-logo.png" alt="NDIC logo" />
        </div>
      </section>

      <section className="testimonial-section">
        <div data-animate="up">
          <SectionIntro
            title="Trusted by Thousands of Users"
            text="Don't just take our word for it. Here's what our users have to say."
          />
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([quote, name], index) => (
            <article
              className="testimonial-card"
              key={name}
              data-animate="up"
              style={{ "--delay": `${index * 90}ms` }}
            >
              <p>{quote}</p>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
