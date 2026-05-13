import { Facebook, X, Youtube } from "lucide-react";
import { navItems } from "../data/navItems";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-card">
        <Logo />
        <p>We&apos;re more than a bank - we&apos;re a bridge to economic freedom.</p>
        <nav aria-label="Footer navigation">
          {navItems.slice(0, 5).map(([item, href]) => (
            <a key={item} href={href}>
              {item}
            </a>
          ))}
        </nav>
        <div className="social-row" aria-label="Social links">
          <a href="#" aria-label="Facebook">
            <Facebook size={19} />
          </a>
          <a href="#" aria-label="X">
            <X size={18} />
          </a>
          <a href="#" aria-label="Youtube">
            <Youtube size={20} />
          </a>
          <a href="#" aria-label="LinkedIn">
            in
          </a>
        </div>
      </div>
      <div className="legal">
        <a href="#">General conditions of sale</a>
        <a href="#">Privacy &amp; Cookies Policy</a>
        <a href="#">Accessibility</a>
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}
