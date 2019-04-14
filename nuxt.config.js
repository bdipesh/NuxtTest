const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*                              
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/myicons.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios'
    /*{ src: '~/plugins/common/echarts.js', ssr: false }*/
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
      baseURL: ''
  },
 auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api-token-auth/', method: 'post', propertyName: 'token' },
          user: { url: 'api-token-auth/', method: 'get', propertyName: false },
          logout: false
        },
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: 'index',
      logout: '/account/login',
      callback: '/account/login',
      home: 'index'
    },
    rewriteRedirects: false,
    fullPathRedirect: false,
    localStorage: false
   },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
router: {
  middleware: ['auth']
}
