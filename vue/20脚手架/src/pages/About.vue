<template>
    <h2>im About</h2>
</template>

<script>
    export default {
        name:"About",
        // 进入路由守卫
        beforeRouteEnter (to, from, next) {
            console.log("@@@@@")
            if (to.meta.isAuth) {
                if (localStorage.getItem('name') === 'mlon'){
                    next()
                }else{
                    alert('name 不为 mlon，不给访问')
                }
            }else{
                next()
            }
        },
        // 离开路由守卫
        // beforeRouteLeave (to, from, next) {
        //     // ...
        // }
    }
</script>
