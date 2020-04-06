import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './user';

Vue.use(Vuex);

const modules = { userStore };
const state = {};
const mutations = {};
const actions = {};

export default new Vuex.Store({ modules, state, mutations, actions });
