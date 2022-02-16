<template>
  <div class="child">
      <h4>Iam Child</h4>
      <button @click="login">点我登录</button>
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
      function login(){
        const service = axios.create()
        service.interceptors.request.use(
          config => { 
            config.data = {username:'admin',password:'111232221'}
          console.log(config.data,"data数据") 
          return config},
          error => {return Promise.reject(error)}
        )

        service.interceptors.response.use(
          response => {
            console.log(response)
          },
          error => {
            console.log(error)
          }
        )

        service.request({
          url: 'http://127.0.0.1:8081/api/user/login',
          method: 'post',
          isForm: true,
          params:{'username':'root','password':'987654'},
          data:{username:'admin',password:'111231'},
        })
      }

      return {
        sum,login
      }
    }

  }
</script>

<style>
    .child{
      background-color:blueviolet;
      padding: 10px;
    }
</style>