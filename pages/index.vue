<template>
  <section class="me me-title">
    <h3 class="text-black-monochrome font--h3">
      Hi! I'm Vasilii. <br />
      I'm a ninja frontend <br />
      developer.
    </h3>
    <client-only>
      <lottie-player
        v-if="props.majorAnim"
        autoplay
        loop
        mode="reverse-bounce"
        :src="props.majorAnim"
        style="width: 620px"
      >
      </lottie-player>
    </client-only>
  </section>
  <section class="me me-about">
    <div class="about-container">
      <article class="animate__animated animate__fadeIn">
        <h2>About Me</h2>
        <p>
          I'm a frontend developer and team lead with over 4 years of hands-on
          experience, currently based in Melbourne, Australia. I specialize in
          building fast, scalable, and elegant user interfaces using Vue 2/3,
          Nuxt 3/4, and React Native. My journey started as a self-taught
          developer and grew into a leadership role where I guide frontend
          teams, define best practices, and deliver clean, maintainable code.
        </p>
        <p>
          Having lived in different countries, I’ve developed a strong cultural
          awareness and adaptability that enhances my collaboration within
          global teams. I'm naturally curious, always up-to-date with modern
          frontend trends, and enjoy contributing to large-scale systems where
          attention to detail and user experience are key.
        </p>
        <p>
          Outside of work, I’m passionate about snowboarding, rock climbing, and
          reptiles (yes—especially snakes!). I'm currently preparing for a move
          to Australia, where I’ll continue my remote work while embracing a new
          culture.
        </p>

        <h2>Hard Skills</h2>
        <ul>
          <li>
            <strong>Frontend Development:</strong> TypeScript, JavaScript,
            HTML5, SASS, CSS3, Pug
          </li>
          <li>
            <strong>Frameworks:</strong> Vue 2/3, Nuxt 3/4, React Native,
            Nest.js
          </li>
          <li>
            <strong>Tooling & DevOps:</strong> Git, Docker, Webpack, Vite,
            GitHub Actions, Coolify, GoDaddy, Cloudflare
          </li>
          <li>
            <strong>Testing & Monitoring:</strong> Jest, Sentry, SonarQube,
            Lighthouse
          </li>
          <li>
            <strong>Languages:</strong> English (C1), Russian (Native), Spanish
            (A1)
          </li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>
            <strong>Core Frameworks:</strong> Vue 2/3, Nuxt 3/4, Nest.js, React
            Native, Node.js
          </li>
          <li>
            <strong>Languages:</strong> TypeScript, JavaScript, HTML5, CSS3,
            SCSS, Pug
          </li>
          <li>
            <strong>Styling & UI:</strong> TailwindCSS, SASS, Headless UI,
            Storybook
          </li>
          <li>
            <strong>Build & DevOps:</strong> Vite, Webpack, pnpm, GitHub
            Actions, GitLab CI, Docker
          </li>
          <li>
            <strong>Deployment & Hosting:</strong> Vercel, Netlify, Coolify,
            Cloudflare, Nginx
          </li>
          <li>
            <strong>APIs & Integrations:</strong> REST, WebSockets, Firebase,
            TonConnect, Stripe
          </li>
          <li>
            <strong>Testing & QA:</strong> Jest, Vitest, Cypress, Playwright
          </li>
          <li>
            <strong>Monitoring & Analytics:</strong> Sentry, Lighthouse,
            SonarQube, Google Analytics
          </li>
          <li>
            <strong>Version Control & Collaboration:</strong> Git, GitHub,
            GitLab, Linear, Figma
          </li>
          <li>
            <strong>State Management:</strong> Pinia, Vuex, Zustand, Context API
          </li>
          <li>
            <strong>Mobile & Desktop:</strong> React Native, Expo, Capacitor,
            Electron
          </li>
          <li>
            <strong>Performance & SEO:</strong> Core Web Vitals, SSR/SSG, PWA,
            Web Workers
          </li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li>Strong leadership and mentoring</li>
          <li>Problem-solving mindset</li>
          <li>UX-oriented thinking</li>
          <li>Clear communication in cross-functional teams</li>
          <li>Adaptive, resilient, and growth-oriented personality</li>
        </ul>

        <h2>Education & Career</h2>
        <p>
          I'm a self-taught frontend developer with over 4 years of experience,
          currently working as a team lead. I’ve led development at Gentlyx,
          SwitchCase, and other tech companies, contributing to scalable
          platforms, SSR-based marketing systems, and high-load apps. My core
          motivation lies in clean UI, solid architecture, and strong teamwork.
        </p>
        <p>
          I graduated from Kostroma Polytechnic College in Microprocessor
          Electronics in 2016. I continue to grow by learning new technologies
          like Flutter and improving my proficiency in mobile development with
          React Native.
        </p>

        <h2>Contact Information</h2>
        <ul>
          <li><strong>Email:</strong> vasiasko112@gmail.com</li>
          <li>
            <strong>Telegram:</strong>
            <a href="https://t.me/Nkanka44" target="_blank">@Nkanka44</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/mr-pinacolada" target="_blank"
              >linkedin.com/in/mr-pinacolada</a
            >
          </li>
          <li>
            <strong>Location:</strong> Melbourne, VIC, Australia (for now)
          </li>
        </ul>
      </article>
    </div>

    <client-only>
      <lottie-player
        v-if="anim?.ExpPage"
        class="animate__animated animate__fadeIn"
        autoplay
        loop
        mode="reverse-bounce"
        :src="anim.ExpPage"
        style="width: 620px"
      />
    </client-only>
  </section>

  <section class="me me-portfolio">
    <div class="portfolio-container">
      <h2 class="portfolio-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card animate__animated animate__fadeInUp">
          <div class="project-image">
            <img src="/assets/img/rwa-estate.jpg" alt="Real Estate Platform" />
            <div class="project-overlay">
              <div class="project-links">
                <a
                  href="https://www.rwa-estate.com/"
                  target="_blank"
                  class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Real Estate Platform</h3>
            <p>
              Full-stack real estate platform with Vue 3, Nuxt 3, and
              TypeScript. Features property search, virtual tours, and admin
              dashboard.
            </p>
            <div class="project-tags">
              <span class="tag">Nuxt 4</span>
              <span class="tag">TypeScript 5</span>
              <span class="tag">TensorFlow.js</span>
              <span class="tag">WebGL</span>
              <span class="tag">Three.js</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.1s"
        >
          <div class="project-image">
            <img src="/assets/img/newtify.png" alt="Newtify" />
            <div class="project-overlay">
              <div class="project-links">
                <a
                  href="https://x.com/newtifyapp?lang=en"
                  target="_blank"
                  class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Newtify</h3>
            <p>
              Swipe to earn 👆➡️ Your AI-powered guide to Web3 updates. Like or
              Dislike news to personalize your feed. Earn bonuses when swiping
              and exchange for real money.
            </p>
            <div class="project-tags">
              <span class="tag">React Native</span>
              <span class="tag">Expo 50</span>
              <span class="tag">OpenAI GPT-4</span>
              <span class="tag">TensorFlow Lite</span>
              <span class="tag">WebRTC</span>
              <span class="tag">GraphQL</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.2s"
        >
          <div class="project-image">
            <img src="/assets/img/buzz.png" alt="Buzz Social Platform" />
            <div class="project-overlay">
              <div class="project-links">
                <a href="https://buzz.ai/" target="_blank" class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>
              Buzz - The Frictionless Sales Engagement Platform for all Teams
            </h3>
            <p>
              The world's first all-in-one sales engagement platform that allows
              your team to engage more prospects and close more deals without
              software exhaustion.
            </p>
            <div class="project-tags">
              <span class="tag">Nuxt 4</span>
              <span class="tag">Vue 3.4</span>
              <span class="tag">Nitro Engine</span>
              <span class="tag">Claude AI</span>
              <span class="tag">WebAssembly</span>
              <span class="tag">Supabase</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.3s"
        >
          <div class="project-image">
            <img src="/assets/img/tokenizer.png" alt="Tokenizer Tool" />
            <div class="project-overlay">
              <div class="project-links">
                <a
                  href="https://tokenizer.estate/"
                  target="_blank"
                  class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Tokenizer.Estate</h3>
            <p>Unlock Global Real Estate Capital with Tokenization</p>
            <div class="project-tags">
              <span class="tag">Vite 5</span>
              <span class="tag">Rust + WASM</span>
              <span class="tag">PyTorch.js</span>
              <span class="tag">Hugging Face</span>
              <span class="tag">Web Workers</span>
              <span class="tag">WebGPU</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.4s"
        >
          <div class="project-image">
            <img src="/assets/img/autoimpirt.jpg" alt="Auto Import Scanner" />
            <div class="project-overlay">
              <div class="project-links">
                <a
                  href="https://avtoimportrus.ru/"
                  target="_blank"
                  class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>AutoImport</h3>
            <p>
              AutoImport is a reliable supplier of cars from China, Korea,
              Japan, the UAE, and the USA to Russia.
            </p>
            <div class="project-tags">
              <span class="tag">Nuxt 4</span>
              <span class="tag">Tesseract.js</span>
              <span class="tag">Computer Vision</span>
              <span class="tag">Edge Runtime</span>
              <span class="tag">AI Automation</span>
              <span class="tag">Vercel AI SDK</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.5s"
        >
          <div class="project-image">
            <img src="/assets/img/rwa-scan.jpg" alt="Rwa-Scan" />
            <div class="project-overlay">
              <div class="project-links">
                <a
                  href="https://www.rwa-scan.com/"
                  target="_blank"
                  class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>RWA-Scan</h3>
            <p>
              Discover tokenized assets, real estate, commodities, and more with
              RWA Scan. Track market trends, token prices, and trading volume
              across various blockchain networks. Explore a centralized hub for
              global tokenized projects and investments.",
            </p>
            <div class="project-tags">
              <span class="tag">SvelteKit 2</span>
              <span class="tag">Svelte 5</span>
              <span class="tag">Langchain.js</span>
              <span class="tag">Ollama</span>
              <span class="tag">WebXR</span>
              <span class="tag">tRPC</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.6s"
        >
          <div class="project-image">
            <img src="/assets/img/gentlyx-og-width-new.png" alt="Gentlyx Platform" />
            <div class="project-overlay">
              <div class="project-links">
                <a
                  href="https://gentlyx.com/"
                  target="_blank"
                  class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Gentlyx - Content Creator Platform (18+)</h3>
            <p>
              Advanced platform for content creators with AI-powered smart
              search algorithms, personalized content discovery, and seamless
              creator-user interactions. Features crypto/fiat payment
              integration and privacy-focused architecture.
            </p>
            <div class="project-tags">
              <span class="tag">Nuxt 4</span>
              <span class="tag">TypeScript 5</span>
              <span class="tag">AI Algorithms</span>
              <span class="tag">Crypto Payments</span>
              <span class="tag">WebRTC</span>
              <span class="tag">Redis</span>
            </div>
          </div>
        </div>

        <div
          class="project-card animate__animated animate__fadeInUp"
          style="animation-delay: 0.7s"
        >
          <div class="project-image">
            <img
              src="/assets/img/2uit.png"
              alt="2UIT Development Agency"
            />
            <div class="project-overlay">
              <div class="project-links">
                <a href="https://2uit.ru/" target="_blank" class="project-link"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>2UIT - IT Development Agency</h3>
            <p>
              Comprehensive IT development agency specializing in mobile & web
              development, business automation, CRM/ERP systems. Successfully
              delivered enterprise solutions for top Russian companies including
              Samolet Group and Bashgeofizika.
            </p>
            <div class="project-tags">
              <span class="tag">Vue.js 3</span>
              <span class="tag">Nuxt.js 3</span>
              <span class="tag">React Native</span>
              <span class="tag">Laravel</span>
              <span class="tag">CRM/ERP</span>
              <span class="tag">Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

