import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Gallery photo",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      description: "Drag a photo here or click to upload. Use the crop tool to choose the part that stays visible.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "A few words describing the photo. This also helps visually impaired visitors.",
      validation: (rule) => rule.required().max(100),
    }),
  ],
  orderings: [
    { title: "Newest first", name: "newest", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "caption", media: "image" },
  },
});
