<template>
  <div class="SkillsContainer">
    <lottie-player
    class="animate__animated animate__slideInLeft"
      src="https://assets3.lottiefiles.com/packages/lf20_jvkbug4h.json"
      background="transparent"
      speed="1"
      style="width: 650px; height: 650px"
      loop
      autoplay
    ></lottie-player>
    <div class="boxesContainer">
      <div class="SkillBox" v-for="item in SkillsArr">
        <img :src="item.img" alt="" />
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    let SkillsArr = ref([
      { img: "/html.png", text: "HTML 5" },
      { img: "/typescript.png", text: "TypeScript" },
      { img: "/css-3.png", text: "Css" },
      { img: "/icons8-vue-js-144.png", text: "Vue 3" },
      { img: "/Vite.js.png", text: "Vite" },
      { img: "/file_type_tailwind_icon_130128.svg", text: "Tailwind" },
      { img: "/pugjs_logo_icon_170825.png", text: "Pugjs" },
      { img: "/1175544_firebase_google_icon.png", text: "Firebase" },
      { img: "/pinia-seeklogo.com.svg", text: "Pinia" },
      { img: "/api.png", text: "REST API" },
    ]);

    return { SkillsArr };
  },
});
</script>

<style scoped>
.SkillsContainer {
  justify-content: space-between;
  margin-top: 100px;
  display: flex;
  align-items: center;
  position: relative;
}
.boxesContainer {
  margin-right: 100px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  margin-top: -220px;
}
.SkillBox {
  display: grid;
  width: 110px;
  height: 130px;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  background-color: rgb(242, 244, 246);
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}
img {
  align-self: center;
  justify-self: center;
  margin-top: 15px;
  padding: 8px;
  width: 70px;
  height: 70px;
}
p{
  justify-self:center;
  align-self: center;
}
@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-bottom {
  0% {
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 100%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
.SkillBox:nth-child(1) {
  animation-delay: 0.8s;
}
.SkillBox:nth-child(2) {
  animation-delay: 0.9s;
}
.SkillBox:nth-child(3) {
  animation-delay: 1s;
}
.SkillBox:nth-child(4) {
  animation-delay: 1.1s;
}
.SkillBox:nth-child(5) {
  animation-delay: 1.2s;
}

.SkillBox:nth-child(6) {
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 1.2s;
}
.SkillBox:nth-child(7) {
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 1.1s;
}
.SkillBox:nth-child(8) {
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 1s;
}
.SkillBox:nth-child(9) {
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 0.9s;
}
.SkillBox:nth-child(10) {
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 0.8s;
}
</style>
