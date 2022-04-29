export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '626c64ac68af03008e1e0910',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rrfv4hcv',
                  apiId: '74f558fc-1edd-4e0a-acff-887aebc5ea2e'
                },
                {
                  buildHookId: '626c64ac1abb2802987696ad',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ydg1mmoq',
                  apiId: '17a1c560-82a3-4975-afcf-6c64120bbefc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cseto/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ydg1mmoq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
