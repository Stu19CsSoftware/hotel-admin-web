<template>
  <div>
   <div v-if="kk==1">
      <StaffManage></StaffManage>
   </div>
   <div v-if="kk==2">
      <StaffAdd></StaffAdd>
   </div>
  </div>
</template>
<script type="text/javascript">
import Msg from './msg.js'
import StaffManage from './Manage/StaffManage.vue'
import StaffAdd from './Manage/StaffAdd.vue'
export default {
  components: {
    StaffManage,
    StaffAdd
  },
  data () {
    return {
      kk: 0
    }
  },
  mounted: function () {
    var obj = this
    Msg.$on('val', function (m) {
      obj.kk = m
    })
  }
}
</script>
