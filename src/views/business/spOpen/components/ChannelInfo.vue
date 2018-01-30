<template>
  <el-form labelWidth="150px" size="small" :model="formData">
    <el-row>
      <el-col :span="12">
        <el-form-item label="所属渠道">
          <Platform :preview="preview==='preview'" :showCity="true" :platform.sync="formData.platform" :city.sync="formData.city"/>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="渠道商姓名">
          <el-input :disabled="preview==='preview'" v-model="formData.saleName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="渠道商手机号">
          <el-input :disabled="preview==='preview'" v-model="formData.saleMdn"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row v-if="!preview">
      <el-col :span="12">
        <el-form-item label=" ">
          <el-button @click="next(1)">上一步</el-button>
          <el-button type="primary" @click="next(3)">下一步</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import Platform from '@/components/PlatformSelector/platformSelector';
  import editMixin from '../../spManage/components/editMixin'
  export default {
    name: "channelInfo",
    data() {
      return {
        formData: {
          platform: '',
          city: '',
          saleName: '',
          saleMdn: '',
          customerManagerName: '',
          customerManagerMdn: ''
        }
      }
    },
    mixins:[editMixin],
    components: {Platform},
    methods: {
      next(step) {
        this.$emit('handleNext', step)
      },
    }
  }
</script>

