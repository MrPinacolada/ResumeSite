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
    <div class="workBox">
      <p>asda</p>
    </div>
    <div class="workBox">
      <p>asda</p>
    </div>
    <div class="workBox">
      <p>asda</p>
    </div>
    <div class="workBox">
      <p>asda</p>
    </div>
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
  grid-template-columns: repeat(4, 1fr);
}
lottie-player {
  animation: slideAnimation 7s linear;
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
.workBox {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  width: 300px;
  height: 400px;
  border: none;
  border-radius: 15px;
  background-color: antiquewhite;
  gap: 30px;
  animation: slideBoxes 7s linear;
  justify-self: center;
}

@keyframes slideBoxes {
  0% {
    transform: translateX(-590%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
