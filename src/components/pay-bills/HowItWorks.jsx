import { steps } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function HowItWorks() {
  return (
    <section className="section section--soft" id="how-it-works">
      <SectionIntro title="How It Works" />
      <div className="steps">
        {steps.map(([title, text], index) => (
          <article className="step-card" key={title}>
            <span>{index + 1}</span>
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
