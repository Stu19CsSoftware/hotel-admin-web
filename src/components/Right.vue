<template>
  <div>
   <div v-if="kk==1">
      <RoomManage></RoomManage>
   </div>
   <div v-if="kk==2">
      <RoomChange></RoomChange>
   </div>
   <div v-if="kk==3">
      <RoomDelete></RoomDelete>
   </div>
   <div v-if="kk==4">
      <RoomStyleAdd></RoomStyleAdd>
   </div>
   <div v-if="kk==5">
      <RoomAdd></RoomAdd>
   </div>
  </div>
</template>
<script type="text/javascript">
import Msg from './msg.js'
import RoomManage from './Room/RoomManage.vue'
import RoomStyleAdd from './Room/RoomStyleAdd.vue'
import RoomAdd from './Room/RoomAdd.vue'
import RoomDelete from './Room/RoomDelete.vue'
import RoomChange from './Room/RoomChange.vue'
export default {
  components: {
    RoomManage,
    RoomStyleAdd,
    RoomAdd,
    RoomDelete,
    RoomChange
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
