export function Notice({ notice }) {
  if (!notice) return null;
  return (
    <div className="notice-card">
      {notice.title ? <h3>{notice.title}</h3> : null}
      <p>{notice.text}</p>
    </div>
  );
}
