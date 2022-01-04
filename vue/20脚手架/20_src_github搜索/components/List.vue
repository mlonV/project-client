<template>
    <div class="row">
        <div v-show="!info.users.lenght" class="card" v-for="user in info.users" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>

        </div>
        <!-- 没数据时 -->
        <h1 v-show="info.isFirst">欢迎使用，查询GITHUB数据</h1>
        <h1 v-show="info.isLodding">加载中，请稍等片刻...</h1>
        <h1 v-show="info.errMsg">查询出错：{{info.errMsg}}</h1>
    </div>  
</template>

<script>
export default {
    name:"List",
    data() {
        return {
            info:{
                isFirst:true,
                isLoadding:false,
                errMsg:'',
                users:[]
            }
        }
    },
    mounted(){
        this.$bus.$on('getUsers',(dataObj)=>{
            this.info = {...this.info,...dataObj}
            // console.log('收到数据users',this.info.users)
            
        })
    }

}
</script>


<style scope>
    .album {
        min-height: 50rem;
        padding-top:3rem ;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>