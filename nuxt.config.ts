// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    baseURL: "/ResumeSite/",
    pageTransition: { name: "slide-fade", mode: "out-in" },
    head: {
      title: "Resume pages",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
  css: ["~/assets/styles/index.scss"],
  modules: [
    "nuxt-icons",
    "@nuxtjs/google-fonts",
    "@nuxtjs/device",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      "Roboto+Mono": "200..700",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables/mixins.scss" as *;',
        },
      },
    },
    build: {
      sourcemap: true,
    },
  },
  router: {
    base: "/ResumeSite/",
  },
  target: "static",
  ssr: false,
});
