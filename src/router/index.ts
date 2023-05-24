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
  ],
});
export default router;
