<template>
    <div class="checkDet">
        <div class="topNav">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/validating'>待审核</router-link> > 
            <span>立即审核</span>
        </div>
        <div class="checkDetMain">
            <!--背书文件-->
            <div class="checkDetAttach">
                <h3 class="checkDetAttachTitle">背书文件</h3>
                <div class="checkDetAttachInfo">
                    <img :src="'http://'+billInfo.billEvidence"/>
                </div>
            </div>
            <!--审核录入-->
            <div class="checkDet">
                <h3 class="checkDetTitle">汇票信息</h3>
                <div class="checkDetInfo">
                    <div class="checkDetInfoRight">
                        <imgZoom :src="'http://'+billInfo.billImg" width="529" height="302" :bigsrc="'http://'+billInfo.billImg" :configs="configs" />
                    </div>
                    <ul class="checkDetInfoLeft">
                        <li class="checkDetInfoItem">
                            <div class="checkDetInfoItem_label">
                                票面金额：
                            </div>
                            <div class="checkDetInfoItem_text">
                                <input type="text" v-model="billMoney">
                                <span>(万元)</span>
                            </div>
                        </li>
                        <li class="checkDetInfoItem">
                            <div class="checkDetInfoItem_label">
                                票据类型：
                            </div>
                            <div class="checkDetInfoItem_text">
                                <select v-model="billClassify" name="">
                                    <option disabled>请选择</option>
                                    <option value="电票">电票</option>
                                    <option value="纸票">纸票</option>
                                </select>
                            </div>
                        </li>
                        <li class="checkDetInfoItem checkDetInfoExpire">
                            <div class="checkDetInfoItem_label">
                                汇票到期日：
                            </div>
                            <div class="checkDetInfoItem_text">
                                <DatePicker  type="date" format='yyyy-MM-dd' v-model="billExpire" placeholder="请选择汇票到期日" style="width:200px;"></DatePicker>
                            </div>
                        </li>
                        <li class="checkDetInfoItem">
                            <div class="checkDetInfoItem_label">
                                背书次数：
                            </div>
                            <div class="checkDetInfoItem_text">
                                <input type="text" v-model="billEndorse">
                            </div>
                        </li>
                        <li class="checkDetInfoItem">
                            <div class="checkDetInfoItem_label">
                                汇票瑕疵：
                            </div>
                            <div class="checkDetInfoItem_text">
                                <select v-model="billImgHealth" name="">
                                    <option disabled>请选择</option>
                                    <option value="无">无</option>
                                    <option value="有">有</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="checkDetInfoList">
                    <li class="checkDetInfoItem">
                        <div class="checkDetInfoItem_label">
                            票据号：
                        </div>
                        <div class="checkDetInfoItem_text">
                            <input type="text" v-model="billNo">
                        </div>
                    </li>
                    <li class="checkDetInfoItem">
                        <div class="checkDetInfoItem_label">
                            承兑人全称：
                        </div>
                        <div class="checkDetInfoItem_text">
                            <input type="text" v-model="billUserName">
                        </div>
                    </li>
                </ul>
            </div>
            <!--票据审核-->
            <div class="checkDetBtn">
                <a class="checkDetBtnRefer" @click="checkModal">审核未通过</a>
                <a class="checkDetBtnPass" @click="checkSuccess('validate_success')">审核通过</a>
                <!-- 点击出现弹框 -->
                <Modal
                    v-model="modal"
                    title="审核未通过原因(请输入审核未通过原因)"
                    class-name="vertical-center-modal">
                    <div slot="header" class="bidPouupTop">
                        <h2 class="bidPouupTopTitle">审核未通过原因<span> (请输入审核未通过原因)</span></h2>
                    </div>
                    <div class="bidPouupMain">
                        <div class="bidPouupMain_label">
                            审核未通过原因：
                        </div>
                        <div class="bidPouupMain_text">
                            <textarea name="" v-model="failText" ></textarea>
                        </div>
                        <div class="bid_tip" ref="bid_tip">请输入审核未通过原因</div>
                    </div>
                    <div slot="footer" class="bidPouupBtn">
                        <a @click="checkFail('failure')" class="bidPouupFail">审核失败</a>
                    </div>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchBillDetail,checkBill } from '../../../assets/js/billApi'
import imgZoom from 'vue2.0-zoom'

