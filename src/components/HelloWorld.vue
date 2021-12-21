<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h5>你可以选择进入：</h5>
    <ul class="menu">
      <router-link to="/room">客房管理</router-link>
      <router-link to="/manage">酒店员工管理</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>jie
h3 {
  margin: 40px 0 0;
}
h5 {
  margin: 40px 0 0;
}
.menu {
  list-style-type: none;
  padding: 40px;
  margin-top:10px;
}
.menu a {
  margin: 40px;
  font-weight: bold;
  color: #2c3e50;
}
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu a.router-link-exact-active {
  color: #42b983;
}
</style>
