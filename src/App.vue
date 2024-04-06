<template>
  <div style="position: absolute; z-index: -1; width: 100%; height: 100%">
    <amazing-spider background_color="#fff" dots_border_color="rgba(10, 163, 243, 0.39)" />
  </div>
  <customLoader v-if="loader" :isFetchError="isFetchError" />
  <div v-show="!loader">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { RouterView } from "vue-router";
import { Store } from "./pinia/index";
import customLoader from "./components/Loader/customLoader.vue";
import amazingSpider from "amazing__spider";

const store = Store();
const loader = ref(true);
const isFetchError = ref(false);

const loadAnims = async () => {
  try {
    const res = await store.fetchAllData();
    if (!res) {
      isFetchError.value = true;
      return;
    }
    setTimeout(() => {
      loader.value = false;
    }, 3000);
  } catch (error) {}
};

onBeforeMount(() => {
  loadAnims();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");
:root {
  --white: #ffffff;
  --turquoise: #3dbaba;
  --powder-blue: #87aeaf;
  --alice-blue: #d7eff7;
  --anti-flash-white: #f6f9fd;
  --oxford-blue: #011529;
  --aquamarine: #7fffd4;
  --payne-gray: #607080;
  --prussian-blue: #082e47;
  --rich-black: #03101c;
  --brand: var(--turquoise);
  --fg: var(--oxford-blue);
  --fg-1: var(--rich-black);
  --fg-2: var(--prussian-blue);
  --dark: var(--oxford-blue);
  --light: var(--white);
  --bg: var(--white);
  --bg-1: var(--alice-blue);
  --bg-2: var(--anti-flash-white);
  --neutral: var(--powder-blue);
  --tone-1: var(--turquoise);
  --tone-2: var(--aquamarine);
}
body {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  height: 100%;
  font-family: "Roboto Mono", monospace;
  overflow-y: hidden;
  overflow-x: hidden;
}
main::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(./assets/back.svg);
  opacity: 0.3;
  z-index: 0;
}
h1,
h2,
h3,
a,
p,
span {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.custom-tooltip .p-tooltip-text {
  font-size: 0.7em !important;
  padding: 5px !important;
}
@media only screen and (max-width: 768px) {
  body {
    overflow-y: auto;
    overflow-x: auto;
  }
  main::before {
    height: 100ch;
  }
}
</style>
