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
    <br>
    <h4>汽车信息: {{person.car}}</h4>

    <button @click="person.car.price++"> 点我涨价 </button>

  </div>
</template>

<script>
import {ref,reactive,toRaw,markRaw} from 'vue'
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
      // // toRaw ,让响应式的数据变为不是响应式的，例如使用person
      // person = toRaw(person)
      console.log(toRaw(person))

      // 标记一个数据为不是响应式，此时car的内容不是响应式（person其他内容还是响应式的），但是可以修改
      let car = {name:'奔驰',price:40}
      person.car = markRaw(car) 
      return {
        num,msg,person

      }
    },

  }
</script>
