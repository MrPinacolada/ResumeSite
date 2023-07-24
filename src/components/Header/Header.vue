<template>
  <div class="HeaderContainer animate__animated animate__slideInDown">
    <RouterLink :to="{ name: 'Home' }">
      <span
        class="MajorHead"
        :class="{ MajorHeadBefore: route.fullPath != '/' }"
        >{{ currentTitle }}</span
      >
    </RouterLink>
    <div class="bunchOfLie">
      <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

let active = ref(0);
let currentTitle = ref("Resume pages");

let items = ref([
  {
    label: "Portfolio",
    icon: "pi pi-fw pi-briefcase",
    to: "/PortfolioPage",
  },
  {
    label: "Skills",
    icon: "pi pi-fw pi-bolt",
    to: "/Skills",
  },
  {
    label: "Experience",
    icon: "pi pi-fw pi-compass",
    to: "/Experience",
  },
]);

watch(
  () => route.path,
  (newPath) => {
    currentTitle.value = newPath == "/" ? "Resume pages" : "Back to homepage";
  }
);
</script>

<style scoped>
.HeaderContainer {
  position: relative;
  display: flex;
  height: 60px;
  background-color: var(--gray-800);
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: space-between;
  z-index: 999;
}
.MajorHead {
  color: var(--surface-50);
  z-index: 10;
  position: relative;
  display: inline-block;
}
.MajorHeadBefore,
.HeadP {
  color: rgb(216, 216, 216);
  cursor: pointer;
  z-index: 10;
  position: relative;
  display: inline-block;
}
.bunchOfLie {
  display: flex;
  gap: 70px;
}
.MajorHeadBefore::before,
.HeadP::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(216, 216, 216);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}
.MajorHeadBefore:hover::before,
.HeadP:hover::before {
  transform: scaleX(1);
  transform-origin: right;
}
@media only screen and (max-width: 768px) {
  .HeaderContainer {
    display: flex;
    height: 60px;
    background-color: var(--gray-800);
    align-items: center;
    padding-left: 20px;
    padding-right: 30px;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
  }
  .MajorHead {
    color: rgb(216, 216, 216);
    z-index: 10;
    position: relative;
    display: inline-block;
    font-size: 0.9em;
    margin: 0;
  }
  .MajorHeadBefore,
  .HeadP {
    color: rgb(216, 216, 216);
    cursor: pointer;
    z-index: 10;
    position: relative;
    display: inline-block;
    font-size: 0.8em;
  }
  .bunchOfLie {
    display: flex;
    align-items: center;
    gap: 0px;
  }
  .MajorHeadBefore::before,
  .HeadP::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(216, 216, 216);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }
  .MajorHeadBefore:hover::before,
  .HeadP:hover::before {
    transform: scaleX(1);
    transform-origin: right;
  }
  :deep(.p-menuitem-link) {
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 5px;
  }
  :deep(.p-menuitem-text) {
    font-size: 0.8rem !important;
    font-weight: 400 !important;
    line-height: 0 !important;
  }
  :deep(.p-menuitem-icon) {
    font-size: 0.7rem !important;
  }
}
a {
  text-decoration: none;
  cursor: context-menu;
}
:deep(.p-tabmenu .p-tabmenu-nav) {
  background: var(--gray-800) !important;
  border: none !important;
}
:deep(.p-tabmenuitem .p-menuitem-link) {
  background-color: var(--gray-800) !important;
  color: var(--surface-50) !important;
}
</style>
