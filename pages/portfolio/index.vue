<template>
  <section class="me me-portfolio">
    <div class="work-box animate__a nimated animate__fadeIn">
      <button
        v-for="(item, index) in works"
        :key="item.title"
        class="box font--b4 text-black-monochrome"
        :class="{ 'box-active': index === activeSlide }"
        @click="swiperInst ? swiperInst?.slideTo(index) : () => {}"
      >
        {{ item.title }}
      </button>
    </div>
    <Swiper
      class="animate__animated animate__fadeIn"
      :modules="[Autoplay, EffectCube]"
      loop
      :autoplay="{
        delay: 3500,
        pauseOnMouseEnter: true,
      }"
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="item in works" :key="item.title">
        <div class="slider__box">
          <span class="slider__box-img">
            <img :src="item.img" alt="image" />
          </span>
          <span class="slider__box-text font--b2">{{ item.description }}</span>
          <span class="slider__box-action">
            <button
              @click="item.b_action ? item.b_action() : goExplore(item.link)"
              class="text-white-monochrome font--b3"
            >
              {{ item.b_text || "Explore" }}
            </button>
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCube } from "swiper/modules";
import img1 from "~/assets/img/rwa-estate.jpg";
import img2 from "~/assets/img/rwa-scan.jpg";
import img4 from "~/assets/img/autoimpirt.jpg";
import img3 from "~/assets/img/buzz.png";
import img5 from "~/assets/img/newtify.png";
import img6 from "~/assets/img/tokenizer.png";
import "swiper/css/effect-cube";

type Work = {
  title: string;
  img: string;
  description: string;
  link?: string;
  b_text?: string;
  b_action?: Function;
};

const swiperInst = ref<typeof Swiper | null>(null);
const onSwiper = (swiper: any) => {
  swiperInst.value = swiper;
  swiper.on("slideChange", () => {
    activeSlide.value = swiperInst.value?.realIndex;
  });
};

const works: Work[] = [
  {
    title: "RWA Estate",
    img: img1,
    link: "https://rwa-estate.com/",
    description: `Led frontend development for RWA Estate, a platform for tokenized real estate. Implemented dynamic listing pages, investment dashboards, and wallet integration. Optimized performance for large property datasets and ensured responsiveness across devices.`,
  },
  {
    title: "RWA Scan",
    img: img2,
    link: "https://rwa-scan.com/",
    description: `Built UI for RWA Scan – a scanning platform for real-world assets and security tokens. Developed real-time data visualization, token detail pages, and filters for category-based browsing. Integrated with analytics APIs and built SSR-ready views in Nuxt 3.`,
  },
  {
    title: "Newtify",
    img: img5,
    link: "https://www.newtify.io/",
    description: `Developed a Telegram Mini App version of Newtify – a Web3 news aggregator. Implemented swipe-based interactions (like/save/favorite), real-time user action sync, and Telegram integration. Focused on smooth UX and performance in mobile environments.`,
  },
  {
    title: "Tokenizer.Estate",
    img: img6,
    link: "https://tokenizer.estate/",
    description: `Created a Telegram Mini App for Tokenizer.Estate – a platform for tokenized real estate investing. Built frontend with a focus on security and compliance UI, integrated fractional investment flows, and optimized onboarding for mobile-first experience.`,
  },
  {
    title: "Buzz.ai",
    img: img3,
    link: "https://buzz.ai/",
    description: `Contributed to frontend of Buzz.ai – an AI-powered sales engagement platform. Worked on multichannel campaign UI (email, LinkedIn), CRM syncing, AI response scoring, and real-time analytics dashboard using Vue 3 and TailwindCSS.`,
  },
  {
    title: "Autoimport",
    img: img4,
    link: "https://autoimport.group/",
    description: `Delivered frontend for Autoimport – a car import and dealer platform. Focused on building listing grids, vehicle detail views, and integrating order forms with backend APIs. Improved UX and mobile performance for catalog browsing.`,
  },
  {
    title: "Tanks game",
    img: "https://wotpack.ru/wp-content/uploads/2019/12/48f87a35b66241b5d331eb099b9f6c8a-1.jpg",
    b_text: "Play",
    b_action: () => navigateTo("/tanks"),
    description: `Integrated a tank battle game as a Nuxt Mini App using a third-party npm package. Handled dynamic script loading, component embedding, and provided interactive gameplay directly inside the portfolio site.`,
  },
];


const activeSlide = ref<number>(0);

const goExplore = (url: string | undefined) => {
  if (!url) return;
  window.open(url, "_blank");
};
</script>

<style scoped lang="scss">
.me-portfolio {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5%;
  padding-bottom: 5%;
  gap: 50px;
  @media (max-width: 65rem) {
    flex-direction: column;
    max-width: calc(100vw - 60px);
  }
  .work-box {
    position: relative;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    flex-direction: column;
    .box {
      @include drop-button-styles;
      width: 100%;
      height: 50px;
      padding: 5px;
      border-radius: 10px;
      background-color: transparent;
      border: 2px solid var(--gray-800);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: scale 0.3s ease, border-radius 0.3s ease,
        background-color 0.3s ease, color 0.3s ease;
      will-change: scale, border-radius, background-color, color;
      &-active {
        background-color: var(--gray-800);
        color: var(--white-monochrome);
      }
      &:hover {
        scale: 1.05;
        border-radius: 15px;
      }
      &:active {
        scale: 0.95;
      }
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 620px;
    // padding: 20px;
    background-color: transparent;
    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      background-color: var(--white-contrast);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      overflow: visible;
      .slider__box {
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        padding: 10px;
        gap: 10px;
        &-img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
          }
        }
        &-text {
          text-align: left;
        }
        &-action {
          button {
            @include drop-button-styles;
            height: 100%;
            border-radius: 15px;
            background-color: var(--violet-light);
            padding: 8px 15px;
          }
        }
      }
    }
  }
}
</style>
