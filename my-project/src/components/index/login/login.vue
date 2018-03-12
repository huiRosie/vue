<template>
    <div class="login">
        <div class="loginContent">
        <div class="loginMain">
            <div class="loginMainTop">
                <a class="loginMainTopLogin loginMainTopActive" >登录</a>
                <router-link class="loginMainToplogin" to="/reg">注册</router-link>
            </div>
            <!--登录-->
            <div class="loginMainLogin">
                <div class="loginMainLoginItem">
                    <div class="loginMainLoginItem_label">
                        账号：
                    </div>
                    <div class="loginMainLoginItem_text">
                        <input type="text" name="" v-model="phone" v-on:keyup.enter="goLogin"  v-on:blur='onblurPhone(phone)' value="" placeholder="请输入您的账号" />
                    </div>
                    <div class="loginMainLoginItem_tip" ref="loginPhone_tip"> 
                        请正确输入您的账号
                    </div>
                </div>
                <div class="loginMainLoginItem">
                    <div class="loginMainLoginItem_label">
                        密码：
                    </div>
                    <div class="loginMainLoginItem_text">
                        <input type="password" v-model="password" v-on:keyup.enter="goLogin"  v-on:blur='onblurPassword(password)' value="" placeholder="请输入您的密码" />
                    </div>
                    <div class="loginMainLoginItem_tip" ref="loginPassword_tip">
                        {{passwordTip}}
                    </div>
                </div>
                <div class="loginMainLoginBtn"  @click='goLogin'>
                    登录
                </div>
                <div class="loginMainLoginPass" style="display:none;">
                    <a class="loginMainLoginPass_remember">
                        <input type="checkbox" name="" id="" value="" /> 
                        <span> 记住密码</span>
                    </a>
                    <a class="loginMainLoginPass_forget">忘记密码?</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import globalData from '../../globalData'

export default {
    name: 'Login',
    data () {
        return {
        phone: '',
        password:'',
        passwordTip:'密码输入错误',
        username:'',
        userAuth:'',
        companyAuth:''
        }
    },
    methods:{
        goLogin:function(){
            if(this.phone==''){
                this.$refs.loginPhone_tip.style.display = 'block'   
                return
            }
            if(this.password==''){
                this.$refs.loginPassword_tip.style.display = 'block'   
                return
            }
            if ((/^[1][3578][0-9]{9}$/).test(this.phone)&&(/^[a-zA-Z0-9]{6,18}$/).test(this.password)) {
                var self = this;
                self.$http.post(globalData.data.Ip+'/user/login',
                    {
                        username:self.phone,
                        password:self.password
                    },{emulateJSON:true,withCredentials: true}).then(function(res){        
                    if(res.data.code == 200) {
                        console.log(res);
                        globalData.data.loginStatus = '退出登录'
                        self.$router.push('/index');
                        self.$emit('userSignIn', globalData.data.loginStatus);
                        // 登录成功，存储登录信息
                        globalData.methods.setData('loginStatus','已登录');
                        self.$Message.success('登录成功');
                        // 登录成功存储认证信息                       
                        self.userAuth = res.data.data.userAuth;                          
                        self.companyAuth = res.data.data.companyAuth;
                        localStorage.setItem('eleUserAuth',self.userAuth);                         
                        localStorage.setItem('eleCompanyAuth',self.companyAuth);       
                    } else {
                        this.$refs.loginPassword_tip.style.display = 'block'
                        self.passwordTip = res.data.data; 
                        console.log(res.data.data);
                        console.log(res);
                    }
                })
            }
        },
        // 绑定键盘事件
        
        // 失去焦点
        onblurPhone:function(ele){
            var self = this;
            if((/^[1][3578][0-9]{9}$/).test(ele)){
                self.$refs.loginPhone_tip.style.display = 'none'  
            }else{
                self.$refs.loginPhone_tip.style.display = 'block'  
            }
        },
        onblurPassword:function(ele){
            var self = this;
            if((/^[a-zA-Z0-9]{6,18}$/).test(ele)){
                self.$refs.loginPassword_tip.style.display = 'none'  
            }else{
                self.$refs.loginPassword_tip.style.display = 'block'  
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        width: 100%;
        min-height: 750px;
        background: url(../../../assets/loginbg.png) no-repeat center;
        background-size: 100% 100%;
        padding: 36px 0 50px;
    }

    .login .loginContent {
        width: 1280px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
    }

    .login .loginContent .loginMain {
        width: 400px;
        height: 360px;
        float: right;
        background: white;
    }

    .login .loginContent .loginMain .loginMainTop {
        width: 100%;
        height: 58px;
        line-height: 25px;
        padding: 16px 0;
        border-bottom: 1px solid #e1e1e1;
    }

    .login .loginContent .loginMain .loginMainTop a {
        display: block;
        width: 199px;
        height: 25px;
        font-size: 18px;
        text-align: center;
        float: left;
    }

    .login .loginContent .loginMain .loginMainTop .loginMainToplogin {
        width: 200px;
        border-left: 1px solid #e1e1e1;
    }

    .login .loginContent .loginMain .loginMainTop .loginMainTopActive {
        color: #f71327;
    }

    .login .loginContent .loginMain .loginMainLogin {
        width: 428px;
        height: auto;
        padding: 16px 48px 16px 20px;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginItem {
        width: 100%;
        height: 68px;
        overflow: hidden;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginItem .loginMainLoginItem_label {
        width: 56px;
        height: 46px;
        line-height: 46px;
        float: left;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginItem .loginMainLoginItem_text {
        width: 268px;
        height: 46px;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
        float: left;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginItem .loginMainLoginItem_text input {
        display: block;
        width: 266px;
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
        text-indent: 20px;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginItem .loginMainLoginItem_tip {
        width: 100%;
        height: 20px;
        line-height: 20px;
        float: left;
        color: red;
        font-size: 12px;
        padding-left: 56px;
        display: none;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginCode .loginMainLoginItem_text {
        width: 154px;
        margin-right: 10px;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginCode .loginMainLoginItem_text input {
        width: 154px;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginCode .loginMainLoginItem_getcode {
        height: 46px;
        line-height: 46px;
        float: left;
        color: #f71327;
        cursor: pointer;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginBtn {
        width: 268px;
        height: 46px;
        color: white;
        font-size: 16px;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        background-color: #f71327;
        margin-left: 54px;
        cursor: pointer;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginPass {
        width: 268px;
        height: 12px;
        line-height: 12px;
        margin: 20px 0 20px 54px;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginPass .loginMainLoginPass_remember {
        height: 12px;
        line-height: 12px;
        float: left;
        font-size: 12px;
        color: #f71327;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginPass .loginMainLoginPass_remember input {
        display: block;
        float: left;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginPass .loginMainLoginPass_remember span {
        display: block;
        float: left;
        padding-left: 2px;
    }

    .login .loginContent .loginMain .loginMainLogin .loginMainLoginPass .loginMainLoginPass_forget {
        height: 12px;
        float: right;
        font-size: 12px;
        color: #f71327;
    }
</style>
