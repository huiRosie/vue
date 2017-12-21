<template>
    <div class="saleODet">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>出票中心</router-link> > 
            <router-link class="topNavLink" to='/'>出售中的汇票</router-link> > 
            <span>报价详情</span>
        </div>
        <ul class="saleODetMainTop">
            <li class="saleODetMainTopItem">
                <div class="saleODetMainTopItem_label">出票人全称：</div>
                <div class="saleODetMainTopItem_text">中国建设银行硚口支行</div>
            </li>
            <li class="saleODetMainTopItem">
                <div class="saleODetMainTopItem_label">票面金额（元）：</div>
                <div class="saleODetMainTopItem_text">￥100000000.00</div>
            </li>
            <li class="saleODetMainTopItem">
                <div class="saleODetMainTopItem_label">剩余天数（天）：</div>
                <div class="saleODetMainTopItem_text">80</div>
            </li>
        </ul>
        <ul class="saleODetMain">
            <li class="saleODetItem saleODetTitle">
                <div class="saleODetItemNav saleODetItemName">用户名称</div>
                <div class="saleODetItemNav saleODetItemRate">报价利率</div>
                <div class="saleODetItemNav saleODetItemAdd">每十万加（元）</div>
                <div class="saleODetItemNav saleODetItemInterest">贴息金额</div>
                <div class="saleODetItemNav saleODetItemDiscount">贴现金额</div>
                <div class="saleODetItemNav saleODetItemTel">联系电话</div>
                <div class="saleODetItemNav saleODetItemOperate">操作</div>
            </li>
            <li class="saleODetItem">
                <div class="saleODetItemNav saleODetItemName">谢松淼</div>
                <div class="saleODetItemNav saleODetItemRate">5%</div>
                <div class="saleODetItemNav saleODetItemAdd">15</div>
                <div class="saleODetItemNav saleODetItemInterest">￥1200.00</div>
                <div class="saleODetItemNav saleODetItemDiscount">￥980.00</div>
                <div class="saleODetItemNav saleODetItemTel">15688888888</div>
                <div class="saleODetItemNav saleODetItemOperate">
                    <router-link class="saleODetItem_fail" to='/saleDet'>交易失败</router-link>
                    <router-link class="saleODetItem_offer" to='/saleODet'>预选报价</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'saleODet',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .saleODet {
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

    .saleODetMainTop{
        width: 100%;
        height: 51px;
        line-height: 50px;
        color: #fff;
        background: #f71327;
        padding: 0 30px;
        border-bottom: 1px dashed #fff;
    }

    .saleODetMainTop .saleODetMainTopItem{
        float: left;
        margin-right: 124px;
    }

    .saleODetMainTop .saleODetMainTopItem:last-child{
        margin-right: 0;
    }

    .saleODetMainTop .saleODetMainTopItem .saleODetMainTopItem_label,
    .saleODetMainTop .saleODetMainTopItem .saleODetMainTopItem_text{
        float: left;
    }

    .saleODet .saleODetMain {
        width: 100%;
        height: 100%;
    }

    .saleODet .saleODetMain .saleODetItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .saleODet .saleODetMain .saleODetItem .saleODetItemNav {
        width: 128px;
        text-align: center;
        float: left;
    }

    .saleODet .saleODetMain .saleODetItem .saleODetItemOperate {
        width: 214px;
    }

    .saleODet .saleODetMain .saleODetItem .saleODetItemOperate a:hover {
        color: #f71327;
        border: 1px solid #f71327;
    }

    .saleODet .saleODetMain .saleODetItem .saleODetItemNav .saleODetItem_fail {
        display: block;
        width: 82px;
        height: 32px;
        float: left;
        border: 1px solid #999;
        border-radius: 3px;
        margin-right: 10px;
        margin-left: 20px;
    }

    .saleODet .saleODetMain .saleODetItem .saleODetItemNav .saleODetItem_offer {
        display: block;
        width: 82px;
        height: 32px;
        float: left;
        border: 1px solid #999;
        border-radius: 3px;
    }

    .saleODet .saleODetMain .saleODetTitle {
        background: #f71327;
        color: #fff;
        font-size: 16px;
    }
</style>
