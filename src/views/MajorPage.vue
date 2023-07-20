<template>
  <div
    class="MajorPageContainer animate__animated animate__zoomIn"
    v-if="lottieAnim"
  >
    <div class="bodyContainer">
      <h1>
        Hi! I'm <span class="name">Vasilii</span>. <br />
        I'm a beginer frontend developer.
      </h1>
      <lottie-player
        :src="lottieAnim"
        background="transparent"
        speed="1"
        style="width: 40%"
        mode="bounce"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Store } from "../pinia/index";

const store = Store();
const lottieAnim = computed(() => store.MajPage);
</script>

<style scoped>
.MajorPageContainer {
  margin-top: 100px;
}
.bodyContainer {
  display: flex;
  justify-content: space-between;
}
h1 {
  align-self: center;
  margin-left: 20%;
  margin-bottom: 7%;
  cursor: context-menu;
  position: relative;
}
.name::after {
  content: "{Bob for short}";
  font-size: 0.3em;
  position: absolute;
  left: 29%;
  top: 28%;
}
@media only screen and (max-width: 768px) {
  .MajorPageContainer {
    margin-top: 100px;
  }
  .bodyContainer {
    display: grid;
    justify-items: center;
  }
  h1 {
    align-self: center;
    margin-left: 20%;
    margin-bottom: 7%;
    cursor: context-menu;
    position: relative;
    font-size: 1.5em;
  }
  .name::after {
    content: "{Bob for short}";
    font-size: 0.3em;
    position: absolute;
    left: 40%;
    top: 28%;
  }
  lottie-player {
    width: 80% !important;
  }
}
</style>
