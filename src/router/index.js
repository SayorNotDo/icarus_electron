import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
    component: Home,
    children: [
      {
        path: "/dashboard",
        meta: {
          title: "Dashboard",
        },
        component: () => import("../views/dashboard.vue"),
      },
      {
        path: "/schedule",
        meta: {
          title: "Schedule",
        },
        component: () => import("../views/schedule.vue"),
      },
      {
        path: "/execute",
        meta: {
          title: "Execute",
        },
        component: () => import("../views/execute.vue"),
      },
      {
        path: "/debug",
        meta: {
          title: "Job",
        },
        component: () => import("../views/debug.vue"),
      },
      {
        path: "/analystic",
        meta: {
          title: "Analystic",
        },
        component: () => import("../views/analystic.vue"),
      },
      {
        path: "/framework",
        meta: {
          title: "Framework",
        },
        component: () => import("../views/framework.vue"),
      },
      {
        path: "/profile",
        meta: {
          title: "Profile",
        },
        component: () => import("../views/profile.vue"),
      },
      {
        path: "/setting",
        meta: {
          title: "Setting",
        },
        component: () => import("../views/setting.vue"),
      },
      {
        path: "/resource",
        meta: {
          title: "Resource",
        },
        component: () => import("../views/resource.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: () => import("../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | Icarus`;
//     const role = localStorage.getItem('username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else {
//         next()
//     }
// });

export default router;
