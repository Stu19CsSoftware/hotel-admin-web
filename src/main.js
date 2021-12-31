import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'   // 导入ElementUI
import 'element-ui/lib/theme-chalk/index.css'  // 导入element ui 主题
import 'element-ui/lib/theme-chalk/display.css'  // 导入用于隐藏断点的样式
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import './assets/css/style.css' //引入全局样式文件

Vue.config.productionTip = false
Vue.use(ElementUI)
require('./api/init.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
