import {defineField, defineType} from 'sanity'

export const agency = defineType({
  name: 'agency',
  title: 'Agency Details',
  type: 'document',
  // Being a singleton-like document, usually we just query the first one or manage one.
  fields: [
    defineField({
      name: 'agencyName',
      title: 'Agency Name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline / Subheading',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Agency Website Link',
      type: 'url',
    }),
    defineField({
      name: 'icon',
      title: 'Agency Icon/Logo',
      type: 'image',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'serviceName', type: 'string', title: 'Service Name'}),
            defineField({name: 'serviceDescription', type: 'text', title: 'Description', rows: 2}),
            defineField({name: 'icon', type: 'string', title: 'Icon (Optional)'}),
          ]
        }
      ],
    }),
  ],
})
