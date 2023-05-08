// 对于 axios进行二次封装
import axios from "axios"
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置以下
const requests=axios.create({
    // 配置对象
    // 基础路径:发请求的时候，路径当中会出现api
    baseURL:'/api',
    // 代表请求超时的时间5s
    timeout:5000, 
});
// 请求拦截器
requests.interceptors.request.use((config)=>{
    // config:配置对象，对象里面又一个属性很重要，header请求投
    nProgress.start()
    return config;
})
// 响应式拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：服务器相应数据回来以后，拦截器可以检测到，可以做一些事
    nProgress.done()
    return res.data
},(err)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error('faile'))
})
// 对外暴露
export default requests