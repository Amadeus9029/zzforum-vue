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
      <router-link tag="el-menu-item" index="1" :to="{path:'/user'}">用户中心</router-link>
      <router-link tag="el-menu-item" index="2" :to="{path:'/content'}">文件管理</router-link>
      <router-link tag="el-menu-item" index="3" :to="{path:'/work'}">文件编辑</router-link>
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
      url: "./static/logo.png"
    };
  },
  computed: mapState({
    count: state => state.count,
    count2: state => state.count2,
    count3: (state, getters) => getters.doneTodos
  }),
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>
<style scoped>
</style>