interface IProps {
  majorAnim: Record<string, any> | null;
}

const props = defineProps<IProps>();

const anim = computed(
  () => useState("lottie_anims").value as unknown as Record<string, any>
);
// this.MajPage = await this.fetchData(
//           "https://assets8.lottiefiles.com/packages/lf20_ioJYvK.json"
//         );
//         this.ExpPage = await this.fetchData(
//           "https://assets2.lottiefiles.com/packages/lf20_lrdkqhnc.json"
//         );
//         this.SkillPage = await this.fetchData(
//           "https://assets3.lottiefiles.com/packages/lf20_jvkbug4h.json"
//         );
//         this.WorksPage = await this.fetchData(
//           "https://assets3.lottiefiles.com/packages/lf20_jhaabiai.json"
//         );
</script>

<style scoped lang="scss">
.me-title {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  @media (max-width: 65rem) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    lottie-player {
      max-width: 100vw;
      max-height: 300px;
    }
  }
}

.me-about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  @media (max-width: 65rem) {
    flex-direction: column;
    padding-top: 20px;
    lottie-player {
      max-width: 100vw;
      max-height: 300px;
    }
  }

  .about-container {
    width: 50%;
    height: 75%;
    padding: 30px;
    border-radius: 20px;
    background-color: var(--white-monochrome);
    box-shadow: var(--shadow-light);
    overflow: hidden;
    @media (max-width: 65rem) {
      width: 100%;
    }
    article {
      width: 100%;
      height: 100%;
      padding-right: 5px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--gray-monochrome-40);
        border-radius: 10px;
      }

      &::-webkit-scrollbar-track {
        background-color: var(--gray-monochrome-20);
      }
      h2 {
        margin-top: 10px;
        color: var(--black-monochrome);
      }

      ul {
        margin-left: 20px;
        list-style-type: disc;

        li {
          margin: 5px 0;
        }
      }

      a {
        color: var(--violet-main);
        text-decoration: underline;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

.me-portfolio {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-bottom: 80px;
  cursor: default;

  @media (max-width: 65rem) {
    flex-direction: column;
    padding-top: 20px;

    .portfolio-animation {
      max-width: 100vw;
      max-height: 300px;
      order: -1;
    }
  }

  .portfolio-container {
    flex: 1;
    padding: 30px;
    border-radius: 20px;
    background-color: var(--white-monochrome);
    box-shadow: var(--shadow-light);

    @media (max-width: 65rem) {
      width: 100%;
    }

    .portfolio-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--black-monochrome);
      text-align: center;
      margin-bottom: 40px;

      @media (max-width: 65rem) {
        font-size: 2rem;
        margin-bottom: 30px;
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;

      @media (max-width: 65rem) {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    .project-card {
      background: var(--white-monochrome);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid var(--gray-monochrome-20);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      .project-image {
        position: relative;
        height: 200px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;

          .project-links {
            display: flex;
            gap: 15px;

            .project-link {
              padding: 10px 20px;
              background: var(--violet-main);
              color: white;
              text-decoration: none;
              border-radius: 25px;
              font-weight: 600;
              transition: all 0.3s ease;

              &:hover {
                background: var(--violet-secondary, #7c3aed);
                transform: translateY(-2px);
              }
            }
          }
        }

        &:hover {
          .project-overlay {
            opacity: 1;
          }

          img {
            transform: scale(1.05);
          }
        }
      }

      .project-content {
        padding: 25px;

        h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black-monochrome);
          margin-bottom: 12px;
        }

        p {
          color: var(--gray-monochrome-60, #6b7280);
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          .tag {
            background: linear-gradient(
              135deg,
              var(--violet-main),
              var(--violet-secondary, #7c3aed)
            );
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            white-space: nowrap;
          }
        }
      }
    }
  }

  .portfolio-animation {
    flex-shrink: 0;
  }
}
</style>
