<template>
  <div class="edit">
    <!--企业信息-->
    <div class="title">
      <span class="line p-l-5">企业信息</span>
      <span class="fr cursor p-r-25" @click="spPreview = spPreview === 'edit' ? 'preview':'edit'">{{spPreview === 'edit'?'保存':'编辑'}}</span>
    </div>
    <sp-info :preview="spPreview" />
    
    <!--渠道信息-->
    <div class="title">
      <span class="line p-l-5">渠道信息</span>
      <span class="fr cursor p-r-25" @click="channelPreview = channelPreview === 'edit' ? 'preview':'edit'">{{channelPreview === 'edit'?'保存':'编辑'}}</span>
    </div>
    <channel-info :preview="channelPreview" />
    
    <!--账户信息-->
    <div class="title">
      <span class="line p-l-5">账户信息</span>
      <span class="fr cursor p-r-25" @click="accountPreview = accountPreview === 'edit' ? 'preview':'edit' ">{{accountPreview === 'edit'?'保存':'编辑'}}</span>
    </div>
    <account-info :preview="accountPreview" />
  </div>
</template>
<script>
  import SpInfo from '../spOpen/components/SpInfo'
  import AccountInfo from '../spOpen/components/AccountInfo'
  import ChannelInfo from '../spOpen/components/ChannelInfo'
  
  export default {
    name: 'spEdit',
    data() {
      return {
        checkedList: [{id: "1001", name: "计算机软件"}],
        spPreview: 'preview',
        channelPreview: 'preview',
        accountPreview: 'preview',
        spInfo: {
          spName: '',
          contactName: '',
          contactPhone: '',
          spType: '1',
          industryTypeCopy: ''
        }
      }
    },
    created() {
      console.log(this.$route.params.id);
    },
    components: {SpInfo,AccountInfo,ChannelInfo},
    methods: {}
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss' type='text/scss'>
  @import "src/styles/variables.scss";
  
  .title {
    padding: 10px 15px;
    border-bottom: 1px solid $borderColor;
    margin-bottom: 20px;
    span {
      color: $mainBg;
      position: relative;
      &.line::before {
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
  
  .edit{
   padding-right: 5%;
  }
</style>
