<template>
  <div class="main">
    <div class="left">
      <Left></Left>
    </div>
    <div class="right">
      <Right></Right>
    </div>
  </div>
</template>
<style type="text/css">
  *{
    padding: 0;
    margin: 0;
  }
  .left{
    width: 200px;
    float: left;
    margin-right: 10px;
    background-color: #F0F8FF;
  }
  .right{
    width: 800px;
    float: right;
    margin-left: 10px;
  }
  .main{
    width: 1100px;
    margin:20px auto;
  }
</style>
<script type="text/javascript">
import Left from '../components/Left.vue'
import Right from '../components/Right.vue'
export default {
  components: {
    Left,
    Right
  }
}
</script>
