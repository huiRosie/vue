<template>
    <div class="out">
        <div class="outContent">
            <h2 class="outTitle">发布汇票</h2>
            <div class="outMain">
                <!--基本信息-->
                <div class="outBasic">
                    <h3 class="outBasicTitle">基本信息 <span>（非必填，但填写汇票的详细信息有助于您汇票的快速审核）</span></h3>
                    <ul class="outBasicInfo">
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                承兑人：
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
                            <DatePicker  type="date" format='yyyy-MM-dd' v-model="billExpire" placeholder="请选择汇票到期日" style="width:240px;height:46px;padding:7px 0;"></DatePicker>
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
                                    action="./common/upload"
                                    style="display:block;width:240px;" >
                                    <div style="width:240px;height:135px;line-height:170px;">
                                        <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                    </div>
                                </Upload>
                            </div>
                        </div>
                        <div class="outUploadBack">
                            <div class="outUploadBack_label">
                                <div class="outUploadBack_labelmain">
                                    汇票背书：
                                </div>
                            </div>
                            <div class="outUploadBack_txt">
                                <div class="demo-upload-list" v-if="uploadBackList.length >0" v-for="imgItem in uploadBackList" :key="imgItem.url">
                                    <template v-if="imgItem.status === 'finished'">
                                        <img :src="imgItem.url">
                                        <div class="demo-upload-list-cover">
                                            <Icon type="ios-eye-outline" @click.native="handleView(imgItem.url)"></Icon>
                                            <Icon type="ios-trash-outline" @click.native="handleRemoveBack(imgItem)"></Icon>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <Progress v-if="imgItem.showProgress" :percent="imgItem.percentage" hide-info></Progress>
                                    </template>
                                </div>
                                <Upload
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
                                    style="display:block;width:240px;float:left;" >
                                    <div style="width:240px;height:135px;line-height:170px;">
                                        <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                    </div>
                                </Upload>
                            </div>
                        </div>
                        <!-- 预览图片 -->
                        <Modal 
                            title="预览大图" 
                            v-model="visible"
                            ok-text='关闭' 
                            cancel-text=''  
                            width='1080'>
                            <img :src="imgName" v-if="visible" style="width:100%;">
                        </Modal> 
                        <div class="outBillOrg outBillItem">
                            <div class="outBillOrg_label outBillItem_label">
                                承兑机构：
                            </div>
                            <div class="outBillOrg_txt outBillItem_txt">
                                <RadioGroup v-model="billOrg">
                                    <Radio label="国股"></Radio>
                                    <Radio label="城商"></Radio>
                                    <Radio label="三农"></Radio>
                                    <Radio label="财务公司"></Radio>
                                    <Radio label="其他"></Radio>
                                </RadioGroup>
                            </div>
                        </div>
                        <div class="outBillType outBillItem">
                            <div class="outBillType_label outBillItem_label">
                                汇票类型：
                            </div>
                            <div class="outBillType_txt outBillItem_txt">
                                <RadioGroup v-model="billType">
                                    <Radio label="银票"></Radio>
                                    <Radio label="商票"></Radio>
                                </RadioGroup>
                            </div>
                        </div>
                        <div class="outBackToBack outBillItem">
                            <div class="outBackToBack_label outBillItem_label">
                                有无瑕疵：
                            </div>
                            <div class="outBackToBack_txt outBillItem_txt">
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
                        <div class="outBillBidMoney outBillItem">
                            <div class="outBillBidMoney_label outBillItem_label">
                                一口价：
                            </div>
                            <!-- <div class="outBillBidMoney_txt outBillItem_txt">
                                <RadioGroup v-model="billBidMoney">
                                    <Radio label="竞价"></Radio>
                                    <Radio label="一口价"></Radio>
                                </RadioGroup>
                            </div> -->
                            <div class="outBillBidMoneySelect">
                                <div class="outBillBidMoneySelect_Box">
                                    <input type="number" v-model="billFixed" class="outBillBidMoneySelectBox_ipt" >
                                    <span>元</span>
                                </div>
                                <div class="outBillBidMoneySelect_sub">/每十万扣</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outBtn">
                    <a class="outBtnLink" @click="publishBill">立即发布</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalData from '../../globalData'
    import adresData from '../../../assets/js/addressData'

    export default {
        name: 'Out',
        data () {
            return {
                billUserName:'',
                billMoney:'',
                billMoneyChange:'',
                billExpire:'',
                billFrontImg:'',
                billEndorseImg:'',
                billEvidence:'',
                billType:'银票',
                billBackToBack:'无瑕疵',
                billOrg:'国股',
                billFixed:'',
                defaultList: [],
                imgName: '',
                visible: false,
                uploadFrontList: [],
                uploadBackList: [],
                adresData:adresData,
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
                if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                    file.url = "http://"+res.data;
                }else{
                    file.url = res.data;
                }
                file.name = res.data;
                this.billFrontImg = file.url;
                // console.log(file.url)
            },
            handleSuccessBack (res, file,fileList) {
                // console.log(res)
                this.uploadBackList = fileList;
                // console.log(this.uploadBackList)
                // console.log(fileList)
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
                    }
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
            handleRemoveBack (imgItem) {
                this.uploadBackList.splice(this.uploadBackList.indexOf(imgItem),1);
                // console.log(this.billEndorseImg)
                // console.log(this.billEvidence)
            },
            // 上传失败
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '提示',
                    desc: '您上传的文件 ' + file.name + ' 格式不正确, 请选择jpg 或png格式的文件上传。'
                });
            },
            // 图片大小不能超过2M
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '提示',
                    desc: '您上传的文件 ' + file.name + ' 太大，请不要超过2M。'
                });
            },
            // 发布汇票
            publishBill(){
                var self = this;
                const title = '提示';
                if(self.billUserName==''){
                    const content = '<p>请输入承兑人全称！</p>';
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
                if(self.billExpire==''){
                    const content = '<p>请选择汇票到期日！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                // 转换日期格式
                var dates = this.billExpire;
                this.billExpire = globalData.methods.changeVueDate(dates,'yyyy-MM-dd');
                // console.log(this.billExpire);
                if(self.billFrontImg==''){
                    const content = '<p>请上传汇票正面图片！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                if(self.billEndorseImg==''){
                    const content = '<p>请上传汇票背书图片！</p>';
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
                        billExpire:self.billExpire,
                        billImg:self.billFrontImg,
                        billEndorseImg:self.billEndorseImg,
                        billEvidence:self.billEvidence,
                        billClassify:self.billType,
                        billAcceptOrg:self.billOrg,
                        billReturn:self.billBackToBack,
                        billFixedPrice:self.billFixed
                    },{emulateJSON:true,credentials:true}).then(function(res){ 
                        console.log(res)
                        if(res.data.code==200){
                            self.$Message.success('发布成功');
                            self.$router.push('/acc/mypub/accAnn/ontrade');
                        }                         
                    },function(error){
                        console.log(error);  
                })
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped> 
    /* 上传按钮 */
    .demo-upload-list{
        display:inline-block;
        width: 240px;
        height: 135px;
        text-align: center;
        line-height: 140px;
        border-radius: 4px;
        overflow: hidden;
        background: transparent;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin:0 20px 20px 0;
        float: left;
        img{
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
            i{
                color: #fff;
                font-size: 20px;
                cursor: pointer;
                margin: 0 2px;
            }
        }
    }
    .demo-upload-list:nth-child(4),
    .demo-upload-list:nth-child(8){
        margin-right: 0;
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }

    
    .out {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
        .outContent {
            width: 1280px;
            margin: 0 auto;
            .outTitle {
                width: 100%;
                height: 58px;
                line-height: 58px;
                color: #555;
                font-size: 14px;
                text-indent: 30px;
                margin-bottom: 1px;
                background: white;
                font-weight: 500;
            }
            .outMain {
                width: 100%;
                height: auto;
                background: white;
                .outBasic {
                    width: 1220px;
                    height: auto;
                    padding: 25px 30px;
                    margin: 0 auto;
                    .outBasicTitle {
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        font-size: 16px;
                        text-indent: 10px;
                        font-weight: 600;
                        margin-bottom: 35px;
                        border-left: 5px solid #f71327;
                        span {
                            font-size: 12px;
                            color: #878787;
                            font-weight: 400;
                        }
                    }
                    .outBasicInfo {
                        width: 100%;
                        height: auto;
                        .outBasicInfoItem {
                            width: 100%;
                            height: 70px;
                            line-height: 46px;
                            .outBasicInfoItem_label {
                                width: 84px;
                                height: 46px;
                                margin-right: 50px;
                                float: left;
                            }
                            .outBasicInfoItem_ipt {
                                width: 318px;
                                height: 46px;
                                float: left;
                                border: 1px solid #999;
                                border-radius: 4px;
                                input{
                                    display: block;
                                    width: 296px;
                                    height: 44px;
                                    line-height: 44px; 
                                    text-indent: 20px;
                                    border-radius: 4px;
                                    float: left;
                                }
                                span {
                                    float: left;
                                    color: #878787;
                                }
                            }
                            .outBasicInfoItem_exchange {
                                width: auto;
                                height: 46px;
                                margin-left: 20px;
                                float: left;
                                span {
                                    float: left;
                                    color: #f71327;
                                }
                            }
                        }
                        .outBasicInfoItem:first-child{
                            .outBasicInfoItem_ipt {
                                width: 462px;
                                input {
                                    width: 440px;
                                }
                            }
                        }
                    }
                }
                .outUpload {
                    width: 1220px;
                    height: auto;
                    padding: 0 30px 30px;
                    margin: 0 auto;
                    overflow: hidden;
                    .outUploadTitle {
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        font-size: 16px;
                        text-indent: 10px;
                        font-weight: 600;
                        margin-bottom: 25px;
                        border-left: 5px solid #f71327;
                    }
                    .outUploadList {
                        width: 100%;
                        height: auto;
                        .outUploadFont {
                            width: 100%;
                            height: 160px;
                            margin-bottom: 24px;
                            overflow: hidden;
                            .outUploadFont_label {
                                width: 120px;
                                height: 20px;
                                line-height: 20px;
                                margin-right: 14px;
                                float: left;
                                .outUploadFont_labelsub {
                                    font-size: 12px;
                                    color: #f71327;
                                }
                            }
                            .outUploadFont_txt {
                                width:240px;
                                height:235px;
                                float: left;
                                cursor: pointer;
                                .addIcon{
                                    color: #ccc;
                                }
                            }
                        }
                        .outUploadBack {
                            width: 100%;
                            height: auto;
                            margin-bottom: 24px;
                            overflow: hidden;
                            .outUploadBack_label {
                                width: 120px;
                                height: 20px;
                                line-height: 20px;
                                margin-right: 14px;
                                float: left;
                                .outUploadBack_labelsub {
                                    font-size: 12px;
                                    color: #f71327;
                                }
                            }
                            .outUploadBack_txt {
                                width: 1020px;
                                height: auto;
                                float: left;
                                cursor: pointer;
                                .addIcon{
                                    color: #ccc;
                                }
                            }
                        }
                        .outBillItem{
                            width: 100%;
                            height: 47px;
                            line-height: 47px;
                            margin-bottom: 24px;
                            overflow: hidden;
                            .outBillItem_label {
                                width: 120px;
                                height: 47px;
                                margin-right: 14px;
                                float: left;
                            }
                            .outBillItem_txt {
                                width: auto;
                                height: 47px;
                                float: left;
                                text-align: center;
                                border-radius: 4px;
                                .ivu-radio-group{
                                    .ivu-radio-group-item{
                                        margin-right: 50px;
                                    }
                                }
                            }
                        }
                        .outBillOrg{
                            width: 100%;
                            height: 47px;
                            .outBillOrg_label {
                                width: 120px;
                                height: 47px;
                                margin-right: 14px;
                                float: left;
                            }
                            .outBillOrg_txt {
                                width: auto;
                                height: 47px;
                                float: left;
                                text-align: center;
                                border-radius: 4px;
                                .ivu-radio-group{
                                    .ivu-radio-group-item{
                                        margin-right: 50px;
                                    }
                                }
                            }
                        }
                        .outBillBidMoney{
                            width: 100%;
                            .outBillBidMoneySelect{
                                float: left;
                                .outBillBidMoneySelect_Box{
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
                                .outBillBidMoneySelect_sub{
                                    float: left;
                                    margin-left: 10px;
                                }
                            }
                        }
                    }
                }
                .outBtn {
                    width: 100%;
                    height: 96px;
                    line-height: 46px;
                    padding-bottom: 50px;
                    .outBtnLink {
                        display: block;
                        width: 240px;
                        height: 46px;
                        color: white;
                        font-size: 16px;
                        text-align: center;
                        background: linear-gradient(254deg, rgba(255, 25, 25, 0.5), rgba(253, 160, 0, 0.5)), linear-gradient(#f23d3d, #f23d3d);
                        margin: 0 auto;
                        border-radius: 4px;
                    }
                }
            }
        }
    }
</style>
