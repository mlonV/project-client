// 引入vuex 模块
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 创建所需要的变量
const actions = {
    ActionIncrease(context,value){
        context.commit('MutationIncrease',value)
    },
    ActionDecrease(context,value){
        context.commit('MutationDecrease',value)
    },
    ActionIncreaseOdd(context,value){
        if (state.sum % 2 ){
            context.commit('MutationIncreaseOdd',value)
        }
    },
    ActionIncreaseWait(context,value){
        setTimeout(()=>{
            context.commit('MutationIncreaseWait',value)
        },2000)
    }
}
const mutations = {
    MutationIncrease(state,value){
        state.sum += value
    },
    MutationDecrease(state,value){
        state.sum -= value
    },
    MutationIncreaseOdd(state,value){
        state.sum += value
    },
    MutationIncreaseWait(state,value){
        state.sum += value
    },
    addPerson(state,value){
        state.personList.unshift(value)
    }
}

// 类似data
const state = {
    sum:0,
    name:"mlon",
    project:"vue",
    personList:[
        {id:1,name:"mlon"},
        {id:2,name:"lirigou"},
    ]
}

// 类似计算属性computed
const getters = {
    GetTenSum(state){
        return  state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})