<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8"> 
                <div class="page-header"><h2>Vue Router Demo</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原生a标签来写的 -->
                    <!-- <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a> -->

                    <!-- vue来写的 ,router-link展示到页面会自动转化为a标签，且需要特定的to字眼来跳转不能用原生的href-->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- <h2>我是About内容</h2> -->   
                        <!-- 使用vue带的router-view来展示特定的组件内容 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name:"App",
    }
</script>