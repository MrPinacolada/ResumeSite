<template>
  <div class="loader">
    <svg class="finny scroll fade scrolled" viewBox="-1 -1 12 8">
      <defs>
        <path
          id="infinite"
          d="M5 3C4 2 3.1 1 2 1a2 2  0 000 4c1.1 0 2-1 3-2s1.9-2  3-2a2 2 0 010 4C6.9  5 6 4 5 3"
        ></path>
        <radialGradient
          id="sgrad"
          gradientUnits="userSpaceOnUse"
          cx="5"
          cy="3"
          r="3.4"
        >
          <stop offset=".25" stop-color="#000"></stop>
          <stop offset=".9" stop-color="#000" stop-opacity="0"></stop>
        </radialGradient>
        <path
          id="shad1"
          class="clip-shadow"
          d="M4.5 2.5C3.7 1.7 2.9 1 2 1m6 4c-1 0-1.7-.7-2.5-1.5"
        ></path>
      </defs>
      <use href="#infinite" class="fbottom"></use>
      <use href="#shad1" class="shad even" />
      <g class="shad odd">
        <use href="#shad1" transform="translate(0 6) scale(1 , -1)" />
      </g>
      <use href="#infinite" class="ll"></use>
    </svg>
  </div>
</template>

<script setup lang="ts"></script>

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
