import { defineField, defineType } from "sanity";

export default defineType({
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "datetime",
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "datetime",
    }),
  ],
});
