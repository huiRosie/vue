<template>
    <div class="myOfferDet">
        <div class="myOfferDetContent">
            <h2 class="myOfferDetTitle">
                <router-link class="accountSubNav" to="/acc/accOffer">我是买家</router-link> >
                <router-link class="accountSubNav" to="/acc/accOffer">交易中</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="myOfferDetMain">
                <!--汇票信息-->
                <div class="myOfferDetBill">
                    <h3 class="myOfferDetBillTitle">汇票信息<span class="myOfferDetBillStatus">交易中</span></h3>
                    <div class="myOfferDetBillInfo">
                        <ul class="myOfferDetBillInfoLeft">
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myOfferDetBillInfoItem">
                                <div class="myOfferDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="myOfferDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                        </ul>
                        <div class="myOfferDetBillInfoRight">
                            <img src="../../assets/bill.png"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="myOfferDetAttach">
                    <h3 class="myOfferDetAttachTitle">背书及附件</h3>
                    <div class="myOfferDetAttachInfo">
                        <img src="../../assets/jpg.png"/>
                        <p class="myOfferDetAttachDes">背书.jpg</p>
                    </div>
                </div>
                <!--我要竞价-->
                <div class="myOfferDetBtn">
                    <a class="myOfferDetBtnBack">放弃交易</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyOfferDet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
        color: #ff8000;
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
        width: 947px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        margin-left: 30px;
        border-left: 5px solid #ff8000;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillTitle .myOfferDetBillStatus {
        display: block;
        float: right;
        width: 74px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        font-weight: 100;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .myOfferDet .myOfferDetContent .myOfferDetMain .myOfferDetBill .myOfferDetBillInfo {
        width: 1190px;
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
        width: 1220px;
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
        border-left: 5px solid #ff8000;
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
        height: 58px;
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
        background: #ff8000;
        font-size: 16px;
        border-radius: 4px;
    }
</style>
