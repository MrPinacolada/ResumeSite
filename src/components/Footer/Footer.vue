<template>
  <footer class="footerContainer animate__animated animate__slideInUp">
    <lottie-player
      src="https://assets2.lottiefiles.com/packages/lf20_OT15QW.json"
      background="transparent"
      speed="1"
      style="width: 150px; height: 150px"
      loop
      autoplay
    ></lottie-player>
    <Toolbar style="height: 60px; font-size: 0.9em; margin-right: 50px">
      <template #start>
        <span><b>docker </b>pull mrpinacolada/resumesite:latest</span>
      </template>
      <template #end>
        <i
          @click="copyCode()"
          style="font-size: 1em; cursor: pointer"
          class="pi pi-copy"
          v-tooltip.top="{
            value: 'Copy Code',
            class: 'custom-tooltip',
          }"
        ></i>
      </template>
    </Toolbar>
    <i
      @click="openTG()"
      style="font-size: 2rem; color: white; cursor: pointer"
      class="pi pi-telegram"
    ></i>
    <i
      @click="openGM()"
      style="font-size: 2rem; color: white; cursor: pointer"
      class="pi pi-google"
    ></i>
    <i
      @click="openLI()"
      style="font-size: 2rem; color: white; cursor: pointer"
      class="pi pi-linkedin"
    ></i>
  </footer>
</template>

<script setup lang="ts">
const openTG = () => {
  window.open("https://t.me/Nkanka44", "_blank");
};
const openGM = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=vasiasko112@gmail.com&su=Offer from the best company in the world",
    "_blank"
  );
};
const openLI = () => {
  window.open("https://www.linkedin.com/in/mr-pinacolada/", "_blank");
};

const copyCode = () => {
  navigator.clipboard.writeText("pull mrpinacolada/resumesite:latest");
};
</script>

<style scoped>
.footerContainer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgb(46, 46, 47);
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
  gap: 30px;
}
lottie-player {
  position: absolute;
  left: -30px;
  top: -108px;
  transform: scaleX(-1);
  z-index: 999;
}

:deep(.p-toolbar) {
  align-content: center;
}

@media only screen and (max-width: 768px) {
  .footerContainer {
    display: flex;
    position: fixed;
    height: 40px;
    z-index: 999;
  }
  lottie-player {
    position: absolute;
    left: -30px;
    top: -108px;
    transform: scaleX(-1);
    z-index: 999;
  }
  :deep(.p-toolbar) {
    display: none;
  }
}
</style>
