<template>
  <div class="HeaderContainer animate__animated animate__slideInDown">
    <span class="HeadP">I'm Vasilii</span>
    <div class="bunchOfLie">
      <span class="HeadP">Works</span>
      <span class="HeadP">Skills</span>
      <span class="HeadP">Education</span>
      <span class="HeadP">Contact</span>
    </div>
  </div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");
.HeaderContainer {
  display: flex;
  height: 60px;
  background-color: rgb(46, 46, 47);
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: space-between;
}
.HeadP {
  color: rgb(216, 216, 216);
  font-family: "Roboto Mono", monospace;
}
.bunchOfLie {
  display: flex;
  gap: 30px;
}
</style>
