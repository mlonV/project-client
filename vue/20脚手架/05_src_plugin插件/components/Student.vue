<template>
    <div >
        <h2 @click='showMsg'>i am ：{{name}}</h2>
        <h2>my address ：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:"Student",
        data(){
            return {
                name:"mlon",
                address:"上海"
            }
        },
    }
</script>
