import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import AV from 'leancloud-storage'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
AV.init({
  appId: 'LLt4j6GcLm9G33Iz1dRSGKqB-gzGzoHsz',
  appKey: 'AE7yCF8rh4sAEzEliV1c4xB6',
  serveURL: 'https://llt4j6gc.lc-cn-n1-shared.com'
})
Vue.prototype.$AV = AV
AV.debug.enable()

function created () {
  const TestObject = AV.Object.extend('Todo')
  const testObject = new TestObject()
  testObject.save({ content: 'Hello World!' })
  console.log('LeanCloud Rocks!')
}
created()
