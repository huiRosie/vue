<template>
    <div class="saleQList">
        <div class="topNav">
            <span>出票中心</span> > 
            <router-link class="topNavLink" to='/out/sale/publishing'>出售中的汇票</router-link> > 
            <span>报价详情</span>
        </div>
        <ul class="saleQListMainTop">
            <li class="saleQListMainTopItem">
                <div class="saleQListMainTopItem_label">出票人全称：</div>
                <div class="saleQListMainTopItem_text">{{billInfo.billUserName}}</div>
            </li>
            <li class="saleQListMainTopItem">
                <div class="saleQListMainTopItem_label">票面金额（元）：</div>
                <div class="saleQListMainTopItem_text">￥{{parseFloat((billInfo.billMoney/10000).toFixed(6))}}万</div>
            </li>
            <li class="saleQListMainTopItem">
                <div class="saleQListMainTopItem_label">剩余天数（天）：</div>
                <div class="saleQListMainTopItem_text">{{leftDays}}</div>
            </li>
        </ul>
        <ul class="saleQListMain">
            <li class="saleQListItem saleQListTitle">
                <div class="saleQListItemNav saleQListItemName">用户名称</div>
                <div class="saleQListItemNav saleQListItemRate">报价利率</div>
                <div class="saleQListItemNav saleQListItemAdd">每十万加（元）</div>
                <div class="saleQListItemNav saleQListItemInterest">贴息金额（元）</div>
                <div class="saleQListItemNav saleQListItemDiscount">贴现金额（元）</div>
                <div class="saleQListItemNav saleQListItemTel">联系电话</div>
                <div class="saleQListItemNav saleQListItemOperate">操作</div>
            </li>
            <li class="saleQListItem" v-if="billList.length==0">
                <div class="saleQListItemNav saleQListItemName">暂无数据</div>
            </li>
            <li class="saleQListItem" v-if="billList.length>0" v-for="billItem in billList" :key="billItem.billId">
                <div class="saleQListItemNav saleQListItemName">{{billItem.userName}}</div>
                <div class="saleQListItemNav saleQListItemRate">{{billItem.quoteRate}}%</div>
                <div class="saleQListItemNav saleQListItemAdd">￥{{billItem.quoteIncrement}}</div>
                <div class="saleQListItemNav saleQListItemInterest">￥{{billItem.quoteDiscountAmount}}</div>
                <div class="saleQListItemNav saleQListItemDiscount">￥{{parseFloat((billItem.quoteAmount/10000).toFixed(6))}}万</div>
                <div class="saleQListItemNav saleQListItemTel">{{billItem.userPhone}}</div>
                <div class="saleQListItemNav saleQListItemOperate">
                    <a class="saleQListItem_fail" v-if="billItem.quoteStatus=='run'" @click="failBill(billItem.quoteId)">撤销竞价</a>
                    <a class="saleQListItem_fail" v-if="billItem.quoteStatus=='ording'" @click="failBill(billItem.quoteId)">撤销竞价</a>
                    <a class="saleQListItem_fail" v-if="billItem.quoteStatus=='fail'" disabled>撤销竞价</a>
                    <a class="saleQListItem_offer" v-if="billItem.quoteStatus=='run'&&quoteStatus=='publishing'" @click="preBill(billItem.quoteId)">立即下单</a>
                    <a class="saleQListItem_offer" v-if="billItem.quoteStatus=='run'&&quoteStatus=='run'" @click="preBill(billItem.quoteId)">立即下单</a>
                    <a class="saleQListItem_offer" v-if="billItem.quoteStatus=='run'&&quoteStatus=='ording'" disabled>立即下单</a>
                    <a class="saleQListItem_offer" v-if="billItem.quoteStatus=='ording'" disabled>已下单</a>
                    <a class="saleQListItem_offer" v-if="billItem.quoteStatus=='fail'" disabled>已拒绝</a>
                </div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>7"
        :current="current"
        :pageSize="7"
        @on-change="getQuoteList"
        ></Page>
    </div>
</template>

