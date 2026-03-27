import {defineField, defineType} from 'sanity'

export const workshop = defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Workshop Name',
      type: 'string',
      description: 'Title of the workshop (e.g., "AI Training", "Web Development")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'A short 1-2 sentence description for the listing card.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      description: 'Detailed information and syllabus for the workshop.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Featured image for the workshop.',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "1-2 Months OJT"',
    }),
    defineField({
      name: 'workMode',
      title: 'Work Mode',
      type: 'string',
      options: {
        list: [
          {title: 'Online', value: 'online'},
          {title: 'Offline', value: 'offline'},
          {title: 'Hybrid', value: 'hybrid'},
        ],
        layout: 'radio',
      },
      initialValue: 'online',
      description: 'e.g., "Online", "Offline", "Hybrid"',
    }),
    defineField({
      name: 'enrollLink',
      title: 'Enrollment Link',
      type: 'url',
      description: 'External link to a Google Form, payment gateway, or calendar for enrollment.',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When the next batch starts (optional).',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'workMode',
      media: 'coverImage',
    },
  },
})
