import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login'
        },
        component: () => import("../views/login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Icarus`;
    const role = localStorage.getItem('username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next()
    }
});

export default router;