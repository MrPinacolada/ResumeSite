import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import TabMenu from "primevue/tabmenu";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Tag from "primevue/tag";
import Card from "primevue/card";
import ProgressSpinner from "primevue/progressspinner";
import Toolbar from "primevue/toolbar";
import Tooltip from 'primevue/tooltip';

import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";

import "animate.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  inputStyle: "filled",
  zIndex: {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100,
  },
});
app.use(createPinia());
app.use(router);
app.directive('tooltip', Tooltip);

app.component("Footer", Footer);
app.component("Header", Header);
app.component("TabMenu", TabMenu);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("Tag", Tag);
app.component("Card", Card);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Toolbar", Toolbar);

app.mount("#app");
export default app;
