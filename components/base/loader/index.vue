<template>
  <div class="loader">
    <div class="loader__inner">
      <p class="loader__brand">
        <span class="loader__mark">◤</span> NINJA<span class="loader__accent">DEV</span>
      </p>
      <div class="loader__bar" aria-hidden="true">
        <span class="loader__fill"></span>
      </div>
      <p class="loader__status mono-label">Loading interface</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loader {
  position: fixed;
  inset: 0;
  z-index: var(--z-loader);
  display: grid;
  place-content: center;
  background: var(--c-paper);
  background-image:
    linear-gradient(var(--c-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--c-line) 1px, transparent 1px);
  background-size: 64px 64px, 64px 64px;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    padding: 2rem;
  }

  &__brand {
    font-weight: 800;
    font-size: clamp(2rem, 7vw, 3.5rem);
    letter-spacing: -0.02em;
    color: var(--c-ink);
    display: inline-flex;
    align-items: center;
    gap: 0.4ch;
    animation: loader-rise 0.6s var(--ease-out-expo) both;
  }
  &__mark,
  &__accent {
    color: var(--c-accent);
  }

  &__bar {
    width: min(280px, 70vw);
    height: 4px;
    background: var(--c-line);
    overflow: hidden;
    border-radius: 999px;
  }
  &__fill {
    display: block;
    height: 100%;
    width: 100%;
    background: var(--c-accent);
    transform-origin: left;
    transform: scaleX(0);
    animation: loader-fill 1.05s var(--ease-out-expo) forwards;
  }

  &__status {
    color: var(--c-ink-3);
  }
}

@keyframes loader-fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes loader-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .loader__fill {
    transform: scaleX(1);
    animation: none;
  }
  .loader__brand {
    animation: none;
  }
}
</style>
