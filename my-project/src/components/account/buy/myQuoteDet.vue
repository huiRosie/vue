<template>
    <div class="myQuoteDet">
        <div class="myQuoteDetContent">
            <h2 class="myQuoteDetTitle">
                <a class="accountSubNav"  @click="routerBack">我的收票</a> >
                <a class="accountSubNav"  @click="routerBack">我的竞价</a> >
                <span>汇票详情</span>
            </h2>
            <div class="myQuoteDetMain">
                <!--汇票信息-->
                <div class="myQuoteDetMainBox">
                    <!-- 交易进展 -->
                    <!-- run 竞价中 -->
                    <div v-if="billData.quoteStatus=='run'" class="myBillSteps">
                        <Steps :current="0">
                            <Step title="进行中" content="达成交易协议"></Step>
                            <Step title="待进行" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <!-- ording已预选 -->
                    <div v-if="billData.quoteStatus=='ording'" class="myBillSteps">
                        <Steps :current="1">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="进行中" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div v-if="billData.quoteStatus=='publishing'" class="myBillSteps">
                        <Steps :current="0">
                            <Step title="进行中" content="达成交易协议"></Step>
                            <Step title="待进行" content="买家付款"></Step>
                            <Step title="待进行" content="卖家背书"></Step>
                            <Step title="待进行" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <!-- success竞价成功 -->
                    <div v-if="billData.quoteStatus=='success'" class="myBillSteps">
                        <Steps :current="4">
                            <Step title="已完成" content="达成交易协议"></Step>
                            <Step title="已完成" content="买家付款"></Step>
                            <Step title="已完成" content="卖家背书"></Step>
                            <Step title="已完成" content="买家签收"></Step>
                        </Steps>
                    </div>
                    <div class="myQuoteDetBill">
                        <div class="myQuoteDetBillTop">
                            <h3 class="myQuoteDetBillTitle myQuoteDetBillLeftTitle">票据信息</h3>
                            <h3 class="myQuoteDetBillTitle myQuoteDetBillRightTitle">操作</h3>
                        </div>
                        <div class="myQuoteDetBillInfo">
                            <div class="myQuoteDetBillInfoLeft">
                                <ul class="myQuoteDetBillInfoList">
                                    <li class="myQuoteDetBillInfoItem">
                                        <div class="myQuoteDetBillInfoItem_label">
                                            票据号：
                                        </div>
                                        <div class="myQuoteDetBillInfoItem_text">
                                            {{billData.quoteNo}}
                                        </div>
                                    </li>
                                    <li class="myQuoteDetBillInfoItem">
                                        <div class="myQuoteDetBillInfoItem_label">
                                            承兑人全称：
                                        </div>
                                        <div class="myQuoteDetBillInfoItem_text">
                                            {{billData.billUserName}}
                                        </div>
                                    </li>
                                    <li class="myQuoteDetBillInfoItem">
                                        <div class="myQuoteDetBillInfoItem_label">
                                            票面金额(元)：
                                        </div>
                                        <div class="myQuoteDetBillInfoItem_text">
                                            {{billData.billMoney}}
                                        </div>
                                    </li>
                                    <li class="myQuoteDetBillInfoItem">
                                        <div class="myQuoteDetBillInfoItem_label">
                                            贴息金额（元）：
                                        </div>
                                        <div class="myQuoteDetBillInfoItem_text">
                                            {{billData.quoteDiscountAmount}}
                                        </div>
                                    </li>
                                    <li class="myQuoteDetBillInfoItem">
                                        <div class="myQuoteDetBillInfoItem_label">
                                            有无回头：
                                        </div>
                                        <div class="myQuoteDetBillInfoItem_text">
                                            无
                                        </div>
                                    </li>
                                    <li class="myQuoteDetBillInfoItem">
                                        <div class="myQuoteDetBillInfoItem_label">
                                            贴现金额：
                                        </div>
                                        <div class="myQuoteDetBillInfoItem_text">
                                            <span>{{billData.quoteAmount}}</span>元
                                            <!-- <span>{{(billData.quoteAmount/10000).toFixed(2)}}</span>万元 -->
                                        </div>
                                    </li>
                                </ul>
                                <div class="myQuoteDetBillImgTitle">
                                    电子汇票截图<span>（点击下图可查看大图）</span>
                                </div>
                                <div class="myQuoteDetBillImgBox">
                                    <dl>
                                        <dt>
                                            <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" v-bind:src="'http://'+billData.billImg" @click="viewImgBack(billData.billImg)" />
                                            <img v-else v-bind:src="billData.billImg" @click="viewImgBack(billData.billImg)"/>
                                        </dt>
                                        <dd>汇票正面</dd>
                                    </dl>
                                    <dl v-if="billData.billEvidence!=null&&billData.billEvidence!=''">
                                        <dt>
                                            <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" v-bind:src="'http://'+billData.billEvidence" @click="viewImgBack(billData.billEvidence)"/>
                                            <img v-else v-bind:src="billData.billEvidence" @click="viewImgBack(billData.billEvidence)"/>
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
                                        <img v-if="imgSrc.indexOf('http://')==-1&&imgSrc.indexOf('https://')==-1" :src="'http://'+imgSrc" style="width: 100%">
                                        <img v-else :src="imgSrc" style="width: 100%">
                                    </Modal>
                                </div>
                            </div>
                            <div class="myQuoteDetBillInfoRight">
                                <div v-if="billData.quoteStatus=='run'" class="myQuoteDetBillOperate">
                                    <div class="myQuoteDetBillOperate_label">你已参与竞价，等待卖家审核，也可点击下方按钮，重新竞价！</div>
                                    <div class="myQuoteDetBillOperate_btn myQuoteDetBillOperate_finish" @click="gotoQuote(billData.billId)" >
                                        重新竞价
                                    </div>
                                    <div class="myQuoteDetBillOperate_btn myQuoteDetBillOperate_cancel" @click="cancelpay(billData.quoteId)" >
                                        取消竞价
                                    </div>
                                </div>
                                <div v-if="billData.quoteStatus=='ording'" class="myQuoteDetBillOperate">
                                    <div class="myQuoteDetBillOperate_label">竞价成功，请前往交易列表中查看交易状态！</div>
                                </div>
                                <div v-if="billData.quoteStatus=='success'" class="myQuoteDetBillOperate">
                                    <div class="myQuoteDetBillOperate_label">恭喜您收到一张优质的承兑汇票！</div>
                                    <div class="myQuoteDetBillOperate_btn myQuoteDetBillOperate_finish" @click="gotoBuy" >
                                        继续收票
                                    </div>
                                </div>
                                <div v-if="billData.quoteStatus=='fail'" class="myQuoteDetBillOperate">
                                    <div class="myQuoteDetBillOperate_label">竞价失败！</div>
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
    name: 'myQuoteDet',
    data () {
        return {
            billId:'',
            billData:'',
            visible:false,
            imgSrc:'',
            billEndorseImg:''
        }
    },
    created:function(){
        this.getBillDet();
    },
    methods:{
        getBillDet:function(){
            //调用接口  获取汇票详情
            var self = this;
            self.quoteId = self.$route.params.quoteId;
            // console.log(self.quoteId)
            self.$http.get(globalData.data.Ip+'/bill/quote/quoteinfo',{params:{
                quoteId:self.quoteId
            },emulateJSON:true,withCredentials:true}).then(function(res){ 
                self.billData = res.data.data;
                self.billEndorseImg = (res.data.data.billEndorseImg).split(',');
                // console.log(res);                             
                console.log(self.billData);                             
            },function(error){
                console.log(error);  
            })
        },
        cancelpay:function(quoteId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定要撤销竞价吗？',
                onOk:function(){
                    //调用接口   
                    self.$http.post(globalData.data.Ip+'/bill/quote/revoke',{
                            quoteId:quoteId
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
                            console.log(res)
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
        routerBack:function(){
            this.$router.go(-1);
        },
        viewImgBack:function(imgSrc){
            this.visible = true;
            this.imgSrc = imgSrc;
        },
        gotoBuy:function(){
            this.$router.push('/bill/in');
        },
        gotoQuote:function(billId){
            this.$router.push({ name: "InDetail", params: { billId: billId } });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .myQuoteDet {
        width: 100%;
        height: auto;
        .myQuoteDetContent {
            width: 982px;
            margin: 0 auto;
            .myQuoteDetTitle {
                width: 100%;
                height: 58px;
                line-height: 58px;
                text-indent: 30px;
                border-bottom: 1px solid #e1e1e1;
                a:hover {
                    color: #f71327;
                }
            }
            .myQuoteDetMain{
                width: 100%;
                height: auto;
                .myQuoteDetMainBox{
                    width: 982px;
                    height: 600px;
                    margin: 0 auto;
                    padding:10px;
                    .myBillSteps{
                        width: 840px;
                        margin-left: 100px;
                        margin-bottom: 10px;
                    }
                    .myQuoteDetBill {
                        width: 940px;
                        height: 500px;
                        margin: 0 auto;
                        overflow: hidden;
                        border: 1px solid #eee;
                        .myQuoteDetBillTop{
                            width: 940px;
                            height: 43px;
                            .myQuoteDetBillTitle{
                                height:43px;
                                line-height: 43px;
                                text-align: center;
                                float: left;
                                background: #f8f8f8;
                                border-bottom: 1px solid #eee;
                            }
                            .myQuoteDetBillLeftTitle{
                                width: 652px;
                                border-right: 1px solid #eee;
                            }
                            .myQuoteDetBillRightTitle{
                                width: 286px;
                            }
                        }
                        .myQuoteDetBillInfo {
                            width: 100%;
                            height: 456px;
                            overflow: hidden;
                            .myQuoteDetBillInfoLeft {
                                width: 652px;
                                height: 456px;
                                float: left;
                                border-right: 1px solid #eee;
                                .myQuoteDetBillInfoList{
                                    width: 100%;
                                    height: 203px;
                                    padding: 20px 45px;
                                    .myQuoteDetBillInfoItem {
                                        width: 100%;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-bottom: 8px;
                                        overflow: hidden;
                                        .myQuoteDetBillInfoItem_label {
                                            width: auto;
                                            float: left;
                                            margin-right: 4px;
                                        }
                                        .myQuoteDetBillInfoItem_text {
                                            width: auto;
                                            float: left;
                                            span{
                                                color: #f71327;
                                            }
                                        }
                                    }
                                }
                                .myQuoteDetBillImgTitle{
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
                                .myQuoteDetBillImgBox{
                                    width: 652px;
                                    height: 208px;
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
                            .myQuoteDetBillInfoRight {
                                width: 286px;
                                height: 456px;
                                float: left;
                                .myQuoteDetBillOperate{
                                    width: 158px;
                                    height: auto;
                                    margin: 158px auto 0;
                                    .myQuoteDetBillOperate_label{
                                        width: 158px;
                                        text-align: center;
                                        margin-bottom: 24px;
                                    }                                    
                                    .myQuoteDetBillOperate_btn{
                                        width: 158px;
                                        height: 44px;
                                        line-height: 44px;
                                        text-align: center;
                                        color: #fff;
                                        border-radius: 2px;
                                        cursor: pointer;
                                        background-image: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                                    }
                                    .myQuoteDetBillOperate_cancel{
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
