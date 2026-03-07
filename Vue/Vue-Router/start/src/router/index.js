import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/temperature",
      name: "temperature",
      component: () => import("../views/TemperatureView.vue"),
    },
    {
      path: "/length",
      name: "length",
      component: () => import("../views/LengthView.vue"),
    },
  ],
});

export default router;
