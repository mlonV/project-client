<template>
  <h3>name: {{name}}</h3>
  <h3>age: {{age}}</h3>
  <h3>SKTName: {{list.name}}</h3>
  <h3>Class: {{list.class}}</h3>
  <button @click="updateInfo">修改name/age</button>
  <button @click="sayVue3">点击sayVue3</button>
</template>

<script>
import {ref} from 'vue'
  export default {
    name: 'App',

    setup(){
      let name = ref('mlon')
      let age = ref(18)
      let list = ref({
        name:"SKT1",
        class:"No'1"
      })

      function sayVue3(){
        // 输出的是一个ref对象
        console.log(name)
        console.log(age.value)
      }

      // 使用ref来修改数据监测的值  必须要指定.value
      function updateInfo(){
        name.value = "lirigou"
        age.value = 48

        // 如果使用ref定义一个对象，则修改值的时候只需要对象后面.value一次 （list.value  是一个proxy对象）
        list.value.name = "SKT2"
        list.value.class = "No'2"

      }

      return {
      name,age,list,sayVue3,updateInfo
      }
    },

  }
</script>
