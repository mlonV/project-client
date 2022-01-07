<template>
    <ul>
        <li>news 01 <input type="text"></li>
        <li>news 02 <input type="text"></li>
        <li>news 03 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:"News",
        beforeDestroy() {
            console.log('News即将被销毁')
        },
    }
</script>
