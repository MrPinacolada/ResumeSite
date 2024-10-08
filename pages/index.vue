<template>
  <section class="me-title">
    <h3 class="text-black-monochrome font--h4">
      Hi! I'm Vasilii. <br />
      I'm a ninja frontend <br />
      developer.
    </h3>
    <lottie-player
      autoplay
      loop
      mode="normal"
      src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
      style="width: 320px"
    >
    </lottie-player>
  </section>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "default",
});
</script>

<style scoped lang="scss">
.me-title {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}
</style>
