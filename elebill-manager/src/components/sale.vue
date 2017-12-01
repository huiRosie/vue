<template>
    <div class="sale">
        <Breadcrumb class="Breadcrumb" separator=">">
            <BreadcrumbItem to="/">出票中心</BreadcrumbItem>
            <BreadcrumbItem>出售中的汇票</BreadcrumbItem>
        </Breadcrumb>
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
                <div class="saleItemNav saleItemType">汇票类型</div>
                <div class="saleItemNav saleItemTerm">交易方式</div>
                <div class="saleItemNav saleItemIsti">承兑机构</div>
                <div class="saleItemNav saleItemMoney">票面金额</div>
                <div class="saleItemNav saleItemDeadilne">2017/12/1</div>
                <div class="saleItemNav saleItemNum">3</div>
                <div class="saleItemNav saleItemOperate">
                    <router-link class="saleItem_scan" to='/acc/myBillDet'>汇票详情</router-link>
                    <router-link class="saleItem_offer" to='/acc/myBillDet'>报价详情</router-link>
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

    .Breadcrumb{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
    }

    .ivu-breadcrumb > span:last-child{
        font-weight: 100;
        color: #555;
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

    /* .sale .saleMain .saleItem .saleItemNav:nth-child(4) {
        width: 162px;
    }

    .sale .saleMain .saleItem .saleItemNav:last-child {
        width: 140px;
    } */

    .sale .saleMain .saleTitle {
        background: #ffeedd;
    }
</style>
