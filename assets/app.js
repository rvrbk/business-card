import vue from 'vue';
import vuerouter from 'vue-router';
import app from './components/app';
import employees from './components/employees';
import bcard from './components/bcard';

vue.use(vuerouter);

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app,
        children: [{
            name: 'employees',
            path: '/',
            component: employees
        }, {
            name: 'bcard',
            path: '/bcard/:slug',
            component: bcard
        }] 
    }]
});

new vue({
    el: '#vue-app',
    router
});