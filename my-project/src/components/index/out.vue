<template>
    <div class="out">
        <div class="outContent">
            <h2 class="outTitle">我要贴现 > 发布汇票</h2>
            <div class="outMain">
                <!--基本信息-->
                <div class="outBasic">
                    <h3 class="outBasicTitle">基本信息 <span>（非必填，但填写汇票的详细信息有助于您汇票的快速审核）</span></h3>
                    <ul class="outBasicInfo">
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                出票人全称：
                            </div>
                            <div class="outBasicInfoItem_ipt">
                                <input type="text" v-model="billUserName" />
                            </div>
                            <div class="clear"></div>
                        </li>
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                票面金额：
                            </div>
                            <div class="outBasicInfoItem_ipt">
                                <input type="number" v-model="billMoney"  @keyup="changeWord" />
                                <span>元</span>
                            </div>
                            <div class="outBasicInfoItem_exchange">
                                <span class="outBasicInfoItem_exchangeLabel">大写：</span>
                                <span class="outBasicInfoItem_exchangeTxt" v-text="billMoneyChange"></span>
                            </div>
                            <div class="clear"></div>
                        </li>
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                汇票到期日：
                            </div>
                            <DatePicker  type="date" format='yyyy-MM-dd' v-model="billDeadline" placeholder="请选择汇票到期日" style="width:240px;height:46px;padding:7px 0;"></DatePicker>
                            <div class="clear"></div>
                        </li>
                    </ul>
                </div>
                <!--上传汇票信息-->
                <div class="outUpload">
                    <h3 class="outUploadTitle">上传汇票信息</h3>
                    <div class="outUploadList">
                        <div class="outUploadFont">
                            <div class="outUploadFont_label">
                                <div class="outUploadFont_labelmain">
                                    汇票正面：
                                </div>
                                <p class="outUploadFont_labelsub">(必须且仅能上传一张)</p>
                            </div>
                            <!-- 上传汇票正面 -->
                            <div class="outUploadFont_txt">
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
                        <div class="outUploadBack">
                            <div class="outUploadBack_label">
                                <div class="outUploadBack_labelmain">
                                    汇票背书：
                                </div>
                                <p class="outUploadBack_labelsub">(必须且仅能上传一张)</p>
                            </div>
                            <div class="outUploadBack_txt">
                                <div class="demo-upload-list" v-if="uploadBackList.length >0">
                                    <template v-if="uploadBackList[0].status === 'finished'">
                                        <img :src="uploadBackList[0].url">
                                        <div class="demo-upload-list-cover">
                                            <!-- <Icon type="ios-eye-outline" @click.native="handleView(uploadBackList[0].name)"></Icon> -->
                                            <Icon type="ios-trash-outline" @click.native="handleRemoveBack"></Icon>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <Progress v-if="uploadBackList[0].showProgress" :percent="uploadBackList[0].percentage" hide-info></Progress>
                                    </template>
                                </div>
                                <Upload
                                    v-if="uploadBackList.length == 0" 
                                    ref="uploadBack" 
                                    :show-upload-list="false"
                                    :default-file-list="uploadBackList"
                                    :on-success="handleSuccessBack"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    :on-format-error="handleFormatError"
                                    :on-exceeded-size="handleMaxSize" 
                                    type="drag"
                                    action="./common/upload"
                                    style="display:inline-block;width:200px;" >
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
                        <div class="outUploadFile">
                            <div class="outUploadFile_label">
                                证明原件：
                            </div>
                            <div class="outUploadFile_txt">
                                <div class="demo-upload-list" style="width:auto;height:158px;padding:10px;" v-if="uploadFileList.length >0">
                                    <template v-if="uploadFileList[0].status === 'finished'">
                                        <div style="width:auto;height:138px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='jpg'">
                                            <img :src="uploadFileList[0].url">
                                            <div style="width:auto;height:30px;line-height:40px;">{{uploadFileList[0].url}}</div>
                                        </div>
                                        <div style="width:auto;height:138px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='pdf'">
                                            <img style="display:block;width:108px;height:108px;float:none;margin:0 auto;" src="../../assets/pdf.png">
                                            <div style="width:auto;height:30px;line-height:40px;">{{uploadFileList[0].url}}</div>
                                        </div>
                                        <div style="width:auto;height:138px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-4,uploadFileList[0].url.length)=='docx'||uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='doc'">
                                            <img src="../../assets/word.png">
                                            <div style="width:auto;height:30px;line-height:40px;">{{uploadFileList[0].url}}</div>
                                        </div>
                                        <div style="width:auto;height:138px;" v-if="uploadFileList[0].url.substring(uploadFileList[0].url.length-4,uploadFileList[0].url.length)=='xlsx'||uploadFileList[0].url.substring(uploadFileList[0].url.length-3,uploadFileList[0].url.length)=='xls'">
                                            <img src="../../assets/excel.png">
                                            <div style="width:auto;height:30px;line-height:40px;">{{uploadFileList[0].url}}</div>
                                        </div>
                                        <div class="demo-upload-list-cover" style="width:108px;height:108px;line-height:108px;top:10px;left:10px;">
                                            <Icon type="ios-trash-outline" @click.native="handleRemoveFile"></Icon>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <Progress v-if="uploadFileList[0].showProgress" :percent="uploadFileList[0].percentage" hide-info></Progress>
                                    </template>
                                </div>
                                <Upload
                                    class="outUploadFile_btn" 
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
                                        <Button class="outUploadFile_boxbtn" type="ghost">选择文件</Button>
                                    </div>
                                </Upload>
                            </div>
                        </div>
                        <div class="outUploadArea">
                            <div class="outUploadArea_label">
                                交易区域：
                            </div>
                            <div class="outUploadArea_txt">
                                <Cascader class="inSearCondItemListItem inSearArea" @on-change='areaChange' :data="adresData" size="large"></Cascader>
                                <!-- <input type="text" v-model="billTradeArea" placeholder="武汉" value="" />
                                <img src="../../assets/location.png"/> -->
                            </div>
                        </div>
                        <div class="outUploadRemark">
                            <div class="outUploadRemark_label">
                                备注：
                            </div>
                            <div class="outUploadRemark_txt">
                                <textarea v-model="billDesc"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outBtn">
                    <a class="outBtnLink" @click="publishBill">发布汇票</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalData from '../globalData'
    import adresData from '../../assets/js/addressData'

    export default {
        name: 'Out',
        data () {
            return {
                billUserName:'',
                billMoney:'',
                billMoneyChange:'',
                billDeadline:'',
                billFrontImg:'',
                billBackImg:'',
                billEvidence:'',
                billTradeArea:'',
                billDesc:'',
                defaultList: [],
                imgName: '',
                visible: false,
                uploadFrontList: [],
                uploadBackList: [],
                uploadFileList: [],
                adresData:adresData
            }
        },
        created:function(){
            // this.getUserInfo();
        },
        methods: {
            // 上传成功
            handleSuccess (res,file,fileList) {
                // console.log(res)
                this.uploadFrontList = fileList;
                // console.log(this.uploadFrontList)
                if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                    file.url = "http://"+res.data;
                }else{
                    file.url = res.data;
                }
                file.name = res.data;
                this.billFrontImg = res.data;
                // console.log(file.url)
            },
            handleSuccessBack (res, file,fileList) {
                // console.log(res)
                this.uploadBackList = fileList;
                // console.log(this.uploadBackList)
                // console.log(res.data)
                if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                    file.url = "http://"+res.data;
                }else{
                    file.url = res.data;
                }
                file.name = res.data;
                this.billBackImg = res.data;
                // console.log(file.url)
            },
            handleSuccessFile (res, file,fileList) {
                // console.log(res)
                this.uploadFileList = fileList;
                // console.log(this.uploadFileList)
                if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                    file.url = "http://"+res.data;
                }else{
                    file.url = res.data;
                }
                file.name = res.data;
                this.billEvidence = res.data;
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
            handleRemoveBack () {
                this.uploadBackList.splice(this.uploadBackList[0], 1);
                this.billBackImg = '';
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
            // 数字自动转换成中文
            changeWord () {
                var num = this.billMoney;
                if(num>100000000000){
                    this.billMoney = 100000000000;
                    num = 100000000000
                    const title = '提示';
                    const content = '<p>票面金额输入有误，请重新输入！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                }
                if(!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)){
                    return "";
                }
                var unit = "千百拾亿千百拾万千百拾元角分";
                var	str = "";
                num += "00";
                var p = num.indexOf('.');
                if(p >= 0){
                    num = num.substring(0, p) + num.substr(p + 1, 2);
                }
                unit = unit.substr(unit.length - num.length);
                for(var i = 0; i < num.length; i++){
                    str += '零壹贰叁肆伍陆柒捌玖'.charAt(num.charAt(i)) + unit.charAt(i);
                }	
                this.billMoneyChange = str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g,"零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
                return this.billMoneyChange;
            },
            // 地区选择
            areaChange(value, selectedData){
                this.billTradeArea = selectedData.map(o => o.label).join('');
            },
            // 发布汇票
            publishBill(){
                var self = this;
                const title = '提示';
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
                if(self.billDeadline==''){
                    const content = '<p>请选择汇票到期日！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                // 转换日期格式
                var dates = this.billDeadline;
                this.billDeadline = globalData.methods.changeVueDate(dates,'yyyy-MM-dd');
                // console.log(this.billDeadline);
                if(self.billFrontImg==''){
                    const content = '<p>请上传汇票正面图片！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                if(self.billBackImg==''){
                    const content = '<p>请上传汇票背书图片！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                if(self.billEvidence==''){
                    const content = '<p>请上传证明原件！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                if(self.billTradeArea==''){
                    const content = '<p>请填写交易区域！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                // 调取接口  发布汇票
                self.$http.post(globalData.data.Ip+'/bill/publish',
                    {
                        billUserName:self.billUserName,
                        billMoney:self.billMoney,
                        billExpire:self.billDeadline,
                        billImg:self.billFrontImg,
                        billEndorseImg:self.billBackImg,
                        billEvidence:self.billEvidence,
                        billTradeArea:self.billTradeArea,
                        billDesc:self.billDesc
                    },{emulateJSON:true,credentials:true}).then(function(res){ 
                        console.log(res)
                        if(res.data.code==200){
                            self.$Message.success('发布成功');
                            self.$router.push('/acc/mypub/accAnn/trading');
                        }                         
                    },function(error){
                        console.log(error);  
                })
            },
            // 获取登录信息
            getData:function(key){
                var data = localStorage.getItem(key);
                var dataObj = JSON.parse(data);
                var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
                if (dataObiTime>120) {
                    this.$Modal.warning({
                        title:'提示',
                        content:'您还未登录，请登录后查看，谢谢！',
                        onOk: function(){
                            self.$router.push('/login') ;
                        },
                    })
                }else{
                    var dataObjToJson = dataObj.data;
                    return dataObjToJson;
                }
            },
            //  调取接口，获取用户信息
            getUserInfo:function(){
                var self = this;
                self.$http.get(globalData.data.Ip+'/user/info',{credentials:true}).then(function(res){ 
                    console.log(res);   
                    if(res.data.data=='用户未登录'){
                        self.$Modal.warning({
                            title: '提示',
                            content: '您还未登录，请您登录后再贴现，谢谢！',
                            onOk: function(){
                                self.$router.push('/login');
                            },
                        })
                    }                       
                })
            },
        },
        mounted () {
            this.uploadFrontList = this.$refs.uploadFront.fileList;
            this.uploadBackList = this.$refs.uploadBack.fileList;
            this.uploadFileList = this.$refs.uploadFile.fileList;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* 上传按钮 */
    .demo-upload-list{
        display:inline-block;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        /* border: 1px solid transparent; */
        border-radius: 4px;
        overflow: hidden;
        background: transparent;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
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
    .out {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .out .outContent {
        width: 1280px;
        margin: 0 auto;
    }

    .out .outContent .outTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        color: #555;
        font-size: 14px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .out .outContent .outMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .out .outContent .outMain .outBasic {
        width: 1220px;
        height: auto;
        padding: 25px 30px;
        margin: 0 auto;
    }

    .out .outContent .outMain .outBasic .outBasicTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #f71327;
    }

    .out .outContent .outMain .outBasic .outBasicTitle span {
        font-size: 12px;
        color: #878787;
        font-weight: 400;
    }

    .out .outContent .outMain .outBasic .outBasicInfo {
        width: 100%;
        height: auto;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem {
        width: 100%;
        height: 70px;
        line-height: 46px;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_label {
        width: 84px;
        height: 46px;
        margin-right: 50px;
        float: left;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_ipt {
        width: 318px;
        height: 46px;
        float: left;
        /* line-height: 46px; */
        border: 1px solid #999;
        border-radius: 4px;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_ipt input{
        display: block;
        width: 296px;
        height: 44px;
        /* line-height: 44px; */
        text-indent: 20px;
        border-radius: 4px;
        float: left;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_ipt span {
        float: left;
        color: #878787;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_exchange {
        width: auto;
        height: 46px;
        margin-left: 20px;
        float: left;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_exchange span {
        float: left;
        color: #f71327;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem:first-child .outBasicInfoItem_ipt {
        width: 462px;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem:first-child .outBasicInfoItem_ipt input {
        width: 440px;
    }

    .outBasicName_tip,.outBasicMoney_tip,.outBasicDate_tip{
        color: red;
        height: 24px;
        line-height: 24px;
        margin-left: 134px;
        display: none;
    }

    .out .outContent .outMain .outUpload {
        width: 1220px;
        height: auto;
        padding: 0 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .out .outContent .outMain .outUpload .outUploadList {
        width: 100%;
        height: auto;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont {
        width: 100%;
        height: 200px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_label {
        width: 120px;
        height: 20px;
        line-height: 20px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_label .outUploadFont_labelsub {
        font-size: 12px;
        color: #c30015;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_txt {
        width:200px;
        height:200px;
        float: left;
        cursor: pointer;
        /* background: url(../../assets/addImg.png) no-repeat center; */
        /* border: 2px dashed #e1e1e1; */
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_txt .addIcon{
        color: #ccc;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack {
        width: 100%;
        height: 200px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_label {
        width: 120px;
        height: 20px;
        line-height: 20px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_label .outUploadBack_labelsub {
        font-size: 12px;
        color: #c30015;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_txt {
        width: auto;
        height: 196px;
        float: left;
        cursor: pointer;
        /* background: url(../../assets/addImg.png) no-repeat center; */
        /* border: 2px dashed #e1e1e1; */
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_txt .addIcon{
        color: #ccc;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile {
        width: 100%;
        height: auto;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_label {
        width: 120px;
        height: 46px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_btn {
        width: 240px;
        height: 46px;
        float: left;
        color: white;
        text-align: center;
        border-radius: 4px;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_txt {
        width: auto;
        height: auto;
        float: left;
        margin: 4px 4px 4px 0;
    }


    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_txt img{
        width: 108px;
        height: 108px;
        display: block;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_btn .outUploadFile_boxbtn {
        width: 240px;
        height: 46px;
        float: left;
        color: white;
        text-align: center;
        border-radius: 4px;
        background: #f71327;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_label {
        width: 120px;
        height: 46px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_txt {
        width: 240px;
        height: 36px;
        float: left;
        text-align: center;
        border-radius: 4px;
        margin: 5px 0;
        /* border: 1px solid #999; */
    }

    /* .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_txt input {
        width: 210px;
        height: 44px;
        float: left;
        text-indent: 20px;
        border-radius: 4px;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_txt img {
        display: block;
        float: left;
        width: 18px;
        height: 22px;
        margin: 11px 4px;
    } */

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark {
        width: 100%;
        height: 200px;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark .outUploadRemark_label {
        width: 120px;
        height: 46px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark .outUploadRemark_txt {
        width: 1026px;
        height: 200px;
        float: left;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #999;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark .outUploadRemark_txt textarea {
        width: 1020px;
        height: 194px;
        float: left;
        border: 0;
        text-indent: 20px;
        border-radius: 4px;
    }

    .out .outContent .outMain .outBtn {
        width: 100%;
        height: 96px;
        line-height: 46px;
        padding-bottom: 50px;
    }

    .out .outContent .outMain .outBtn .outBtnLink {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
        font-size: 16px;
        text-align: center;
        background: #f71327;
        margin: 0 auto;
        border-radius: 4px;
    }
</style>
