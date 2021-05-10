import HelloWorld from '../components/HelloWorld.vue';
import Login from '../views/login/Login.vue';
import Join from '../views/login/Join.vue';
import Main from '../views/Main.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/hello', component: HelloWorld },
  { path: '/join', component: Join },
  { path: '/', component: Main },
];

export default routes;
