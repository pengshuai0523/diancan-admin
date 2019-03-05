<template>
    <div class="list-wrap">
        <h1>12312</h1>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
                prop="date"
                label="序号"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="菜品图片"
                >
                <!-- <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template> -->
                <!-- <template> -->
                    <p class="img"></p>
                <!-- </template> -->
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品编号">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品分类">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品标题">
            </el-table-column>
            <el-table-column
                prop="address"
                label="结账单位">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品单价">
            </el-table-column>
            <el-table-column
                prop="address"
                label="原价">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品标签">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted () {
        
    },
    methods : {

    }
}
</script>
<style lang="scss" scoped>
    .list-wrap .img{
        width:60px;height:60px;
        background:#ccc;
    }
</style>


