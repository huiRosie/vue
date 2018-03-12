<template>
    <!--bill列表-->
    <div class="bill">
        <div class="billBox">
            <!-- 银票title -->
            <div class="billSearchBox">
                <div class="billSearch">
                    <!-- 金额 -->
                    <div class="billSearchMoney billSearchItem">
                        <select v-model="picked1" name="billSearchMoney" id="">
                            <option v-for="money in moneyList" :key="money.name" :value="money.value">{{money.name}}</option>
                        </select>
                    </div>
                    <!-- 期限 -->
                    <div class="billSearchDate billSearchItem">
                        <select v-model="picked2" name="billSearchDate" id="">
                            <option v-for="date in dateList" :key="date.name" :value="date.value">{{date.name}}</option>
                        </select>
                    </div>
                    <!-- 机构 -->
                    <div class="billSearchOrg billSearchItem">
                        <select v-model="picked3" name="billSearchOrg" id="">
                            <option v-for="org in orgList" :key="org.name" :value="org.name">{{org.name}}</option>
                        </select>
                    </div>
                    <!-- 类型 -->
                    <div class="billSearchType billSearchItem">
                        <select v-model="picked4" name="billSearchType" id="">
                            <option v-for="type in typeList" :key="type.name" :value="type.name">{{type.name}}</option>
                        </select>
                    </div>
                    <!-- 状态 -->
                    <div class="billSearchStatus billSearchItem">
                        <select v-model="picked5" name="billSearchStatus" id="">
                            <option v-for="status in statusList" :key="status.name" :value="status.name">{{status.name}}</option>
                        </select>
                    </div>
                    <!-- 按钮 -->
                    <a class="billSearchBtn" @click="getBillList(1)">查询</a>
                </div>
            </div>
            <ul class="billList">
                <li class="billTitle billItem">
                    <div class="billItemPub billItem_sub billItem_tit">
                        发布时间
                    </div>
                    <div class="billItemType billItem_sub billItem_tit">
                        票据类型
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
                    <div class="billItemBack billItem_sub billItem_tit">
                        瑕疵
                    </div>
                    <div class="billItemOperate billItem_sub billItem_tit" >操作</div>                    
                </li>
                <li v-if="total>0" class="billItem" v-for="bill in billLists" :key="bill.billId">
                    <div class="billItemPub billItem_sub">
                        <div class="billItem_text">{{bill.publishDate}}</div>
                    </div>
                    <div class="billItemType billItem_sub">
                        <div class="billItem_text">{{bill.billClassify}}</div>
                    </div>
                    <div class="billItemPrice billItem_sub">
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
                    <div class="billItemBack billItem_sub">
                        <div class="billItem_text" v-if="bill.billReturn==null||bill.billReturn==''">无</div>
                        <div class="billItem_text" v-else>{{bill.billReturn}}</div>
                    </div>
                    <a v-if="bill.billStatus=='publishing'" class="billItemBid billItem_sub"  @click="bidBill(bill.billId)">立即买票</a>
                    <div v-if="bill.billStatus=='ording'" class="billItemBiding billItem_sub" >交易中</div>
                    <div v-if="bill.billStatus=='paymenting'" class="billItemBiding billItem_sub" >交易中</div>
                    <div v-if="bill.billStatus=='endorse'" class="billItemBiding billItem_sub" >交易中</div>
                    <div v-if="bill.billStatus=='success'" class="billItemBidSuc billItem_sub" >交易完成</div>
                    <div v-if="bill.billStatus=='failure'" class="billItemBidSuc billItem_sub" >交易完成</div>
                </li>
                <li v-if="total==0" class="billItem" v-for="bill in billLists" :key="bill.billId">
                    <div class="billItemPrice billItem_sub">
                        暂无数据
                    </div>
                </li>    
            </ul>
            <div class="page">
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
        </div>
    </div>
</template>

