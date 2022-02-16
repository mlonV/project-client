<template>
  <div>
    <el-button
      type="primary"
      @click="showDialog"
      icon="el-icon-plus"
      style="margin: 10px 10px"
      >添加资产</el-button
    >
    <el-table style="width: 100%" border :data="list" align="center">
      <el-table-column label="序号" width="80px" align="center">
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
      <el-table-column prop="type" label="类型" width="50px" align="center">
      </el-table-column>
      <el-table-column
        prop="containers"
        label="容器数量"
        width="width"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="width"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="encodepwd"
        label="密码"
        width="width"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="port" label="端口" width="width" align="center">
      </el-table-column>
      <el-table-column prop="type" label="操作" width="300px" align="center">
        <template slot-scope="{ row }">
          <el-button
            icon="el-icon-search"
            type="success"
            size="mini"
            @click="jumpContainer"
            >查看容器</el-button
          >
          <el-button
            type="warning"
            icon="el-icon-edit"
            size="mini"
            @click="updatePro(row)"
            >修改</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="deletePro(row)"
            >删除</el-button
          >
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
      @current-change="getPageList"
      @size-change="handleSizeChange"
    >
    </el-pagination>
    <el-dialog
      :title="proForm.id ? '修改信息' : '添加资产'"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        style="width: 80%"
        :model="proForm"
        :rules="rules"
        ref="proRuleForm"
      >
        <el-form-item prop="hostname" label="主机名" label-width="80px">
          <el-input autocomplete="off" v-model="proForm.hostname"></el-input>
        </el-form-item>
        <el-form-item prop="address" label="IP地址" label-width="80px">
          <el-input autocomplete="off" v-model="proForm.address"></el-input>
        </el-form-item>
        <el-form-item prop="type" label="类型" label-width="80px">
          <el-input autocomplete="off" v-model.number="proForm.type"></el-input>
        </el-form-item>
        <el-form-item prop="type" label="用户名" label-width="80px">
          <el-input autocomplete="off" v-model="proForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="type" label="密码" label-width="80px">
          <el-input
            autocomplete="off"
            v-model="proForm.password"
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="type" label="端口" label-width="80px">
          <el-input autocomplete="off" v-model="proForm.port"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdatePropoerty"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getProperty,
  modifyProperty,
  deleteProperty,
} from "@/api/server/property";
export default {
  name: "Property",
  data() {
    return {
      // 校验规则
      rules: {
        hostname: [
          { required: true, message: "主机名" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "change",
          },
        ],
        address: [
          { required: true, message: "值为主机IP地址", trigger: "change" },
        ],
        type: [
          {
            required: true,
            message: "类型 --> 0、普通主机 1、运维机器",
            trigger: "change",
          },
        ],
      },
      // 当前页数
      page: 1,
      // 显示一个多少个
      limit: 5,
      // 总共多少条
      total: 0,
      // 列表显示的数据 hostname address type containers username password encodepwd port
      list: [],

      //   是否展示资产信息变更弹窗
      dialogFormVisible: false,

      // 主机信息收集，数据绑定
      proForm: {
        // id:0,
        hostname: "",
        address: "",
        type: 0,
        containers: 0,
        username: "",
        password: "",
        port: 0,
      },
    };
  },
  computed: {
    pageCount() {
      return this.total / this.limit;
    },
  },
  mounted() {
    this.getPageList();
  },
  methods: {
    async getPageList(pager = 1) {
      this.page = pager;
      const { page, limit } = this;
      let result = await getProperty(page, limit);
      if (result.code == 20000) {
        this.total = result.data.total;
        this.page = result.data.page;
        this.limit = result.data.limit;
        this.list = result.data.list;
      }
    },
    handleSizeChange(val) {
      this.limit = val;
      this.getPageList();
    },
    showDialog() {
      this.dialogFormVisible = true;
      this.proForm = { hostname: "", address: "", type: 0 };
    },
    updatePro(row) {
      this.dialogFormVisible = true;
      console.log({ ...row });
      this.proForm = { ...row };
    },
    // 删除资产
    deletePro(row) {
      this.$confirm("是否删除主机: " + row.hostname + "?", "资产删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let result = await deleteProperty(row);
          this.$message(result.notification);
          this.getPageList(this.list.length > 1 ? this.page : this.page - 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 添加或者修改主机资产
    addOrUpdatePropoerty() {
      this.$refs.proRuleForm.validate(async (success) => {
        if (success) {
          this.dialogFormVisible = false;
          let result = await modifyProperty(this.proForm);
          this.$message(result.notification);
          // 如果添加，则在第一页，如果修改则在当前页
          this.getPageList(this.proForm.id ? this.page : 1);
        } else {
          this.$message("error submit!!");
          return false;
        }
      });
    },
    // 跳转到容器页面
    jumpContainer() {
      this.$router.push({ path: "/server-ops/containers" });
    },
  },
};
</script>

<style>
</style>