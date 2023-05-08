// 当前这个模块：APi进行统一管理
import requests from "./request";
import mockRequests from './mockAjax';
// 三级联动的接口
// /api/product/getBaseCategoryList   GET  无参数
// 发请求：axios发请求返回结果Promise对象

export const reqCatgoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})

// 获取banner（home首页轮播图接口） 
export const reqGetBannerList=()=>mockRequests.get('/banner')