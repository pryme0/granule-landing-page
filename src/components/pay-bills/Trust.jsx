import { trustCards } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function Trust() {
  return (
    <section className="section">
      <SectionIntro title="Safe, Secure, and Reliable" />
      <div className="trust-grid">
        {trustCards.map(([title, text, Icon]) => (
          <article className="trust-card" key={title}>
            <Icon size={42} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
