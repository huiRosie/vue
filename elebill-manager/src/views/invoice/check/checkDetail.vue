<template>
    <div class="checkDet">
        <div class="topNav">
            <span>收票中心</span> > 
            <router-link class="topNavLink" to='/in/check/validating'>待审核</router-link> > 
            <span>立即审核</span>
        </div>
        <div class="checkDetMain">
            <!--审核录入-->
            <div class="checkDetBox">
                <h3 class="checkDetTitle">汇票审核</h3>
                <div class="checkDetInfo">
                    <div class="checkDetInfoTitle">票据信息</div>
                    <ul class="checkDetInfoTop">
                        <li class="checkDetInfoTopItem checkDetInfoTopItemLeft">
                            <div class="checkDetInfoTopItem_label">票据号</div>
                            <div class="checkDetInfoTopItem_text">
                                <input type="text" placeholder="请输入票据号" v-model="billNo">
                            </div>
                        </li>
                        <li class="checkDetInfoTopItem checkDetInfoTopItemRight">
                            <div class="checkDetInfoTopItem_label">承兑人</div>
                            <div class="checkDetInfoTopItem_text">
                                <input type="text" v-model="billUserName">
                            </div>
                        </li>
                        <li class="checkDetInfoTopItem checkDetInfoTopItemLeft">
                            <div class="checkDetInfoTopItem_label">票面金额(元)</div>
                            <div class="checkDetInfoTopItem_text">
                                <input type="text" v-model="billMoney">
                            </div>
                        </li>
                        <li class="checkDetInfoTopItem checkDetInfoTopItemRight">
                            <div class="checkDetInfoTopItem_label">承兑机构</div>
                            <div class="checkDetInfoTopItem_text">
                                <select v-model="billAcceptOrg" name="">
                                    <option disabled>请选择</option>
                                    <option v-for="orgItem in orgList"  :key="orgItem">{{orgItem}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="checkDetInfoTopItem checkDetInfoTopItemLeft">
                            <div class="checkDetInfoTopItem_label">一口价</div>
                            <div class="checkDetInfoTopItem_text" style="text-indent:14px;">
                                <span>{{billFixedPrice}}</span>元/每十万加
                            </div>
                        </li>
                        <li class="checkDetInfoTopItem checkDetInfoTopItemRight">
                            <div class="checkDetInfoTopItem_label">到期日期</div>
                            <div class="checkDetInfoTopItem_text">
                                <DatePicker  type="date" format='yyyy-MM-dd' v-model="billExpire" placeholder="请选择汇票到期日" style="width:290px;margin:2px 0;"></DatePicker>
                            </div>
                        </li>
                    </ul>
                    <ul class="checkDetInfoBot">
                        <li class="checkDetInfoBotItem">
                            <div class="checkDetInfoTopItem_label">贴现金额（元）</div>
                            <div class="checkDetInfoTopItem_text" style="text-indent:14px;">
                                {{billMoney-(billMoney/100000)*billFixedPrice}}
                            </div>
                        </li>
                        <li class="checkDetInfoBotItem">
                            <div class="checkDetInfoTopItem_label">汇票类型</div>
                            <div class="checkDetInfoTopItem_text">
                                <select v-model="billClassify" name="">
                                    <option disabled>请选择</option>
                                    <option value="银票">银票</option>
                                    <option value="商票">商票</option>
                                </select>
                            </div>
                        </li>
                        <li class="checkDetInfoBotItem">
                            <div class="checkDetInfoTopItem_label">有无回头:</div>
                            <div class="checkDetInfoTopItem_text">
                                <RadioGroup v-model="billBackToBack">
                                    <Radio label="有回头"></Radio>
                                    <Radio label="无回头"></Radio>
                                </RadioGroup>
                            </div>
                        </li>
                    </ul>
                    <div class="checkDetInfoImgTitle">电子汇票截图<span>（点击下图查看大图）</span></div>
                    <div class="checkDetInfoImgBox">
                        <dl>
                            <dt>
                                <img v-if="billInfo.billImg!=null&&billInfo.billImg.indexOf('http://')==-1&&billInfo.billImg.indexOf('https://')==-1" v-bind:src="'http://'+billInfo.billImg" @click="viewImgBack(billInfo.billImg)" />
                                <img v-else v-bind:src="billInfo.billImg" @click="viewImgBack(billInfo.billImg)"/>
                            </dt>
                            <dd>汇票正面</dd>
                        </dl>
                        <dl v-if="billInfo.billEvidence!=''&&billInfo.billEvidence!=null">
                            <dt>
                                <img v-if="billInfo.billEvidence!=null&&billInfo.billEvidence.indexOf('http://')==-1&&billInfo.billEvidence.indexOf('https://')==-1" :src="'http://'+billInfo.billEvidence" @click="viewImgBack(billInfo.billEvidence)"/>
                                <img v-else :src="billInfo.billEvidence" @click="viewImgBack(billInfo.billEvidence)"/>
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
                        <div class="dragBox" v-if="visible" @mousedown="drag">
                            <div class="dragBoxTitle">
                                <div class="dragBoxTip">查看大图</div>
                                <div class="dragBoxClose" @click="close">X</div>
                            </div>
                            <div class="dragBoxImg">
                                <img v-if="imgSrc.indexOf('http://')==-1&&imgSrc.indexOf('https://')==-1" :src="'http://'+imgSrc" style="width: 100%">
                                <img v-else :src="imgSrc" style="width: 100%">
                            </div>
                            <div class="dragBoxBottom">
                                <div class="dragBoxClose" @click="close">关闭</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--审核操作-->
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

export default {
    name: 'checkDet',
    data () {
        return {
            modal:false,
            billNo:'',
            billUserName:'',
            billMoney:'',
            billAcceptOrg:'国股',
            billClassify:'银票',
            billBackToBack:'无回头',
            billExpire:'',
            billImg:'',
            billEvidence:'',
            billEndorseImg:'',
            billFixedPrice:'',
            billId:'',
            billInfo:'',
            failText:'',
            billStatus:'',
            visible: false,
            imgSrc:'',
            orgList:[
                '国股','城商','三农','村镇','财务公司','其他'
            ]
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
                self.billNo = self.billInfo.billNo;
                self.billUserName = self.billInfo.billUserName;
                self.billMoney = self.billInfo.billMoney;
                self.billFixedPrice = self.billInfo.billFixedPrice;
                self.billAcceptOrg = self.billInfo.billAcceptOrg;
                self.billClassify = self.billInfo.billClassify;
                self.billBackToBack = self.billInfo.billReturn;
                self.billExpire = self.billInfo.billExpire;
                self.billImg = self.billInfo.billImg;
                self.billEndorseImg = (res.data.data.billEndorseImg).split(',');
                self.billEvidence = self.billInfo.billEvidence;
                self.billStatus = self.billInfo.billStatus;
                console.log(self.billInfo)
            })
        },
        // 票据审核通过
        checkSuccess:function(checkStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            var billId=self.billId;
            if(self.billNo==null||self.billMoney==null||self.billClassify==null||self.billExpire==null||self.billAcceptOrg==null||self.billBackToBack==null||self.billUserName==null){
                self.$Modal.warning({
                    title:'提示',
                    content:'请将汇票信息填写完整'
                });
                return;
            }
            // console.log(billId);
            var data = self.$qs.stringify({
                billId:billId,
                billStatus:checkStatus,
                billMoney:self.billMoney,
                billClassify:self.billClassify,
                billExpire:self.changeDate(self.billExpire),
                billAcceptOrg:self.billAcceptOrg,
                billReturn:self.billReturn,
                billNo:self.billNo,
                billUserName:self.billUserName
            });
            // console.log(data)
            self.$Modal.confirm({
                title:'提示',
                content:'您确定收入当前汇票吗？',
                onOk:function(){
                    checkBill(data,{emulateJSON:true,withCredentials: true}).then(function(res){
                        console.log(res);
                        self.$router.push('/in/check/validating');
                    })
                }
            })
        },
        // 票据审核未通过
        checkFail:function(checkStatus){
            var self = this;
            self.billId = self.$route.params.billId;
            var billId=self.billId;
            var data = self.$qs.stringify({
                billId:billId,
                billStatus:checkStatus,
                billMoney:self.billMoney,
                billClassify:self.billClassify,
                billExpire:self.changeDate(self.billExpire),
                billAcceptOrg:self.billAcceptOrg,
                billReturn:self.billReturn,
                billNo:self.billNo,
                billUserName:self.billUserName,
                billDesc:self.failText
            });
            if(self.failText==''){
                self.$Modal.warning({
                    title:'提示',
                    content:'请输入审核失败原因！'
                })
                return;
            }
            checkBill(data,{emulateJSON:true,withCredentials: true}).then(function(res){
                // console.log(res);
                self.modal = false;
                self.$router.push('/in/check/validating');
            })
        },
        // 审核失败弹框
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
        // 预览图片
        viewImgBack:function(imgSrc){
            this.visible = true;
            this.imgSrc = imgSrc;
        },
        close:function(){
            this.visible = false;
        },
        drag:function(e){
            // console.log(e)
            var oDiv=e.path[1];
            // console.log(oDiv);
            // console.log(e.clientX);
            // console.log(e.clientY);
            // console.log(oDiv.offsetLeft);
            // console.log(oDiv.offsetTop);
            var disX = e.clientX -oDiv.offsetLeft -540;
            var disY = e.clientY - oDiv.offsetTop -285;
            document.onmousemove=function(e){
                e.preventDefault();
                var l = e.clientX-disX;
                var t = e.clientY-disY;
                oDiv.style.left = l+'px';
                oDiv.style.top = t+'px';
            }
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .checkDet {
        width: 982px;
        height: auto;
        overflow: hidden;
        .topNav{
            width: 100%;
            height: 58px;
            line-height: 30px;
            padding: 14px 30px;
            border-bottom: 1px solid #eee;
        }
        .checkDetMain {
            width: 100%;
            height: 638px;
            .checkDetBox {
                width: 982px;
                height: auto;
                padding: 20px 30px 30px;
                margin: 0 auto;
                overflow: hidden;
                .checkDetTitle {
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    text-indent: 10px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    border-left: 5px solid #f71327;
                }
                .checkDetInfo {
                    width: 100%;
                    height: auto;
                    overflow: hidden;
                    border: 1px solid #eee;
                    .checkDetInfoTitle{
                        width: 100%;
                        height: 43px;
                        line-height: 42px;
                        text-align: center;
                        background: #f8f8f8;
                        border-bottom: 1px solid #eee;
                    }
                    .checkDetInfoTop{
                        width: 100%;
                        height: 148px;
                        overflow: hidden;
                        border-bottom: 1px solid #eee;
                        .checkDetInfoTopItem{
                            width: 455px;
                            height: 50px;
                            line-height: 50px;
                            float: left;
                            overflow: hidden;
                            border-bottom: 1px solid #eee;
                            .checkDetInfoTopItem_label{
                                width: 162px;
                                text-align: center;
                                float: left;
                                border-right: 1px solid #eee;
                                border-bottom: 1px solid #eee;
                            }
                            .checkDetInfoTopItem_text{
                                width: 292px;
                                float: left;
                                border-right: 1px solid #eee;
                                border-bottom: 1px solid #eee;
                                span{
                                    color: #f71327;
                                }
                                input{
                                    width: 291px;
                                    border: 0;
                                    text-indent: 14px;
                                }
                                select{
                                    width: 291px;
                                    height: 48px;
                                    border: 0;
                                    text-indent: 14px;
                                }
                            }
                        }
                        .checkDetInfoTopItemLeft{
                            margin-right: 10px;
                            .checkDetInfoTopItem_text{
                                border-right: 1px solid #eee;
                            }
                        }
                        .checkDetInfoTopItemRight{
                            .checkDetInfoTopItem_label{
                                border-left: 1px solid #eee;
                            }
                            .checkDetInfoTopItem_text{
                                border-right: 0;
                            }
                        }
                    }
                    .checkDetInfoBot{
                        width: 100%;
                        height: 48px;
                        line-height: 48px;
                        overflow: hidden;
                        border-bottom: 1px solid #eee;
                        .checkDetInfoBotItem{
                            width: 260px;
                            height: 48px;
                            float: left;
                            margin-right: 10px;
                            .checkDetInfoTopItem_label{
                                width: 120px;
                                float: left;
                                text-align: center;
                                border-right: 1px solid #eee;
                            }
                            .checkDetInfoTopItem_text{
                                width: 140px;
                                float: left;
                                border-right: 1px solid #eee;
                                select{
                                    border: 0;
                                    width: 138px;
                                    text-indent: 14px;
                                }
                            }
                        }
                        .checkDetInfoBotItem:nth-child(2){
                            .checkDetInfoTopItem_label{
                                border-left: 1px solid #eee;
                            }
                        }
                        .checkDetInfoBotItem:last-child{
                            width: 380px;
                            height: 48px;
                            float: left;
                            margin: 0;
                            .checkDetInfoTopItem_label{
                                border: 0;
                                border-left: 1px solid #eee;
                            }
                            .checkDetInfoTopItem_text{
                                border: 0;
                            }
                        }
                    }
                    .checkDetInfoImgTitle{
                        width: 100%;
                        height: 43px;
                        line-height: 42px;
                        text-align: center;
                        background: #f8f8f8;
                        border-bottom: 1px solid #eee;
                    }
                    .checkDetInfoImgBox{
                        width: 100%;
                        height: 180px;
                        overflow-x: hidden;
                        overflow-y: auto;
                        padding: 20px 44px;
                        dl{
                            float: left;
                            margin-right: 69px;
                            dt{
                                margin-bottom: 14px;
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
                        .dragBox{
                            width: 1080px;
                            height: 570px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -285px;
                            margin-left: -540px;
                            z-index: 99;
                            border:1px solid #ccc;
                            border-radius: 5px;
                            background: #fff;
                            cursor: move;
                            .dragBoxTitle{
                                width: 100%;
                                height: 50px;
                                line-height: 50px;
                                border-bottom: 1px solid #ccc;
                                .dragBoxTip{
                                    float: left;
                                    padding-left: 20px;
                                }
                                .dragBoxClose{
                                    float: right;
                                    padding-right: 20px;
                                    cursor: pointer;
                                    font-size: 20px;
                                    color: #ccc;
                                }
                            }
                            .dragBoxImg{
                                width: 1078px;
                                height: 458px;
                                padding: 20px;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .dragBoxBottom{
                                width: 100%;
                                height: 60px;
                                line-height: 40px;
                                border-top: 1px solid #ccc;
                                .dragBoxClose{
                                    float: right;
                                    cursor: pointer;
                                    width: 80px;
                                    height: 40px;
                                    line-height: 40px;
                                    text-align: center;
                                    background: #f71327;
                                    color: #fff;
                                    border-radius: 4px;
                                    margin:10px 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
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
