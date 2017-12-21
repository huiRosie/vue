<template>
    <div class="sale">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>出票中心</router-link> > 
            <span>出售中的汇票</span>
        </div>
        <ul class="saleMain">
            <li class="saleItem saleTitle">
                <div class="saleItemNav saleItemType">汇票类型</div>
                <div class="saleItemNav saleItemTerm">交易方式</div>
                <div class="saleItemNav saleItemIsti">承兑机构</div>
                <div class="saleItemNav saleItemMoney">票面金额</div>
                <div class="saleItemNav saleItemDeadline">到期时间</div>
                <div class="saleItemNav saleItemNum">竞价数</div>
                <div class="saleItemNav saleItemOperate">操作</div>
            </li>
            <li class="saleItem">
                <div class="saleItemNav saleItemType">电票</div>
                <div class="saleItemNav saleItemTerm">卖断</div>
                <div class="saleItemNav saleItemIsti">中国建设银行</div>
                <div class="saleItemNav saleItemMoney">1000万</div>
                <div class="saleItemNav saleItemDeadilne">2017/12/1</div>
                <div class="saleItemNav saleItemNum">3</div>
                <div class="saleItemNav saleItemOperate">
                    <router-link class="saleItem_scan" to='/saleDet'>汇票详情</router-link>
                    <router-link class="saleItem_offer" to='/saleODet'>报价详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Sale',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sale {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
    }

    .sale .saleMain {
        width: 100%;
        height: 100%;
    }

    .sale .saleMain .saleItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .sale .saleMain .saleItem .saleItemNav {
        width: 136px;
        text-align: center;
        float: left;
    }

    .sale .saleMain .saleItem .saleItemNum {
        width: 110px;
    }

    .sale .saleMain .saleItem .saleItemOperate {
        width: 176px;
    }

    .sale .saleMain .saleItem .saleItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .sale .saleMain .saleItem .saleItemNav .saleItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        float: left;
        border: 1px solid #999;
        border-radius: 3px;
        margin-right: 10px;
    }

    .sale .saleMain .saleItem .saleItemNav .saleItem_offer {
        display: block;
        width: 82px;
        height: 32px;
        float: left;
        border: 1px solid #999;
        border-radius: 3px;
    }

    .sale .saleMain .saleTitle {
        font-size: 16px;
        background: #fdeaea;
    }
</style>
