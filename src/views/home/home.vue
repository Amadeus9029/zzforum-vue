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
    <!-- <el-row>
      <el-col v-focus="msg">
        <test :msg="'this is msg'"></test>
      </el-col>
    </el-row>-->
    <el-row>
      <el-col>
        <el-button @click="change">加载</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import NavMenu from "@/components/NavMenu/NavMenu";
import IndexCarousel from "@/components/Carousel/IndexCarousel";
import Page from "@/components/Page/Page";
import { mapMutations } from "vuex";
import Vue from "vue";
const loadingPlugin = {
  install: (vm) => {
    console.log(vm)
    const loadingComponent = vm.extend({
      template: "<div id='loading-wrapper'>{{msg}}</div>",
      props: {
        msg: {
          type: String,
          default: "loading..."
        }
      }
    });
    console.log(loadingComponent);
    function loading(msg) {
      let div = document.createElement("div");
      div.setAttribute("id", "loading-wrapper");
      document.body.append(div);
      console.log(div);
      new loadingComponent({
        props: {
          msg: {
            type: String,
            default: msg
          }
        }
      }).$mount("#loading-wrapper");
      console.log("123");
      return () => {
        document.body.removeChild(document.getElementById("loading-wrapper"));
      };
    }
    Vue.prototype.$loading2 = loading;
  }
};
Vue.use(loadingPlugin);
export default {
  name: "home",
  components: { NavMenu, IndexCarousel, Page },
  data() {
    return {
      msg: 12,
      user: [1, 2, 3]
    };
  },
  methods: {
    ...mapMutations({
      add: "increment"
    }),
    localS() {
      console.log(localStorage);
      localStorage.setItem("name", "admin");
    },
    add() {
      return "123";
    },
    change() {
      const hide = this.$loading2("loading...");
      setTimeout(function() {
        hide();
      }, 2000);
    }
  },
  created() {
    console.log(this.$loading2);
  },
  directives: {
    focus: {
      bind(el, binding, vnode, oldVnode) {
        console.log("binding");
        console.log(el);
        console.log(binding);
        console.log(vnode.child.span);

        console.log(oldVnode);
      },
      inserted(el, binding, vnode) {
        console.log("inserted");
        el.style.background = "red";
      },
      update(el, binding, vnode) {
        console.log("组件的VNode更新时调用");
        console.log(vnode);
      },
      componentUpdated(el) {
        console.log("指令所在组件及子节点全部更新时调用");
      },
      unbind() {
        console.log("指令与元素解绑时调用");
      }
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
<style>
#loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ccc;
  z-index: 999;
}
</style>
