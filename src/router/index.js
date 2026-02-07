import { createRouter, createWebHistory } from "vue-router";
import DesignGallery from "@/views/DesignGallery.vue";
import DesignPage from "@/views/DesignPage.vue";
import Original from "@/views/Original.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "gallery",
			component: DesignGallery,
			meta: { title: "Galeria de Designs" },
		},
		{
			path: "/original",
			name: "original",
			component: Original,
			meta: { title: "Original" },
		},
		{
			path: "/design/:id(\\d+)",
			name: "design",
			component: DesignPage,
			meta: { title: "Design" },
		},
	],
});

router.beforeEach((to, _from, next) => {
	const title = to.meta?.title;
	if (title) document.title = `${title} | Felipe Bomfim`;
	next();
});

export default router;
