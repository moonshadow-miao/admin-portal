<template>
  <div>
    <div class="title">
      <span class="line p-l-5">企业信息</span>
      <span class="fr cursor p-r-25" @click="spInfoEdit = !spInfoEdit">{{spInfoEdit?'保存':'编辑'}}</span>
    </div>
  </div>
</template>
<script>
  import Industries from '@/components/IndustryList/Industries'

  export default {
    name: 'spEdit',
    data() {
      return {
        checkedList: [{id: "1001", name: "计算机软件"}],
        spInfoEdit:false,
        spInfo:{
          spName:'',
          contactName:'',
          contactPhone:'',
          spType:'1',
          industryTypeCopy:''
        }
      }
    },
    created(){
      console.log(this.$route.params.id);
    },
    components: {Industries},
    methods: {
    
    }
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss' type='text/scss'>
  @import "src/styles/variables.scss";
  .title{
    padding: 10px 15px;
    border-bottom: 1px solid $borderColor;
    span{
      color:$mainBg;
      position: relative;
      &.line::before{
        position: absolute;
        content: '';
        background-color: $mainBg;
        height: 18px;
        width: 3px;
        left: -5px;
        top: -1px;
      }
    }
  }
</style>
