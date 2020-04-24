import Vue from 'vue';
import VueRouter from 'vue-router';

import Signin from '@/components/Signin.vue';
import Plane from '@/components/Plane.vue';
import Chat from '@/components/Chat.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Signin,
        meta: {}
    },
    {
        path: '/plane',
        component: Plane,
        meta: {
            protected: true
        }
    },
    {
        path: '/chat',
        component: Chat,
        meta: {
            protected: true
        }
    },
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    /**
     * Authenticate user before they enter sensitive routes (widgets) and load content
     */
    if(router.authorized || !to.meta.hasOwnProperty('protected') || !to.meta.protected) {
        return next();
    }

    // check if user is authenticated..., if no redirect
    router.authorized = true;

    return next();
});

export default router;
