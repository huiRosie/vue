<template>
    <div class="handelDet">
        <div class="topNav" v-if="billData.billStatus=='validate_success'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/validate_success'>待交易</router-link> > 
            <span>汇票详情</span>
        </div>
        <div class="topNav" v-if="billData.billStatus=='ording'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/ording'>交易中</router-link> > 
            <span>订单详情</span>
        </div>
        <div class="topNav" v-if="billData.billStatus=='paymenting'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/ording'>交易中</router-link> > 
            <span>订单详情</span>
        </div>
        <div class="topNav" v-if="billData.billStatus=='success'||billData.billStatus=='failure'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/success'>交易完成</router-link> > 
            <span>订单详情</span>
        </div>
        <div class="handelDetMain">
            <!--汇票信息-->
            <div class="handelDetMainBox">
                <!-- 交易进展 -->
                <div v-if="billData.billStatus=='validate_success'" class="myBillSteps">
                    <Steps :current="0">
                        <Step title="进行中" content="达成交易协议"></Step>
                        <Step title="待进行" content="买家付款"></Step>
                        <Step title="待进行" content="卖家背书"></Step>
                        <Step title="待进行" content="买家签收"></Step>
                    </Steps>
                </div>
                <div v-if="billData.billStatus=='ording'" class="myBillSteps">
                    <Steps :current="1">
                        <Step title="已完成" content="达成交易协议"></Step>
                        <Step title="进行中" content="买家付款"></Step>
                        <Step title="待进行" content="卖家背书"></Step>
                        <Step title="待进行" content="买家签收"></Step>
                    </Steps>
                </div>
                <div v-if="billData.billStatus=='paymenting'" class="myBillSteps">
                    <Steps :current="2">
                        <Step title="已完成" content="达成交易协议"></Step>
                        <Step title="已完成" content="买家付款"></Step>
                        <Step title="进行中" content="卖家背书"></Step>
                        <Step title="待进行" content="买家签收"></Step>
                    </Steps>
                </div>
                <div v-if="billData.billStatus=='endorse'" class="myBillSteps">
                    <Steps :current="3">
                        <Step title="已完成" content="达成交易协议"></Step>
                        <Step title="已完成" content="买家付款"></Step>
                        <Step title="已完成" content="卖家背书"></Step>
                        <Step title="进行中" content="买家签收"></Step>
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
                <div class="handelDetBill">
                    <div class="handelDetBillTop">
                        <h3 class="handelDetBillTitle handelDetBillLeftTitle">票据信息</h3>
                        <h3 class="handelDetBillTitle handelDetBillRightTitle">操作</h3>
                    </div>
                    <div class="handelDetBillInfo">
                        <div class="handelDetBillInfoLeft">
                            <ul class="handelDetBillInfoList">
                                <li class="handelDetBillInfoItem">
                                    <div class="handelDetBillInfoItem_label">
                                        票据号：
                                    </div>
                                    <div class="handelDetBillInfoItem_text">
                                        {{billData.billNo}}
                                    </div>
                                </li>
                                <li class="handelDetBillInfoItem">
                                    <div class="handelDetBillInfoItem_label">
                                        承兑人全称：
                                    </div>
                                    <div class="handelDetBillInfoItem_text">
                                        {{billData.billUserName}}
                                    </div>
                                </li>
                                <li class="handelDetBillInfoItem">
                                    <div class="handelDetBillInfoItem_label">
                                        票面金额(元)：
                                    </div>
                                    <div v-if="billData.billMoney<=10000" class="handelDetBillInfoItem_text">
                                        {{billData.billMoney}}
                                    </div>
                                    <div v-if="billData.billMoney>10000" class="handelDetBillInfoItem_text">
                                        {{billData.billMoney/10000}}万
                                    </div>
                                </li>
                                <li class="handelDetBillInfoItem">
                                    <div class="handelDetBillInfoItem_label">
                                        交易方式：
                                    </div>
                                    <div v-if="billData.billQuoteType=='fixed'" class="handelDetBillInfoItem_text">
                                        <span>{{billData.billFixedPrice}}</span>元/每十万扣
                                    </div>
                                    <div v-else class="handelDetBillInfoItem_text">
                                        竞价
                                    </div>
                                </li>
                                <li class="handelDetBillInfoItem">
                                    <div class="handelDetBillInfoItem_label">
                                        汇票到期日：
                                    </div>
                                    <div class="handelDetBillInfoItem_text">
                                        {{billData.billExpire}}
                                    </div>
                                </li>
                                <li class="handelDetBillInfoItem">
                                    <div class="handelDetBillInfoItem_label">
                                        贴现金额：
                                    </div>
                                    <div v-if="billData.billQuoteType=='fixed'" class="handelDetBillInfoItem_text">
                                        <span>{{((billData.billMoney-(billData.billMoney/100000)*billData.billFixedPrice)/10000).toFixed(2)}}</span>万元
                                    </div>
                                    <div v-else class="inDetBillInfoItem_text">
                                        买家参与竞价后可了解详情
                                    </div>
                                </li>
                            </ul>
                            <div class="handelDetBillImgTitle">
                                电子汇票截图<span>（点击下图可查看大图）</span>
                            </div>
                            <div class="handelDetBillImgBox">
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
                                        <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" :src="'http://'+billData.billEvidence" @click="viewImgBack2"/>
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
                        <div class="handelDetBillInfoRight">
                            <div v-if="billData.billStatus=='validate_success'" class="handelDetBillOperate">
                                <div class="handelDetBillOperate_label">请确认订单后点击下单</div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_finish" @click="oder()">
                                    立即下单
                                </div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_cancel" @click="cancelpay()">
                                    取消交易
                                </div>
                            </div>
                            <div v-if="billData.billStatus=='ording'" class="handelDetBillOperate">
                                <div class="handelDetBillOperate_label">你与卖家已达成交易协议，请您尽快向卖家账户完成打款！</div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_finish" @click="finishpay()">
                                    完成付款
                                </div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_cancel" @click="cancelpay()">
                                    取消交易
                                </div>
                            </div>
                            <div v-if="billData.billStatus=='paymenting'" class="handelDetBillOperate">
                                <div class="handelDetBillOperate_label">您已完成付款，请等待卖家背书</div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_cancel" @click="cancelpay()">
                                    撤销交易
                                </div>
                            </div>
                            <div v-if="billData.billStatus=='endorse'" class="handelDetBillOperate">
                                <div class="handelDetBillOperate_label">卖方已完成背书，请确认汇票无误后签收</div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_finish" @click="signUp()">
                                    确认签收
                                </div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_cancel" @click="cancelpay()">
                                    撤销交易
                                </div>
                            </div>
                            <div v-if="billData.billStatus=='success'" class="handelDetBillOperate">
                                <div class="handelDetBillOperate_label">恭喜您收到一张优质的承兑汇票！</div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_finish" @click="gotoNext()">
                                    继续收票
                                </div>
                            </div>
                            <div v-if="billData.billStatus=='failure'" class="handelDetBillOperate">
                                <div class="handelDetBillOperate_label">交易失败原因：{{billData.billDesc}}</div>
                                <div class="handelDetBillOperate_btn handelDetBillOperate_finish" @click="gotoNext()">
                                    继续收票
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- <div class="handelDet">
                <h3 class="handelDetTitle">汇票信息</h3>
                <div class="handelDetInfo">
                    <ul class="handelDetInfoLeft">
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                票据号：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billNo}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                承兑人全称：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billUserName}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                票据类型：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billClassify}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                票面金额(元)：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billMoney}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                汇票到期日：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billExpire}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                背书次数：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billEndorse}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                汇票瑕疵：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billImgHealth}}
                            </div>
                        </li>
                    </ul>
                    <div class="handelDetInfoRight">
                        <img v-if="billInfo.billImg!=null&&billInfo.billImg!=''&&billInfo.billImg.indexOf('http://')==-1&&billInfo.billImg.indexOf('https://')==-1" :src="'http://'+billInfo.billImg" />
                        <img v-else :src="billInfo.billImg"  />
                    </div>
                </div>
            </div> -->
            <!--背书及附件-->
            <!-- <div class="handelDetAttach">
                <h3 class="handelDetAttachTitle">背书及附件</h3>
                <div class="handelDetAttachInfo">
                    <img v-if="billInfo.billEvidence!=null&&billInfo.billEvidence!=''&&billInfo.billEvidence.indexOf('http://')==-1&&billInfo.billEvidence.indexOf('https://')==-1" :src="'http://'+billInfo.billEvidence"/>
                    <img v-else :src="billInfo.billEvidence"/>
                </div>
            </div> -->
            <!--交易成功或失败-->
            <!-- <div class="handelDetBtn" v-if="billInfo.billStatus=='validate_success'">
                <a class="handelDetBtnRefer" @click="tradeSuccessBill('success')">交易成功</a>
                <a class="handelDetBtnPass" @click="bidModal">交易失败</a>
                
                <Modal
                    v-model="modal"
                    title="交易失败原因(请输入交易失败原因)"
                    class-name="vertical-center-modal">
                    <div slot="header" class="bidPouupTop">
                        <h2 class="bidPouupTopTitle">交易失败原因<span> (请输入交易失败原因)</span></h2>
                    </div>
                    <div class="bidPouupMain">
                        <div class="bidPouupMain_label">
                            交易失败原因：
                        </div>
                        <div class="bidPouupMain_text">
                            <textarea name="" v-model="billFailReason" ></textarea>
                        </div>
                        <div class="bid_tip" ref="bid_tip">请输入交易失败原因</div>
                    </div>
                    <div slot="footer" class="bidPouupBtn">
                        <a @click="tradeFailBill('failure')" class="bidPouupFail">交易失败</a>
                    </div>
                </Modal>
            </div> -->
    </div>
