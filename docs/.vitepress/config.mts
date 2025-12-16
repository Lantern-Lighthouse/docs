import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Lantern Docs",
  description: "Documentation for Lantern projects",
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
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lantern-lighthouse' }
    ]
  }
})
