<template>
  <div>
    <!-- <h1>{{num}}</h1>
    <button @click="num++"> 点我+1 </button> -->
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
import {ref,reactive,readonly, shallowReadonly} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      let num = ref(0)
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
      // 使用readonly,当使用别人组件定义的数据时，且自己不想数据被修改可以使用readonly
      num = readonly(num)
      // 浅层次的，第一层例如name不可修改但是可以修改薪资
      person = shallowReadonly(person)

      return {
        num,msg,person

      }
    },

  }
</script>
