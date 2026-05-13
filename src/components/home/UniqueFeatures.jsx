import { uniqueFeatures } from "../../data/home";
import { UniqueFeatureRow } from "./UniqueFeatureRow";

export function UniqueFeatures() {
  return (
    <section className="unique-features">
      <div className="uf-intro" data-animate="up">
        <h2>Features You Won&apos;t Find Anywhere Else</h2>
        <p>Granule isn&apos;t just another banking app. These unique features set us apart.</p>
      </div>
      {uniqueFeatures.map((f) => (
        <UniqueFeatureRow key={f.title} {...f} />
      ))}
    </section>
  );
}
