<template>
  <div class="tab">
    <el-tabs :tab-position="tabPosition" style="height: 700px;">
      <el-tab-pane label="用户管理">
        <el-button>新建文件</el-button>
      </el-tab-pane>
      <el-tab-pane label="用户管理">我的文件</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: "Tab",
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>