import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.ues(VueRouter);

Vue.config.productionTip = false

import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/hello', component: HelloWorld },
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
