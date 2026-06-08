// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    // baseURL: "/",
    pageTransition: { name: "slide-fade", mode: "out-in" },
    head: {
      title: "Vasilii Skovorodin · Lead Frontend Engineer",
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "description",
          content:
            "Lead frontend engineer with 5+ years building and scaling SaaS in FinTech and Web3 with Vue, Nuxt, React, and Next. Owns frontend architecture, performance, SSR/SEO, CI/CD, and team quality.",
        },

        // Open Graph
        { property: "og:title", content: "Vasilii Skovorodin · Lead Frontend Engineer" },
        {
          property: "og:description",
          content:
            "Lead frontend engineer, 5+ years in FinTech and Web3. Vue, Nuxt, React, Next, TypeScript. Architecture, performance (90+ Lighthouse), SSR/SEO, CI/CD, and mentoring.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://devninja.net" },
        { property: "og:image", content: "https://devninja.net/og-image.png" },
        { property: "og:site_name", content: "NinjaDev" },
        { property: "og:locale", content: "en_US" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Vasilii Skovorodin · Lead Frontend Engineer" },
        {
          name: "twitter:description",
          content:
            "Lead frontend engineer, 5+ years in FinTech and Web3. Vue, Nuxt, React, Next. Owns architecture, performance, SSR/SEO, and CI/CD.",
        },
        { name: "twitter:image", content: "https://devninja.net/og-image.png" },

        // Extra SEO
        { name: "author", content: "Vasilii Skovorodin" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#f3f3f6" },
        {
          name: "keywords",
          content:
            "Lead Frontend Engineer, Frontend Team Lead, Vasilii Skovorodin, NinjaDev, Vue, Nuxt, React, Next.js, TypeScript, SSR, SEO, CI/CD, DevOps, FinTech, Web3, Performance",
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
      "Roboto+Mono": "400..600",
      "Bricolage+Grotesque": "300..800",
    },
    display: "swap",
    preload: true,
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
    redisUrl: process.env.REDIS_URL,
    telegramAnalyticsSecret: process.env.TELEGRAM_ANALYTICS_SECRET,
  },
  // ssr: true,
});
