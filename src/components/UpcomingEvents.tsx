import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";
import { imageUrl, isSanityConfigured } from "../lib/sanity";
import { useUpcomingEvents, type SchoolEvent } from "../lib/queries";
import { eyebrowClass, sectionHeadingClass, cardHeadingClass } from "../lib/ui";
import { toneAt } from "../lib/tones";

const lagosTimeZone = "Africa/Lagos";

function formatDay(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", { day: "numeric", timeZone: lagosTimeZone });
}

function formatMonth(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", { month: "short", timeZone: lagosTimeZone }).toUpperCase();
}

function formatWeekdayAndTime(isoDate: string): string {
  const weekday = new Date(isoDate).toLocaleDateString("en-GB", { weekday: "long", timeZone: lagosTimeZone });
  const time = new Date(isoDate).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: lagosTimeZone,
  });
  return `${weekday}, ${time.replace(" ", "").toLowerCase()}`;
}

type EventCardProps = {
  event: SchoolEvent;
  toneIndex: number;
  /** Position in the row, used to stagger the entrance. */
  staggerIndex: number;
};

function EventCard({ event, toneIndex, staggerIndex }: EventCardProps) {
  return (
    <Reveal
      as="article"
      lift
      delayMs={staggerIndex * 120}
      className="group flex min-w-[260px] flex-[1_1_300px] flex-col gap-4 rounded-[28px] bg-brand-aqua p-6"
    >
      {event.image && (
        <Photo label={event.title} src={imageUrl(event.image, 800, 500)} ratio="16/9" tone={toneAt(toneIndex)} />
      )}
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink">
          <span className="font-display text-2xl font-extrabold leading-none">{formatDay(event.date)}</span>
          <span className="text-xs font-extrabold tracking-[0.08em]">{formatMonth(event.date)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className={cardHeadingClass}>{event.title}</h3>
          <div className="font-bold text-brand-teal">{formatWeekdayAndTime(event.date)}</div>
          {event.location && <div className="text-brand-muted">{event.location}</div>}
        </div>
      </div>
      {event.description && <p className="text-brand-muted">{event.description}</p>}
    </Reveal>
  );
}

/** Placeholder cards shown until the school's Sanity project is connected. */
function PlaceholderCards() {
  return (
    <>
      {[0, 1, 2].map((placeholderIndex) => (
        <article
          key={placeholderIndex}
          className="flex min-w-[260px] flex-[1_1_300px] items-start gap-4 rounded-[28px] border-2 border-dashed border-brand-field bg-brand-aqua p-6"
        >
          <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink">
            <span className="font-display text-2xl font-extrabold leading-none">00</span>
            <span className="text-xs font-extrabold tracking-[0.08em]">MON</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={cardHeadingClass}>[Event title]</h3>
            <div className="font-bold text-brand-teal">[Day, time]</div>
            <div className="text-brand-muted">[Location]</div>
          </div>
        </article>
      ))}
    </>
  );
}

/**
 * The next few events, managed in the school's Sanity Studio.
 * Once connected, the whole section hides itself when there are no upcoming events.
 */
export function UpcomingEvents() {
  const { data: events, isPending, isError } = useUpcomingEvents(3);

  if (isSanityConfigured && !isPending && !isError && (events?.length ?? 0) === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <div className={eyebrowClass}>WHAT'S COMING UP</div>
          <h2 className={`${sectionHeadingClass} mb-8 mt-2`}>Upcoming events</h2>
        </Reveal>
        <div className="flex flex-wrap gap-6">
          {!isSanityConfigured && <PlaceholderCards />}
          {isSanityConfigured && isPending && <p className="text-brand-muted">Loading events…</p>}
          {isSanityConfigured && isError && (
            <p className="text-brand-muted">We couldn't load our events just now. Please check back soon.</p>
          )}
          {events?.map((event, eventIndex) => (
            <EventCard key={event._id} event={event} toneIndex={eventIndex} staggerIndex={eventIndex} />
          ))}
        </div>
      </Container>
    </section>
  );
}
