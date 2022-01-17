<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++"> 点我+1 </button>
  </div>
</template>

<script>
// import {ref} from 'vue'
import {ref,onMounted,onBeforeMount,onUpdated,onBeforeUpdate,onUnmounted,onBeforeUnmount} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      let num = ref(10)
      // Vue3的写法，虽然和Vue2不冲突但最好也只使用一种，不要混用。且Vue3优先级比Vue2优先级要高
      onMounted(()=>{
        console.log('--- onMounted ---')
      })
      onBeforeMount(()=>{
        console.log('--- onBeforeMount ---')
      })
      onUpdated(()=>{
        console.log('--- onUpdated ---')
      })
      onBeforeUpdate(()=>{
        console.log('--- onBeforeUpdate ---')
      })
      onUnmounted(()=>{
        console.log('--- onUnmounted ---')
      })
      onBeforeUnmount(()=>{
        console.log('--- onBeforeUnmount ---')
      })
      // 虽然可以使用Vue2中的生命周期钩子的  配置项！但是也可以使用Vue3的函数
      return {
        num
      }
    },
    // // Vue2的生命周期钩子在vue3中依旧可以使用
    // beforeCreate() {
    //   console.log('---beforeCreate---')
    // },
    // created() {
    //   console.log('---created---')
    // },
    // beforeMount() {
    //    console.log('---beforeMount---')
    // },
    // mounted() {
    //    console.log('---mounted---')
    // },
    // beforeUpdate() {
    //   console.log('---beforeUpdate---')
    // },
    // updated() {
    //   console.log('---updated---')
    // },
    // beforeUnmount() {
    //   console.log('---beforeUnmount---')
    // },
    // unmounted() {
    //   console.log('---unmounted---')
    // },
      
  }
</script>
