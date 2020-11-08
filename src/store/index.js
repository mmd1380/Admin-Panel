import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredSearch: {},
    activeModal: false,
    snackbar: "",
    filterChips: [],
    searchInputs: [],
    searchValues: {}
  },
  getters: {},
  mutations: {
    SET_FILTERED_SEARCH: (state, payload) => {
      const temp = state.searchValues;
      delete temp[payload];
      state.searchValues = { ...temp };
    },
    SET_ACTIVE_MODAL: (state, payload) => state.activeModal = payload,
    SET_SNACKBAR: (state, status) => {
      state.snackbar = status;
    },
  },
  actions: {
    getSavedFilters({ state }) {
      const db = require("../apis/SavedFilters.json");
      state.filterChips = [ ...db ];
    },
    getSearchInputs({ state }) {
      const db = require("../apis/SearchParty.json");
      state.searchInputs = [ ...db.SearchParty.AdvancedSearch ];
    }
  },
  modules: {}
});