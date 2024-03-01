import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vstar Vinyl flooring",
  description: "Chinese Leading Vinyl Flooring Manufacturer and Exporter",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'PRODUCTS', link: '/markdown-examples' }
    // ],
    // 头部导航栏配置
    nav: [
      { text: 'Home', link: '/' },
      {
        text: "PRODUCTS",
        items: [
          { text: "LVT FLOORING", link: "/site/html-css" },
          { text: "RSVP FLOORING", link: "/site/framework" },
        ],
      },
      {
        text: "ABOUT US",
        link: '/'
      },

    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