export default {
    name: 'checkDet',
    data () {
        return {
            modal:false,
            billMoney:'',
            billClassify:'',
            billExpire:'',
            billEndorse:'',
            billImgHealth:'',
            billNo:'',
            billUserName:'',
            billId:'',
            billInfo:'',
            failText:'',
            billStatus:'',
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
    components: { 
        imgZoom 
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
                self.billMoney = self.billInfo.billMoney;
                self.billClassify = self.billInfo.billClassify;
                self.billExpire = self.billInfo.billExpire;
                self.billEndorse = self.billInfo.billEndorse;
                self.billImgHealth = self.billInfo.billImgHealth;
                self.billNo = self.billInfo.billNo;
                self.billUserName = self.billInfo.billUserName;
                self.billStatus = self.billInfo.billStatus;
                console.log(self.billInfo)
            })
        },
        // 票据审核通过
        checkSuccess:function(checkStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            var billId=self.billId;
            if(self.billMoney==''||self.billClassify==''||self.billExpire==''||self.billEndorse==''||self.billImgHealth==''||self.billNo==''||self.billUserName==''){
                self.$Modal.warning({
                    title:'提示',
                    content:'请将汇票信息填写完整'
                });
                return
            }
            // console.log(billId);
            var data = self.$qs.stringify({
                billId:billId,
                billStatus:checkStatus,
                billMoney:self.billMoney,
                billClassify:self.billClassify,
                billExpire:self.changeDate(self.billExpire),
                billEndorse:self.billEndorse,
                billImgHealth:self.billImgHealth,
                billNo:self.billNo,
                billUserName:self.billUserName
            });
            console.log(data)
            checkBill(data,{emulateJSON:true,withCredentials: true}).then(function(res){
                console.log(res);
                self.$router.push('/in/check/validating');
            })
        },
        // 票据审核未通过
        checkFail:function(checkStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            var billId=self.billId;
            console.log(billId);
            var data = self.$qs.stringify({
                billId:billId,
                billStatus:checkStatus,
                billMoney:self.billMoney,
                billClassify:self.billClassify,
                billExpire:self.changeDate(self.billExpire),
                billEndorse:self.billEndorse,
                billImgHealth:self.billImgHealth,
                billNo:self.billNo,
                billUserName:self.billUserName
            });
            // console.log(data)
            checkBill(data,{emulateJSON:true,withCredentials: true}).then(function(res){
                console.log(res);
                self.modal = false;
                self.$router.push('/in/check/validating');
            })
        },
        checkModal:function(){
            this.modal = true;
        },
        // 日期格式转换，标准时间转2017-12-28
        changeDate:function(dates) { 
            var year = dates.getFullYear(); 
            var month = dates.getMonth() + 1; 
            var days = dates.getDate(); 
            return year + "-" + this.addNum(month) + "-" + this.addNum(days); 
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
    .checkDet {
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

    .checkDet .checkDetMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .checkDet .checkDetMain .checkDet {
        width: 982px;
        height: auto;
        padding: 20px 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .checkDet .checkDetMain .checkDet .checkDetTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft {
        width: 318px;
        height: 302px;
        float: left;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft .checkDetInfoItem {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft .checkDetInfoItem .checkDetInfoItem_label {
        width: 106px;
        height: 46px;
        float: left;
        text-align: right;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft .checkDetInfoItem .checkDetInfoItem_text {
        width: 202px;
        height: 46px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft .checkDetInfoItem .checkDetInfoItem_text input,
    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft .checkDetInfoItem .checkDetInfoItem_text select{
        width: 200px;
        height: 44px;
        float: left;
        display: block;
        border-radius: 4px;
        border: 0;
        text-indent: 14px;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoLeft .checkDetInfoExpire .checkDetInfoItem_text{
        border: 0;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoRight {
        width: 529px;
        height: 302px;
        float: left;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfo .checkDetInfoRight img {
        display: block;
        width: 529px;
        height: 302px;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfoList{
        width: 100%;
        height: 46px;
        overflow: hidden;
        margin-top: 20px;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfoList .checkDetInfoItem{
        width: 50%;
        height: 46px;
        float: left;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfoList .checkDetInfoItem .checkDetInfoItem_label {
        width: 106px;
        height: 46px;
        float: left;
        line-height: 46px;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfoList .checkDetInfoItem .checkDetInfoItem_text {
        width: 272px;
        height: 46px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .checkDet .checkDetMain .checkDet .checkDetInfoList .checkDetInfoItem .checkDetInfoItem_text input{
        width: 270px;
        height: 44px;
        float: left;
        display: block;
        border-radius: 4px;
        border: 0;
        text-indent: 14px;
    }

    .checkDet .checkDetMain .checkDetAttach {
        width: 982px;
        height: auto;
        padding: 20px 30px 0;
        margin: 0 auto;
        overflow: hidden;
    }

    .checkDet .checkDetMain .checkDetAttach .checkDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .checkDet .checkDetMain .checkDetAttach .checkDetAttachInfo {
        padding: 0 10px;
    }

    .checkDet .checkDetMain .checkDetAttach .checkDetAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
        margin-bottom: 10px;
    }

    .checkDet .checkDetMain .checkDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .checkDet .checkDetMain .checkDetBtn .checkDetBtnRefer,
    .checkDet .checkDetMain .checkDetBtn .checkDetBtnPass{
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

    .checkDet .checkDetMain .checkDetBtn .checkDetBtnRefer{
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
