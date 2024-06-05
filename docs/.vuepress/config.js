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
        title: 'Pikatea Guides',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          //getting started should contain an introduction and an "index" for other guides
          ['/', 'Getting Started'],
          ['/programming', 'Programming/Software'],
          ['/guide/twitch', 'Twitch Stream Commands and Guide']
        ]
      },
      // {
      //   title: 'Universal Assembly Guide',   // required
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     ['/generic-guide', 'Regular (MX)'],
      //     ['/generic-low-profile-guide', 'Low-Profile (Choc)'],
      //   ]
      // },
      {
        title: 'Assembly Guides',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/AssemblyGuides/wip', 'Cerberus'],
          ['/AssemblyGuides/wip', 'Long Boi'],
          ['/AssemblyGuides/sketchy-sketchy-suplimental-guide', 'Sketchy Sketchy'],
          ['/AssemblyGuides/the-richard-macropad-kit-assembly-guide', 'The Richard Macropad'],
          ['/AssemblyGuides/kp69-kit-assembly-guide', 'Pikatea Keyboard KP69'],
          ['/AssemblyGuides/pikatea-macropad-r26-led-desktop-kit-assembly-guide', 'Pikatea Macropad R26'],
          ['/AssemblyGuides/pikatea-macropad-fk1-kit-assembly-guide', 'Pikatea Macropad FK1'],
          ['/AssemblyGuides/pikatea-macropad-gb4-kit-assembly-guide', 'Pikatea Macropad GB4'],
          ['/AssemblyGuides/funky60-build-guide', 'Funky60'],
          ['/AssemblyGuides/finngus-kit-assembly-guide', 'Pikatea Keyboard FinnGus'],
          ['/AssemblyGuides/pikatea-macropad-gb3-kit-assembly-guide', 'Pikatea Macropad GB3'],
          ['/AssemblyGuides/macropad1x5-kit-assembly-guide', 'Macropad5x1'],
          ['/AssemblyGuides/pikatea-macropad-gb2-kit-assembly-guide', 'Pikatea Macropad GB2']
        ]
      },
      {
        title: 'Example Macros and Uses',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/guide/muting-microphone-globally', 'Muting Microphone Globally'],
          ['/guide/type-out-a-phrase', 'Type Out A Phrase'],
          ['/guide/controlling-obs', 'Control OBS with Encoder/Knob'],
          ['/guide/controlling-music', 'Controlling Music'],
          ['/guide/software-audio-mixing', 'Software Audio Mixing'],
          ['/guide/focus-a-program-before-activating', 'Focus A Program Before Activating A Macro'],
          // ['/guide/interfacing-with-photoshop', 'Interfacing With Photoshop'],
          ['/guide/control-lightroom', 'Interfacing With Lightroom'],
          ['/guide/scrubbing-a-timeline', 'Scrubbing A Video Timeline'],
          ['/guide/ahk', 'Installing And Using AutoHotKey'],
          ['/guide/controlling-a-smart-device', 'Controlling A Smart Device']
        ]
      },
      {
        title: '3D Models and Firmware',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/DownloadsAndFiles/firmware-download-list', 'Firmware Downloads'],
          ['/DownloadsAndFiles/cad-files', '3D/CAD Files'],
          ['/DownloadsAndFiles/repos', 'Repo'],
          ['/guide/hex-firmware', '.hex file guide'],
          ['/guide/uf2-firmware', '.uf2 file guide']
        ]
      }
      // {
      //   title: 'Other',   // required
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     ['/guide/twitch', 'Twitch Stream Commands and Guide'],
      //   ]
      // }
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
