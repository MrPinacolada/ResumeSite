<template>
    <div class="footerContainer animate__animated animate__slideInUp"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.footerContainer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgb(46, 46, 47);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
</style>
