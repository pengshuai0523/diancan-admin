<template>
    <div class="marketPage">
        <ul class="module">
            <li class="suitItem">
                <h5 class="header">
                    <p>代金券</p>
                    <span class="addBtn" @click="addVoucherFn()">+添加</span>
                </h5>
                <ul class="list">
                    <li class="item">
                        <div class="left" :class="[voucherStatus=='open' ?  'openBg':'closeBg']">
                            <p class="price"><span>20</span>元</p>
                            <p>满200可用</p>
                        </div>
                        <div class="content" :class="[voucherStatus=='open' ?  'openC':'closeC']">
                            <p class="condition">订单满200赠30元代金券</p>
                            <p class="use">适用：扫码+堂点</p>
                            <p class="publish">发行：满赠+定额</p>
                            <p class="time">期限：3天</p>
                        </div>
                        <div class="btn">
                            <span class="close" v-if="voucherStatus == 'open'" @click="voucherStatusFn('close')">关闭</span>
                            <span class="close" v-if="voucherStatus == 'close'" @click="voucherStatusFn('open')">开启</span>
                            <span class="del">删除</span>
                        </div>
                    </li>
                    <li class="item">
                        <div class="left" :class="[voucherStatus=='open' ?  'openBg':'closeBg']">
                            <p class="price"><span>20</span>元</p>
                            <p>满200可用</p>
                        </div>
                        <div class="content" :class="[voucherStatus=='open' ?  'openC':'closeC']">
                            <p class="condition">订单满200赠30元代金券</p>
                            <p class="use">适用：扫码+堂点</p>
                            <p class="publish">发行：满赠+定额</p>
                            <p class="time">期限：3天</p>
                        </div>
                        <div class="btn">
                            <span class="close" v-if="voucherStatus == 'open'" @click="voucherStatusFn('close')">关闭</span>
                            <span class="close" v-if="voucherStatus == 'close'" @click="voucherStatusFn('open')">开启</span>
                            <span class="del">删除</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="pop_form" v-if="addVoucher">
            <div class="contentF">
                <p class="headerF">添加代金券</p>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="标题名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="适用" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="码点餐"></el-radio>
                            <el-radio label="堂吃"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="触发类型" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择">
                            <el-option label="满赠" value="shanghai"></el-option>
                            <el-option label="满减" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="使用门槛" prop="threshold">
                        <el-input v-model="ruleForm.threshold" placeholder="订单满多少可用"></el-input>
                    </el-form-item>
                    <el-form-item label="有效期限(含截至当天)" prop="validity">
                        <el-input v-model="ruleForm.validity" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="计算方式" prop="count">
                        <el-select v-model="ruleForm.count" placeholder="请选择">
                            <el-option label="定额" value="shanghai"></el-option>
                            <el-option label="满减" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="赠送面值" prop="give">
                        <el-input v-model="ruleForm.give" placeholder="请输入"></el-input>
                    </el-form-item>



                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            voucherStatus : "open", //代金券关闭和开启
            addVoucher: false,
            ruleForm: {
                name: '',
                region: '',
                resource: '',
                threshold: '',
                validity: '',
                count: '',
                give: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                threshold: [
                    { required: true, message: '请输入使用门槛', trigger: 'blur' },
                ],
                validity: [
                    { required: true, message: '请输入有效期限', trigger: 'blur' },
                ],
            }
        };
    },
    mounted () {

    },
    methods : {
        //关闭和开启代金券
        voucherStatusFn(flag){
            if(flag=='close'){
                this.voucherStatus = 'close';
            }else{
                this.voucherStatus = 'open';
            }
        },
        //删除
        delVoucher(){

        },
        addVoucherFn(){
            this.addVoucher=true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
           this.addVoucher=false;
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
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
            width: 540px;
            min-height: 573px;
            background: #fff;
            .header{
                padding: 0 20px;
                display: flex;
                justify-content: space-between;
                flex-flow: row nowrap;
                font-size:16px;
                color: #383004;
                line-height: 50px;
                border-bottom:1px solid #ccc;
                .addBtn{
                    width:100px;
                    height:30px;
                    line-height: 30px;
                    color:#fff;
                    text-align: center;
                    border-radius:20px;
                    cursor: pointer;
                    margin-left: 15px;
                    background: #FA5B25;
                    margin-top: 10px;
                }
            }
            .list{
                padding: 20px;
                .item{
                    width: 500px;
                    display: flex;
                    background: #FFFFFF;
                    border: 1px solid #F2F0ED;
                    margin-bottom: 15px;
                    .left{
                        width: 121px;
                        height: 134px;
                        margin-right: 20px;
                        color: #fff;
                        font-size: 14px;
                        padding-top: 30px;
                        p{
                            text-align: center;
                        }
                        .price{
                            font-size: 16px;
                            span{
                                font-size: 34px;
                            }
                        }
                    }
                    .content{
                        width: 290px;
                        font-size: 14px;
                        .condition{
                            height: 24px;
                            font-size: 20px;
                            font-weight: bolder;
                            margin: 20px 0 10px 0;
                        }
                    }
                    .btn{
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: flex-end;
                        margin-bottom: 15px;
                        text-decoration: underline;
                        span{
                            cursor: pointer;
                        }
                        .close{
                            color: #FA5B25;
                            text-decoration: underline;
                            text-decoration-color: #FA5B25;
                            margin-bottom: 15px;
                        }

                    }
                    .openC{
                        color: #383004;
                    }
                    .openBg{
                        background: #FA5B25;
                    }
                    .closeC{
                        color: #C0B8AB;
                    }
                    .closeBg{
                        background: #C0B8AB;
                    }
                }
            }
        }
    }
    .pop_form{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(56,48,4,0.5);
        .contentF{
            width: 480px;
            position: absolute;
            top: 138px;
            left: 0;
            button: 0;
            right: 0;
            margin: auto;
            background: #fff;
            border-radius: 4px;
            .headerF{
                padding: 0 20px;
                display: flex;
                justify-content: space-between;
                flex-flow: row nowrap;
                font-size:20px;
                color: #383004;
                line-height: 68px;
                border-bottom:1px solid #ccc;
            }
            .demo-ruleForm{
                padding: 20px 30px 0 10px;
            }
        }
    }

</style>


