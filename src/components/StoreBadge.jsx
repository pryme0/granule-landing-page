import { CreditCard, Monitor } from "lucide-react";

export function StoreBadge({ type }) {
  const isGoogle = type === "Google Play";
  return (
    <a className="store-badge" href="#" aria-label={`Download on ${type}`}>
      {isGoogle ? <Monitor size={22} /> : <CreditCard size={22} />}
      <span>
        <small>{isGoogle ? "GET IT ON" : "Download on the"}</small>
        {type}
      </span>
    </a>
  );
}
