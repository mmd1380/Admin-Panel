import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredSearch: {},
  },
  getters: {},
  mutations: {
    SET_FILTERED_SEARCH: (state, payload) => state.filteredSearch = { ...payload },
  },
  actions: {},
  modules: {}
});