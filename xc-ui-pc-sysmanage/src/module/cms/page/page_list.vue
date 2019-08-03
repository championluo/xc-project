<template>
  <!--编写页面静态部分，即view部分-->
 <!--template内容必须有一个根元素，否则vue会报错，这里我们在template标签内定义一个div-->
  <div>
      <el-button type="primary" v-on:click="query" size="small" >查询</el-button>
      <el-table
        :data="list"
        stripe
        style="width: 100%">
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="pageName" label="页面名称" width="120">
        </el-table-column>
        <el-table-column prop="pageAliase" label="别名" width="120">
        </el-table-column>
        <el-table-column prop="pageType" label="页面类型" width="150">
        </el-table-column>
        <el-table-column prop="pageWebPath" label="访问路径" width="250">
        </el-table-column>
        <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
        </el-table-column>
        <el-table-column prop="pageCreateTime" label="创建时间" width="180">
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :page-size="this.params.size"
        v-on:current-chagen="changePage"
        :total="total" :current-page="this.params.page" style="float:right;">
      </el-pagination>
    </div>
</template>

<script>
  import * as cmsApi from '../api/cms'
  /*编写页面静态部分,即model及vm部分*/
    export default {
        name: "page_list.vue",
        data() {
          return {
            list: [],
            total: 50,
            params: {
              page: 1,//页码
              size: 2 //每页显示的个数
            }
          }
        },
      methods:{
            //分页查询
            changePage: function(){
              this.query();
            },
            //查询
            query:function(){
              cmsApi.page_list(this.params.page,this.params.size,this.params).then((res)=>{
                console.log(res)
                this.total=res.queryResult.total
                this.list= res.queryResult.list
              })
            }
      }
    }
</script>

<style scoped>
/*编写页面样式,不是必须*/
</style>
