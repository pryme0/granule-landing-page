import { SectionIntro } from "../SectionIntro";

export function SplitSteps({ groups }) {
  if (!groups?.length) return null;
  return (
    <section className="section" id="how-it-works">
      <SectionIntro title="How It Works" />
      <div className="split-steps">
        {groups.map(({ title, icon: Icon, items }) => (
          <div key={title}>
            <h3 className="split-heading">
              <Icon size={24} />
              {title}
            </h3>
            <div className="compact-steps">
              {items.map(([stepTitle, text], index) => (
                <article className="compact-step" key={stepTitle}>
                  <span>{index + 1}</span>
                  <div>
                    <h4>{stepTitle}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
