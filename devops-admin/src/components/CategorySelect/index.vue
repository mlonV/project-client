<template>
  <div>
    <el-form :inline="true" :model="Form" class="demo-form-inline">
      <el-form-item :label="FirstName">
        <el-input v-model="Form.first" :placeholder="FirstName"></el-input>
      </el-form-item>
      <el-form-item :label="SecondName">
        <el-select v-model="Form.second" :placeholder="SecondName">
          <el-option :key="index" v-for="(second,index) in SecondList"  :label="second" :value="second"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="ThirdName">
        <el-select v-model="Form.third" :placeholder="ThirdName">
          <el-option :key="index" v-for="(third,index) in ThirdList"  :label="third" :value="third"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        <el-button type="primary" size="small" @click="offSubmit">清除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:"CategorySelect",
  props:["SecondList","ThirdList","FirstName","SecondName","ThirdName"],
  data() {
    return {
      // 向服务器提交表单的数据
      Form:{
        first:"",
        second:"",
        third:""
      }
    }
  },
  methods:{
    onSubmit(){
      this.$emit('loadCon',this.Form)
    },
    offSubmit(){
      this.Form.first = ""
      this.Form.third = ""
      this.Form.second = ""
    }
  }
}

</script>
