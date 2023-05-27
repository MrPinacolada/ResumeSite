<template>
  <div class="worksContainer">
    <lottie-player
      v-if="StartAnim"
      src="https://assets3.lottiefiles.com/packages/lf20_jhaabiai.json"
      background="transparent"
      speed="1"
      style="width: 600px; height: 600px"
      autoplay
    ></lottie-player>
    <div class="workBox">
      <picture>
        <img src="../assets/image_2023-05-27_14-36-49.png" alt="" />
      </picture>
      <p class="headTitle">News site. (ts,vue3,vite,firebase)</p>
      <p class="bodyTitle">
        Almost a full working site with the ability to Log In, set own profile
        and like some news. It has a half works with firebase backend in parts
        of authentication and uploading images, several functions hosted on
        firebase as well. Also, it takes data by API requests in order to
        populate modules.
      </p>
    </div>
    <div class="workBox">
      <picture>
        <img src="../assets/image_2023-05-27_16-14-17.png" alt="" />
      </picture>
      <p class="headTitle">Summer sports (ts, vue3, vite)</p>
      <p class="bodyTitle">
        Just a cozy site with an amazing photo-slider and a bit of userbar
        functionality. Supposed to be as a site with lots of topics about sport
        activities.
      </p>
    </div>
    <div class="workBox">
      <picture>
        <img src="../assets/image3.png" alt="" />
      </picture>
      <p class="headTitle">Save planet (ts,vue3,vite)</p>
      <p class="bodyTitle">
        One more qiute good frontend cover for a site about animal protection. 
        It has not much functionality, just an envelop.  
      </p>
    </div>
    <div class="workBox" @mouseenter="hoverEffect" @mouseleave="unhoverEffect">
      <picture>
        <img src="../assets/img4.png" alt="" />
      </picture>
      <p class="headTitle">Tank war (ts, html, canvas)</p>
      <p class="bodyTitle">
        No libraries, no scripts from other resourses. Just a handmaded tank game. 
        
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    let StartAnim = ref(false);
    onMounted(() => {
      setTimeout(() => {
        StartAnim.value = true;
        setTimeout(() => {
          StartAnim.value = false;
        }, 7000);
      }, 1000);
    });
    let hoverEffect = () => {
      let workBoxes = document.querySelectorAll(".workBox");
      for (let i = 0; i < workBoxes.length; i++) {
        if (i !== 4) {
          workBoxes[i].classList.add("shiftLeft");
        }
      }
    };
    let unhoverEffect = () => {
      let workBoxes = document.querySelectorAll(".workBox");
      for (let i = 0; i < workBoxes.length; i++) {
        if (i !== 4) {
          workBoxes[i].classList.remove("shiftLeft");
        }
      }
    };
    return { StartAnim, hoverEffect, unhoverEffect };
  },
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
  align-items: center;
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
}
.workBox:hover {
  transform: scale(1.4);
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
  transform: translateX(+10%) scale(1.4);
  z-index: 10;
}
.workBox:nth-child(1):hover ~ .workBox:nth-child(n + 2) {
  transform: translateX(+10%);
}
.workBox:nth-child(4):hover {
  transform: translateX(-10%) scale(1.4);
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
</style>
