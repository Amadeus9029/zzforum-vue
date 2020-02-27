<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <router-link tag="el-menu-item" index="0" :to="{path:'/'}">
        <el-image style="width: 48px; height: 48px" :src="url" :fit="fits[0]"></el-image>
      </router-link>
      <router-link tag="el-menu-item" index="1" :to="{path:'/user'}">用户中心</router-link>
      <router-link tag="el-menu-item" index="2" :to="{path:'/content'}">文件管理</router-link>
      <router-link tag="el-menu-item" index="3" :to="{path:'/work'}">文件编辑</router-link>
      <template v-if="Object.keys(hasToken).length">
        <el-menu-item style="float:right">
          <el-dropdown>
            <router-link tag="span" class="el-dropdown-link" :to="{path:'/user'}">
              {{user.name}}
            </router-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-logout" @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </template>
      <template v-else>
        <el-menu-item style="float:right">
          <register-dialog></register-dialog>
        </el-menu-item>
        <el-menu-item style="float:right">
          <login-dialog></login-dialog>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import RegisterDialog from "@/components/Dialog/RegisterDialog";
  import LoginDialog from "@/components/Dialog/LoginDialog";
  import {mapState, mapGetters} from "vuex";

  export default {
    name: "NavMenu",
    components: {RegisterDialog, LoginDialog},
    data() {
      return {
        activeIndex: "1",
        fits: ["fill", "contain", "cover", "none", "scale-down"],
        url: "/static/logo.png"
      };
    },
    created() {
      console.log(this.user)
    },
    computed: {
      ...mapState({
        user: (state) => state.user.user
      }),
      ...mapGetters({
        hasToken: 'token'
      }),
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      logout(){

      }
    }
  };
</script>
<style scoped>
</style>
