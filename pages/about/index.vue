<template>
  <section class="me me-about">
    <div class="about-container">
      <article class="animate__animated animate__fadeIn">
        <h2>About Me</h2>
        <p>
          I'm a frontend developer and team lead with over 4 years of hands-on
          experience, currently based in Melbourne, Australia. I specialize in
          building fast, scalable, and elegant user interfaces using Vue 3, Nuxt
          3, and React Native. My journey started as a self-taught developer and
          grew into a leadership role where I guide frontend teams, define best
          practices, and deliver clean, maintainable code.
        </p>
        <p>
          Having lived in different countries, including Azerbaijan, I’ve
          developed a strong cultural awareness and adaptability that enhances
          my collaboration within global teams. I'm naturally curious, always
          up-to-date with modern frontend trends, and enjoy contributing to
          large-scale systems where attention to detail and user experience are
          key.
        </p>
        <p>
          Outside of work, I’m passionate about snowboarding, rock climbing, and
          reptiles (yes—especially snakes!). I'm currently preparing for a move
          to Indonesia, where I’ll continue my remote work while embracing a new
          culture.
        </p>

        <h2>Hard Skills</h2>
        <ul>
          <li>
            <strong>Frontend Development:</strong> TypeScript, JavaScript,
            HTML5, SASS, CSS3, Pug
          </li>
          <li>
            <strong>Frameworks:</strong> Vue 3, Nuxt 3, React Native, Node.js,
            Firebase
          </li>
          <li>
            <strong>Tooling & DevOps:</strong> Git, Docker, Webpack, Vite,
            GitHub Actions
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
            Vue 3, Nuxt 3, React Native, TypeScript, Tailwind CSS, Node.js,
            Firebase
          </li>
          <li>
            REST API, Docker, Webpack, Vite, Sentry, SonarQube, Yandex Maps
          </li>
          <li>Jest, CI/CD, Performance Auditing, Pug, Figma Integration</li>
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
            <strong>GitHub:</strong>
            <a href="https://github.com/MrPinacolada" target="_blank"
              >MrPinacolada</a
            >
          </li>
          <li>
            <strong>Portfolio:</strong>
            <a href="https://mrpinacolada.github.io/ResumeSite" target="_blank"
              >mrpinacolada.github.io/ResumeSite</a
            >
          </li>
          <li>
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/mr-pinacolada" target="_blank"
              >linkedin.com/in/mr-pinacolada</a
            >
          </li>
          <li><strong>Location:</strong> Melbourne, VIC, Australia (for now)</li>
        </ul>
      </article>
    </div>

    <lottie-player
      v-if="anim?.ExpPage"
      class="animate__animated animate__fadeIn"
      autoplay
      loop
      mode="reverse-bounce"
      :src="anim.ExpPage"
      style="width: 620px"
    />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const anim = computed(
  () => useState("lottie_anims").value as unknown as Record<string, any>
);
</script>

<style scoped lang="scss">
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
</style>
