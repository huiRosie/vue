<template>
    <div class="inDetBillInfoLeft">
        <ul class="inDetBillInfoList">
            <li class="inDetBillInfoItem">
                <div class="inDetBillInfoItem_label">
                    票据号：
                </div>
                <div class="inDetBillInfoItem_text">
                    {{billData.billNo}}
                </div>
            </li>
            <li class="inDetBillInfoItem">
                <div class="inDetBillInfoItem_label">
                    承兑人全称：
                </div>
                <div class="inDetBillInfoItem_text">
                    {{billData.billUserName}}
                </div>
            </li>
            <li class="inDetBillInfoItem">
                <div class="inDetBillInfoItem_label">
                    票面金额(元)：
                </div>
                <div class="inDetBillInfoItem_text">
                    {{billData.billMoney}}
                </div>
            </li>
            <li class="inDetBillInfoItem">
                <div class="inDetBillInfoItem_label">
                    一口价：
                </div>
                <div class="inDetBillInfoItem_text">
                    2340元/每十万扣
                </div>
            </li>
            <li class="inDetBillInfoItem">
                <div class="inDetBillInfoItem_label">
                    有无回头：
                </div>
                <div class="inDetBillInfoItem_text">
                    无
                </div>
            </li>
            <li class="inDetBillInfoItem">
                <div class="inDetBillInfoItem_label">
                    贴现金额：
                </div>
                <div class="inDetBillInfoItem_text">
                    <span>976.60</span>万元
                </div>
            </li>
        </ul>
        <div class="inDetBillImgTitle">
            电子汇票截图<span>（点击下图可查看大图）</span>
        </div>
        <div class="inDetBillImgBox">
            <dl>
                <dt>
                    <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" v-bind:src="'http://'+billData.billImg" @click="viewImgFront" />
                    <img v-else v-bind:src="billData.billImg" @click="viewImgFront"/>
                    <Modal title="查看大图" v-model="visible0" width='1080' class-name="vertical-center-modal">
                        <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1&&visible0" :src="'http://'+billData.billImg" style="width: 100%">
                        <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')!=-1&&visible0" :src="billData.billImg" style="width: 100%">
                    </Modal>
                </dt>
                <dd>汇票正面</dd>
            </dl>
            <dl>
                <dt>
                    <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" v-bind:src="'http://'+billData.billEvidence" @click="viewImgBack"/>
                    <img v-else v-bind:src="billData.billEvidence" @click="viewImgBack"/>
                    <Modal title="查看大图" v-model="visible1" width='1080' class-name="vertical-center-modal">
                        <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1&&visible1" :src="'http://'+billData.billEvidence" style="width: 100%">
                        <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')!=-1&&visible1" :src="billData.billEvidence" style="width: 100%">
                    </Modal>
                </dt>
                <dd>汇票背书</dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import globalData from '../../globalData'
    
    export default {
        name: 'BillInfo',
        data () {
            return {
                billData:'',
                billId:'',
                leftDays:'',
                visible0:false,
                visible1:false,
            }
        },
        created:function(){
            this.getBillDet();
        },
        methods: {
            getBillDet:function(){
                //调用接口  获取汇票详情
                var self = this;
                self.billId = self.$route.params.billId;
                self.$http.get(globalData.data.Ip+'/bill/info',{params:{
                        billId:self.billId
                    }},{emulateJSON:true}).then(function(res){ 
                        self.billData = res.data.data;
                        console.log(self.billData);       
                        // 计算汇票到期倒计时
                        self.leftDays = globalData.methods.countDown(res.data.data.billExpire);                      
                    },function(error){
                        console.log(error);  
                })
            },
            viewImgFront:function(){
                this.visible0 = true;
            },
            viewImgBack:function(){
                this.visible1 = true;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .inDetBillInfoLeft {
        width: 652px;
        height: 456px;
        float: left;
        border-right: 1px solid #eee;
        .inDetBillInfoList{
            width: 100%;
            height: 203px;
            padding: 20px 45px;
            .inDetBillInfoItem {
                width: 100%;
                height: 20px;
                line-height: 20px;
                margin-bottom: 8px;
                overflow: hidden;
                .inDetBillInfoItem_label {
                    width: auto;
                    float: left;
                    margin-right: 4px;
                }
                .inDetBillInfoItem_text {
                    width: auto;
                    float: left;
                    span{
                        color: #f71327;
                    }
                }
            }
        }
        .inDetBillImgTitle{
            width: 652px;
            height: 44px;
            line-height: 44px;
            text-align: center;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            span{
                font-size: 12px;
                color: #878787;
            }
        }
        .inDetBillImgBox{
            width: 652px;
            height: 208px;
            overflow: hidden;
            padding: 38px 44px;
            dl{
                float: left;
                margin-right: 70px;
                dt{
                    margin-bottom: 14px;
                    img{
                        display: block;
                        width: 142px;
                        height: 80px;
                        cursor: pointer;
                    }
                }
                dd{
                    text-align: center;
                }
            }
        }
    }
</style>


