<template>
  <section class="me-title">
    <h3 class="text-black-monochrome font--h3">
      Hi! I'm Vasilii. <br />
      I'm a ninja frontend <br />
      developer.
    </h3>
    <lottie-player
      v-if="props.majorAnim"
      autoplay
      loop
      mode="reverse-bounce"
      :src="props.majorAnim"
      style="width: 620px"
    >
    </lottie-player>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

interface IProps {
  majorAnim: Record<string, any> | null;
}

const props = defineProps<IProps>();
// this.MajPage = await this.fetchData(
//           "https://assets8.lottiefiles.com/packages/lf20_ioJYvK.json"
//         );
//         this.ExpPage = await this.fetchData(
//           "https://assets2.lottiefiles.com/packages/lf20_lrdkqhnc.json"
//         );
//         this.SkillPage = await this.fetchData(
//           "https://assets3.lottiefiles.com/packages/lf20_jvkbug4h.json"
//         );
//         this.WorksPage = await this.fetchData(
//           "https://assets3.lottiefiles.com/packages/lf20_jhaabiai.json"
//         );
</script>

<style scoped lang="scss">
.me-title {
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}
</style>
