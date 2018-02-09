<template>
    <div class="saleQDet">
        <div class="topNav">
            <span>出票中心</span> > 
            <router-link class="topNavLink" to='/out/sale/ordering'>预选的报价</router-link> > 
            <span>汇票详情</span>
        </div>
        <div class="saleQDetMain">
            <!--汇票信息-->
                <div class="saleQDet">
                    <h3 class="saleQDetTitle">汇票信息</h3>
                    <div class="saleQDetInfo">
                        <ul class="saleQDetInfoLeft">
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    票据号：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.quoteNo}}
                                </div>
                            </li>
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.billUserName}}
                                </div>
                            </li>
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.billClassify}}
                                </div>
                            </li>
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.billMoney}}
                                </div>
                            </li>
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.billExpire}}
                                </div>
                            </li>
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.billEndorse}}
                                </div>
                            </li>
                            <li class="saleQDetInfoItem">
                                <div class="saleQDetInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="saleQDetInfoItem_text">
                                    {{billInfo.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="saleQDetInfoRight">
                            <img v-if="billInfo.billImg!=null&&billInfo.billImg.indexOf('http://')==-1&&billInfo.billImg.indexOf('https://')==-1" :src="'http://'+billInfo.billImg"/>
                            <img v-else :src="billInfo.billImg"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="saleQDetAttach">
                    <h3 class="saleQDetAttachTitle">背书及附件</h3>
                    <div class="saleQDetAttachInfo">
                        <img v-if="billInfo.billEvidence!=null&&billInfo.billEvidence.indexOf('http://')==-1&&billInfo.billEvidence.indexOf('https://')==-1" :src="'http://'+billInfo.billEvidence"/>
                        <img v-else :src="billInfo.billEvidence"/>
                    </div>
                </div>
                <!--报价信息-->
                <div class="saleQDetQInfo">
                    <h3 class="saleQDetQInfoTitle">报价信息</h3>
                    <ul class="saleQDetQInfoList">
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">报价用户：</div>
                            <div class="saleQDetQInfoItem_text">{{billInfo.userName}}</div>
                        </li>
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">报价利率：</div>
                            <div class="saleQDetQInfoItem_text">{{billInfo.quoteRate}}</div>
                        </li>
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">每10万加（元）：</div>
                            <div class="saleQDetQInfoItem_text">{{billInfo.quoteIncrement}}</div>
                        </li>
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">贴息金额（元）：</div>
                            <div class="saleQDetQInfoItem_text">{{billInfo.quoteDiscountAmount}}</div>
                        </li>
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">联系电话：</div>
                            <div class="saleQDetQInfoItem_text">{{billInfo.userPhone}}</div>
                        </li>
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">联系邮箱：</div>
                            <div v-if="billInfo.userEmail!=null" class="saleQDetQInfoItem_text">{{billInfo.userEmail}}</div>
                            <div v-else class="saleQDetQInfoItem_text">未填写</div>
                        </li>
                        <li class="saleQDetQInfoItem">
                            <div class="saleQDetQInfoItem_label">贴现金额（元）：</div>
                            <div class="saleQDetQInfoItem_text">{{billInfo.quoteAmount}}</div>
                        </li>
                    </ul>
                </div>
                <!--交易成功 失败-->
                <div class="saleOrdDetBtn">
                    <a class="saleQDetBtnSuccess" @click="getOutTradeBill(billInfo.quoteId,'success')">交易成功</a>
                    <a class="saleQDetBtnFail" @click="getOutTradeBill(billInfo.quoteId,'failure')">交易失败</a>
                </div>
        </div>
    </div>
</template>

<script>
import { fetchQuoteBillDetail,fetchOutTradeBill } from '../../assets/js/billApi'

export default {
    name: 'saleQDet',
    data () {
        return {
            quoteId:'',
            billInfo:'',
        }
    },
    created:function(){
        this.getBillDetail();
    },
    methods:{
        // 获取汇票详情
        getBillDetail:function(){
            var self = this;
            self.quoteId = self.$route.params.quoteId;
            // console.log(self.quoteId)
            fetchQuoteBillDetail({
                quoteId:self.quoteId
            }).then(function(res){
                // console.log(res);
                self.billInfo = res.data.data;
            })
        },
        // 交易操作 成功 失败
        getOutTradeBill:function(quoteId,tradeStatus){
            var self = this;
            var content;
            if (tradeStatus=='success') {
                content= '交易成功前请核对您的对公账户是否收到当前汇票款项？';
            } 
            if(tradeStatus=='failure'){
                content = '您确定放弃当前汇票交易吗？'
            }
            self.$Modal.confirm({
                title:'提示',
                content:content,
                onOk:function(){
                    fetchOutTradeBill({
                        quoteId:quoteId,
                        tradeStatus:tradeStatus,
                        quoteDesc:self.quoteDesc
                    }).then(function(res){
                        console.log(res)
                        if (res.data.code==200) {
                            self.$Message.success('操作成功！');
                            self.$router.push('/out/sale/ordering');
                        }
                    })
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .saleQDet {
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

    .saleQDet .saleQDetMain {
        width: 100%;
        height: 638px;
    }

    .saleQDet .saleQDetMain .saleQDet {
        width: 982px;
        height: auto;
        padding: 20px 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo .saleQDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo .saleQDetInfoLeft .saleQDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo .saleQDetInfoLeft .saleQDetInfoItem .saleQDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo .saleQDetInfoLeft .saleQDetInfoItem .saleQDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo .saleQDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .saleQDet .saleQDetMain .saleQDet .saleQDetInfo .saleQDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .saleQDet .saleQDetMain .saleQDetAttach {
        width: 982px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleQDet .saleQDetMain .saleQDetAttach .saleQDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .saleQDet .saleQDetMain .saleQDetAttach .saleQDetAttachInfo {
        padding: 0 10px;
    }

    .saleQDet .saleQDetMain .saleQDetAttach .saleQDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    .saleQDet .saleQDetMain .saleQDetQInfo {
        width: 982px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .saleQDet .saleQDetMain .saleQDetQInfo .saleQDetQInfoTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .saleQDet .saleQDetMain .saleQDetQInfo .saleQDetQInfoList {
        padding: 0 10px;
    }

    .saleQDet .saleQDetMain .saleQDetQInfo .saleQDetQInfoList .saleQDetQInfoItem{
        width: 220px;
        height: 20px;
        line-height: 20px;
        float: left;
        margin-bottom: 10px;
    }

    .saleQDet .saleQDetMain .saleQDetQInfo .saleQDetQInfoList .saleQDetQInfoItem .saleQDetQInfoItem_label{
        float: left;
    }

    .saleQDet .saleQDetMain .saleQDetQInfo .saleQDetQInfoList .saleQDetQInfoItem .saleQDetQInfoItem_text{
        float: left;
    }

    .saleQDet .saleQDetMain .saleOrdDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleQDet .saleQDetMain .saleOrdDetBtn .saleQDetBtnSuccess{
        margin-right: 40px;
    }    

    .saleQDet .saleQDetMain .saleOrdDetBtn .saleQDetBtnSuccess, 
    .saleQDet .saleQDetMain .saleOrdDetBtn .saleQDetBtnFail{
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

    .saleQDet .saleQDetMain .salePubDetBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleQDet .saleQDetMain .salePubDetBtn .saleQDetBtnAban{
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
