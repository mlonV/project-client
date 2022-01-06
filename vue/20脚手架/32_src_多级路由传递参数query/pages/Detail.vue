<template>
    <div>
        <ul>
            <li>{{$route.query.msg}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Detail",
        mounted() {
            console.log(this.$route)
        },

    }
</script>
