<template>
    <div class="in">
        <div class="inContent">
            <h2 class="inTitle">我要收票</h2>
            <!--汇票列表-->
            <FinishBillList></FinishBillList>
        </div>
    </div>
</template>

<script>
import globalData from "../../globalData";
import addressData from "../../../assets/js/addressData";
import FinishBillList from "../../components/bill/finishBillList"

export default {
  name: "Log",
  components:{
      FinishBillList
  },
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
    // this.getBillList(
    //   1,
    //   billMoney,
    //   billClassify,
    //   billTradeType,
    //   billStatus,
    //   billAcceptOrg,
    //   billFeature,
    //   billTradeArea
    // );
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
        billMoney = "1000000,1.7976931348623157e+308";
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
<style lang="less" scoped>
.in{
  width: 100%;
  height: auto;
  background: #f1f1f1;
  padding: 50px 0;
  .inContent{
    min-width: 1280px;
    height: auto;
    .inTitle{
      width: 1280px;
      height: 26px;
      line-height: 26px;
      color: #555;
      font-size: 18px;
      margin: 0 auto 25px;
      font-weight: 500;
    }
  }
}
</style>
