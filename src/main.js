import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/css/layout.scss'; // layout.scss
import './assets/css/style.scss'; // style.scss

import Plugin from './plugins/plugin.js';

Vue.use(VueRouter);
Vue.use(Plugin);

Vue.config.productionTip = false;

import routes from '@/routes/index';

import './quasar';

// router mode
// default: hash (#)
// prev: abstract ~2021
// current: history 2021~
const mode = 'history';

const router = new VueRouter({
  mode,
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
