<template>
    <div>
        <ul class="module">
            <li class="suitItem">
                <h5 class="header">
                    <p class="tit">超值套餐</p>
                    <p class="opt">
                        <span @click="addClassify()">+添加</span>
                        <span>详情</span>
                    </p>
                </h5>
                <ul class="list">
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">2号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">3号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">4号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">5号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">6号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">7号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">8号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>

                </ul>
            </li>
            <li class="suitItem">
                <h5 class="header">
                    <p class="tit">超值套餐</p>
                    <p class="opt">
                        <span @click="addClassify()">+添加</span>
                        <span @click="goDetail()">详情</span>
                    </p>
                </h5>
                <ul class="list">
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">2号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                    <li class="item">
                        <span class="tableNo">3号(4人桌)</span>
                        <span class="tableCode">查看二维码</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted () {
        this.addClassify()
    },
    methods : {
        // 添加分类
        addClassify () {
            this.$prompt('请输入分类名称','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            }).then(({value}) => {
                alert(value)
            })
        },
        // 跳到列表页
        goDetail () {
            this.$router.push({path:'/menuList'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .module{
        width:100%;
        height:573px;
        background:#fff;
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        .suitItem{
            width:540px;
            margin-right: 70px;
            overflow: hidden;
        }
        .header{
            display: flex;
            flex-flow: row nowrap;
            font-size:16px;
            color: #383004;
            line-height: 50px;
            padding-left:15px;
            border-bottom:1px solid #ccc;
            .opt{
                margin-left:250px;
            }
            span{
                display: inline-block;
                width:100px;height:30px;line-height: 30px;
                color:#fff;
                text-align: center;border-radius:20px;
                background:#FA5B25;
                cursor: pointer;
            }
            
        }
        .list{
            padding:10px;
            width:553px;
            height:540px;
            overflow-y: scroll;
            li{
                display: flex;
                flex-flow: row nowrap;
                margin:10px 0;
                justify-content: space-between;
                line-height: 60px;
                .img{
                    width:60px;height:60px;
                    background:#ccc;
                }
            }
        }
    }
</style>


