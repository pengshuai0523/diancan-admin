<template>
    <div>
        <ul class="module">
            <li class="suitItem">
                <h5 class="header">
                    <p class="tit">大厅</p>
                    <p class="opt" v-if="redactStyle1 == 'true'">
                        <span class="chengC" @click="addClassify()">+添加</span>
                        <span class="huiC" @click="redactBtnFn(1)">编辑</span>
                    </p>
                    <p class="redact" v-if="redactStyle1 == 'false'">
                        <span class="huiC" @click="cancelBtnFn(1)">取消</span>
                        <span class="chengC" @click="cancelBtnFn(1)">完成</span>
                    </p>
                </h5>
                <ul class="list">
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'" @click="lookQRCode()">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty" @click="updateClassify()">修改</span>
                            <span class="delBtn" @click="delClassify()">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'" @click="lookQRCode()">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty" @click="updateClassify()">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>

                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle1 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle1 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>

                </ul>
            </li>
            <li class="suitItem">
                <h5 class="header">
                    <p class="tit">包厢(6个)</p>
                    <p class="opt" v-if="redactStyle2 == 'true'">
                        <span class="chengC" @click="addClassify()">+添加</span>
                        <span class="huiC" @click="redactBtnFn(2)">编辑</span>
                    </p>
                    <p class="redact" v-if="redactStyle2 == 'false'">
                        <span class="huiC" @click="cancelBtnFn(2)">取消</span>
                        <span class="chengC" @click="cancelBtnFn(2)">完成</span>
                    </p>
                </h5>
                <ul class="list">
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'" @click="lookQRCode()">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty" @click="updateClassify()">修改</span>
                            <span class="delBtn" @click="delClassify()">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'" @click="lookQRCode()">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty" @click="updateClassify()">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <span class="tableNo">1号(4人桌)</span>
                        <span class="tableCode asty" v-if="redactStyle2 == 'true'">查看二维码</span>
                        <div class="redact" v-if="redactStyle2 == 'false'">
                            <span class="updateBtn asty">修改</span>
                            <span class="delBtn">删除</span>
                        </div>
                    </li>

                </ul>
            </li>
        </ul>
        <!-- Form -->
        <div class="pop_updateForm">

            <el-dialog title="修改" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="桌台名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="建议人数" :label-width="formLabelWidth">
                        <el-input v-model="form.peopleNo" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="桌位编码" :label-width="formLabelWidth">
                        <el-input v-model="form.number" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <div class="pop_QRCode">

            <el-dialog
                    title="1号桌台二维码"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    center>
                <span><img src="../../assets/user.png" alt=""></span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            redactStyle1 : 'true', //大厅编辑状态
            redactStyle2 : 'true',  //包厢编辑状态
            dialogTableVisible: false,
            dialogFormVisible: false,
            centerDialogVisible:false,
            form: {
                name: '',
                peopleNo: '',
                number: '',
            },
            formLabelWidth: '120px'
        }
    },
    mounted () {

    },
    methods : {
        //编辑
        redactBtnFn(flag){
            if(flag==1){
                this.redactStyle1='false';
            }else{
                this.redactStyle2='false';
            }
        },
        //取消
        cancelBtnFn(flag){
            if(flag==1){
                this.redactStyle1='true';
            }else{
                this.redactStyle2='true';
            }
        },
        // 添加分类
        addClassify () {
            this.$prompt('请输入分类名称','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            }).then(({value}) => {
                alert(value)
            })
        },
        // 修改
        updateClassify(){
            this.dialogTableVisible = true;
            this.dialogFormVisible = true;
        },
        //删除
        delClassify(){

        },
        //查看二维码
        lookQRCode(){
            this.centerDialogVisible= true;
        },

    }
}
</script>
<style lang="scss" scoped>
    .module{
        width:100%;
        display: flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        .suitItem{
            width:540px;
            margin-right: 70px;
            overflow: hidden;
            box-sizing: border-box;
            background: #fff;
            margin-right: 20px;
        }
        .header{
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            flex-flow: row nowrap;
            font-size:16px;
            color: #383004;
            line-height: 50px;
            border-bottom:1px solid #ccc;
            span{
                display: inline-block;
                width:100px;height:30px;line-height: 30px;
                color:#fff;
                text-align: center;border-radius:20px;
                cursor: pointer;
                margin-left: 15px;
            }
            .huiC{
                background: #C0B8AB;
            }
            .chengC{
                background:#FA5B25;
            }
        }
        .list{
                height: 520px;
                padding: 0 20px;
                overflow-y: auto;
            li{
                margin: 30px 0 30px 0;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                .redact{
                    span{
                        cursor: pointer;
                        margin-left: 15px;
                    }
                }
            }
        }
        .asty{
            color: #FA5B25;
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>


