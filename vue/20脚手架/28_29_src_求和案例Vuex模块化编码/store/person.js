// 人员相关模块
import axios from "axios"
import { nanoid } from 'nanoid'
export default {
    namespaced:true,
    actions:{
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('addPerson',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        addPerson(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:1,name:"mlon"},
            {id:2,name:"lirigou"},
        ]
    },
    getters:{},
}