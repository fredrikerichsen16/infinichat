import Vue from 'vue';
import Vuex from 'vuex';
import users from '../users.json';

Vue.use(Vuex);

const modules = {};

const state = {
    user: {

    },

    users,
};

const mutations = {
    SET_USER (state, userId) {
        state.user = state.users[userId];
    }
};

const actions = {};

export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
});