<template>
  <div class="HeaderContainer animate__animated animate__slideInDown">
    <RouterLink :to="{ name: 'Home' }">
      <span
        class="MajorHead"
        :class="{ MajorHeadBefore: route.fullPath != '/' }"
        >{{ currentTitle }}</span
      >
    </RouterLink>
    <div class="bunchOfLie">
      <RouterLink :to="{ name: 'Works' }">
        <span class="HeadP">Works</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Skills' }">
        <span class="HeadP">Skills</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Experience' }">
        <span class="HeadP">Experience</span>
      </RouterLink>
      <span class="HeadP" @click="EmitToApp">Contact</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
export default defineComponent({
  emits: ['ShowContact'],
  setup(_props, { emit }) {
    let route = useRoute();
    let currentTitle = ref("Resume pages");
    let EmitToApp = () => {
      emit("ShowContact");
    };
    watch(
      () => route.path,
      (newPath) => {
        currentTitle.value =
          newPath == "/" ? "Resume pages" : "Back to homepage";
      }
    );
    // watch(ShowContacts, () => {
    //   if (ShowContacts.value) {
    //     setTimeout(() => {
    //       ShowContactWin.value = true;
    //     }, 1300);
    //   } else ShowContactWin.value = false;
    // });
    return {
      currentTitle,
      route,
      EmitToApp,
    };
  },
});
</script>

<style scoped>
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
.MajorHead {
  color: rgb(216, 216, 216);
  z-index: 10;
  position: relative;
  display: inline-block;
}
.MajorHeadBefore,
.HeadP {
  color: rgb(216, 216, 216);
  cursor: pointer;
  z-index: 10;
  position: relative;
  display: inline-block;
}
.bunchOfLie {
  display: flex;
  gap: 70px;
}
.MajorHeadBefore::before,
.HeadP::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(216, 216, 216);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}
.MajorHeadBefore:hover::before,
.HeadP:hover::before {
  transform: scaleX(1);
  transform-origin: right;
}
</style>
