import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from "@/api"
import { setToken,getToken,removeToken } from '@/utils/token';
// 登录与注册  reqGetCode
const state={
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    CLEAR(state){
        // 把仓库中相关信息清除
        state.token='';
        state.userInfo={};
        removeToken();
    }
}
const actions={
    // 验证码
    async getCode({commit},phone){
        let result=await reqGetCode(phone)
        if(result.code==200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
       
    },
    // 用户注册
    async userRegister({commit},user){
       let result=await reqUserRegister(user)
       console.log('result',result);
       if(result.code==200){
        return 'ok'
       }else{
        return Promise.reject(new Error('faile'))
       }
    },
    // 登录业务
    async userLogin({commit},data){
        let result=await reqUserLogin(data)
        if(result.code==200){
            // 用户登录成功且获取到token
            commit("USERLOGIN",result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息
    async getUserInfo({commit},data){
        let result=await reqUserInfo(data)
        if(result.code==200){
            commit("GETUSERINFO",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 退出登录
    async userLogout({commit}){
        let result=await reqLogout();
        // action里面不能操作state，提交mutilation修改state
        if(result.code==200){
            commit("CLEAR")
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}
