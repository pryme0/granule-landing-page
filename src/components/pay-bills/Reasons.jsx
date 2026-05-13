import { BadgeCheck, Check } from "lucide-react";
import { benefits, reasons } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function Reasons() {
  return (
    <section className="section section--soft">
      <SectionIntro title="Why Pay Utilities with Granule?" />
      <div className="reason-grid">
        {reasons.map(([title, text]) => (
          <article className="reason-card" key={title}>
            <BadgeCheck size={22} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <SectionIntro title="Benefits of Using Granule" />
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <div className="benefit-item" key={benefit}>
            <Check size={16} />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
