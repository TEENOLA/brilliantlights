import { useQuery } from "@tanstack/react-query";
import type { SanityImageSource } from "@sanity/image-url";
import { isSanityConfigured, sanityClient } from "./sanity";

export type SchoolEvent = {
  _id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  image?: SanityImageSource;
};

export type GalleryPhoto = {
  _id: string;
  caption: string;
  image: SanityImageSource;
};

const upcomingEventsQuery = `*[_type == "event" && date >= $since] | order(date asc) [0...$limit] {
  _id, title, date, location, description, image
}`;

const galleryPhotosQuery = `*[_type == "galleryImage" && defined(image.asset)] | order(_createdAt desc) [0...$limit] {
  _id, caption, image
}`;

function startOfTodayIso(): string {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  return startOfToday.toISOString();
}

/** Upcoming events, soonest first. Events from earlier days drop off by themselves. */
export function useUpcomingEvents(limit = 12) {
  return useQuery({
    queryKey: ["events", "upcoming", limit, startOfTodayIso()],
    queryFn: () => sanityClient.fetch<SchoolEvent[]>(upcomingEventsQuery, { since: startOfTodayIso(), limit }),
    enabled: isSanityConfigured,
    staleTime: 5 * 60 * 1000,
  });
}

/** Gallery photos, newest first. */
export function useGalleryPhotos(limit = 60) {
  return useQuery({
    queryKey: ["gallery", limit],
    queryFn: () => sanityClient.fetch<GalleryPhoto[]>(galleryPhotosQuery, { limit }),
    enabled: isSanityConfigured,
    staleTime: 5 * 60 * 1000,
  });
}
