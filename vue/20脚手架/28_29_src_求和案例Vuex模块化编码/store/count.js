export default  {
    namespaced:true,
    actions:{
        ActionIncrease(context,value){
            context.commit('MutationIncrease',value)
        },
        ActionDecrease(context,value){
            context.commit('MutationDecrease',value)
        },
        ActionIncreaseOdd(context,value){
            if (context.sum % 2 ){
                context.commit('MutationIncreaseOdd',value)
            }
        },
        ActionIncreaseWait(context,value){
            setTimeout(()=>{
                context.commit('MutationIncreaseWait',value)
            },2000)
        }
    },
    mutations:{
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
    },
    state:{
        sum:0,
        name:"mlon",
        project:"vue",
    },
    getters:{
        GetTenSum(state){
            return  state.sum * 10
        }
    }
}
