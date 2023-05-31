<template>
  <Header @ShowContact="ShowContact()" />
  <RouterView />
  <Footer :ShowContact="HeaderProp" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";

import "animate.css";
export default defineComponent({
  components: { Header, Footer },

  setup() {
    let HeaderProp = ref(false);
    let route = useRoute();
    let ShowContact = () => {
      HeaderProp.value = !HeaderProp.value;
    };
    watch(
      () => route.path,
      () => {
        HeaderProp.value = false;
      }
    );
    return { ShowContact, HeaderProp };
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
@media only screen and (max-width: 768px) {
  body {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  height: 100%;
  font-family: "Roboto Mono", monospace;
  overflow-y:auto;
  overflow-x:auto;
}
}
</style>
