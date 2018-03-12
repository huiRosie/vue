<template>
    <div class="check">
        <div class="topNav">
            <span>收票中心</span> > 
            <span v-if="billStatus=='validating'">待审核</span>
            <span v-if="billStatus=='validate_success'">待交易</span>
            <span v-if="billStatus=='ording'">交易中</span>
            <span v-if="billStatus=='success'">交易完成</span>
        </div>
        <ul class="checkMain">
            <li class="checkItem checkTitle">
                <div class="checkItemNav checkItemUp">上传日期</div>
                <div class="checkItemNav checkItemName">票据类型</div>
                <div class="checkItemNav checkItemArea">交易方式</div>
                <div class="checkItemNav checkItemName">承兑机构</div>
                <div class="checkItemNav checkItemMoney">票面金额(元)</div>
                <div class="checkItemNav checkItemDeadline">票据状态</div>
                <div class="checkItemNav checkItemOperate">操作</div>
            </li>
            <li class="checkItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="checkItemNav checkItemUp">{{billItem.publishDate}}</div>
                <div class="checkItemNav checkItemName">{{billItem.billClassify}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="checkItemNav checkItemArea"><span>{{billItem.billFixedPrice}}</span>元/每十万加</div>
                <div v-else class="checkItemNav checkItemArea">竞价</div>
                <div class="checkItemNav checkItemName">{{billItem.billUserName}}</div>
                <div v-if="billItem.billMoney<=10000" class="checkItemNav checkItemMoney">{{billItem.billMoney}}</div>
                <div v-if="billItem.billMoney>10000" class="checkItemNav checkItemMoney">{{parseFloat((billItem.billMoney/10000).toFixed(6))}}万</div>
                <div v-if="billItem.billStatus=='validating'" class="checkItemNav checkItemDeadline">待审核</div>
                <div v-if="billItem.billStatus=='validate_success'" class="checkItemNav checkItemDeadline">待交易</div>
                <div v-if="billItem.billStatus=='ording'" class="checkItemNav checkItemDeadline">待付款</div>
                <div v-if="billItem.billStatus=='paymenting'" class="checkItemNav checkItemDeadline">待背书</div>
                <div v-if="billItem.billStatus=='endorse'" class="checkItemNav checkItemDeadline">待签收</div>
                <div v-if="billItem.billStatus=='success'" class="checkItemNav checkItemDeadline">交易成功</div>
                <div v-if="billItem.billStatus=='failure'" class="checkItemNav checkItemDeadline">交易失败</div>
                <div class="checkItemNav checkItemOperate">
                    <a v-if="billItem.billStatus=='validating'" class="checkItem_check" @click="checkBill(billItem.billId)">立即审核</a>
                    <a v-if="billItem.billStatus=='validate_success'" class="checkItem_check" @click="handelBill(billItem.billId)">立即下单</a>
                    <a v-if="billItem.billStatus=='ording'" class="checkItem_check" @click="handelBill(billItem.billId)">订单详情</a>
                    <a v-if="billItem.billStatus=='paymenting'" class="checkItem_check" @click="handelBill(billItem.billId)">订单详情</a>
                    <a v-if="billItem.billStatus=='endorse'" class="checkItem_check" @click="handelBill(billItem.billId)">订单详情</a>
                    <a v-if="billItem.billStatus=='success'||billItem.billStatus=='failure'" class="checkItem_check" @click="handelBill(billItem.billId)">订单详情</a>
                </div>
            </li>
            <li class="checkItem" v-if="billList.length<=0" >
                <div class="checkItemNav checkItemName">暂无数据</div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>9"
        :current="current"
        :pageSize="9"
        @on-change="getBillList"
        ></Page>
    </div>
</template>

<script>
import {fetchInBillList} from '../../../assets/js/billApi'


export default {
  name: 'check',
  data () {
    return {
        billList:[],
        total:'',
        current:1,
        billStatus:''
    }
  },
  created:function(){
        this.getBillList(1);
    },
    methods:{
        getBillList:function(current){
            var self = this;
            self.billStatus = self.$route.params.billStatus;
            var billStatus;
            if(self.billStatus=='validating'){
                billStatus= '待审核';
            }
            if(self.billStatus=='validate_success'){
                billStatus= '待交易';
            }
            if(self.billStatus=='ording'){
                billStatus= '交易中';
            }
            if(self.billStatus=='success'){
                billStatus= '交易完成';
            }
            // console.log(self.billStatus)
            //调用接口  获取票据列表
            fetchInBillList({
                billStatus:billStatus,
                currentPage:current,
                pageSize:9
            }).then(function(res){
                console.log(res)
                if(res.data.code==200){
                    self.billList = res.data.data.recordList;
                    self.total = res.data.data.totalCount;
                } 
            },function(error){
                console.log(error);  
            })
        },
        checkBill:function(billId){
            this.$router.push({name:'CheckDet', params: {billId:billId}});
        },
        handelBill:function(billId){
            this.$router.push({name:'HandelDet', params: {billId:billId}});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pageBox {
        display: block;
        min-width: 128px;
        margin:40px 20px;
        float: right;
    }

    .check {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
    }

    .check .checkMain {
        width: 100%;
        height: 100%;
    }

    .check .checkMain .checkItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        border-bottom: 1px solid #eee;
    }

    .check .checkMain .checkItem .checkItemNav {
        width: 122px;
        height: 30px;
        text-align: center;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 10px;
    }
    
    .check .checkMain .checkItem .checkItemNav:nth-child(3){
        width: 152px;
    }

    .check .checkMain .checkItem .checkItemNav:nth-child(4){
        width: 220px;
    }


    .check .checkMain .checkItem .checkItemOperate a {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #999;
        border-radius: 4px;
        margin: 0 auto;
        font-size: 12px;
    }

    .check .checkMain .checkItem .checkItemOperate a:hover {
        color: #f71327;
        border: 1px solid #f71327;
    }

    .check .checkMain .checkItem .checkItemNav .checkItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .check .checkMain .checkTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
        color: #333;
    }
</style>
