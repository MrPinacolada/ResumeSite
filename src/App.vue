<template>
  <Header @ShowContact="ShowContact()" />
  <RouterView />
  <Footer :ShowContact="HeaderProp" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import { Store } from "./pinia/index";

const store = Store();
const HeaderProp = ref(false);
const route = useRoute();

const ShowContact = () => {
  HeaderProp.value = !HeaderProp.value;
};

watch(
  () => route.path,
  () => {
    HeaderProp.value = false;
  }
);

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
@media only screen and (max-width: 768px) {
  body {
    padding: 0;
    margin: 0;
    border: none;
    width: 100%;
    height: 100%;
    font-family: "Roboto Mono", monospace;
    overflow-y: auto;
    overflow-x: auto;
  }
}
</style>
