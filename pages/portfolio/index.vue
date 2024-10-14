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
        delay: 2500,
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
            <NuxtImg :src="item.img" alt="image" />
          </span>
          <span class="slider__box-text font--b5-3">{{
            item.description
          }}</span>
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
import img1 from "~/public/img/rwa-estate.jpg";
import img2 from "~/public/img/rwa-scan.jpg";
import img3 from "~/public/img/agentum.jpg";
import img4 from "~/public/img/autoimpirt.jpg";
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
    description: `Estate RWAs (or tokenized estate) are physical, tangible assets such as residential homes, commercial buildings, and land. Unlike stocks or bonds, which are intangible financial instruments, estate RWAs have a physical presence and can be seen and touched.`,
  },
  {
    title: "RWA Scan",
    img: img2,
    link: "https://rwa-scan.com/",
    description: `RWA Scan is a platform that consolidates all RWA's & Security tokens in one place. Our aim is to increase visibility for RWA's, akin to what happened with crypto initially. We list tokens and provide real-time information and statistics about them.`,
  },
  {
    title: "Agentum",
    img: img3,
    link: "https://agentum.pro/",
    description: "Real estate search.",
  },
  {
    title: "Autoimport",
    img: img4,
    link: "https://autoimport.group/",
    description: "Car dillers.",
  },
  {
    title: "Tanks game",
    img: "https://wotpack.ru/wp-content/uploads/2019/12/48f87a35b66241b5d331eb099b9f6c8a-1.jpg",
    b_text: "Play",
    b_action: () => navigateTo("/tanks"),
    description: "Try it.",
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
  align-items: center;
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
    justify-content: space-between;
    flex-direction: column;
    .box {
      @include drop-button-styles;
      width: 100%;
      height: 50px;
      padding: 5px;
      border-radius: 10px;
      background-color: var(--gray-monochrome);
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
    max-width: 650px;
    // max-height: 320px;
    padding: 20px;
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
            object-fit: cover;
          }
        }
        &-text {
          text-align: left;
        }
        &-action {
          button {
            @include drop-button-styles;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background-color: var(--violet-light);
          }
        }
      }
    }
  }
}
</style>
