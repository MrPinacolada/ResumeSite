<template>
  <div class="backdrop"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../../assets/anim/back.svg);
  justify-items: center;
  place-content: center;
  overflow: hidden;
  opacity: 0.4;
  z-index: 1;
}
</style>
