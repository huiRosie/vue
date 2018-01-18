<template>
    <div class="in">
        <div class="inContent">
            <h2 class="inTitle">我要收票</h2>
            <div class="inMain">
                <div class="inSear">
                    <div class="inSearLeft">
                        <h3 class="inSearPriceTitle">面额筛选</h3>
                        <ul class="inSearPriceList">
                            <li class="inSearPriceItem " v-for="(moneyItem,index) in moneyList" :key="moneyItem" v-on:click="searchMoney(index)"  
                            v-bind:class="{inSearPriceItemActive:moneyChoose==index}" >{{moneyItem}}</li>
                        </ul>
                    </div>
                    <div class="inSearRight">
                        <h3 class="inSearCondTitle">条件查找</h3>
                        <ul class="inSearCondList">
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle inSearType">票据类型</h4>
                                <div class="inSearCondItemListItem inSearTypeItem">
                                    <input type="radio" name="billType" v-model="picked1" v-on:click='searchType("全部")' @click="clickRadio" id="" value="全部" />全部
                                </div>
                                <div class="inSearCondItemListItem inSearTypeItem">
                                    <input type="radio" name="billType" v-model="picked1" v-on:click='searchType("电票")' @click="clickRadio" id="" value="电票" />电票
                                </div>
                                <div class="inSearCondItemListItem inSearTypeItem">
                                    <input type="radio" name="billType" v-model="picked1" v-on:click='searchType("商票")' @click="clickRadio" id="" value="商票" />商票
                                </div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">交易方式</h4>
                                <div class="inSearCondItemListItem">
                                    <input type="radio" name="trade" v-model="picked2" v-on:click='tradeType("全部")' id="" value="全部" />全部
                                </div>
                                <div class="inSearCondItemListItem">
                                    <input type="radio" name="trade" v-model="picked2" v-on:click='tradeType("现票卖断")' id="" value="现票卖断" />现票卖断
                                </div>
                                <div class="inSearCondItemListItem">
                                    <input type="radio" name="trade" v-model="picked2" v-on:click='tradeType("预约出售")' id="" value="预约出售" />预约出售
                                </div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">汇票状态</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" v-model="picked3" v-on:click='searchStatus("全部")' id="" value="全部" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" v-model="picked3" v-on:click='searchStatus("发布中")' id="" value="发布中" />交易中</div>
                                <!-- <div class="inSearCondItemListItem"><input type="radio" name="billStatus" v-model="picked3" v-on:click='searchStatus("预选中")' id="" value="预选中" />已预选</div> -->
                                <div class="inSearCondItemListItem"><input type="radio" name="billStatus" v-model="picked3" v-on:click='searchStatus("交易成功")' id="" value="交易成功" />交易成功</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">承兑机构</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("全部")' id="" value="全部" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("国股")' id="" value="国股" />国股</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("城商")' id="" value="城商" />城商</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("三农")' id="" value="三农" />三农</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("村镇")' id="" value="村镇" />村镇</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("外资")' id="" value="外资" />外资</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("财务公司")' id="" value="财务公司" />财务公司</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="institution" v-model="picked4" v-on:click='searchOrg("商票")' id="" value="商票" />商票</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">票据特点</h4>
                                <div class="inSearCondItemListItem"><input type="radio" name="feature" v-model="picked5" v-on:click='searchFeature("全部")' id="" value="全部" />全部</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="feature" v-model="picked5" v-on:click='searchFeature("足月")' id="" value="足月" />足月</div>
                                <div class="inSearCondItemListItem"><input type="radio" name="feature" v-model="picked5" v-on:click='searchFeature("不足月")' id="" value="不足月" />不足月</div>
                            </li>
                            <li class="inSearCondItem">
                                <h4 class="inSearCondItemTitle">所在地区</h4>
                                <Cascader class="inSearCondItemListItem inSearArea" @on-change="searchArea" :data="adresData" size="large"></Cascader>
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
                    <li class="inBillItem" v-for="bill in billLists" :key="bill.billId">
                        <div class="inBillItem_type">{{bill.billClassify}}</div>
                        <div class="inBillItem_trade">{{bill.billTradeType}}</div>
                        <div class="inBillItem_institution">{{bill.billAcceptOrg}}</div>
                        <div class="inBillItem_money">￥{{bill.billMoney}}</div>
                        <div class="inBillItem_pubtime">{{bill.publishDate}}</div>
                        <div class="inBillItem_deadline">{{bill.billExpire}}</div>
                        <div class="inBillItem_area">{{bill.billTradeArea}}</div>
                        <div class="inBillItem_num">{{bill.billQuoteCount}}</div>
                        <div class="inBillItem_status" v-if="bill.billStatus=='交易成功'">
                          交易完成
                        </div>
                        <div class="inBillItem_status" v-if="bill.billStatus=='交易失败'">
                          交易关闭
                        </div>
                        <div class="inBillItem_status" v-if="bill.billStatus=='发布中'">
                          交易中
                        </div>
                        <div class="inBillItem_status" v-if="bill.billStatus=='预定中'">
                          已预选
                        </div>
                        <div class="inBillItem_operate">
                            <a v-if="bill.billStatus=='交易成功'" class="inBillItem_operate_link" @click="bidBill(bill.billId)">查看详情</a>
                            <a v-if="bill.billStatus=='交易失败'" class="inBillItem_operate_link" @click="bidBill(bill.billId)">查看详情</a>
                            <a v-if="bill.billStatus=='发布中'" class="inBillItem_operate_link" @click="bidBill(bill.billId)">参与竞价</a>
                            <a v-if="bill.billStatus=='预定中'" class="inBillItem_operate_link" @click="bidBill(bill.billId)">查看详情</a>
                        </div>
                    </li>
                </ul>
                <Page 
                ref="pages"
                class="pageBox" 
                :total="total" 
                v-if="total>10"
                :current="current"
                :pageSize="10"
                @on-change="getBillLists"
                ></Page>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from "../globalData";
