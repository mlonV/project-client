<template>
  <div class="son">
    <h4>Iam Son</h4>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
  export default {
    name: 'Son',
    components:{Dialog},
    setup(){
      return {
      }
    }
  }
</script>

<style>
    .son{
      background-color: aqua;
      padding: 10px;
    }
</style>