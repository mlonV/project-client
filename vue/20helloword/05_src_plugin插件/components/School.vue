<template>
    <div class="Student">
        <h2>i am ：{{name | MySlice}}</h2>
        <h2>my age ：{{address}}</h2>
        <button @click='showMsg'>点我调原型方法</button>
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
        methods:{
            showMsg(){
                this.hello()
            }
        }
    }
</script>

<style>
    .Student{
        background-color: gray;
    }
</style>