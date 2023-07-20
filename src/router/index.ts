import { createRouter, createWebHashHistory } from "vue-router";
import MajorPageVue from "../views/MajorPage.vue";
import ExperiencePageVue from "../views/ExperiencePage.vue";
import SkillsPageVue from "../views/SkillsPage.vue";
import WorksPageVue from "../views/WorksPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: MajorPageVue,
    },
    {
      path: "/",
      name: "Home",
      props: true,
      component: MajorPageVue,
    },
    {
      path: "/Experience",
      name: "Experience",
      props: true,
      component: ExperiencePageVue,
    },
    {
      path: "/Skills",
      name: "Skills",
      props: true,
      component: SkillsPageVue,
    },
    {
      path: "/Works",
      name: "Works",
      props: true,
      component: WorksPageVue,
    },
  ],
});

export default router;
