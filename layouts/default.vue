<template>
  <header
    v-show="!loader"
    class="layout layout__header animate__animated animate__fadeInDown"
    @mouseleave="handleHoverLink"
  >
    <h5 class="title font--b3 text-white-contrast">Resume pages</h5>
    <nav class="pages" @mouseenter="handleHoverLink">
      <nuxt-link
        to="/about"
        class="font--b3 text-white-monochrome"
        @click.prevent="handleLinkClick('/about')"
      >
        About
      </nuxt-link>
      <nuxt-link class="font--b3 text-white-monochrome">Portfolio</nuxt-link>
      <nuxt-link class="font--b3 text-white-monochrome">Skills</nuxt-link>
    </nav>
  </header>
  <main v-show="!loader" class="layout__main animate__animated animate__fadeIn">
    <!-- <div
      :class="['curtain', { 'curtain--active': showCurtain }]"
      class="animate__animated"
      @mouseenter="handleHoverLink"
      @mouseleave="handleHoverLink"
    ></div> -->
    <NuxtPage :major-anim="majorAnim" />
  </main>

  <backdrop v-if="!loader" />
  <base-loader v-if="loader" />
  <div class="spider-box">
    <amazing-spider
      v-show="!loader"
      background_color="#fff"
      dots_border_color="rgba(10, 163, 243, 0.39)"
    />
  </div>
  <footer
    v-show="!loader"
    class="layout layout__footer animate__animated animate__fadeInUp"
  >
    <nuxt-link v-for="icon in footerIcons">
      <base-icon :name="icon.icon" filled size="32px" />
    </nuxt-link>
  </footer>
</template>

<script setup lang="ts">
import "@lottiefiles/lottie-player";
import amazingSpider from "amazing__spider";

const majorAnim = ref<Record<string, any> | null>(null);
const footerIcons = ref([
  {
    icon: "telegram",
    link: "",
  },
  {
    icon: "google",
    link: "",
  },
  {
    icon: "linkedin",
    link: "",
  },
]);
const loader = ref(true);
const showCurtain = ref(false);
const { lockScroll, unlockScroll } = useScrollLock();

const handleLinkClick = (link: string) => {
  lockScroll();
  setTimeout(() => {
    unlockScroll();
  }, 600);
  navigateTo(link);
};

const handleHoverLink = () => {
  showCurtain.value = !showCurtain.value;
};

const callLoaderOf = () => {
  setTimeout(() => {
    loader.value = false;
  }, 3000);
};

const getMajotAnim = async () => {
  loader.value = true;
  try {
    const data = await useFetch(
      "https://assets8.lottiefiles.com/packages/lf20_ioJYvK.json"
    );
    if (!data.data.value) {
      return;
    }
    majorAnim.value = data.data.value as unknown as Record<string, any>;
    callLoaderOf();
  } catch (error) {
    console.log("error: ", error);
    throw Error;
  }
};

onMounted(() => {
  getMajotAnim();
});
</script>

<style lang="scss">
.layout {
  position: relative;
  height: 60px;
  max-width: 100dvw;
  width: 100%;
  padding-left: 20px;
  padding-right: 30px;
  background-color: var(--gray-800);
  z-index: 3;
  &__header {
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    z-index: 9999;
    .pages {
      display: flex;
      align-items: center;
      gap: 20px;
      h5 {
        cursor: default;
      }
      a {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  &__main {
    position: relative;
    width: 100dvw;
    height: calc(100dvh - 120px);
    margin-bottom: 60px;
    z-index: 4;
    .curtain {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: var(--lilac-secondary);
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      z-index: -1;
      overflow: hidden;
      transition: height 0.5s ease; /* Smooth transition */

      &--active {
        height: 30px; /* Final height when curtain is active */
      }
    }
  }
  &__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    a {
      transition: scale 0.3s ease, rotate 0.3s ease-in-out;
      will-change: scale, rotate;
      &:hover {
        scale: 1.1;
        rotate: 1turn;
      }
    }
  }
}
.spider-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
