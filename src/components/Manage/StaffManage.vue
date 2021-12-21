<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="员工编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="idnumber"
      label="身份证号省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="number"
      label="手机号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="time"
      label="入职时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="job"
      label="岗位"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="状态"
      width="100"
      :filters="[{ text: '在职', value: '离职' }, { text: '在职', value: '离职' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '在职' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button
        @click.native.prevent="deleteRow(scope.$index, tableData)"
        type="text"
        size="small">
        移除
       </el-button>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleClick (row) {
      console.log(row)
    },
    filterTag (value, row) {
      return row.tag === value
    },
    resetDateFilter () {
      this.$refs.filterTable.clearFilter()
    }
  },

  data () {
    return {
      tableData: [{
        id: '1001',
        name: '王小虎',
        idnumber: '340024200002143325',
        number: '13324563421',
        time: '2020.10.1',
        job: '财务部',
        tag: '在职'
      }, {
        id: '1001',
        name: '王小虎',
        idnumber: '340024200002143325',
        number: '13324563421',
        time: '2020.10.1',
        job: '财务部',
        tag: '在职'
      }, {
        id: '1001',
        name: '王小虎',
        idnumber: '340024200002143325',
        number: '13324563421',
        time: '2020.10.1',
        job: '财务部',
        tag: '在职'
      }, {
        id: '1001',
        name: '王小虎',
        idnumber: '340024200002143325',
        number: '13324563421',
        time: '2020.10.1',
        job: '财务部',
        tag: '在职'
      }, {
        id: '1001',
        name: '王小虎',
        idnumber: '340024200002143325',
        number: '13324563421',
        time: '2020.10.1',
        job: '财务部',
        tag: '离职'
      },
      {
        id: '1001',
        name: '王小虎',
        idnumber: '340024200002143325',
        number: '13324563421',
        time: '2020.10.1',
        job: '财务部',
        tag: '离职'
      }]
    }
  }
}
</script>
