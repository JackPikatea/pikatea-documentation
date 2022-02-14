const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
     //Hack: Make clicking on the logo go to home url
    ["script",
      {},
      `
    const logoUrlChanger = setInterval(function() {
    //Anchor above the logo image
    const homeEls = document.getElementsByClassName("home-link");
    if(homeEls.length > 0) {
      const homeEl = homeEls[0];
      homeEl.setAttribute("href", "https://pikatea.com");
      homeEl.setAttribute("onclick", "document.location='https://pikatea.com';return false;");
      clearInterval(logoUrlChanger);
    }

    //Actual logo image
    const logoEls = document.getElementsByClassName("logo")
    if(logoEls.length > 0) {
      const logoEl = logoEls[0]
      logoEl.setAttribute("onclick", "document.location='https://pikatea.com';return false;");
      clearInterval(logoUrlChanger);
    }
    }, 1000) 

  `
    ]
  ],
  base: '/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://cdn.shopify.com/s/files/1/0322/9637/0235/files/Cropped_logo_210x.png?v=1590650137',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Store Page',
        link: 'https://www.pikatea.com/',
        target:'_self', 
        rel:false 
      },
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Discord',
        link: 'https://www.pikatea.com/discord'
      }
    ],
    sidebar: [
      {
        title: 'Introduction',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/', 'Getting Started']
          // ['contribute','Suggest Changes'],
          // ['Need']
        ]
      },
      {
        title: 'Pikatea Macropad GB3',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/PikateaMacropadGB3/', 'Pikatea Macropad GB3 User Guide'],
          ['/PikateaMacropadGB3/pikatea-macropad-gb3-kit-assembly-guide', 'Pikatea Macropad GB3 Kit Assembly Guide'],
        ]
      },
      {
        title: 'Pikatea Macropad FK1',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/PikateaMacropadFK1/', 'Pikatea Macropad FK1 User Guide'],
          ['/PikateaMacropadFK1/pikatea-macropad-fk1-kit-assembly-guide', 'Pikatea Macropad FK1 Kit Assembly Guide'],
        ]
      },
      {
        title: 'Other Guides',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/guide/', 'Extra Pikatea Macropad Tips, Tricks, and Ideas'],
          ['/guide/firmware-download-and-update-guide', 'Firmware Downloads and Update Guide'],
        ]
      },
      {
        title: 'FinnGus Keyboard Kit',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/FinnGus/finngus-kit-assembly-guide', 'FinnGus Keyboard Kit Assembly and User Guide'],
        ]
      },
      {
        title: 'Pikatea Macropad GB2',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/PikateaMacropadGB2/', 'Pikatea Macropad GB2 User Guide'],
          ['/PikateaMacropadGB2/pikatea-macropad-gb2-kit-assembly-guide', 'Pikatea Macropad GB2 Kit Assembly Guide'],
        ]
      },
      {
        title: 'Macropad1x5',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/Macropad1x5/', 'Macropad1x5 User Guide'],
          ['/Macropad1x5/macropad1x5-kit-assembly-guide', 'Macropad1x5 Kit Assembly Guide'],
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
