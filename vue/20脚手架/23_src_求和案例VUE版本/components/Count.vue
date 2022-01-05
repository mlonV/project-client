<template>
    <div class="count">
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseOdd">奇数在加</button>
        <button @click="increaseWait">等一等在加</button>
    </div>
</template>

<script>
    export default {
        name:"Count",
        data() {
            return {
                n:1,
                sum:0
            }
        },
        methods:{
            increase(){
                this.sum += this.n
            },
            decrease(){
                this.sum -= this.n
            },
            increaseOdd(){
                if (this.sum % 2 ){
                    this.sum += this.n
                }
            },
            increaseWait(){
                setTimeout(()=>{
                    this.sum += this.n
                },2000)
            },
        }
    }
</script>

<style lang="css" scoped>
    button {
        margin-left: 5px;
    }
</style>