<template>
    <section class="chart-container">
        <div class="sumData">
            <h5 class="header">营业数据汇总(实时数据)</h5>
            <ul class="list">
                <li class="item1">
                    <span class="top">6888.00</span>
                    <span class="bottom">累计实收(元)</span>
                </li>
                <li class="item2">
                    <span class="top">6888.00</span>
                    <span class="bottom">累计实收(元)</span>
                </li>
                <li class="item3">
                    <span class="top">6888.00</span>
                    <span class="bottom">累计实收(元)</span>
                </li>
                <li class="item4">
                    <span class="top">6888.00</span>
                    <span class="bottom">累计实收(元)</span>
                </li>
            </ul>
        </div>
        <div class="dayChar">
            <h5 class="header">营业数据汇总(实时数据)</h5>
            <el-row class="char">
                <el-col :span="24">
                    <div id="chartLine" style="width:100%; height:400px;"></div>
                </el-col>
            </el-row>
            <div class="dayData">
                <ul class="list">
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                </ul>
                <ul class="list">
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="dayChar">
            <h5 class="header">日营业数据图表</h5>
            <el-row class="char">
                <el-col :span="24">
                    <div id="chartLine" style="width:100%; height:400px;"></div>
                </el-col>
            </el-row>
            <div class="dayData">
                <ul class="list">
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                </ul>
                <ul class="list">
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                    <li>
                        <span class="top">6888.00</span>
                        <span class="bottom">实收(元)</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartLine: null,
            }
        },
        mounted () {
            this.drawCharts()
        },
        methods: {
            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    /*title: {
                        text: 'Line Chart'
                    },*/
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawLineChart()
            }
        },

    }
</script>

<style lang="scss" scoped>
    .sumData{
        margin-bottom: 30px;
        .header{
            font-size: 16px;
            color: #383004;
            padding-left: 20px;
        }
        .list{
            display: flex;
            margin-top: 10px;
            li{
                width: 300px;
                height: 130px;
                text-align: center;
                display: flex;
                flex-direction: column;
                color: #fff;
                margin-left: 20px;
                span{
                    height: 65px;
                    line-height: 65px;
                }
                .top{
                    font-size: 30px;
                    border-bottom: 1px solid #dedede;
                }
                .bottom{
                    font-size: 16px;
                }
            }
            .item1{
                background: #FA5B25;
            }
            .item2{
                background: #FF9800;
            }
            .item3{
                background: #2096F3;
            }
            .item4{
                background: #4CAF50;
            }
        }
    }
    .dayChar{
        padding: 0 20px;
        .header{
            font-size: 16px;
            color: #383004;
            padding-left: 20px;
        }
        .char{
            background: #2A5787;
        }
        .dayData{
            display: flex;
            flex-direction: column;
            .list{
                display: flex;
                flex-direction: row;
                margin-bottom: 20px;
                justify-content: space-between;
                li{
                    width: 220px;
                    height: 100px;
                    background: #FFFFFF;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    padding: 0 20px;
                    span{
                        height: 50px;
                        line-height: 50px;
                    }
                    span:nth-child(1){
                        border-bottom: 1px solid #dedede;
                    }
                }
            }
        }
    }
</style>
