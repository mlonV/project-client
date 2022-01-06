// 引入Vue和app
import Vue from "vue"
// 引入App
import App from "./App.vue"

import router from './router'
import VueRouter from 'vue-router'
// 关闭提示信息
Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
    el:"#app",
    render: h => h(App),
    router:router

})