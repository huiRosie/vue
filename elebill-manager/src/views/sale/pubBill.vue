<template>
    <div class="pubBill">
        <div class="topNav">
            <span>出票中心</span> > 
            <span>发布汇票</span>
        </div>
        <div class="pubBillMain">
            <!--汇票信息-->
            <div class="pubBill">
                <h3 class="pubBillTitle">汇票信息录入</h3>
                <div class="pubBillInfo">
                    <div class="pubBillInfoTop">
                        <ul class="pubBillInfoLeft">
                            <li class="pubBillInfoItem">
                                <div class="pubBillInfoItem_label">
                                    票据号：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <input v-model="billNo" type="text">
                                </div>
                            </li>
                            <li class="pubBillInfoItem">
                                <div class="pubBillInfoItem_label">
                                    承兑人全称：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <input v-model="billUserName" type="text">
                                </div>
                            </li>
                            <li class="pubBillInfoItem pubBillInfoMoney">
                                <div class="pubBillInfoItem_label">
                                    票面金额(元)：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <input v-model="billMoney" type="text">
                                    <span>(万元)</span>
                                </div>
                            </li>
                            <li class="pubBillInfoItem pubBillInfoExpire">
                                <div class="pubBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="pubBillInfoItem_text pubBillInfoDatepicker">
                                    <DatePicker  type="date" format='yyyy-MM-dd' v-model="billExpire" placeholder="请选择汇票到期日" style="width:220px;height:43px;"></DatePicker>
                                </div>
                            </li>
                            <li class="pubBillInfoItem pubBillInfoOrg">
                                <div class="pubBillInfoItem_label">
                                    承兑机构：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <select v-model="billAcceptOrg" name="">
                                        <option disabled>请选择</option>
                                        <option v-for="orgItem in orgList"  :key="orgItem">{{orgItem}}</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="pubBillInfoBottom">
                        <div class="pubBillType pubBillItem">
                            <div class="pubBillType_label pubBillItem_label">
                                汇票类型：
                            </div>
                            <div class="pubBillType_txt pubBillItem_txt">
                                    <RadioGroup v-model="billType">
                                    <Radio label="银票"></Radio>
                                    <Radio label="商票"></Radio>
                                </RadioGroup>
                            </div>
                        </div>
                        <div class="pubBackToBack pubBillItem">
                            <div class="pubBackToBack_label pubBillItem_label">
                                有无瑕疵：
                            </div>
                            <div class="pubBackToBack_txt pubBillItem_txt">
                                <RadioGroup v-model="billBackToBack">
                                    <Radio label="无瑕疵"></Radio>
                                    <Radio label="回头"></Radio>
                                    <Radio label="重复"></Radio>
                                    <Radio label="质押"></Radio>
                                    <Radio label="保证"></Radio>
                                    <Radio label="瑕疵"></Radio>
                                </RadioGroup>
                            </div>
                        </div>
                        <div class="pubBillBidMoney pubBillItem">
                            <div class="pubBillBidMoney_label pubBillItem_label">
                                交易方式：
                            </div>
                            <div class="pubBillBidMoney_txt pubBillItem_txt">
                                <RadioGroup v-model="billQuoteType">
                                    <Radio label="竞价"></Radio>
                                    <Radio label="一口价"></Radio>
                                </RadioGroup>
                            </div>
                            <div v-if="billQuoteType=='一口价'" class="pubBillBidMoneySelect">
                                <div class="pubBillBidMoneySelect_Box">
                                    <input type="number" v-model="billBidMoney" class="pubBillBidMoneySelectBox_ipt" >
                                    <span>元</span>
                                </div>
                                <div class="pubBillBidMoneySelect_sub">/每十万扣</div>
                            </div>
                        </div>
                    </div>
                    <div class="pubBillInfoRight">
                        <div class="pubBillInfoImg_label">
                            上传汇票
                        </div>
                        <div class="pubBillInfoImg_txt">
                            <div class="pubBillImg_alt">汇票正面:</div>
                            <div class="demo-upload-list" v-if="uploadFrontList.length >0" >
                                <template v-if="uploadFrontList[0].status ==='finished'">
                                    <img :src="uploadFrontList[0].url">
                                    <div class="demo-upload-list-cover">
                                        <Icon type="ios-eye-outline" @click.native="handleView(uploadFrontList[0].url)"></Icon>
                                        <Icon type="ios-trash-outline" @click.native="handleRemoveFront"></Icon>
                                    </div>
                                </template>
                                <template v-else>
                                    <Progress v-if="uploadFrontList[0].showProgress" :percent="uploadFrontList[0].percentage" hide-info></Progress>
                                </template>
                            </div>
                            <Upload
                                v-if="uploadFrontList.length == 0" 
                                ref="uploadFront"
                                :show-upload-list="true"
                                :default-file-list="uploadFrontList"
                                :on-success="handleSuccess"
                                :format="['jpg','jpeg','png']"
                                :max-size="2048"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize" 
                                type="drag"
                                action="/common/upload"
                                style="display:block;width:142px;" >
                                <div style="width:142px;height:90px;line-height:116px;">
                                    <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                </div>
                            </Upload>
                            <!-- 预览图片 -->
                            <Modal 
                                title="预览大图" 
                                width="1080"
                                v-model="visible">
                                <img :src="imgName" v-if="visible" style="width: 100%">
                            </Modal>
                        </div>
                        <!--背书图片-->
                        <div class="pubBillBack">
                            <div class="pubBillImg_alt">汇票反面:</div>
                            <div class="demo-upload-list" v-for="pubBillBackImg in uploadBackList" :key="pubBillBackImg.url" v-if="uploadBackList.length >0" >
                                <template v-if="uploadBackList[0].status ==='finished'">
                                    <img :src="pubBillBackImg.url">
                                    <div class="demo-upload-list-cover">
                                        <Icon type="ios-eye-outline" @click.native="handleViewBack(pubBillBackImg.url)"></Icon>
                                        <Icon type="ios-trash-outline" @click.native="handleRemoveBack(pubBillBackImg.url)"></Icon>
                                    </div>
                                </template>
                                <template v-else>
                                    <Progress v-if="uploadBackList[0].showProgress" :percent="uploadBackList[0].percentage" hide-info></Progress>
                                </template>
                            </div>
                            <Upload
                                class="uploadFile_btn" 
                                ref="uploadFile" 
                                :show-upload-list="false"
                                :default-file-list="uploadBackList"
                                :on-success="handleSuccessBack" 
                                :max-size="2048"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize" 
                                type="drag"
                                action="/common/upload"
                                style="display:inline-block;width:142px;" >
                                <div style="width:142px;height:88px;line-height:116px;">
                                    <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                </div>
                            </Upload>
                            <!-- 预览图片 -->
                            <Modal 
                                title="预览大图" 
                                width="1080"
                                v-model="visible1">
                                <img :src="imgName" v-if="visible1" style="width: 100%">
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <!--立即发布-->
            <div class="pubBillBtn">
                <a class="pubBillBtnPub" @click="publishBill">立即发布</a>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchPublishBill } from '../../assets/js/billApi'

