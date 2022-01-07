<template>
    <div>
        <ul>
            <!-- <li>{{$route.query.msg}}</li> -->
            <li>{{ id }} -- {{msg}}</li>
        </ul>
            <!-- props的参数传递 -->
            <!-- <h3>props的参数传递: {{id}} - {{name}}</h3> -->
    </div>
</template>

<script>
    export default {
        name:"Detail",
        // props:["id","name"]
        props:["id","msg"]
    }
</script>
