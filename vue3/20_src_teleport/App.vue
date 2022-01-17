<template>
  <div class="app"> 
    <h4>App</h4>
    <Child/>
  </div>
</template>

<script>
  import Child from './components/Child'
  export default {
    name: 'App',
    components:{Child},
    setup(){
      return {
      }
    }
  }
</script>

<style >
    .app{
      background-color: brown;
      padding: 10px;
    }
</style>
