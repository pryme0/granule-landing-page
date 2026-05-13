export function StatCards({ cards, metricCards }) {
  const data = cards || metricCards;
  if (!data?.length) return null;
  return (
    <div className={metricCards ? "metric-grid" : "stat-grid"}>
      {data.map(([title, text, IconOrTone]) => {
        const isMetric = typeof IconOrTone === "string";
        const Icon = isMetric ? null : IconOrTone;
        return (
          <article className={isMetric ? `metric-card metric-card--${IconOrTone}` : "stat-card"} key={title}>
            {Icon ? <Icon size={34} /> : null}
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
  );
}
