import { Smartphone } from "lucide-react";
import { networks } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function AirtimePanel() {
  return (
    <section className="section">
      <SectionIntro
        eyebrow={<Smartphone size={18} />}
        title="Airtime & Data Bundles"
        text="Top up airtime or purchase data for all major Nigerian networks."
      />
      <div className="mini-card-grid">
        {networks.map((network) => (
          <article className="network-card" key={network.name}>
            <span style={{ "--network": network.color }}>{network.name.slice(0, 3)}</span>
            <h3>{network.name}</h3>
            <p>Airtime and data bundles</p>
          </article>
        ))}
      </div>
    </section>
  );
}
