<template>
    <div class="myBuyDet">
        <div class="myBuyDetContent">
            <h2 class="myBuyDetTitle">
                <router-link class="accountSubNav" to="/acc/buy/accBuy/'success'">我是买家</router-link> >
                <router-link class="accountSubNav" to="/acc/buy/accBuy/'success'">我买到的汇票</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="myBuyDetMain">
                <!--汇票信息-->
                <div class="myBuyDetBill">
                    <h3 class="myBuyDetBillTitle">汇票信息
                        <span v-if="billData.billStatus=='publishing'" class="myBuyDetBillStatus">交易中</span>
                    </h3>
                    <div class="myBuyDetBillInfo">
                        <ul class="myBuyDetBillInfoLeft">
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
                                    票据类型：
                                </div>
                                <div class="myBuyDetBillInfoItem_text">
                                    {{billData.billClassify}}
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
                                    汇票到期日：
                                </div>
                                <div class="myBuyDetBillInfoItem_text">
                                    {{billData.billExpire}}
                                </div>
                            </li>
                            <li class="myBuyDetBillInfoItem">
                                <div class="myBuyDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="myBuyDetBillInfoItem_text">
                                    {{billData.billEndorse}}
                                </div>
                            </li>
                            <li class="myBuyDetBillInfoItem">
                                <div class="myBuyDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="myBuyDetBillInfoItem_text">
                                    {{billData.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="myBuyDetBillInfoRight">
                            <img v-if="billData.billImg.indexOf('http://')!=-1||billData.billImg.indexOf('https://')!=-1" :src="billData.billImg"/>
                            <img v-else :src="'http://'+billData.billImg"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="myBuyDetAttach">
                    <h3 class="myBuyDetAttachTitle">背书及附件</h3>
                    <div class="myBuyDetAttachInfo">
                        <img v-if="billData.billEvidence.indexOf('http://')!=-1||billData.billEvidence.indexOf('https://')!=-1" :src="billData.billImg"/>
                        <img v-else :src="'http://'+billData.billEvidence"/>
                        <p class="myBuyDetAttachDes">背书.jpg</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'MyBuyDet',
    data () {
        return {
            billId:'',
            billData:''
        }
    },
    created:function(){
        // this.getBillDet();
    },
    methods:{
        getBillDet:function(){
            //调用接口  获取汇票详情
            var self = this;
            self.billId = self.$route.params.billId;
            console.log(self.billId);      
            self.$http.get(globalData.data.Ip+'/bill/info',{params:{
                billId:self.billId
            }},{emulateJSON:true}).then(function(res){ 
                self.billData = res.data.data;
                console.log(self.billData);                             
            },function(error){
                console.log(error);  
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .myBuyDet {
        width: 100%;
        height: auto;
        background: #f1f1f1;
    }

    .myBuyDet .myBuyDetContent {
        width: 982px;
        margin: 0 auto;
    }

    .myBuyDet .myBuyDetContent .myBuyDetTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .myBuyDet .myBuyDetContent .myBuyDetTitle a:hover {
        color: #f71327;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill {
        width: 982px;
        height: auto;
        padding: 12px 0 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillTitle {
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

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillTitle .myBuyDetBillStatus {
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

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo {
        width: 982px;
        padding-left: 30px;
        height: auto;
        overflow: hidden;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo .myBuyDetBillInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo .myBuyDetBillInfoLeft .myBuyDetBillInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo .myBuyDetBillInfoLeft .myBuyDetBillInfoItem .myBuyDetBillInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo .myBuyDetBillInfoLeft .myBuyDetBillInfoItem .myBuyDetBillInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo .myBuyDetBillInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBill .myBuyDetBillInfo .myBuyDetBillInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetAttach {
        width: 982px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetAttach .myBuyDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetAttach .myBuyDetAttachInfo {
        padding: 0 10px;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetAttach .myBuyDetAttachInfo img {
        display: block;
        width: 92px;
        height: 108px;
        margin-bottom: 10px;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetAttach .myBuyDetAttachInfo .myBuyDetAttachDes {
        width: 92px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .myBuyDet .myBuyDetContent .myBuyDetMain .myBuyDetBtn .myBuyDetBtnBack {
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
