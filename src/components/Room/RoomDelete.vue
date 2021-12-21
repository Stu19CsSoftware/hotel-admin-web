<template>
<div>
  <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="rtype"
      label="房型"
      sortable
      width="180"
      column-key="type"
      :filters="[{text: '双人大床房', value: '双人大床房'}, {text: '单人大床房', value: '单人大床房'}, {text: '投影大床房', value: '投影大床房'}, {text: '双人双床房', value: '双人双床房'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="number"
      label="房号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="frontmoney"
      label="房型押金"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="状态"
      width="100"
      :filters="[{ text: '上架', value: '上架' }, { text: '下架', value: '下架' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '上架' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
    <template slot-scope="scope">
      <el-button
        @click.native.prevent="deleteRow(scope.$index, tableData)"
        type="text"
        size="small">
        移除
      </el-button>
    </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        rtype: '双人大床房',
        number: '401',
        frontmoney: '100',
        tag: '上架'
      }, {
        rtype: '双人大床房',
        number: '402',
        frontmoney: '100',
        tag: '下架'
      }, {
        rtype: '双人大床房',
        number: '402',
        frontmoney: '100',
        tag: '下架'
      }, {
        rtype: '双人大床房',
        number: '402',
        frontmoney: '100',
        tag: '上架'
      }]
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleClick (row) {
      console.log(row)
    },
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.frontmoney
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>
