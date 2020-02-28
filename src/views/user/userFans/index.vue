<template>
  <div class="userFans" style="padding-top:20px;">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <template v-for="i in 4">
      <el-row type="flex">
        <el-col :span="3" style="min-width:100px">
          <el-avatar :size="80" :src="'/static/logo.png'"></el-avatar>
        </el-col>
        <el-col :span="13">
          <el-row style="height:100%">
            <el-col align="left">
              <div>用户名</div>
            </el-col>
            <el-col align="left" style="margin-top:20px">
              <div>这个人啥都没写</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8" align="left">
          <el-row type="flex" align="middle" style="height:100%">
            <el-col>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </template>
    <page style="margin-top:20px"></page>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Page from "@/components/Page/Page";
export default {
  name: "UserFans",
  components: { Page },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        sex: "",
        desc: "",
        avatarUrl: "/static/logo.png",
        email: "xxx@qq.com",
        phone: "139xxxxx3529"
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style>
</style>