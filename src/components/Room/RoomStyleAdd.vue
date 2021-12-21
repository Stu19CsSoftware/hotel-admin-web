<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="float: left">
  <el-form-item label="房型编号" prop="number" >
    <el-input v-model="ruleForm.number" ></el-input>
  </el-form-item>
  <el-form-item label="房型称号" prop="name" >
    <el-input v-model="ruleForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="房型面积" prop="square">
    <el-input v-model="ruleForm.id" ></el-input>
  </el-form-item>
  <el-form-item label="床位数量" prop="beds">
    <el-input v-model="ruleForm.phone" ></el-input>
  </el-form-item>
  <el-form-item label="房型押金" prop="money">
    <el-input v-model="ruleForm.money" ></el-input>
  </el-form-item>
  <el-form-item label="销售价格" prop="sale">
    <el-input v-model="ruleForm.sale" ></el-input>
  </el-form-item>
  <el-form-item label="房型设施" prop="type" >
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="空调" name="type"></el-checkbox>
      <el-checkbox label="WiFi" name="type"></el-checkbox>
      <el-checkbox label="24h热水" name="type"></el-checkbox>
      <el-checkbox label="烧水壶" name="type"></el-checkbox>
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
        beds: '',
        square: '',
        money: '',
        sale: '',
        type: []
      },
      rules: {
        name: [
          { required: true, message: '请输入房型名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入房型编号', trigger: 'blur' },
          { minlength: 5, maxlength: 7, message: '长度在 5 到 7 个数字', trigger: 'blur' }
        ],
        beds: [
          { required: true, message: '请输入床位数量', trigger: 'blur' },
          { minlength: 1, maxlength: 2, message: '长度在 1-2 个数字', trigger: 'blur' }
        ],
        square: [
          { required: true, message: '请输入房型面积', trigger: 'blur' },
          { minlength: 2, maxlength: 3, message: '长度在 2位数至3位数', trigger: 'blur' }
        ],
        money: [
          { required: true, message: '请输入房型押金', trigger: 'blur' },
          { minlength: 2, maxlength: 3, message: '长度在2位数至3位数', trigger: 'blur' }
        ],
        sale: [
          { required: true, message: '请输入销售价格', trigger: 'blur' },
          { minlength: 2, maxlength: 4, message: '长度在2位数至4位数', trigger: 'blur' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个房型设施', trigger: 'change' }
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
