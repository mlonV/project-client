<template>
    <div class="demo">
        <h2>学校名字：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <hr>
        <Student/>
    </div>
</template>

<script>
    import Student from "./Student"
    export default {
        name:'School',
        data(){
            return {
                name:"high school",
                addr:"中州大道"
            }
        },
        components:{
        Student
        }
    }
</script>

<style>
    .demo{
        background-color: aqua;
    }
</style>