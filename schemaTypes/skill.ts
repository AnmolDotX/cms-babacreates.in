import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Language', value: 'language'},
          {title: 'Framework', value: 'framework'},
          {title: 'Tool', value: 'tool'},
          {title: 'Soft Skill', value: 'soft_skill'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (React Icon Name or SVG)',
      type: 'string',
      description: 'e.g. FaReact or an SVG string',
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency (1-10)',
      type: 'number',
      validation: (rule) => rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
