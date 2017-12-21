<template>
    <div class="inDetail">
        <div class="inDetContent">
            <h2 class="inDetTitle">
                <router-link to="/bill/in">我要收票</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="inDetMain">
                <!--汇票信息-->
                <div class="inDetBill">
                    <h3 class="inDetBillTitle">汇票信息</h3>
                    <div class="inDetBillInfo">
                        <ul class="inDetBillInfoLeft">
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billId}}
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billUserName}}
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billClassify}}
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billMoney}}
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billExpire}}
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billEndorse}}
                                </div>
                            </li>
                            <li class="inDetBillInfoItem">
                                <div class="inDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="inDetBillInfoItem_text">
                                    {{billData.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="inDetBillInfoRight">
                            <img v-if="billData.billImg.indexOf('http://')!=-1||billData.billImg.indexOf('https://')!=-1" v-bind:src="billData.billImg"/>
                            <img v-else v-bind:src="'http://'+billData.billImg"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="inDetAttach">
                    <h3 class="inDetAttachTitle">背书及附件</h3>
                    <div class="inDetAttachInfo">
                        <img v-if="billData.billEvidence.indexOf('http://')!=-1||billData.billEvidence.indexOf('https://')!=-1" v-bind:src="billData.billImg"/>
                        <img v-else v-bind:src="'http://'+billData.billEvidence"/>
                        <!-- <img v-bind:src="'http://'+billData.billEvidence"/> -->
                        <p class="inDetAttachDes">背书.jpg</p>
                    </div>
                </div>
                <!--我要竞价-->
                <div class="inDetBtn">
                    <a v-if="billData.billStatus=='publishing'" class="inDetBtnClick"  @click="bidModel">我要竞价</a>
                    <a v-if="billData.billStatus=='failure'" class="inDetBtnClick" style="display:none;" >交易失败</a>
                    <a v-if="billData.billStatus=='success'" class="inDetBtnClick" style="display:none;" >交易成功</a>
                    <!-- 点击出现弹框 -->
                    <Modal
                        v-model="modal1"
                        title="参与竞价(请输入您的报价)"
                        footer=''
                        class-name="vertical-center-modal">
                        <div slot="header" class="bidPouupTop">
                            <h2 class="bidPouupTopTitle">参与竞价<span> (请输入您的报价)</span></h2>
                        </div>
                        <div class="bidPouupMain">
                            <div class="bidPouupRate">
                                <div class="bidPouupRate_label">
                                    年利率：
                                </div>
                                <div class="bidPouupRate_text">
                                    <input type="number" ref="bidRate" v-model="bidRate" @keyup="caculate" value="" />
                                    <span>%</span>
                                </div>
                                <div class="bidRate_tip" ref="bidRate_tip">请输入年利率</div>
                            </div>
                            <div class="bidPouupAdd">
                                <div class="bidPouupAdd_label">
                                    每十万加（元）:
                                </div>
                                <div class="bidPouupAdd_text">
                                    <input type="number" ref="bidAdd" v-model="bidAdd" @keyup="caculate" value="" />
                                </div>
                                <div class="bidAdd_tip" ref="bidAdd_tip">请输入每十万加（元）金额</div>
                            </div>
                            <div class="bidPouupInterest">
                                <div class="bidPouupInterest_label">
                                    贴息金额（元）:
                                </div>
                                <div class="bidPouupInterest_text" ref="interestMoney" v-text="interestMoney" >
                                    
                                </div>
                            </div>
                            <div class="bidPouupDiscount">
                                <div class="bidPouupDiscount_label">
                                    贴现金额（元）:
                                </div>
                                <div class="bidPouupDiscount_text" ref="discountMOney" v-text="discountMoney">
                                    
                                </div>
                            </div>
                        </div>
                        <div slot="footer" class="bidPouupBtn">
                            <a @click="ok()" class="bidPouupOffer">立即报价</a>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalData from '../globalData'
    import {quoteBill} from '../../assets/js/billApi'

    export default {
        name: 'InDetail',
        data () {
            return {
                modal1: false,
                bidRate:'',
                bidAdd:'',
                interestMoney:'',
                discountMoney:'',
                billData:'',
                billId:''
            }
        },
        created:function(){
            this.getBillDet();
        },
        methods: {
            getBillDet:function(){
                //调用接口  获取汇票详情
                var self = this;
                self.billId = self.$route.params.billId;
                console.log(self.billId);      
                self.$http.get(globalData.data.Ip+'/bill/info',{params:{
                        billId:self.billId
                    }},{emulateJSON:true}).then(function(res){ 
                        self.billData = res.data.data;
                        console.log(self.billData);                             
                    },function(error){
                        console.log(error);  
                })
            },
            // 我要竞价弹框
            bidModel:function(){
                var leftDays = globalData.methods.countDown(this.billData.billExpire);
                if(leftDays>0){
                    this.modal1 = true
                }else{
                    this.$Modal.warning({
                        title: '提示',
                        content: '汇票已过期，暂无法竞价，请选择其他有效汇票。'
                    });
                }
            },
            // 计算贴息金额和贴现金额
            caculate:function(){
                var self = this;
                // 贴现日到汇票到期日的时间
                var leftDays = globalData.methods.countDown(self.billData.billExpire);
                // 票面金额
                var billMoneys = self.billData.billMoney;
                // 每十万加的总贴现金额
                var discountAddMoney = (billMoneys/100000)*self.bidAdd;
                // 利率的总贴现金额
                var interestMoneys = billMoneys*self.bidRate*leftDays/36000;    //billMoneys*(self.bidRate/100)*leftDays/360
                console.log(billMoneys)
                console.log(self.bidRate)
                console.log(leftDays)
                // 贴现金额
                self.discountMoney = (billMoneys-interestMoneys-discountAddMoney).toFixed(2);
                console.log(self.discountMoney)
                // 贴息金额
                self.interestMoney = (billMoneys-self.discountMoney).toFixed(2);
            },
            ok :function(){
                var self = this;
                if(self.bidRate==''){
                    self.$refs.bidRate_tip.style.display = 'block'   
                    return
                }else{
                    self.$refs.bidRate_tip.style.display = 'none'   
                    if(self.bidAdd==''){
                        self.$refs.bidAdd_tip.style.display = 'block'   
                        return
                    }else{
                        self.$refs.bidAdd_tip.style.display = 'none'  
                        //调用接口   立即报价
                        // quoteBill(
                        //     {
                        //         billId:self.billId,
                        //         quoteRate:self.bidRate,
                        //         quoteIncrement:self.bidAdd,
                        //         quoteDiscountAmount:self.interestMoney,
                        //         quoteAmount:self.discountMoney
                        //     },{emulateJSON:true,credentials:true}
                        // ).then(function(res){
                        //     console.log(res)
                        //     if(res.data.code==200){
                        //         self.modal1 = false;
                        //         self.$Message.success('报价成功');
                        //     } 
                        // },function(error){
                        //     console.log(error);  
                        // })
                        self.$http.post(globalData.data.Ip+'/bill/quote/bidding',
                            {
                                billId:self.billId,
                                quoteRate:self.bidRate,
                                quoteIncrement:self.bidAdd,
                                quoteDiscountAmount:self.interestMoney,
                                quoteAmount:self.discountMoney
                            },{emulateJSON:true,withCredentials:true}).then(function(res){
                                console.log(res)
                                if(res.data.code==200){
                                    self.modal1 = false;
                                    self.$Message.success('报价成功');
                                }                         
                            },function(error){
                                console.log(error);  
                        })
                        
                    }
                }          
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .inDetail {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .inDetail .inDetContent {
        width: 1280px;
        margin: 0 auto;
    }

    .inDetail .inDetContent .inDetTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .inDetail .inDetContent .inDetTitle a:hover {
        color: #f71327;
    }

    .inDetail .inDetContent .inDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .inDetail .inDetContent .inDetMain .inDetBill {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft {
        width: 520px;
        height: 326px;
        float: left;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft .inDetBillInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 31px;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft .inDetBillInfoItem .inDetBillInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoLeft .inDetBillInfoItem .inDetBillInfoItem_text {
        width: 360px;
        height: 20px;
        float: left;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoRight {
        width: 570px;
        height: 326px;
        float: left;
    }

    .inDetail .inDetContent .inDetMain .inDetBill .inDetBillInfo .inDetBillInfoRight img {
        display: block;
        width: 570px;
        height: 326px;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachInfo {
        padding: 0 10px;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachInfo img {
        display: block;
        width: 92px;
        height: 108px;
        margin-bottom: 10px;
    }

    .inDetail .inDetContent .inDetMain .inDetAttach .inDetAttachInfo .inDetAttachDes {
        width: 92px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }

    .inDetail .inDetContent .inDetMain .inDetBtn {
        width: 100%;
        height: 58px;
        padding-bottom: 120px;
    }

    .inDetail .inDetContent .inDetMain .inDetBtn .inDetBtnClick {
        display: block;
        width: 300px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        margin: 0 auto;
    }


    /* 弹框 */
    /* 弹框内容 */
    .bidPouupTop {
        width: 488px;
        height:18px;
        margin-bottom: 1px;
        background: white;
    }

    .bidPouupTop .bidPouupTopTitle {
        width: 300px;
        height: 18px;
        float: left;
        color: #f71327;
        font-size: 16px;
    }

    .bidPouupTop .bidPouupTopTitle span {
        color: #878787;
        font-size: 12px;
    }

    .bidPouupMain {
        width: 424px;
        height: 310px;
        padding: 20px 0;
        background: white;
    }

    .bidPouupMain .bidPouupRate {
        width: 100%;
        height: 70px;
        line-height: 46px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_text {
        width: 298px;
        height: 44px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_text input {
        display: block;
        width: 280px;
        height: 42px;
        float: left;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouupMain .bidPouupRate .bidRate_tip {
        width: 298px;
        height: 24px;
        color: red;
        line-height: 24px;
        display: none;
    }

    .bidPouupMain .bidPouupRate .bidPouupRate_text span {
        float: left;
        color: #f71327;
    }

    .bidPouupMain .bidPouupAdd {
        width: 100%;
        height: 70px;
        line-height: 46px;
    }

    .bidPouupMain .bidPouupAdd .bidPouupAdd_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupAdd .bidPouupAdd_text {
        width: 298px;
        height: 44px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupAdd .bidPouupAdd_text input {
        display: block;
        width: 280px;
        height: 42px;
        float: left;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouupMain .bidPouupAdd .bidAdd_tip {
        width: 298px;
        height: 24px;
        color: red;
        line-height: 24px;
        display: none;
    }

    .bidPouupMain .bidPouupInterest {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_text {
        width: 298px;
        height: 46px;
        float: left;
    }

    .bidPouupMain .bidPouupDiscount {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupDiscount .bidPouupDiscount_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupDiscount .bidPouupDiscount_text {
        width: 298px;
        height: 46px;
        float: left;
    }

    .ivu-modal-footer{
        border: 0;
    }

    .bidPouupBtn {
        width: 240px;
        height: 46px;
        color: white;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        background-color: #f71327;
    }

    .bidPouupBtn .bidPouupOffer {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
    }
</style>