<script>
    import globalData from '../../globalData'
    import {fetchInBillList} from '../../../assets/js/billApi'

    export default {
        name: 'BillList',
        data () {
            return {
                billLists:'',
                current:1,
                total:0,     
                moneyList:[
                    {
                        id:0,
                        name:'所有金额',
                        value:'所有金额'
                    },
                    {
                        id:1,
                        name:'50万以下',
                        value:'0,500000'
                    },
                    {
                        id:2,
                        name:'50-500万',
                        value:'500000,5000000'
                    },
                    {
                        id:3,
                        name:'500-1000万',
                        value:'5000000,10000000'
                    },
                    {
                        id:4,
                        name:'1000万以上',
                        value:'10000000,1.7976931348623157e+308'
                    }
                ],
                dateList:[
                    {
                        id:0,
                        name:'所有期限',
                        value:'所有期限'
                    },
                    {
                        id:1,
                        name:'90天以内',
                        value:'0,90'
                    },
                    {
                        id:2,
                        name:'90-180天',
                        value:'90,180'
                    },
                    {
                        id:3,
                        name:'180-360天',
                        value:'180,360'
                    },
                    {
                        id:4,
                        name:'360天以上',
                        value:'360,1.7976931348623157e+308'
                    }
                ],
                orgList:[
                    {
                        id:0,
                        name:'所有机构'
                    },
                    {
                        id:1,
                        name:'国股'
                    },
                    {
                        id:2,
                        name:'城商'
                    },
                    {
                        id:3,
                        name:'三农'
                    },
                    {
                        id:4,
                        name:'财务公司'
                    },
                    {
                        id:5,
                        name:'其它'
                    }
                ],
                typeList:[
                    {
                        id:0,
                        name:'所有类型'
                    },
                    {
                        id:1,
                        name:'银票'
                    },
                    {
                        id:2,
                        name:'商票'
                    }
                ],
                statusList:[
                    {
                        id:0,
                        name:'所有状态'
                    },
                    {
                        id:1,
                        name:'待交易'
                    },
                    {
                        id:2,
                        name:'交易中'
                    },
                    {
                        id:3,
                        name:'交易完成'
                    }
                ],
                picked1:'所有金额',            
                picked2:'所有期限',            
                picked3:'所有机构',            
                picked4:'所有类型',            
                picked5:'所有状态',    
            }
        },
        created:function(){
            this.getBillList(1);
        },
        methods:{
            getBillList:function(current){
                var self = this;
                var billMoney = self.picked1;
                var billLimit = self.picked2;
                var billAcceptOrg = self.picked3;
                var billClassify = self.picked4;
                var billStatus = self.picked5;
                var data = self.$qs.stringify({
                    currentPage: current,
                    billMoney: billMoney,
                    billLimit: billLimit,
                    billAcceptOrg: billAcceptOrg,
                    billClassify: billClassify,
                    billStatus: billStatus,
                    isCurrentUser: false
                });
                // fetchInBillList(data,{emulateJSON:true}).then(function(res){
                //     console.log(res)
                //     self.billLists = res.data.data.recordList;
                //     self.total = res.data.data.totalCount;
                // },function(error){
                //     console.log(error)
                // })
                self.$http.post(
                    globalData.data.Ip + "/bill/page",{
                        currentPage: current,
                        billMoney: billMoney,
                        billLimit: billLimit,
                        billAcceptOrg: billAcceptOrg,
                        billClassify: billClassify,
                        billStatus: billStatus,
                        isCurrentUser: false
                    },{ emulateJSON:true }
                ).then(
                    function(res) {
                        self.billLists = res.data.data.recordList;
                        self.total = res.data.data.totalCount;
                        console.log(res);
                    },
                    function(error) {
                        console.log(error);
                    }
                );
            },
            bidBill:function(billId){
                // console.log(billId)
                this.$router.push({ name:'InDetail', params: { billId: billId }})
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
            .billSearchBox{
                width: 100%;
                height: 76px;
                overflow: hidden;
                padding: 16px 0;
                border-bottom: 1px solid #eee;
                .billSearch{
                    width: 1280px;
                    height: 44px;
                    margin: 0 auto;
                    overflow: hidden;
                    .billSearchItem{
                        width: auto;
                        height:44px;
                        float: left;
                        padding: 4px 0;
                        margin-right: 114px;
                        select{
                            width: 110px;
                            height:36px;
                            padding-left: 5px;
                            padding-right: 16px;
                            border: 0;
                            appearance:none;  
                            -o-appearance:none; 
                            -ms-appearance:none;   
                            -moz-appearance:none;  
                            -webkit-appearance:none;  
                            background: url("../../../assets/triangle1.png") no-repeat scroll right center transparent; 
                            // option::-ms-expand{ display: none; }
                            option{
                                appearance:none;  
                                -o-appearance:none; 
                                -ms-appearance:none;   
                                -moz-appearance:none;  
                                -webkit-appearance:none;  
                                border:0;
                            }
                            option:hover{
                                color:#fff;
                                background-color:#f71327;
                            }
                        }
                        select::-ms-expand { display: none; }
                    }
                    .billSearchBtn{
                        width: 158px;
                        height: 44px;
                        float: left;
                        line-height: 44px;
                        text-align: center;
                        border-radius: 2px;
                        font-size: 16px;
                        color: #f71327;
                        cursor: pointer;
                        border: solid 1px #f71327;
                    }
                    .billSearchBtn:hover{
                        color: #fff;
                        background: #f71327;
                    }
                }
            }
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
                        margin-right: 28px;
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
                        width: 160px;
                        .billItem_text{
                            font-size: 24px;
                            color: #f71327;
                        }
                    }
                    .billItemOrg{
                        width: 200px;
                        .billItem_text{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    .billItemBidmoney{
                        width:160px;
                        .billItem_text{
                            span{
                                color: #f71327;
                            }
                        }
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
            .page{
                width: 1280px;
                height: auto;
                overflow: hidden;
                margin: 0 auto;
                .pageBox {
                    display: block;
                    min-width: 128px;
                    padding: 30px 0;
                    margin: 0 auto;
                    float: right;
                }
            }
        }
    }
</style>
