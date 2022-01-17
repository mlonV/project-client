<template>
  <div class="app"> 
    <h4>App</h4>

  </div>
</template>

<script>
  import {ref,reactive,readonly} from 'vue'
  import {isRef,isReactive,isReadonly,isProxy} from 'vue'
  export default {
    name: 'App',
    setup(){
      let num = ref(0)
      let car = reactive({name:'benci',price:52})
      let ro = readonly(car)

      console.log(isRef(num))
      console.log(isReactive(car))
      console.log(isReadonly(ro))
      console.log(isProxy(car))
      console.log(isProxy(ro))
      return {
        car
      }
    }
  }
</script>

<style >
    .app{
      background-color: brown;
    }
</style>
