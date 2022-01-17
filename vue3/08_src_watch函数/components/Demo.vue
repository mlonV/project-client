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
import {ref, watch,reactive} from 'vue'
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

    // 监视watch ref属性
      // // 情况一: 在Vue3中是一个函数，第一种写法,且存在两个watch不会报错都会生效
      // watch(num,(newValue,oldValue)=>{
      //   console.log('num change',newValue,oldValue)
      // })
      // watch(msg,(newValue,oldValue)=>{
      //   console.log('msg change',newValue,oldValue)
      // })

      // // 情况二: 同一个watch中写两属性
      // watch([num,msg],(newValue,oldValue)=>{
      // // newValue和OldValue都是数组例如[0,'你好啊'] 谁的值改变都会输出变化后的值
      //   console.log('num or msg change',newValue,oldValue)  
      // })   
      // // watch传入的第三个参数为配置对象，是否初次加载就调用/深度监视等配置项
      // watch(num,(newValue,oldValue)=>{
      //   console.log('num  change',newValue,oldValue)  
      // },{immediate:true,deep:true})

    // 监视reactive 对象属性
      // 情况三: 监视一个reactive对象
        // 注意点1: 首先 newValue/oldValue都是同一个值，例如薪资+完之后new/old都是23
        // 注意点2: 这里监视一个完整的reactive时deep修改为false不生效
      // watch(person,(newValue,oldValue)=>{
      //   console.log('num  change',newValue,oldValue)  
      // },{deep:false})

      // 情况四: 监视reactive对象中一个属性（watch第一个参数写成一个函数，且返回值为reactive中的某个值）
        // 注意，如果是这种写法的话，newValue/oldValue就完美生效值正常了
      // watch(()=>person.name,(newValue,oldValue)=>{
      //   console.log('num  change',newValue,oldValue)  
      // })

      // 情况五: 监视reactive的多个属性,和上面同理，且new/old Value值都正常
      // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
      //   console.log('name or age  change',newValue,oldValue)  
      // })

      // 特殊情况: 
        // 下面person.job是一个对象，这时候修改工资的话  不会引起console输出（job对象是没修改的）
        // 这时候deep则可以生效了(但是new/oldValue还是有问题的)
      watch(()=>person.job,(newValue,oldValue)=>{
        console.log('job project change',newValue,oldValue)  
      },{deep:true})



      return {
        num,msg,person
      }
    },

  }
</script>
