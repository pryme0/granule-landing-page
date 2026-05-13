import { StoreBadge } from "../StoreBadge";

export function CTA() {
  return (
    <section className="cta" id="download">
      <div>
        <h2>Start lending or borrowing securely.</h2>
        <p>Explore Peer Loan now and join a trusted community of lenders and borrowers.</p>
        <div className="store-row">
          <StoreBadge type="Google Play" />
          <StoreBadge type="App Store" />
        </div>
      </div>
    </section>
  );
}
