import { BadgeCheck } from "lucide-react";

export function Spotlight({ items }) {
  if (!items?.length) return null;
  return (
    <div className="spotlight-grid">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article className={`spotlight-card spotlight-card--${item.tone}`} key={item.title}>
            <span className="spotlight-icon">
              <Icon size={32} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="spotlight-list">
              {item.items.map(([title, text]) => (
                <div key={title}>
                  <BadgeCheck size={18} />
                  <span>
                    <strong>{title}</strong>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
