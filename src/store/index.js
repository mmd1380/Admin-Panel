import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredSearch: {},
    activeModal: false
  },
  getters: {},
  mutations: {
    SET_FILTERED_SEARCH: (state, payload) => state.filteredSearch = { ...payload },
    SET_ACTIVE_MODAL: (state, payload) => state.activeModal = payload
  },
  actions: {},
  modules: {}
});