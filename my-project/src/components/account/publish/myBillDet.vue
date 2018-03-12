<template>
    <div class="myBillDet">
        <div class="myBillDetContent">
            <h2 class="myBillDetTitle" v-if="billData.billStatus=='validating'">
                <a class="accountSubNav" @click="routerBack">我的发布</a> >
                <a class="accountSubNav" @click="routerBack">待交易</a> >
                <span>汇票详情</span>
            </h2>
            <h2 class="myBillDetTitle" v-if="billData.billStatus=='ording'||billData.billStatus=='paymenting'||billData.billStatus=='endorse'||billData.billStatus=='paymenting'">
                <a class="accountSubNav" @click="routerBack">我的发布</a> >
                <a class="accountSubNav" @click="routerBack">交易中</a> >
                <span>汇票详情</span>
            </h2>
            <h2 class="myBillDetTitle" v-if="billData.billStatus=='success'||billData.billStatus=='failure'">
                <a class="accountSubNav" @click="routerBack">我的发布</a> >
                <a class="accountSubNav" @click="routerBack">交易完成</a> >
                <span>汇票详情</span>
            </h2>
            <div class="myBillDetMain">
                <!--汇票信息-->
                <div class="myBillDetMainBox">
                    <!-- 交易进展 -->
                    <div v-if="billData.billStatus=='validating'||billData.billStatus=='validate_success'" class="myBillSteps">
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
                    <div class="myBillDetBill">
                        <div class="myBillDetBillTop">
                            <h3 class="myBillDetBillTitle myBillDetBillLeftTitle">票据信息</h3>
                            <h3 class="myBillDetBillTitle myBillDetBillRightTitle">操作</h3>
                        </div>
                        <div class="myBillDetBillInfo">
                            <div class="myBillDetBillInfoLeft">
                                <ul class="myBillDetBillInfoList">
                                    <li class="myBillDetBillInfoItem">
                                        <div class="myBillDetBillInfoItem_label">
                                            票据号：
                                        </div>
                                        <div class="myBillDetBillInfoItem_text">
                                            {{billData.billNo}}
                                        </div>
                                    </li>
                                    <li class="myBillDetBillInfoItem">
                                        <div class="myBillDetBillInfoItem_label">
                                            承兑人全称：
                                        </div>
                                        <div class="myBillDetBillInfoItem_text">
                                            {{billData.billUserName}}
                                        </div>
                                    </li>
                                    <li class="myBillDetBillInfoItem">
                                        <div class="myBillDetBillInfoItem_label">
                                            票面金额(元)：
                                        </div>
                                        <div v-if="billData.billMoney<=10000" class="myBillDetBillInfoItem_text">
                                            {{billData.billMoney}}
                                        </div>
                                        <div v-if="billData.billMoney>10000" class="myBillDetBillInfoItem_text">
                                            {{billData.billMoney/10000}}万
                                        </div>
                                    </li>
                                    <li class="myBillDetBillInfoItem">
                                        <div class="myBillDetBillInfoItem_label">
                                            交易方式：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="myBillDetBillInfoItem_text">
                                            <span>{{billData.billFixedPrice}}</span>元/每十万扣
                                        </div>
                                        <div v-else class="myBillDetBillInfoItem_text">
                                            竞价
                                        </div>
                                    </li>
                                    <li class="myBillDetBillInfoItem">
                                        <div class="myBillDetBillInfoItem_label">
                                            汇票到期日：
                                        </div>
                                        <div class="myBillDetBillInfoItem_text">
                                            {{billData.billExpire}}
                                        </div>
                                    </li>
                                    <li class="myBillDetBillInfoItem">
                                        <div class="myBillDetBillInfoItem_label">
                                            贴现金额：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="myBillDetBillInfoItem_text">
                                            <span>{{((billData.billMoney-(billData.billMoney/100000)*billData.billFixedPrice)/10000).toFixed(2)}}</span>万元
                                        </div>
                                        <div v-else class="inDetBillInfoItem_text">
                                            买家参与竞价后可了解详情
                                        </div>
                                    </li>
                                </ul>
                                <div class="myBillDetBillImgTitle">
                                    电子汇票截图<span>（点击下图可查看大图）</span>
                                </div>
                                <div class="myBillDetBillImgBox">
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
                                        <img v-if="imgSrc.indexOf('http://')==-1&&imgSrc.indexOf('https://')==-1" :src="'http://'+imgSrc" style="width: 100%">
                                        <img v-else :src="imgSrc" style="width: 100%">
                                    </Modal>
                                </div>
                            </div>
                            <div class="myBillDetBillInfoRight">
                                <div v-if="billData.billStatus=='validating'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">暂时不需要贴现</div>
                                    <div class="myBillDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='validate_success'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">票据审核成功，等待买家下单</div>
                                    <div class="myBillDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='ording'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">买家已下单，等待买家付款</div>
                                    <div class="myBillDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='paymenting'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">买家已付款，请尽快完成背书</div>
                                    <div class="myBillDetBillOperate_btn" @click="endorse(billData.billId)">
                                        完成背书
                                    </div>
                                    <div class="myBillDetBillOperate_btn myBillDetBillOperate_cancel" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='endorse'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">已完成背书，等待买家签收</div>
                                    <div class="myBillDetBillOperate_btn" @click="giveUp(billData.billId)">
                                        撤销交易
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='success'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">恭喜您，汇票贴现成功！</div>
                                    <div class="myBillDetBillOperate_btn" @click="gotoNext()">
                                        返回首页
                                    </div>
                                </div>
                                <div v-if="billData.billStatus=='failure'" class="myBillDetBillOperate">
                                    <div class="myBillDetBillOperate_label">交易失败原因：{{billData.billDesc}}</div>
                                    <div class="myBillDetBillOperate_btn" @click="gotoPub()">
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
import globalData from '../../globalData'

