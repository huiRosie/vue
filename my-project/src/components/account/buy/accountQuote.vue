<template>
    <div class="accQuote">
        <ul class="accQuoteMain">
            <li class="accQuoteItem accQuoteTitle">
                <div class="accQuoteItemNav accQuoteItemType">汇票类型</div>
                <div class="accQuoteItemNav accQuoteItemTerm">一口价/竞价</div>
                <div class="accQuoteItemNav accQuoteItemIsti">承兑机构</div>
                <div class="accQuoteItemNav accQuoteItemMoney">票面金额(元)</div>
                <div class="accQuoteItemNav accQuoteItemPub">发布时间</div>
                <div class="accQuoteItemNav accQuoteItemExp">到期时间</div>
                <div class="accQuoteItemNav accQuoteItemStatus">票据状态</div>
                <div class="accQuoteItemNav accQuoteItemOperate">操作</div>
            </li>
            <li class="accQuoteItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="accQuoteItemNav accQuoteItemType">{{billItem.billClassify}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="accQuoteItemNav accQuoteItemTerm">{{billItem.quoteIncrement}}/每十万加</div>
                <div v-else class="accQuoteItemNav accQuoteItemTerm">竞价</div>
                <div class="accQuoteItemNav accQuoteItemIsti">{{billItem.billUserName}}</div>
                <div v-if="billItem.billMoney<=10000" class="accQuoteItemNav accQuoteItemMoney">{{billItem.billMoney}}</div>
                <div v-if="billItem.billMoney>10000" class="accQuoteItemNav accQuoteItemMoney">{{billItem.billMoney/10000}}万</div>
                <div class="accQuoteItemNav accQuoteItemPub">{{billItem.billCreateDate.substring(0,11)}}</div>
                <div class="accQuoteItemNav accQuoteItemExp">{{billItem.billExpire}}</div>
                <div class="accQuoteItemNav accQuoteItemStatus" v-if="billItem.quoteStatus=='run'">竞价中</div>
                <div class="accQuoteItemNav accQuoteItemStatus" v-if="billItem.quoteStatus=='ording'">竞价成功</div>
                <div class="accQuoteItemNav accQuoteItemStatus" v-if="billItem.quoteStatus=='refuse'">放弃竞价</div>
                <div class="accQuoteItemNav accQuoteItemStatus" v-if="billItem.quoteStatus=='success'">竞价成功</div>
                <div class="accQuoteItemNav accQuoteItemStatus" v-if="billItem.quoteStatus=='fail'">竞价失败</div>
                <div class="accQuoteItemNav accQuoteItemOperate">
                    <a class="accQuoteItem_scan" @click="goDetail(billItem.quoteId)" >查看详情</a>
                </div>
            </li>
            <li class="accQuoteItem" v-if="billList.length<=0">
                <div class="accQuoteItemNav accQuoteItemType">暂无数据</div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>10"
        :current="current"
        :pageSize="10"
        @on-change="getOfferList"
        ></Page>
    </div>
</template>

<script>
import globalData from '../../globalData'

export default {
    name: 'accQuote',
    data () {
        return {
            billId:'',
            billList:[],
            current:1,
            total:0,
        }
    },
    created:function(){
        this.getOfferList(1);
    },
    methods:{
        getOfferList:function(current){
            //调用接口  获取竞价汇票列表
            var self = this;
            self.$http.get(globalData.data.Ip+'/user/bill/myquote',{params:{
                currentPage:current,
                pageSize:10,
                // quoteStatus:''
            },credentials:true}).then(function(res){ 
                console.log(res);     
                if(res.data.code==555){
                    self.$router.push('/login');
                }
                self.billList = res.data.data.recordList;      
                self.total = res.data.data.totalCount;
            });
        },
        goDetail:function(quoteId){
            this.$router.push({name:'MyQuoteDet',params:{quoteId:quoteId}});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pageBox {
        display: block;
        min-width: 128px;
        margin:10px 30px;
        float: right;
    }

    .accQuote {
        width: 982px;
        height: auto;
    }

    .accQuote .accQuoteMain {
        width: 100%;
        height: 100%;
    }

    .accQuote .accQuoteMain .accQuoteItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        border-bottom: 1px solid #eee;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav {
        width: 116px;
        text-align: center;
        float: left;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav:nth-child(1), 
    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav:nth-child(7) {
        width: 90px;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav:nth-child(3) {
        width: 152px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav .accQuoteItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav .accQuoteItem_scan:hover{
        color: #f71327;
        border-color: #f71327;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav:nth-child(4) {
        width: 162px;
    }

    .accQuote .accQuoteMain .accQuoteItem .accQuoteItemNav:last-child {
        width: 140px;
    }

    .accQuote .accQuoteMain .accQuoteTitle {
        color: white;
        background: #f71327;
    }
</style>
