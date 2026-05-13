import { Header } from "../Header";
import { AppButton } from "../AppButton";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <Header />
        <div className="hero__content">
          <div className="hero__copy">
            <span className="pill">Utility</span>
            <h1>Pay All Your Bills in One Place.</h1>
            <p>
              Electricity, cable TV, airtime, and data bundles - all at your fingertips. Fast,
              secure, and convenient.
            </p>
            <AppButton icon>Get started</AppButton>
          </div>
          <div className="hero__media" aria-label="Granule utility payment preview">
            <img src="/assets/hero-utilities.png" alt="A person paying bills with a mobile phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
