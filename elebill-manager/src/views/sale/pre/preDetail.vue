<template>
    <div class="preDet">
        <div class="topNav">
            <router-link class="topNavLink" to='/sale'>出票中心</router-link> > 
            <router-link class="topNavLink" to='/pre'>我预选的报价</router-link> > 
            <span>汇票详情</span>
        </div>
        <div class="preDetMain">
            <!--汇票信息-->
                <div class="preDet">
                    <h3 class="preDetTitle">汇票信息</h3>
                    <div class="preDetInfo">
                        <ul class="preDetInfoLeft">
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    票据号：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="preDetInfoItem">
                                <div class="preDetInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="preDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                        </ul>
                        <div class="preDetInfoRight">
                            <img src="../../../assets/images/bill.png"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="preDetAttach">
                    <h3 class="preDetAttachTitle">背书及附件</h3>
                    <div class="preDetAttachInfo">
                        <img src="../../../assets/images/jpg.png"/>
                    </div>
                </div>
                <!-- 报价信息 -->
                <div class="preDetOffer">
                    <h3 class="preDetOfferTitle">报价信息</h3>
                    <ul class="preDetOfferInfo">
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">报价用户：</div>
                            <div class="preDetOfferItem_text">谢松淼</div>
                        </li>
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">报价利率：</div>
                            <div class="preDetOfferItem_text">5%</div>
                        </li>
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">每十万加（元）：</div>
                            <div class="preDetOfferItem_text">1000</div>
                        </li>
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">贴息金额（元）：</div>
                            <div class="preDetOfferItem_text">1000</div>
                        </li>
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">联系电话：</div>
                            <div class="preDetOfferItem_text">15988888888</div>
                        </li>
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">联系邮箱：</div>
                            <div class="preDetOfferItem_text">15988888888</div>
                        </li>
                        <li class="preDetOfferItem">
                            <div class="preDetOfferItem_label">贴现金额（万元）：</div>
                            <div class="preDetOfferItem_text">15988888888</div>
                        </li>
                    </ul>
                </div>
                <!--我要竞价-->
                <div class="preDetBtn">
                    <a class="preDetBtnFail">交易失败</a>
                    <a class="preDetBtnSuccess">交易成功</a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'preDet',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .preDet {
        width: 982px;
        height: 696px;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
        margin-bottom: 2px;
    }

    .preDet .preDetMain {
        width: 100%;
        height: 653px;
        background: white;
    }

    .preDet .preDetMain .preDet {
        width: 1220px;
        height: auto;
        padding: 20px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .preDet .preDetMain .preDet .preDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 20px;
        border-left: 5px solid #ff8000;
    }

    .preDet .preDetMain .preDet .preDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .preDet .preDetMain .preDet .preDetInfo .preDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .preDet .preDetMain .preDet .preDetInfo .preDetInfoLeft .preDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .preDet .preDetMain .preDet .preDetInfo .preDetInfoLeft .preDetInfoItem .preDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .preDet .preDetMain .preDet .preDetInfo .preDetInfoLeft .preDetInfoItem .preDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .preDet .preDetMain .preDet .preDetInfo .preDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .preDet .preDetMain .preDet .preDetInfo .preDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }
    /* 背书及附件 */
    .preDet .preDetMain .preDetAttach {
        width: 1220px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .preDet .preDetMain .preDetAttach .preDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 20px;
        border-left: 5px solid #ff8000;
    }

    .preDet .preDetMain .preDetAttach .preDetAttachInfo {
        padding: 0 10px;
    }

    .preDet .preDetMain .preDetAttach .preDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    /* 报价信息 */
    .preDet .preDetMain .preDetOffer {
        width: 1220px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .preDet .preDetMain .preDetOffer .preDetOfferTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #ff8000;
    }

    .preDet .preDetMain .preDetOffer .preDetOfferInfo {
        padding: 0 10px;
        overflow: hidden;
        width: 920px;
        height: auto;
    }
    
    .preDet .preDetMain .preDetOffer .preDetOfferInfo .preDetOfferItem{
        width: 225px;
        height: 20px;
        line-height: 20px;
        float: left;
        margin-bottom: 12px;
    }
    
    .preDet .preDetMain .preDetOffer .preDetOfferInfo .preDetOfferItem .preDetOfferItem_label,
    .preDet .preDetMain .preDetOffer .preDetOfferInfo .preDetOfferItem .preDetOfferItem_text{
        float: left;
    }
    
    /* 底部按钮 */
    .preDet .preDetMain .preDetBtn {
        width: 540px;
        height: 78px;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .preDet .preDetMain .preDetBtn .preDetBtnFail,
    .preDet .preDetMain .preDetBtn .preDetBtnSuccess {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        border-radius: 4px;
        float: left;
    }

    .preDet .preDetMain .preDetBtn .preDetBtnFail{
        margin-right: 60px;
    }    

</style>
