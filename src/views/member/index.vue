<template>
    <div class="member-wrap">
        <header>
            <h4>筛选条件</h4>
            <div class="content">
                <input type="number" placeholder="请输入手机号">
                <button class="search">搜索</button>
                <button class="reset">重置</button>
            </div>
        </header>
        <section class="main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">全部</el-tab-pane>
                <el-tab-pane label="已结算（20）" name="second">已结算</el-tab-pane>
                <el-tab-pane label="待支付（20）" name="third">待支付</el-tab-pane>
                <el-tab-pane label="已撤销（20）" name="fourth">已撤销</el-tab-pane>
            </el-tabs>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="date"
                label="序号"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="起始时间"
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="订单号">
                </el-table-column>
                <el-table-column
                prop="address"
                label="桌号/人数">
                </el-table-column>
                <el-table-column
                prop="address"
                label="手机号">
                </el-table-column>
                <el-table-column
                prop="address"
                label="计-惠-抹零+加+包-抵" width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="支付方式">
                </el-table-column>
                <el-table-column
                prop="address"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="address"
                label="实收">
                </el-table-column>
                <el-table-column
                prop="address"
                label="操作">
                </el-table-column>
            </el-table>
        </section>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'second',
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
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="scss" scoped>
    .member-wrap{
        background:#fff;
        header{
            padding:0 20px;
            padding-bottom:20px;
            h4{
                font-size:16px;
                height:60px;line-height: 60px;
                border-bottom:1px solid #ccc;
            }
            .content{
                padding-top:20px;
                input{
                    width:340px;height:40px;
                    background: #F2F0ED;
                    padding-left:20px;
                    border-radius: 20px;
                    border-radius: 20px;
                    margin-right:20px;
                }
                button{
                    width:140px;height:40px;
                    line-height: 40px;
                    color:#fff;font-size:16px;
                    text-align: center;
                    background: #FA5B25;
                    border:none;
                    border-radius: 20px;
                    border-radius: 20px;
                }
                .reset{
                    background: #C0B8AB;
                }
            }
        }
        .main{
            padding:20px;
        }
    }
</style>


