import React from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/navItems";
import { Logo } from "./Logo";
import { AppButton } from "./AppButton";

export function Header({ inverted = true }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="site-header">
      <Logo inverted={inverted} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([item, href]) => (
          <a key={item} href={href}>
            {item}
          </a>
        ))}
      </nav>
      <AppButton>Download</AppButton>
      <button
        className="menu-button"
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div
        className={`mobile-nav-panel ${isMenuOpen ? "mobile-nav-panel--open" : ""}`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation">
          {navItems.map(([item, href]) => (
            <a key={item} href={href} onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <AppButton>Download</AppButton>
      </div>
    </header>
  );
}
