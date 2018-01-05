<template>
    <div class="sale">
        <div v-if="billStatus=='publishing'" class="topNav">
            <span>出票中心</span> > 
            <span>出售中的汇票</span>
        </div>        
        <div v-if="billStatus=='ordering'" class="topNav">
            <span>出票中心</span> > 
            <span>我预选的汇票</span>
        </div>        
        <div v-if="billStatus=='finish'" class="topNav">
            <span>出票中心</span> > 
            <span>已完成的汇票</span>
        </div>
        <!-- 出售中的汇票 -->
        <ul class="saleMain" v-if="billStatus=='publishing'">
            <li class="saleItem saleTitle">
                <div class="saleItemNav saleItemType">汇票类型</div>
                <div class="saleItemNav saleItemTerm">交易方式</div>
                <div class="saleItemNav saleItemIsti">承兑机构</div>
                <div class="saleItemNav saleItemMoney">票面金额(元)</div>
                <div class="saleItemNav saleItemDeadline">到期时间</div>
                <div class="saleItemNav saleItemNum">竞价数</div>
                <div class="saleItemNav saleItemOperate">操作</div>
            </li>
            <li class="saleItem" v-for="billItem in billList" :key="billItem.billId">
                <div class="saleItemNav saleItemType">{{billItem.billClassify}}</div>
                <div class="saleItemNav saleItemTerm">{{billItem.billTradeType}}</div>
                <div class="saleItemNav saleItemIsti">{{billItem.billAcceptOrg}}</div>
                <div class="saleItemNav saleItemMoney">{{billItem.billMoney}}</div>
                <div class="saleItemNav saleItemDeadilne">{{billItem.billExpire}}</div>
                <div class="saleItemNav saleItemNum">{{billItem.billQuoteCount}}</div>
                <div class="saleItemNav saleItemOperate">
                    <a class="saleItem_scan" @click="scanDetail(billItem.billId)">汇票详情</a>
                    <a class="saleItem_offer" @click="quoteList(billItem.billId)">报价详情</a>
                </div>
            </li>
            <li class="saleItem" v-if="billList.length<=0">
                <div class="saleItemNav saleItemType">暂无数据</div>
            </li>
        </ul>
        <!-- 我预选的报价汇票 -->
        <ul class="preMain" v-if="billStatus=='ordering'">
            <li class="preItem preTitle">
                <div class="preItemNav preItemName">出票人全称</div>
                <div class="preItemNav preItemMoney">票面金额(元)</div>
                <div class="preItemNav preItemDeadline">剩余天数（天）</div>
                <div class="preItemNav preItemUser">报价用户</div>
                <div class="preItemNav preItemIntere">报价利率</div>
                <div class="preItemNav preItemTel">联系电话</div>
                <div class="preItemNav preItemOperate">操作</div>
            </li>
            <li class="preItem" v-for="billOrdItem in billList" :key="billOrdItem.quoteId">
                <div class="preItemNav preItemName">{{billOrdItem.billUserName}}</div>
                <div class="preItemNav preItemMoney">{{billOrdItem.billMoney}}</div>
                <div class="preItemNav preItemDeadline" v-if="countDown(billOrdItem.billExpire)>0">{{countDown(billOrdItem.billExpire)}}</div>
                <div class="preItemNav preItemDeadline" v-else>已到期</div>
                <div class="preItemNav preItemUser">{{billOrdItem.userName}}</div>
                <div class="preItemNav preItemIntere">{{billOrdItem.quoteRate}}%</div>
                <div class="preItemNav preItemTel">{{billOrdItem.userPhone}}</div>
                <div class="preItemNav preItemOperate">
                    <a class="preItem_scan" @click="quoteDetail(billOrdItem.quoteId)">查看详情</a>
                </div>
            </li>
            <li class="preItem" v-if="billList.length<=0">
                <div class="preItemNav preItemName">暂无数据</div>
            </li>
        </ul>
        <!-- 已完成的汇票 -->
        <ul class="preMain" v-if="billStatus=='finish'">
            <li class="preItem preTitle">
                <div class="preItemNav preItemName">出票人全称</div>
                <div class="preItemNav preItemMoney">票面金额(元)</div>
                <div class="preItemNav preItemDeadline">剩余天数（天）</div>
                <div class="preItemNav preItemUser">报价用户</div>
                <div class="preItemNav preItemIntere">报价利率</div>
                <div class="preItemNav preItemTel">联系电话</div>
                <div class="preItemNav preItemOperate">操作</div>
            </li>
            <li class="preItem" v-for="billFinItem in billList" :key="billFinItem.billId">
                <div class="preItemNav preItemName">{{billFinItem.billUserName}}</div>
                <div class="preItemNav preItemMoney">{{billFinItem.billMoney}}</div>
                <div class="preItemNav preItemDeadline" v-if="countDown(billFinItem.billExpire)>0">{{countDown(billFinItem.billExpire)}}</div>
                <div class="preItemNav preItemDeadline" v-else>已到期</div>
                <div class="preItemNav preItemUser">{{billFinItem.userName}}</div>
                <div class="preItemNav preItemIntere">{{billFinItem.quoteRate}}%</div>
                <div class="preItemNav preItemTel">{{billFinItem.userPhone}}</div>
                <div class="preItemNav preItemOperate">
                    <a class="preItem_scan" @click="finishDetail(billFinItem.quoteId)">查看详情</a>
                </div>
            </li>
            <li class="preItem" v-if="billList.length<=0">
                <div class="preItemNav preItemName">暂无数据</div>
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
import {fetchOutBillList} from '../../assets/js/billApi'

