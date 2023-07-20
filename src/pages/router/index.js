//配置路由
//第一步：引入插件、安装插件
import VueRouter from "vue-router";
import Vue from "vue";
import routes from "./routes";
import store from '@/store';
Vue.use(VueRouter);
//引入路由相关的配置项
//引入相应的路由组件

let originPush=VueRouter.prototype.push;
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
let router=new VueRouter({ 
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        return {  y: 0 }
      }
})

// 全局守卫：前置守卫（在路由之间进行判断）
router.beforeEach(async (to,from,next)=>{
        next();
    let token=store.state.user.token;
    let name=store.state.user.userInfo.name;
    if(token){
        if(to.path=='/login'){
            next('/home')
        }else{
            // 如果有用户名
            if(name){
                next();
            }else{
                try {
                    // 没有用户名，派发action让仓库存储用户信息在跳转
                await store.dispatch('getUserInfo');
                next();
                } catch (error) {
                    // token过期
                    // 清除token
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    }else{

    }
})
export default router;