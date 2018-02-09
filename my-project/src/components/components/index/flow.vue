<template>
    <div class="flow">
            <div class="flowBox">
                <div class="flowSub">
                    <h2 class="flowTitle">电票交易流程：</h2>
                    <!-- <img src="../../../assets/operation.png"/> -->
                </div>
                <ul class="flowList">
                    <li class="flowItem">
                        <img src="../../../assets/1.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">卖方发布汇票</h3>
                            <p class="flowItemDes">卖方通过网站发布汇票信息</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../../assets/2.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">达成协议</h3>
                            <p class="flowItemDes">双方达成交易协议</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../../assets/3.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">买方付款</h3>
                            <p class="flowItemDes">买方完成线下付款</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../../assets/4.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">卖方背书</h3>
                            <p class="flowItemDes">卖方通过网银完成背书</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../../assets/5.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">买方签收</h3>
                            <p class="flowItemDes">买方通过网银签收，完成交易</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Flow',
        data() { 
            return {

            }
        }
    }
</script>

<style scoped>
    .flow {
        min-width: 1280px;
        height: 108px;
        background: white;
    }

    .flow .flowBox {
        width: 1280px;
        height: 108px;
        margin: 0 auto;
        overflow: hidden;
    }

    .flow .flowBox .flowSub {
        float: left;
        width: 130px;
        margin-top: 13px;
    }

    .flow .flowBox .flowSub .flowTitle {
        font-size: 18px;
        color: #444;
        height: 29px;
        line-height: 29px;
        margin-top: 14px;
    }

    .flow .flowBox .flowSub img {
        display: block;
    }

    .flow .flowBox .flowList {
        float: left;
        padding: 31px 0;
    }

    .flow .flowBox .flowList .flowItem {
        float: left;
        margin-right: 63px;
    }

    .flow .flowBox .flowList .flowItem img {
        display: block;
        float: left;
        margin-right: 5px;
    }

    .flow .flowBox .flowList .flowItem .flowDes {
        float: left;
    }

    .flow .flowBox .flowList .flowItem .flowDes .flowItemTitle {
        font-size: 14px;
        color: #444;
        height: 26px;
        line-height: 26px;
    }

    .flow .flowBox .flowList .flowItem .flowDes .flowItemDes {
        font-size: 12px;
        color: #878787;
        height: 18px;
        line-height: 18px;
    }

    .flow .flowBox .flowList .flowItem:last-child {
        margin: 0;
    }

    .flow .flowBox .flowList .flowItem:last-child img {
        margin-right: 6px;
    }

</style>


