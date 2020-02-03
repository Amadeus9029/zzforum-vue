<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item>
        <el-image style="width: 48px; height: 48px" :src="url" :fit="fits[0]"></el-image>
      </el-menu-item>
      <el-menu-item index="1">{{count}}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{count2}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">{{count3}}</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>{{count3}}</el-menu-item>
      <el-menu-item style="float:right">
        <register-dialog></register-dialog>
      </el-menu-item>
      <el-menu-item style="float:right">
        <login-dialog></login-dialog>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import RegisterDialog from "@/components/Dialog/RegisterDialog";
import LoginDialog from "@/components/Dialog/LoginDialog";
import { mapState } from "vuex";
export default {
  name: "NavMenu",
  components: { RegisterDialog, LoginDialog },
  data() {
    return {
      activeIndex: "1",
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "./static/logo.png",
    };
  },
  computed: mapState({
    count: state => state.count,
    count2: state => state.count2,
    count3: (state,getters) => getters.doneTodos
  }),
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>
<style scoped>
</style>
