<template>
  <div class="backdrop"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.backdrop {
  position: absolute;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background: url(../../assets/anim/back.svg);
  justify-items: center;
  place-content: center;
  overflow: hidden;
  opacity: 0.4;
  z-index: 1;
}
</style>
