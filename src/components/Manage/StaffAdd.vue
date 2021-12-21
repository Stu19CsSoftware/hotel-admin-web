<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="float: left">
  <el-form-item label="员工编号" prop="number" >
    <el-input v-model="ruleForm.number" ></el-input>
  </el-form-item>
  <el-form-item label="员工姓名" prop="name" >
    <el-input v-model="ruleForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="身份证号" prop="id">
    <el-input v-model="ruleForm.id" ></el-input>
  </el-form-item>
  <el-form-item label="手机号码" prop="phone">
    <el-input v-model="ruleForm.phone" ></el-input>
  </el-form-item>
  <el-form-item label="入职岗位" prop="work">
    <el-select v-model="ruleForm.work" placeholder="请选择入职岗位" style="float: left">
      <el-option label="前台" value="receptionis"></el-option>
      <el-option label="清洁工" value="cleaner"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="入职日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="入职部门" prop="type" >
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="前台部门" name="type"></el-checkbox>
      <el-checkbox label="客房部门" name="type"></el-checkbox>
      <el-checkbox label="行政部" name="type"></el-checkbox>
      <el-checkbox label="财务部" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">增加</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        number: '',
        phone: '',
        id: '',
        work: '',
        region: '',
        date1: '',
        type: []
      },
      rules: {
        name: [
          { required: true, message: '请输入员工姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入员工编号', trigger: 'blur' },
          { minlength: 5, maxlength: 7, message: '长度在 5 到 7 个数字', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入员工手机号', trigger: 'blur' },
          { minlength: 11, maxlength: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入员工身份证号', trigger: 'blur' },
          { minlength: 18, maxlength: 18, message: '长度在 18 个字符', trigger: 'blur' }
        ],
        work: [
          { required: true, message: '请选择入职岗位', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个入职部门', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
