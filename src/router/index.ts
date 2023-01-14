import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import WorkView from '@/views/WorkView.vue';
import EditorView from '@/views/EditorView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "info",
			component: HomeView,
		},
		{
			path: "/work",
			name: "work",
			component: WorkView,
		},
		{
			path: "/editor",
			name: "editor",
			component: EditorView,
		},
		{
			path: "/contact",
			name: "contact",
			component: ContactView,
			//component: () => import("@/views/ContactView.vue"),
		},
	],
});

export default router;
