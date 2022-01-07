<template>
    <div>
        <h2>im Home</h2>
        <div>
            <ul class="nav nav-tabs">
                <li><router-link class="list-group-item" active-class="active" to="/home/news">News</router-link></li>
                <li><router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link></li>
            </ul>
            <!-- 保持组件不销毁，例如news加了input框输入后没保存切到message再切回来则内容丢失，可以使用keepalive来保持不销毁 -->
            <!-- 不加上include则是在此处的全部组件生效，当前只是News不销毁，message还是会销毁 -->
            <keep-alive include="News">  
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Home",
    }
</script>
