<template>
  <div id="app">
    <div id ="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/room">客房管理</router-link>
      <router-link to="/manage">酒店员工管理</router-link>
      <el-button>退出</el-button>
    </div>
    <router-view/>
    <!--<img src="./assets/logo.png">-->
    <div>
    </div>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  /*background-color: AntiqueWhite;*/
  padding: 30px;
}
#nav a {
  margin: 30px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
