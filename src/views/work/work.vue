<template>
  <div class="work">
    <el-row>
      <el-col>
        <nav-menu></nav-menu>
      </el-col>
    </el-row>
    <el-row
      style="height:calc(100vh - 61px);background:gray"
      type="flex"
      justify="center"
      align="center"
    >
      <el-col
        style="height:calc(100vh - 100px);margin:20px 200px;background:white;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"
      >
      <!-- 最牛逼的组件 -->
        <div class="my-niubi-component">
          title
          <el-divider></el-divider>content
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
export default {
  name: "Work",
  components: {
    NavMenu
  }
};
</script>
<style scoped>
</style>