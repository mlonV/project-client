<template>
  <h3>name: {{person.name}}</h3>
  <h3>age: {{person.age}}</h3>
  <h3>SKTName: {{person.list.name}}</h3>
  <h3>Class: {{person.list.class}}</h3>
  <h3>Hobby: {{person.hobby}}</h3>
  <button @click="updateInfo">修改name/age/hobby</button>
  <button @click="sayVue3">点击sayVue3</button>
</template>

<script>
// import {ref} from 'vue'
import {reactive} from 'vue'
  export default {
    name: 'App',

    // 使用reactive
      // reactive只能接收对象形式，不能接受基本数据类型int，string等
      // reactive相比于ref的使用可以省去频繁的.value操作
      // 使用reactive的话   数据直接修改也可以监视到，数据监视
    setup(){
      let person = reactive({
        name:'mlon',
        age:18,
        list:{
          name:"SKT1",
          class:"No'1"
        },
        hobby:['抽烟','喝酒','烫头']
      })

      function sayVue3(){
        // 输出的是一个ref对象
        console.log(person.name)
        console.log(person.age)
      }

      // 使用reactive的话   数据直接修改也可以监视到，数据监视
      function updateInfo(){
        person.name= "lirigou"
        person.age= 48
        person.hobby[0] = '泡妞'
        person.list.name = "SKT2"
        person.list.class = "No'2"

      }

      return {
      person,sayVue3,updateInfo
      }
    },

  }
</script>
