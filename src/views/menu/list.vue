<template>
    <div class="list-wrap">
        <el-button @click="goBack()" round>返回</el-button>
        <el-button type="primary" round>保存</el-button>
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
                prop="num"
                label="菜品编号">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品分类">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品标题">
                <input type="text">
            </el-table-column>
            <el-table-column
                prop="address"
                label="结账单位">
                <input type="text">
            </el-table-column>
            <el-table-column
                prop="address"
                label="菜品单价">
                <input type="text">
            </el-table-column>
            <el-table-column
                prop="address"
                label="原价">
            </el-table-column>
                <input type="text">

            <el-table-column
                prop="address"
                label="菜品标签">
                <input type="text">
            </el-table-column>
            <el-table-column class-name="opt"
                prop="address"
                label="操作">
                <span class="advance">高级设置</span>
                <span class="del" @click="del()">删除</span>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '1',
          name: '王小虎',
          num: 'K0001'
        }, {
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '14',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted () {
        
    },
    methods : {
        del () {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        goBack () {
            this.$router.push({path:'/menuManage'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .list-wrap{
        .img{
            width:60px;height:60px;
            background:#ccc;
        }
        .opt{
            .advance{
                display: inline-block;
                color:#fff;
                width:70px;height:30px;
                line-height: 30px;text-align: center;
                background:#FA5B25;
                border-radius: 5px;
                cursor: pointer;
            }
            .del{
                display: inline-block;
                width:40px;height:30px;
                line-height: 30px;text-align: center;
                background:#F2F0ED;
                cursor: pointer;
            }
        }
        
    }
    input{
        width: 100%;
        padding:1px 0 1px 2px;
            border:1px solid #ddd;
        }
</style>


