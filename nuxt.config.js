require('dotenv').config({
  path: `.env.${process.env.ENVIRONMENT || 'v1'}`
})

export default {
  mode: 'spa',
  head: {
    titleTemplate: (title) => `${title ? `${title} - ` : ''}Wappalyzer`,
    meta: [
      { charset: 'utf-8' },
      { theme_color: '#4608ad' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~/assets/scss/styles.scss'],
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/mixins.js',
    { src: '~/plugins/prism', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/dotenv',
      { filename: `.env.${process.env.ENVIRONMENT || 'beta'}` }
    ],
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    ]
  ],
  modules: ['@nuxtjs/axios', 'nuxt-stripe-module'],
  axios: {
    baseURL: process.env.BASE_URL,
    secure: true,
    retry: { retries: 1, retryDelay: () => 500 }
  },
  stripe: {
    version: 'v3',
    publishableKey: process.env.STRIPE_PUBLIC_KEY
  },
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: {
            base: '#4608ad',
            lighten1: '#f0ebf9',
            darken1: '#32067c',
            darken2: '#150233'
          },
          accent: '#2196f3',
          secondary: '#fafafa',
          anchor: '#2196f3'
        }
      }
    }
  },
  build: {
    extend(config, ctx) {},
    followSymlinks: true
  }
}