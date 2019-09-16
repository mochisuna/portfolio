import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opened: false,
    keyword: ""
  },
  getters: {
    isOpened(state) {
      return state.opened;
    },
    getKeyword(state) {
      return state.keyword;
    }
  },
  mutations: {
    setOpened(state, payload) {
      state.opened = payload.flg;
    },
    setKeyword(state, payload) {
      state.keyword = payload.keyword;
    }
  },
  actions: {
    setOpenedAction(context) {
      context.commit({
        type: "setOpened",
        flg: true
      });
    },
    setKeywordAction(context, payload) {
      context.commit({
        type: "setKeyword",
        keyword: payload.keyword
      });
    }
  }
});
