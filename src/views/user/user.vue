<template>
  <div class="user">
    <el-row>
      <el-col>
        <nav-menu></nav-menu>
      </el-col>
    </el-row>
    <el-row type="flex" style="height:calc(100vh - 61px);">
      <el-col :span="6">
        <user-menu></user-menu>
      </el-col>
      <el-col>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
import UserMenu from "@/components/NavMenu/UserMenu";
export default {
  name: "User",
  components: {
    NavMenu,
    UserMenu
  },
  data() {
    return {};
  },
  methods: {
    login: async () => {
      await auth0.loginWithRedirect();
    }
  }
};
</script>
<style scoped>
</style>