import addressData from "../../assets/js/addressData";

export default {
  name: "In",
  data() {
    return {
      billLists: "",
      billMoney: "",
      picked1: "",
      picked2: "",
      picked3: "",
      picked4: "",
      picked5: "",
      picked6: "",
      adresData: addressData,
      current: 1,
      total: 0,
      moneyChoose: 0,
      moneyList: ["全部", "一万以内", "一万至十万", "十万至一百万", "百万以上"],
      typeList:["全部","电票","商票"]
    };
  },
  created: function() {
    var billClassify = this.picked1;
    var billTradeType = this.picked2;
    var billStatus = this.picked3;
    var billAcceptOrg = this.picked4;
    var billFeature = this.picked5;
    var billTradeArea = this.picked6;
    var billMoney = this.billMoney;
    this.getBillList(
      1,
      billMoney,
      billClassify,
      billTradeType,
      billStatus,
      billAcceptOrg,
      billFeature,
      billTradeArea
    );
  },
  methods: {
    getBillList: function(current,billMoney,billClassify,billTradeType,billStatus,billAcceptOrg,
      billFeature,billTradeArea) {
      // var data = {
      //       currentPage: current,
      //       billMoney: billMoney,
      //       billClassify: billClassify,
      //       billTradeType: billTradeType,
      //       billStatus: billStatus,
      //       billAcceptOrg: billAcceptOrg,
      //       billFeature: billFeature,
      //       billTradeArea: billTradeArea,
      //       isCurrentUser: false
      //     };
      //     console.log(data)
      //调用接口
      var self = this;
      self.$http.post(
          globalData.data.Ip + "/bill/page",{
            currentPage: current,
            billMoney: billMoney,
            billClassify: billClassify,
            billTradeType: billTradeType,
            billStatus: billStatus,
            billAcceptOrg: billAcceptOrg,
            billFeature: billFeature,
            billTradeArea: billTradeArea,
            isCurrentUser: false
          },{ emulateJSON:true }
        ).then(
          function(res) {
            self.billLists = res.data.data.recordList;
            self.total = res.data.data.totalCount;
            console.log(res);
          },
          function(error) {
            console.log(error);
          }
        );
    },
    // 分页
    getBillLists: function(current) {
      var self = this;
      var billClassify = self.picked1;
      var billTradeType = self.picked2;
      var billStatus = self.picked3;
      var billAcceptOrg = self.picked4;
      var billFeature = self.picked5;
      var billTradeArea = self.picked6;
      var billMoney = self.billMoney;
      self.getBillList(
        current,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billMoney获取
    searchMoney: function(index) {
      // 改变样式
      this.moneyChoose = index;
      // console.log(index);
      // console.log(this.moneyChoose);
      var billMoney;
      if (index == 0) {
        billMoney = "全部";
      }
      if (index == 1) {
        billMoney = "0,10000";
      }
      if (index == 2) {
        billMoney = "10000,100000";
      }
      if (index == 3) {
        billMoney = "100000,1000000";
      }
      if (index == 4) {
        billMoney = "1000000,Number.MAX_VALUE";
      }
      // 出发筛选事件
      var billClassify = this.picked1;
      var billTradeType = this.picked2;
      var billStatus = this.picked3;
      var billAcceptOrg = this.picked4;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      this.billMoney = billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billClassify获取
    searchType: function(currentSelected) {
      var billClassify = currentSelected;
      var billTradeType = this.picked2;
      var billStatus = this.picked3;
      var billAcceptOrg = this.picked4;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billTradeType获取
    tradeType: function(currentSelected) {
      var billClassify = this.picked1;
      var billTradeType = currentSelected;
      var billStatus = this.picked3;
      var billAcceptOrg = this.picked4;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billStatus获取
    searchStatus: function(currentSelected) {
      var billClassify = this.picked1;
      var billTradeType = this.picked2;
      var billStatus = currentSelected;
      var billAcceptOrg = this.picked4;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billAcceptOrg获取
    searchOrg: function(currentSelected) {
      var billClassify = this.picked1;
      var billTradeType = this.picked2;
      var billStatus = this.picked3;
      var billAcceptOrg = currentSelected;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billFeature获取
    searchFeature: function(currentSelected) {
      var billClassify = this.picked1;
      var billTradeType = this.picked2;
      var billStatus = this.picked3;
      var billAcceptOrg = this.picked4;
      var billFeature = currentSelected;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    // 通过billFeature获取
    searchArea: function(value, selectedData) {
      this.picked6 = selectedData.map(o => o.label).join("");
      // console.log(this.picked6)
      var billClassify = this.picked1;
      var billTradeType = this.picked2;
      var billStatus = this.picked3;
      var billAcceptOrg = this.picked4;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      this.getBillList(
        1,
        billMoney,
        billClassify,
        billTradeType,
        billStatus,
        billAcceptOrg,
        billFeature,
        billTradeArea
      );
    },
    bidBill: function(billId) {
      // console.log(billId);
      this.$router.push({ name: "InDetail", params: { billId: billId } });
    },
    clickRadio:function(){
      var billClassify = this.picked1;
      var billTradeType = this.picked2; 
      var billStatus = this.picked3;
      var billAcceptOrg = this.picked4;
      var billFeature = this.picked5;
      var billTradeArea = this.picked6;
      var billMoney = this.billMoney;
      var data = {
          billMoney: billMoney,
          billClassify: billClassify,
          billTradeType: billTradeType,
          billStatus: billStatus,
          billAcceptOrg: billAcceptOrg,
          billFeature: billFeature,
          billTradeArea: billTradeArea,
          isCurrentUser: false
      };
      console.log(data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageBox {
  display: block;
  min-width: 128px;
  padding-bottom: 30px;
  padding-left: 76px;
  margin: 0 auto;
  /* float: right; */
}

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
  background-image: linear-gradient(
    134deg, 
    rgba(253, 189, 21, 0.5), 
    rgba(244, 38, 38, 0.5)), 
    linear-gradient(#ff8000, #ff8000);
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

.in
  .inContent
  .inMain
  .inSear
  .inSearLeft
  .inSearPriceList
  .inSearPriceItemActive {
  color: white;
  background: #f33c3c;
}

.in
  .inContent
  .inMain
  .inSear
  .inSearLeft
  .inSearPriceList
  .inSearPriceItem:hover {
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
  border-left: 5px solid #f71327;
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

.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearCondItemTitle {
  font-size: 16px;
  color: #555;
  float: left;
  margin-right: 100px;
}

.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearCondItemListItem {
  width: 92px;
  float: left;
  /* background: url(../../assets/origin.png) no-repeat left center; */
  margin-right: 89px;
}
.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearArea {
  width: 220px;
}

.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearCondItemListItem_active {
  background: url(../../assets/active.png) no-repeat left center;
}

.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearCondItemListItem
  input {
  margin-right: 10px;
}

/* .in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearchWhite {
        width: 164px;
        height: 1px;
        float: left;
    } */

.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearCondItemListItem:last-child,
.in
  .inContent
  .inMain
  .inSear
  .inSearRight
  .inSearCondList
  .inSearCondItem
  .inSearCondItemListItem:nth-child(5) {
  margin-right: 0;
}

.in .inContent .inMain .inSear .inSearRight .inSearCondList .inSearCondItem .inSearCondItemListItem:nth-child(6) {
   margin-left: 164px;
}

.in .inContent .inMain .inBill {
  width: 1128px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding-bottom: 50px;
}

.in .inContent .inMain .inBill .inBillItem {
  width: 100%;
  height: 60px;
  line-height: 30px;
  padding: 15px 0;
  font-size: 14px;
  border-bottom: 1px solid #e1e1e1;
}

.in .inContent .inMain .inBill .inBillItem div {
  width: 112px;
  height: 30px;
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
  color: #f71327;
  border-color: #f71327;
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
