<template>
    <div>
        <Student name="mlon" :age="19" male="男"/>

    </div>
</template>

<script>
    import Student from "./components/Student.vue"
    export default {
        name:"App",
        components:{Student},
}
</script>