import { ChevronRight } from "lucide-react";

export function AppButton({ children, variant = "light", icon = false }) {
  return (
    <a className={`button button--${variant}`} href="#download">
      <span>{children}</span>
      {icon ? <ChevronRight size={18} strokeWidth={2.4} /> : null}
    </a>
  );
}
