<template>
  <div class="home">
    <HelloWorld msg="欢迎来到酒店管理系统之超级管理"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
