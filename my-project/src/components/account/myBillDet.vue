<template>
    <div class="myBillDet">
        <div class="myBillDetContent">
            <h2 class="myBillDetTitle" v-if="billData.billStatus=='successs'">
                <router-link class="accountSubNav" to="/acc/mypub/accAnn/trading">我的发布</router-link> >
                <router-link class="accountSubNav" to="/acc/mypub/accAnn/trading">交易中</router-link> >
                <span>汇票详情</span>
            </h2>
            <h2 class="myBillDetTitle" v-if="billData.billStatus=='successs'">
                <router-link class="accountSubNav" to="/acc/mypub/accAnn/success">我的发布</router-link> >
                <router-link class="accountSubNav" to="/acc/mypub/accAnn/success">交易成功</router-link> >
                <span>汇票详情</span>
            </h2>
            <h2 class="myBillDetTitle" v-if="billData.billStatus=='failure'">
                <router-link class="accountSubNav" to="/acc/mypub/accAnn/failure">我的发布</router-link> >
                <router-link class="accountSubNav" to="/acc/mypub/accAnn/failure">交易失败</router-link> >
                <span>汇票详情</span>
            </h2>
            <div class="myBillDetMain">
                <!--汇票信息-->
                <div class="myBillDetBill">
                    <h3 class="myBillDetBillTitle">汇票信息</h3>
                    <div class="myBillDetBillInfo">
                        <ul class="myBillDetBillInfoLeft">
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billNo}}
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billUserName}}
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billClassify}}
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billMoney}}
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billExpire}}
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billEndorse}}
                                </div>
                            </li>
                            <li class="myBillDetBillInfoItem">
                                <div class="myBillDetBillInfoItem_label">
                                    汇票瑕疵：
                                </div>
                                <div class="myBillDetBillInfoItem_text">
                                    {{billData.billImgHealth}}
                                </div>
                            </li>
                        </ul>
                        <div class="myBillDetBillInfoRight">
                            <img v-if="billData.billImg!=null&&billData.billImg.indexOf('http://')==-1&&billData.billImg.indexOf('https://')==-1" :src="'http://'+billData.billImg"/>
                            <img v-else :src="billData.billImg"/>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="myBillDetAttach">
                    <h3 class="myBillDetAttachTitle">背书及附件</h3>
                    <div class="myBillDetAttachInfo">
                        <img v-if="billData.billEvidence!=null&&billData.billEvidence.indexOf('http://')==-1&&billData.billEvidence.indexOf('https://')==-1" :src="'http://'+billData.billImg"/>
                        <img v-else :src="billData.billEvidence"/>
                        <p class="myBillDetAttachDes">背书.jpg</p>
                    </div>
                </div>
                <!--我要竞价-->
                <div class="myBillDetBtn" v-if="billData.billStatus==null||billData.billStatus=='交易中'">
                    <a class="myBillDetBtnBack" @click="giveUp">撤回汇票</a>
                    <a class="myBillDetBtnFinish" @click="finish">完成交易</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'MyBillDet',
    data () {
        return {
            billId:'',
            billData:''
        }
    },
    created:function(){
        this.getBillDet();
    },
    methods:{
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
        giveUp:function(){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定要撤回汇票吗？',
                onOk:function(){
                    //调用接口   撤回汇票
                    self.$http.get(globalData.data.Ip+'/bill/revoke',{params:
                        {
                            billId:self.billId
                        },emulateJSON:true,withCredentials:true}).then(function(res){ 
                            console.log(res)
                            if(res.data.code==200){
                                self.modal1 = false;
                                self.$Message.success('操作成功');
                                self.$router.push("/acc/pub/accAnn/'交易中'");
                            }                         
                        },function(error){
                            console.log(error);  
                    })
                }
            })
        },
        finish:function(){
            var self = this;
            self.$Modal.confirm({
                title:'提示',
                content:'你确定交易已完成吗？',
                onOk:function(){
                    //调用接口   交易完成
                    // self.$http.post(globalData.data.Ip+'/bill/quote/refuse',
                    //     {
                    //         quoteId:self.billId
                    //     },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                    //         if(res.data.code==200){
                    //             self.modal1 = false;
                    //             self.$Message.success('操作成功');
                    //         }                         
                    //     },function(error){
                    //         console.log(error);  
                    // })
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .myBillDet {
        width: 100%;
        height: auto;
        background: #f1f1f1;
    }

    .myBillDet .myBillDetContent {
        width: 982px;
        margin: 0 auto;
    }

    .myBillDet .myBillDetContent .myBillDetTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .myBillDet .myBillDetContent .myBillDetTitle a:hover {
        color: #f71327;
    }

    .myBillDet .myBillDetContent .myBillDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft {
        width: 430px;
        height: 218px;
        float: left;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft .myBillDetBillInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft .myBillDetBillInfoItem .myBillDetBillInfoItem_label {
        width: 106px;
        height: 20px;
        float: left;
        margin-right: 54px;
        text-align: right;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoLeft .myBillDetBillInfoItem .myBillDetBillInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBill .myBillDetBillInfo .myBillDetBillInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachInfo {
        padding: 0 10px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachInfo img {
        display: block;
        width: 92px;
        height: 108px;
        margin-bottom: 10px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetAttach .myBillDetAttachInfo .myBillDetAttachDes {
        width: 92px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBtn .myBillDetBtnBack {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        float: left;
        margin-right: 40px;
        border-radius: 4px;
    }

    .myBillDet .myBillDetContent .myBillDetMain .myBillDetBtn .myBillDetBtnFinish {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #d1d1d1;
        font-size: 16px;
        float: left;
        border-radius: 4px;
    }
</style>