export default {
    name: 'pubBill',
    data () {
        return {
            defaultList: [],
            imgName: '',
            visible: false,
            visible1: false,
            uploadFrontList: [],
            uploadBackList: [],
            billNo:'',
            billUserName:'',
            billMoney:'',
            billExpire:'',
            billAcceptOrg:'',
            billType:'银票',
            billBackToBack:'无瑕疵',
            billQuoteType:'一口价',
            billBidMoney:'0.00',
            billImg:'',
            billEndorseImg:'',
            billEvidence:'',
            orgList:[
                '国股','城商','三农','村镇','财务公司','其他'
            ]
        }
    },
    methods: {
        // 上传成功
        handleSuccess (res,file,fileList) {
            this.uploadFrontList = fileList;
            // console.log(this.uploadFrontList)
            if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                file.url = "http://"+res.data;
            }else{
                file.url = res.data;
            }
            file.name = file.url;
            this.billImg = file.url;
        },
        handleSuccessBack (res, file,fileList) {
            // console.log(res)
            // console.log(file)
            // console.log(fileList)
            this.uploadBackList = fileList;
            // console.log(this.uploadBackList)
            if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                file.url = "http://"+res.data;
            }else{
                file.url = res.data;
            }
            file.name = res.data;
            if(fileList.length==1){
                this.billEndorseImg = fileList[0].url;
            }else{
                this.billEndorseImg = '';
                this.billEvidence = fileList[0].url;
                for(let i=1;i<fileList.length;i++){
                    var newUrl = fileList[i].url;
                    this.billEndorseImg += newUrl+',';
                }
                this.billEndorseImg =(this.billEndorseImg.substring(this.billEndorseImg.length-1)==',')?this.billEndorseImg.substring(0,this.billEndorseImg.length-1):this.billEndorseImg;
                // console.log(this.billEndorseImg)
            }
        },
        // 预览
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        // 预览
        handleViewBack (name) {
            this.imgName = name;
            this.visible1 = true;
        },
        // 删除照片
        handleRemoveFront () {
            this.uploadFrontList.splice(this.uploadFrontList[0], 1);
            this.billFrontImg = '';
        },
        handleRemoveBack (imgItem) {
            this.uploadBackList.splice(this.uploadBackList.indexOf(imgItem),1);
        },
        // 上传失败
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        // 图片大小不能超过2M
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        // 发布汇票
        publishBill(){
            var self = this;
            const title = '提示';
            if(self.billNo==''){
                const content = '<p>请输入票据号！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billUserName==''){
                const content = '<p>请输入承兑人全称！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billMoney==''){
                const content = '<p>请输入票面金额！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billExpire==''){
                const content = '<p>请选择汇票到期日！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            // 转换日期格式
            var dates = self.billExpire;
            self.billExpire = self.changeVueDate(dates,'yyyy-MM-dd');
            // console.log(this.billDeadline);
            if(self.billAcceptOrg==''){
                const content = '<p>请选择承兑机构！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billType==''){
                const content = '<p>请选择汇票类型！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billBackToBack==''){
                const content = '<p>请选择有无背！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billQuoteType==''){
                const content = '<p>请选择交易方式！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            // 交易方式转换
            if(self.billQuoteType=='一口价'){
                self.billQuoteType='fixed'
            }
            if(self.billQuoteType=='竞价'){
                self.billQuoteType='quote'
            }
            if(self.billQuoteType=='fixed'&&self.billBidMoney==''){
                const content = '<p>请输入一口价价格！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billImg==''){
                const content = '<p>请上传汇票正面图片！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billEndorseImg==''){
                const content = '<p>请上传汇票背书文件！</p>';
                self.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            // 调取接口  发布汇票
            var data = {
                billNo:self.billNo,
                billUserName:self.billUserName,
                billMoney:self.billMoney*10000,
                billAcceptOrg:self.billAcceptOrg,
                billClassify:self.billType,
                billExpire:self.billExpire,
                billImg:self.billImg,
                billEndorseImg:self.billEndorseImg,
                billEvidence:self.billEvidence,
                billReturn:self.billReturn,
                billQuoteType:self.billQuoteType,
                billFixedPrice:self.billBidMoney
            };
            fetchPublishBill(data,{emulateJSON:true,withCredentials:true}).then(function(res){
                console.log(res)
                 if(res.data.code==200){
                    self.$Message.success('发布成功');
                    self.$router.push('/out/sale/publishing');
                }                 
            },function(error){
                    console.log(error);  
            })
        },
        changeVueDate:function(dates,fmt) {
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1,(dates.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            let o = {
                'M+': dates.getMonth() + 1,
                'd+': dates.getDate(),
                'h+': dates.getHours(),
                'm+': dates.getMinutes(),
                's+': dates.getSeconds()
            };
            for (let k in o) {
                if (new RegExp(`(${k})`).test(fmt)) {
                    let str = o[k] + '';
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
                }
            }
            return fmt;
        },
        padLeftZero:function (str) {
            return ('00' + str).substr(str.length);
        },
    },
    mounted () {
        this.uploadFrontList = this.$refs.uploadFront.fileList;
        this.uploadBackList = this.$refs.uploadFile.fileList;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /* 上传按钮 */
    .demo-upload-list{
        display:inline-block;
        width: 142px;
        height: 90px;
        text-align: center;
        line-height: 100px;
        /* border: 1px solid transparent; */
        border-radius: 4px;
        overflow: hidden;
        background: transparent;
        position: relative;
        /* box-shadow: 0 1px 1px rgba(0,0,0,.2); */
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

    .pubBill {
        width: 982px;
        height: auto;
        .topNav{
            width: 100%;
            height: 58px;
            line-height: 30px;
            padding: 14px 30px;
            border-bottom: 1px solid #eee;
        }
        .pubBillMain {
            width: 100%;
            height: 638px;
            background: white;
            overflow-y: scroll;
            overflow-x: hidden;
            .pubBill {
                width: 982px;
                height: auto;
                padding: 10px 30px 0;
                margin: 0 auto;
                .pubBillTitle {
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    text-indent: 10px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    border-left: 5px solid #f71327;
                }
                .pubBillInfo {
                    width: 100%;
                    height: auto;
                    .pubBillInfoTop{
                        width: 100%;
                        height: auto;
                        overflow: hidden;
                        .pubBillInfoLeft {
                            width: 430px;
                            height: auto;
                            .pubBillInfoItem {
                                width: 100%;
                                height:46px;
                                line-height: 46px;
                                margin-bottom: 12px;
                                overflow: hidden;
                                .pubBillInfoItem_label {
                                    width: 86px;
                                    height: 46px;
                                    float: left;
                                }
                                .pubBillInfoItem_text {
                                    width: 320px;
                                    height: 46px;
                                    float: left;
                                    border: 1px solid #999;
                                    border-radius: 4px;
                                    input{
                                        width: 318px;
                                        height: 44px;
                                        float: left;
                                        border-radius: 4px;
                                        text-indent: 10px
                                    }
                                }
                            }
                            .pubBillInfoMoney{
                                .pubBillInfoItem_text{
                                    width: 240px;
                                    input{
                                        width: 192px;
                                        float: left;
                                    }
                                    span{
                                        display: block;
                                        color: #f71327;
                                        float: left;
                                    }
                                }
                            }
                            .pubBillInfoExpire{
                                .pubBillInfoItem_text{
                                    width: 222px;
                                    border: 1px solid #999;
                                }

                            }
                            .pubBillInfoOrg{
                                width: 320px;
                                float: left;
                                .pubBillInfoItem_text{
                                    width: 220px;
                                    select{
                                        width:218px;
                                        border: 0;
                                        text-indent: 10px;
                                    }
                                }
                            }
                        }
                    }
                    .pubBillInfoBottom{
                        width: 100%;
                        height: 181px;
                        .pubBillItem{
                            width: 100%;
                            height: 47px;
                            line-height: 47px;
                            overflow: hidden;
                            .pubBillItem_label {
                                width: 100px;
                                height: 47px;
                                float: left;
                            }
                            .pubBillItem_txt {
                                width: auto;
                                height: 47px;
                                float: left;
                                text-align: left;
                                border-radius: 4px;
                                .ivu-radio-group{
                                    .ivu-radio-group-item{
                                        width: 100px;
                                    }
                                }
                            }
                        }
                        .pubBillBidMoney{
                            width: 100%;
                            margin: 20px 0;
                            .pubBillBidMoneySelect{
                                float: left;
                                .pubBillBidMoneySelect_Box{
                                    float: left;
                                    width: 100px;
                                    height: 47px;
                                    padding-right: 4px;
                                    border-radius:4px;
                                    border: 1px solid #999;
                                    input{
                                        float: left;
                                        width: 80px;
                                        height: 45px;
                                        text-indent: 10px;
                                        border-radius:4px;
                                    }
                                    span{
                                        float: right;
                                        color: #f71327;
                                    }
                                }
                                .pubBillBidMoneySelect_sub{
                                    float: left;
                                    margin-left: 10px;
                                }
                            }
                        }
                    }
                    .pubBillInfoRight {
                        width: 100%;
                        height: auto;
                        padding-bottom: 20px;
                        .pubBillInfoImg_label{
                            width: 100%;
                            height: 30px;
                            font-weight: 600;
                            line-height: 20px;
                            padding-bottom: 10px;
                        }
                        .pubBillInfoImg_txt{
                            height: 130px;
                        }
                        .pubBillBack{
                            height: auto;
                        }
                        img {
                            display: block;
                            width: 142px;
                            height: 90px;
                        }
                        .pubBillImg_alt{
                            width: 142px;
                            height: 30px;
                            line-height: 30px;
                        }
                        .addIcon{
                            color: #ccc;
                        }
                    }
                }
            }
        }
    }


    
    .pubBill .pubBillMain .pubBillBtn {
        width: 240px;
        height: 88px;
        margin: 0 auto;
    }

    .pubBill .pubBillMain .pubBillBtn .pubBillBtnPub{
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #f71327;
        font-size: 16px;
        border-radius: 4px;
    }

</style>
