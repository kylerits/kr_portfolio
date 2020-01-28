// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Expert at Web Design",
  siteUrl: "https://expertatwebdesign.com/",
  titleTemplate: "%s | Kyle Rodger's Portfolio",
  icon: {
    favicon: {
      src: "./src/favicon/favicon-32x32.png",
      sizes: [16, 32]
    },
    touchicon: {
      src: "./src/favicon/apple-touch-icon.png",
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: "gridsome-plugin-purgecss"
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/portfolio/*.md",
        typeName: "Project",
        route: "/:slug"
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Expert at Web Design",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        serviceWorkerPath: "service-worker.js",
        shortName: "KR Portfolio",
        themeColor: "#3B4A4D",
        backgroundColor: "#ffffff",
        icon: "static/favicon.png" // must be supplied!
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-151944939-1"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 60000, // default
        config: {
          "/projects/*": {
            changefreq: "weekly",
            priority: 0.5
          }
        }
      }
    },
    "gridsome-plugin-robots-txt"
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
