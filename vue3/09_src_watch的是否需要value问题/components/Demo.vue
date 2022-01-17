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
import {ref, watch} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      let num = ref(10)
      let msg = ref('你好啊')
      // let person = reactive({
      //   name:"mlon",
      //   age:18,
      //   job:{
      //     j1:{
      //       money:22
      //     }
      //   }
      // })
      // 
      let person = ref({
        name:"mlon",
        age:18,
        job:{
          j1:{
            money:22
          }
        }
      })
      // 这里为什么num不是 num.value 因为num.value是一个具体的值，监视属性而不是监视具体的值
      watch(num,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
      })
      // 当上面的person用ref来封装的时候，ref实际也调用reactive，且person.value是那个proxy对象
      // 所以用watch 来监视ref创建的对象类型的话，需要使用perosn.value
      // watch(person.value,(newValue,oldValue)=>{
      //   console.log(newValue,oldValue)
      // })
      // 第二种处理方式,不用.value   需要加上deep:true
      watch(person,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
      },{deep:true})

      return {
        num,msg,person
      }
    },

  }
</script>
