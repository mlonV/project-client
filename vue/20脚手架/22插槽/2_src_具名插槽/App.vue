<template>

    <div class="container">
        <Category   title="sings" :listData="sings"> 
            <img slot="center" src="https://img44.51tietu.net/pic/2017-031919/20170319195437shww05jpzh0108286280x180.jpg" alt="">
            <a slot="footer" href="http://www.baidu.com">跳转到百度</a>
        </Category>
        <Category   title="dances" :listData="dances">
            <template v-slot:footer>  
                <!-- 使用template  VUE既也不解析其结构，也可以使用v-slot（也不太好用） -->
                <div>
                    <a href="http://www.baidu.com">跳转到百度</a>
                    <a href="http://www.baidu.com">跳转到阿里</a>
                </div>
                <a href="http://www.baidu.com">跳转到自己</a>
            </template>
        </Category>
        <Category   title="games" :listData="games">
            <img src="https://img12.51tietu.net/pic/2016-080612/201608061251304wwi0usdthd77159280x180.jpg" alt="">
            <div slot="footer">
                <a href="http://www.baidu.com">跳转到百度</a>
                <a href="http://www.baidu.com">跳转到阿里</a>
            </div>
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

</style>