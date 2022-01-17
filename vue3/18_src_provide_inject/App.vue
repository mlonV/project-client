<template>
  <div class="app"> 
    <h4>App</h4>
    <h4>car: {{car.name}} -- {{car.price}}</h4>
    <Child/>
  </div>
</template>

<script>
  import { reactive ,provide} from 'vue'
  import Child from './components/Child'
  export default {
    name: 'App',
    components:{Child},
    setup(){
    
      let car = reactive({name:'benci',price:52})
      // 
      provide('car',car)

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
