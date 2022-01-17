<template>
  <div>
    <h3>一个人的信息</h3>
    姓: <input type="text" v-model="person.firstName">
    <br>
    名: <input type="text" v-model="person.lastName">
    <br>
    <span>全名: {{person.fullName}}</span>
    <br>
    <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
// import {ref} from 'vue'
import {reactive,computed} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      let person = reactive({
          firstName:"张",
          lastName:"三"
      })
    //   // Vue3中的computed  简写形式，不考虑修改的情况
    //   person.fullName = computed(()=>{
    //       return person.firstName + '-' + person.lastName
    //   })

      // Vue3中的computed  完整版
      person.fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })



      return {
        person
      }
    },

  }
</script>
