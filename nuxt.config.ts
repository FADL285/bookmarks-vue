// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: ""
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon"],
  devtools: { enabled: true },
  ssr: false,
  experimental: {
    inlineSSRStyles: false,
    viewTransition: true,
    typedPages: true
  }
})
