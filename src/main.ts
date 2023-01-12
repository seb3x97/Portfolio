import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import App from "@/App.vue";
import router from "./router";

import "./assets/scss/import.scss";

const app = createApp(App);

app.use(MotionPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