</template>

<script>
import { fetchBillDetail,fetchTradeBill,fetchOrderBill,fetchPaymentBill,fetchSignBill,fetchCancelBill } from '../../../assets/js/billApi'


export default {
    name: 'HandelDet',
    data () {
        return {
            modal:false,
            billData:'',
            billFailReason:'',
            configs: {
                width:200,
                height:200,
                maskWidth:100,
                maskHeight:100,
                maskColor:'white',
                maskOpacity:0.2
           },
            visible0:false,
            visible1:false,
            visible2:false
        }
    },
    created:function(){
        this.getBillDetail();
    },
    methods:{
        // 获取票据详情
        getBillDetail:function(){
            var self = this;
            self.billId = self.$route.params.billId;
            fetchBillDetail({
                billId:self.billId
            },{emulateJSON:true,credentials:true}).then(function(res){
                self.billData = res.data.data;
                console.log(self.billData)
            })
        },
        // 交易成功 
        tradeSuccessBill:function(billStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            // 将数据格式由json格式转换成字符串形式
            var data = self.$qs.stringify({
                billId:self.billId,
                billStatus:billStatus,
                billDesc:self.billFailReason
            });
            self.$Modal.confirm({
                title:'提示',
                content:'交易成功前请确认您已收到当前汇票？',
                onOk:function(){
                    fetchTradeBill(data).then(function(res){
                        // console.log(res)
                        self.$Message.success({
                            content:'操作成功'
                        });
                        self.$router.push('/in/check/validate_success');
                    })
                }
            });
        },
        // 交易成功 交易失败
        tradeFailBill:function(billStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            if(billStatus=='failure'&&self.billFailReason==''){
                self.$Modal.warning({
                    title:'提示',
                    content:'请输入交易失败原因'
                });
                return;
            }
            // 将数据格式由json格式转换成字符串形式
            var data = self.$qs.stringify({
                billId:self.billId,
                billStatus:billStatus,
                billDesc:self.billFailReason
            });
            fetchTradeBill(data).then(function(res){
                // console.log(res)
                self.$Message.success({
                    content:'操作成功'
                });
                self.$router.push('/in/check/validate_success');
            })
        },
        // 立即下单
        oder:function(){
            var self = this;
            // console.log(self.billId)
            self.$Modal.confirm({
                title:'提示',
                content:'您确定要购买当前汇票吗？',
                onOk:function(){
                    // console.log(self.billId)
                    var data = self.$qs.stringify({
                        billId:self.billId
                    });
                    // 调用接口   完成付款
                    fetchOrderBill(data).then(function(res){
                        console.log(res)
                        self.$Message.success({
                            content:'操作成功'
                        });
                        self.$router.push('/in/check/validate_success');
                    })
                }
            })
        },
        // 完成付款
        finishpay:function(){
            var self = this;
            console.log(self.billId)
            self.$Modal.confirm({
                title:'提示',
                content:'点击确定前请确认您已完成付款？',
                onOk:function(){
                    // 调用接口   完成付款
                    var data = self.$qs.stringify({
                        billId:self.billId
                    });
                    fetchPaymentBill(data).then(function(res){
                        console.log(res)
                        self.$Message.success({
                            content:'操作成功'
                        });
                        self.$router.push('/in/check/ording');
                    })
                }
            })
        },
        // 完成签收
        signUp:function(){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'点击确定前请确认您已完成付款？',
                onOk:function(){
                    // 调用接口   完成付款
                    var data = self.$qs.stringify({
                        billId:self.billId
                    });
                    fetchSignBill(data).then(function(res){
                        console.log(res)
                        self.$Message.success({
                            content:'操作成功'
                        });
                        self.$router.push('/in/check/success');
                    })
                }
            })
        },
        // 撤销交易
        cancelpay:function(){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定要取消交易吗？',
                onOk:function(){
                    //调用接口   撤销交易
                    var data = self.$qs.stringify({
                        billId:self.billId
                    });
                    fetchCancelBill(data).then(function(res){
                        console.log(res)
                        self.$Message.success({
                            content:'操作成功'
                        });
                        self.$router.push('/in/check/success');
                    })
                }
            })
        },
        bidModal:function(){
            this.modal = true
        },
        checkFail:function(){
            this.modal = false
        },
        gotoNext:function(){
            this.$router.push('/in/check/validating');
        },
        gotoPub:function(){
            this.$router.push('/out/pub');
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
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .handelDet {
        width: 100%;
        height: auto;
        .topNav {
            width: 100%;
            height: 58px;
            line-height: 58px;
            text-indent: 30px;
            border-bottom: 1px solid #e1e1e1;
            a:hover {
                color: #f71327;
            }
        }
        .handelDetMain{
            width: 100%;
            height: auto;
            .handelDetMainBox{
                width: 982px;
                height: 600px;
                margin: 0 auto;
                padding:10px;
                .myBillSteps{
                    width: 840px;
                    margin-left: 100px;
                    margin-bottom: 10px;
                }
                .handelDetBill {
                    width: 940px;
                    height: 500px;
                    margin: 0 auto;
                    overflow: hidden;
                    border: 1px solid #eee;
                    .handelDetBillTop{
                        width: 940px;
                        height: 43px;
                        .handelDetBillTitle{
                            height:43px;
                            line-height: 43px;
                            text-align: center;
                            float: left;
                            background: #f8f8f8;
                            border-bottom: 1px solid #eee;
                        }
                        .handelDetBillLeftTitle{
                            width: 652px;
                            border-right: 1px solid #eee;
                        }
                        .handelDetBillRightTitle{
                            width: 286px;
                        }
                    }
                    .handelDetBillInfo {
                        width: 100%;
                        height: 456px;
                        overflow: hidden;
                        .handelDetBillInfoLeft {
                            width: 652px;
                            height: 456px;
                            float: left;
                            border-right: 1px solid #eee;
                            .handelDetBillInfoList{
                                width: 100%;
                                height: 203px;
                                padding: 20px 45px;
                                .handelDetBillInfoItem {
                                    width: 100%;
                                    height: 20px;
                                    line-height: 20px;
                                    margin-bottom: 8px;
                                    overflow: hidden;
                                    .handelDetBillInfoItem_label {
                                        width: auto;
                                        float: left;
                                        margin-right: 4px;
                                    }
                                    .handelDetBillInfoItem_text {
                                        width: auto;
                                        float: left;
                                        span{
                                            color: #f71327;
                                        }
                                    }
                                }
                            }
                            .handelDetBillImgTitle{
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
                            .handelDetBillImgBox{
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
                        .handelDetBillInfoRight {
                            width: 286px;
                            height: 456px;
                            float: left;
                            .handelDetBillOperate{
                                width: 158px;
                                height: auto;
                                margin: 158px auto 0;
                                .handelDetBillOperate_label{
                                    width: 158px;
                                    text-align: center;
                                    margin-bottom: 24px;
                                }                                    
                                .handelDetBillOperate_btn{
                                    width: 158px;
                                    height: 44px;
                                    line-height: 44px;
                                    text-align: center;
                                    color: #fff;
                                    border-radius: 2px;
                                    cursor: pointer;
                                    background-image: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                                }            
                                .handelDetBillOperate_cancel{
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


    /* .handelDet {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        border-bottom: 1px solid #eee;
    }

    .handelDet .handelDetMain {
        width: 100%;
        height: 638px;
    }

    .handelDet .handelDetMain .handelDet {
        width: 942px;
        height: auto;
        padding: 20px 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDet .handelDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft .handelDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft .handelDetInfoItem .handelDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft .handelDetInfoItem .handelDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .handelDet .handelDetMain .handelDetAttach {
        width: 942px;
        height: auto;
        padding: 0 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDetAttach .handelDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .handelDet .handelDetMain .handelDetAttach .handelDetAttachInfo {
        padding: 0 10px;
    }

    .handelDet .handelDetMain .handelDetAttach .handelDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    .handelDet .handelDetMain .handelDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .handelDet .handelDetMain .handelDetBtn .handelDetBtnRefer,
    .handelDet .handelDetMain .handelDetBtn .handelDetBtnPass{
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        border-radius: 4px;
        float: left;
    }

    .handelDet .handelDetMain .handelDetBtn .handelDetBtnRefer{
        margin-right:20px;
    }   

   
    .bidPouupTop {
        width: 488px;
        height:18px;
        margin-bottom: 1px;
        background: white;
    }

    .bidPouupTop .bidPouupTopTitle {
        width: 300px;
        height: 18px;
        float: left;
        color: #f71327;
        font-size: 16px;
    }

    .bidPouupTop .bidPouupTopTitle span {
        color: #878787;
        font-size: 12px;
    }

    .bidPouupMain {
        width: 424px;
        height: 210px;
        padding: 20px 0;
        background: white;
    }

    .bidPouupMain .bidPouupMain_label {
        width: 100px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupMain_text {
        width: 298px;
        height:180px;
        float: left;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupMain_text textarea {
        display: block;
        width: 280px;
        height:180px;
        float: left;
        line-height: 26px;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouupMain .bid_tip {
        width: 298px;
        height: 24px;
        color: red;
        line-height: 24px;
        display: none;
    }

    .bidPouupMain .bidPouup_text span {
        float: left;
        color: #f71327;
    }

    .ivu-modal-footer{
        border: 0;
    }

    .bidPouupBtn {
        width: 240px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        background-color: #f71327;
    }

    .bidPouupBtn .bidPouupFail {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
    }  */
</style>
