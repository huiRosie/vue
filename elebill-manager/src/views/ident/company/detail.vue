<template>
    <div class="detail">
        <div class="topNav">
            <span>认证审核</span> > 
            <router-link class="topNavLink" to='/ident/comp'>企业认证信息</router-link> > 
            <span>认证信息详情</span>
        </div>
        <div class="detailMain">
                <!--汇票信息-->
            <div class="detailMainCont">
                <div class="detailMainLeft">
                    <div class="detail">
                        <h3 class="detailTitle">账户信息</h3>
                        <ul class="detailInfo">
                            <li class="detailInfoItem">
                                <div class="detailInfoItem_label">
                                    昵称：
                                </div>
                                <div class="detailInfoItem_text">
                                    {{userInfo.userName}}
                                </div>
                            </li>
                            <li class="detailInfoItem">
                                <div class="detailInfoItem_label">
                                    姓名：
                                </div>
                                <div class="detailInfoItem_text">
                                    {{userInfo.realName}}
                                </div>
                            </li>
                            <li class="detailInfoItem">
                                <div class="detailInfoItem_label">
                                    联系电话：
                                </div>
                                <div class="detailInfoItem_text">
                                    {{userInfo.userPhone}}
                                </div>
                            </li>
                            <li class="detailInfoItem">
                                <div class="detailInfoItem_label">
                                    联系邮箱：
                                </div>
                                <div v-if="userInfo.userEmail!=null" class="detailInfoItem_text">
                                    {{userInfo.userEmail}}
                                </div>
                                <div v-else class="detailInfoItem_text">
                                    未填写
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--认证信息-->
                    <div class="detailAttach">
                        <h3 class="detailAttachTitle">认证信息</h3>
                        <!-- <div class="detailAttachInfo">
                            该用户未提认证申请或未通过认证审核
                        </div> -->
                        <ul class="detailAttachInfo">
                            <li class="detailAttachInfoItem">
                                <div class="detailAttachInfoItem_label">
                                    企业名称：
                                </div>
                                <div class="detailAttachInfoItem_text">
                                    {{userInfo.blCompanyName}}
                                </div>
                            </li>
                            <li class="detailAttachInfoItem">
                                <div class="detailAttachInfoItem_label">
                                    法人代表：
                                </div>
                                <div v-if="userInfo.blCompanyOwner!=null" class="detailAttachInfoItem_text">
                                    {{userInfo.blCompanyOwner}}
                                </div>
                                <div v-else class="detailAttachInfoItem_text">
                                    未填写
                                </div>
                            </li>
                            <li class="detailAttachInfoItem">
                                <div class="detailAttachInfoItem_label">
                                    营业执照:
                                </div>
                                <div class="detailAttachInfoItem_text">
                                    右图
                                </div>
                            </li>
                            <li v-if="userInfo.companyAuth=='failure'||userInfo.companyAuth=='success'" class="detailAttachInfoItem">
                                <div class="detailAttachInfoItem_label">
                                    认证结果：
                                </div>
                                <div v-if="userInfo.companyAuth=='failure'" style="color:#f71327;" class="detailAttachInfoItem_text">
                                    认证失败
                                </div>
                                <div v-if="userInfo.companyAuth=='success'" style="color:#f71327;" class="detailAttachInfoItem_text">
                                    认证成功
                                </div>
                            </li>
                            <li v-if="userInfo.companyAuth=='failure'" class="detailAttachInfoItem">
                                <div class="detailAttachInfoItem_label">
                                    认证失败原因：
                                </div>
                                <div class="detailAttachInfoItem_text">
                                    {{userInfo.companyAuthDesc}}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="detailMainRight">
                    <img v-if="userInfo.businessLicence!=null&&userInfo.businessLicence.indexOf('http://')==-1&&userInfo.businessLicence.indexOf('https://')==-1" :src="'http://'+userInfo.businessLicence" alt="">
                    <img v-else :src="userInfo.businessLicence" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchUserInfo } from '../../../assets/js/billApi'
export default {
    name: 'identCompDet',
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
                console.log(self.userInfo)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .detail {
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

    .detail .detailMain {
        width: 100%;
        height: 638px;
        background: white;
    }

    .detail .detailMain .detailMainCont{
        width: 100%;
        height: 535px;
        padding: 20px 0;
        overflow: hidden;
    }

    .detail .detailMain .detailMainCont .detailMainLeft{
        width: 426px;
        height: 535px;
        float: left;
        overflow: hidden;
    }

    .detail .detailMain .detail {
        width: 982px;
        height: auto;
        padding: 0 30px 20px;
        margin: 0 auto;
        overflow: hidden;
    }

    .detail .detailMain .detail .detailTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 15px;
        border-left: 5px solid #f71327;
    }

    .detail .detailMain .detail .detailInfo {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .detail .detailMain .detail .detailInfo .detailInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .detail .detailMain .detail .detailInfo .detailInfoItem .detailInfoItem_label {
        width: auto;
        height: 20px;
        float: left;
        margin-right:4px;
    }

    .detail .detailMain .detail .detailInfo .detailInfoItem .detailInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .detail .detailMain .detailAttach {
        width: 1220px;
        height: auto;
        padding: 0 30px 30px;
        margin: 0 auto;
        overflow: hidden;
    }

    .detail .detailMain .detailAttach .detailAttachTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #f71327;
    }

    .detail .detailMain .detailAttach .detailAttachInfoItem{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 13px;
        overflow: hidden;
    }

    .detail .detailMain .detailAttach .detailAttachInfoItem .detailAttachInfoItem_label {
        width: auto;
        height: 20px;
        float: left;
        margin-right:4px;
    }

    .detail .detailMain .detailAttach .detailAttachInfoItem .detailAttachInfoItem_text {
        width: 270px;
        height: 20px;
        float: left;
    }

    .detail .detailMain .detailAttach .detailAttachInfo {
        padding: 0 10px;
        overflow: hidden;
    }

    .detail .detailMain .detailMainCont .detailMainRight{
        width: 306px;
        height: 433px;
        float: left;
        overflow: hidden;
    }

    .detail .detailMain .detailMainCont .detailMainRight img{
        display: block;
        width: 306px;
        height: 433px;
    }

    .detail .detailMain .detailBtn {
        width: 520px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .detail .detailMain .detailBtn .detailBtnFail, 
    .detail .detailMain .detailBtn .detailBtnSuccess {
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

    .detail .detailMain .detailBtn .detailBtnFail{
        margin-right: 20px;
    }    
</style>
