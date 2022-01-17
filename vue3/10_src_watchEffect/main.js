
// 引入方式不再以Vue方式引入，且不用new vm
import { createApp } from 'vue'
import App from './App.vue'



createApp(App).mount('#app')



// // 2和3对比
// // 3.的写法
// const app = createApp(App)
// app.mount('#app')
// // 2.的写法
// const vm = Vue({
//     render :h =>h(App)
// }).$mount()
