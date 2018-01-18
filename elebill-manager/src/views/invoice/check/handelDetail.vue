<template>
    <div class="handelDet">
        <div class="topNav" v-if="billInfo.billStatus=='validate_success'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/validate_success'>待处理</router-link> > 
            <span>立即处理</span>
        </div>
        <div class="topNav" v-if="billInfo.billStatus=='success'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/success'>交易成功</router-link> > 
            <span>查看详情</span>
        </div>
        <div class="topNav" v-if="billInfo.billStatus=='failure'">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/failure'>交易失败</router-link> > 
            <span>查看详情</span>
        </div>
        <div class="handelDetMain">
            <!--汇票信息-->
            <div class="handelDet">
                <h3 class="handelDetTitle">汇票信息</h3>
                <div class="handelDetInfo">
                    <ul class="handelDetInfoLeft">
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                票据号：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billNo}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                承兑人全称：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billUserName}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                票据类型：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billClassify}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                票面金额(元)：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billMoney}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                汇票到期日：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billExpire}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                背书次数：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billEndorse}}
                            </div>
                        </li>
                        <li class="handelDetInfoItem">
                            <div class="handelDetInfoItem_label">
                                汇票瑕疵：
                            </div>
                            <div class="handelDetInfoItem_text">
                                {{billInfo.billImgHealth}}
                            </div>
                        </li>
                    </ul>
                    <div class="handelDetInfoRight">
                        <img v-if="billInfo.billImg!=null&&billInfo.billImg!=''&&billInfo.billImg.indexOf('http://')==-1&&billInfo.billImg.indexOf('https://')==-1" :src="'http://'+billInfo.billImg" />
                        <img v-else :src="billInfo.billImg"  />
                    </div>
                </div>
            </div>
            <!--背书及附件-->
            <div class="handelDetAttach">
                <h3 class="handelDetAttachTitle">背书及附件</h3>
                <div class="handelDetAttachInfo">
                    <img v-if="billInfo.billEvidence!=null&&billInfo.billEvidence!=''&&billInfo.billEvidence.indexOf('http://')==-1&&billInfo.billEvidence.indexOf('https://')==-1" :src="'http://'+billInfo.billEvidence"/>
                    <img v-else :src="billInfo.billEvidence"/>
                </div>
            </div>
            <!--交易成功或失败-->
            <div class="handelDetBtn" v-if="billInfo.billStatus=='validate_success'">
                <a class="handelDetBtnRefer" @click="tradeBill('success')">交易成功</a>
                <a class="handelDetBtnPass" @click="bidModal">交易失败</a>
                <!-- 点击出现弹框 -->
                <Modal
                    v-model="modal"
                    title="交易失败原因(请输入交易失败原因)"
                    class-name="vertical-center-modal">
                    <div slot="header" class="bidPouupTop">
                        <h2 class="bidPouupTopTitle">交易失败原因<span> (请输入交易失败原因)</span></h2>
                    </div>
                    <div class="bidPouupMain">
                        <div class="bidPouupMain_label">
                            交易失败原因：
                        </div>
                        <div class="bidPouupMain_text">
                            <textarea name="" v-model="billFailReason" ></textarea>
                        </div>
                        <div class="bid_tip" ref="bid_tip">请输入交易失败原因</div>
                    </div>
                    <div slot="footer" class="bidPouupBtn">
                        <a @click="tradeBill('failure')" class="bidPouupFail">交易失败</a>
                    </div>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchBillDetail,fetchTradeBill } from '../../../assets/js/billApi'


export default {
    name: 'handelDet',
    data () {
        return {
            modal:false,
            billInfo:'',
            billFailReason:'',
            configs: {
                width:200,
                height:200,
                maskWidth:100,
                maskHeight:100,
                maskColor:'white',
                maskOpacity:0.2
           }
        }
    },
    created:function(){
        this.getBillDetail();
    },
    methods:{
        // 获取票据详情
        getBillDetail:function(){
            var self = this;
            self.billId = self.$route.params.billId;
            fetchBillDetail({
                billId:self.billId
            },{emulateJSON:true,credentials:true}).then(function(res){
                self.billInfo = res.data.data;
                // console.log(self.billInfo)
            })
        },
        // 交易成功 交易失败
        tradeBill:function(billStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            if(billStatus=='failure'&&self.billFailReason==''){
                self.$Modal.warning({
                    title:'提示',
                    content:'请输入交易失败原因'
                });
                return;
            }
            // 将数据格式由json格式转换成字符串形式
            var data = self.$qs.stringify({
                billId:self.billId,
                billStatus:billStatus,
                billDesc:self.billFailReason
            });
            fetchTradeBill(data).then(function(res){
                // console.log(res)
                self.$Message.success({
                    content:'操作成功'
                });
                self.$router.push('/in/check/validate_success');
            })
        },
        bidModal:function(){
            this.modal = true
        },
        checkFail:function(){
            this.modal = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .handelDet {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
        margin-bottom: 1px;
    }

    .handelDet .handelDetMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .handelDet .handelDetMain .handelDet {
        width: 942px;
        height: auto;
        padding: 20px 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDet .handelDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft .handelDetInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft .handelDetInfoItem .handelDetInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoLeft .handelDetInfoItem .handelDetInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .handelDet .handelDetMain .handelDet .handelDetInfo .handelDetInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .handelDet .handelDetMain .handelDetAttach {
        width: 942px;
        height: auto;
        padding: 0 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .handelDet .handelDetMain .handelDetAttach .handelDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .handelDet .handelDetMain .handelDetAttach .handelDetAttachInfo {
        padding: 0 10px;
    }

    .handelDet .handelDetMain .handelDetAttach .handelDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    .handelDet .handelDetMain .handelDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .handelDet .handelDetMain .handelDetBtn .handelDetBtnRefer,
    .handelDet .handelDetMain .handelDetBtn .handelDetBtnPass{
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        border-radius: 4px;
        float: left;
    }

    .handelDet .handelDetMain .handelDetBtn .handelDetBtnRefer{
        margin-right:20px;
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
        height: 210px;
        padding: 20px 0;
        background: white;
    }

    .bidPouupMain .bidPouupMain_label {
        width: 100px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupMain_text {
        width: 298px;
        height:180px;
        float: left;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupMain_text textarea {
        display: block;
        width: 280px;
        height:180px;
        float: left;
        line-height: 26px;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouupMain .bid_tip {
        width: 298px;
        height: 24px;
        color: red;
        line-height: 24px;
        display: none;
    }

    .bidPouupMain .bidPouup_text span {
        float: left;
        color: #f71327;
    }

    .ivu-modal-footer{
        border: 0;
    }

    .bidPouupBtn {
        width: 240px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        background-color: #f71327;
    }

    .bidPouupBtn .bidPouupFail {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
    } 
</style>
