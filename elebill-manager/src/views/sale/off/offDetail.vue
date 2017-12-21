<template>
    <div class="offDet">
        <div class="topNav">
            <router-link class="topNavLink" to='/sale'>出票中心</router-link> > 
            <router-link class="topNavLink" to='/off'>已完成的汇票</router-link> > 
            <span>汇票详情</span>
        </div>
        <div class="offDetMain">
            <!--汇票信息-->
                <div class="offDet">
                    <h3 class="offDetTitle">汇票信息</h3>
                    <div class="offDetInfo">
                        <ul class="offDetInfoLeft">
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    票据号：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="offDetInfoItem">
                                <div class="offDetInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="offDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                        </ul>
                        <div class="offDetInfoRight">
                            <img src="../../../assets/images/bill.png"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="offDetAttach">
                    <h3 class="offDetAttachTitle">背书及附件</h3>
                    <div class="offDetAttachInfo">
                        <img src="../../../assets/images/jpg.png"/>
                    </div>
                </div>
                <!-- 买家信息 -->
                <div class="offDetBuyer">
                    <h3 class="offDetBuyerTitle">买家信息</h3>
                    <ul class="offDetBuyerInfo">
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">购买用户：</div>
                            <div class="offDetBuyerItem_text">谢松淼</div>
                        </li>
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">报价利率：</div>
                            <div class="offDetBuyerItem_text">5%</div>
                        </li>
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">每十万加（元）：</div>
                            <div class="offDetBuyerItem_text">1000</div>
                        </li>
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">贴息金额（元）：</div>
                            <div class="offDetBuyerItem_text">1000</div>
                        </li>
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">联系电话：</div>
                            <div class="offDetBuyerItem_text">15988888888</div>
                        </li>
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">联系邮箱：</div>
                            <div class="offDetBuyerItem_text">15988888888</div>
                        </li>
                        <li class="offDetBuyerItem">
                            <div class="offDetBuyerItem_label">贴现金额（万元）：</div>
                            <div class="offDetBuyerItem_text">15988888888</div>
                        </li>
                    </ul>
                </div>
                <!--我要竞价-->
                <div class="offDetBtn">
                    <a class="offDetBtnFail">交易失败</a>
                    <a class="offDetBtnSuccess">交易成功</a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'offDet',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .offDet {
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

    .offDet .offDetMain {
        width: 100%;
        height: 653px;
        background: white;
    }

    .offDet .offDetMain .offDet {
        width: 1220px;
        height: auto;
        padding: 20px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .offDet .offDetMain .offDet .offDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 20px;
        border-left: 5px solid #ff8000;
    }

    .offDet .offDetMain .offDet .offDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .offDet .offDetMain .offDet .offDetInfo .offDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .offDet .offDetMain .offDet .offDetInfo .offDetInfoLeft .offDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .offDet .offDetMain .offDet .offDetInfo .offDetInfoLeft .offDetInfoItem .offDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .offDet .offDetMain .offDet .offDetInfo .offDetInfoLeft .offDetInfoItem .offDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .offDet .offDetMain .offDet .offDetInfo .offDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .offDet .offDetMain .offDet .offDetInfo .offDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }
    /* 背书及附件 */
    .offDet .offDetMain .offDetAttach {
        width: 1220px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .offDet .offDetMain .offDetAttach .offDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 20px;
        border-left: 5px solid #ff8000;
    }

    .offDet .offDetMain .offDetAttach .offDetAttachInfo {
        padding: 0 10px;
    }

    .offDet .offDetMain .offDetAttach .offDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    /* 报价信息 */
    .offDet .offDetMain .offDetBuyer {
        width: 1220px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .offDet .offDetMain .offDetBuyer .offDetBuyerTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #ff8000;
    }

    .offDet .offDetMain .offDetBuyer .offDetBuyerInfo {
        padding: 0 10px;
        overflow: hidden;
        width: 920px;
        height: auto;
    }
    
    .offDet .offDetMain .offDetBuyer .offDetBuyerInfo .offDetBuyerItem{
        width: 225px;
        height: 20px;
        line-height: 20px;
        float: left;
        margin-bottom: 12px;
    }
    
    .offDet .offDetMain .offDetBuyer .offDetBuyerInfo .offDetBuyerItem .offDetBuyerItem_label,
    .offDet .offDetMain .offDetBuyer .offDetBuyerInfo .offDetBuyerItem .offDetBuyerItem_text{
        float: left;
    }
    
    /* 底部按钮 */
    .offDet .offDetMain .offDetBtn {
        width: 540px;
        height: 78px;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .offDet .offDetMain .offDetBtn .offDetBtnFail,
    .offDet .offDetMain .offDetBtn .offDetBtnSuccess {
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

    .offDet .offDetMain .offDetBtn .offDetBtnFail{
        margin-right: 60px;
    }    

</style>
