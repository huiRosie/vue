<template>
    <div class="check">
        <div class="topNav">
            <span>收票中心</span> > 
            <span v-if="billStatus=='validating'">待审核</span>
            <span v-if="billStatus=='validate_success'">待处理</span>
            <span v-if="billStatus=='success'">交易成功</span>
            <span v-if="billStatus=='failure'">交易失败</span>
        </div>
        <ul class="checkMain">
            <li class="checkItem checkTitle">
                <div class="checkItemNav checkItemName">出票人全称</div>
                <div class="checkItemNav checkItemArea">交易区域</div>
                <div class="checkItemNav checkItemMoney">票面金额</div>
                <div class="checkItemNav checkItemDeadline">到期时间</div>
                <div class="checkItemNav checkItemUp">上传日期</div>
                <div class="checkItemNav checkItemOperate">操作</div>
            </li>
            <li class="checkItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="checkItemNav checkItemName">{{billItem.billUserName}}</div>
                <div class="checkItemNav checkItemArea">{{billItem.billTradeArea}}</div>
                <div class="checkItemNav checkItemMoney">{{billItem.billMoney}}</div>
                <div class="checkItemNav checkItemDeadline">{{billItem.billExpire}}</div>
                <div class="checkItemNav checkItemUp">{{billItem.publishDate}}</div>
                <div class="checkItemNav checkItemOperate">
                    <a v-if="billItem.billStatus=='validating'" class="checkItem_check" @click="checkBill(billItem.billId)">立即审核</a>
                    <a v-if="billItem.billStatus=='validate_success'" class="checkItem_check" @click="handelBill(billItem.billId)">立即处理</a>
                    <a v-if="billItem.billStatus=='success'" class="checkItem_check" @click="handelBill(billItem.billId)">查看详情</a>
                    <a v-if="billItem.billStatus=='failure'" class="checkItem_check" @click="handelBill(billItem.billId)">查看详情</a>
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
        v-if="total>8"
        :current="current"
        :pageSize="8"
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
            // console.log(self.billStatus)
            //调用接口  获取票据列表
            fetchInBillList({
                billStatus:self.billStatus,
                currentPage:current,
                pageSize:8
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
        padding-bottom: 30px;
        margin: 20px auto;
        /* float: right; */
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
        background: white;
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
        margin-bottom: 2px;
        background: white;
    }

    .check .checkMain .checkItem .checkItemNav {
        width: 162px;
        height: 30px;
        text-align: center;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 10px;
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
    }
</style>
