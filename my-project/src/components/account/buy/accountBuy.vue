<template>
    <div class="accountBuy">
        <ul class="accBuyMain">
            <li class="accBuyItem accBuyTitle">
                <div class="accBuyItemNav accBuyItemType">汇票类型</div>
                <div class="accBuyItemNav accBuyItemTerm">交易方式</div>
                <div class="accBuyItemNav accBuyItemIsti">承兑机构</div>
                <div class="accBuyItemNav accBuyItemMoney">票面金额（元）</div>
                <div class="accBuyItemNav accBuyItemPub">发布时间</div>
                <div class="accBuyItemNav accBuyItemOffer">贴现金额(元)</div>
                <div class="accBuyItemNav accBuyItemOffer">票据状态</div>
                <div class="accBuyItemNav accBuyItemOperate">操作</div>
            </li>
            <li class="accBuyItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="accBuyItemNav accBuyItemType">{{billItem.billClassify}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="accBuyItemNav accBuyItemTerm"><span>{{billItem.billFixedPrice}}</span>/每十万加</div>
                <div v-else class="accBuyItemNav accBuyItemTerm">竞价</div>
                <div class="accBuyItemNav accBuyItemIsti">{{billItem.billUserName}}</div>
                <div v-if="billItem.billMoney<=10000" class="accBuyItemNav accBuyItemMoney">{{billItem.billMoney}}</div>
                <div v-if="billItem.billMoney>10000" class="accBuyItemNav accBuyItemMoney">{{parseFloat((billItem.billMoney/10000).toFixed(6))}}万</div>
                <div class="accBuyItemNav accBuyItemPub">{{billItem.billCreateDate.substring(0,11)}}</div>
                <div class="accBuyItemNav accBuyItemOffer">{{((billItem.billMoney-(billItem.billMoney/100000)*billItem.billFixedPrice)/10000).toFixed(2)}}万</div>
                <div v-if="billItem.billStatus=='ording'" class="accBuyItemNav accBuyItemOffer">已下单</div>
                <div v-if="billItem.billStatus=='paymenting'" class="accBuyItemNav accBuyItemOffer">已付款</div>
                <div v-if="billItem.billStatus=='endorse'" class="accBuyItemNav accBuyItemOffer">已背书</div>
                <div v-if="billItem.billStatus=='success'" class="accBuyItemNav accBuyItemOffer">交易成功</div>
                <div v-if="billItem.billStatus=='failure'" class="accBuyItemNav accBuyItemOffer">交易失败</div>
                <div class="accBuyItemNav accBuyItemOperate">
                    <a class="accBuyItem_scan" @click="goDetail(billItem.orderId)">查看详情</a>
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
    name: 'AccountBuy',
    data () {
        return {
            billList:[],
            total:'',
            current:1
        }
    },
    created:function(){
        this.getOfferList(1);
    },
    methods:{
        getOfferList:function(current){
            // console.log(current)
            //调用接口  获取竞价汇票列表
            var self = this;
            var orderStatus = self.$route.params.status;
            if(orderStatus=='run'){
                orderStatus = '交易中';
            }
            if(orderStatus=='success'){
                orderStatus = '交易完成';
            }
            self.$http.get(globalData.data.Ip+'/user/bill/myorder',{params:{
                currentPage:current,
                pageSize:10,
                orderStatus:orderStatus
            },credentials:true}).then(function(res){ 
                console.log(res);      
                if(res.data.code==555){
                    self.$router.push('/login');
                }
                self.billList = res.data.data.recordList;      
                self.total = res.data.data.totalCount;
            });
        },
        goDetail:function(orderId){
            var orderStatus = this.$route.params.status;
            this.$router.push('/acc/buy/accBuy/'+ orderStatus +'/myBuyDet/'+orderId);
        }
    },
    watch:{
        "$route":function(to,from,next){
            this.getOfferList(1);
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pageBox{
        display: block;
        min-width: 128px;
        margin:10px 30px;
        float: right;
    }

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
        border-bottom: 1px solid #e1e1e1;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav {
        width: 120px;
        height: 32px;
        padding: 0 5px;
        text-align: center;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav span{
        color: #f71327;
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

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav:nth-child(1) {
        width: 100px;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemNav:nth-child(3) {
        width: 162px;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemFail {
        width: 84px;
        height: 30px;
        line-height: 30px;
        margin: 0 25px;
        padding: 0;
        float: left;
    }

    .accountBuy .accBuyMain .accBuyItem .accBuyItemFail span{
        font-size: 14px;
        display: block;
        float: left;
        padding-left: 6px;
    }
    .accountBuy .accBuyMain .accBuyItem .accBuyItemFail i{
        font-size: 20px;
        color: #f71327;
        display: block;
        float: left;
        height: 30px;
        line-height: 30px;
    }

    .accountBuy .accBuyMain .accBuyTitle {
        color: white;
        background: #f71327;
    }
</style>
