import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      title: 'Pastors',
      name: 'pastors',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contacts',
      title: 'contacts',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'locationImg',
      title: 'locationImg',
      type: 'image',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
