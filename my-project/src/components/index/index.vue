<template>
    <div class="index">
        <!--banner-->
        <div class="banner swiper-container">
            <div class="bannerList swiper-wrapper" id="bannerList">
                <a class="bannerItem swiper-slide" >
                    <img src="../../assets/banner2.png" class="swiper-lazy"/>
                </a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!--四大特点-->
        <div class="fourFeature">
            <ul class="fourFeatureList">
                <li class="fourFeatureItem">
                    <img src="../../assets/safe.png"/>
                    <p class="fourFeatureItemName">安全</p>
                </li>
                <li class="fourFeatureItem">
                    <img src="../../assets/efficient.png"/>
                    <p class="fourFeatureItemName">高效</p>
                </li>
                <li class="fourFeatureItem">
                    <img src="../../assets/profession.png"/>
                    <p class="fourFeatureItemName">专业</p>
                </li>
                <li class="fourFeatureItem">
                    <img src="../../assets/norm.png"/>
                    <p class="fourFeatureItemName">规范</p>
                </li>
            </ul>
        </div>
        <!--电票交易流程-->
        <div class="flow">
            <div class="flowBox">
                <div class="flowSub">
                    <h2 class="flowTitle">电票交易流程：</h2>
                    <img src="../../assets/operation.png"/>
                </div>
                <ul class="flowList">
                    <li class="flowItem">
                        <img src="../../assets/1.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">卖方发布汇票</h3>
                            <p class="flowItemDes">卖方通过网站发布汇票信息</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../assets/2.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">买方竞价</h3>
                            <p class="flowItemDes">买方竞价并达成交易协议</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../assets/3.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">买方付款</h3>
                            <p class="flowItemDes">买方完成线下付款</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../assets/4.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">卖方背书</h3>
                            <p class="flowItemDes">卖方通过网银完成背书</p>
                        </div>
                    </li>
                    <li class="flowItem">
                        <img src="../../assets/5.png"/>
                        <div class="flowDes">
                            <h3 class="flowItemTitle">买方签收</h3>
                            <p class="flowItemDes">买方通过网银签收，完成交易</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--在售银票列表-->
        <div class="bill">
            <div class="billBox">
                <!-- 银票title -->
                <h2 class="billTitle">优质汇票 · 买到即是赚到</h2>
                <ul class="billList">
                    <li class="billItem" v-for="bill in billLists" >
                        <div class="billItemPrice" v-if="bill.billMoney<=10000">
                            <span>{{bill.billMoney}}</span>元
                        </div>
                        <div class="billItemPrice" v-if="bill.billMoney>10000">
                            <span>{{bill.billMoney/10000}}</span>万元
                        </div>
                        <div class="billItemDeadline">
                            到期倒计时：<span>{{bill.billTimeout}}天</span>
                        </div>
                        <div class="billItemDate">
                            汇票到期日：<span>{{bill.billExpire}}</span>
                        </div>
                        <div class="billItemDate">
                            出票人全称：<span>{{bill.billUserName}}</span>
                        </div>
                        <div class="billItemDate">
                            付款行全称：<span>{{bill.billBank}}</span>
                        </div>
                        <a class="billItemBid" @click="bidBill(bill.billId)">参与竞价</a>
                        <!-- <router-link class="billItemBid" to="{path:'inDetail',params:{billId:bill.billId}}">参与竞价</router-link> -->
                    </li>
                </ul>
                <div class="pageBox">
                    
                </div>
            </div>
        </div>
        <!--合作伙伴-->
        <div class="partner">
            <div class="partnerBox">
                <div class="partnerTop">
                    <h3 class="partnerTopTitle">合作伙伴<span>诚信是金 ·</span><span>至诚合作</span></h3>
                </div>
                <ul class="partnerList">
                    <li class="partnerItem">
                        <img src="../../assets/logo_partner.png"/>
                    </li>
                    <li class="partnerItem">
                        <img src="../../assets/logo_partners2.png"/>
                    </li>
                    <li class="partnerItem">
                        <img src="../../assets/logo_partners3.png"/>
                    </li>
                    <li class="partnerItem">
                        <img src="../../assets/logo_partners4.png"/>
                    </li>
                    <li class="partnerItem">
                        <img src="../../assets/logo_partners5.png"/>
                    </li>
                    <li class="partnerItem">
                        <img src="../../assets/logo_partners6.png"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import globalData from '../globalData'

    export default {
        name: 'Index1',
        data () {
            return {
                billLists:'',
                loginStatus:''
            }
        },
        created:function(){
            this.getBillList();
        },
        methods:{
            getBillList:function(){
                //调用接口
                this.$http.get(globalData.data.Ip+'/index/main'
                ).then(function(res){  
                    this.billLists = res.data.data.bills;
                    console.log(res);                                
                },function(error){
                    console.log(error);  
                })
            },
            bidBill:function(billId){
                // console.log(billId)
                this.$router.push({ name:'InDetail', params: { billId: billId }})
            },
            //   调取接口，获取用户信息
            getUserInfo:function(){
                var self = this;
                self.$http.get(globalData.data.Ip+'/user/info',{credentials:true}).then(function(res){ 
                    console.log(res);   
                    if(res.data.code==200){
                        self.loginStatus = '退出登录';
                    }
                    if(res.data.code==undefined){
                        self.loginStatus = '登录';
                    }                         
                    console.log(self.loginStatus)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index {
        width: 100%;
        height: auto;
    }

    .index .banner {
        min-width: 1280px;
        height: 460px;
    }

    .index .banner img {
        display: block;
        width: 100%;
        height: 460px;
    }

    .index .banner .swiper-pagination-bullets {
        transition: 5s;
    }

    .index .banner .swiper-pagination-bullets .swiper-pagination-bullet {
        background: #fff;
        width: 12px;
        height: 12px;
        margin-right: 10px;
        border-radius: 6px;
        cursor: pointer;
        opacity: 0.5;
    }

    .index .banner .swiper-pagination-bullets .swiper-pagination-bullet-active {
        list-style: none;
        background: #f71327;
        width: 12px;
        height: 12px;
        margin-right: 10px;
        border-radius: 6px;
        cursor: pointer;
        opacity: 1;
    }

    .index .fourFeature {
        min-width: 1280px;
        height: 260px;
        background: white;
        margin-bottom: 1px;
    }

    .index .fourFeature .fourFeatureList {
        width: 1280px;
        height: 260px;
        margin: 0 auto;
        padding-top: 40px;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem {
        float: left;
        width: 126px;
        text-align: center;
        margin-right: 232px;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem img {
        display: block;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem .fourFeatureItemName {
        font-size: 20px;
        color: #444;
        height: 28px;
        line-height: 28px;
        margin: 18px auto;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem:last-child {
        margin: 0;
    }

    .index .flow {
        min-width: 1280px;
        height: 108px;
        background: white;
    }

    .index .flow .flowBox {
        width: 1280px;
        height: 108px;
        margin: 0 auto;
        overflow: hidden;
    }

    .index .flow .flowBox .flowSub {
        float: left;
        width: 100px;
        margin-top: 13px;
    }

    .index .flow .flowBox .flowSub .flowTitle {
        font-size: 14px;
        color: #444;
        height: 29px;
        line-height: 29px;
    }

    .index .flow .flowBox .flowSub img {
        display: block;
    }

    .index .flow .flowBox .flowList {
        float: left;
        padding: 31px 0;
    }

    .index .flow .flowBox .flowList .flowItem {
        float: left;
        margin-right: 63px;
    }

    .index .flow .flowBox .flowList .flowItem img {
        display: block;
        float: left;
        margin-right: 5px;
    }

    .index .flow .flowBox .flowList .flowItem .flowDes {
        float: left;
    }

    .index .flow .flowBox .flowList .flowItem .flowDes .flowItemTitle {
        font-size: 14px;
        color: #444;
        height: 26px;
        line-height: 26px;
    }

    .index .flow .flowBox .flowList .flowItem .flowDes .flowItemDes {
        font-size: 12px;
        color: #878787;
        height: 18px;
        line-height: 18px;
    }

    .index .flow .flowBox .flowList .flowItem:last-child {
        margin: 0;
    }

    .index .flow .flowBox .flowList .flowItem:last-child img {
        margin-right: 6px;
    }

    .index .bill {
        min-width: 1280px;
        height: auto;
    }

    .index .bill .billBox {
        width: 1280px;
        margin: 0 auto;
        padding: 36px 0;
    }

    .index .bill .billBox .billTitle{
        font-size: 18px;
        width: 100%;
        height: 26px;
        line-height: 26px;
        margin-bottom: 16px;
        font-weight: 500;
        font-family: '.PingFang-SC';
    }

    .index .bill .billBox .billList {
        width: 1280px;
        height: auto;
        overflow: hidden;
    }

    .index .bill .billBox .billList .billItem {
        width: 300px;
        height: 312px;
        float: left;
        margin: 0 26px 26px 0;
        background: url(../../assets/billbg.png) no-repeat center;
    }

    .index .bill .billBox .billList .billItem .billItemPrice {
        width: 100%;
        height: 82px;
        line-height: 70px;
        text-align: center;
        font-size: 46px;
        color: #f71327;
        padding-top: 12px;
    }

    .index .bill .billBox .billList .billItem .billItemPrice span {
        font-weight: 600;
    }

    .index .bill .billBox .billList .billItem .billItemDeadline {
        width: 100%;
        height: 58px;
        line-height: 26px;
        text-align: center;
        font-size: 18px;
        padding-bottom: 32px;
    }

    .index .bill .billBox .billList .billItem .billItemDeadline span {
        color: #ec242f;
    }

    .index .bill .billBox .billList .billItem .billItemDate,
    .index .bill .billBox .billList .billItem .billItemDrawer,
    .index .bill .billBox .billList .billItem .billItemBank {
        padding-left: 38px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #878787;
        margin-bottom: 7px;
    }

    .index .bill .billBox .billList .billItem .billItemDate span,
    .index .bill .billBox .billList .billItem .billItemDrawer span,
    .index .bill .billBox .billList .billItem .billItemBank span {
        color: #434343;
        /* display: inline-block; */
        width: 150px;
        overflow: hidden;
    }

    .index .bill .billBox .billList .billItem .billItemBid {
        display: block;
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        font-size: 16px;
        margin-top: 40px;
        background-image: linear-gradient(45deg, rgba(255, 47, 47, 0.5), rgba(245, 177, 25, 0.5)), linear-gradient(#f23d3d, #f23d3d);
    }

    .index .bill .billBox .billList .billItem:nth-child(4),
    .index .bill .billBox .billList .billItem:nth-child(8),
    .index .bill .billBox .billList .billItem:nth-child(12) {
        margin-right: 0;
    }

    .index .partner {
        min-width: 1280px;
        height: 236px;
        padding-bottom: 50px;
    }

    .index .partner .partnerBox {
        width: 1280px;
        height: 186px;
        margin: 0 auto;
        background: white;
    }

    .index .partner .partnerBox .partnerTop {
        width: 1280px;
        height: 55px;
        line-height: 55px;
        padding: 0 30px;
        border-bottom: 1px dashed #d8d8d8;
    }

    .index .partner .partnerBox .partnerTop .partnerTopTitle {
        font-size: 24px;
        color: #333;
        float: left;
    }

    .index .partner .partnerBox .partnerTop span {
        font-size: 14px;
        color: #f71327;
        padding-left: 8px;
    }

    .index .partner .partnerBox .partnerList {
        width: 1280px;
        height: 216px;
        padding: 43px 30px;
    }

    .index .partner .partnerBox .partnerList .partnerItem {
        width: auto;
        float: left;
        margin-right: 76px;
    }

    .index .partner .partnerBox .partnerList .partnerItem img {
        display: block;
    }

    .index .partner .partnerBox .partnerList .partnerItem:last-child {
        margin-right: 0;
    }
</style>
