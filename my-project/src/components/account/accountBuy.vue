<template>
    <div class="accountBuy">
        <ul class="accBuyMain">
            <li class="accBuyItem accBuyTitle">
                <div class="accBuyItemNav accBuyItemType">汇票类型</div>
                <div class="accBuyItemNav accBuyItemTerm">交易方式</div>
                <div class="accBuyItemNav accBuyItemIsti">承兑机构</div>
                <div class="accBuyItemNav accBuyItemMoney">票面金额</div>
                <div class="accBuyItemNav accBuyItemPub">发布时间</div>
                <div class="accBuyItemNav accBuyItemOffer">我的报价</div>
                <div class="accBuyItemNav accBuyItemOperate">操作</div>
            </li>
            <li class="accBuyItem">
                <div class="accBuyItemNav accBuyItemType">汇票类型</div>
                <div class="accBuyItemNav accBuyItemTerm">交易方式</div>
                <div class="accBuyItemNav accBuyItemIsti">承兑机构</div>
                <div class="accBuyItemNav accBuyItemMoney">票面金额</div>
                <div class="accBuyItemNav accBuyItemPub">发布时间</div>
                <div class="accBuyItemNav accBuyItemOffer">5%/每十万加1000</div>
                <div class="accBuyItemNav accBuyItemOperate">
                    <router-link class="accBuyItem_scan" to='/acc/myOfferDet'>查看详情</router-link>
                </div>
            </li>
            <li class="accBuyItem">
                <div class="accBuyItemNav accBuyItemType">汇票类型</div>
                <div class="accBuyItemNav accBuyItemTerm">交易方式</div>
                <div class="accBuyItemNav accBuyItemIsti">承兑机构</div>
                <div class="accBuyItemNav accBuyItemMoney">票面金额</div>
                <div class="accBuyItemNav accBuyItemPub">发布时间</div>
                <div class="accBuyItemNav accBuyItemDeadline">到期时间</div>
                <div class="accBuyItemNav accBuyItemOperate">
                    <router-link class="accBuyItem_scan" to='/acc/myOfferDet'>查看详情</router-link>
                </div>
            </li>
            <li class="accBuyItem">
                <div class="accBuyItemNav accBuyItemType">汇票类型</div>
                <div class="accBuyItemNav accBuyItemTerm">交易方式</div>
                <div class="accBuyItemNav accBuyItemIsti">承兑机构</div>
                <div class="accBuyItemNav accBuyItemMoney">票面金额</div>
                <div class="accBuyItemNav accBuyItemPub">发布时间</div>
                <div class="accBuyItemNav accBuyItemDeadline">到期时间</div>
                <div class="accBuyItemNav accBuyItemOperate">
                    <router-link class="accBuyItem_scan" to='/acc/myOfferDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AccountBuy',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountBuy {
        width: 982px;
        height: auto;
    }

    .accountBuy .accBuyMain {
        width: 100%;
        height: 100%;
    }

    .accountBuy .accBuyMain .accBuyItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav {
        width: 136px;
        text-align: center;
        float: left;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav .accBuyItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav:nth-child(4) {
        width: 162px;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav:last-child {
        width: 140px;
    }

    .accountBuy .accBuyMain .accBuyTitle {
        color: white;
        background: #ff8000;
    }
</style>
