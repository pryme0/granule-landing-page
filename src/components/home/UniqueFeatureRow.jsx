import { ChevronRight } from "lucide-react";

export function UniqueFeatureRow({ title, text, image, href, flip }) {
  return (
    <div className={`uf-row${flip ? " uf-row--flip" : ""}`} data-animate={flip ? "right" : "left"}>
      <div className="uf-phone-wrap">
        <img className="uf-phone-img" src={image} alt={`${title} feature screen`} />
      </div>
      <div className="uf-copy">
        <h3>{title}</h3>
        <p>{text}</p>
        <a className="uf-learn-more" href={href}>
          <span>Learn more</span>
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}
