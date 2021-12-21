<template>
  <div class="main">
      <ul class="menu">
        <li @click="menu1">客房管理</li>
        <li @click="menu2">客房修改</li>
        <li @click="menu3">客房删除</li>
        <li @click="menu4">房型增加</li>
        <li @click="menu5">房间增加</li>
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
    },
    menu3: function () {
      Msg.$emit('val', '3')
    },
    menu4: function () {
      Msg.$emit('val', '4')
    },
    menu5: function () {
      Msg.$emit('val', '5')
    }
  }
}
</script>
