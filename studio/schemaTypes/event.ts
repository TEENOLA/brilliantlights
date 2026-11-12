import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event name",
      type: "string",
      description: "For example: Open Day, Inter-house Sports, End of Term Party.",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "date",
      title: "Date and time",
      type: "datetime",
      description: "When the event starts. Past events disappear from the website by themselves.",
      options: { timeStep: 15 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Where",
      type: "string",
      description: "Optional. For example: School hall.",
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "Optional. One or two sentences for parents.",
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      description: "Optional. A picture for this event.",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    { title: "Date, soonest first", name: "dateAsc", by: [{ field: "date", direction: "asc" }] },
    { title: "Date, latest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", date: "date", media: "image" },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" }) : "No date yet",
        media,
      };
    },
  },
});
