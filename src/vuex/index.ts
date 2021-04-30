import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import ModuleAVuex from './modules/ModuleA.vuex';
// 创建持久化配置
const dataState = createPersistedState({
  storage: {
    getItem: key => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: key => uni.removeStorageSync(key),
  }, // 持久化方式
  paths: ['atest'], // 持久化数据 防止刷新页面后vuex数据丢失
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    atest: '',
    token: '',
  },
  mutations: {
    setAtestValue(state, value) {
      state.atest = value;
    },
  },
  getters: {

  },
  actions: {
    testActions({ commit }, data) {
      // console.log(dataState, 'data', data);
    },
  },
  modules: {
    moduleA: ModuleAVuex, // 定义子vuex模块 moduleA为模块的命名空间名
  },
  plugins: [dataState],
});
