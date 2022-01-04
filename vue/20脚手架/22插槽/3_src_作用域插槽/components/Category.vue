<template>
    <div class="category">
        <h3>分类:{{title}}</h3>
        <slot :sings="sings">默认插槽</slot>
    </div>
</template>

<script>
    export default {
        name:"Category",
        props:['title'],
        data() {
            return {
                sings:['忐忑','悟空','如果明天'],

            }
        },
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