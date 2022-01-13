<template>
  <h3>name: {{name}}</h3>
  <h3>age: {{age}}</h3>
  <button @click="sayVue2">点击sayVue2</button>
  <button @click="sayVue3">点击sayVue3</button>
</template>

<script>
  // import {h} from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        desc:"这是一个备注"
      }
    },
    methods: {
      // 在Vue2写法中可以调用到3写法的内容
      sayVue2(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.desc)
        console.log(this.sayVue3)
      }
    },


    setup(){
      let name = 'mlon'
      let age = 18
      // 在Vue3写法中调用不到 2的写法的内容
      function sayVue3(){
        console.log(name)
        console.log(age)
        console.log(this.desc)
        console.log(this.sayVue2)
      }

      return {
      name,age,sayVue3

      //  // setup的两种返回方式,第二种直接返回一个渲染函数，需要import引入h
      //  return () => h("h1",'返回一个渲染函数')

      }
    },

  }
</script>
