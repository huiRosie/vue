<template>
    <div class="sale">
        <div v-if="billStatus=='publishing'" class="topNav">
            <span>出票中心</span> > 
            <span>待交易</span>
        </div>        
        <div v-if="billStatus=='ordering'" class="topNav">
            <span>出票中心</span> > 
            <span>交易中</span>
        </div>        
        <div v-if="billStatus=='finish'" class="topNav">
            <span>出票中心</span> > 
            <span>交易完成</span>
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
                <div v-if="billItem.billQuoteType=='fixed'" class="saleItemNav saleItemTerm"><span>{{billItem.billFixedPrice}}</span>元/每十万加</div>
                <div v-else class="saleItemNav saleItemTerm">竞价</div>
                <div class="saleItemNav saleItemIsti">{{billItem.billUserName}}</div>
                <div v-if="billItem.billMoney<=10000" class="saleItemNav saleItemMoney">{{billItem.billMoney}}</div>
                <div v-if="billItem.billMoney>10000" class="saleItemNav saleItemMoney">{{billItem.billMoney/10000}}万</div>
                <div class="saleItemNav saleItemDeadilne">{{billItem.billExpire}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="saleItemNav saleItemNum">一口价</div>
                <div v-else class="saleItemNav saleItemNum">{{billItem.billQuoteCount}}</div>
                <div class="saleItemNav saleItemOperate">
                    <a class="saleItem_scan" @click="scanDetail(billItem.billId)">汇票详情</a>
                    <a class="saleItem_offer" disabled v-if="billItem.billQuoteType=='fixed'">报价详情</a>
                    <a class="saleItem_offer" v-else @click="quoteList(billItem.billId)">报价详情</a>
                </div>
            </li>
            <li class="saleItem" v-if="billList.length<=0">
                <div class="saleItemNav saleItemType">暂无数据</div>
            </li>
        </ul>
        <!-- 交易中 交易完成 汇票 -->
        <ul class="preMain" v-else>
            <li class="preItem preTitle">
                <div class="preItemNav preItemType">汇票类型</div>
                <div class="preItemNav preItemTerm">交易方式</div>
                <div class="preItemNav preItemIsti">承兑机构</div>
                <div class="preItemNav preItemMoney">票面金额(元)</div>
                <div class="preItemNav preItemDeadline">到期时间</div>
                <div class="preItemNav preItemNum">贴现金额（元）</div>
                <div class="preItemNav preItemNum">票据状态</div>
                <div class="preItemNav preItemOperate">操作</div>
            </li>
            <li class="preItem" v-for="billItem in billList" :key="billItem.orderId">
                <div class="preItemNav preItemType">{{billItem.billClassify}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="preItemNav preItemTerm"><span>{{billItem.billFixedPrice}}</span>元/每十万加</div>
                <div v-else class="preItemNav preItemTerm">竞价</div>
                <div class="preItemNav preItemIsti">{{billItem.billUserName}}</div>
                <div v-if="billItem.billMoney<=10000" class="preItemNav preItemMoney">{{billItem.billMoney}}</div>
                <div v-if="billItem.billMoney>10000" class="preItemNav preItemMoney">{{billItem.billMoney/10000}}万</div>
                <div class="preItemNav preItemDeadilne">{{billItem.billExpire}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="preItemNav preItemNum">{{(billItem.billMoney-(billItem.billMoney/100000)*billItem.billFixedPrice)/10000}}万</div>
                <div v-else class="preItemNav preItemNum">{{billItem.quoteAmount}}</div>
                <div v-if="billItem.billStatus=='publishing'" class="preItemNav preItemNum">待交易</div>
                <div v-if="billItem.billStatus=='ording'" class="preItemNav preItemNum">已下单</div>
                <div v-if="billItem.billStatus=='paymenting'" class="preItemNav preItemNum">已付款</div>
                <div v-if="billItem.billStatus=='endorse'" class="preItemNav preItemNum">已背书</div>
                <div v-if="billItem.billStatus=='success'" class="preItemNav preItemNum">成功</div>
                <div v-if="billItem.billStatus=='failure'" class="preItemNav preItemNum">失败</div>
                <div class="preItemNav preItemOperate">
                    <a v-if="billStatus=='ordering'" class="preItem_scan" @click="scanOrderDetail(billItem.orderId)">订单详情</a>
                    <a v-if="billStatus=='finish'" class="preItem_scan" @click="scanOrderDetail(billItem.orderId)">订单详情</a>
                </div>
            </li>
            <li class="preItem" v-if="billList.length<=0">
                <div class="preItemNav preItemType">暂无数据</div>
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
            var billStatus;          
            if(self.billStatus=='publishing'){
                billStatus='待交易'
            }         
            if(self.billStatus=='ordering'){
                billStatus='交易中'
            }         
            if(self.billStatus=='finish'){
                billStatus='交易完成'
            }  
            //调用接口  获取票据列表
            fetchOutBillList({
                billStatus:billStatus,
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
        scanOrderDetail:function(orderId){
            this.$router.push({name:'SaleOrderDet',params:{orderId:orderId}})
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
        margin:40px 20px;
        float: right;
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
        border-bottom: 1px solid #eee;
        background: white;
    }

    .sale .saleMain .saleItem .saleItemNav {
        width: 136px;
        height: 30px;
        text-align: center;
        float: left;
    }

    .sale .saleMain .saleItem .saleItemNav:nth-child(3) {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .sale .saleMain .saleItem .saleItemNav span{
        color: #f71327;
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
        color: #333;
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
        border-bottom: 1px solid #eee;
        background: white;
    }

    .sale .preMain .preItem .preItemNav {
        width: 132px;
        height: 30px;
        text-align: center;
        float: left;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sale .preMain .preItem .preItemNav:nth-child(1),
    .sale .preMain .preItem .preItemNav:nth-child(7){
        width: 90px;
    }

    .sale .preMain .preItem .preItemNav:nth-child(3){
        width: 142px;
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
        color: #333;
    }
</style>
