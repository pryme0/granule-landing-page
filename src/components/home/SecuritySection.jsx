import { ShieldCheck } from "lucide-react";
import { securityCards } from "../../data/home";

export function SecuritySection() {
  return (
    <section className="security-section">
      <div className="security-icon-wrap" aria-hidden="true">
        <ShieldCheck size={38} />
      </div>
      <h2>Built with Bank-Grade Security</h2>
      <p className="security-subtitle">
        Your money and data are protected with the same security standards used by major financial institutions.
      </p>
      <div className="security-grid">
        {securityCards.map(({ title, text, img }) => (
          <article className="security-card" key={title}>
            <img className="security-card-icon" src={img} alt="" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="security-cbn-text">Licensed and regulated by the Central Bank of Nigeria</p>
      <div className="security-pills">
        {["256-bit SSL Encryption", "PCI DSS Compliant", "NDPR Certified"].map((pill) => (
          <span className="security-pill" key={pill}>{pill}</span>
        ))}
      </div>
    </section>
  );
}
