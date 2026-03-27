import { defineField, defineType } from 'sanity'

export const waitlist = defineType({
  name: 'waitlist',
  title: 'Waitlist',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Invited', value: 'invited' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'joinedAt',
      title: 'Joined At',
      type: 'datetime',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Where this signup came from (e.g. educrm-products-page)',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'status',
    },
  },
})
