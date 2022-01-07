<template>
    <ul>
        <li :style="{opacity}"> 字体渐变 </li>
        <li>news 01 <input type="text"></li>
        <li>news 02 <input type="text"></li>
        <li>news 03 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:"News",
        data(){
            return {
                opacity:1
            }
        },
        beforeDestroy() {
            console.log('News即将被销毁')
        },
        // 两个新的生命周期函数，
        activated(){
            console.log('News被激活')

            this.timer = setInterval(()=>{
                console.log('@')
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            },16)
        },
        deactivated(){
            console.log('News失活')
            clearInterval(this.timer)
        }
    }
</script>
