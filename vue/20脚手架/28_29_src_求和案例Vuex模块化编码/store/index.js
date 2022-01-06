// 引入vuex 模块
import Vuex from 'vuex'
import Vue from 'vue'

// 模块化引入store
import countObj from './count'
import personObj from './person'


Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        countObj,
        personObj
    }
})