import { Check } from "lucide-react";
import { SectionIntro } from "../SectionIntro";

export function ReasonsSection({ page }) {
  return (
    <section className="section section--soft">
      <SectionIntro title={`Why Use ${page.eyebrow}?`} />
      <div className="benefit-grid">
        {page.reasons.map((reason) => (
          <div className="benefit-item" key={reason}>
            <Check size={16} />
            <span>{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
