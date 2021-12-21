<template>
  <div class="main">
      <ul class="menu">
        <li @click="menu1">员工管理</li>
        <li @click="menu2">新增员工</li>
      </ul>
  </div>
</template>
<style type="text/css">
  .menu li{
    width: 200px;
    list-style: none;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 2px;
    background-color: white;
    line-height: 50px;
    cursor: pointer;
}
</style>
<script type="text/javascript">
import Msg from './msg.js'
export default {
  methods: {
    menu1: function () {
      Msg.$emit('val', '1')
    },
    menu2: function () {
      Msg.$emit('val', '2')
    }
  }
}
</script>
