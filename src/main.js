import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/css/layout.scss'; // layout.scss
import './assets/css/style.scss'; // style.scss

import Plugin from './plugins/plugin.js';

Vue.use(VueRouter);
Vue.use(Plugin);

Vue.config.productionTip = false;

import routes from './routes/index.js';

import './quasar';

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
