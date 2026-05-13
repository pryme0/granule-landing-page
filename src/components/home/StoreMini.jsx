import { CreditCard, Smartphone } from "lucide-react";

export function StoreMini({ type }) {
  const isGoogle = type === "Google Play";
  return (
    <a className="store-mini" href="#download" aria-label={`Download on ${type}`}>
      {isGoogle ? <CreditCard size={18} /> : <Smartphone size={18} />}
      <span>
        <small>{isGoogle ? "GET IT ON" : "Download on the"}</small>
        {type}
      </span>
    </a>
  );
}
