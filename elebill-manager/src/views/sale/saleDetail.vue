<template>
    <div class="saleDet">
        <div class="saleDetContent">
            <h2 class="saleDetTitle" v-if="billData.billStatus=='publishing'">
                <a class="accountSubNav" @click="routerBack">出票中心</a> >
                <a class="accountSubNav" @click="routerBack">待交易</a> >
                <span>汇票详情</span>
            </h2>
            <h2 class="saleDetTitle" v-if="billData.billStatus=='success'||billData.billStatus=='failure'">
                <a class="accountSubNav" @click="routerBack">出票中心</a> >
                <a class="accountSubNav" @click="routerBack">交易完成</a> >
                <span>汇票详情</span>
            </h2>
            <h2 class="saleDetTitle" v-if="billData.billStatus=='ording'">
                <a class="accountSubNav" @click="routerBack">出票中心</a> >
                <a class="accountSubNav" @click="routerBack">交易中</a> >
                <span>汇票详情</span>
            </h2>
            <div class="saleDetMain">
                <!--汇票信息-->
                <div class="saleDetMainBox">
                    <!-- 交易进展 -->
                    <div v-if="billData.billStatus=='ording'" class="myBillSteps">
                        <Steps :current="1">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="进行中" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.billStatus=='validate_success'" class="myBillSteps">
                        <Steps :current="0">
                            <Step title="进行中" content="达成交易协议"></Step>
                            <Step title="待进行" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.billStatus=='success'" class="myBillSteps">
                        <Steps :current="4">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="已完成" content="买家付款"></Step>
                            <Step title="已完成" content="卖家背书"></Step>
                            <Step title="已完成" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div class="saleDetBill">
                        <div class="saleDetBillTop">
                            <h3 class="saleDetBillTitle saleDetBillLeftTitle">票据信息</h3>
                            <h3 class="saleDetBillTitle saleDetBillRightTitle">操作</h3>
                        </div>
                        <div class="saleDetBillInfo">
                            <div class="saleDetBillInfoLeft">
                                <ul class="saleDetBillInfoList">
                                    <li class="saleDetBillInfoItem">
                                        <div class="saleDetBillInfoItem_label">
                                            票据号：
                                        </div>
                                        <div class="saleDetBillInfoItem_text">
                                            {{billData.billNo}}
                                        </div>
                                    </li>
                                    <li class="saleDetBillInfoItem">
                                        <div class="saleDetBillInfoItem_label">
                                            承兑人全称：
                                        </div>
                                        <div class="saleDetBillInfoItem_text">
                                            {{billData.billUserName}}
                                        </div>
                                    </li>
                                    <li class="saleDetBillInfoItem">
                                        <div class="saleDetBillInfoItem_label">
                                            票面金额(元)：
                                        </div>
                                        <div v-if="billData.billMoney<=10000" class="saleDetBillInfoItem_text">
                                            {{billData.billMoney}}
                                        </div>
                                        <div v-if="billData.billMoney>10000" class="saleDetBillInfoItem_text">
                                            {{parseFloat((billData.billMoney/10000).toFixed(6))}}万
                                        </div>
                                    </li>
                                    <li class="saleDetBillInfoItem">
                                        <div class="saleDetBillInfoItem_label">
                                            交易方式：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="saleDetBillInfoItem_text">
                                            <span>{{billData.billFixedPrice}}</span>元/每十万扣
                                        </div>
                                        <div v-else class="saleDetBillInfoItem_text">
                                            竞价
                                        </div>
                                    </li>
                                    <li class="saleDetBillInfoItem">
                                        <div class="saleDetBillInfoItem_label">
                                            汇票到期日：
                                        </div>
                                        <div class="saleDetBillInfoItem_text">
                                            {{billData.billExpire}}
                                        </div>
                                    </li>
                                    <li class="saleDetBillInfoItem">
                                        <div class="saleDetBillInfoItem_label">
                                            贴现金额：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="saleDetBillInfoItem_text">
                                            <span>{{((billData.billMoney-(billData.billMoney/100000)*billData.billFixedPrice)/10000)}}</span>万元
                                        </div>
                                        <div v-else class="inDetBillInfoItem_text">
                                            买家参与竞价后可了解详情
                                        </div>
                                    </li>
                                </ul>
                                <div class="saleDetBillImgTitle">
                                    电子汇票截图<span>（点击下图可查看大图）</span>
                                </div>
                                <div class="saleDetBillImgBox">
                                    <dl>
                                        <dt>
                                            <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" v-bind:src="'http://'+billData.billImg" @click="viewImgBack(billData.billImg)" />
                                            <img v-else v-bind:src="billData.billImg" @click="viewImgBack(billData.billImg)"/>
                                        </dt>
                                        <dd>汇票正面</dd>
                                    </dl>
                                    <dl v-if="billData.billEvidence!=''&&billData.billEvidence!=null">
                                        <dt>
                                            <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" :src="'http://'+billData.billEvidence" @click="viewImgBack(billData.billEvidence)"/>
                                            <img v-else :src="billData.billEvidence" @click="viewImgBack(billData.billEvidence)"/>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <dl v-if="billEndorseImg!=''&&billEndorseImg!=null&&billEndorseImg.length==1"  >
                                        <dt>
                                            <img v-if="billEndorseImg!=null&&billEndorseImg[0].indexOf('http://')==-1&&billEndorseImg[0].indexOf('https://')==-1" :src="'http://'+billEndorseImg[0]" @click="viewImgBack(billEndorseImg[0])"/>
                                            <img v-else :src="billEndorseImg[0]" @click="viewImgBack(billEndorseImg[0])"/>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <dl v-for="(imgItem,index) in billEndorseImg" :key="index"  v-if="billEndorseImg.length>1">
                                        <dt>
                                            <img v-if="imgItem!=null&&imgItem.indexOf('http://')==-1&&imgItem.indexOf('https://')==-1" :src="'http://'+imgItem" @click="viewImgBack(imgItem)"/>
                                            <img v-else :src="imgItem" @click="viewImgBack(imgItem)"/>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <Modal 
                                        title="查看大图" 
                                        v-model="visible" 
                                        width='1080' 
                                        ok-text='关闭' 
                                        cancel-text='' 
                                        class-name="vertical-center-modal">
                                        <img v-if="imgSrc!=null&&imgSrc.indexOf('http://')==-1&&imgSrc.indexOf('https://')==-1" :src="'http://'+imgSrc" style="width: 100%">
                                        <img v-if="imgSrc!=null&&imgSrc.indexOf('http')!=-1" :src="imgSrc" style="width: 100%">
                                    </Modal>
                                </div>
                            </div>
                            <div class="saleDetBillInfoRight">
                                <div v-if="billData.billStatus=='publishing'" class="saleDetBillOperate">
                                    <div class="saleDetBillOperate_label">暂时不需要贴现</div>
                                    <div class="saleDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤回票据
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='success'" class="saleDetBillOperate">
                                    <div class="saleDetBillOperate_label">恭喜您，汇票贴现成功！</div>
                                    <div class="saleDetBillOperate_btn" @click="gotoNext()">
                                        返回首页
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='failure'" class="saleDetBillOperate">
                                    <div class="saleDetBillOperate_label">交易失败原因：{{billData.billDesc}}</div>
                                    <div class="saleDetBillOperate_btn" @click="gotoPub()">
                                        重新发布
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {fetchBillDetail,fetchFailBill,fetchBillOrderDetail} from '../../assets/js/billApi'

