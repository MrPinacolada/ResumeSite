<template>
  <div class="dino-runner">
    <svg
      viewBox="0 0 200 45"
      class="scene"
      fill="currentColor"
      preserveAspectRatio="xMinYMid meet"
    >
      <g class="ground">
        <rect x="0" y="30" width="200" height="2" rx="1" />
        <rect x="200" y="30" width="200" height="2" rx="1" />
      </g>

      <g class="cloud cloud-1" opacity="0.7">
        <ellipse cx="30" cy="8" rx="10" ry="4" />
        <ellipse cx="37" cy="8" rx="7" ry="3.2" />
        <ellipse cx="24" cy="9" rx="6" ry="2.5" />
      </g>
      <g class="cloud cloud-2" opacity="0.55">
        <ellipse cx="120" cy="6" rx="8" ry="3.2" />
        <ellipse cx="127" cy="6" rx="6" ry="2.6" />
        <ellipse cx="114" cy="7" rx="5" ry="2" />
      </g>

      <g class="cactus c1">
        <path d="M0 0h3v12h-3z M3 4h3v5h-3z M-3 7h3v6h-3z" transform="translate(0,18) scale(1.1)" />
      </g>
      <g class="cactus c2">
        <path d="M0 0h3v14h-3z M3 4h3v6h-3z M-3 9h3v6h-3z" transform="translate(0,16) scale(1.2)" />
      </g>
      <g class="cactus c3">
        <path d="M0 0h2.5v10h-2.5z M2.5 4h2.5v5h-2.5z M-2.5 6h2.5v6h-2.5z" transform="translate(0,20) scale(1)" />
      </g>

      <g class="dino" transform="translate(40,22)">
        <rect x="-6" y="-8" width="18" height="9" rx="1" />
        <path d="M-12,-6 L-6,-6 L-10,-3 Z" />
        <rect x="10" y="-13" width="8" height="7" rx="1" />
        <rect x="16.5" y="-10.5" width="1.3" height="1.3" fill="white" />
        <g class="leg leg-a">
          <rect x="0" y="0" width="3" height="7" />
          <rect x="4" y="0" width="3" height="7" />
        </g>
        <g class="leg leg-b">
          <rect x="-1" y="0" width="3" height="7" />
          <rect x="5.5" y="0" width="3" height="7" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.dino-runner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* color is set by the host (currentColor drives the SVG fill) */
}

.scene {
  width: 100%;
  height: 100%;
  display: block;
}

.ground { animation: ground-scroll 5s linear infinite; }
@keyframes ground-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}

.cloud-1 { animation: cloud-move 28s linear infinite; }
.cloud-2 { animation: cloud-move 36s linear infinite; animation-delay: -12s; }
@keyframes cloud-move {
  from { transform: translateX(100%); }
  to   { transform: translateX(-120%); }
}

.c1 { animation: cactus-move 6.5s linear infinite; }
.c2 { animation: cactus-move 7.4s linear infinite; animation-delay: -3s; }
.c3 { animation: cactus-move 8.8s linear infinite; animation-delay: -6s; }
@keyframes cactus-move {
  from { transform: translateX(100%); }
  to   { transform: translateX(-20%); }
}

.leg-a { animation: legs 0.26s steps(1) infinite; }
.leg-b { animation: legs 0.26s steps(1) infinite reverse; }
@keyframes legs {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}
</style>
