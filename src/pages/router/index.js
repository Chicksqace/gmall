//配置路由
//第一步：引入插件、安装插件
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
//引入路由相关的配置项
//引入相应的路由组件
import home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
let originPush=VueRouter.prototype.push;
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
export default new VueRouter({ routes:[
    {
        path: '/home',
        name: 'home',
        component:home,
        meta: { show: true },
    }
    ,
    {
        //命名路由,给路由起一个名字
        name: 'search',
        //在注册路由的时候,如果这里占位，切记务必要传递params
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
    }
    ,
    {
        path: '/login',
        component: Login,
        meta: { show: false },
    }
    ,
    {
        path: '/register',
        component: Register,
        meta: { show: false },
    }
    ,
    //重定向到首页
    {
        path: '/',
        redirect: '/home'
    }

]})