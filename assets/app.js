import vue from 'vue';
import vuerouter from 'vue-router';
import app from './components/app';

vue.use(vuerouter);

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app 
    }]
});

new vue({
    el: '#vue-app',
    router
});