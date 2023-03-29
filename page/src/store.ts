import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opened: false,
    hovered: false,
    flyaway: true,
    keyword: ""
  },
  getters: {
    isOpened(state) {
      return state.opened;
    },
    isHovered(state) {
      return state.hovered;
    },
    isClicked(state) {
      return state.flyaway;
    },
    getKeyword(state) {
      return state.keyword;
    }
  },
  mutations: {
    setOpened(state, payload) {
      state.opened = payload.flg;
    },
    setHovered(state, payload) {
      state.hovered = payload.flg;
    },
    setClicked(state, payload) {
      state.flyaway = payload.flg;
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
    setClickedAction(context) {
      context.commit({
        type: "setClicked",
        flg: true
      });
    },
    unsetClickedAction(context) {
      context.commit({
        type: "setClicked",
        flg: false
      });
    },
    setHoveredAction(context) {
      context.commit({
        type: "setHovered",
        flg: true
      });
    },
    unsetHoveredAction(context) {
      context.commit({
        type: "setHovered",
        flg: false
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
