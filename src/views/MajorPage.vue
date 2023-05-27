<template>
  <div class="MajorPageContainer animate__animated animate__zoomIn">
    <div class="bodyContainer">
      <h1>
        Hi! I'm <span class="name">Vasilii</span>. <br />
        I'm a beginer frontend developer.
      </h1>
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_ioJYvK.json"
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

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
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
</style>
