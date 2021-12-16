<template>
    <div class="demo">
        <h2>i am ：{{name}}</h2>
        <h2>my age ：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:"Student",
        data(){
            return {
                name:"lirigou xxx",
                address:"五角场"
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color: gray;
    }
</style>