import { createRouter, createWebHashHistory } from "vue-router";
import MajorPageVue from "../views/MajorPage.vue";
import ExperiencePageVue from "../views/ExperiencePage.vue";
import SkillsPageVue from "../views/SkillsPage.vue";
import PortfolioPageVue from "../views/PortfolioPage.vue";
import tanksVue from "../views/items/tanks.vue";

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
      path: "/PortfolioPage",
      name: "PortfolioPage",
      props: true,
      component: PortfolioPageVue,
    },
    {
      path: "/PortfolioPage/tankgame",
      name: "tanksVue",
      props: true,
      component: tanksVue,
    },
  ],
});

export default router;
