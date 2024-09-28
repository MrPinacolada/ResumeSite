// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
  css: ["~/assets/styles/index.scss"],
  modules: ["nuxt-icons"],
  ssr: false,
});
