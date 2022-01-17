<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++"> 点我+1 </button>
    <br>
    <h1>{{msg}}</h1>
    <button @click="msg+='!'"> 点我+1 </button>
    <br>
    <h1>name:{{name}}</h1>
    <h1>age:{{age}}</h1>
    <h1>薪资: {{job.j1.money}}</h1>
    <button @click="name+='~'"> 点我修改名字 </button>
    <button @click="age++"> 点我加年龄 </button>
    <button @click="money++"> 点我涨工资 </button>

  </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue'
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
      // 使用toRef，可以让一个属性转化成reftmpl属性，即让数据拥有响应式。若有多个的话可以使用toRefs
      // return {
      //   num,
      //   msg,
      //   person,
      //   money:toRef(person.job.j1,'money')
      // }

      // 使用toRefs,则可以省去template中调时重复输入的person，但是调用money还是需要job.j1.money
      // 但可以单独返回 toRe
      return {
        num,msg,
        ...toRefs(person),
        // 这样可以直接在模板中使用money
        ...toRefs(person.job.j1)
      }
    },

  }
</script>
