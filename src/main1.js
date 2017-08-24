
import Vue from 'vue';
import App from './App.vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
import './static/libs/mui-master/dist/css/mui.css';
import VueRouter from 'vue-router';
import Home from './components/home/Home1.vue';
import Search from './components/search/Search.vue';
import Shopcart from './components/shopcart/Shopcart.vue';
import Vip from './components/vip/Vip.vue';
import NewsList from './components/news/NewsList.vue';
import DetailList from './components/news/DetailList.vue';
import PhotoList from './components/photo/PhotoList.vue';
import PhotoDetails from './components/photo/PhotoDetails.vue';
import common from './components/commons/common.vue';

import  './static/css/global.css';
Vue.use(VueRouter);
import Axios from "axios";
Vue.prototype.$ajax=Axios;
Axios.defaults.baseURL='http://182.254.146.100:8899/api/';

// 全局组件
import NavBar from "./components/commons/NavBar.vue"
Vue.component("ComBar",common);
Vue.component("NavBar",NavBar);
//截段器
// Add a request interceptor 
Axios.interceptors.request.use(function (config) {
    MintUi.Indicator.open({
  text: '加载中...',
  spinnerType: 'fading-circle'
});
    // Do something before request is sent 
    return config;
  }, function (error) {
    // Do something with request error 
    return Promise.reject(error);
  });
 
// Add a response interceptor 
Axios.interceptors.response.use(function (response) {
    // Do something with response data 
    MintUi.Indicator.close();
    return response;
  }, function (error) {
    // Do something with response error 
    return Promise.reject(error);
  });

  //結束
// moment
import Moment from "moment";
Vue.filter('convertData',function(value){
    return Moment(value).format('YYYY-MM-DD');
});
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
let router =new VueRouter({
    routes:[
    {path:'/',redirect:{name:'home'}},
    {
        name:'home',path:'/home',component:Home
    },{
        name:'vip',path:'/vip',component:Vip
    },{
        name:'shopcart',path:'/shopcart',component:Shopcart
    },{
        name:'search',path:'/search',component:Search
    },{
        name:'NewsList',path:'/NewsList',component:NewsList
    },{
        name:'DetailList',path:'/DetailList',query:'newId',component:DetailList
    },{
        name:'PhotoList',path:'/PhotoList',component:PhotoList
    },{
        name:'PhotoDetails',path:'/photo/PhotoDetails/:imgId',component:PhotoDetails
    }]
})
new Vue({
    el:"#app",
    render:c=>c(App),
    router,
})