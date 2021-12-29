// 引入Vue和app
import Vue from "vue"
// 引入App
import App from "./App.vue"

// 关闭提示信息
Vue.config.productionTip = false


new Vue({
    el:"#app",
    render: h => h(App),
    // mounted(){

    //     setTimeout(()=>{
    //         this.$destroy()
    //     },3000)
    // },
})