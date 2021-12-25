<template>
    <div class="school">
        <h2>my name {{name}}</h2>
        <h2>my addr {{addr}}</h2>
    </div>
</template>

<script>

    export default {
        name:"School",
        data(){
            return {
                name:"mlon",
                addr:"上海"
            }
        }
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>