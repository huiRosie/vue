<template>
    <div class="saleDet">
        <div class="topNav">
            <span>出票中心</span> > 
            <router-link class="topNavLink" to='/out/sale/publishing'>出售中的汇票</router-link> > 
            <span>汇票详情</span>
        </div>
        <div class="saleDetMain">
            <!--汇票信息-->
                <div class="saleDet">
                    <h3 class="saleDetTitle">汇票信息</h3>
                    <div class="saleDetInfo">
                        <ul class="saleDetInfoLeft">
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    票据号：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billNo}}
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billUserName}}
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billClassify}}
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billMoney}}
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billExpire}}
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billEndorse}}
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    {{billInfo.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="saleDetInfoRight">
                            <img v-if="billInfo.billImg!=null&&billInfo.billImg.indexOf('http://')==-1&&billInfo.billImg.indexOf('https://')==-1" :src="'http://'+billInfo.billImg"/>
                            <img v-else :src="billInfo.billImg"/>
                            <!-- <img v-else :src="billInfo.billImg"/> -->
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="saleDetAttach">
                    <h3 class="saleDetAttachTitle">背书及附件</h3>
                    <div class="saleDetAttachInfo">
                        <img v-if="billInfo.billEvidence!=null&&billInfo.billEvidence.indexOf('http://')==-1&&billInfo.billEvidence.indexOf('https://')==-1" :src="'http://'+billInfo.billEvidence"/>
                        <img v-else :src="billInfo.billEvidence"/>
                        <!-- <img :src="billInfo.billEvidence"/> -->
                    </div>
                </div>
                <!--放弃交易-->
                <div class="salePubDetBtn">
                    <a class="saleDetBtnAban" @click="abanBill(billInfo.billId)">放弃交易</a>
                </div>
        </div>
    </div>
</template>

<script>
import {fetchBillDetail,fetchFailBill} from '../../assets/js/billApi'

export default {
    name: 'saleDet',
    data () {
        return {
            billId:'',
            billInfo:''
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
                self.billInfo = res.data.data;
            })
        },
        abanBill:function(billId){
            var self = this;
            fetchFailBill({
                billId:billId
            }).then(function(res){
                // console.log(res);
                self.$Message.success('操作成功!');
                self.$router.push('/out/sale/finish');
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .saleDet {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
        margin-bottom: 1px;
    }

    .saleDet .saleDetMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .saleDet .saleDetMain .saleDet {
        width: 982px;
        height: auto;
        padding: 20px 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleDet .saleDetMain .saleDet .saleDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo .saleDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo .saleDetInfoLeft .saleDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo .saleDetInfoLeft .saleDetInfoItem .saleDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo .saleDetInfoLeft .saleDetInfoItem .saleDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo .saleDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .saleDet .saleDetMain .saleDet .saleDetInfo .saleDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .saleDet .saleDetMain .saleDetAttach {
        width: 982px;
        height: auto;
        padding: 0 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleDet .saleDetMain .saleDetAttach .saleDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .saleDet .saleDetMain .saleDetAttach .saleDetAttachInfo {
        padding: 0 10px;
    }

    .saleDet .saleDetMain .saleDetAttach .saleDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    .saleDet .saleDetMain .saleOrdDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleDet .saleDetMain .salePubDetBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleDet .saleDetMain .salePubDetBtn .saleDetBtnAban{
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
