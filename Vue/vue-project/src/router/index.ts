import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "../views/Main.vue";
import Login from "../views/login/index.vue";

const routes = [
  {
    path: "/",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
