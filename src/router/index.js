import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                meta: {
                    title: 'Dashboard',
                },
                component: () => import('../views/dashboard.vue')
            }, {
                path: '/schedule',
                meta: {
                    title: 'Schedule',
                },
                component: () => import('../views/schedule.vue')
            }, {
                path: '/execute',
                meta: {
                    title: 'Execute',
                },
                component: () => import('../views/execute.vue')
            }, {
                path: '/debug',
                meta: {
                    title: 'Job',
                },
                component: () => import('../views/debug.vue')
            }, {
                path: 'chart',
                meta: {
                    title: 'Chart',
                },
                component: () => import('../views/chart.vue')
            }
        ]
    }, {
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