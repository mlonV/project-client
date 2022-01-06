// 引入Vue和app
import Vue from "vue"
// 引入App
import App from "./App.vue"

// 找当前./store下的默认index.js 所以可不写index.js
import store from './store'

// 关闭提示信息
Vue.config.productionTip = false



new Vue({
    el:"#app",
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    // mounted(){
    //     console.log('aaa',this)
    // }
})