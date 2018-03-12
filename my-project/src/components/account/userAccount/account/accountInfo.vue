<template>
    <div class="accountInfo">
        <h2 class="accountInfoTitle">账户信息</h2>
        <div class="personInfo">
            <div class="perInfoTop">
                <h2 class="perInfoTitle">个人信息</h2>
                <div class="perInfoEdit">
                    <router-link class='perInfoEditBtn' to='/acc/set/accInfo/accInfoEdit'>编辑</router-link>
                </div>
            </div>
            <ul class="perInfoList">
                <li class="perInfoItem">
                    <div class="perInfoItem_label">昵称：</div>
                    <div class="perInfoItem_text" v-text="userName"></div>
                    <div v-if="(/^[1][3578][0-9]{9}$/).test(userName)" class="perInfoItem_des">
                        （默认为手机号）
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">姓名：</div>
                    <div class="perInfoItem_text" style="fontsize:12px;color:#878787;" v-if="realName==''||realName==null">
                       未填写
                    </div>
                    <div class="perInfoItem_text" v-else v-text="realName"></div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">电话：</div>
                    <div class="perInfoItem_text" v-text="userPhone">
                        
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">微信：</div>
                    <div class="perInfoItem_text" v-if="wexin!=''">
                        {{wexin}}
                    </div>
                    <div class="perInfoItem_text" style="fontsize:12px;color:#878787;" v-if="wexin==''||wexin==null">
                        未填写
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">邮箱：</div>
                    <div class="perInfoItem_text" v-if="userEmail!=''">
                        {{userEmail}}
                    </div>
                    <div class="perInfoItem_text" style="fontsize:12px;color:#878787;" v-if="userEmail==''||userEmail==null">
                        未填写
                    </div>
                </li>
            </ul>
        </div>
        <div class="identInfo">
            <div class="identInfoTop">
                <h2 class="identInfoTitle">认证信息</h2>
            </div>
            <ul class="identInfoList">
                <li class="identInfoItem">
                    <div class="identInfoItem_label">个人认证：</div>
                    <div v-if="userAuth ==''||userAuth ==null||userAuth =='unauth'">
                        <div class="identInfoItem_text">
                            未认证
                        </div>
                        <div class="identInfoItem_ident">
                            <router-link class='identInfoItem_identBtn' to='/acc/set/accInfo/accInfoIdent'>[去认证]</router-link>
                        </div>
                    </div>
                    <div v-if="userAuth =='authing'">
                        <div class="identInfoItem_text">
                            审核中
                        </div>
                    </div>
                    <div v-if="userAuth =='success'">
                        <div class="identInfoItem_text">
                            已认证
                        </div>
                    </div>
                    <div v-if="userAuth =='failure'">
                        <div class="identInfoItem_text">
                            认证失败
                        </div>
                        <div class="identInfoItem_ident">
                            <router-link class='identInfoItem_identBtn' to='/acc/set/accInfo/accInfoIdent'>[重新认证]</router-link>
                        </div>
                    </div>
                </li>
                <li class="identInfoItem">
                    <div class="identInfoItem_label">企业认证：</div>
                    <div v-if="companyAuth ==''||companyAuth ==null||companyAuth =='unauth'">
                        <div class="identInfoItem_text">
                            未认证
                        </div>
                        <div class="identInfoItem_ident">
                            <router-link class='identInfoItem_identBtn' to='/acc/set/accInfo/accComIdent'>[去认证]</router-link>
                        </div>
                    </div>
                    <div v-if="companyAuth =='authing'">
                        <div class="identInfoItem_text">
                            审核中
                        </div>
                    </div>
                    <div v-if="companyAuth =='success'">
                        <div class="identInfoItem_text">
                            已认证
                        </div>
                    </div>
                    <div v-if="companyAuth =='failure'">
                        <div class="identInfoItem_text">
                            认证失败
                        </div>
                        <div class="identInfoItem_ident">
                            <router-link class='identInfoItem_identBtn' to='/acc/set/accInfo/accComIdent'>[重新认证]</router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import globalData from '../../../globalData'


export default {
    name: 'AccountInfo',
    data () {
        return {
            realName:'',
            userName:'',
            userPhone:'',
            wexin:'',
            userEmail:'',
            blCompanyName:'',
            companyAuth:'',
            userAuth:''
        }
    },
    created:function(){
        this.getUserInfo();
    },
    methods:{
        //   调取接口，获取用户信息
        getUserInfo:function(){
            var self = this;
            self.$http.get(globalData.data.Ip+'/user/info',{credentials:true}).then(function(res){ 
                console.log(res);    
                if(res.data.code==555){
                    self.$router.push('/login');
                }
                self.userName = res.data.data.userName;                          
                self.userPhone = res.data.data.userPhone;                          
                self.wexin = res.data.data.wexin;                          
                self.userEmail = res.data.data.userEmail;         
                self.realName = res.data.data.realName;                 
                self.companyAuth = res.data.data.companyAuth;         
                self.userAuth = res.data.data.userAuth;                 
                self.blCompanyName = res.data.data.blCompanyName;                 
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountInfo {
        width: 982px;
        height: auto;
    }

    .accountInfo .accountInfoTitle{
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
    }

    .accountInfo .personInfo {
        padding: 20px;
        width: 982px;
        height: 254px;
        border-bottom: 1px solid #eee;
    }

    .accountInfo .personInfo .perInfoTop {
        width: 100%;
        height: 22px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .accountInfo .personInfo .perInfoTop .perInfoTitle {
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        float: left;
        border-left: 5px solid #f71327;
    }

    .accountInfo .personInfo .perInfoTop .perInfoEdit {
        float: right;
    }

    .accountInfo .personInfo .perInfoTop .perInfoEdit .perInfoEditBtn {
        color: #f71327;
    }

    .accountInfo .personInfo .perInfoList {
        padding: 10px;
        width: 942px;
        height: auto;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 16px;
        overflow: hidden;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem .perInfoItem_label {
        float: left;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem .perInfoItem_text {
        float: left;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem .perInfoItem_des {
        float: left;
        font-size: 12px;
        color: #878787;
    }

    .accountInfo .identInfo {
        padding: 20px;
        width: 982px;
        height: 182px;
        background: white;
    }

    .accountInfo .identInfo .identInfoTop {
        width: 100%;
        height: 22px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .accountInfo .identInfo .identInfoTop .identInfoTitle {
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #f71327;
    }

    .accountInfo .identInfo .identInfoList {
        padding: 10px;
        width: 942px;
        height: auto;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 16px;
        overflow: hidden;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_label {
        float: left;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_text {
        float: left;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_ident {
        float: left;
        padding-left: 5px;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_ident .identInfoItem_identBtn {
        color: #f71327;
    }
</style>
