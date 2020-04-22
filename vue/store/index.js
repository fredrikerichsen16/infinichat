import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {};

const state = {
    user: 'Bob'
};

const mutations = {};

const actions = {};

export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
});