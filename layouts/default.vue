<template>
  <header
    v-show="!loader"
    class="layout layout__header animate__animated animate__fadeInDown"
  >
    <h5 class="title">Resume pages</h5>
    <nav class="pages">
      <nuxt-link class="pages-item"> About </nuxt-link>
      <nuxt-link class="pages-item">Portfolio</nuxt-link>
      <nuxt-link class="pages-item">Skills</nuxt-link>
    </nav>
  </header>
  <main v-show="!loader" class="layout__main animate__animated animate__fadeIn">
    <NuxtPage :major-anim="majorAnim" />
    <!-- <slot :major-anim="majorAnim" /> -->
  </main>

  <backdrop />
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
    <base-icon name="telegram" filled size="32px" />
    <base-icon name="google" filled size="32px" />
    <base-icon name="linkedin" filled size="32px" />
  </footer>
</template>

<script setup lang="ts">
import "@lottiefiles/lottie-player";
import amazingSpider from "amazing__spider";

const majorAnim = ref<Record<string, any> | null>(null);
const loader = ref(true);

const callLoaderOf = () => {
  setTimeout(() => {
    loader.value = false;
  }, 1000);
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
    .title {
    }
    .pages {
      display: flex;
      align-items: center;
      gap: 20px;

      &-item {
      }
    }
  }
  &__main {
    width: 100dvw;
    height: calc(100dvh - 120px);
    margin-bottom: 60px;
  }
  &__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
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
