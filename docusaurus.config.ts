import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Fictionlab Documentation',
  tagline: 'Documentation, tutorials & manuals for robots',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.fictionlab.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fictionlab', // Usually your GitHub org/user name.
  projectName: 'fictionlab.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/fictionlab/docs/edit/development/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
        },
        gtag: {
          trackingID: 'G-KLVJP3SWPW',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-5ZBFQ5RC',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: '/assets/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'fictionlab logo',
        src: 'img/branding/fictionlab_logo_gray.svg',
        srcDark: 'img/branding/fictionlab_logo_white.svg',
        width: '98px',
        height: '32px',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Robots',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'leoSidebar',
              label: 'Leo Rover',
            },
            {
              type: 'docSidebar',
              sidebarId: 'raphaSidebar',
              label: 'Rapha Rover',
            },
            {
              href: 'https://docs.turtlerover.com/',
              label: 'Turtle Rover (Legacy)',
            },
          ],
        },
        {
          href: 'https://www.leorover.tech/shop',
          label: 'Online Store',
          position: 'right',
        },
        {
          href: 'https://github.com/fictionlab/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://fictionlab.pl',
          label: 'Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'About us',
              href: 'https://www.leorover.tech/about-us',
            },
            {
              label: 'Blog',
              href: 'https://www.leorover.tech/blog',
            },
            {
              label: 'Tutorials',
              href: 'https://www.leorover.tech/developers',
            },
            {
              label: 'Online store',
              href: 'https://www.leorover.tech/shop',
            },
            {
              label: 'Terms and conditions',
              href: 'https://www.leorover.tech/terms-and-conditions',
            },
          ],
        },
        {
          title: 'Find us on:',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@leorover6230',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/leorover/',
            },
            {
              label: 'Online forum',
              href: 'https://forum.fictionlab.pl/',
            },
            {
              label: 'Facebook Community Group',
              href: 'https://www.facebook.com/groups/leorover',
            },
          ],
        },
        {
          items: [
            {
              html: `
              <a href="https://fictionlab.pl" target="_blank" rel="noreferrer noopener">
                <img src= /img/branding/fictionlab_logo_white.svg alt="Fictionlab" width="200" height='65' />
              </a>
            `,
            },
            {
              html: `
              Software is shared under MIT license. <br>
              CAD and mechanics design files are shared under Creative Commons BY-NC-SA.
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fictionlab sp. z o.o.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'powershell', 'yaml'],
    },
    announcementBar: {
      id: 'announcementBar_work-in-progress',
      content: `New docs are still work in progress! Expect dead links, missing tutorials etc. <br>
          For documentation visit <a href="https://docs.leorover.tech">docs.leorover.tech</a>`,
      backgroundColor: '#c57b2c',
      textColor: '#ffffff',
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
