<template>
  <div>
    <input type="text" v-model="showMsg">
    <h4>{{showMsg}}</h4>
  </div>
</template>

<script>
  import {customRef} from 'vue'
  export default {
    name: 'App',
    setup(){

      // 利用customRef来自定义一个ref，上面延迟展示 showMsg
      function myRef(value) {
        // 设置一个定时器来防抖，要不会因为点的快而重复出现setTimeout函数的情况
        let timer 
        return customRef((track,trigger)=>{
          return{
            get(){
              track()
              return value
            },
            set(newValue){
              clearTimeout(timer)
              timer = setTimeout(()=>{
                value = newValue
                trigger()
              },1000)
            }
          }
        })
      }
      let showMsg = myRef('test')
      


      return {
        showMsg
      }
    }
  }
</script>
