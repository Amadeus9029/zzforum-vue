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
      <el-col :span="5" style="height:calc(100vh - 61px);background:gray;">
        <div>我的文档</div>
        <div>最近编辑</div>
        <div>回收站</div>
      </el-col>
      <el-col :span="19">
        <el-row type="flex" justify="start" style="margin-top: 20px">
          <el-col class="userSource" :span="3" v-for="item,i in userSource" :key="i">
            <el-card shadow="hover">
              <i class="el-icon-s-tools" style="float:right"></i>
              <div>
                <i :class="item.icon" style="font-size:50px"></i>
              </div>
              <span>{{item.name}}</span></el-card>
          </el-col>
        </el-row>
      </el-col>
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
    },
    data() {
      return {
        userSource: [
          {
            type: "folder",
            name: "我的文件",
            icon: "el-icon-folder"
          },
          {
            type: "folder",
            name: "aaa",
            icon: "el-icon-folder"
          },
          {
            type: "folder",
            name: "数学",
            icon: "el-icon-folder"
          },
          {
            type: "document",
            name: "我的文档",
            icon: "el-icon-document"
          }
        ]
      }
    }
  };
</script>
<style scoped lang="scss">
  .el-header {
    padding: 0;
  }
  .userSource {
    padding:10px
  }
  .userSource:first-child{

  }
</style>
