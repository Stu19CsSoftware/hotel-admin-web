<template>
<div>
  <el-radio-group v-model="size">
    <el-radio label="">默认</el-radio>
    <el-radio label="medium">中等</el-radio>
    <el-radio label="small">小型</el-radio>
    <el-radio label="mini">超小</el-radio>
  </el-radio-group>
  <el-descriptions class="margin-top" title="酒店信息" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">修改</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-home"></i>
        房型
      </template>
      双人大床房
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-house"></i>
        房号
      </template>
      401
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-grid"></i>
        所有设施
      </template>
      24小时热水，WiFi，电视机，吹风机
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-info"></i>
        床位数
      </template>
      <el-tag size="small">2</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        面积
      </template>
      30㎡
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-coin"></i>
        押金
      </template>
      100
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-bank-card"></i>
        销售价格
      </template>
      180
    </el-descriptions-item>
  </el-descriptions>
<!--  <el-descriptions class="margin-top" title="无边框列表" :column="3" :size="size">
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>
-->
</div>
</template>

<script>
export default {
  data () {
    return {
      size: ''
    }
  }
}
</script>
