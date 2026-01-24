import {defineField, defineType} from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile (About Me)',
  type: 'document',
  fields: [
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
    }),
    defineField({
      name: 'roleDesignation',
      title: 'Role / Designations',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. Full Stack Developer, Cinematic Vlogger',
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform', 
              title: 'Platform', 
              type: 'string',
              options: {
                list: [
                    {title: 'GitHub', value: 'GITHUB'},
                    {title: 'LinkedIn', value: 'LINKEDIN'},
                    {title: 'Twitter / X', value: 'TWITTER'},
                    {title: 'Instagram', value: 'INSTAGRAM'},
                    {title: 'YouTube', value: 'YOUTUBE'},
                    {title: 'Other', value: 'OTHER'},
                ]
              }
            }),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'link', title: 'Link URL', type: 'url'}),
            defineField({name: 'iconEnum', title: 'Icon Enum', type: 'string', description: 'Internal icon identifier'}),
          ],
          preview: {
              select: {
                  title: 'platform',
                  subtitle: 'link'
              }
          }
        }
      ],
    }),
  ],
})
