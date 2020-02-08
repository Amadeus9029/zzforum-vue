<template>
  <div class="tool-menu">
    <el-row style="height:50px;line-height:50px;background-color:#ccc;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
      <el-col>
        <el-dropdown trigger="click">
          <el-button type="primary">新建</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-document">新建文件</el-dropdown-item>
            <el-dropdown-item icon="el-icon-folder">新建文件夹</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ToolMenu"
  };
</script>
<style scoped>
</style>
