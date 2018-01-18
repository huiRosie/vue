<template>
    <div class="check">
        <div class="topNav">
            <span>认证审核</span> > 
            <router-link class="topNavLink" to='/ident/comp'>企业认证信息</router-link> > 
            <span>立即审核</span>
        </div>
        <div class="checkMain">
                <!--汇票信息-->
            <div class="checkMainCont">
                <div class="checkMainLeft">
                    <div class="check">
                        <h3 class="checkTitle">账户信息</h3>
                        <ul class="checkInfo">
                            <li class="checkInfoItem">
                                <div class="checkInfoItem_label">
                                    昵称：
                                </div>
                                <div class="checkInfoItem_text">
                                    {{userInfo.userName}}
                                </div>
                            </li>
                            <li class="checkInfoItem">
                                <div class="checkInfoItem_label">
                                    姓名：
                                </div>
                                <div class="checkInfoItem_text">
                                    {{userInfo.realName}}
                                </div>
                            </li>
                            <li class="checkInfoItem">
                                <div class="checkInfoItem_label">
                                    联系电话：
                                </div>
                                <div class="checkInfoItem_text">
                                    {{userInfo.userPhone}}
                                </div>
                            </li>
                            <li class="checkInfoItem">
                                <div class="checkInfoItem_label">
                                    联系邮箱：
                                </div>
                                <div class="checkInfoItem_text">
                                    {{userInfo.userEmail}}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--认证信息-->
                    <div class="checkAttach">
                        <h3 class="checkAttachTitle">认证信息</h3>
                        <!-- <div class="checkAttachInfo">
                            该用户未提认证申请或未通过认证审核
                        </div> -->
                        <ul class="checkAttachInfo">
                            <li class="checkAttachInfoItem">
                                <div class="checkAttachInfoItem_label">
                                    企业名称：
                                </div>
                                <div v-if="userInfo.blCompanyName==''||userInfo.blCompanyName==null" class="checkAttachInfoItem_text">
                                    未填写
                                </div>
                                <div v-else class="checkAttachInfoItem_text">
                                    {{userInfo.blCompanyName}}
                                </div>
                            </li>
                            <li class="checkAttachInfoItem" style="display:none;">
                                <div class="checkAttachInfoItem_label">
                                    法人代表：
                                </div>
                                <div v-if="userInfo.blCompanyOwner==''||userInfo.blCompanyOwner==null" class="checkAttachInfoItem_text">
                                    未填写
                                </div>
                                <div v-else class="checkAttachInfoItem_text">
                                    {{userInfo.blCompanyOwner}}
                                </div>
                            </li>
                            <li class="checkAttachInfoItem">
                                <div class="checkAttachInfoItem_label">
                                    营业执照:
                                </div>
                                <div class="checkAttachInfoItem_text">
                                    右图
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="checkMainRight">
                    <img v-if="userInfo.businessLicence!=null&&userInfo.businessLicence.indexOf('http://')==-1&&userInfo.businessLicence.indexOf('https://')==-1" :src="'http://'+userInfo.businessLicence" alt="">
                    <img v-else :src="userInfo.businessLicence" alt="">
                </div>
            </div>
            <!-- 立即审核 -->
            <div class="checkBtn">
                <a class="checkBtnFail" @click="bidModal">认证失败</a>
                <a class="checkBtnSuccess" @click="companyCheck('success')">认证成功</a>
                <!-- 点击出现弹框 -->
                <Modal
                    v-model="modal"
                    title="认证失败原因(请输入认证失败原因)"
                    class-name="vertical-center-modal">
                    <div slot="header" class="bidPouupTop">
                        <h2 class="bidPouupTopTitle">认证失败原因<span> (请输入认证失败原因)</span></h2>
                    </div>
                    <div class="bidPouupMain">
                        <div class="bidPouupMain_label">
                            认证失败原因：
                        </div>
                        <div class="bidPouupMain_text">
                            <textarea v-model="companyAuthDesc" name="" ></textarea>
                        </div>
                        <div class="bid_tip" ref="bid_tip">请输入认证失败原因</div>
                    </div>
                    <div slot="footer" class="bidPouupBtn">
                        <a @click="identFail()" class="bidPouupFail">认证失败</a>
                    </div>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchUserInfo,fetchCompanyCheck } from '../../../assets/js/billApi'

export default {
    name: 'IdentCompCheck',
    data () {
        return {
            modal:false,
            userId:'',
            userInfo:'',
            companyAuthDesc:''
        }
    },
    created:function(){
        this.getComInfo();
    },
    methods:{
        getComInfo:function(){
            var self = this;
            self.userId = self.$route.params.userId;
            fetchUserInfo({
                userId:self.userId
            }).then(function(res){
                self.userInfo = res.data.data;
                // console.log(self.userInfo)
            })
        },
        bidModal:function(){
            this.modal = true;
        },
        identFail:function(){
            this.modal = false;
            this.companyCheck('failure');
        },
        companyCheck:function(companyAuth){
            var self = this;
            fetchCompanyCheck({
                userId:self.userId,
                companyAuth:companyAuth,
                companyAuthDesc:self.companyAuthDesc
            }).then(function(res){
                // console.log(res);
                self.$Message.success('操作成功!');
                self.$router.push('/ident/comp');
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .check {
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

    .check .checkMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .check .checkMain .checkMainCont{
        width: 100%;
        height: 535px;
        padding: 20px 0;
        overflow: hidden;
    }

    .check .checkMain .checkMainCont .checkMainLeft{
        width: 426px;
        height: 535px;
        float: left;
        overflow: hidden;
    }

    .check .checkMain .check {
        width: 982px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .check .checkMain .check .checkTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .check .checkMain .check .checkInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .check .checkMain .check .checkInfo .checkInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .check .checkMain .check .checkInfo .checkInfoItem .checkInfoItem_label {
        width: auto;
        height: 20px;
        float: left;
        margin-right:4px;
    }

    .check .checkMain .check .checkInfo .checkInfoItem .checkInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .check .checkMain .checkAttach {
        width: 1220px;
        height: auto;
        padding: 0 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .check .checkMain .checkAttach .checkAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .check .checkMain .checkAttach .checkAttachInfoItem{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .check .checkMain .checkAttach .checkAttachInfoItem .checkAttachInfoItem_label {
        width: auto;
        height: 20px;
        float: left;
        margin-right:4px;
    }

    .check .checkMain .checkAttach .checkAttachInfoItem .checkAttachInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .check .checkMain .checkAttach .checkAttachInfo {
        padding: 0 10px;
        overflow: hidden;
    }

    .check .checkMain .checkMainCont .checkMainRight{
        width: 306px;
        height: 433px;
        float: left;
        overflow: hidden;
    }

    .check .checkMain .checkMainCont .checkMainRight img{
        display: block;
        width: 306px;
        height: 433px;
    }

    .check .checkMain .checkBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .check .checkMain .checkBtn .checkBtnFail, 
    .check .checkMain .checkBtn .checkBtnSuccess {
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

    .check .checkMain .checkBtn .checkBtnFail{
        margin-right: 20px;
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
        width: 88px;
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
