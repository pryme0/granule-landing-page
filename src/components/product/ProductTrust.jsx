import { ShieldCheck } from "lucide-react";
import { SectionIntro } from "../SectionIntro";

export function ProductTrust({ page }) {
  if (!page.trust?.length && !page.protection) return null;
  return (
    <section className="section section--soft">
      {page.trust?.length ? (
        <>
          <SectionIntro title="Built on Trust & Safety" />
          <div className="trust-grid">
            {page.trust.map(([title, text, Icon]) => (
              <article className="trust-card" key={title}>
                <Icon size={42} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </>
      ) : null}
      {page.protection ? (
        <div className="protection-card">
          <ShieldCheck size={30} />
          <div>
            <h3>Your Protection Matters</h3>
            <p>{page.protection}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
