<template>
    <div class="inDetail">
        <div class="inDetContent">
            <h2 class="inDetTitle">
                <router-link to="/in">我要收票</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="inDetMain">
                <!--汇票信息-->
                <div class="inDetBill">
                    <h3 class="inDetBillTitle">汇票信息</h3>
                    <div class="inDetBillInfo">
                        <ul class="inDetBillInfoLeft">
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    10000000
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    0
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    无瑕疵
                                </div>
                            </li>
                        </ul>
                        <div class="inDetBillInfoRight">
                            <img src="../../assets/bill.png"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="inDetAttach">
                    <h3 class="inDetAttachTitle">背书及附件</h3>
                    <div class="inDetAttachInfo">
                        <img src="../../assets/jpg.png"/>
                        <p class="inDetAttachDes">背书.jpg</p>
                    </div>
                </div>
                <!--我要竞价-->
                <div class="inDetBtn">
                    <a class="inDetBtnClick"  @click="modal1 = true">我要竞价</a>
                    <!-- 点击出现弹框 -->
                    <Modal
                        v-model="modal1"
                        title="参与竞价(请输入您的报价)"
                        footer=''
                        class-name="vertical-center-modal">
                        <div slot="header" class="bidPouupTop">
                            <h2 class="bidPouupTopTitle">参与竞价<span> (请输入您的报价)</span></h2>
                            <!-- <div class="bidPouupClose">
                                <img src="../../assets/close.png"/>
                            </div> -->
                        </div>
                        <div class="bidPouupMain">
                            <div class="bidPouupRate">
                                <div class="bidPouupRate_label">
                                    年利率：
                                </div>
                                <div class="bidPouupRate_text">
                                    <input type="text" name="" id="" value="" />
                                    <span>%</span>
                                </div>
                            </div>
                            <div class="bidPouupAdd">
                                <div class="bidPouupAdd_label">
                                    每十万加（元）:
                                </div>
                                <div class="bidPouupAdd_text">
                                    <input type="text" name="" id="" value="" />
                                </div>
                            </div>
                            <div class="bidPouupInterest">
                                <div class="bidPouupInterest_label">
                                    贴息金额（元）:
                                </div>
                                <div class="bidPouupInterest_text">
                                    
                                </div>
                            </div>
                            <div class="bidPouupDiscount">
                                <div class="bidPouupDiscount_label">
                                    贴现金额（元）:
                                </div>
                                <div class="bidPouupDiscount_text">
                                    
                                </div>
                            </div>
                        </div>
                        <div slot="footer" class="bidPouupBtn">
                            <a @click="ok()" class="bidPouupOffer">立即报价</a>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bidpup from './bidpup'

    export default {
        name: 'InDetail',
        data () {
            return {
                modal1: false
            }
        },
        methods:{
            ok () {
                this.$Message.info('点击了确定');
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .inDetail {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .inDetail .inDetContent {
        width: 1280px;
        margin: 0 auto;
    }

    .inDetail .inDetContent .inDetTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .inDetail .inDetContent .inDetTitle a:hover {
        color: #ff8000;
    }

    .inDetail .inDetContent .inDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .inDetail .inDetContent .inDetMain .inDetBill {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #ff8000;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft {
        width: 520px;
        height: 326px;
        float: left;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft .inDetBillInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 31px;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft .inDetBillInfoItem .inDetBillInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft .inDetBillInfoItem .inDetBillInfoItem_text {
        width: 360px;
        height: 20px;
        float: left;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoRight {
        width: 570px;
        height: 326px;
        float: left;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoRight img {
        display: block;
        width: 570px;
        height: 326px;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #ff8000;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachInfo {
        padding: 0 10px;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachInfo img {
        display: block;
        width: 92px;
        height: 108px;
        margin-bottom: 10px;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachInfo .inDetAttachDes {
        width: 92px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }

    .inDetail .inDetContent .inDetMain .inDetBtn {
        width: 100%;
        height: 58px;
        padding-bottom: 120px;
    }

    .inDetail .inDetContent .inDetMain .inDetBtn .inDetBtnClick {
        display: block;
        width: 300px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        margin: 0 auto;
    }


    /* 弹框 */
    /* 弹框内容 */
    .bidPouupTop {
        width: 488px;
        height:18px;
        margin-bottom: 1px;
        background: white;
    }

    .bidPouupTop .bidPouupTopTitle {
        width: 300px;
        height: 18px;
        float: left;
        color: #ff8000;
        font-size: 16px;
    }

    .bidPouupTop .bidPouupTopTitle span {
        color: #878787;
        font-size: 12px;
    }

    .bidPouupMain {
        width: 424px;
        height: 310px;
        padding: 20px 0;
        background: white;
    }

    .bidPouupMain .bidPouupRate {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_text {
        width: 298px;
        height: 44px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_text input {
        display: block;
        width: 280px;
        height: 42px;
        float: left;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_text span {
        float: left;
        color: #ff8000;
    }

    .bidPouupMain .bidPouupAdd {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupAdd .bidPouupAdd_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupAdd .bidPouupAdd_text {
        width: 298px;
        height: 44px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupAdd .bidPouupAdd_text input {
        display: block;
        width: 280px;
        height: 42px;
        float: left;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouupMain .bidPouupInterest {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_text {
        width: 298px;
        height: 46px;
        float: left;
    }

    .bidPouupMain .bidPouupDiscount {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupDiscount .bidPouupDiscount_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupDiscount .bidPouupDiscount_text {
        width: 298px;
        height: 46px;
        float: left;
    }

    .ivu-modal-footer{
        border: 0;
    }

    .bidPouupBtn {
        width: 240px;
        height: 46px;
        color: white;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        background-color: #ff8000;
    }

    .bidPouupBtn .bidPouupOffer {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
    }
</style>