export default {
    name: 'MyBillDet',
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
            self.billId = self.$route.params.billId;
            // console.log(self.billId);      
            self.$http.get(globalData.data.Ip+'/bill/info',{params:{
                billId:self.billId
            }},{emulateJSON:true}).then(function(res){ 
                self.billData = res.data.data;
                self.billEndorseImg = (res.data.data.billEndorseImg).split(',');
                // console.log(self.billData);                             
            },function(error){
                console.log(error);  
            })
        },
        giveUp:function(billId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定要撤回汇票吗？',
                onOk:function(){
                    //调用接口   撤回汇票
                    self.$http.post(globalData.data.Ip+'/bill/revoke',{
                            billId:billId
                        },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                            console.log(res)
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                                self.$router.push("/acc/mypub/accAnn/trading");
                            }                         
                        },function(error){
                            console.log(error);  
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
                    //调用接口   完成背书
                    self.$http.post(globalData.data.Ip+'/bill/endorse',
                        {
                            billId:billId
                        },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                                self.$router.push("/acc/mypub/accAnn/trading");
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }
            })
        },
        gotoNext:function(){
            this.$router.push('/index');
        },
        gotoPub:function(){
            this.$router.push('/bill/out');
        },
        routerBack:function(){
            this.$router.go(-1);
        },
        viewImgBack:function(imgSrc){
            this.visible = true;
            this.imgSrc = imgSrc;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .myBillDet {
        width: 100%;
        height: auto;
        .myBillDetContent {
            width: 982px;
            margin: 0 auto;
            .myBillDetTitle {
                width: 100%;
                height: 58px;
                line-height: 58px;
                text-indent: 30px;
                border-bottom: 1px solid #e1e1e1;
                a:hover {
                    color: #f71327;
                }
            }
            .myBillDetMain{
                width: 100%;
                height: auto;
                .myBillDetMainBox{
                    width: 982px;
                    height: 600px;
                    margin: 0 auto;
                    padding:10px;
                    .myBillSteps{
                        width: 840px;
                        margin-left: 100px;
                        margin-bottom: 10px;
                    }
                    .myBillDetBill {
                        width: 940px;
                        height: 500px;
                        margin: 0 auto;
                        overflow: hidden;
                        border: 1px solid #eee;
                        .myBillDetBillTop{
                            width: 940px;
                            height: 43px;
                            .myBillDetBillTitle{
                                height:43px;
                                line-height: 43px;
                                text-align: center;
                                float: left;
                                background: #f8f8f8;
                                border-bottom: 1px solid #eee;
                            }
                            .myBillDetBillLeftTitle{
                                width: 652px;
                                border-right: 1px solid #eee;
                            }
                            .myBillDetBillRightTitle{
                                width: 286px;
                            }
                        }
                        .myBillDetBillInfo {
                            width: 100%;
                            height: 456px;
                            overflow: hidden;
                            .myBillDetBillInfoLeft {
                                width: 652px;
                                height: 456px;
                                float: left;
                                border-right: 1px solid #eee;
                                .myBillDetBillInfoList{
                                    width: 100%;
                                    height: 203px;
                                    padding: 20px 45px;
                                    .myBillDetBillInfoItem {
                                        width: 100%;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-bottom: 8px;
                                        overflow: hidden;
                                        .myBillDetBillInfoItem_label {
                                            width: auto;
                                            float: left;
                                            margin-right: 4px;
                                        }
                                        .myBillDetBillInfoItem_text {
                                            width: auto;
                                            float: left;
                                            span{
                                                color: #f71327;
                                            }
                                        }
                                    }
                                }
                                .myBillDetBillImgTitle{
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
                                .myBillDetBillImgBox{
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
                            .myBillDetBillInfoRight {
                                width: 286px;
                                height: 456px;
                                float: left;
                                .myBillDetBillOperate{
                                    width: 158px;
                                    height: auto;
                                    margin: 158px auto 0;
                                    .myBillDetBillOperate_label{
                                        width: 158px;
                                        text-align: center;
                                        margin-bottom: 24px;
                                    }                                    
                                    .myBillDetBillOperate_btn{
                                        width: 158px;
                                        height: 44px;
                                        line-height: 44px;
                                        text-align: center;
                                        color: #fff;
                                        border-radius: 2px;
                                        cursor: pointer;
                                        background-image: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                                    }
                                    .myBillDetBillOperate_cancel{
                                        background: #ccc;
                                        margin:20px 0;
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
