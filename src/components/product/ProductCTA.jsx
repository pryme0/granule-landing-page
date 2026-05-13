import { StoreBadge } from "../StoreBadge";

export function ProductCTA({ page }) {
  return (
    <section className="cta" id="download">
      <div>
        <h2>{page.ctaTitle || "Start lending or borrowing securely."}</h2>
        <p>{page.ctaText || "Explore Peer Loan now and join a trusted community of lenders and borrowers."}</p>
        <div className="store-row">
          <StoreBadge type="Google Play" />
          <StoreBadge type="App Store" />
        </div>
      </div>
    </section>
  );
}
