import { Header } from "../Header";
import { AppButton } from "../AppButton";

export function ProductHero({ page }) {
  return (
    <section className="hero product-hero">
      <div className="hero__inner">
        <Header />
        <div className="hero__content">
          <div className="hero__copy">
            <span className="pill">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <AppButton icon>Get started</AppButton>
          </div>
          <div className="hero__media">
            <img src={page.image} alt={`${page.eyebrow} preview`} />
          </div>
        </div>
      </div>
    </section>
  );
}
