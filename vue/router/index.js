import Vue from 'vue';
import VueRouter from 'vue-router';
import storage from 'local-storage';

import Signin from '@/components/Signin.vue';
import Plane from '@/components/Plane.vue';
import Chat from '@/components/Chat.vue';
import Lobby from '@/components/Lobby.vue';
import Settings from '@/components/Settings.vue';
import Signup from '@/components/Signup.vue';
import CreateChatroom from '@/components/CreateChatroom.vue';


Vue.use(VueRouter);

const routes = [
    {
        name: 'Signin',
        path: '/',
        component: Signin,
    },
    {
        name: 'Signup',
        path: '/signup',
        component: Signup,
    },
    {
        name: 'Plane',
        path: '/plane',
        component: Plane,
        meta: {
            protected: true,
            navigation: [
                { to: 'Settings' }, { text: 'Leave Room', to: 'Lobby' }, /*{ text: 'Queue Song', to: '/queue-song' },*/ { text: 'Sign Out', to: '@signout' },
            ],
        }
    },
    {
        name: 'Chat',
        path: '/chat',
        component: Chat,
        meta: {
            protected: true,
            navigation: [
                { text: 'Leave', to: 'Plane' }
            ],
        }
    },
    {
        name: 'Lobby',
        path: '/lobby',
        component: Lobby,
        meta: {
            protected: true,
            navigation: [
                { text: 'Sign Out', to: '@signout' }
            ],
        }
    },
    {
        name: 'CreateChatroom',
        path: '/create-chatroom',
        component: CreateChatroom,
        meta: {
            protected: true,
            navigation: []
        }
    },
    {
        name: 'Settings',
        path: '/settings',
        component: Settings,
        meta: {
            protected: true,
            navigation: [
                { text: 'Back', to: 'Plane' }, { text: 'Sign Out', to: '@signout' }
            ],
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
    if(storage.get('userId') || !to.meta.hasOwnProperty('protected') || !to.meta.protected) {
        return next();
    }

    next({ path: '/' });
});

export default router;
