import { SectionIntro } from "../SectionIntro";

export function FeatureSection({ page }) {
  return (
    <section className="section">
      <SectionIntro title="Key Features" />
      <div className="feature-grid">
        {page.features.map(([title, text, Icon]) => (
          <article className="feature-item" key={title}>
            <Icon size={20} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
