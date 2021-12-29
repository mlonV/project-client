<template>
    <div class="school">
        <h2>school</h2>
        <h2>i am ：{{name}}</h2>
        <h2>my age ：{{address}}</h2>
        <button @click="sendSchoolName"> 点我获取 </button>
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
        props:["getSchoolName"],
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style scoped>
    .school{
        background-color: peachpuff;
        padding: 5px;
        margin-top: 30px;
    }
</style>