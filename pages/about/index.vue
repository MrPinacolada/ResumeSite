<template>
  <section class="me me-about">
    <div class="about-container">
      <article class="animate__animated animate__fadeIn">
        <h2>About Me</h2>
        <p>
          I am an enthusiastic and self-motivated frontend developer with a
          strong passion for learning and staying up-to-date with the latest web
          development trends. Based in Azerbaijan, I have pursued web
          development as my area of expertise. Having lived in different
          countries, I value diverse cultures and ideas, which have shaped my
          adaptable and curious nature. I thrive in large-scale projects where I
          can explore my potential and utilize my skills effectively.
        </p>
        <p>
          I bring humor and positivity to every team I join, building rapport
          naturally with colleagues. Conflict resolution and self-irony are
          among my strengths. In addition to development, I’m passionate about
          snowboarding, rock climbing, and snakes. I plan to relocate to
          Indonesia soon, where I’ll stay for a few years.
        </p>
        <p>
          Thank you for your attention! I look forward to contributing to new
          projects and continuing my professional growth.
        </p>

        <h2>Hard Skills</h2>
        <ul>
          <li>
            <strong>Frontend Development:</strong> HTML5, SASS, TypeScript
          </li>
          <li><strong>Frameworks:</strong> Vue 3, Nuxt 3, React Native</li>
          <li><strong>Backend:</strong> Firebase</li>
          <li><strong>Version Control:</strong> Git</li>
          <li>
            <strong>Languages:</strong> English (C1), Russian (Fluent), Spanish
            (A1)
          </li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>TypeScript, Vue 3, Nuxt 3, React Native, Firebase</li>
          <li>REST, Node.js, Docker, Pug, Tailwind CSS</li>
          <li>Vite, Webpack, Yandex Map, Sentry, SonarQube, Jest</li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li>Problem-solving</li>
          <li>Team player with leadership potential</li>
          <li>Self-reliant and independent thinker</li>
          <li>Adaptable and resilient under pressure</li>
          <li>Positive mindset, rarely angry or bored</li>
        </ul>

        <h2>Education & Career</h2>
        <p>
          I am a self-taught frontend developer with three years of experience.
          For nearly a year, I’ve worked at a sales arrangement company as a
          frontend developer. I’m continuously learning React Native and
          exploring its components, with plans to dive deeper into both React
          Native and Flutter for personal growth.
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
          <li><strong>Location:</strong> Baku, AZN</li>
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
