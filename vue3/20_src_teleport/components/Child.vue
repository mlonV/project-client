<template>
  <div class="child">
      <h4>Iam Child</h4>
      <Son/>
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
      padding: 10px;
    }
</style>