// @ts-check

require('dotenv').config();

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn Agentic Engineering',
  tagline: 'A self-referential curriculum in Claude Code',
  favicon: 'img/favicon.ico',

  url: process.env.SITE_ORG && process.env.SITE_REPO
    ? `https://${process.env.SITE_ORG}.github.io`
    : 'http://localhost:3000',
  baseUrl: process.env.LOCAL === 'true'
    ? '/'
    : `/${process.env.SITE_REPO}/`,

  organizationName: process.env.SITE_ORG,
  projectName: process.env.SITE_REPO,
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Learn Agentic Engineering',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {
            href: 'https://github.com/doyeongk/Learn-Agentic-Engineering-In-Claude',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: 'Built with <a href="https://github.com/doyeongk/Learn-Agentic-Engineering-In-Claude">Learn Agentic Engineering In Claude</a>',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      'docusaurus-lunr-search',
      {
        languages: ['en'],
      },
    ],
  ],
};

module.exports = config;
