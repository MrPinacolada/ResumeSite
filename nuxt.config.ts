// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    // baseURL: "/",
    pageTransition: { name: "slide-fade", mode: "out-in" },
    head: {
      title: "NinjaDev — Vasilii Skovorodin",
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "description",
          content:
            "Frontend Ninja Developer with 4+ years of experience in Vue, Nuxt, and React Native. Building scalable, high-performance interfaces and leading teams to deliver products used by thousands.",
        },

        // Open Graph
        { property: "og:title", content: "NinjaDev — Vasilii Skovorodin" },
        {
          property: "og:description",
          content:
            "Creative and pragmatic frontend ninja with 4+ years of experience in Vue, Nuxt, and React Native. Passionate about clean UI, performance optimization, and scalable architecture.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://devninja.net" },
        { property: "og:image", content: "https://devninja.net/og-image.png" },
        { property: "og:site_name", content: "NinjaDev" },
        { property: "og:locale", content: "en_US" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "NinjaDev — Vasilii Skovorodin" },
        {
          name: "twitter:description",
          content:
            "Frontend Ninja Developer with 4+ years of experience in Vue, Nuxt, and React Native. Focused on clean UI, performance, and scalable frontend systems.",
        },
        { name: "twitter:image", content: "https://devninja.net/og-image.png" },

        // Extra SEO
        { name: "author", content: "Vasilii Skovorodin" },
        { name: "robots", content: "index, follow" },
        {
          name: "keywords",
          content:
            "Frontend Developer, NinjaDev, Vasilii Skovorodin, Vue, Nuxt, React Native, TypeScript, Web Performance, Team Lead",
        },
      ],
      link: [
        { rel: "canonical", href: "https://devninja.net" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
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
  // router: {
  //   base: "/",
  // },
  nitro: {
    preset: "vercel",
    // hooks: {
    //   "prerender:done": async () => {
    //     const fs = await import("fs/promises");
    //     const path = await import("path");
    //     const publicDir = path.resolve(".output/public");

    //     await fs.writeFile(path.join(publicDir, "CNAME"), "devninja.net");
    //   },
    // },
  },
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramWebhookSecret: process.env.TELEGRAM_WEBHOOK_SECRET,
    // Upstash KV (Redis REST)
    kvRestApiUrl: process.env.KV_REST_API_URL,
    kvRestApiToken: process.env.KV_REST_API_TOKEN,
  },
  // ssr: true,
});
