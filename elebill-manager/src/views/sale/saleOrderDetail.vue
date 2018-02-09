<template>
    <div class="saleOrderDet">
        <div class="saleOrderDetContent">
            <h2 class="saleOrderDetTitle" v-if="billData.billStatus=='ording'||billData.orderStatus=='paymenting'||billData.orderStatus=='endorse'">
                <a class="accountSubNav" @click="routerBack">出票中心</a> >
                <a class="accountSubNav" @click="routerBack">交易中</a> >
                <span>订单详情</span>
            </h2>
            <h2 class="saleOrderDetTitle" v-if="billData.billStatus=='success'||billData.billStatus=='failure'">
                <a class="accountSubNav" @click="routerBack">出票中心</a> >
                <a class="accountSubNav" @click="routerBack">交易完成</a> >
                <span>订单详情</span>
            </h2>
            <div class="saleOrderDetMain">
                <!--汇票信息-->
                <div class="saleOrderDetMainBox">
                    <!-- 交易进展 -->
                    <div v-if="billData.orderStatus=='ording'" class="myBillSteps">
                        <Steps :current="1">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="进行中" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.orderStatus=='paymenting'" class="myBillSteps">
                        <Steps :current="2">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="已完成" content="买家付款"></Step>
                            <Step title="进行中" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.orderStatus=='endorse'" class="myBillSteps">
                        <Steps :current="3">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="已完成" content="买家付款"></Step>
                            <Step title="已完成" content="卖家背书"></Step>
                            <Step title="进行中" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div class="saleOrderDetBill">
                        <div class="saleOrderDetBillTop">
                            <h3 class="saleOrderDetBillTitle saleOrderDetBillLeftTitle">票据信息</h3>
                            <h3 class="saleOrderDetBillTitle saleOrderDetBillRightTitle">操作</h3>
                        </div>
                        <div class="saleOrderDetBillInfo">
                            <div class="saleOrderDetBillInfoLeft">
                                <ul class="saleOrderDetBillInfoList">
                                    <li class="saleOrderDetBillInfoItem">
                                        <div class="saleOrderDetBillInfoItem_label">
                                            票据号：
                                        </div>
                                        <div class="saleOrderDetBillInfoItem_text">
                                            {{billData.billNo}}
                                        </div>
                                    </li>
                                    <li class="saleOrderDetBillInfoItem">
                                        <div class="saleOrderDetBillInfoItem_label">
                                            承兑人全称：
                                        </div>
                                        <div class="saleOrderDetBillInfoItem_text">
                                            {{billData.billUserName}}
                                        </div>
                                    </li>
                                    <li class="saleOrderDetBillInfoItem">
                                        <div class="saleOrderDetBillInfoItem_label">
                                            票面金额(元)：
                                        </div>
                                        <div v-if="billData.billMoney<=10000" class="saleOrderDetBillInfoItem_text">
                                            {{billData.billMoney}}
                                        </div>
                                        <div v-if="billData.billMoney>10000" class="saleOrderDetBillInfoItem_text">
                                            {{billData.billMoney/10000}}万
                                        </div>
                                    </li>
                                    <li class="saleOrderDetBillInfoItem">
                                        <div class="saleOrderDetBillInfoItem_label">
                                            交易方式：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="saleOrderDetBillInfoItem_text">
                                            <span>{{billData.billFixedPrice}}</span>元/每十万扣
                                        </div>
                                        <div v-else class="saleOrderDetBillInfoItem_text">
                                            竞价
                                        </div>
                                    </li>
                                    <li class="saleOrderDetBillInfoItem">
                                        <div class="saleOrderDetBillInfoItem_label">
                                            汇票到期日：
                                        </div>
                                        <div class="saleOrderDetBillInfoItem_text">
                                            {{billData.billExpire}}
                                        </div>
                                    </li>
                                    <li class="saleOrderDetBillInfoItem">
                                        <div class="saleOrderDetBillInfoItem_label">
                                            贴现金额：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="saleOrderDetBillInfoItem_text">
                                            <span>{{((billData.billMoney-(billData.billMoney/100000)*billData.billFixedPrice)/10000).toFixed(2)}}</span>万元
                                        </div>
                                        <div v-else class="inDetBillInfoItem_text">
                                            买家参与竞价后可了解详情
                                        </div>
                                    </li>
                                </ul>
                                <div class="saleOrderDetBillImgTitle">
                                    电子汇票截图<span>（点击下图可查看大图）</span>
                                </div>
                                <div class="saleOrderDetBillImgBox">
                                    <dl>
                                        <dt>
                                            <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" v-bind:src="'http://'+billData.billImg" @click="viewImgFront" />
                                            <img v-else v-bind:src="billData.billImg" @click="viewImgFront"/>
                                            <Modal 
                                                title="查看大图" 
                                                v-model="visible0" 
                                                width='1080' 
                                                ok-text='关闭' 
                                                cancel-text='' 
                                                class-name="vertical-center-modal">
                                                <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1&&visible0" :src="'http://'+billData.billImg" style="width: 100%">
                                                <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http')!=-1&&visible0" :src="billData.billImg" style="width: 100%">
                                            </Modal>
                                        </dt>
                                        <dd>汇票正面</dd>
                                    </dl>
                                    <dl v-if="billData.billEndorseImg!=''&&billData.billEndorseImg!=null">
                                        <dt>
                                            <img v-if="billData.billEndorseImg!=null&&billData.billEndorseImg.indexOf('http://')==-1&&billData.billEndorseImg.indexOf('https://')==-1" :src="'http://'+billData.billEndorseImg" @click="viewImgBack"/>
                                            <img v-else :src="billData.billEndorseImg" @click="viewImgBack()"/>
                                            <Modal 
                                                title="查看大图" 
                                                v-model="visible1" 
                                                width='1080' 
                                                ok-text='关闭' 
                                                cancel-text='' 
                                                class-name="vertical-center-modal">
                                                <img v-if="billData.billEndorseImg!=null&&billData.billEndorseImg.indexOf('http://')==-1&&billData.billEndorseImg.indexOf('https://')==-1&&visible1" :src="'http://'+billData.billEndorseImg" style="width: 100%">
                                                <img v-if="billData.billEndorseImg!=null&&billData.billEndorseImg.indexOf('http')!=-1&&visible1" :src="billData.billEndorseImg" style="width: 100%">
                                            </Modal>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <dl v-if="billData.billEvidence!=''&&billData.billEvidence!=null">
                                        <dt>
                                            <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" :src="'http://'+billData.billEvidence" @click="viewImgBack2()"/>
                                            <img v-else :src="billData.billEvidence" @click="viewImgBack2()"/>
                                            <Modal 
                                                title="查看大图" 
                                                v-model="visible2" 
                                                width='1080' 
                                                ok-text='关闭' 
                                                cancel-text='' 
                                                class-name="vertical-center-modal">
                                                <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1&&visible2" :src="'http://'+billData.billEvidence" style="width: 100%">
                                                <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http')!=-1&&visible2" :src="billData.billEvidence" style="width: 100%">
                                            </Modal>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="saleOrderDetBillInfoRight">
                                <div v-if="billData.orderStatus=='publishing'" class="saleOrderDetBillOperate">
                                    <div class="saleOrderDetBillOperate_label">暂时不需要贴现</div>
                                    <div class="saleOrderDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='ording'" class="saleOrderDetBillOperate">
                                    <div class="saleOrderDetBillOperate_label">等待买家付款</div>
                                    <div class="saleOrderDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='paymenting'" class="saleOrderDetBillOperate">
                                    <div class="saleOrderDetBillOperate_label">买家已付款，请尽快完成背书</div>
                                    <div class="saleOrderDetBillOperate_btn" @click="endorse(billData.billId)">
                                        完成背书
                                    </div>
                                    <div class="saleOrderDetBillOperate_btn saleDetBillOperate_cancel" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='endorse'" class="saleOrderDetBillOperate">
                                    <div class="saleOrderDetBillOperate_label">已完成背书，等待买家签收</div>
                                    <div class="saleOrderDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='success'" class="saleOrderDetBillOperate">
                                    <div class="saleOrderDetBillOperate_label">恭喜您，汇票贴现成功！</div>
                                    <div class="saleOrderDetBillOperate_btn" @click="gotoNext()">
                                        返回首页
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='failure'" class="saleOrderDetBillOperate">
                                    <div class="saleOrderDetBillOperate_label">交易失败原因：{{billData.billDesc}}</div>
                                    <div class="saleOrderDetBillOperate_btn" @click="gotoNext()">
                                        返回首页
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="saleOrderDetBillBot">
                            <div class="saleOrderDetBillBotLeft">
                                客户信息
                            </div>
                            <div class="saleOrderDetBillBotRight">
                                <div class="saleOrderDetBillBotRightItem">
                                    <div class="saleOrderDetBillBotRightItem_label">昵称：</div>
                                    <div class="saleOrderDetBillBotRightItem_text">{{billData.userName}}</div>
                                </div>
                                <div class="saleOrderDetBillBotRightItem">
                                    <div class="saleOrderDetBillBotRightItem_label">电话：</div>
                                    <div class="saleOrderDetBillBotRightItem_text">{{billData.userPhone}}</div>
                                </div>
                                <div class="saleOrderDetBillBotRightItem">
                                    <div class="saleOrderDetBillBotRightItem_label">微信：</div>
                                    <div class="saleOrderDetBillBotRightItem_text">{{billData.wexin}}</div>
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
import {fetchBillDetail,fetchRevokeBill,fetchBillOrderDetail,fetchEndorseBill} from '../../assets/js/billApi'

