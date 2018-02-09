<template>
    <div class="changePass">
        <h2 class="changePassTitle">修改密码</h2>
        <div class="changePassMain">
            <div class="changePassTop">
                修改密码
            </div>
            <ul class="changPassList">
                <li class="changePassItem changePassOld">
                    <div class="changePassItem_label">
                        旧密码：
                    </div>
                    <div class="changePassItem_text">
                        <input type="password" v-model="oldPassword" name="" id="" value="" />
                    </div>
                    <div class="changePassItem_tip" ref="oldtip">
                        密码输入错误
                    </div>
                </li>
                <li class="changePassItem changePassOld">
                    <div class="changePassItem_label">
                        新密码：
                    </div>
                    <div class="changePassItem_text">
                        <input type="password" v-model="newPassword" name="" id="" value="" />
                    </div>
                    <div class="changePassItem_tip" ref="newtip">
                        密码输入错误
                    </div>
                </li>
                <li class="changePassItem changePassOld">
                    <div class="changePassItem_label">
                        确认新密码：
                    </div>
                    <div class="changePassItem_text">
                        <input type="password" v-model="repeatPassword" name="" id="" value="" />
                    </div>
                    <div class="changePassItem_tip" ref="retip">
                        密码输入错误
                    </div>
                </li>
            </ul>
            <div class="changePassBtn">
                <a class="changePassEnsure" @click="changePassword">确认修改</a>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'ChangePass',
    data () {
        return {
            oldPassword:'',
            newPassword:'',
            repeatPassword:''
        }
    },
    methods:{
        changePassword(){
            var self = this;
            if(self.oldPassword==''){
                self.$refs.oldtip.style.display = 'block';
                return;
            }
            self.$refs.oldtip.style.display = 'none';
            if(self.newPassword==''){
                self.$refs.newtip.style.display = 'block';
                return;
            }
            self.$refs.newtip.style.display = 'none';
            if(self.repeatPassword==''||self.repeatPassword!=self.newPassword){
                self.$refs.retip.style.display = 'block';
                return;
            }
            self.$refs.retip.style.display = 'none';
            // 调取接口，修改密码
            self.$http.post(globalData.data.Ip+'/user/info/changePwd',{
                userPassword:self.oldPassword,
                userNewPassword:self.newPassword
            },{emulateJSON:true,credentials: true}).then(function(res) { 
                console.log(res)
                const title = '提示';
                const content = '密码修改成功，请重新登录！';
                self.$Modal.warning({
                    title: title,
                    content: content,
                    onOk: function(){
                        // 执行退出登录
                        self.$http.get(globalData.data.Ip+'/user/logouted',{emulateJSON:true,credentials:true}).then(function(res){ 
                            // console.log(res);   
                            self.loginStatus = '登录';
                            // 删除存储的登录信息
                            globalData.methods.deleteItem('loginStatus');
                            self.$router.push('/login');
                        })
                    },
                });
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .changePass {
        width: 982px;
        height: auto;
    }

    .changePass .changePassTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
    }

    .changePass .changePassMain {
        width: 100%;
        height: auto;
    }

    .changePass .changePassMain .changePassTop {
        width: 100%;
        height: 76px;
        font-size: 18px;
        text-align: center;
        color: #f71327;
        padding-top: 50px;
        margin: 0 auto 26px;
    }

    .changePass .changePassMain .changPassList {
        width: 982px;
        height: auto;
        padding-left: 282px;
    }

    .changePass .changePassMain .changPassList .changePassItem {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .changePass .changePassMain .changPassList .changePassItem .changePassItem_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .changePass .changePassMain .changPassList .changePassItem .changePassItem_text {
        float: left;
        width: 312px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .changePass .changePassMain .changPassList .changePassItem .changePassItem_text input {
        width: 310px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .changePass .changePassMain .changPassList .changePassItem .changePassItem_tip {
        float: left;
        width: 110px;
        color: red;
        padding-left: 10px;
        display: none;
    }

    .changePass .changePassMain .changePassBtn {
        width: 240px;
        height: 108px;
        margin: 50px auto;
        padding-bottom: 50px;
    }

    .changePass .changePassMain .changePassBtn .changePassEnsure {
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
