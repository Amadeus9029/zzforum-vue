<template>
  <div class="home">
    <el-backtop></el-backtop>
    <el-row>
      <el-col>
        <nav-menu></nav-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <router-view></router-view>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <index-carousel></index-carousel>
      </el-col>
    </el-row>
    <el-row type="flex" style="margin-top:20px;margin-bottom:20px" justify="space-around">
      <el-col :span="16">
        <span style="float:left">文档</span>
        <el-divider></el-divider>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
        <page style="margin-top:20px"></page>
      </el-col>
      <el-col :span="6">
        <span style="float:left">标签</span>
        <el-divider></el-divider>
        <el-row :gutter="50">
          <el-col :span="4" v-for="i in 4" :key="i">
            <el-tag>标签{{i}}</el-tag>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import NavMenu from "@/components/NavMenu/NavMenu";
import IndexCarousel from "@/components/Carousel/IndexCarousel";
import Page from "@/components/Page/Page";
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: { NavMenu, IndexCarousel, Page },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      add: "increment"
    }),
    localS: () => {
      console.log(localStorage);
      localStorage.setItem("name", "admin");
    }
  }
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>