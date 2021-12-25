// 引入Vue和app
import Vue from "vue"
// 引入App
import App from "./App.vue"
// 全局引入混合
import {mixin}  from "./mixin.js"

// 关闭提示信息
Vue.config.productionTip = false
// 全局导入混合
Vue.mixin(mixin)

new Vue({
    el:"#app",
    render: h => h(App)
})