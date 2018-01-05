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
                            <li class="pubBillInfoItem pubBillInfoType">
                                <div class="pubBillInfoItem_label">
                                    票据类型：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <select v-model="billType" name="">
                                        <option disabled>请选择</option>
                                        <option value="电票">电票</option>
                                        <option value="纸票">纸票</option>
                                    </select>
                                </div>
                            </li>
                            <li class="pubBillInfoItem pubBillInfoExpire">
                                <div class="pubBillInfoItem_label">
                                    汇票到期日：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <DatePicker  type="date" format='yyyy-MM-dd' v-model="billDeadline" placeholder="请选择汇票到期日" style="width:220px;height:46px;padding:7px 0;"></DatePicker>
                                </div>
                            </li>
                            <li class="pubBillInfoItem pubBillInfoTradeType">
                                <div class="pubBillInfoItem_label">
                                    交易方式：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <select v-model="billTradeType" name="">
                                        <option disabled>请选择</option>
                                        <option value="现票买断">现票买断</option>
                                        <option value="预约出售">预约出售</option>
                                    </select>
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
                            <li class="pubBillInfoItem pubBillInfoEndorse">
                                <div class="pubBillInfoItem_label">
                                    背书次数：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <input v-model="billEndorse" type="text">
                                </div>
                            </li>
                            <li class="pubBillInfoItem pubBillInfoFlaws">
                                <div class="pubBillInfoItem_label">
                                    有无瑕疵：
                                </div>
                                <div class="pubBillInfoItem_text">
                                    <select v-model="billFlaws" name="">
                                        <option disabled>请选择</option>
                                        <option value="无">无</option>
                                        <option value="有">有</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                        <div class="pubBillInfoRight">
                            <div class="pubBillInfoImg_label">
                                汇票正面：
                            </div>
                            <div class="pubBillInfoImg_txt">
                                <div class="demo-upload-list" v-if="uploadFrontList.length >0" >
                                    <template v-if="uploadFrontList[0].status ==='finished'">
                                        <img :src="uploadFrontList[0].url">
                                        <div class="demo-upload-list-cover">
                                            <!-- <Icon type="ios-eye-outline" @click.native="handleView(uploadFrontList[0].name)"></Icon> -->
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
                                    action="./common/upload"
                                    style="display:block;width:200px;" >
                                    <div style="width:200px;height:198px;line-height:236px;">
                                        <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                    </div>
                                </Upload>
                                <!-- 预览图片 -->
                                <Modal title="View Image" v-model="visible">
                                    <img :src="imgName + '/large'" v-if="visible" style="width: 100%">
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
                <!--背书及附件-->
                <div class="pubBillAttach">
                    <h3 class="pubBillAttachTitle">背书文件</h3>
                    <div class="pubBillAttachInfo">
                        <div class="demo-upload-list" style="width:896px;height:47px;padding:0 10px;" v-if="uploadFileList.length >0">
                            <template v-if="uploadFileList[0].status === 'finished'">
                                <div style="width:auto;height:47px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='jpg'">
                                    <img :src="uploadFileList[0].url" style="float:left;margin-right:10px;">
                                    <div style="width:auto;height:30px;line-height:76px;float:left;">{{uploadFileList[0].url}}</div>
                                </div>
                                <div style="width:auto;height:47px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='pdf'">
                                    <img  style="float:left;margin-right:10px;" src="../../assets/images/pdf.png">
                                    <div style="width:auto;height:30px;line-height:76px;float:left;">{{uploadFileList[0].url}}</div>
                                </div>
                                <div style="width:auto;height:47px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-4,uploadFileList[0].url.length)=='docx'||uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='doc'">
                                    <img style="float:left;margin-right:10px;" src="../../assets/images/word.png">
                                    <div style="width:auto;height:30px;line-height:76px;float:left;">{{uploadFileList[0].url}}</div>
                                </div>
                                <div style="width:auto;height:47px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-4,uploadFileList[0].url.length)=='xlsx'||uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='xls'">
                                    <img style="float:left;margin-right:10px;" src="../../assets/images/excel.png">
                                    <div style="width:auto;height:30px;line-height:76px;float:left;">{{uploadFileList[0].url}}</div>
                                </div>
                                <div class="demo-upload-list-cover" style="width:40px;height:47px;line-height:50px;top:0;left:10px;">
                                    <Icon type="ios-trash-outline" @click.native="handleRemoveFile"></Icon>
                                </div>
                            </template>
                            <template v-else>
                                <Progress v-if="uploadFileList[0].showProgress" :percent="uploadFileList[0].percentage" hide-info></Progress>
                            </template>
                        </div>
                        <Upload
                            class="uploadFile_btn" 
                            v-if="uploadFileList.length == 0" 
                            ref="uploadFile" 
                            :show-upload-list="false"
                            :default-file-list="uploadFileList"
                            :on-success="handleSuccessFile" 
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize" 
                            type="drag"
                            action="./common/upload"
                            style="display:inline-block;width:240px;" >
                            <div style="width:240px;height:46px;">
                                <Button class="uploadFile_boxbtn" type="ghost">选择文件</Button>
                            </div>
                        </Upload>
                    </div>
                </div>
                <!--我要竞价-->
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
            uploadFrontList: [],
            uploadFileList: [],
            billNo:'1000000001',
            billUserName:'中国建设银行',
            billMoney:'1000',
            billType:'电票',
            billDeadline:'2018-03-20',
            billEndorse:'1',
            billFlaws:'无',
            billImg:'',
            billEndorseImg:'',
            billAcceptOrg:'国股',
            orgList:[
                '国股','商城','三农','村镇','外贸','财务公司','商票'
            ],
            billTradeType:''
        }
    },
    methods: {
        // 上传成功
        handleSuccess (res,file,fileList) {
            // console.log(res)
            this.uploadFrontList = fileList;
            // console.log(this.uploadFrontList)
            file.url = "http://"+res.data;
            file.name = res.data;
            this.billImg = res.data;
            // console.log(file.url)
        },
        handleSuccessFile (res, file,fileList) {
            // console.log(res)
            this.uploadFileList = fileList;
            // console.log(this.uploadFileList)
            file.url = "http://"+res.data;
            file.name = res.data;
            this.billEndorseImg = res.data;
            // console.log(file.url)
        },
        // 预览
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        // 删除照片
        handleRemoveFront () {
            this.uploadFrontList.splice(this.uploadFrontList[0], 1);
            this.billFrontImg = '';
        },
        handleRemoveFile () {
            this.uploadFileList.splice(this.uploadFileList[0], 1);
            this.billFileImg = '';
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
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billUserName==''){
                const content = '<p>请输入出票人全称！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billMoney==''){
                const content = '<p>请输入票面金额！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billType==''){
                const content = '<p>请选择票据类型！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billDeadline==''){
                const content = '<p>请选择汇票到期日！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            // 转换日期格式
            var dates = self.billDeadline;
            self.billDeadline = self.changeVueDate(dates,'yyyy-MM-dd');
            // console.log(this.billDeadline);
            if(self.billTradeType==''){
                const content = '<p>请选择交易方式！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billAcceptOrg==''){
                const content = '<p>请选择承兑机构！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billEndorse==''){
                const content = '<p>请填写背书次数！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billFlaws==''){
                const content = '<p>请选择票据有无瑕疵！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billImg==''){
                const content = '<p>请上传汇票正面图片！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billEndorseImg==''){
                const content = '<p>请上传汇票背书文件！</p>';
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                return;
            }
            // 调取接口  发布汇票
            // var data = self.$qs.stringify({
            //     billNo:self.billNo,
            //     billUserName:self.billUserName,
            //     billMoney:self.billMoney*10000,
            //     billClassify:self.billType,
            //     billExpire:self.billDeadline,
            //     billEndorse:self.billEndorse,
            //     billImgHealth:self.billFlaws,
            //     billImg:self.billImg,
            //     billEndorseImg:null,
            //     billEvidence:self.billEndorseImg,
            //     billAcceptOrg:self.billAcceptOrg,
            //     billTradeType:self.billTradeType
            // });
            // fetchPublishBill(data,{emulateJSON:true,withCredentials: true}).then(function(res){
            //     console.log(res)
            //      if(res.data.code==200){
            //         self.$Message.success('发布成功');
            //         self.$router.push('/out/sale/publishing');
            //     }                 
            // },function(error){
            //         console.log(error);  
            // })
            var data = {
                billNo:self.billNo,
                billUserName:self.billUserName,
                billMoney:self.billMoney*10000,
                billClassify:self.billType,
                billExpire:self.billDeadline,
                billEndorse:self.billEndorse,
                billImgHealth:self.billFlaws,
                billImg:self.billImg,
                billEndorseImg:null,
                billEvidence:self.billEndorseImg,
                billAcceptOrg:self.billAcceptOrg,
                billTradeType:self.billTradeType
            };
            console.log(data)
            // self.$http.post('http://192.168.11.26'+'/manager/bill/publish',
            self.$http.post('.'+'/manager/bill/publish',
                data,{emulateJSON:true,credentials:true}).then(function(res){ 
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
        this.uploadFileList = this.$refs.uploadFile.fileList;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* 上传按钮 */
    .demo-upload-list{
        display:inline-block;
        width: 386px;
        height: 218px;
        text-align: center;
        line-height: 200px;
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
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
        margin-bottom: 1px;
    }

    .pubBill .pubBillMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .pubBill .pubBillMain .pubBill {
        width: 982px;
        height: auto;
        padding: 10px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .pubBill .pubBillMain .pubBill .pubBillTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft {
        width: 430px;
        height: auto;
        float: left;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoItem {
        width: 100%;
        height:46px;
        line-height: 46px;
        margin-bottom: 12px;
        overflow: hidden;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoItem .pubBillInfoItem_label {
        width: 86px;
        height: 46px;
        float: left;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoItem .pubBillInfoItem_text {
        width: 320px;
        height: 46px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoItem .pubBillInfoItem_text input{
        width: 318px;
        height: 44px;
        float: left;
        border-radius: 4px;
        text-indent: 10px
    }
    
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoMoney .pubBillInfoItem_text{
        width: 240px;
    }
    
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoMoney .pubBillInfoItem_text input{
        width: 192px;
        float: left;
    }
    
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoMoney .pubBillInfoItem_text span{
        display: block;
        color: #f71327;
        float: left;
    }
    
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoType .pubBillInfoItem_text{
        width: 240px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoType .pubBillInfoItem_text select{
        width: 100%;
        border: 0;
        text-indent: 10px;
    }
    
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoExpire .pubBillInfoItem_text{
        border: 0;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoTradeType{
        width: 225px;
        float: left;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoOrg{
        width: 180px;
        float: left;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoTradeType .pubBillInfoItem_text,
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoOrg .pubBillInfoItem_text{
        width: 94px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoTradeType .pubBillInfoItem_text select,
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoOrg .pubBillInfoItem_text select{
        width:92px;
        border: 0;
        text-indent: 10px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoEndorse{
        width: 225px;
        float: left;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoFlaws{
        width: 180px;
        float: left;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoEndorse .pubBillInfoItem_text,
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoFlaws .pubBillInfoItem_text{
        width: 94px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoEndorse .pubBillInfoItem_text input,
    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoLeft .pubBillInfoFlaws .pubBillInfoItem_text select{
        width:92px;
        border: 0;
        text-indent: 10px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoRight {
        width: 386px;
        height: 230px;
        float: left;
        padding-left:50px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoRight .pubBillInfoImg_label{
        width: 386px;
        height: 30px;
        line-height: 20px;
        padding-bottom: 10px;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoRight .pubBillInfoImg_txt .addIcon{
        color: #ccc;
    }

    .pubBill .pubBillMain .pubBill .pubBillInfo .pubBillInfoRight img {
        display: block;
        width: 386px;
        height: 218px;
    }

    .pubBill .pubBillMain .pubBillAttach {
        width: 982px;
        height: auto;
        padding: 0 30px 15px;
        margin: 0 auto;
        overflow: hidden;
    }

    .pubBill .pubBillMain .pubBillAttach .pubBillAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom:18px;
        border-left: 5px solid #f71327;
    }

    .pubBill .pubBillMain .pubBillAttach .pubBillAttachInfo {
        padding: 0 10px;
    }

    .pubBill .pubBillMain .pubBillAttach .pubBillAttachInfo img {
        display: block;
        width: 40px;
        height: 47px;
    }

    .pubBill .pubBillMain .pubBillAttach .pubBillAttachInfo .uploadFile_btn .uploadFile_boxbtn {
        width: 240px;
        height: 46px;
        float: left;
        color: white;
        text-align: center;
        border-radius: 4px;
        background: #f71327;
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
