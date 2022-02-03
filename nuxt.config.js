import Config from './config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'connex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/v-click-outside.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt', // https://www.npmjs.com/package/cookie-universal-nuxt
    [
      'nuxt-tailvue',
      {
        all: true,
        toast: {
          defaultProps: {
            timeout: 5,
          },
          defaults: { containerClasses: ['!z-[999999]', '!justify-end'] },
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
  },
  auth: {},

  layoutTransition: {
    name: 'fade',
    mode: 'out-in',
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
