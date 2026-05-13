import { utilityCards } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function UtilityPayments() {
  return (
    <section className="section" id="personal">
      <SectionIntro
        title="All Your Utility Payments"
        text="From electricity to data bundles, pay for all your essential services in seconds."
      />
      <div className="utility-grid">
        {utilityCards.map(({ title, text, icon: Icon, tone }) => (
          <article className="utility-card" key={title}>
            <span className={`icon-bubble icon-bubble--${tone}`}>
              <Icon size={30} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
