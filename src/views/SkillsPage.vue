<template>
  <div class="SkillsContainer">

    <lottie-player
      src="https://assets3.lottiefiles.com/packages/lf20_jvkbug4h.json"
      background="transparent"
      speed="1"
      style="width: 650px; height: 650px"
      loop
      autoplay
    ></lottie-player>
    <div class="boxesContainer">
        <div class="SkillBox"></div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
export default defineComponent({
  components: { Header, Footer },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.SkillsContainer {
  justify-content: space-between;
  margin-top: 100px;
  display: flex;
  align-items: center;
  position: relative;
}
.boxesContainer{
    margin-right: 100px;
    display: grid;
}

</style>
