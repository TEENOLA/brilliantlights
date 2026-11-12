import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { galleryCaptions, homeGalleryCaptions } from "../data/content";
import { imageUrl, isSanityConfigured } from "../lib/sanity";
import { useGalleryPhotos } from "../lib/queries";
import { toneAt } from "../lib/tones";

type GalleryGridProps = {
  /** Home shows a short preview without captions; the Gallery page shows everything with captions. */
  variant: "preview" | "full";
};

const previewCount = 6;

export function GalleryGrid({ variant }: GalleryGridProps) {
  const isFull = variant === "full";
  const { data: photos, isPending, isError } = useGalleryPhotos(isFull ? 60 : previewCount);

  const gridClass = isFull
    ? "grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-6"
    : "grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4";

  if (!isSanityConfigured) {
    const placeholderCaptions = isFull ? galleryCaptions : homeGalleryCaptions;
    return (
      <div className={gridClass}>
        {placeholderCaptions.map((caption, captionIndex) => (
          <Reveal as="figure" key={caption} delayMs={(captionIndex % 3) * 100} className="group flex flex-col gap-2.5">
            <Photo label={`Photo: ${caption}`} ratio="4/3" tone={toneAt(captionIndex)} />
            {isFull && <figcaption className="font-bold">{caption}</figcaption>}
          </Reveal>
        ))}
      </div>
    );
  }

  if (isPending) {
    return <p className="text-brand-muted">Loading photos…</p>;
  }

  if (isError) {
    return <p className="text-brand-muted">We couldn't load the photos just now. Please check back soon.</p>;
  }

  if (photos.length === 0) {
    return <p className="text-brand-muted">New photos are on their way. Please check back soon.</p>;
  }

  return (
    <div className={gridClass}>
      {photos.map((photo, photoIndex) => (
        <Reveal as="figure" key={photo._id} delayMs={(photoIndex % 3) * 100} className="group flex flex-col gap-2.5">
          <Photo label={photo.caption} src={imageUrl(photo.image, 900, 675)} ratio="4/3" />
          {isFull && <figcaption className="font-bold">{photo.caption}</figcaption>}
        </Reveal>
      ))}
    </div>
  );
}
