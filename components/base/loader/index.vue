<template>
  <div class="loader">
    <lottie-player
      v-if="anim"
      autoplay
      loop
      mode="reverse-bounce"
      :src="anim"
      style="width: 620px"
    ></lottie-player>
  </div>
</template>

<script setup lang="ts">
import anim from "~/assets/anim/loader.json";
</script>

<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}

.loader {
  display: grid;
  height: 100vh;
  justify-items: center;
  place-content: center;
  width: 100vw;
  overflow: hidden;
}

svg {
  width: 50vw;
  height: 50vh;
  display: block;
}

.fbottom,
.ll {
  fill: none;
}

.fbottom {
  stroke-width: inherit;
  stroke: var(--neutral);
  stroke-opacity: 0.3;
}

.ll {
  stroke: var(--brand);
  animation: loop 3s linear infinite;
  stroke-width: 0.35;
  stroke-dasharray: 3 24.5;
  stroke-linecap: round;
}

.finny {
  stroke-width: 1.43;
  animation: rot 36s linear infinite;
}

.shad {
  animation: raise 3s linear infinite;
}

.shad.odd {
  animation-delay: -1.5s;
}

@keyframes raise {
  0%,
  20% {
    opacity: 1;
  }
  30%,
  70% {
    opacity: 0;
  }
  80%,
  100% {
    opacity: 1;
  }
}
.ll {
  animation-delay: -1.5s;
}

.finny {
  perspective: 500px;
}

@keyframes loop {
  0% {
    stroke-dashoffset: 0.5;
  }
  100% {
    stroke-dashoffset: 28;
  }
}
.clip-shadow {
  stroke-linecap: butt;
  fill: none;
  opacity: 0.3;
  stroke-width: inherit;
  stroke: url(#sgrad);
}

#sgrad stop {
  stop-color: var(--bg-3);
}

@media (prefers-color-scheme: light) {
  #sgrad stop {
    stop-color: #2345;
  }
}
</style>
