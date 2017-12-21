<template>
    <div class="saleDet">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>出票中心</router-link> > 
            <router-link class="topNavLink" to='/'>出售中的汇票</router-link> > 
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
                                    1315246868985
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                            <li class="saleDetInfoItem">
                                <div class="saleDetInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="saleDetInfoItem_text">
                                    1315246868985
                                </div>
                            </li>
                        </ul>
                        <div class="saleDetInfoRight">
                            <img src="../../../assets/images/bill.png"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="saleDetAttach">
                    <h3 class="saleDetAttachTitle">背书及附件</h3>
                    <div class="saleDetAttachInfo">
                        <img src="../../../assets/images/jpg.png"/>
                    </div>
                </div>
                <!--我要竞价-->
                <div class="saleDetBtn">
                    <a class="saleDetBtnAban">放弃交易</a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'saleDet',
  data () {
    return {
      
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
        width: 1220px;
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
        border-left: 5px solid #ff8000;
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
        width: 1220px;
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
        border-left: 5px solid #ff8000;
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

    .saleDet .saleDetMain .saleDetBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .saleDet .saleDetMain .saleDetBtn .saleDetBtnAban {
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
