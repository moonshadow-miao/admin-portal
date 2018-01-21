<template>
  <div>
    <Industries :checkedList.sync="checkedList"/>
    <el-upload
      class="upload-demo"
      action="/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :auto-upload="false"
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
  import Industries from '@/components/IndustryList/Industries'

  export default {
    name: 'spEdit',
    data() {
      return {
        checkedList: [{id: "1001", name: "计算机软件"}],
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    created(){
      console.log(this.$route.params.id);
    },
    activated(){
      console.log(this.$route.params.id);
    },
    components: {Industries},
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        console.log(1,files)
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        console.log(2,file)
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss' type='text/scss'>

</style>
