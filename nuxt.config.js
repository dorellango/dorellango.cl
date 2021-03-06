import path from 'path'
import manifest from './contents/manifest.js'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Diego Orellana',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'My personal portfolio & blog'
    }
    ],
    link: [
      {
        rel: 'icon', type: 'image/png', href: '/favicon.png'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kalam&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Google Analytics
  */
  googleAnalytics: {
    id: 'UA-98296446-3'
  },
  /*
  ** Generate routes
  */
  generate: {
    routes: ['404']
      .concat(manifest.map(a => `/articles/${a}`))
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      })
    }
  }
}
