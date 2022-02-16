<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-plus"
      style="margin: 10px 10px"
      @click="showDialog"
      >加载容器</el-button
    >
    <el-card style="margin: 20px 10px">
      <CategorySelect
        :SecondList="hostnameList"
        :ThirdList="addressList"
        :FirstName="FirstName"
        :SecondName="SecondName"
        :ThirdName="ThirdName"
        v-on:loadCon="loadCon"
      ></CategorySelect>
    </el-card>
    <el-card>
      <el-table
        style="width: 100%"
        border
        :resizable="true"
        :data="list"
        align="center"
      >
        <el-table-column fixed="left" label="序号" width="80px" align="center">
          <template slot-scope="scope">
            <span> {{ scope.$index + 1 + (page - 1) * limit }} </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="hostname"
          label="主机名"
          width="width"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="IP地址"
          width="width"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="container_name"
          label="容器名"
          width="width"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="容器状态"
          width="width"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width="width"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="image_name"
          label="镜像名"
          width="width"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="container_id"
          label="容器id"
          width="width"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="type"
          fixed="right"
          label="操作"
          width="width"
          align="center"
        >
          <template slot-scope="{ row }">
            <el-button type="warning" size="mini" @click="execOperate(row)"
              >重启服务</el-button
            >
            <!-- <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deletePro(row)"
              >删除</el-button
            > -->
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 20px; textalign: center"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="total"
        :current-page="page"
        :page-size="limit"
        :page-sizes="[3, 5, 10]"
        @current-change="GetAllContainers"
        @size-change="handleSizeChange"
      >
      </el-pagination>
    </el-card>
    <el-dialog title="重新加载容器" :visible.sync="dialogFormVisible">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <div style="margin: 15px 0"></div>
      <el-checkbox-group
        v-model="loadHostList"
        @change="handleCheckedHostChange"
      >
        <el-checkbox v-for="host in hostnameList" :label="host" :key="host">{{
          host
        }}</el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateCon">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  LoadAllContainer,
  getContainer,
  GetFilter,
  Operate,
} from "@/api/server/container";
export default {
  name: "Containers",
  props: ["query"],
  data() {
    return {
      dialogFormVisible: false,

      // 传给子组件展示的列表信息
      hostnameList: [],
      addressList: [],

      // 传给子组件的菜单名
      FirstName: "容器名",
      SecondName: "主机名",
      ThirdName: "IP地址",

      // 模版使用的数据
      checkAll: false,
      isIndeterminate: true,
      loadHostList: [],
      // 获取到的表单数据，发送到服务端获取容器
      containerList: {},

      // 展示的容器信息列表
      page: 1,
      // 显示一个多少个
      limit: 5,
      // 总共多少条
      total: 0,
      // 列表显示的数据 hostname address 容器信息等
      list: [],
    };
  },
  mounted() {
    this.GetFilterObj();
    // 如果是跳转过来的，即带有con数据
    // if (this.con !=)
    this.GetAllContainers(1,this.query);

    // console.log("this.con", this.query);
  },
  computed: {
    pageCount() {
      return this.total / this.limit;
    },
  },
  watch: {
    hostnameList: {
      deep: true,
      handler: function () {
        return;
      },
    },
  },
  methods: {
    showDialog() {
      this.dialogFormVisible = true;
    },
    handleCheckAllChange(val) {
      this.loadHostList = val ? this.hostnameList : [];
      this.isIndeterminate = false;
    },
    handleCheckedHostChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.hostnameList.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.hostnameList.length;
    },
    handleSizeChange(val) {
      this.limit = val;
      this.GetAllContainers();
    },
    async GetAllContainers(pager = 1, query) {
      this.page = pager;
      const { page, limit } = this;
      let result = await getContainer(page, limit, query);
      if (result.code == 20000) {
        console.log("result : ", result);
        this.total = result.data.total;
        this.page = result.data.page;
        this.limit = result.data.limit;
        this.list = result.data.list;
      }
    },
    // 获取主机/ip信息
    async GetFilterObj() {
      let result = await GetFilter();
      this.hostnameList = result.data.hostname;
      this.addressList = result.data.address;
    },

    // 加载数据库已有的容器信息,分页查询的情况带着主机/容器名/IP地址去查询
    async loadCon(query) {
      // query:{first:"容器名",second:"主机名",third:"ip地址"} 三级菜单，第一个容器名，第二个主机名，第三个ip地址（任一都可能为空）
      this.dialogFormVisible = false;
      this.GetAllContainers(1, query);
    },
    // 让服务器去加载容器信息（更新容器信息）到数据库
    async updateCon(a) {
      this.dialogFormVisible = false;
      let result = await LoadAllContainer({ hostlist: this.loadHostList });
      this.$message(result.notification);
      // console.log("updateCon", this.loadHostList);
    },
    // 这里传入的row是要传给服务器的，添加一个row.command = restartcontainer 代表重启容器，封装的request处会使用
    async execOperate(row) {
      row.command = 'restartservice'
      let result = await Operate(row);

      // 提示框，确认和取消，确认返回true，取消返回false
      var a = window.confirm(result.notification);
      if (a == true) {
        let result = await Operate(row);
        this.$message(result.notification);
        this.GetAllContainers();
      }
      // console.log("execOperate",result,row)
    },
  },
};
</script>

<style>
</style>