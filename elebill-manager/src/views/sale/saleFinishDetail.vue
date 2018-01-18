<template>
    <div class="saleFDet">
        <div class="topNav">
            <span>出票中心</span> > 
            <router-link class="topNavLink" to='/out/sale/finish'>已完成的汇票</router-link> > 
            <span>汇票详情</span>
        </div>
        <div class="saleFDetMain">
            <!--汇票信息-->
                <div class="saleFDet">
                    <h3 class="saleFDetTitle">汇票信息</h3>
                    <div class="saleFDetInfo">
                        <ul class="saleFDetInfoLeft">
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    票据号：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.quoteNo}}
                                </div>
                            </li>
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.billUserName}}
                                </div>
                            </li>
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.billClassify}}
                                </div>
                            </li>
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.billMoney}}
                                </div>
                            </li>
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.billExpire}}
                                </div>
                            </li>
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.billEndorse}}
                                </div>
                            </li>
                            <li class="saleFDetInfoItem">
                                <div class="saleFDetInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="saleFDetInfoItem_text">
                                    {{billInfo.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="saleFDetInfoRight">
                            <img v-if="billInfo.billImg!=null&&billInfo.billImg.indexOf('http://')==-1&&billInfo.billImg.indexOf('https://')==-1" :src="'http://'+billInfo.billImg"/>
                            <img v-else :src="billInfo.billImg"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="saleFDetAttach">
                    <h3 class="saleFDetAttachTitle">背书及附件</h3>
                    <div class="saleFDetAttachInfo">
                        <img v-if="billInfo.billEvidence!=null&&billInfo.billEvidence.indexOf('http://')==-1&&billInfo.billEvidence.indexOf('https://')==-1" :src="'http://'+billInfo.billEvidence"/>
                        <img v-else :src="billInfo.billEvidence"/>
                    </div>
                </div>
                <!--报价信息-->
                <div class="saleFDetQInfo">
                    <h3 class="saleFDetQInfoTitle">报价信息</h3>
                    <ul class="saleFDetQInfoList">
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">购买用户：</div>
                            <div class="saleFDetQInfoItem_text">{{billInfo.userName}}</div>
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">报价利率：</div>
                            <div class="saleFDetQInfoItem_text">{{billInfo.quoteRate}}</div>
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">每10万加（元）：</div>
                            <div class="saleFDetQInfoItem_text">{{billInfo.quoteIncrement}}</div>
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">贴息金额（元）：</div>
                            <div class="saleFDetQInfoItem_text">{{billInfo.quoteDiscountAmount}}</div>
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">联系电话：</div>
                            <div class="saleFDetQInfoItem_text">{{billInfo.userPhone}}</div>
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">联系邮箱：</div>
                            <div v-if="billInfo.userEmail!=null" class="saleFDetQInfoItem_text">{{billInfo.userEmail}}</div>
                            <div v-else class="saleFDetQInfoItem_text">未填写</div>
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">贴现金额（元）：</div>
                            <div class="saleFDetQInfoItem_text">{{billInfo.quoteAmount}}</div>
                            <!-- <div class="saleFDetQInfoItem_text">{{(billInfo.quoteAmount/10000).toFixed(2)}}</div> -->
                        </li>
                        <li class="saleFDetQInfoItem">
                            <div class="saleFDetQInfoItem_label">交易情况：</div>
                            <div v-if="billInfo.quoteStatus=='fail'" class="saleFDetQInfoItem_text" style="color:#f71327;font-weight:600;">交易失败</div>
                            <div v-if="billInfo.quoteStatus=='success'" class="saleFDetQInfoItem_text" style="color:#f71327;font-weight:600;">交易成功</div>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
import {fetchQuoteBillDetail} from '../../assets/js/billApi'

export default {
    name: 'saleFDet',
    data () {
        return {
            quoteId:'',
            billInfo:''
        }
    },
    created:function(){
        this.getBillDetail();
    },
    methods:{
        getBillDetail:function(){
            var self = this;
            self.quoteId = self.$route.params.quoteId;
            fetchQuoteBillDetail({
                quoteId:self.quoteId
            }).then(function(res){
                // console.log(res);
                self.billInfo = res.data.data;
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .saleFDet {
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

    .saleFDet .saleFDetMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .saleFDet .saleFDetMain .saleFDet {
        width: 982px;
        height: auto;
        padding: 20px 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo .saleFDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo .saleFDetInfoLeft .saleFDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo .saleFDetInfoLeft .saleFDetInfoItem .saleFDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo .saleFDetInfoLeft .saleFDetInfoItem .saleFDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo .saleFDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .saleFDet .saleFDetMain .saleFDet .saleFDetInfo .saleFDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .saleFDet .saleFDetMain .saleFDetAttach {
        width: 982px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleFDet .saleFDetMain .saleFDetAttach .saleFDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .saleFDet .saleFDetMain .saleFDetAttach .saleFDetAttachInfo {
        padding: 0 10px;
    }

    .saleFDet .saleFDetMain .saleFDetAttach .saleFDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    .saleFDet .saleFDetMain .saleFDetQInfo {
        width: 982px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleFDet .saleFDetMain .saleFDetQInfo .saleFDetQInfoTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .saleFDet .saleFDetMain .saleFDetQInfo .saleFDetQInfoList {
        padding: 0 10px;
    }

    .saleFDet .saleFDetMain .saleFDetQInfo .saleFDetQInfoList .saleFDetQInfoItem{
        width: 220px;
        height: 20px;
        line-height: 20px;
        float: left;
        margin-bottom: 10px;
    }

    .saleFDet .saleFDetMain .saleFDetQInfo .saleFDetQInfoList .saleFDetQInfoItem .saleFDetQInfoItem_label{
        float: left;
    }

    .saleFDet .saleFDetMain .saleFDetQInfo .saleFDetQInfoList .saleFDetQInfoItem .saleFDetQInfoItem_text{
        float: left;
    }

    .saleFDet .saleFDetMain .saleOrdDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleFDet .saleFDetMain .saleOrdDetBtn .saleFDetBtnSuccess{
        margin-right: 40px;
    }    

    .saleFDet .saleFDetMain .saleOrdDetBtn .saleFDetBtnSuccess, 
    .saleFDet .saleFDetMain .saleOrdDetBtn .saleFDetBtnFail{
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

    .saleFDet .saleFDetMain .salePubDetBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleFDet .saleFDetMain .salePubDetBtn .saleFDetBtnAban{
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
