<template>
  <div id="app">
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

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
import IndexCarousel from "@/components/Carousel/IndexCarousel";
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: { NavMenu, IndexCarousel },
  methods: {
    ...mapMutations({
      add: "increment"
    }),
    localS: () => {
      console.log(localStorage);
      localStorage.setItem("name","admin")
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
