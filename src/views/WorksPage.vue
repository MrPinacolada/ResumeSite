<template>
  <div class="worksContainer" v-if="lottieAnim">
    <lottie-player
      v-if="StartAnim"
      :src="lottieAnim"
      background="transparent"
      speed="1"
      style="width: 600px; height: 600px"
      autoplay
    ></lottie-player>

    <div class="workBox">
      <a href="https://github.com/MrPinacolada/Raptor_News" target="_blank"></a>
      <picture>
        <img src="../assets/image_2023-05-27_14-36-49.png" alt="" />
        <p class="headTitle">News site. <br />(ts,vue3,vite,firebase)</p>
      </picture>
      <p class="bodyTitle">
        Almost a full working site with the ability to Log In, set own profile
        and like some news. It half works with firebase backend in parts of
        authentication and uploading images, several functions hosted on
        firebase as well. Also, it takes data by API requests in order to
        populate modules.
      </p>
    </div>
    <div class="workBox">
      <a href="https://github.com/MrPinacolada/SavePlanet" target="_blank"></a>
      <picture>
        <img src="../assets/image_2023-05-27_16-14-17.png" alt="" />
        <p class="headTitle">Summer sports <br />(ts, vue3, vite)</p>
      </picture>
      <p class="bodyTitle">
        Just a cozy site with an amazing photo-slider and a bit of userbar
        functionality. Supposed to be as a site with lots of topics about sport
        activities.
      </p>
    </div>
    <div class="workBox">
      <a href="https://github.com/MrPinacolada/SavePlanet" target="_blank"></a>
      <picture>
        <img src="../assets/image3.png" alt="" />
        <p class="headTitle">Save planet <br />(ts,vue3,vite)</p>
      </picture>
      <p class="bodyTitle">
        One more qiute good frontend cover for a site about animal protection.
        It has not much functionality, just an envelop.
      </p>
    </div>
    <div class="workBox" @mouseenter="hoverEffect" @mouseleave="unhoverEffect">
      <a href="https://github.com/MrPinacolada/FirstWorks" target="_blank"></a>
      <picture>
        <img src="../assets/img4.png" alt="" />
        <p class="headTitle">
          Tank battle <br />
          (ts, html, canvas)
        </p>
      </picture>
      <p class="bodyTitle">
        No libraries, no scripts from other resourses. Just a handmaded tank
        game and a few else. I was trying to learn typescript by writting some
        simple games. It took a while but I found that experience I've got very
        useful.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Store } from "../pinia/index";
import { onMounted, ref, computed } from "vue";

const store = Store();
const lottieAnim = computed(() => store.WorksPage);
const StartAnim = ref(false);
let screenWidth = window.innerWidth;

const hoverEffect = () => {
  let workBoxes = document.querySelectorAll(".workBox");
  for (let i = 0; i < workBoxes.length; i++) {
    if (i !== 4 && screenWidth >= 768) {
      workBoxes[i].classList.add("shiftLeft");
    }
  }
};
const unhoverEffect = () => {
  let workBoxes = document.querySelectorAll(".workBox");
  for (let i = 0; i < workBoxes.length; i++) {
    if (i !== 4 && screenWidth >= 768) {
      workBoxes[i].classList.remove("shiftLeft");
    }
  }
};

onMounted(() => {
  setTimeout(() => {
    StartAnim.value = true;
    setTimeout(() => {
      StartAnim.value = false;
    }, 7000);
  }, 1000);
  if (screenWidth <= 768) {
    setTimeout(() => {
      StartAnim.value = true;
      setTimeout(() => {
        StartAnim.value = false;
      }, 4000);
    }, 1000);
  }
});
</script>

<style scoped>


.worksContainer {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 100px;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
}
lottie-player {
  animation: slideAnimation 7s linear;
  position: absolute;
  top: 50px;
  left: -2%;
}

@keyframes slideAnimation {
  0% {
    left: -2%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    left: 100%;
  }
}
.workBox {
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  justify-items: center;
  width: 300px;
  height: 400px;
  border: none;
  border-radius: 15px;
  background-color: antiquewhite;
  gap: 5px;
  animation: slideBoxes 7s linear;
  justify-self: center;
  transform: scale(1);
  transition: 0.5s;
  cursor: pointer;
  position: relative;
  margin-bottom: 40px;
}
.workBox:hover {
  transform: scale(1.1);
}

@keyframes slideBoxes {
  0% {
    transform: translateX(-590%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
  }
}
img {
  max-width: 100%;
  max-height: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.workBox:nth-child(1):hover {
  transform: translateX(+10%) scale(1.1);
  z-index: 10;
}
.workBox:nth-child(1):hover ~ .workBox:nth-child(n + 2) {
  transform: translateX(+10%);
}
.workBox:nth-child(4):hover {
  transform: translateX(-10%) scale(1.1);
  z-index: 10;
}

.shiftLeft {
  transform: translateX(-10%);
}
picture {
  padding: 3px;
  align-self: self-start;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.headTitle {
  text-align: center;
  margin: 0;
}
.bodyTitle {
  margin: 0;
  font-size: 0.8em;
  padding: 10px;
}
a {
  position: absolute;
  width: 100%;
  height: 100%;
}
.disCont {
  display: grid;
  background-color: rgb(46, 46, 47, 0.9);
  border-radius: 15px;
  position: absolute;
  z-index: 15;
  width: 95%;
  height: 100%;
  justify-self: center;
  justify-items: center;
  align-items: center;
}
#disclaimer {
  text-align: center;
  color: red;
  font-size: 2em;
  font-weight: 800;
}
#diclaimerBody {
  text-align: center;
  color: white;
  font-size: 1.5em;
}
@media only screen and (max-width: 768px) {
  .worksContainer {
    grid-template-columns: 1fr;
    margin-bottom: 20px;
  }
  lottie-player {
    animation: slideAnimation 5s linear;
    height: fit-content !important;
  }

  @keyframes slideAnimation {
    0% {
      left: -10%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      left: 100%;
    }
  }
  .workBox {
    animation: slideBoxes 5s linear;
  }
  .workBox:hover {
    transform: scale(1);
  }

  @keyframes slideBoxes {
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translateX(0%);
    }
  }

  .workBox:nth-child(1):hover {
    transform: translateX(0) scale(1);
    z-index: 10;
  }
  .workBox:nth-child(1):hover ~ .workBox:nth-child(n + 2) {
    transform: translateX(0);
  }
  .workBox:nth-child(4):hover {
    transform: translateX(0) scale(1);
    z-index: 10;
  }

  .shiftLeft {
    transform: translateX(0);
  }
}
</style>
