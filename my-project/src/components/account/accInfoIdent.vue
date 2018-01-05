<template>
    <div class="accInfoIdent">
        <h2 class="accInfoIdentTitle">
            <router-link to="/acc/set/accInfo" >账户信息</router-link> >
            <span >个人认证</span>
        </h2>
        <div class="accInfoIdentMain">
            <div class="accInfoIdentLeft">
                <div class="accInfoIdentLeftTitle">
                    个人认证状态 <span>(未认证)</span>
                </div>
                <div class="accInfoIdentLeftName">
                    <div class="accInfoIdentLeftName_label">
                        真实姓名：
                    </div>
                    <div class="accInfoIdentLeftName_text">
                        <input type="text" v-model="realName" value="" />
                    </div>
                </div>
                <div class="accInfoIdentLeftIdcard">
                    <div class="accInfoIdentLeftIdcard_label">
                        身份证号：
                    </div>
                    <div class="accInfoIdentLeftIdcard_text">
                        <input type="number" v-model="idCode" value="" />
                    </div>
                </div>
                <div class="accInfoIdentLeftIdfont">
                    <div class="accInfoIdentLeftIdfont_label">
                        手持身份证正面照：
                    </div>
                    <div class="accInfoIdentLeftIdfont_img">
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
                                    style="display:block;width:320px;" >
                                    <div style="width:320px;height:198px;line-height:236px;">
                                        <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                    </div>
                                </Upload>
                    </div>
                </div>
                <!-- <div class="accInfoIdentLeftIdback">
                    <div class="accInfoIdentLeftIdback_label">
                        身份证反面：
                    </div>
                    <div class="accInfoIdentLeftIdback_img">
                        <div class="demo-upload-list" v-if="uploadBackList.length >0">
                                    <template v-if="uploadBackList[0].status === 'finished'">
                                        <img :src="uploadBackList[0].url">
                                        <div class="demo-upload-list-cover">
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
                                    action="http://192.168.11.26/common/upload"
                                    style="display:inline-block;width:320px;" >
                                    <div style="width:320px;height:198px;line-height:236px;">
                                        <Icon type="ios-plus-empty" class="addIcon" size="60" ></Icon>
                                    </div>
                                </Upload>
                    </div>
                </div> -->
                <div class="accInfoIdentLeftBtn">
                    <a class="accInfoIdentLeftBtnSubmit" @click="accInfoIdent()">提交申请</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'AccInfoIdent',
    data () {
        return {
            realName:'',
            idCode:'',
            frontImg:'',
            backImg:'',
            uploadFrontList: [],
            // uploadBackList: []
        }
    },
        methods: {
            // 上传成功
            handleSuccess (res,file,fileList) {
                this.uploadFrontList = fileList;
                file.url = "http://"+res.data;
                file.name = res.data;
                this.frontImg = res.data;
            },
            handleSuccessBack (res, file,fileList) {
                this.uploadBackList = fileList;
                file.url = "http://"+res.data;
                file.name = res.data;
                this.backImg = res.data;
            },
            // 删除照片
            handleRemoveFront () {
                this.uploadFrontList.splice(this.uploadFrontList[0], 1);
                this.frontImg = '';
            },
            handleRemoveBack () {
                this.uploadBackList.splice(this.uploadBackList[0], 1);
                this.backImg = '';
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
            // 个人认证
            accInfoIdent(){
                var self = this;
                const title = '提示';
                if(self.realName==''){
                    const content = '<p>请输入您的真实姓名！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                if(self.idCode==''){
                    const content = '<p>请输入您的身份证号！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                if(self.frontImg==''){
                    const content = '<p>请上传您的手持身份证正面照！</p>';
                    this.$Modal.warning({
                        title: title,
                        content: content
                    });
                    return;
                }
                // if(self.backImg==''){
                //     const content = '<p>请上传您的身份证反面图片！</p>';
                //     this.$Modal.info({
                //         title: title,
                //         content: content
                //     });
                //     return;
                // }  
                // 调取接口  发布汇票
                self.$http.post(globalData.data.Ip+'/user/auth/user',
                    {
                        realName:self.realName,
                        idcard:self.idcard,
                        idcardImg:self.frontImg,
                        // idcardbgImg:self.backImg
                    },{emulateJSON:true,credentials:true}).then(function(res){ 
                        console.log(res)
                        if(res.data.code==200){
                            self.$Message.success('个人认证成功，请等待审核!');
                            self.$router.push('/acc/set/accInfo');
                        }                         
                    },function(error){
                        console.log(error);  
                })
            }
        },
        mounted () {
            this.uploadFrontList = this.$refs.uploadFront.fileList;
            // this.uploadBackList = this.$refs.uploadBack.fileList;
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accInfoIdent {
        width: 982px;
        height: auto;
    }

    .accInfoIdent .accInfoIdentTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accInfoIdent .accInfoIdentMain {
        width: 100%;
        height: auto;
        overflow: hidden;
        background: white;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft {
        width: 454px;
        height: auto;
        padding: 50px 0;
        margin: 0 auto;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftTitle {
        margin-bottom: 17px;
        color: #434343;
        font-weight: 600;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftTitle span {
        color: #878787;
        font-size: 12px;
        font-weight: normal;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName .accInfoIdentLeftName_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName .accInfoIdentLeftName_text {
        float: left;
        width: 320px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName .accInfoIdentLeftName_text input {
        width: 318px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard .accInfoIdentLeftIdcard_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard .accInfoIdentLeftIdcard_text {
        float: left;
        width: 320px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard .accInfoIdentLeftIdcard_text input {
        width: 318px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont .accInfoIdentLeftIdfont_label {
        float: left;
        width: 84px;
        height: 46px;
        line-height: 46px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont .accInfoIdentLeftIdfont_img {
        float: left;
        width: 310px;
        height: auto;
        line-height: 44px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont .accInfoIdentLeftIdfont_img input {
        width: 310px;
        height: 23px;
        display: block;
        margin: 12px 0 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback .accInfoIdentLeftIdback_label {
        float: left;
        width: 84px;
        height: 46px;
        line-height: 46px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback .accInfoIdentLeftIdback_img {
        float: left;
        width: 310px;
        height: auto;
        line-height: 44px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback .accInfoIdentLeftIdback_img input {
        width: 310px;
        height: 23px;
        display: block;
        margin: 12px 0 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftBtn {
        width: 240px;
        height: 58px;
        margin: 0 auto 54px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftBtn .accInfoIdentLeftBtnSubmit {
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
    /* 上传按钮 */
    .demo-upload-list{
        display:inline-block;
        width: 320px;
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
