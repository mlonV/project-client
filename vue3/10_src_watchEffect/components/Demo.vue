<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++"> 点我+1 </button>
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
// import {ref} from 'vue'
import {ref, watch,reactive, watchEffect} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      let num = ref(10)
      let msg = ref('你好啊')
      let person = reactive({
        name:"mlon",
        age:18,
        job:{
          j1:{
            money:22
          }
        }
      })
      

      // 常规watch
      watch(num,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
      })

      // watchEffect
      // 这个函数有点像computed计算属性  函数内使用的值发生变化则会执行一个该函数，但是又不像computed，
      // 因为该函数可以不用return返回值，即注重过程。而computed则强依赖retrun返回值注重结果。
      watchEffect(()=>{
        const x1 = person.job.j1.money
        const x2 = msg.value
        console.log(x1,x2)
      })

      return {
        num,msg,person
      }
    },

  }
</script>
