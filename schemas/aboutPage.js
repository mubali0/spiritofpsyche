export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'leadershipInfo',
      title: 'Leadership Information',
      type: 'text',
      rows: 4
    },
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 4
    },
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'points',
          title: 'Key Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Point Title',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Point Description',
                  type: 'text'
                }
              ]
            }
          ]
        },
        {
          name: 'conclusion',
          title: 'Conclusion Text',
          type: 'text'
        },
        {
          name: 'callToAction',
          title: 'Call To Action Text',
          type: 'text'
        }
      ]
    },
    {
      name: 'teamSectionTitle',
      title: 'Team Section Title',
      type: 'string'
    }
  ]
}