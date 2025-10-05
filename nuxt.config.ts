// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    baseURL: "/",
    pageTransition: { name: "slide-fade", mode: "out-in" },
    head: {
      title: "NinjaDev",
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
    base: "/",
  },
  nitro: {
    hooks: {
      "prerender:done": async () => {
        const fs = await import("fs/promises");
        const path = await import("path");
        const publicDir = path.resolve(".output/public");

        await fs.writeFile(path.join(publicDir, "CNAME"), "devninja.net");
      },
    },
  },
  target: "static",
  ssr: false,
});
