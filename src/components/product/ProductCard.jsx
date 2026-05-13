import { BadgeCheck } from "lucide-react";

export function ProductCard({ title, text, icon: Icon = BadgeCheck, tone = "red" }) {
  return (
    <article className="product-card">
      <span className={`product-icon product-icon--${tone}`}>
        <Icon size={28} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
