<template>
    <div class="accountOffer">
        <ul class="accOfferMain">
            <li class="accOfferItem accOfferTitle">
                <div class="accOfferItemNav accOfferItemType">汇票类型</div>
                <div class="accOfferItemNav accOfferItemTerm">交易方式</div>
                <div class="accOfferItemNav accOfferItemIsti">承兑机构</div>
                <div class="accOfferItemNav accOfferItemMoney">票面金额</div>
                <div class="accOfferItemNav accOfferItemPub">发布时间</div>
                <div class="accOfferItemNav accOfferItemStatus">竞价状态</div>
                <div class="accOfferItemNav accOfferItemOperate">操作</div>
            </li>
            <li class="accOfferItem">
                <div class="accOfferItemNav accOfferItemType">汇票类型</div>
                <div class="accOfferItemNav accOfferItemTerm">交易方式</div>
                <div class="accOfferItemNav accOfferItemIsti">承兑机构</div>
                <div class="accOfferItemNav accOfferItemMoney">票面金额</div>
                <div class="accOfferItemNav accOfferItemPub">发布时间</div>
                <div class="accOfferItemNav accOfferItemStatus">竞价中</div>
                <div class="accOfferItemNav accOfferItemOperate">
                    <router-link class="accOfferItem_scan" to='/acc/myOfferDet'>查看详情</router-link>
                </div>
            </li>
            <li class="accOfferItem">
                <div class="accOfferItemNav accOfferItemType">汇票类型</div>
                <div class="accOfferItemNav accOfferItemTerm">交易方式</div>
                <div class="accOfferItemNav accOfferItemIsti">承兑机构</div>
                <div class="accOfferItemNav accOfferItemMoney">票面金额</div>
                <div class="accOfferItemNav accOfferItemPub">发布时间</div>
                <div class="accOfferItemNav accOfferItemStatus">竞价失败</div>
                <div class="accOfferItemNav accOfferItemOperate">
                    <router-link class="accOfferItem_scan" to='/acc/myOfferDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AccountOffer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountOffer {
        width: 982px;
        height: auto;
    }

    .accountOffer .accOfferMain {
        width: 100%;
        height: 100%;
    }

    .accountOffer .accOfferMain .accOfferItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav {
        width: 136px;
        text-align: center;
        float: left;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav .accOfferItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav:nth-child(4) {
        width: 162px;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav:last-child {
        width: 140px;
    }

    .accountOffer .accOfferMain .accOfferTitle {
        color: white;
        background: #ff8000;
    }
</style>
