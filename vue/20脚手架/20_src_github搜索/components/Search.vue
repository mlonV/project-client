<template>
  <div>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUser">Search</button>
        </div>
    </section>
  </div>
</template>

<script>
    import axios from 'axios'
        export default {
            name:"Search",
            data() {
            return {
                keyWord:""
            }
            },
            methods:{
                searchUser(){
                    // 发请求前数据
                    this.$bus.$emit('getUsers',{isFirst:false,isLoadding:true,errMsg:'',users:[]})
                    // console.log('准备请求')
                    axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                        response => {
                            // console.log('请求成功',response.data)
                            this.$bus.$emit('getUsers',{isFirst:false,isLoadding:false,errMsg:'',users:response.data.items})
                        },
                        error => {
                            // console.log('请求失败',error.message)
                            this.$bus.$emit('getUsers',{isFirst:false,isLoadding:false,errMsg:error.message,users:[]})
                        }
                    )
                },
            }
        }
</script>

<style>

</style>