export default {
    name: 'SaleOrderDet',
    data () {
        return {
            billId:'',
            billData:'',
            visible0:false,
            visible1:false,
            visible2:false
        }
    },
    created:function(){
        this.getBillDetail();
    },
    methods:{
        getBillDetail:function(){
            var self = this;
            self.orderId = self.$route.params.orderId;
            fetchBillOrderDetail({
                orderId:self.orderId
            }).then(function(res){
                console.log(res);
                self.billData = res.data.data;
                self.billId = res.data.data.billId;
            })
        },
        giveUp:function(billId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'您确定撤销当前汇票吗？',
                onOk:function(){
                    fetchRevokeBill({
                        billId:billId
                    }).then(function(res){
                        // console.log(res);
                        self.$Message.success('操作成功!');
                        self.$router.push('/out/sale/finish');
                    })
                }
            })
        },
        endorse:function(billId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'您确定已将当前汇票背书给买方吗？',
                onOk:function(){
                    fetchEndorseBill({
                        billId:billId
                    }).then(function(res){
                        // console.log(res);
                        self.$Message.success('操作成功!');
                        self.$router.push('/out/sale/ordering');
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
        viewImgFront:function(){
            this.visible0 = true;
        },
        viewImgBack:function(){
            this.visible1 = true;
        },
        viewImgBack2:function(){
            this.visible2 = true;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .saleOrderDet {
        width: 100%;
        height: auto;
        .saleOrderDetContent {
            width: 982px;
            margin: 0 auto;
            .saleOrderDetTitle {
                width: 100%;
                height: 58px;
                line-height: 58px;
                text-indent: 30px;
                border-bottom: 1px solid #e1e1e1;
                a:hover {
                    color: #f71327;
                }
            }
            .saleOrderDetMain{
                width: 100%;
                height: auto;
                .saleOrderDetMainBox{
                    width: 982px;
                    height: 600px;
                    margin: 0 auto;
                    padding:10px;
                    .myBillSteps{
                        width: 840px;
                        margin-left: 100px;
                        margin-bottom: 10px;
                    }
                    .saleOrderDetBill {
                        width: 940px;
                        height: 540px;
                        margin: 0 auto;
                        overflow: hidden;
                        border: 1px solid #eee;
                        .saleOrderDetBillTop{
                            width: 940px;
                            height: 43px;
                            .saleOrderDetBillTitle{
                                height:43px;
                                line-height: 43px;
                                text-align: center;
                                float: left;
                                background: #f8f8f8;
                                border-bottom: 1px solid #eee;
                            }
                            .saleOrderDetBillLeftTitle{
                                width: 652px;
                                border-right: 1px solid #eee;
                            }
                            .saleOrderDetBillRightTitle{
                                width: 286px;
                            }
                        }
                        .saleOrderDetBillInfo {
                            width: 100%;
                            height: 456px;
                            overflow: hidden;
                            .saleOrderDetBillInfoLeft {
                                width: 652px;
                                height: 456px;
                                float: left;
                                border-right: 1px solid #eee;
                                .saleOrderDetBillInfoList{
                                    width: 100%;
                                    height: 203px;
                                    padding: 20px 45px;
                                    .saleOrderDetBillInfoItem {
                                        width: 100%;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-bottom: 8px;
                                        overflow: hidden;
                                        .saleOrderDetBillInfoItem_label {
                                            width: auto;
                                            float: left;
                                            margin-right: 4px;
                                        }
                                        .saleOrderDetBillInfoItem_text {
                                            width: auto;
                                            float: left;
                                            span{
                                                color: #f71327;
                                            }
                                        }
                                    }
                                }
                                .saleOrderDetBillImgTitle{
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
                                .saleOrderDetBillImgBox{
                                    width: 652px;
                                    height: 208px;
                                    overflow: hidden;
                                    padding: 38px 44px;
                                    dl{
                                        float: left;
                                        margin-right: 69px;
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
                                    dl:last-child{
                                        margin: 0;
                                    }
                                }
                            }
                            .saleOrderDetBillInfoRight {
                                width: 286px;
                                height: 456px;
                                float: left;
                                .saleOrderDetBillOperate{
                                    width: 158px;
                                    height: auto;
                                    margin: 158px auto 0;
                                    .saleOrderDetBillOperate_label{
                                        width: 158px;
                                        text-align: center;
                                        margin-bottom: 24px;
                                    }                                    
                                    .saleOrderDetBillOperate_btn{
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
                        .saleOrderDetBillBot{
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            border-top: 1px solid #eee;
                            .saleOrderDetBillBotLeft{
                                float: left;
                                width: 158px;
                                text-align: center;
                                border-right: 1px solid #eee;
                            }
                            .saleOrderDetBillBotRight{
                                float: left;
                                overflow: hidden;
                                .saleOrderDetBillBotRightItem{
                                    float: left;
                                    overflow: hidden;
                                    padding: 0 30px;
                                    .saleOrderDetBillBotRightItem_label{
                                        float: left;
                                    }
                                    .saleOrderDetBillBotRightItem_text{
                                        float: left;
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
