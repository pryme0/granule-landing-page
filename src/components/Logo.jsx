export function Logo({ inverted = false }) {
  return (
    <a className="logo" href="/" aria-label="Granule home">
      <img src={inverted ? "/assets/logo-mark.svg" : "/assets/logo-word.svg"} alt="" />
    </a>
  );
}
