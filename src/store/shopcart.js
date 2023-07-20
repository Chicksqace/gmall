import { reqCartList, reqDeleteCartById,reqUpdateCheckById } from "@/api";
const state={
    cartList:[],
};
const mutations={
    GETARTLIST(state,cartList){
        state.cartList=cartList
    }
};
const actions={
    async getCartList({commit}){
        let result=await reqCartList();
        if(result.code==200){
            commit("GETARTLIST",result.data)
        }
    },
    async deleteCartListBySkuId({commit},skuId){
        let result=await reqDeleteCartById(skuId);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车中某一个产品的选中状态
    async updateCheckById({commit},{skuId,isChecked}){
        let result=await reqUpdateCheckById(skuId,isChecked);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        // context：小仓库，commit【提交mutations修改state】 getters[计算属性] dispath[派发action] state【当前仓库数据】
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item=>{
            let promise=item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):'';
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    },
    // 修改全部商品的状态
    updateAllCartIsChecked({dispatch,state},isChecked){
        let PromiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
                let promise=dispatch('updateCheckById',{
                    skuId:item.skuId,
                    isChecked,
                });
                PromiseAll.push(promise)
            })
            return Promise.all(PromiseAll)
    }
}
const getters={
    cartList(state){
    return state.cartList[0]||{}
    },
}
export default{
    state,
    mutations,
    actions,
    getters
}