export default {
    name: 'Sale',
    data () {
        return {
            billStatus:'',
            billList:'',
            total:0,
            current:1
        }
    },
    created:function(){
        this.getBillList();
    },
    methods:{
        getBillList:function(current){
            var self = this;
            self.billStatus = self.$route.params.billStatus;
            //调用接口  获取票据列表
            fetchOutBillList({
                billStatus:self.billStatus,
                currentPage:current,
                pageSize:8
            },{emulateJSON:true,credentials:true}).then(function(res){
                console.log(res)
                if(res.data.code==200){
                    self.billList = res.data.data.recordList;
                    self.total = res.data.data.totalCount;
                } 
            },function(error){
                console.log(error);  
            })
        },
        scanDetail:function(billId){
            this.$router.push({name:'SaleDet',params:{billId:billId}})
        },
        quoteList:function(billId){
            this.$router.push({name:'SaleQuoteList',params:{billId:billId}})
        },
        quoteDetail:function(quoteId){
            this.$router.push({name:'SaleQDet',params:{quoteId:quoteId}})
        },
        finishDetail:function(quoteId){
            this.$router.push({name:'SaleFDet',params:{quoteId:quoteId}})
        },
        // 日期倒计时
        countDown:function(countDate){
            // var countDate = '2017-12-12';
            var cYear = countDate.slice(0,4);
            var cMonth = this.addNum(countDate.slice(5,7));
            var cDay = this.addNum(countDate.slice(8,10));
            //slice(start,end)不包括start，包括end
            // 剩余天数
            var leftDate = (new Date(cYear,cMonth-1,cDay)) - (new Date());
            var leftDays = parseInt(leftDate / 1000 / 60 / 60 / 24 ,10); //计算剩余的天数 
            return leftDays;
        },
        // 不足两位前面加0
        addNum:function(num){
            return  num > 9 ? num : '0'+num 
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pageBox {
    display: block;
    min-width: 128px;
    padding-bottom: 30px;
    margin: 30px auto 0;
    /* float: right; */
    }

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
        height: 30px;
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

    
    .sale .preMain {
        width: 100%;
        height: 100%;
    }

    .sale .preMain .preItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .sale .preMain .preItem .preItemNav {
        width: 140px;
        height: 30px;
        text-align: center;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 10px;
    }

    .sale .preMain .preItem .preItemNav:first-child{
        width: 180px;
    }

    .sale .preMain .preItem .preItemNav:nth-child(5){
        width: 100px;
    }

    .sale .preMain .preItem .preItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .sale .preMain .preItem .preItemNav .preItem_scan {
        display: block;
        width: 82px;
        height: 30px;
        line-height: 28px;        
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .sale .preMain .preTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
    }
</style>
