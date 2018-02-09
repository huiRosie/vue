<template>
    <div class="myBuyDet">
        <div class="myBuyDetContent">
            <h2 class="myBuyDetTitle" v-if="billData.orderStatus=='ording'">
                <a class="accountSubNav"  @click="routerBack">我的收票</a> >
                <a class="accountSubNav"  @click="routerBack">交易中</a> >
                <span>汇票详情</span>
            </h2>
            <h2 class="myBuyDetTitle" v-if="billData.orderStatus=='publishing'">
                <a class="accountSubNav"  @click="routerBack">我的收票</a> >
                <a class="accountSubNav"  @click="routerBack">交易中</a> >
                <span>汇票详情</span>
            </h2>
            <h2 class="myBuyDetTitle" v-if="billData.orderStatus=='success'||billData.orderStatus=='failure'">
                <a class="accountSubNav"  @click="routerBack">我的收票</a> >
                <a class="accountSubNav"  @click="routerBack">交易完成</a> >
                <span>汇票详情</span>
            </h2>
            <div class="myBuyDetMain">
                <!--汇票信息-->
                <div class="myBuyDetMainBox">
                    <!-- 交易进展 -->
                    <div v-if="billData.orderStatus=='publishing'" class="myBillSteps">
                        <Steps :current="1">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="进行中" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.orderStatus=='ording'" class="myBillSteps">
                        <Steps :current="1">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="进行中" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.orderStatus=='success'" class="myBillSteps">
                        <Steps :current="4">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="已完成" content="买家付款"></Step>
                            <Step title="已完成" content="卖家背书"></Step>
                            <Step title="已完成" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div class="myBuyDetBill">
                        <div class="myBuyDetBillTop">
                            <h3 class="myBuyDetBillTitle myBuyDetBillLeftTitle">票据信息</h3>
                            <h3 class="myBuyDetBillTitle myBuyDetBillRightTitle">操作</h3>
                        </div>
                        <div class="myBuyDetBillInfo">
                            <div class="myBuyDetBillInfoLeft">
                                <ul class="myBuyDetBillInfoList">
                                    <li class="myBuyDetBillInfoItem">
                                        <div class="myBuyDetBillInfoItem_label">
                                            票据号：
                                        </div>
                                        <div class="myBuyDetBillInfoItem_text">
                                            {{billData.billNo}}
                                        </div>
                                    </li>
                                    <li class="myBuyDetBillInfoItem">
                                        <div class="myBuyDetBillInfoItem_label">
                                            承兑人全称：
                                        </div>
                                        <div class="myBuyDetBillInfoItem_text">
                                            {{billData.billUserName}}
                                        </div>
                                    </li>
                                    <li class="myBuyDetBillInfoItem">
                                        <div class="myBuyDetBillInfoItem_label">
                                            票面金额(元)：
                                        </div>
                                        <div class="myBuyDetBillInfoItem_text">
                                            {{billData.billMoney}}
                                        </div>
                                    </li>
                                    <li class="myBuyDetBillInfoItem">
                                        <div class="myBuyDetBillInfoItem_label">
                                            一口价：
                                        </div>
                                        <div class="myBuyDetBillInfoItem_text">
                                            2340元/每十万扣
                                        </div>
                                    </li>
                                    <li class="myBuyDetBillInfoItem">
                                        <div class="myBuyDetBillInfoItem_label">
                                            有无回头：
                                        </div>
                                        <div class="myBuyDetBillInfoItem_text">
                                            无
                                        </div>
                                    </li>
                                    <li class="myBuyDetBillInfoItem">
                                        <div class="myBuyDetBillInfoItem_label">
                                            贴现金额：
                                        </div>
                                        <div class="myBuyDetBillInfoItem_text">
                                            <span>976.60</span>万元
                                        </div>
                                    </li>
                                </ul>
                                <div class="myBuyDetBillImgTitle">
                                    电子汇票截图<span>（点击下图可查看大图）</span>
                                </div>
                                <div class="myBuyDetBillImgBox">
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
                                    <dl v-if="billData.billEvidence!=null&&billData.billEvidence!=''">
                                        <dt>
                                            <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" v-bind:src="'http://'+billData.billEvidence" @click="viewImgBack"/>
                                            <img v-else v-bind:src="billData.billEvidence" @click="viewImgBack"/>
                                            <Modal 
                                                title="查看大图" 
                                                v-model="visible1"
                                                width='1080' 
                                                ok-text='关闭' 
                                                cancel-text='' 
                                                class-name="vertical-center-modal">
                                                <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1&&visible1" :src="'http://'+billData.billEvidence" style="width: 100%">
                                                <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http')!=-1&&visible1" :src="billData.billEvidence" style="width: 100%">
                                            </Modal>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <dl v-if="billData.billEndorseImg!=null&&billData.billEndorseImg!=''">
                                        <dt>
                                            <img v-if="billData.billEndorseImg!=null&&billData.billEndorseImg.indexOf('http://')==-1&&billData.billEndorseImg.indexOf('https://')==-1" v-bind:src="'http://'+billData.billEndorseImg" @click="viewImgBack2"/>
                                            <img v-else v-bind:src="billData.billEndorseImg" @click="viewImgBack2"/>
                                            <Modal 
                                                title="查看大图" 
                                                v-model="visible2"
                                                width='1080' 
                                                ok-text='关闭' 
                                                cancel-text='' 
                                                class-name="vertical-center-modal">
                                                <img v-if="billData.billEndorseImg!=null&&billData.billEndorseImg.indexOf('http://')==-1&&billData.billEndorseImg.indexOf('https://')==-1&&visible2" :src="'http://'+billData.billEndorseImg" style="width: 100%">
                                                <img v-if="billData.billEndorseImg!=null&&billData.billEndorseImg.indexOf('http')!=-1&&visible2" :src="billData.billEndorseImg" style="width: 100%">
                                            </Modal>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="myBuyDetBillInfoRight">
                                <div v-if="billData.orderStatus=='ording'" class="myBuyDetBillOperate">
                                    <div class="myBuyDetBillOperate_label">你与卖家已达成交易协议，请您尽快向卖家账户完成打款！</div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_finish" @click="finishpay(billData.orderId)" >
                                        完成付款
                                    </div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_cancel" @click="cancelpay(billData.orderId)" >
                                        取消交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='paymenting'" class="myBuyDetBillOperate">
                                    <div class="myBuyDetBillOperate_label">您已完成付款，请等待卖家背书</div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_cancel" @click="cancelpay(billData.orderId)" >
                                        取消交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='endorse'" class="myBuyDetBillOperate">
                                    <div class="myBuyDetBillOperate_label">卖方已完成背书，请确认汇票无误后签收</div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_finish" @click="signUp(billData.orderId)" >
                                        确认签收
                                    </div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_cancel" @click="cancelpay(billData.orderId)" >
                                        取消交易
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='success'" class="myBuyDetBillOperate">
                                    <div class="myBuyDetBillOperate_label">恭喜您收到一张优质的承兑汇票！</div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_finish" @click="gotoBuy()" >
                                        继续收票
                                    </div>
                                </div>
                                <div v-if="billData.orderStatus=='failure'" class="myBuyDetBillOperate">
                                    <div class="myBuyDetBillOperate_label">交易失败原因：{{billData.billDesc}}</div>
                                    <div class="myBuyDetBillOperate_btn myBuyDetBillOperate_finish" @click="gotoBuy()" >
                                        继续收票
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
import globalData from '../../globalData'

