<template>
  <div class="child">
      <h4>Iam Child</h4>
      {{sum}}
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
  export default {
    name: 'Child',
    
    setup(){
      let sum = ref(0)
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve({sum})
        },3000)
      })
    }

  }
</script>

<style>
    .child{
      background-color:blueviolet;
      padding: 10px;
    }
</style>