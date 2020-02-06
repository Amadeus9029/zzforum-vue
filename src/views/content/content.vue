<template>
  <div class="content">
    <el-row>
      <el-col>
        <nav-menu></nav-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <tool-menu></tool-menu>
      </el-col>
    </el-row>
    <el-row style="height:calc(100vh - 61px);">
      <el-col :span="5" style="height:calc(100vh - 61px);background:gray;">Aside</el-col>
      <el-col :span="19">Main</el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
import ToolMenu from "@/components/NavMenu/ToolMenu";
import Tab from "@/components/Tab/Tab";
export default {
  name: "Content",
  components: {
    Tab,
    NavMenu,
    ToolMenu
  }
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
</style>