import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false

import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

const routes = [
  { path: '/hello', component: HelloWorld },
  { path: '/login', component: Login },
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
