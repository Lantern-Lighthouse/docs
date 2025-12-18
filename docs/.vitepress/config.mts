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
        text: 'Atheja API',
        items: [
          { text: 'Overview', link: '/atheja/' },
          { text: 'Config', link: '/atheja/config' },
          { text: 'Database', link: '/atheja/database' }
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
