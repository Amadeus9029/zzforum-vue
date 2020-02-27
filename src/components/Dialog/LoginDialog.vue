<template>
  <div class="login-dialog">
    <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
    <el-dialog title="登录" :visible.sync="centerDialogVisible" width="35%" center>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="centerDialogVisible=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: "LoginDialog",
    data() {
      var validateName = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      };
      return {
        centerDialogVisible: false,
        ruleForm: {
          name: "",
          password: ""
        },
        rules: {
          name: [{validator: validateName, trigger: "blur"}],
          password: [{validator: validatePass, trigger: "blur"}]
        }
      };
    },
    methods: {
      submitForm(formName) {
        console.log("submit");
        this.$refs[formName].validate(valid => {
          if (valid) {
            console.log(this.$store);
            this.$store
              .dispatch("user/loginAction", {
                name: this.ruleForm.name,
                password: this.ruleForm.password
              })
              .then(response => {
                console.log(response);
                this.$message({
                  type: "success",
                  message: "登录成功!",
                  duration: 1000
                });
                console.log(this.$store.state.user.user)
                // this.$axios.defaults.headers.common["Authorization"] =
                //   response.data;
                this.centerDialogVisible = false;
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style scoped>
</style>
