<template>
  <div class="son">
    <h4>Iam Son</h4>
    <h4>car: {{car.name}} -- {{car.price}}</h4>
  </div>
</template>

<script>
  import {inject} from 'vue'
  export default {
    name: 'Son',
    setup(){
      // 直接接收跨组件传输的数据，且是多级组件  爷孙组件等。
      let car = inject('car')

      return {
        car
      }
    }
  }
</script>

<style>
    .son{
      background-color: aqua;
    }
</style>