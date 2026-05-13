import { Tv } from "lucide-react";
import { cableProviders } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function CablePanel() {
  return (
    <section className="section section--soft">
      <SectionIntro
        eyebrow={<Tv size={18} />}
        title="Cable TV Subscriptions"
        text="Recharge your cable TV subscriptions instantly with all major providers."
      />
      <div className="mini-card-grid mini-card-grid--three">
        {cableProviders.map(([name, text]) => (
          <article className="brand-card" key={name}>
            <span className="brand-orb">{name.slice(0, 2)}</span>
            <h3>{name}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
