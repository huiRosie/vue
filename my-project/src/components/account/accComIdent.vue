<template>
    <div class="accComIdent">
        <h2 class="accComIdentTitle">
            <router-link to="/acc/set/accInfo" >账户信息</router-link> >
            <span >企业认证</span>
        </h2>
        <div class="accComIdentMain">
            <div class="accComIdentRight">
                <div class="accComIdentRightTitle">
                    企业认证状态 <span> (未认证)</span>
                </div>
                <div class="accComIdentRightName">
                    <div class="accComIdentRightName_label">
                        企业名称：
                    </div>
                    <div class="accComIdentRightName_text">
                        <input type="text" v-model="companyName" name="" id="" value="" />
                    </div>
                </div>
                <div class="accComIdentRightLicense">
                    <div class="accComIdentRightLicense_label">
                        营业执照：
                    </div>
                    <div class="accComIdentRightLicense_img">
                        <div class="demo-upload-list" v-if="uploadList.length>0">
                            <template v-if="uploadList[0].status === 'finished'">
                                <img :src="uploadList[0].url">
                                <div class="demo-upload-list-cover">
                                    <!-- <Icon type="ios-eye-outline" @click.native="handleView(uploadList[0].name)"></Icon> -->
                                    <Icon type="ios-trash-outline" @click.native="handleRemove"></Icon>
                                </div>
                            </template>
                            <template v-else>
                                <Progress v-if="uploadList[0].showProgress" :percent="uploadList[0].percentage" hide-info></Progress>
                            </template>
                        </div>
                        <Upload
                            v-if="uploadList.length == 0" 
                            ref="uploadList" 
                            :show-upload-list="false"
                            :default-file-list="uploadList"
                            :on-success="handleSuccess"
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
                    </div>
                </div>
                <div class="accComIdentRightBtn">
                    <a class="accComIdentRightBtnSubmit" @click="submit">提交申请</a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'AccComIdent',
    data () {
        return {
            visible: false,
            uploadList:[],
            companyName:'',
            companyImg:''
        }
    },
    computed: {

    },
    methods: {
        // 上传成功
        handleSuccess (res, file,fileList) {
            // console.log(res)
            this.uploadList = fileList;
            // console.log(this.uploadBackList)
            // console.log(res.data)
            file.url = "http://"+res.data;
            file.name = "http://"+res.data;
            this.companyImg = "http://"+res.data;
            // console.log(file.url)
        },
        // 删除照片
        handleRemove () {
            this.uploadList.splice(this.uploadList[0], 1);
            this.companyImg = '';
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
        submit(){
            var self = this;
            if(self.companyName==''){
                const title = '提示';
                const content = '<p>请输入企业全称！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.companyImg==''){
                const title = '提示';
                const content = '<p>请上传企业营业执照！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            // 调取接口，提交申请
            self.$http.post(globalData.data.Ip+'/user/auth/company',
                {
                    blCompanyName:self.companyName,
                    businessLicence:self.companyImg
                },{emulateJSON:true,withCredentials:true}).then(function(res){ 
                    console.log(res)
                    if(res.data.code==200){
                        self.$Message.success('企业认证成功，请等待审核！');
                        self.$router.push('/acc/set/accInfo');
                    }                         
                },function(error){
                    console.log(error);  
            })
        }
    },
    mounted () {
        this.uploadList = this.$refs.uploadList.fileList;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accComIdent {
        width: 982px;
        height: auto;
    }

    .accComIdent .accComIdentTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accComIdent .accComIdentMain {
        width: 100%;
        height: auto;
        overflow: hidden;
        background: white;
    }

    .accComIdent .accComIdentMain .accComIdentRight {
        width: 431px;
        height: auto;
        padding: 50px 0;
        margin: 0 auto;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightTitle {
        margin-bottom: 17px;
        color: #434343;
        font-weight: 600;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightTitle span {
        color: #878787;
        font-size: 12px;
        font-weight: normal;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName .accComIdentRightName_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName .accComIdentRightName_text {
        float: left;
        width: 312px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName .accComIdentRightName_text input {
        width: 310px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense .accComIdentRightLicense_label {
        float: left;
        width: 84px;
        height: 46px;
        line-height: 46px;
        margin-right: 10px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense .accComIdentRightLicense_img {
        float: left;
        width: 310px;
        height: auto;
        line-height: 44px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense .accComIdentRightLicense_img input {
        width: 310px;
        height: 50px;
        display: block;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightBtn {
        width: 240px;
        height: 58px;
        margin: 0 auto 54px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightBtn .accComIdentRightBtnSubmit {
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
    /* 修改input：file的默认样式 */
    #uploadFile{
        font-size: 0;
    }
    #uploadFile::-webkit-file-upload-button {
        border:1px solid #999;
        height: 46px;
        width: 240px;
        line-height: 44px;
        /* padding: 40px 100px; */
        border-radius: 5px;
        font-size: 12px;
        background: #fff;
        cursor: pointer;
    }

    /* 引入css样式 */
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
    .addIcon{
        color: #ccc;
    }
</style>
