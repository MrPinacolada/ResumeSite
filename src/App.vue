<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "animate.css";
export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  height: 100%;
}
</style>
