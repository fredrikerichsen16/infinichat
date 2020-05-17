import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';

Vue.config.productionTip = false;

Vue.prototype.$apiPath = 'localhost:3000';

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#vue');

/**
 * TODO: Hardcode location of singular blobs, and group in a div conversing blobs.
 * TODO: Put location of self blob in state so that when you leave a convo you return back to where you were.
 * TODO: Separate Login from Signin. Make signin ask for all the info about a user, not just credentials.
 * TODO: Complete settings page. (Link with user object and on submit update user object in state and JSON file.)
 * TODO: When you join a convo, actually make the page with their avatar representing their video chat camera.
 */