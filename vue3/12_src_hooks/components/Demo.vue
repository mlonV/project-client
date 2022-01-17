<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++"> 点我+1 </button>
    <br>
    <h1>获取坐标 X: {{point.x}}Y: {{point.y}}</h1>

  </div>
</template>

<script>
import usePoint from '../hooks/usePoint'
import {ref} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      let num = ref(10)
      let point = usePoint()

      return {
        num,point
      }
    },

      
  }
</script>
