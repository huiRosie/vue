<template>
    <div class="userInfo">
        <div class="topNav">
            <span>个人信息</span>
        </div>
        <div class="personInfo">
            <div class="perInfoTop">
                <h2 class="perInfoTitle">账户信息</h2>
                <div class="perInfoEdit">
                    <router-link class='perInfoEditBtn' to='/user/edit' style="display:none;">编辑</router-link>
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
                    <div class="perInfoItem_text" v-if="realName!=''">
                        {{realName}}
                    </div>
                    <div class="perInfoItem_text" style="fontsize:12px;color:#878787;" v-if="realName==''">
                       未填写
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">电话：</div>
                    <div class="perInfoItem_text" v-text="userPhone">
                        
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
    </div>
</template>

<script>
import { fetchAdminInfo } from '../../assets/js/billApi'

export default {
    name: 'userInfo',
    data () {
        return {
            realName:'',
            userName:'',
            userPhone:'',
            userEmail:''
        }
    },
    created:function(){
        this.getUserInfo();
    },
    methods:{
        //   调取接口，获取用户信息
        getUserInfo:function(){
            var self = this;
            fetchAdminInfo({credentials:true}).then(function(res){ 
                console.log(res);   
                self.userName = res.data.data.userName;                          
                self.userPhone = res.data.data.userPhone;                          
                self.userEmail = res.data.data.userEmail;         
                self.realName = res.data.data.realName;           
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .userInfo {
        width: 982px;
        height: auto;
    }
    
    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        border-bottom: 1px solid #eee;
    }

    .userInfo .personInfo {
        padding: 20px;
        width: 982px;
        height: 254px;
        background: white;
        margin-bottom: 1px;
    }

    .userInfo .personInfo .perInfoTop {
        width: 100%;
        height: 22px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .userInfo .personInfo .perInfoTop .perInfoTitle {
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        float: left;
        border-left: 5px solid #f71327;
    }

    .userInfo .personInfo .perInfoTop .perInfoEdit {
        float: right;
    }

    .userInfo .personInfo .perInfoTop .perInfoEdit .perInfoEditBtn {
        color: #f71327;
    }

    .userInfo .personInfo .perInfoList {
        padding: 10px;
        width: 942px;
        height: auto;
    }

    .userInfo .personInfo .perInfoList .perInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 16px;
        overflow: hidden;
    }

    .userInfo .personInfo .perInfoList .perInfoItem .perInfoItem_label {
        float: left;
    }

    .userInfo .personInfo .perInfoList .perInfoItem .perInfoItem_text {
        float: left;
    }

    .userInfo .personInfo .perInfoList .perInfoItem .perInfoItem_des {
        float: left;
        font-size: 12px;
        color: #878787;
    }

    .userInfo .identInfo {
        padding: 20px;
        width: 982px;
        height: 182px;
        background: white;
    }

    .userInfo .identInfo .identInfoTop {
        width: 100%;
        height: 22px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .userInfo .identInfo .identInfoTop .identInfoTitle {
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #f71327;
    }

    .userInfo .identInfo .identInfoList {
        padding: 10px;
        width: 942px;
        height: auto;
    }

    .userInfo .identInfo .identInfoList .identInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 16px;
        overflow: hidden;
    }

    .userInfo .identInfo .identInfoList .identInfoItem .identInfoItem_label {
        float: left;
    }

    .userInfo .identInfo .identInfoList .identInfoItem .identInfoItem_text {
        float: left;
    }

    .userInfo .identInfo .identInfoList .identInfoItem .identInfoItem_ident {
        float: left;
        padding-left: 5px;
    }

    .userInfo .identInfo .identInfoList .identInfoItem .identInfoItem_ident .identInfoItem_identBtn {
        color: #f71327;
    }
</style>
