import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "../views/Main.vue";
import Login from "../views/login/index.vue";

import Dashboard from "../views/dashboard/index.vue";
import Admin from "../views/auth/admin/index.vue";
import Group from "../views/auth/group/index.vue";
import Staff from "../views/vppz/staff/index.vue";
import Order from "../views/vppz/order/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    name: "main",
    children: [
      {
        path: "dashboard",
        meta: {
          id: "1",
          name: "控制台",
          icon: "Platform",
          path: "/dashboard",
          discribe: "控制台",
        },
        component: Dashboard,
      },
      {
        path: "auth",
        meta: {
          id: "2",
          name: "权限管理",
          icon: "Grid",
        },
        children: [
          {
            path: "",
            alias: ["admin"],
            meta: {
              id: "1",
              name: "账号管理",
              icon: "Avator",
              path: "/auth/admin",
              discribe: "管理员进行编辑",
            },
            component: Admin,
          },
          {
            path: "group",
            meta: {
              id: "2",
              name: "菜单管理",
              icon: "Menu",
              path: "/auth/group",
              discribe: "菜单进行编辑",
            },
            component: Group,
          },
        ],
      },
      {
        path: "vppz",
        meta: {
          id: "3",
          name: "问诊系统",
          icon: "BellFilled",
          children: [
            {
              path: "",
              alas: ["staff"],
              meta: {
                id: "1",
                name: "陪护管理",
                icon: "Checked",
                path: "/vppz/staff",
                discribe: "陪护师进行编辑",
              },
              component: Staff,
            },
            {
              path: "order",
              meta: {
                id: "2",
                name: "订单管理",
                icon: "List",
                path: "/vppz/order",
                discribe: "C端下单",
              },
              component: Order,
            },
          ],
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
