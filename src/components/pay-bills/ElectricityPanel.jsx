import { Bolt, Building2 } from "lucide-react";
import { electricityProviders } from "../../data/payBills";
import { SectionIntro } from "../SectionIntro";

export function ElectricityPanel() {
  return (
    <section className="section">
      <SectionIntro
        eyebrow={<Bolt size={18} />}
        title="Electricity Bill Payment"
        text="Pay for prepaid and postpaid electricity across all distribution companies in Nigeria."
      />
      <div className="provider-panel provider-panel--warm">
        <h3>Supported DISCOs</h3>
        <div className="provider-grid">
          {electricityProviders.map((provider) => (
            <div className="provider-item" key={provider}>
              <Building2 size={16} />
              <span>{provider}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
