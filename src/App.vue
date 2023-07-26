<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { Store } from "./pinia/index";

const store = Store();

onBeforeMount(async () => {
  await store.fetchAllData();
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
