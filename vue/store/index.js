import Vue from 'vue';
import Vuex from 'vuex';
import users from '@/users.json';
import storage from 'local-storage';
import merge from 'lodash.merge';
import cloneDeep from 'lodash.clonedeep';

Vue.use(Vuex);

console.log(storage.get('users'));

const modules = {};

const state = {
    user: storage.get('user') || {},

    users: storage.get('users') || users,

    userId: storage.get('userId') || null,

    userUnderInspection: null,

    chatParticipants: [],
};

const mutations = {
    SET_USER (state, userId) {
        state.user = state.users[userId];
        state.userId = userId;

        storage.set('user', state.user);
        storage.set('userId', state.userId);
    },

    SET_USER_UNDER_INSPECTION(state, user) {
        state.userUnderInspection = user;
    },

    UPDATE_USER(state, overwriter, updateDatabase = true) {
        let updatedUser = cloneDeep(merge(state.user, overwriter));
        state.user = updatedUser;
        if(updateDatabase) {
            state.users[state.userId] = updatedUser;
            storage.set('users', state.users);
            storage.set('user', updatedUser);
        }
    },

    ADD_USER(state, user) {
        state.user = user;
        state.users.push(user);
        state.userId = state.users.length - 1;

        storage.set('users', state.users);
        storage.set('user', user);
        storage.set('userId', state.userId);
    },

    SIGN_OUT(state) {
        state.user = {};
        state.userId = null;
        storage.remove('user');
        storage.remove('userId');
    },

    SET_CHAT_PARTICIPANTS(state, participants) {
        state.chatParticipants = participants;
    }
};

const actions = {};

export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
});