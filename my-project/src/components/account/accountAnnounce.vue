<template>
    <div class="accountAnnounce">
        <ul class="accAnnMain">
            <li class="accAnnItem accAnnTitle">
                <div class="accAnnItemNav accAnnItemType">汇票类型</div>
                <div class="accAnnItemNav accAnnItemTerm">交易方式</div>
                <div class="accAnnItemNav accAnnItemIsti">承兑机构</div>
                <div class="accAnnItemNav accAnnItemMoney">票面金额</div>
                <div class="accAnnItemNav accAnnItemPub">发布时间</div>
                <div class="accAnnItemNav accAnnItemDeadline">到期时间</div>
                <div class="accAnnItemNav accAnnItemOperate">操作</div>
            </li>
            <li class="accAnnItem" v-for="billItem in billList" :key="billItem.billId">
                <div class="accAnnItemNav accAnnItemType">{{billItem.billClassify}}</div>
                <div class="accAnnItemNav accAnnItemTerm">{{billItem.billTradeType}}</div>
                <div class="accAnnItemNav accAnnItemIsti">{{billItem.billAcceptOrg}}</div>
                <div class="accAnnItemNav accAnnItemMoney">{{billItem.billMoney}}</div>
                <div class="accAnnItemNav accAnnItemPub">{{billItem.publishDate}}</div>
                <div class="accAnnItemNav accAnnItemDeadline">{{billItem.billExpire}}</div>
                <div class="accAnnItemNav accAnnItemOperate">
                    <a class="accAnnItem_scan" @click="goDetail(billItem.billId)">查看详情</a>
                    <!-- <a class="accAnnItem_scan" to='/acc/pub/accAnn/myBillDet'>查看详情</a> -->
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
        v-if="total>8"
        :current="current"
        :pageSize="8"
        @on-change="getBillList"
        ></Page>
    </div>
</template>

<script>
import globalData from '../globalData'

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
            if(status =='trading'){
                self.billStatus = '交易中';
            }
            if(status =='success'){
                self.billStatus = '交易成功';
            }
            if(status =='failure'){
                self.billStatus = '交易失败';
            }
            //调用接口  获取汇票列表
            self.$http.post(globalData.data.Ip+'/bill/page',{
                currentPage:current,
                pageSize:8,
                isCurrentUser:true,
                billStatus:self.billStatus
            },{emulateJSON:true,credentials:true}).then(function(res){ 
                console.log(res);     
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
        margin: 30px 0;
        /* float: right; */
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
        margin-bottom: 2px;
        background: white;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav {
        width: 136px;
        text-align: center;
        float: left;
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

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:nth-child(4) {
        width: 162px;
    }

    .accountAnnounce .accAnnMain .accAnnItem .accAnnItemNav:last-child {
        width: 140px;
    }

    .accountAnnounce .accAnnMain .accAnnTitle {
        color: white;
        background: #f71327;
    }
</style>
