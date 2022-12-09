import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    }, {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login'
        },
        component: () => import("../views/login.vue")
    }, {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            title: 'Dashboard'
        },
        component: () => import("../views/dashboard.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
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