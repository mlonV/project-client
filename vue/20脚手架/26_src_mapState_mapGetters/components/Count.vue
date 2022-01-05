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
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseOdd">奇数在加</button>
        <button @click="increaseWait">等一等在加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:"Count",
        data() {
            return {
                n:1,
            }
        },
        computed:{
            // 第一种写法
            // ...mapState({'name':'name',project:'project'}),  //key加不加单引号解析的时候都会被强制加上单引号
            // 第二种方法，直接传入数组的形式   传入数组  打散后key和value都是一样的值
            ...mapState(['name','project']),

            // 把$store.getters.GetTenSum 转换为直接调用GetTenSum   上面同理
            // GetTenSum(){
            //     $store.getters.GetTenSum
            // },
            // 第一种写法  传入对象的方式
            // ...mapGetters({'GetTenSum':'GetTenSum'}),
            // 第二种写法   传入数组的形式
            ...mapGetters(['GetTenSum']),
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