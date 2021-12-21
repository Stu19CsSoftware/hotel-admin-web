<template>
  <div class="main">
    <div class="left">
      <Mleft></Mleft>
    </div>
    <div class="right">
      <Mright></Mright>
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
    width: 850px;
    float: right;
    margin-left: 10px;
  }
  .main{
    width: 1100px;
    margin:20px auto;
  }
</style>
<script type="text/javascript">
import Mleft from '../components/Mleft.vue'
import Mright from '../components/Mright.vue'
export default {
  components: {
    Mleft,
    Mright
  }
}
</script>
