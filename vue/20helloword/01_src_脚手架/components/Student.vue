<template>
    <div class="demo">
        <h2>学生名字：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:"School",
        data(){
            return {
                name:"mlon",
                addr:19.5
            }
        },
    }
</script>

<style>
    .demo{
        background-color: rgb(126, 12, 128);
    }
</style>