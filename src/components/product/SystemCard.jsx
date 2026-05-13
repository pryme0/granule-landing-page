export function SystemCard({ card }) {
  if (!card) return null;
  return (
    <div className="system-card">
      <h3>{card.title}</h3>
      <div className="system-grid">
        {card.items.map(([strong, text], index) => (
          <div className="system-item" key={strong}>
            <span>{index + 1}</span>
            <p>
              <strong>{strong}</strong> {text}
            </p>
          </div>
        ))}
      </div>
      <p className="system-note">{card.note}</p>
    </div>
  );
}
