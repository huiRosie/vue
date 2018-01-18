<template>
    <div class="login">
        <div class="loginContent">
            <div class="loginMain">
                <div class="loginMainTop">
                    <a class="loginMainTopLogin loginMainTopActive" >登录</a>
                </div>
                <!--登录-->
                <div class="loginMainLogin">
                    <div class="loginMainLoginItem">
                        <div class="loginMainLoginItem_label">
                            账号：
                        </div>
                        <div class="loginMainLoginItem_text">
                            <input type="text" name="" v-model="phone"  value="" />
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
                            <input type="password" name="" v-model="password" v-on:keyup.enter="goLogin" value="" />
                        </div>
                        <div class="loginMainLoginItem_tip" ref="loginPassword_tip">
                            {{passwordTip}}
                        </div>
                    </div>
                    <div class="loginMainLoginBtn" @click='goLogin'>
                        登录
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="canvaszz"> </div>
        <canvas id="canvas" ref="canvas"></canvas>  -->
    </div>
</template>

<script>
import {loginIn} from '../../assets/js/billApi'

export default {
    name: 'Login',
    data () {
        return {
            phone: '',
            password:'',
            passwordTip:'密码输入错误',
            username:'',
            canvas:'',
            cxt:''
        }
    },
    created:function(){
        
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
            if (this.phone!=''&&this.password!=''){
                var self = this;
                var data = self.$qs.stringify({
                    userName:self.phone,
                    userPassword:self.password
                })
                //调用接口  
                loginIn(data,{emulateJSON:true,credentials:true}).then(function(res){
                    if(res.data.code == 200) {
                        // console.log(res);
                        self.$router.push('/out/sale/publishing');
                        self.$Message.success('登录成功');
                        // 登录成功，存储登录信息
                        self.setData('eleManagerLogin','已登录');
                    } else {
                        self.$refs.loginPassword_tip.style.display = 'block'
                        self.passwordTip = res.data.data; 
                        // console.log(res.data.data);
                        // console.log(res);
                    }
                })
            }
        },
        // 失去焦点
        oHeight:function(){
            
        },
        //封装过期控制代码localStorage存储
        setData:function (key,value){
            var curTime = new Date().getTime();
            localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        width: 100%;
        height: 100%;
        position:relative;
    }

    .login canvas {
        width:100%;
        height:auto;/*默认全屏显示 可自己设置高度640px*/
        display:inline-block;
        vertical-align:baseline;
        /*position:absolute;*/
        z-index:-1;
	}

    .login .canvaszz{  /*用来解决视频右键菜单，用于视频上面的遮罩层*/
        width:100%;
        background-image: url(../../assets/images/loginbg.jpg);
        height:640px;
        position:absolute;
        z-index:10;
        filter:alpha(opacity=40);  
        -moz-opacity:0.4;  
        -khtml-opacity: 0.4;  
        opacity: 0.4;
	}

    .login .loginContent {
        min-width: 402px;
        height: 100%;
        overflow: hidden;
        margin: 0 auto;
        background: url(../../assets/images/loginbg.jpg) no-repeat center;
        background-size: 100% 100%;
        /* background-color:rgb(15, 71, 97); */
    }

    .login .loginContent .loginMain {
        width: 402px;
        height: 362px;
        background: white;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -180px;
        margin-left: -200px;
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
        width: 100%;
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
        height:78px;
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
        height: 30px;
        line-height: 30px;
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
        margin-top: 10px;
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
