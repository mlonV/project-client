<template>
  <div class="app"> 
    <h4>App</h4>
    <Suspense>
      <template v-slot:default>  
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>Loadding . . .</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child'
  import { defineAsyncComponent } from 'vue'
  const Child = defineAsyncComponent(()=>import('./components/Child'))
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
