<template>
    <div class="in">
        <div class="inContent">
            <h2 class="inTitle">我要收票</h2>
            <!--汇票列表-->
            <BillList></BillList>
        </div>
    </div>
</template>

<script>
import globalData from "../../globalData";
import BillList from "../../components/bill/billList"

export default {
  name: "In",
  components:{
      BillList
  },
  data() {
    return {
      billLists: "",
      billMoney: "",
    };
  },
  created: function() {

  },
  methods: {
    getBillList: function(current) {
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
    bidBill: function(billId) {
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
