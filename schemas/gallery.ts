import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      title: "Image",
      name: "image",
      type: "image",
    }),
  ],
});
