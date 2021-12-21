<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="float: left">
    <el-form-item label="房型选择" prop="style">
    <el-select v-model="ruleForm.style" placeholder="请选择房型" style="float: left">
      <el-option label="双人大床房" value="receptionis"></el-option>
      <el-option label="单人大床房" value="cleaner"></el-option>
      <el-option label="投影大床房" value="cleaner"></el-option>
      <el-option label="双人双床房" value="cleaner"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="房间号码" prop="room" >
    <el-input v-model="ruleForm.number" ></el-input>
  </el-form-item>
  <el-form-item label="额定人数" prop="number" >
    <el-input v-model="ruleForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="房间状态" prop="type" >
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="未上架" name="type"></el-checkbox>
      <el-checkbox label="已上架" name="type"></el-checkbox>
      <el-checkbox label="已下架" name="type"></el-checkbox>
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
        room: '',
        number: '',
        phone: '',
        id: '',
        style: '',
        region: '',
        date1: '',
        type: []
      },
      rules: {
        room: [
          { required: true, message: '请输入房间号码', trigger: 'blur' },
          { minlength: 3, maxlength: 4, message: '长度在 3 到 4 个数字', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入额定人数', trigger: 'blur' },
          { minlength: 1, maxlength: 2, message: '长度在 5 到 7 个数字', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入员工手机号', trigger: 'blur' },
          { minlength: 11, maxlength: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入员工身份证号', trigger: 'blur' },
          { minlength: 18, maxlength: 18, message: '长度在 18 个字符', trigger: 'blur' }
        ],
        style: [
          { required: true, message: '请选择房型', trigger: 'change' }
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
