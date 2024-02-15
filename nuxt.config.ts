// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css:'/<rootDir>/asserts/css'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
})
