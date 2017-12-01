<template>
    <div class="in">
        <div class="inContent">
            <h2 class="inTitle">我要收票</h2>
            <div class="inMain">
                <div class="inSear">
                    <div class="inSearLeft">
                        <h3 class="inSearPriceTitle">面额筛选</h3>
                        <ul class="inSearPriceList">
                            <li class="inSearPriceItem inSearPriceItemActive">全部</li>
                            <li class="inSearPriceItem">一万以内</li>
                            <li class="inSearPriceItem">一万至十万</li>
                            <li class="inSearPriceItem">十万至一百万</li>
                            <li class="inSearPriceItem">百万以上</li>
                        </ul>
                    </div>
                    <div class="inSearRight">
                        <h3 class="inSearCondTitle">条件查找</h3>
                        <ul class="inSearCondList">
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle inSearType">票据类型</h4>
                                <div class="inSearCondItemListItem inSearTypeItem"><input type="radio" name="billType" id="" value="" />全部</div>
                                <div class="inSearCondItemListItem inSearTypeItem"><input type="radio" name="billType" id="" value="" />电票</div>
                                <div class="inSearCondItemListItem inSearTypeItem"><input type="radio" name="billType" id="" value="" />商票</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">交易方式</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="trade" id="" value="" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="trade" id="" value="" />现票卖断</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="trade" id="" value="" />预约出售</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">汇票状态</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" id="" value="" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" id="" value="" />发布中</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" id="" value="" />交易中</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" id="" value="" />交易成功</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">承兑机构</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />国股</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />城商</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />三农</div>
                                <div class="inSearchWhite"></div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />村镇</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />外资</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />财务公司</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" id="" value="" />商票</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">票据特点</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="trade" id="" value="" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="trade" id="" value="" />足月</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="trade" id="" value="" />不足月</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">所在地区</h4>
                                <div class="inSearCondItemListItem">全部</div>
                                <div class="inSearCondItemListItem">预约出售</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--汇票列表-->
                <ul class="inBill">
                    <li class="inBillItem">
                        <div class="inBillItem_type">汇票类型</div>
                        <div class="inBillItem_trade">交易方式</div>
                        <div class="inBillItem_institution">承兑机构</div>
                        <div class="inBillItem_money">票面金额</div>
                        <div class="inBillItem_pubtime">发布时间</div>
                        <div class="inBillItem_deadline">到期时间</div>
                        <div class="inBillItem_area">地区</div>
                        <div class="inBillItem_num">竞价数</div>
                        <div class="inBillItem_status">状态</div>
                        <div class="inBillItem_operate">操作</div>
                    </li>
                    <li class="inBillItem">
                        <div class="inBillItem_type">电票</div>
                        <div class="inBillItem_trade">现票卖断</div>
                        <div class="inBillItem_institution">国股</div>
                        <div class="inBillItem_money">￥100000000.00</div>
                        <div class="inBillItem_pubtime">2017/11/23</div>
                        <div class="inBillItem_deadline">2018/01/23</div>
                        <div class="inBillItem_area">武汉洪山</div>
                        <div class="inBillItem_num">2</div>
                        <div class="inBillItem_status">发布中</div>
                        <div class="inBillItem_operate">
                            <router-link class="inBillItem_operate_link" to="/inDet">参与竞价</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'In',
  data () {
    return {
      msg5: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .in {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .in .inContent {
        width: 1280px;
        margin: 0 auto;
    }

    .in .inContent .inTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        color: #555;
        font-size: 14px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .in .inContent .inMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .in .inContent .inMain .inSear {
        width: 1124px;
        height: auto;
        margin: 0 auto 50px;
        overflow: hidden;
    }

    .in .inContent .inMain .inSear .inSearLeft {
        width: 252px;
        height: 465px;
        float: left;
        background-image: linear-gradient(152deg, rgba(253, 189, 21, 0.5), rgba(244, 38, 38, 0.5)), linear-gradient(#ff8000, #ff8000);
    }

    .in .inContent .inMain .inSear .inSearLeft .inSearPriceTitle {
        color: white;
        width: 100%;
        height: 66px;
        line-height: 26px;
        text-align: center;
        padding: 20px 0;
        font-size: 18px;
        font-weight: 500;
    }

    .in .inContent .inMain .inSear .inSearLeft .inSearPriceList {
        width: 136px;
        height: auto;
        margin: 0 auto;
    }

    .in .inContent .inMain .inSear .inSearLeft .inSearPriceList .inSearPriceItem {
        width: 136px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 16px;
        border-radius: 5px;
        color: #555;
        background: white;
        margin-bottom: 30px;
        cursor: pointer;
    }

    .in .inContent .inMain .inSear .inSearLeft .inSearPriceList .inSearPriceItemActive {
        color: white;
        background: #f33c3c;
    }

    .in .inContent .inMain .inSear .inSearLeft .inSearPriceList .inSearPriceItem:hover {
        color: white;
        background: #f33c3c;
    }

    .in .inContent .inMain .inSear .inSearRight {
        float: left;
        width: 872px;
        padding: 22px 0 0 72px;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        color: #555;
        text-indent: 10px;
        border-left: 5px solid #ff8000;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem {
        width: 100%;
        min-height: 42px;
        line-height: 42px;
        margin: 10px;
        overflow: hidden;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearCondItemTitle {
        font-size: 16px;
        color: #555;
        float: left;
        margin-right: 100px;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearCondItemListItem {
        width: 92px;
        float: left;
        margin-right: 89px;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearCondItemListItem input {
        margin-right: 10px;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearchWhite {
        width: 164px;
        height: 1px;
        float: left;
    }

    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearCondItemListItem:last-child,
    .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearCondItemListItem:nth-child(5) {
        margin-right: 0;
    }

    .in .inContent .inMain .inBill {
        width: 1128px;
        height: auto;
        overflow: hidden;
        margin: 50px auto;
        padding-bottom: 50px;
    }

    .in .inContent .inMain .inBill .inBillItem {
        height: 60px;
        line-height: 30px;
        padding: 15px 0;
        font-size: 14px;
        border-bottom: 1px solid #e1e1e1;
    }

    .in .inContent .inMain .inBill .inBillItem div {
        width: 112px;
        float: left;
        text-align: center;
    }

    .in .inContent .inMain .inBill .inBillItem div a {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #999;
        border-radius: 2px;
        margin: 0 auto;
    }

    .in .inContent .inMain .inBill .inBillItem div a:hover {
        color: #ff8000;
    }

    .in .inContent .inMain .inBill .inBillItem:first-child {
        height: 60px;
        line-height: 30px;
        padding: 10px 0;
        font-weight: 500;
        font-size: 16px;
        border-top: 1px solid #e1e1e1;
        border-bottom: 2px solid #999;
    }
</style>
