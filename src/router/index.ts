import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/MajorPage.vue"),
    },
    {
      path: "/",
      name: "Home",
      props: true,
      component: () => import("../views/MajorPage.vue"),
    },
    {
      path: "/Experience",
      name: "Experience",
      props: true,
      component: () => import("../views/ExperiencePage.vue"),
    },
    {
      path: "/Skills",
      name:"Skills",
      props: true,
      component: () => import("../views/SkillsPage.vue"),
    },
    {
      path: "/Works",
      name:"Works",
      props: true,
      component: () => import("../views/WorksPage.vue"),
    },
  
  ],
});
export default router;
