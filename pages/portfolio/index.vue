<template>
  <section class="me me-portfolio">
    <div class="work-box animate__a nimated animate__fadeIn">
      <button
        v-for="(item, index) in works"
        :key="item.title"
        class="box font--b4 text-black-monochrome"
        :class="{ 'box-active': index === activeSlide }"
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
      @activeIndexChange="setNewActiveSlide"
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
              @click="item.b_action ?? goExplore(item.link)"
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
import "swiper/css/effect-cube";

type Work = {
  title: string;
  img: string;
  description: string;
  link?: string;
  b_text?: string;
  b_action?: Function;
};

const works: Work[] = [
  {
    title: "RWA Estate",
    img: "/img/rwa-estate.jpg",
    link: "https://rwa-estate.com/",
    description: `Estate RWAs (or tokenized estate) are physical, tangible assets such as residential homes, commercial buildings, and land. Unlike stocks or bonds, which are intangible financial instruments, estate RWAs have a physical presence and can be seen and touched.`,
  },
  {
    title: "RWA Scan",
    img: "/img/rwa-scan.jpg",
    link: "https://rwa-scan.com/",
    description: "",
  },
  {
    title: "Agentum",
    img: "/img/agentum.jpg",
    link: "https://agentum.pro/",
    description: "",
  },
  {
    title: "Autoimport",
    img: "/img/autoimpirt.jpg",
    link: "https://autoimport.group/",
    description: "",
  },
  {
    title: "Tanks game",
    img: "https://cdn.culture.ru/images/94ed4aac-f861-5df3-ae25-07a3d67892c7",
    b_text: "Play",
    b_action: () => navigateTo("/tanks"),
    description: "",
  },
];

const activeSlide = ref<number>(0);

const goExplore = (url: string | undefined) => {
  if (!url) return;
  window.open(url, "_blank");
};

const setNewActiveSlide = (data: { activeIndex: number }) => {
  if (typeof data.activeIndex !== "number") {
    activeSlide.value = 0;
    return;
  }
  activeSlide.value = data.activeIndex;
};
</script>

<style scoped lang="scss">
.me-portfolio {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10%;
  padding-bottom: 10%;
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
    max-width: 450px;
    max-height: 320px;
    padding: 20px;
    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      background: var(--white-contrast);
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
