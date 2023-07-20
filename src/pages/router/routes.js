import home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
export default[
    {
        path: '/pay',
        component:Pay,
        meta: { show: true },
    }
    ,
    {
        path: '/trade',
        component:Trade,
        meta: { show: true },
    }
    ,
    {
        path: '/shopcart',
        name: 'shopcart',
        component:ShopCart,
        meta: { show: true },
    }
    ,
    {
        path: '/addCartSuccess',
        name: 'addCartSuccess',
        component:AddCartSuccess,
        meta: { show: true },
    }
    ,
    {
        path: '/detail/:skuid',
        name: 'Detail',
        component:Detail,
        meta: { show: true },
    }
    ,
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

]