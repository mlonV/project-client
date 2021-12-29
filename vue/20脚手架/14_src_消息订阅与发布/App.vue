<template>
    <div class="app">
        <h2> {{msg}} </h2>
        <Student/>
        <School/>
    </div>
</template>

<script>
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"
    export default {
        name:"App",
        data(){
            return {
                msg:"hello"
            }
        },
        components:{Student,School},
}
</script>


<style>
      .app{
        background-color: gray;
        padding: 5px;
    }

</style>