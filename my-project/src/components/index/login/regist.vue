<template>
    <div class="regist">
        <div class="registContent">
        <div class="registMain">
            <div class="registMainTop">
                <router-link class="registMainTopLogin" to="/login">登录</router-link>
                <a class="registMainTopRegist registMainTopActive">注册</a>
            </div>
            <!--注册-->
            <div class="registMainReg">
                <div class="registMainRegItem">
                    <div class="registMainRegItem_label">
                        手机号：
                    </div>
                    <div class="registMainRegItem_text">
                        <input type="text" name="phone" v-model="phone" v-on:keyup.enter="goRegist" v-on:blur='onblurPhone(phone)' placeholder="请输入您的手机号" />
                    </div>
                    <div class="registMainRegItem_tip" ref="regPhone_tip">
                        请正确输入手机号
                    </div>
                </div>
                <div class="registMainRegItem">
                    <div class="registMainRegItem_label">
                        密码：
                    </div>
                    <div class="registMainRegItem_text">
                        <input type="password" name="password" v-model="password" v-on:keyup.enter="goRegist"  v-on:blur='onblurPassword(password)' placeholder="请输入密码" />
                    </div>
                    <div class="registMainRegItem_tip" ref="regPassword_tip">
                        请输入6-18位由数字和字母组成的密码
                    </div>
                </div>
                <div class="registMainRegItem registMainRegCode">
                    <div class="registMainRegItem_label">
                        验证码：
                    </div>
                    <div class="registMainRegItem_text">
                        <input type="text" name="msgcode" v-model="msgcode" v-on:keyup.enter="goRegist"  v-on:blur='onblurCode(msgcode)' />
                    </div>
                    <div class="registMainRegItem_getcode" v-bind:class="{registMainRegItem_getcodeActive:isActive}" v-on:click="getMesCode()" >
                        {{getcode}}
                    </div>
                    <div class="registMainRegItem_tip" ref="regCode_tip">
                        {{regCodeTip}}
                    </div>
                </div>
                <div class="registMainRegBtn" v-on:click='goRegist'>
                    注册
                </div>
            </div>
        </div>
        </div>
</div>
</template>

<script>
import globalData from '../../globalData'

