<template>
  <div class="worksContainer">
    <lottie-player
      v-if="StartAnim"
      src="https://assets3.lottiefiles.com/packages/lf20_jhaabiai.json"
      background="transparent"
      speed="1"
      style="width: 600px; height: 600px"
      autoplay
    ></lottie-player>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    let StartAnim = ref(false);
    onMounted(() => {
      setTimeout(() => {
        StartAnim.value = true;
        setTimeout(() => {
          StartAnim.value = false;
        }, 7000);
      }, 1000);
    });
    return { StartAnim };
  },
});
</script>

<style scoped>
.worksContainer {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 100px;
  position: relative;
}
lottie-player {
  animation: slideAnimation 7s  linear infinite;
  position: absolute;
  top: 50px;
  left: -2%;
}

@keyframes slideAnimation {
  0% {
    left: -2%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    left: 100%;
  }
}
</style>
