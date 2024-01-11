import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'officeProfile',
  title: 'OfficeProfile',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
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
