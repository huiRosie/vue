<template>
    <div class="myOfferDet">
        <div class="myOfferDetContent">
            <h2 class="myOfferDetTitle">
                <router-link class="accountSubNav" to="/acc/buy/accOffer/'publish'">我是买家</router-link> >
                <router-link class="accountSubNav" to="/acc/buy/accOffer/'publish'">我竞价的汇票</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="myOfferDetMain">
                <!--汇票信息-->
                <div class="myOfferDetBill">
                    <h3 class="myOfferDetBillTitle">汇票信息
                        <span v-if="billData.billStatus=='publishing'" class="myOfferDetBillStatus">交易中</span>
                    </h3>
                    <div class="myOfferDetBillInfo">
                        <ul class="myOfferDetBillInfoLeft">
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billNo}}
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billUserName}}
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billClassify}}
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billMoney}}
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billExpire}}
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billEndorse}}
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    {{billData.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="myOfferDetBillInfoRight">
                            <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" :src="'http://'+billData.billImg"/>
                            <img v-else :src="billData.billImg"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="myOfferDetAttach">
                    <h3 class="myOfferDetAttachTitle">背书及附件</h3>
                    <div class="myOfferDetAttachInfo">
                        <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" :src="'http://'+billData.billImg"/>
                        <img v-else :src="billData.billEvidence"/>
                        <p class="myOfferDetAttachDes">背书.jpg</p>
                    </div>
                </div>
                <!--放弃竞价-->
                <div class="myOfferDetBtn">
                    <a class="myOfferDetBtnBack" @click="giveUp">放弃交易</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'MyOfferDet',
    data () {
        return {
            billId:'',
            billData:''
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
            self.$http.get(globalData.data.Ip+'/bill/info',{params:{
                billId:self.billId
            }},{emulateJSON:true}).then(function(res){ 
                self.billData = res.data.data;
                console.log(self.billData);                             
            },function(error){
                console.log(error);  
            })
        },
        giveUp:function(){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定放弃竞价吗？',
                onOk:function(){
                    //调用接口   放弃报价
                    self.$http.post(globalData.data.Ip+'/bill/quote/refuse',
                        {
                            quoteId:self.billId
                        },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .myOfferDet {
        width: 100%;
        height: auto;
        background: #f1f1f1;
    }

    .myOfferDet .myOfferDetContent {
        width: 982px;
        margin: 0 auto;
    }

    .myOfferDet .myOfferDetContent .myOfferDetTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .myOfferDet .myOfferDetContent .myOfferDetTitle a:hover {
        color: #f71327;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill {
        width: 982px;
        height: auto;
        padding: 12px 0 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillTitle {
        width: 952px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        margin-left: 30px;
        border-left: 5px solid #f71327;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillTitle .myOfferDetBillStatus {
        display: block;
        float: right;
        width: 74px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        font-weight: 100;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo {
        width: 982px;
        padding-left: 30px;
        height: auto;
        overflow: hidden;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo .myOfferDetBillInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo .myOfferDetBillInfoLeft .myOfferDetBillInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo .myOfferDetBillInfoLeft .myOfferDetBillInfoItem .myOfferDetBillInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo .myOfferDetBillInfoLeft .myOfferDetBillInfoItem .myOfferDetBillInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo .myOfferDetBillInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo .myOfferDetBillInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetAttach {
        width: 982px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetAttach .myOfferDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetAttach .myOfferDetAttachInfo {
        padding: 0 10px;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetAttach .myOfferDetAttachInfo img {
        display: block;
        width: 92px;
        height: 108px;
        margin-bottom: 10px;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetAttach .myOfferDetAttachInfo .myOfferDetAttachDes {
        width: 92px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBtn .myOfferDetBtnBack {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        border-radius: 4px;
    }
</style>
