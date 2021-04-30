import Vue from 'vue';

import uView from 'uview-ui';
import App from './App.vue';
import store from './vuex';

Vue.use(uView);

Vue.config.productionTip = false;

new App({
  store,
}).$mount();
