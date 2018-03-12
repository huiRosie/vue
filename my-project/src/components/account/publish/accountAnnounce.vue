<template>
    <div class="accountAnnounce">
        <ul class="accAnnMain">
            <li class="accAnnItem accAnnTitle">
                <div class="accAnnItemNav accAnnItemType">汇票类型</div>
                <div class="accAnnItemNav accAnnItemTerm">一口价/竞价</div>
                <div class="accAnnItemNav accAnnItemIsti">承兑机构</div>
                <div class="accAnnItemNav accAnnItemMoney">票面金额(元)</div>
                <div class="accAnnItemNav accAnnItemPub">发布时间</div>
                <div class="accAnnItemNav accAnnItemDeadline">到期时间</div>
                <div class="accAnnItemNav accAnnItemStatus">票据状态</div>
                <div class="accAnnItemNav accAnnItemOperate">操作</div>
            </li>
            <li class="accAnnItem" v-for="billItem in billList" :key="billItem.billId">
                <div class="accAnnItemNav accAnnItemType">{{billItem.billClassify}}</div>
                <div v-if="billItem.billQuoteType=='fixed'" class="accAnnItemNav accAnnItemTerm"><span>{{billItem.billFixedPrice}}</span>元/每十万加</div>
                <div v-else class="accAnnItemNav accAnnItemTerm">竞价</div>
                <div class="accAnnItemNav accAnnItemIsti">{{billItem.billUserName}}</div>
                <div v-if="billItem.billMoney<=10000" class="accAnnItemNav accAnnItemMoney">{{billItem.billMoney}}</div>
                <div v-if="billItem.billMoney>10000" class="accAnnItemNav accAnnItemMoney">{{parseFloat((billItem.billMoney/10000).toFixed(6))}}万</div>
                <div class="accAnnItemNav accAnnItemPub">{{billItem.publishDate}}</div>
                <div class="accAnnItemNav accAnnItemDeadline">{{billItem.billExpire}}</div>
                <div v-if="billItem.billStatus=='validating'" class="accAnnItemNav accAnnItemStatus">待审核</div>
                <div v-if="billItem.billStatus=='validate_success'" class="accAnnItemNav accAnnItemStatus">审核成功</div>
                <div v-if="billItem.billStatus=='ording'" class="accAnnItemNav accAnnItemStatus">已下单</div>
                <div v-if="billItem.billStatus=='paymenting'" class="accAnnItemNav accAnnItemStatus">已付款</div>
                <div v-if="billItem.billStatus=='endorse'" class="accAnnItemNav accAnnItemStatus">待签收</div>
                <div v-if="billItem.billStatus=='success'" class="accAnnItemNav accAnnItemStatus">交易成功</div>
                <div v-if="billItem.billStatus=='failure'" class="accAnnItemNav accAnnItemStatus">交易失败</div>
                <div class="accAnnItemNav accAnnItemOperate">
                    <a class="accAnnItem_scan" @click="goDetail(billItem.billId)">查看详情</a>
                </div>
            </li>
            <li class="accAnnItem" v-if='billList.length==0'>
                <div class="accAnnItemNav accAnnItemType">暂无数据</div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>10"
        :current="current"
        :pageSize="10"
        @on-change="getBillList"
        ></Page>
    </div>
</template>

<script>
import globalData from '../../globalData'

export default {
    name: 'AccountAnnounce',
    data () {
        return {
            billList:[],
            total:0,
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
            var status = self.$route.params.status;
            if(status =='ontrade'){
                self.billStatus = '待交易';
            }
            if(status =='trading'){
                self.billStatus = '交易中';
            }
            if(status =='success'){
                self.billStatus = '交易完成';
            }
            //调用接口  获取汇票列表
            self.$http.get(globalData.data.Ip+'/user/bill/mypublish',{params:{
                currentPage:current,
                pageSize:10,
                billStatus:self.billStatus
            },emulateJSON:true,credentials:true}).then(function(res){ 
                console.log(res);      
                if(res.data.code==555){
                    self.$router.push('/login');
                }
                self.billList = res.data.data.recordList;      
                self.total = res.data.data.totalCount;
            });
        },
        goDetail:function(billId){
            this.$router.push({name:'MyBillDet',params:{billId:billId}});
        }
    },
    watch:{
        "$route":function(to,from,next){
            this.getBillList(1);
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

    .accountAnnounce {
        width: 982px;
        height: auto;
    }

    .accountAnnounce .accAnnMain {
        width: 100%;
        height: 100%;
    }

    .accountAnnounce .accAnnMain .accAnnItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        border-bottom: 1px solid #e1e1e1;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav {
        width: 110px;
        height: 30px;
        padding: 0 5px;
        text-align: center;
        float: left;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:nth-child(2) {
        width: 130px;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:nth-child(3) {
        width: 172px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:nth-child(7) {
        width: 100px;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:last-child {
        width: 140px;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav span{
        color: #f71327;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav .accAnnItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav .accAnnItem_scan:hover{
        color: #f71327;
        border-color: #f71327;
    }

    .accountAnnounce .accAnnMain .accAnnTitle {
        color: white;
        background: #f71327;
    }
</style>
