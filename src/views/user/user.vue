<template>
  <div class="user">
    <el-row>
      <el-col>
        <nav-menu></nav-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
export default {
  name: "User",
  components: {
    NavMenu
  }
};
</script>
<style scoped>
</style>