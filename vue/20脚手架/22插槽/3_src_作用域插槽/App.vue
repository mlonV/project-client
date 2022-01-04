<template>

    <div class="container">
                <Category   title="dances">
            <template slot-scope="haah">
                <ul>
                    <li v-for="(item,index) in haah.sings" :key="index">
                        {{item}}
                    </li>
                </ul>
            </template>
        </Category>

        <Category   title="dances">
            <template slot-scope="{sings}">
                <ul>
                    <ol v-for="(item,index) in sings" :key="index">
                        {{item}}
                    </ol>
                </ul>
            </template>
        </Category>

    </div>

</template>

<script>
    import Category from './components/Category'

    export default {
        name:"App",
        components:{Category},
    }
</script>

<style scoped> 
    .container{
        display: flex;
        justify-content: space-around;
    }

</style>