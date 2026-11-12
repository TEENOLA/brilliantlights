type LogoMarkProps = {
  /** Rendered height in px. Width follows the artwork's own proportions. */
  height?: number;
  className?: string;
};

/** The school's symbol (two children, arcs and star), without the lettering. Decorative: the name sits beside it. */
export function LogoMark({ height = 48, className = "" }: LogoMarkProps) {
  return <img src="/logo-mark.png" alt="" height={height} className={`w-auto ${className}`} style={{ height }} />;
}

type FullLogoProps = {
  height?: number;
  className?: string;
};

/** Complete logo with lettering and tagline. Designed for light backgrounds only. */
export function FullLogo({ height = 220, className = "" }: FullLogoProps) {
  return (
    <img
      src="/logo-full.png"
      alt="Brilliant Lights Great School: where kids grow happy"
      height={height}
      className={`w-auto ${className}`}
      style={{ height }}
    />
  );
}
