<template>
  <div class="base-icon">
    <nuxt-icon class="icon" :filled="props.filled" :name="name" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name?: string;
  size?: string;
  color?: string;
  rot?: string;
  filled?: boolean;
  square?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: "none",
  size: "24px",
  color: "#2C2933",
  rot: "0deg",
  filled: false,
});
</script>

<style lang="scss">
.base-icon {
  color: v-bind(color);
  rotate: v-bind(rot);
  transition: rotate 0.3s ease;
  height: v-bind(size);
  width: v-bind(size);
  .icon {
    display: flex;
    height: v-bind(size);
    width: v-bind(size);
    svg {
      width: v-bind(size);
      height: v-bind(size);
      margin-bottom: 0;
    }
  }
}
</style>
