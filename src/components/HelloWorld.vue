<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <div v-if="!$auth.loading">

      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>

      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>-->
    <h2>{{count}}</h2>
    <h3>{{count2}}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: mapState({
    count: state => state.count,
    count2: state => state.count2
  }),
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
