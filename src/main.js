import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'; 
// 轮播图
import Carsousel from '@/components/Carousel'
// 分页器
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui';
import VueLazyload from 'vue-lazyload'
import logo from '@/assets/logo.png'
Vue.component(Button.name, Button);
// 第一个餐护士：全局组件的名字 第二个参数：那一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name,Carsousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(VueLazyload,{
  // 懒加载默认的图片
  loading:logo
})
// 引入路由
import router from './pages/router'
// 引入仓库
import store from '@/store';
// 引入 MockServer.js --mock数据
import '@/mock/mockServe'
// 引入swipter样式 
import 'swiper/css/swiper.css'
// 统一接口api文件夹里面全部请求函数
import * as API from '@/api';

// 引入自定义插件
import myPlygins from '@/plugins/myPlugins'
Vue.use(myPlygins,{
  name:'upper'
});

// 引入表单验证插件
import validate from '@/plugins/validate'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  // 注册路由：底下的写法KV一致省略V【router小写的】
  router,
  // 注册仓库:组件实例的身上多个一个属性$store属性
  store 
}).$mount('#app')