export default {
    name: 'SaleDet',
    data () {
        return {
            billId:'',
            billStatus:'',
            billData:'',
            visible:false,
            billEndorseImg:'',
            imgSrc:''
        }
    },
    created:function(){
        this.getBillDetail();
    },
    methods:{
        getBillDetail:function(){
            var self = this;
            self.billId = self.$route.params.billId;
            fetchBillDetail({
                billId:self.billId
            }).then(function(res){
                // console.log(res);
                self.billData = res.data.data;
                self.billEndorseImg = (res.data.data.billEndorseImg).split(',');
                // console.log(self.billEndorseImg)
            })
        },
        giveUp:function(billId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'您确定撤销当前汇票吗？',
                onOk:function(){
                    fetchFailBill({
                        billId:billId
                    }).then(function(res){
                        // console.log(res);
                        self.$Message.success('操作成功!');
                        self.$router.push('/out/sale/finish');
                    })
                }
            })
        },
        gotoNext:function(){
            this.$router.push('/out/sale/publishing');
        },
        gotoPub:function(){
            this.$router.push('/bill/out');
        },
        routerBack:function(){
            this.$router.go(-1);
        },
        viewImgBack:function(imgItem){
            this.visible = true;
            this.imgSrc = imgItem;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .saleDet {
        width: 100%;
        height: auto;
        .saleDetContent {
            width: 982px;
            margin: 0 auto;
            .saleDetTitle {
                width: 100%;
                height: 58px;
                line-height: 58px;
                text-indent: 30px;
                border-bottom: 1px solid #e1e1e1;
                a:hover {
                    color: #f71327;
                }
            }
            .saleDetMain{
                width: 100%;
                height: auto;
                .saleDetMainBox{
                    width: 982px;
                    height: 600px;
                    margin: 0 auto;
                    padding:10px;
                    .myBillSteps{
                        width: 840px;
                        margin-left: 100px;
                        margin-bottom: 10px;
                    }
                    .saleDetBill {
                        width: 940px;
                        height: 600px;
                        margin: 0 auto;
                        overflow: hidden;
                        border: 1px solid #eee;
                        .saleDetBillTop{
                            width: 940px;
                            height: 43px;
                            .saleDetBillTitle{
                                height:43px;
                                line-height: 43px;
                                text-align: center;
                                float: left;
                                background: #f8f8f8;
                                border-bottom: 1px solid #eee;
                            }
                            .saleDetBillLeftTitle{
                                width: 652px;
                                border-right: 1px solid #eee;
                            }
                            .saleDetBillRightTitle{
                                width: 286px;
                            }
                        }
                        .saleDetBillInfo {
                            width: 100%;
                            height: 556px;
                            overflow: hidden;
                            .saleDetBillInfoLeft {
                                width: 652px;
                                height: 556px;
                                float: left;
                                border-right: 1px solid #eee;
                                .saleDetBillInfoList{
                                    width: 100%;
                                    height: 203px;
                                    padding: 20px 45px;
                                    .saleDetBillInfoItem {
                                        width: 100%;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-bottom: 8px;
                                        overflow: hidden;
                                        .saleDetBillInfoItem_label {
                                            width: auto;
                                            float: left;
                                            margin-right: 4px;
                                        }
                                        .saleDetBillInfoItem_text {
                                            width: auto;
                                            float: left;
                                            span{
                                                color: #f71327;
                                            }
                                        }
                                    }
                                }
                                .saleDetBillImgTitle{
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
                                .saleDetBillImgBox{
                                    width: 652px;
                                    height: 320px;
                                    overflow-y: auto;
                                    overflow-x: hidden;
                                    padding: 20px 44px;
                                    dl{
                                        float: left;
                                        margin:0 60px 20px 0;
                                        dt{
                                            margin-bottom: 5px;
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
                                    dl:nth-child(3),dl:nth-child(6){
                                        margin: 0;
                                    }
                                }
                            }
                            .saleDetBillInfoRight {
                                width: 286px;
                                height: 556px;
                                float: left;
                                .saleDetBillOperate{
                                    width: 158px;
                                    height: auto;
                                    margin: 188px auto 0;
                                    .saleDetBillOperate_label{
                                        width: 158px;
                                        text-align: center;
                                        margin-bottom: 24px;
                                    }                                    
                                    .saleDetBillOperate_btn{
                                        width: 158px;
                                        height: 44px;
                                        line-height: 44px;
                                        text-align: center;
                                        color: #fff;
                                        border-radius: 2px;
                                        cursor: pointer;
                                        background-image: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                                    }
                                    .saleDetBillOperate_cancel{
                                        margin: 20px 0;
                                        background: #eee;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
