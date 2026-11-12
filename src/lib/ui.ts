export type ButtonVariant = "primary" | "accent" | "dark" | "outline" | "whatsapp";
export type ButtonSize = "regular" | "small";

const baseClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(16,42,80,0.18)] motion-safe:active:translate-y-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-teal text-white hover:bg-[#066560]",
  accent: "bg-brand-yellow text-brand-ink hover:bg-[#e3b300]",
  dark: "bg-brand-ink text-white hover:bg-[#091a38]",
  outline: "border-2 border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white",
  whatsapp: "bg-brand-whatsapp text-white hover:bg-[#146236]",
};

const sizeClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: { regular: "px-7 py-[15px]", small: "px-[22px] py-3 text-[15px]" },
  accent: { regular: "px-7 py-[15px]", small: "px-[22px] py-3 text-[15px]" },
  dark: { regular: "px-7 py-[15px]", small: "px-[22px] py-3 text-[15px]" },
  outline: { regular: "px-[26px] py-[13px]", small: "px-5 py-2.5 text-[15px]" },
  whatsapp: { regular: "px-[26px] py-3.5", small: "px-[22px] py-3 text-[15px]" },
};

export function buttonClass(variant: ButtonVariant, size: ButtonSize = "regular"): string {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[variant][size]}`;
}

export const eyebrowClass = "text-sm font-extrabold tracking-[0.08em] text-brand-teal";

export const sectionHeadingClass =
  "font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[40px]";

export const cardHeadingClass = "font-display text-2xl font-bold";
