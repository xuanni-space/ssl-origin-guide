import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SSL ORIGIN Guide',
  description: 'Basic setup and troubleshooting for the SSL ORIGIN analogue console',
  lang: 'en-GB',
  // Must match the GitHub repository name, or styles will not load on GitHub Pages
  base: '/ssl-origin-guide/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuanni-space/ssl-origin-guide' }
    ],
    footer: {
      message: 'Unofficial study notes. Not affiliated with or endorsed by Solid State Logic.',
      copyright: 'Based on the SSL ORIGIN User Guide V2.0 (October 2022)'
    }
  }
})
