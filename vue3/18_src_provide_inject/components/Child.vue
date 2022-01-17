<template>
  <div class="child">
      <h4>Iam Child</h4>
      <Son/>
        <!-- <h4>car: {{car.name}} -- {{car.price}}</h4> -->
  </div>
</template>

<script>
//   import {} from 'vue'
  import Son from '../components/Son'
  export default {
    name: 'Child',
    components:{Son},
    setup(){


      return {
        
      }
    }
  }
</script>

<style>
    .child{
      background-color:blueviolet;
    }
</style>