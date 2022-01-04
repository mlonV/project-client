<template>

    <div class="container">
        <Category   title="sings" :listData="sings"> 
            <img src="https://img44.51tietu.net/pic/2017-031919/20170319195437shww05jpzh0108286280x180.jpg" alt="">
        </Category>
        <Category   title="dances" :listData="dances"></Category>
        <Category   title="games" :listData="games">
            <img src="https://img12.51tietu.net/pic/2016-080612/201608061251304wwi0usdthd77159280x180.jpg" alt="">
        </Category>
    </div>

</template>

<script>
    import Category from './components/Category'

    export default {
        name:"App",
        components:{Category},
        data() {
            return {
                sings:['忐忑','悟空','如果明天'],
                dances:['踢踏舞','街舞','拉丁舞'],
                games:['LOL','cs:go','黎明杀机']
            }
        },
    }
</script>

<style scoped> 
    .container{
        display: flex;
        justify-content: space-around;
    }
    img {
        width: 100%;
    }
</style>