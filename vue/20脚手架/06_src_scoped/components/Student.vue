<template>
    <div class="demo">
        <h2>i am ：{{name}}</h2>
        <h2>my address ：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:"Student",
        data(){
            return {
                name:"mlon",
                address:"上海"
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color:hotpink;
    }
</style>