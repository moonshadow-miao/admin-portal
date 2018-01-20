<template>
  <div class="table-list">
    <el-table @select="select" @select-all="selectAll" header-row-class-name="table-header" size="mini" :data="data" border style="width: 100%" cell-class-name="table-cell">
      <el-table-column :fixed="!isMobile" v-if="selection" type="selection" min-width="40" />
      <slot></slot>
    </el-table>
    <div class="table-page clearfix">
      <el-pagination :small="isMobile" :class="{fr:!isMobile}" class="pagination" background @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10,20,50,100,200]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="dataCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        currentPage: 1
      }
    },
    computed:{
      isMobile(){
        return this.$store.state.common.isMobile
      }
    },
    props: {
      selection: {
        type: Boolean,
        default: false
      },
      selectList:{
        type:Array,
        default:()=>[]
      },
      data: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        default: 10
      },
      dataCount: {
        type: Number,
        default: 0
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.$emit('query', {curPage: val,pageSize:this.pageSize})
      },
      selectAll(allData){
        let list =allData.map(item=>item.id)
        this.$emit('update:selectList',list)
      },
      select(data){
        let list =data.map(item=>item.id)
        this.$emit('update:selectList',list)
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss">
  .table-header {
    th {
      padding: 2px;
      line-height: 14px;
      background-color: #f7f7f7;
    }
  }

  .table-list {
    padding: 10px;
  }

  .table-page {
    padding: 15px 20px;
    overflow: auto;
  }
</style>
