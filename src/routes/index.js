import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/login/Login';
import Join from '@/views/login/Join';
import Index from '@/views/Index';
import Main from '@/views/Main';
import NotFound from '@/components/NotFound';
import Place from '@/views/place/Place';

const routes = [
    {path: '*', component: NotFound},
    {path: '/login', component: Login},
    {path: '/hello', component: HelloWorld},
    {path: '/join', component: Join},
    {
        path: '/', component: Index, children: [
            {path: '/main', component: Main},
            {path: '/place', component: Place},
        ]
    },

];

export default routes;
