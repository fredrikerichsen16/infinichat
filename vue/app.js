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