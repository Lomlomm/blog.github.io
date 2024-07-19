// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  modules: [
    '@nuxt/fonts',
    "@nuxt/icon",
    '@nuxt/content',
    "@nuxt/image",
  ],
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: ["mdb-vue-ui-kit"],
  },
  content: {
  },
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
},
  
})