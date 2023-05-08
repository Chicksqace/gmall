import {reqCatgoryList,reqGetBannerList} from '@/api'
// home模块的小仓库
const state={
    // state中数据默认初始值不要乱写，服务器返回对象，初始值就要是对象【根据接口返回值初始化的】
    categoryList:[],
    // 轮播图的数据
    bannerList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    }
};
const actions={
    // 通过API里面的接口函数调用，向服务器发起请求，获取数据
    async categoryList({commit}){
        let result=await reqCatgoryList()
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
        let result=await reqGetBannerList();
        console.log(result);
            if(result.code==200){
                commit('GETBANNERLIST',result.data)
            }
    }
};
const getters={};
export default{
    state,
    mutations,
    actions,
    getters
}