type IconProps = {
  size?: number;
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M4 20l1.2-4A8 8 0 1 1 8 18.8z" />
    </svg>
  );
}

export function DownloadIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps} strokeWidth={2.2}>
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function DocumentIcon({ size = 56, className }: IconProps) {
  return (
    <svg width={(size * 44) / 56} height={size} viewBox="0 0 44 56" className={className} aria-hidden="true">
      <path d="M4 2h26l10 10v42H4z" fill="#E3F5F5" stroke="#087A76" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M30 2v10h10" fill="none" stroke="#087A76" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 24h20M12 32h20M12 40h12" stroke="#087A76" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />
    </svg>
  );
}

export function BookIcon({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M4 5c3-1.5 6-1.5 8 1 2-2.5 5-2.5 8-1v13c-3-1.5-6-1.5-8 1-2-2.5-5-2.5-8-1z" />
    </svg>
  );
}

export function ShieldIcon({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    </svg>
  );
}

export function MapPinIcon({ size = 44, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PlayIcon({ size = 44, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#F8C818" />
      <path d="M10 8l6 4-6 4z" fill="#10294F" />
    </svg>
  );
}

export function MenuIcon({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/** Four-point star, echoing the star in the school logo. Decorative only. */
export function SparkleIcon({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 1.5c.7 5.2 3.3 8.6 9.5 10.5-6.2 1.9-8.8 5.3-9.5 10.5-.7-5.2-3.3-8.6-9.5-10.5C8.7 10.1 11.3 6.7 12 1.5z" />
    </svg>
  );
}
