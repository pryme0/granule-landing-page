import { SectionIntro } from "../SectionIntro";
import { ProductCard } from "./ProductCard";

export function UseCases({ page }) {
  return (
    <section className="section">
      <SectionIntro title="Use Cases" />
      <div className="use-case-grid">
        {page.useCases.map(([title, text, Icon]) => (
          <ProductCard key={title} title={title} text={text} icon={Icon} />
        ))}
      </div>
    </section>
  );
}
