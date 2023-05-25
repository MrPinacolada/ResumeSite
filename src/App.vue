<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";

import "animate.css";
export default defineComponent({
  components: { Header, Footer },

  setup() {
    return {};
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");

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
</style>
