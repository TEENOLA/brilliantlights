import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || "production";

/** False until the school's Sanity project ID is set in `.env`. The site then shows labelled placeholders. */
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});

const imageUrlBuilder = createImageUrlBuilder({ projectId: projectId || "unconfigured", dataset });

/** Resized, cropped (respecting the hotspot the editor set) and auto-formatted image URL. */
export function imageUrl(source: SanityImageSource, width: number, height?: number): string {
  let builder = imageUrlBuilder.image(source).width(width).auto("format");
  if (height) {
    builder = builder.height(height).fit("crop");
  }
  return builder.url();
}
