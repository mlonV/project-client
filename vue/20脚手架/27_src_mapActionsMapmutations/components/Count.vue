<template>
    <div class="count">
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <!-- getters调用方式 -->
        <!-- <h1>当前求和*10为：{{$store.getters.GetTenSum}}</h1> -->
        <h1>当前求和*10为：{{GetTenSum}}</h1>

        <!-- 调用state里面的数据 -->
        <!-- <h4>i'm {{ $store.state.name }},learn {{$store.state.project}}</h4> -->
        <h4>i'm {{ name }},learn {{project}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increase(n)">+</button>
        <button @click="decrease(n)">-</button>
        <button @click="increaseOdd(n)">奇数在加</button>
        <button @click="increaseWait(n)">等一等在加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name:"Count",
        data() {
            return {
                n:1,
            }
        },
        computed:{
            // 注释在26_src上
            ...mapState(['name','project']),
            ...mapGetters(['GetTenSum']),
        },
        methods:{
            // increase(){
            //     // 没有其他操作的话  可直接调用到mutations中的函数，使用commit  挑过dispatch
            //     // this.$store.dispatch("ActionIncrease",this.n)
            //     this.$store.commit("MutationIncrease",this.n)
            // },
            // decrease(){
            //     // this.$store.dispatch("ActionDecrease",this.n)
            //     this.$store.commit("MutationDecrease",this.n)
            // },
            // increaseOdd(){
            //     this.$store.dispatch("ActionIncreaseOdd",this.n)
            // },
            // increaseWait(){
            //     this.$store.dispatch("ActionIncreaseWait",this.n)
            // },
            
            
            // 使用官方做法自定义属性方法的操作,这种操作需要在调用的时候传入参数 上面的increase(n)
            // 第一种方法，传入对象
            ...mapMutations({'increase':'MutationIncrease','decrease':'MutationDecrease'}),
            ...mapActions({'increaseOdd':'ActionIncreaseOdd','increaseWait':'ActionIncreaseWait'}),
            // // 第二种方法，传入数组
            // ...mapMutations(['MutationIncrease','MutationDecrease']),
            // ...mapActions(['ActionIncreaseOdd','ActionIncreaseWait']),
        }
    }
</script>

<style lang="css" scoped>
    button {
        margin-left: 5px;
    }
</style>