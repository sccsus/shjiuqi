
import Vue from 'vue';
import App from './App.vue';


import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);

import './static/libs/mui-master/dist/css/mui.css';

import VueRouter from 'vue-router';


import Home from './components/home/Home1.vue';
Vue.use(VueRouter);


let router =new VueRouter({
    routes:[
    {
        name:'home',path:'/home',component:Home
    }]
})

import Axios from "axios";
Vue.prototype.$ajax=Axios;
Axios.defaults.baseURL='http://182.254.146.100:8899/api/';

new Vue({
    el:"#app",
    render:c=>c(App),
    router,
})