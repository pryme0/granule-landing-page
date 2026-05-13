export function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
