<template>
    <div class="detail">
        <div class="topNav">
            <span>认证审核</span> > 
            <router-link class="topNavLink" to='/ident/pers'>用户认证信息</router-link> > 
            <span>认证信息详情</span>
        </div>
        <div class="detailMain">
            <!--汇票信息-->
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
                <div class="detailAttachInfo">
                    <div class="detailAttachInfoLeft">
                        <h3>手持身份证正面照：</h3>
                        <img v-if="userInfo.idcardImg!=null&&userInfo.idcardImg.indexOf('http://')==-1&&userInfo.idcardImg.indexOf('https://')==-1" :src="'http://'+userInfo.idcardImg" alt="">
                        <img v-else :src="userInfo.idcardImg" alt="">
                    </div>
                    <ul v-if="userInfo.companyAuth=='failure'||userInfo.companyAuth=='success'" class="detailAttachInfoRight">
                        <li class="detailAttachInfoItem">
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
        </div>
    </div>
</template>

<script>
import { fetchUserInfo } from '../../../assets/js/billApi'

export default {
    name: 'identUserDet',
    data () {
        return {
            modal:false,
            userId:'',
            userInfo:'',
            userAuthDesc:''
        }
    },
    created:function(){
        this.getUserInfo();
    },
    methods:{
        getUserInfo:function(){
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

    .detail .detailMain .detail {
        width: 982px;
        height: auto;
        padding: 20px 30px 30px;
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
        border-left: 5px solid #ff8000;
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

    .detail .detailMain .detail .detailInfo .detailInfoRight {
        width: 382px;
        height: 218px;
        float: left;
    }

    .detail .detailMain .detail .detailInfo .detailInfoRight img {
        display: block;
        width: 382px;
        height: 218px;
    }

    .detail .detailMain .detailAttach {
        width: 1220px;
        height: auto;
        padding: 0 30px 50px;
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
        border-left: 5px solid #ff8000;
    }

    .detail .detailMain .detailAttach .detailAttachInfo {
        padding: 0 10px;
        overflow: hidden;
    }

    .detail .detailMain .detailAttach .detailAttachInfo .detailAttachInfoLeft{
        float: left;
        margin-right: 76px;
    }

    .detail .detailMain .detailAttach .detailAttachInfo .detailAttachInfoRight{
        float: left;
    }

    .detail .detailMain .detailAttach .detailAttachInfo h3 {
        width: 338px;
        height: 20px;
        lighting-color: 20px;
        margin-bottom: 10px;
    }

    .detail .detailMain .detailAttach .detailAttachInfo img {
        display: block;
        width: 338px;
        height: 254px;
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

    .detail .detailMain .detailBtn {
        width: 240px;
        height: 108px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .detail .detailMain .detailBtn .detailBtnAban {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        border-radius: 4px;
    }

</style>
