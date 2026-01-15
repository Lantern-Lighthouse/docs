import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Lantern Docs",
  description: "Documentation for Lantern projects",
  rewrites: {
    'en/:rest*': ':rest*'
  },

  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Atheja', link: '/atheja/' }
    ],

    sidebar: [
      {
        text: 'Atheja',
        items: [
          { text: 'Overview', link: '/atheja/' },
          { text: 'Config', link: '/atheja/config' },
          { text: 'Database', link: '/atheja/database' },
          {
            text: 'API',
            base: '/atheja/api/',
            items: [
              { text: 'Overview', link: '/' },
              { text: 'Database', link: 'db' },
              { text: 'User', link: 'user' },
              {
                text: 'Search',
                base: '/atheja/api/search/',
                items: [
                  { text: 'Categories', link: 'categories' },
                  { text: 'Tags', link: 'tags' },
                  { text: 'Entries', link: 'entries' },
                ]
              },
              { text: 'Ribbit', link: 'ribbit' },
              { text: 'Reports', link: 'reports' },
            ]
          }
        ]
      }
    ],

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lantern-lighthouse' }
    ]
  },
  locales: {
    root: { label: 'English', lang: 'en-US', dir: 'ltr' },
  }
})
