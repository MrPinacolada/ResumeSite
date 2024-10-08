<template>
  <div class="SkillsContainer" v-if="lottieAnim">
    <lottie-player
      class="animate__animated animate__slideInLeft"
      :src="lottieAnim"
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
        <div class="disCard">
          <p>{{ item.textSlide }}</p>
        </div>
        <div class="cardBorder"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Store } from "../pinia/index";
import { ref, computed } from "vue";
import icon1 from "../assets/skillset/nuxt-svgrepo-com.svg";
import icon2 from "../assets/skillset/typescript.png";
import icon3 from "../assets/skillset/sass-1.svg";
import icon4 from "../assets/skillset/icons8-vue-js-144.png";
import icon5 from "../assets/skillset/Vite.js.png";
import icon6 from "../assets/skillset/file_type_tailwind_icon_130128.svg";
import icon7 from "../assets/skillset/pugjs_logo_icon_170825.png";
import icon8 from "../assets/skillset/1175544_firebase_google_icon.png";
import icon9 from "../assets/skillset/pinia-seeklogo.com.svg";
import icon10 from "../assets/skillset/api.png";

const store = Store();
const lottieAnim = computed(() => store.SkillPage);
const SkillsArr = ref([
  {
    img: icon1,
    textSlide: `Framework that makes web development intuitive and powerful.
Create production-grade full-stack web apps and websites.`,
    text: "Nuxt 3",
  },
  {
    img: icon2,
    textSlide:
      "High-level programming language that adds static typing with optional type annotations to JavaScript.",
    text: "TypeScript",
  },
  {
    img: icon3,
    textSlide:
      "Language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    text: "Sass",
  },
  {
    img: icon4,
    textSlide:
      "Front end JavaScript framework for building user interfaces and single-page applications.",
    text: "Vue 3",
  },
  {
    img: icon5,
    textSlide:
      "Local development server which used by default by the Vue project templates.",
    text: "Vite",
  },
  {
    img: icon6,
    textSlide: "Open source CSS framework. ",
    text: "Tailwind",
  },
  {
    img: icon7,
    textSlide: "Compiler and interpreter for the Raku programming language.",
    text: "Pugjs",
  },
  {
    img: icon8,
    textSlide:
      "Set of backend cloud computing services and application development platforms provided by Google.",
    text: "Firebase",
  },
  {
    img: icon9,
    textSlide:
      "Pinia is a store library and state management framework for Vue.js.",
    text: "Pinia",
  },
  {
    img: icon10,
    textSlide:
      "Application programming interface is a way for two or more computer programs to communicate with each other.",
    text: "REST API",
  },
]);
</script>

<style scoped>
.cardBorder {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 2px dashed black;
  z-index: -1;
  display: none;
  border-radius: 15px;
  z-index: 10;
  background-color: #ffffff;
}
.SkillBox:hover .cardBorder {
  display: block;
}

.disCard {
  position: absolute;
  width: 110px;
  height: 130px;
  left: 0;
  top: 0;
  background-color: rgb(242, 244, 246);
  transition: transform 0.3s ease;
  opacity: 0;
  border-radius: 15px;
  z-index: 11;
  padding: 5px;
  transition: transform 0.4s ease, opacity 0.3s ease;
}
.disCard > p {
  font-size: 0.64em;
  margin: 0;
  cursor: context-menu;
}
.SkillBox:hover .disCard {
  transform: translate(-15px, -15px);
  opacity: 1;
}

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
  position: relative;
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
p {
  justify-self: center;
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
@media only screen and (max-width: 768px) {
  lottie-player {
    width: 90% !important;
    height: 90% !important;
  }
  .cardBorder {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 2px dashed black;
    z-index: -1;
    display: none;
    border-radius: 15px;
    z-index: 10;
    background-color: #ffffff;
  }
  .SkillBox:hover .cardBorder {
    display: block;
  }

  .disCard {
    position: absolute;
    width: 55px;
    height: 65px;
    left: 0;
    top: 0;
    background-color: rgb(242, 244, 246);
    transition: transform 0.3s ease;
    opacity: 0;
    border-radius: 15px;
    z-index: 11;
    padding: 5px;
  }
  .disCard > p {
    font-size: 5px;
    margin: 0;
    cursor: context-menu;
  }
  .SkillBox:hover .disCard {
    transform: translate(-15px, -15px);
    opacity: 1;
  }

  .SkillsContainer {
    margin-top: 100px;
    display: grid;
    align-items: center;
    position: unset;
    width: 100%;
    align-items: center;
    justify-items: center;
    margin: auto;
    justify-content: center;
  }
  .boxesContainer {
    margin-right: 0;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 3fr);
    gap: 60px;
    margin-top: 0;
    position: unset;
  }
  .SkillBox {
    display: grid;
    width: 55px;
    height: 65px;
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
    align-self: flex-start;
    justify-self: center;
    margin-top: 10px;
    padding: 0px;
    width: 40px;
    height: 40px;
  }
  p {
    justify-self: center;
    align-self: center;
    font-size: 0.4em;
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
}
</style>
