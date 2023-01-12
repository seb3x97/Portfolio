import { createRouter, createWebHistory } from "vue-router";
import InfoView from "../views/InfoView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "info",
            component: InfoView,
        },
        {
            path: "/work",
            name: "work",
            component: () => import("@/views/WorkView.vue"),
        },
        {
            path: "/editor",
            name: "editor",
            component: () => import("@/views/EditorView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("@/views/ContactView.vue"),
        },
    ],
});

export default router;