<template>
    <!--bill列表-->
    <div class="bill">
        <div class="billBox">
            <!-- 银票title -->
            <ul class="billList">
                <li class="billTitle billItem">
                    <div class="billItemPub billItem_sub billItem_tit">
                        发布时间
                    </div>
                    <div class="billItemPrice billItem_sub billItem_tit">
                        票面金额（万元）
                    </div>
                    <div class="billItemExp billItem_sub billItem_tit">
                        到期时间
                    </div>
                    <div class="billItemOrg billItem_sub billItem_tit">
                        承兑机构
                    </div>
                    <div class="billItemBidmoney billItem_sub billItem_tit">
                        一口价/竞价
                    </div>
                    <div class="billItemOperate billItem_sub billItem_tit" >操作</div>                    
                </li>
                <li class="billItem" v-for="bill in billLists" :key="bill.billId">
                    <div class="billItemPub billItem_sub">
                        <div class="billItem_text">{{bill.publishDate}}</div>
                    </div>
                    <div class="billItemPrice billItem_sub">
                        <!-- <div class="billItem_text" v-if="bill.billMoney<=10000">
                            <span v-if="(String(bill.billMoney).indexOf('.') + 1)>0">{{bill.billMoney.toFixed(5)}}</span>
                            <span v-else>{{bill.billMoney}}</span>
                            元
                        </div> -->
                        <div class="billItem_text">
                            <span v-if="(String(bill.billMoney/10000).indexOf('.') + 1)>0">{{parseFloat((bill.billMoney/10000).toFixed(6))}}</span>
                            <span v-else>{{(bill.billMoney/10000)}}</span>
                        </div>
                    </div>
                    <div class="billItemExp billItem_sub">
                        <div class="billItem_text">{{bill.billExpire}}</div>
                    </div>
                    <div class="billItemOrg billItem_sub">
                        <div class="billItem_text">{{bill.billUserName}}</div>
                    </div>
                    <div class="billItemBidmoney billItem_sub">
                        <div v-if="bill.billQuoteType=='fixed'" class="billItem_text">
                            <span>{{bill.billFixedPrice}}元</span>/每十万扣
                        </div>
                        <div v-else class="billItem_text">
                            竞价
                        </div>
                    </div>
                    <!-- <div v-if="bill.billClassify=='商票'" class="billItemType billItem_sub billItemTypeS">{{bill.billClassify}}</div>
                    <div v-if="bill.billClassify=='银票'" class="billItemType billItem_sub billItemTypeY">{{bill.billClassify}}</div>
                    <div v-if="bill.billReturn=='有回头'" class="billItemBack billItemBackY billItem_sub">有回头</div>
                    <div v-if="bill.billReturn=='无回头'||bill.billReturn==null" class="billItemBack billItemBackW billItem_sub">无回头</div> -->
                    <a v-if="bill.billStatus=='publishing'" class="billItemBid billItem_sub"  @click="bidBill(bill.billId)">立即买票</a>
                    <div v-if="bill.billStatus=='ording'" class="billItemBiding billItem_sub" >交易中</div>
                    <div v-if="bill.billStatus=='paymenting'" class="billItemBiding billItem_sub" >交易中</div>
                    <div v-if="bill.billStatus=='endorse'" class="billItemBiding billItem_sub" >交易中</div>
                    <div v-if="bill.billStatus=='success'" class="billItemBidSuc billItem_sub" >交易完成</div>
                    <div v-if="bill.billStatus=='failure'" class="billItemBidSuc billItem_sub" >交易完成</div>
                </li>
            </ul>
            <!-- <Page 
            ref="pages"
            class="pageBox" 
            :total="total" 
            v-if="total>10"
            :current="current"
            :pageSize="10"
            ></Page> -->
        </div>
    </div>
</template>

<script>
    import globalData from '../../globalData'
    import {fetchIndexBillList} from '../../../assets/js/billApi'

    export default {
        name: 'BillList',
        data () {
            return {
                billLists:'',
                current:1,
                total:0
            }
        },
        created:function(){
            this.getBillList(1);
        },
        methods:{
            getBillList:function(current){
                var self = this;
                //调用接口
                fetchIndexBillList({
                    pageSize:12,
                    currentPage:current
                },{emulateJSON:true}).then(function(res){
                    // console.log(res);
                    self.billLists = res.data.data.bills;
                },function(error){
                    console.log(error)
                })
            },
            bidBill:function(billId){
                var self = this;
                self.$router.push({ name:'InDetail', params: { billId: billId }})
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .bill {
        min-width: 1280px;
        height: auto;
        margin-bottom: 40px;
        .billBox {
            min-width: 1280px;
            background: #fff;
            .billList {
                width: 1280px;
                height: auto;
                margin: 0 auto;
                overflow: hidden;
                .billItem {
                    width: 100%;
                    height: 70px;
                    overflow: hidden;
                    border-bottom: 1px solid #eee;
                    .billItem_sub {
                        width: 100px;
                        height: 70px;
                        float: left;
                        padding: 20px 0;
                        text-align: center;
                        margin-right: 40px;
                        .billItem_text{
                            font-size: 16px;
                            height: 30px;
                            line-height: 30px;
                        }
                    }
                    .billItem_tit{
                        font-weight: 600;
                    }
                    .billItemPrice{
                        width: 240px;
                        .billItem_text{
                            font-size: 24px;
                            color: #f71327;
                        }
                    }
                    .billItemOrg{
                        width: 300px;
                        .billItem_text{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    .billItemBidmoney{
                        width:180px;
                        .billItem_text{
                            span{
                                color: #f71327;
                            }
                        }
                    }
                    .billItemType,.billItemBack{
                        height: 68px;
                        width: 68px;
                        line-height: 68px;
                        text-align: center;
                        border-radius: 34px;
                        color: #fff;
                        padding: 0;
                    }
                    .billItemTypeS{
                        background: #f87b29;
                    }
                    .billItemTypeY{
                        background: #ddd;
                    }
                    .billItemBackY{
                        background: #f71327;
                    }
                    .billItemBackW{
                        background: #ddd;
                    }
                    .billItemOperate{
                        width: 158px;
                        height: 44px;
                        line-height: 44px;
                        margin: 12px 0;
                        padding: 0;
                    }
                    .billItemBid{
                        width: 158px;
                        height: 44px;
                        line-height: 44px;
                        margin: 12px 0;
                        padding: 0;
                        color: #fff;
                        background: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                    }
                    .billItemBiding{
                        width: 78px;
                        height: 44px;
                        line-height: 44px;
                        margin: 12px 40px;
                        padding: 0;
                        text-align: right;
                        background: url('../../../assets/status.png') no-repeat left center;
                    }
                    .billItemBidSuc{
                        width: 78px;
                        height: 44px;
                        line-height: 44px;
                        margin: 12px 40px;
                        padding: 0;
                        text-align: right;
                        background: url('../../../assets/statusSuccess.png') no-repeat left center;
                    }
                }
            }
        }
    }
</style>
