<template>
  <div>
    <!-- <h1>{{num}}</h1>
    <button @click="num++"> 点我+1 </button> -->
    <h1>{{num.x}}</h1>
    <button @click="num.x++"> 点我+1 </button>
    <br>
    <h1>{{msg}}</h1>
    <button @click="msg+='!'"> 点我+1 </button>
    <br>
    <h1>name:{{person.name}}</h1>
    <h1>age:{{person.age}}</h1>
    <h1>薪资: {{person.job.j1.money}}</h1>
    <button @click="person.name+='~'"> 点我修改名字 </button>
    <button @click="person.age++"> 点我加年龄 </button>
    <button @click="person.job.j1.money++"> 点我涨工资 </button>

  </div>
</template>

<script>
import {ref,shallowReactive,shallowRef} from 'vue'
// import {ref,reactive,shallowReactive,shallowRef} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      // 使用shallowRef，基本类型数据无变化，但是处理对象数据则没有响应式
      let num = shallowRef({x:0})
      // let num = ref(10)
      let msg = ref('你好啊')
      // 使用shallowReactive可以浅层次的去处理响应式，例如person的name和age，但是深层的job里的数据不会有响应式
      let person = shallowReactive({
        name:"mlon",
        age:18,
        job:{
          j1:{
            money:22
          }
        }
      })
      // 使用

      return {
        num,msg,person

      }
    },

  }
</script>
