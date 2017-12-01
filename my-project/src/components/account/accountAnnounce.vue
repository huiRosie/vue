<template>
    <div class="accountAnnounce">
        <ul class="accAnnMain">
            <li class="accAnnItem accAnnTitle">
                <div class="accAnnItemNav accAnnItemType">汇票类型</div>
                <div class="accAnnItemNav accAnnItemTerm">交易方式</div>
                <div class="accAnnItemNav accAnnItemIsti">承兑机构</div>
                <div class="accAnnItemNav accAnnItemMoney">票面金额</div>
                <div class="accAnnItemNav accAnnItemPub">发布时间</div>
                <div class="accAnnItemNav accAnnItemDeadline">到期时间</div>
                <div class="accAnnItemNav accAnnItemOperate">操作</div>
            </li>
            <li class="accAnnItem">
                <div class="accAnnItemNav accAnnItemType">汇票类型</div>
                <div class="accAnnItemNav accAnnItemTerm">交易方式</div>
                <div class="accAnnItemNav accAnnItemIsti">承兑机构</div>
                <div class="accAnnItemNav accAnnItemMoney">票面金额</div>
                <div class="accAnnItemNav accAnnItemPub">发布时间</div>
                <div class="accAnnItemNav accAnnItemDeadline">到期时间</div>
                <div class="accAnnItemNav accAnnItemOperate">
                    <router-link class="accAnnItem_scan" to='/acc/myBillDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AccountAnnounce',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountAnnounce {
        width: 982px;
        height: auto;
    }

    .accountAnnounce .accAnnMain {
        width: 100%;
        height: 100%;
    }

    .accountAnnounce .accAnnMain .accAnnItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav {
        width: 136px;
        text-align: center;
        float: left;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav .accAnnItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:nth-child(4) {
        width: 162px;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:last-child {
        width: 140px;
    }

    .accountAnnounce .accAnnMain .accAnnTitle {
        color: white;
        background: #ff8000;
    }
</style>
