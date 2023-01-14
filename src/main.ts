import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import gsap from "gsap";

import App from "@/App.vue";
import router from "./router";

import "@/assets/scss/import.scss";

const app = createApp(App);

//Animation
app.use(MotionPlugin);
app.use(gsap);

//Pinia
app.use(createPinia());

//Router
app.use(router);
app.mount("#app");
