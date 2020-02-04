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
        <router-link :to="{path:'/user'}">user</router-link>
        <el-button @click="add">+</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button @click="localS">-</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <index-carousel></index-carousel>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <index-carousel></index-carousel>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <index-carousel></index-carousel>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <index-carousel></index-carousel>
      </el-col>
    </el-row>
  </div>
</template>
<style>
</style>
<script>
import NavMenu from "@/components/NavMenu/NavMenu";
import IndexCarousel from "@/components/Carousel/IndexCarousel";
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: { NavMenu, IndexCarousel },
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