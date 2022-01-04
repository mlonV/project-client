<template>
    <div class="category">
        <h3>分类:{{title}}</h3>
        <ul>
            <slot name="center"><li v-for="(item,index) in listData" :key='index'>{{item}}</li></slot>
            <slot name="footer"> 默认值是</slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Category",
        props:['listData','title']
    }
</script>

<style scoped>

    .category {
      background-color: skyblue;  
      width: 200px;
      height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
    img {
        width: 100%;
    }
</style>