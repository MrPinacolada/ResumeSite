<template>
  <Header />
  <Body />
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Header from "../components/Header/Header.vue";
import Body from "../components/Body/Body.vue";
import Footer from "../components/Footer/Footer.vue";
import "animate.css";
export default defineComponent({
  components: { Header, Footer, Body },
  setup() {
    onMounted(() => {
      let body = document.querySelector("body");
      body?.setAttribute("style", "overflow-y:hidden");
    });
    return {};
  },
});
</script>

<style scoped></style>
