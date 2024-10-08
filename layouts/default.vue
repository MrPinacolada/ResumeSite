<template>
  <header class="layout layout__header">
    <h5 class="title">Resume pages</h5>
    <nav class="pages">
      <nuxt-link class="pages-item"> About </nuxt-link>
      <nuxt-link class="pages-item">Portfolio</nuxt-link>
      <nuxt-link class="pages-item">Skills</nuxt-link>
    </nav>
  </header>
  <main class="layout__main">
    <slot />
  </main>

  <backdrop />
  <div class="spider-box">
    <amazing-spider
      background_color="#fff"
      dots_border_color="rgba(10, 163, 243, 0.39)"
    />
  </div>
  <footer class="layout layout__footer">
    <base-icon name="telegram" filled size="32px" />
    <base-icon name="google" filled size="32px" />
    <base-icon name="linkedin" filled size="32px" />
  </footer>
</template>

<script setup lang="ts">
import "@lottiefiles/lottie-player";
import amazingSpider from "amazing__spider";
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
