<template>
<div>
    <button @click="showIf=!showIf"> 展示Demo</button>
    <Demo v-if="showIf" />
</div>
</template>

<script>
  import {ref} from 'vue'
// import {reactive} from 'vue'
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup(){
      let showIf = ref(true)
      


      return {
        showIf
      }
    }
  }
</script>
