import { toneClasses, type Tone } from "../lib/tones";

type PhotoRatio = "4/3" | "1/1" | "16/9" | "4/5";
type PhotoShape = "card" | "soft" | "circle";

const ratioClasses: Record<PhotoRatio, string> = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "4/5": "aspect-[4/5]",
};

const shapeClasses: Record<PhotoShape, string> = {
  card: "rounded-[24px]",
  soft: "rounded-[32px]",
  circle: "rounded-full",
};

type PhotoProps = {
  /** Describes the photo. Used as the placeholder label and as alt text. */
  label: string;
  ratio?: PhotoRatio;
  tone?: Tone;
  shape?: PhotoShape;
  /** Pass the real image URL here once the school supplies photos. */
  src?: string;
  className?: string;
};

/**
 * A fixed-ratio photo slot. Shows a labelled placeholder until `src` is set,
 * then the real image cropped with object-cover so it never distorts.
 */
export function Photo({
  label,
  ratio = "4/3",
  tone = "teal",
  shape = "card",
  src,
  className = "",
}: PhotoProps) {
  const frame = `${ratioClasses[ratio]} ${shapeClasses[shape]} w-full overflow-hidden ${className}`;

  if (src) {
    return (
      <div className={frame}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`${frame} box-border flex items-center justify-center border-2 border-dashed p-3 text-center text-sm font-bold ${toneClasses[tone]}`}
    >
      {label}
    </div>
  );
}