export default {
    name: 'Regist',
    data () {
        return {
            getcode: '获取短信验证码',
            isActive:false,
            phone:'',
            password:'',
            msgcode:'',
            msgId:'',
            regCodeTip:'请输入正确有效的短信验证码'
        }
    },
    methods: {
        // 获取短息验证码
        getMesCode:function(){
            if((/^[1][3578][0-9]{9}$/).test(this.phone)){
                this.$refs.regPhone_tip.style.display = 'none'
                var num = 60
                var self = this
                self.isActive = true
                self.getcode = num + '秒后重新获取'
                var timer = setInterval(function(){
                    num--
                    self.getcode = num + '秒后重新获取'
                    if(num==0){
                        self.getcode = '获取短信验证码'
                        self.isActive = false
                        clearInterval(timer)
                    }
                },1000)
                self.$http.post(globalData.data.Ip+'/common/sms',
                    {userPhone:self.phone},{emulateJSON:true}).then((res) => {
                    if(res.data.code == 200) {
                        console.log(res);
                        self.msgId = res.data.data.msgId;
                        self.$Message.success('短信验证码发送成功，请查收！');
                    } else {
                        console.log(res);
                    }
                })
            }else{
                this.$refs.regPhone_tip.style.display = 'block'   
            }
        },
        goRegist:function(){
            if(this.phone==''){
                this.$refs.regPhone_tip.style.display = 'block'   
                return
            }
            if(this.password==''){
                this.$refs.regPassword_tip.style.display = 'block'   
                return
            }
            if(this.msgcode==''){
                this.$refs.regCode_tip.style.display = 'block'   
                return
            }
            if(this.msgId==''){
                this.$refs.regCode_tip.style.display = 'block'   
                return
            }
            if ((/^[1][3578][0-9]{9}$/).test(this.phone)&&(/^[a-zA-Z0-9]{6,18}$/).test(this.password)&&(/^[0-9]{6}$/).test(this.msgcode)) {
                // console.log(this.phone)
                // console.log(this.password)
                // console.log(this.msgcode)
                // console.log(this.msgId)
                var self = this;
                self.$refs.regPhone_tip.style.display = 'none'   
                self.$refs.regPassword_tip.style.display = 'none'   
                self.$refs.regCode_tip.style.display = 'none'   
                self.$http.post(globalData.data.Ip+'/user/register',
                {
                    userPhone:self.phone,
                    userPassword:self.password,
                    smsCode:self.msgcode,
                    smsId:self.msgId
                },{emulateJSON:true}).then((res) => {     
                    console.log(res.data);         
                    if(res.data.code == 200) {
                        self.$Message.success('注册成功，请登录！')
                        self.$router.push('/login');
                    }else{
                        self.$refs.regCode_tip.style.display = 'block' 
                        self.regCodeTip = res.data.msg ;
                        return;
                    } 
                })
            }
        },
        // 失去焦点
        onblurPhone:function(ele){
            var self = this;
            if((/^[1][3578][0-9]{9}$/).test(ele)){
                self.$refs.regPhone_tip.style.display = 'none'  
            }else{
                self.$refs.regPhone_tip.style.display = 'block'  
            }
        },
        onblurPassword:function(ele){
            var self = this;
            if((/^[a-zA-Z0-9]{6,18}$/).test(ele)){
                self.$refs.regPassword_tip.style.display = 'none'  
            }else{
                self.$refs.regPassword_tip.style.display = 'block'  
            }
        },
        onblurCode:function(ele){
            var self = this;
            if((/^[0-9]{6}$/).test(ele)){
                self.$refs.regCode_tip.style.display = 'none'  
            }else{
                self.$refs.regCode_tip.style.display = 'block'  
            }
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .regist {
        width: 100%;
        min-height: 750px;
        background: url(../../../assets/loginbg.png) no-repeat center;
        background-size: 100% 100%;
        padding: 36px 0 50px;
    }

    .regist .registContent {
        width: 1280px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
    }

    .regist .registContent .registMain {
        width: 400px;
        height: 360px;
        float: right;
        background: white;
    }

    .regist .registContent .registMain .registMainTop {
        width: 100%;
        height: 58px;
        line-height: 25px;
        padding: 16px 0;
        border-bottom: 1px solid #e1e1e1;
    }

    .regist .registContent .registMain .registMainTop a {
        display: block;
        width: 199px;
        height: 25px;
        font-size: 18px;
        text-align: center;
        float: left;
    }

    .regist .registContent .registMain .registMainTop .registMainTopRegist {
        width: 200px;
        border-left: 1px solid #e1e1e1;
    }

    .regist .registContent .registMain .registMainTop .registMainTopActive {
        color: #f71327;
    }

    .regist .registContent .registMain .registMainReg {
        width: 428px;
        height: auto;
        padding: 16px 48px 16px 20px;
    }

    .regist .registContent .registMain .registMainReg .registMainRegItem {
        width: 100%;
        height: 68px;
        overflow: hidden;
    }

    .regist .registContent .registMain .registMainReg .registMainRegItem .registMainRegItem_label {
        width: 56px;
        height: 46px;
        line-height: 46px;
        float: left;
    }

    .regist .registContent .registMain .registMainReg .registMainRegItem .registMainRegItem_text {
        width: 268px;
        height: 46px;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
        float: left;
    }

    .regist .registContent .registMain .registMainReg .registMainRegItem .registMainRegItem_text input {
        display: block;
        width: 266px;
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
        text-indent: 20px;
    }

    .regist .registContent .registMain .registMainReg .registMainRegItem .registMainRegItem_tip {
        width: 100%;
        height: 20px;
        line-height: 20px;
        float: left;
        color: red;
        font-size: 12px;
        padding-left: 56px;
        display: none;
    }

    .regist .registContent .registMain .registMainReg .registMainRegCode .registMainRegItem_text {
        width: 156px;
        margin-right: 10px;
    }

    .regist .registContent .registMain .registMainReg .registMainRegCode .registMainRegItem_text input {
        width: 154px;
    }

    .regist .registContent .registMain .registMainReg .registMainRegCode .registMainRegItem_getcode {
        height: 46px;
        line-height: 46px;
        float: left;
        color: #f71327;
        cursor: pointer;
    }

    .regist .registContent .registMain .registMainReg .registMainRegCode .registMainRegItem_getcodeActive{
        color: #878787;
        pointer-events: none;
    }

    .regist .registContent .registMain .registMainReg .registMainRegBtn {
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
</style>
