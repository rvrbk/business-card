import vue from 'vue';
import vuerouter from 'vue-router';
import app from './components/app';
import bcard from './components/bcard';

vue.use(vuerouter);

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app,
        children: [{
            path: '/bcard/:slug',
            component: bcard
        }] 
    }]
});

new vue({
    el: '#vue-app',
    router
});