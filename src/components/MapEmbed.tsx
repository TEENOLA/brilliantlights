import { school } from "../lib/school";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className = "" }: MapEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-[28px] border-2 border-[#7cc4c9] bg-[#dff3f8] ${className}`}>
      <iframe
        title={`Map showing ${school.name}`}
        src={school.mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[340px] w-full border-0"
      />
    </div>
  );
}
