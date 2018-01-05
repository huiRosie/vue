<template>
    <div class="accountBuy">
        <ul class="accBuyMain">
            <li class="accBuyItem accBuyTitle">
                <div class="accBuyItemNav accBuyItemType">汇票类型</div>
                <div class="accBuyItemNav accBuyItemTerm">交易方式</div>
                <div class="accBuyItemNav accBuyItemIsti">承兑机构</div>
                <div class="accBuyItemNav accBuyItemMoney">票面金额</div>
                <div class="accBuyItemNav accBuyItemPub">发布时间</div>
                <div class="accBuyItemNav accBuyItemOffer">我的报价</div>
                <div class="accBuyItemNav accBuyItemOperate">操作</div>
            </li>
            <li class="accBuyItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="accBuyItemNav accBuyItemType">{{billItem.billClassify}}</div>
                <div class="accBuyItemNav accBuyItemTerm">{{billItem.billTradeType}}</div>
                <div class="accBuyItemNav accBuyItemIsti">{{billItem.billAcceptOrg}}</div>
                <div class="accBuyItemNav accBuyItemMoney">{{billItem.billMoney}}</div>
                <div class="accBuyItemNav accBuyItemPub">{{billItem.billCreateDate.substring(0,11)}}</div>
                <div class="accBuyItemNav accBuyItemOffer">{{billItem.quoteRate}}<span style="color:#f71327;">/</span>每十万加{{billItem.quoteIncrement}}</div>
                <div class="accBuyItemNav accBuyItemOperate">
                    <a class="accBuyItem_scan" @click="goDetail(billItem.billId)">查看详情</a>
                </div>
            </li>
            <li class="accBuyItem" v-if="billList.length<=0">
                <div class="accBuyItemNav accBuyItemType">暂无数据</div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>8"
        :current="current"
        :pageSize="8"
        @on-change="getOfferList"
        ></Page>
    </div>
</template>

<script>
export default {
    name: 'AccountBuy',
    data () {
        return {
            billList:[],
            total:''
        }
    },
    created:function(){

    },
    methods:{
        getOfferList:function(current){
            console.log(current)
            //调用接口  获取竞价汇票列表
            var self = this;
            self.$http.get(globalData.data.Ip+'/bill/quote/page',{params:{
                currentPage:current,
                pageSize:8,
                quoteStatus:'success'
            },credentials:true}).then(function(res){ 
                console.log(res);     
                self.billList = res.data.data.recordList;      
                self.total = res.data.data.totalCount;
            });
        },
        goDetail:function(billId){
            this.$router.push('/acc/buy/accOffer/myOfferDet/'+billId);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountBuy {
        width: 982px;
        height: auto;
    }

    .accountBuy .accBuyMain {
        width: 100%;
        height: 100%;
    }

    .accountBuy .accBuyMain .accBuyItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav {
        width: 136px;
        text-align: center;
        float: left;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav .accBuyItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav .accBuyItem_scan:hover{
        border:1px solid #f71327;
        color: #f71327;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav:nth-child(4) {
        width: 162px;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav:last-child {
        width: 140px;
    }

    .accountBuy .accBuyMain .accBuyTitle {
        color: white;
        background: #f71327;
    }
</style>
