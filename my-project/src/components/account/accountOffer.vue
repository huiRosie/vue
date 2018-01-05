<template>
    <div class="accountOffer">
        <ul class="accOfferMain">
            <li class="accOfferItem accOfferTitle">
                <div class="accOfferItemNav accOfferItemType">汇票类型</div>
                <div class="accOfferItemNav accOfferItemTerm">交易方式</div>
                <div class="accOfferItemNav accOfferItemIsti">承兑机构</div>
                <div class="accOfferItemNav accOfferItemMoney">票面金额</div>
                <div class="accOfferItemNav accOfferItemPub">发布时间</div>
                <div class="accOfferItemNav accOfferItemStatus">竞价状态</div>
                <div class="accOfferItemNav accOfferItemOperate">操作</div>
            </li>
            <li class="accOfferItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="accOfferItemNav accOfferItemType">{{billItem.billClassify}}</div>
                <div class="accOfferItemNav accOfferItemTerm">{{billItem.billTradeType}}</div>
                <div class="accOfferItemNav accOfferItemIsti">{{billItem.billAcceptOrg}}</div>
                <div class="accOfferItemNav accOfferItemMoney">{{billItem.billMoney}}</div>
                <div class="accOfferItemNav accOfferItemPub">{{billItem.billCreateDate.substring(0,11)}}</div>
                <div class="accOfferItemNav accOfferItemStatus" v-if="billItem.quoteStatus=='run'">竞价中</div>
                <div class="accOfferItemNav accOfferItemStatus" v-if="billItem.quoteStatus=='ording'">已预选</div>
                <div class="accOfferItemNav accOfferItemStatus" v-if="billItem.quoteStatus=='refuse'">放弃竞价</div>
                <div class="accOfferItemNav accOfferItemStatus" v-if="billItem.quoteStatus=='success'">竞价成功</div>
                <div class="accOfferItemNav accOfferItemStatus" v-if="billItem.quoteStatus=='fail'">竞价失败</div>
                <div class="accOfferItemNav accOfferItemOperate">
                    <a class="accOfferItem_scan" @click="goDetail(billItem.billId)" >查看详情</a>
                </div>
            </li>
            <li class="accOfferItem" v-if="billList.length<=0">
                <div class="accOfferItemNav accOfferItemType">暂无数据</div>
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
import globalData from '../globalData'

export default {
    name: 'AccountOffer',
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
            console.log(current)
            //调用接口  获取竞价汇票列表
            var self = this;
            self.$http.get(globalData.data.Ip+'/bill/quote/page',{params:{
                currentPage:current,
                pageSize:8,
                quoteStatus:'run'
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
    .pageBox {
        display: block;
        min-width: 128px;
        margin: 30px 0;
        /* float: right; */
    }

    .accountOffer {
        width: 982px;
        height: auto;
    }

    .accountOffer .accOfferMain {
        width: 100%;
        height: 100%;
    }

    .accountOffer .accOfferMain .accOfferItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav {
        width: 136px;
        text-align: center;
        float: left;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav .accOfferItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav .accOfferItem_scan:hover{
        color: #f71327;
        border-color: #f71327;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav:nth-child(4) {
        width: 162px;
    }

    .accountOffer .accOfferMain .accOfferItem .accOfferItemNav:last-child {
        width: 140px;
    }

    .accountOffer .accOfferMain .accOfferTitle {
        color: white;
        background: #f71327;
    }
</style>
