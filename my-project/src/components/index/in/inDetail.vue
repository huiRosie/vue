<template>
    <div class="inDetail">
        <div class="inDetContent">
            <h2 class="inDetTitle">
                <a @click="routerBack">我要收票</a> >
                <span>汇票详情</span>
            </h2>
            <div class="inDetMain">
                <div class="inDetMainBox">
                    <div class="inDetBill">
                        <div class="inDetBillTop">
                            <h3 class="inDetBillTitle inDetBillLeftTitle">票据信息</h3>
                            <h3 class="inDetBillTitle inDetBillRightTitle">操作</h3>
                        </div>
                        <div class="inDetBillInfo">
                            <div class="inDetBillInfoLeft">
                                <ul class="inDetBillInfoList">
                                    <li class="inDetBillInfoItem">
                                        <div class="inDetBillInfoItem_label">
                                            票据号：
                                        </div>
                                        <div class="inDetBillInfoItem_text">
                                            {{billData.billNo}}
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
                                            票面金额(元)：
                                        </div>
                                        <div class="inDetBillInfoItem_text">
                                            {{billData.billMoney}}
                                        </div>
                                    </li>
                                    <li class="inDetBillInfoItem">
                                        <div class="inDetBillInfoItem_label">
                                            交易方式：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="inDetBillInfoItem_text">
                                            {{billData.billFixedPrice}}元/每十万扣
                                        </div>
                                        <div v-else class="inDetBillInfoItem_text">
                                            竞价
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
                                            贴现金额：
                                        </div>
                                        <div v-if="billData.billQuoteType=='fixed'" class="inDetBillInfoItem_text">
                                            <span>{{((billData.billMoney-(billData.billMoney/100000)*billData.billFixedPrice)/10000).toFixed(2)}}</span>万元
                                        </div>
                                        <div v-else class="inDetBillInfoItem_text">
                                            参与竞价后了解详情
                                        </div>
                                    </li>
                                </ul>
                                <div class="inDetBillImgTitle">
                                    电子汇票截图<span>（点击下图可查看大图）</span>
                                </div>
                                <div class="inDetBillImgBox">
                                    <dl>
                                        <dt>
                                            <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" v-bind:src="'http://'+billData.billImg" @click="viewImgBack(billData.billImg)" />
                                            <img v-else v-bind:src="billData.billImg" @click="viewImgBack(billData.billImg)"/>
                                        </dt>
                                        <dd>汇票正面</dd>
                                    </dl>
                                    <dl v-if="billData.billEvidence!=null&&billData.billEvidence!=''">
                                        <dt>
                                            <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" v-bind:src="'http://'+billData.billEvidence" @click="viewImgBack(billData.billEvidence)"/>
                                            <img v-else v-bind:src="billData.billEvidence" @click="viewImgBack(billData.billEvidence)"/>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <dl v-if="billEndorseImg!=''&&billEndorseImg!=null&&billEndorseImg.length==1"  >
                                        <dt>
                                            <img v-if="billEndorseImg!=null&&billEndorseImg[0].indexOf('http://')==-1&&billEndorseImg[0].indexOf('https://')==-1" :src="'http://'+billEndorseImg[0]" @click="viewImgBack(billEndorseImg[0])"/>
                                            <img v-else :src="billEndorseImg[0]" @click="viewImgBack(billEndorseImg[0])"/>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <dl v-for="(imgItem,index) in billEndorseImg" :key="index"  v-if="billEndorseImg.length>1">
                                        <dt>
                                            <img v-if="imgItem!=null&&imgItem.indexOf('http://')==-1&&imgItem.indexOf('https://')==-1" :src="'http://'+imgItem" @click="viewImgBack(imgItem)"/>
                                            <img v-else :src="imgItem" @click="viewImgBack(imgItem)"/>
                                        </dt>
                                        <dd>汇票背书</dd>
                                    </dl>
                                    <Modal 
                                        title="查看大图" 
                                        v-model="visible" 
                                        width='1080' 
                                        ok-text='关闭' 
                                        cancel-text='' 
                                        class-name="vertical-center-modal">
                                        <img v-if="imgSrc.indexOf('http://')==-1&&imgSrc.indexOf('https://')==-1" :src="'http://'+imgSrc" style="width: 100%">
                                        <img v-if="imgSrc.indexOf('http')!=-1" :src="imgSrc" style="width: 100%">
                                    </Modal>
                                </div>
                            </div>
                            <div class="inDetBillInfoRight">
                                <div class="inDetBillOperate">
                                    <div class="inDetBillOperate_label">请确认订单后点击下单</div>
                                    <div v-if="billData.billQuoteType=='fixed'" class="inDetBillOperate_btn" @click="bidBill">
                                        立即下单
                                    </div>
                                    <div v-else class="inDetBillOperate_btn" @click="bidModel">
                                        立即竞价
                                    </div>
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
                                                    <input type="number" ref="bidRate" placeholder="0.00" v-model="bidRate" @keyup="caculate" value="" />
                                                    <span>%</span>
                                                </div>
                                                <div class="bidRate_tip" ref="bidRate_tip">请输入年利率</div>
                                            </div>
                                            <div class="bidPouupAdd">
                                                <div class="bidPouupAdd_label">
                                                    每十万加（元）:
                                                </div>
                                                <div class="bidPouupAdd_text">
                                                    <input type="number" ref="bidAdd" placeholder="0.00" v-model="bidAdd" @keyup="caculate" value="" />
                                                </div>
                                                <div class="bidAdd_tip" ref="bidAdd_tip">请输入年利率或每十万加（元）</div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalData from '../../globalData'

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
                billId:'',
                leftDays:'',
                visible:false,
                imgSrc:'',
                billEndorseImg:''
            }
        },
        created:function(){
            // this.getAuthInfo();
            this.getBillDet();
        },
        methods: {
            getBillDet:function(){
                //调用接口  获取汇票详情
                var self = this;
                self.billId = self.$route.params.billId;
                self.$http.get(globalData.data.Ip+'/bill/info',{params:{
                        billId:self.billId
                    }},{emulateJSON:true}).then(function(res){ 
                        self.billData = res.data.data;
                        self.billEndorseImg = (res.data.data.billEndorseImg).split(',');
                        // console.log(self.billData);       
                        // 计算汇票到期倒计时
                        // self.leftDays = globalData.methods.countDown(res.data.data.billExpire);                      
                    },function(error){
                        console.log(error);  
                })
            },
            // 我要竞价弹框
            bidModel:function(){
                this.modal1 = true
            },
            bidBill:function(){
                //调用接口  立即下单
                var self = this;
                self.billId = self.$route.params.billId;
                self.$Modal.confirm({
                    title:'提示',
                    content:'您确定要购买该汇票吗？',
                    onOk: () => {
                        self.$http.post(globalData.data.Ip+'/bill/order/generate',{
                                billId:self.billId
                            },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                                console.log(res);
                                if(res.data.code=='200'){
                                    self.$Message.success('操作成功，返回继续选购!');
                                   self.$router.go(-1);    
                                }       
                                if(res.data.code=='555'){
                                    self.$Message.warning('用户未登录，请登录后使用!');
                                //    self.$router.push('/login');    
                                }       
                            },function(error){
                                console.log(error);  
                        })
                    }
                }); 
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
                // console.log(billMoneys)
                // console.log(self.bidRate)
                // console.log(leftDays)
                // 贴现金额
                self.discountMoney = (billMoneys-interestMoneys-discountAddMoney).toFixed(2);
                // console.log(self.discountMoney)
                // 贴息金额
                self.interestMoney = (billMoneys-self.discountMoney).toFixed(2);
            },
            ok :function(){
                var self = this;
                if(self.bidRate==''&&self.bidAdd==''){
                    self.$refs.bidAdd_tip.style.display = 'block'   
                    return
                }else{
                    self.$refs.bidAdd_tip.style.display = 'none'   
                    if(self.bidRate==''){
                        self.bidRate=0.00;
                    }  
                    if(self.bidAdd==''){
                        self.bidAdd=0.00;
                    }
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
                                self.$router.go(-1);
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }          
            },
            routerBack:function(){
                this.$router.go(-1);
            },
            viewImgBack:function(imgSrc){
                this.visible = true;
                this.imgSrc = imgSrc;
            },
            // 获取认证信息
            getAuthInfo:function(){
                if(localStorage.getItem('eleUserAuth')!='success'||localStorage.getItem('eleCompanyAuth')!='success'){
                    this.$Modal.confirm({
                        title:'提示',
                        content:'您还未认证，请先去认证后使用',
                        onOk: () => {
                            this.$Message.info('Clicked ok');
                        },
                        onCancel: () => {
                            this.$Message.info('Clicked cancel');
                        }
                    });   
                }
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .inDetail{
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
        .inDetContent{
            width: 1280px;
            margin: 0 auto;
            .inDetTitle{
                width: 100%;
                height: 58px;
                line-height: 58px;
                text-indent: 30px;
                margin-bottom: 1px;
                background: white;
                a:hover{
                    color: #f71327;
                }
            }
            .inDetMain{
                width: 100%;
                height: auto;
                background: white;
                .inDetMainBox{
                    width: 1280px;
                    height: 600px;
                    margin: 0 auto;
                    padding: 50px 170px;
                    .inDetBill {
                        width: 940px;
                        height: 500px;
                        margin: 0 auto;
                        overflow: hidden;
                        border: 1px solid #eee;
                        .inDetBillTop{
                            width: 940px;
                            height: 43px;
                            .inDetBillTitle{
                                height:43px;
                                line-height: 43px;
                                text-align: center;
                                float: left;
                                background: #f8f8f8;
                                border-bottom: 1px solid #eee;
                            }
                            .inDetBillLeftTitle{
                                width: 652px;
                                border-right: 1px solid #eee;
                            }
                            .inDetBillRightTitle{
                                width: 286px;
                            }
                        }
                        .inDetBillInfo {
                            width: 100%;
                            height: 456px;
                            overflow: hidden;
                            .inDetBillInfoLeft {
                                width: 652px;
                                height: 456px;
                                float: left;
                                border-right: 1px solid #eee;
                                .inDetBillInfoList{
                                    width: 100%;
                                    height: 203px;
                                    padding: 20px 45px;
                                    .inDetBillInfoItem {
                                        width: 100%;
                                        height: 20px;
                                        line-height: 20px;
                                        margin-bottom: 8px;
                                        overflow: hidden;
                                        .inDetBillInfoItem_label {
                                            width: auto;
                                            float: left;
                                            margin-right: 4px;
                                        }
                                        .inDetBillInfoItem_text {
                                            width: auto;
                                            float: left;
                                            span{
                                                color: #f71327;
                                            }
                                        }
                                    }
                                }
                                .inDetBillImgTitle{
                                    width: 652px;
                                    height: 44px;
                                    line-height: 44px;
                                    text-align: center;
                                    border-top: 1px solid #eee;
                                    border-bottom: 1px solid #eee;
                                    span{
                                        font-size: 12px;
                                        color: #878787;
                                    }
                                }
                                .inDetBillImgBox{
                                    width: 652px;
                                    height: 208px;
                                    overflow-y: auto;
                                    overflow-x: hidden;
                                    padding: 20px 44px;
                                    dl{
                                        float: left;
                                        margin:0 60px 20px 0;
                                        dt{
                                            margin-bottom: 5px;
                                            img{
                                                display: block;
                                                width: 142px;
                                                height: 80px;
                                                cursor: pointer;
                                            }
                                        }
                                        dd{
                                            text-align: center;
                                        }
                                    }
                                    dl:nth-child(3),dl:nth-child(6){
                                        margin: 0;
                                    }
                                }
                            }
                            .inDetBillInfoRight {
                                width: 286px;
                                height: 456px;
                                float: left;
                                .inDetBillOperate{
                                    width: 158px;
                                    height: auto;
                                    margin: 158px auto 0;
                                    .inDetBillOperate_label{
                                        width: 158px;
                                        text-align: center;
                                        margin-bottom: 24px;
                                    }                                    
                                    .inDetBillOperate_btn{
                                        width: 158px;
                                        height: 44px;
                                        line-height: 44px;
                                        text-align: center;
                                        color: #fff;
                                        border-radius: 2px;
                                        cursor: pointer;
                                        background-image: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /* 弹框 */
    /* 弹框内容 */
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
        }
    }

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
