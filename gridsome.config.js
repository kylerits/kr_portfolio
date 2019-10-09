// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Kyle Rodgers',
  titleTemplate: '%s // Kyle Rodgers Portfolio',
  plugins: [{
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-plugin-purgecss'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/portfolio/*.md',
        typeName: 'Project',
        route: '/:slug'
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Kyle Rodgers Portfolio',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        shortName: 'KR Portfolio',
        themeColor: '#3B4A4D',
        backgroundColor: '#ffffff',
        icon: '~/assets/svgs/logo.svg' // must be supplied!
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
};