<script>
import { fetchBillDetail,fetchQuoteList,fetchPreBill,fetchOutTradeBill } from '../../assets/js/billApi'

export default {
    name: 'saleQuoteList',
    data () {
        return {
            billId:'',
            billList:[],
            current:1,
            total:0,
            billInfo:'',
            leftDays:'',
            quoteStatus:'',
            quoteDesc:''
        }
    },
    created:function(){
        this.getBillDetail();
        this.getQuoteList(1);
    },
    methods:{
        getBillDetail:function(){
            var self = this;
            self.billId = self.$route.params.billId;
            fetchBillDetail({
                billId:self.billId
            }).then(function(res){
                // console.log(res);
                self.billInfo = res.data.data;
                self.leftDays = self.countDown(res.data.data.billExpire);
                self.quoteStatus = res.data.data.billStatus;
                // console.log(self.quoteStatus)
                if(self.leftDays<=0){
                    self.leftDays = '汇票已到期';
                }
            })
        },
        // 获取报价列表
        getQuoteList:function(current){
            var self = this;
            self.billId = self.$route.params.billId;
            fetchQuoteList({
                billId:self.billId,
                pageSize:7,
                currentPage:current
            }).then(function(res){
                console.log(res.data.data)
                self.billList = res.data.data.recordList;
                self.total = res.data.data.totalCount;
            })
        },
        // 立即下单
        preBill:function(quoteId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'您确定要预选当前报价吗？',
                onOk:function(){
                    fetchPreBill({
                        quoteId:quoteId
                    }).then(function(res){
                        // console.log(res)
                        if(res.data.code==200){
                            self.$Message.success('操作成功！');
                            self.$router.push('/out/sale/ordering');
                        }
                    })
                }
            })
        },
        // 撤销竞价
        failBill:function(quoteId){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'您确定放弃当前报价吗？',
                onOk:function(){
                    fetchOutTradeBill({
                        quoteId:quoteId,
                        quoteDesc:self.quoteDesc
                    }).then(function(res){
                        // console.log(res)
                        if(res.data.code==200){
                            self.$Message.success('操作成功！');
                            self.getQuoteList();
                        }
                    })
                }
            })
        },
        // 倒计时
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

    .saleQList {
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

    .saleQListMainTop{
        width: 100%;
        height: 51px;
        line-height: 50px;
        color: #fff;
        background: #f71327;
        padding: 0 30px;
        border-bottom: 1px dashed #fff;
    }

    .saleQListMainTop .saleQListMainTopItem{
        float: left;
        margin-right: 124px;
    }

    .saleQListMainTop .saleQListMainTopItem:last-child{
        margin-right: 0;
    }

    .saleQListMainTop .saleQListMainTopItem .saleQListMainTopItem_label,
    .saleQListMainTop .saleQListMainTopItem .saleQListMainTopItem_text{
        float: left;
    }

    .saleQList .saleQListMain {
        width: 100%;
        height: 100%;
    }

    .saleQList .saleQListMain .saleQListItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        border-bottom: 1px solid #eee;
        background: white;
    }

    .saleQList .saleQListMain .saleQListItem .saleQListItemNav {
        width: 128px;
        text-align: center;
        float: left;
    }

    .saleQList .saleQListMain .saleQListItem .saleQListItemOperate {
        width: 214px;
    }

    .saleQList .saleQListMain .saleQListItem .saleQListItemOperate a:hover {
        color: #f71327;
        border: 1px solid #f71327;
    }

    .saleQList .saleQListMain .saleQListItem .saleQListItemNav .saleQListItem_fail {
        display: block;
        width: 82px;
        height: 32px;
        float: left;
        border: 1px solid #999;
        border-radius: 3px;
        margin-right: 10px;
        margin-left: 20px;
    }

    .saleQList .saleQListMain .saleQListItem .saleQListItemNav .saleQListItem_offer {
        display: block;
        width: 82px;
        height: 32px;
        float: left;
        border: 1px solid #999;
        border-radius: 3px;
    }

    .saleQList .saleQListMain .saleQListTitle {
        background: #f71327;
        color: #fff;
        font-size: 16px;
    }
</style>