export default {
    name: 'myBuyDet',
    data () {
        return {
            billId:'',
            billData:'',
            visible0:false,
            visible1:false,
            visible2:false,

        }
    },
    created:function(){
        this.getBillDet();
    },
    methods:{
        getBillDet:function(){
            //调用接口  获取汇票详情
            var self = this;
            self.orderId = self.$route.params.orderId;
            console.log(self.orderId);  
            self.$http.get(globalData.data.Ip+'/bill/order/orderinfo',{params:{
                orderId:self.orderId
            },emulateJSON:true,withCredentials:true}).then(function(res){ 
                self.billData = res.data.data;
                console.log(self.billData);                             
            },function(error){
                console.log(error);  
            })
        },
        finishpay:function(orderId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'点击确定前请确认您已完成付款？',
                onOk:function(){
                    // 调用接口   交易完成
                    self.$http.post(globalData.data.Ip+'/bill/order/payment',
                        {
                            orderId:orderId
                        },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                                self.$router.push("/acc/buy/accBuy/run");
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }
            })
        },
        signUp:function(orderId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'点击确定前请确认您已完成付款？',
                onOk:function(){
                    // 调用接口   交易完成
                    self.$http.post(globalData.data.Ip+'/bill/order/sign',
                        {
                            orderId:orderId
                        },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                                self.$router.push("/acc/buy/accBuy/run");
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }
            })
        },
        cancelpay:function(orderId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定要取消交易吗？',
                onOk:function(){
                    //调用接口   
                    self.$http.post(globalData.data.Ip+'/bill/order/revoke',
                        {
                            orderId:orderId
                        },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                            console.log(res)
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                                self.$router.push("/acc/buy/accBuy/success");
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }
            })
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
        },
        gotoBuy:function(){
            this.$router.push('/bill/in');
        },
        gotoPub:function(){
            this.$router.push('/bill/out');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .myBuyDet {
        width: 100%;
        height: auto;
        .myBuyDetContent {
            width: 982px;
            margin: 0 auto;
            .myBuyDetTitle {
                width: 100%;
                height: 58px;
                line-height: 58px;
                text-indent: 30px;
                border-bottom: 1px solid #e1e1e1;
                a:hover {
                    color: #f71327;
                }
            }
            .myBuyDetMain{
                width: 100%;
                height: auto;
                .myBuyDetMainBox{
                    width: 982px;
                    height: 600px;
                    margin: 0 auto;
                    padding:10px;
                    .myBillSteps{
                        width: 840px;
                        margin-left: 100px;
                        margin-bottom: 10px;
                    }
                    .myBuyDetBill {
                        width: 940px;
                        height: 500px;
                        margin: 0 auto;
                        overflow: hidden;
                        border: 1px solid #eee;
                        .myBuyDetBillTop{
                            width: 940px;
                            height: 43px;
                            .myBuyDetBillTitle{
                                height:43px;
                                line-height: 43px;
                                text-align: center;
                                float: left;
                                background: #f8f8f8;
                                border-bottom: 1px solid #eee;
                            }
                            .myBuyDetBillLeftTitle{
                                width: 652px;
                                border-right: 1px solid #eee;
                            }
                            .myBuyDetBillRightTitle{
                                width: 286px;
                            }
                        }
                        .myBuyDetBillInfo {
                            width: 100%;
                            height: 456px;
                            overflow: hidden;
                            .myBuyDetBillInfoLeft {
                                width: 652px;
                                height: 456px;
                                float: left;
                                border-right: 1px solid #eee;
                                .myBuyDetBillInfoList{
                                    width: 100%;
                                    height: 203px;
                                    padding: 20px 45px;
                                    .myBuyDetBillInfoItem {
                                        width: 100%;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-bottom: 8px;
                                        overflow: hidden;
                                        .myBuyDetBillInfoItem_label {
                                            width: auto;
                                            float: left;
                                            margin-right: 4px;
                                        }
                                        .myBuyDetBillInfoItem_text {
                                            width: auto;
                                            float: left;
                                            span{
                                                color: #f71327;
                                            }
                                        }
                                    }
                                }
                                .myBuyDetBillImgTitle{
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
                                .myBuyDetBillImgBox{
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
                            .myBuyDetBillInfoRight {
                                width: 286px;
                                height: 456px;
                                float: left;
                                .myBuyDetBillOperate{
                                    width: 158px;
                                    height: auto;
                                    margin: 158px auto 0;
                                    .myBuyDetBillOperate_label{
                                        width: 158px;
                                        text-align: center;
                                        margin-bottom: 24px;
                                    }                                    
                                    .myBuyDetBillOperate_btn{
                                        width: 158px;
                                        height: 44px;
                                        line-height: 44px;
                                        text-align: center;
                                        color: #fff;
                                        border-radius: 2px;
                                        cursor: pointer;
                                        background-image: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                                    }
                                    .myBuyDetBillOperate_cancel{
                                        background: #eee;
                                        margin-top: 30px;
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
