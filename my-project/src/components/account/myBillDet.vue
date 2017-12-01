<template>
    <div class="myBillDet">
        <div class="myBillDetContent">
            <h2 class="myBillDetTitle">
                <router-link class="accountSubNav" to="/acc/accAnn">我的发布</router-link> >
                <router-link class="accountSubNav" to="/acc/accAnn">交易中</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="myBillDetMain">
                <!--汇票信息-->
                <div class="myBillDetBill">
                    <h3 class="myBillDetBillTitle">汇票信息</h3>
                    <div class="myBillDetBillInfo">
                        <ul class="myBillDetBillInfoLeft">
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                        </ul>
                        <div class="myBillDetBillInfoRight">
                            <img src="../../assets/bill.png"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="myBillDetAttach">
                    <h3 class="myBillDetAttachTitle">背书及附件</h3>
                    <div class="myBillDetAttachInfo">
                        <img src="../../assets/jpg.png"/>
                        <p class="myBillDetAttachDes">背书.jpg</p>
                    </div>
                </div>
                <!--我要竞价-->
                <div class="myBillDetBtn">
                    <a class="myBillDetBtnBack">撤回汇票</a>
                    <a class="myBillDetBtnFinish">完成交易</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyBillDet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .myBillDet {
        width: 100%;
        height: auto;
        background: #f1f1f1;
    }

    .myBillDet .myBillDetContent {
        width: 982px;
        margin: 0 auto;
    }

    .myBillDet .myBillDetContent .myBillDetTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .myBillDet .myBillDetContent .myBillDetTitle a:hover {
        color: #ff8000;
    }

    .myBillDet .myBillDetContent .myBillDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #ff8000;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft .myBillDetBillInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft .myBillDetBillInfoItem .myBillDetBillInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft .myBillDetBillInfoItem .myBillDetBillInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #ff8000;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachInfo {
        padding: 0 10px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachInfo img {
        display: block;
        width: 92px;
        height: 108px;
        margin-bottom: 10px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachInfo .myBillDetAttachDes {
        width: 92px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBtn {
        width: 520px;
        height: 58px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBtn .myBillDetBtnBack {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        float: left;
        margin-right: 40px;
        border-radius: 4px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBtn .myBillDetBtnFinish {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #d1d1d1;
        font-size: 16px;
        float: left;
        border-radius: 4px;
    }
</style>
