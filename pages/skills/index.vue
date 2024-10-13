<template>
  <section class="me me-skills">
    <lottie-player
      v-if="anim?.SkillPage"
      class="animate__animated animate__fadeIn"
      autoplay
      loop
      mode="reverse-bounce"
      :src="anim.SkillPage"
      style="width: 620px"
    />
    <Swiper
      class="animate__animated animate__fadeIn"
      :direction="$device.isDesktop ? 'horizontal' : 'vertical'"
      :scrollbar="{
        hide: true,
      }"
      :modules="[Scrollbar, Grid, Autoplay]"
      :slidesPerView="4"
      :spaceBetween="50"
      :grid="{
        rows: $device.isDesktop ? 2 : 1,
      }"
      loop
      :autoplay="{
        delay: 2500,
        pauseOnMouseEnter: true,
      }"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="item in SkillsArr" :key="item.title">
        <div class="skillbox">
          <Suspense>
            <base-icon :name="item.icon" filled size="50px" />
          </Suspense>
          <p>{{ item.title }}</p>
          <div class="skillbox-card">
            <p class="font--b5-4">{{ item.text }}</p>
          </div>
          <div class="skillbox-border"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Grid, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import "swiper/css";

definePageMeta({
  layout: "default",
});

type Skill = { icon: string; text: string; title: string };

const anim = computed(
  () => useState("lottie_anims").value as unknown as Record<string, any>
);

const swiperInst = ref<typeof Swiper | null>(null);

const onSwiper = (swiper: any) => {
  swiperInst.value = swiper;
};

const SkillsArr: Skill[] = [
  {
    icon: "nuxt",
    text: `Create production-grade full-stack web apps and websites.`,
    title: "Nuxt 3",
  },
  {
    icon: "typescript",
    text: "High-level programming language that adds static typing with optional type annotations to JavaScript.",
    title: "TypeScript",
  },
  {
    icon: "sass",
    text: "Language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    title: "Sass",
  },
  {
    icon: "vue-vuejs",
    text: "Front end JavaScript framework for building user interfaces and single-page applications.",
    title: "Vue 2/3",
  },

  {
    icon: "reactts",
    text: "It's a best-in-class JavaScript library for building user interfaces.",
    title: "React Native",
  },
  {
    icon: "node",
    text: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    title: "Node.js",
  },
  {
    icon: "docker",
    text: "Docker is a platform designed to help developers build, share, and run container applications.",
    title: "Docker",
  },
  {
    icon: "webpack",
    text: "Module bundler",
    title: "Webpack",
  },
  {
    icon: "yandex",
    text: "This API is a solutions that can integrate maps in your website or app",
    title: "Yandex Map",
  },
  {
    icon: "maps",
    text: "This API is a solutions that can integrate maps in your website or app",
    title: "Google Map",
  },
  {
    icon: "sentry",
    text: "Platform that empowers developers to fix application problems without compromising on velocity.",
    title: "Sentry",
  },
  {
    icon: "sonarqube",
    text: "SonarQube is your Clean Code solution that deploys anywhere.",
    title: "SonarQube",
  },

  {
    icon: "jest",
    text: "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
    title: "Jest",
  },

  {
    icon: "vite",
    text: "Local development server which used by default by the Vue project templates.",
    title: "Vite",
  },
  {
    icon: "tailwind",
    text: "Open source CSS framework. ",
    title: "Tailwind",
  },
  {
    icon: "pug",
    text: "Compiler and interpreter for the Raku programming language.",
    title: "Pugjs",
  },
  {
    icon: "firebase",
    text: "Set of backend cloud computing services and application development platforms provided by Google.",
    title: "Firebase",
  },
  {
    icon: "pineapple",
    text: "Pinia is a store library and state management framework for Vue.js.",
    title: "Pinia",
  },
  {
    icon: "rest",
    text: "Application programming interface is a way for computer programs to communicate with each other.",
    title: "REST API",
  },
];
</script>

<style scoped lang="scss">
.me-skills {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 95rem) {
    display: flex;
    flex-direction: column;
    height: 100%;

    lottie-player {
      max-height: 200px;
      max-width: calc(100vw - 60px);
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    max-height: 320px;
    padding: 20px;
    @media (max-width: 65rem) {
      max-width: calc(100vw - 60px);
      max-height: 100%;
    }
  }

  .swiper-slide {
    position: relative;
    text-align: center;
    font-size: 18px;
    background: var(--gray-monochrome-20);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow: visible;
    @media (max-width: 65rem) {
      height: 100px;
    }
    .skillbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 5px;
      @media (max-width: 65rem) {
        max-width: calc(100vw - 60px);
        height: 100px;
      }
      &-card {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: var(--violet-secondary-light);
        opacity: 0;
        border-radius: 15px;
        z-index: 11;
        padding: 5px;
        transition: transform 0.4s ease, opacity 0.3s ease;
      }
      &-border {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border: 2px dashed black;
        z-index: -1;
        display: none;
        border-radius: 15px;
        z-index: 10;
        background-color: var(--white-contrast-66);
      }
    }
    .skillbox:hover .skillbox-border {
      display: block;
    }
    .skillbox:hover .skillbox-card {
      transform: translate(-15px, -15px);
      opacity: 1;
    }
  }
}
</style>
