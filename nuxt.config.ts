// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
  css: ["~/assets/styles/index.scss"],
  modules: ["nuxt-icons", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Roboto+Mono": "200..700",
    },
  },

  ssr: false,
});
