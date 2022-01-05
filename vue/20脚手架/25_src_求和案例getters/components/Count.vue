<template>
    <div class="count">
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <!-- getters调用方式 -->
        <h1>当前求和*10为：{{$store.getters.GetTenSum}}</h1>
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
            }
        },
        methods:{
            increase(){
                // 没有其他操作的话  可直接调用到mutations中的函数，使用commit  挑过dispatch
                // this.$store.dispatch("ActionIncrease",this.n)
                this.$store.commit("MutationIncrease",this.n)
            },
            decrease(){
                // this.$store.dispatch("ActionDecrease",this.n)
                this.$store.commit("MutationDecrease",this.n)
            },
            increaseOdd(){
                this.$store.dispatch("ActionIncreaseOdd",this.n)
            },
            increaseWait(){
                this.$store.dispatch("ActionIncreaseWait",this.n)

            },
        }
    }
</script>

<style lang="css" scoped>
    button {
        margin-left: 5px;
    }
</style>