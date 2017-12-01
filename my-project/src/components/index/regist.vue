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
                        <input type="text" name="" id="" value="" />
                    </div>
                    <div class="registMainRegItem_tip">
                        账号输入错误
                    </div>
                </div>
                <div class="registMainRegItem">
                    <div class="registMainRegItem_label">
                        密码：
                    </div>
                    <div class="registMainRegItem_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                    <div class="registMainRegItem_tip">
                        密码输入错误
                    </div>
                </div>
                <div class="registMainRegItem registMainRegCode">
                    <div class="registMainRegItem_label">
                        验证码：
                    </div>
                    <div class="registMainRegItem_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                    <div class="registMainRegItem_getcode">
                        获取短信验证码
                    </div>
                    <div class="registMainRegItem_tip">
                        密码输入错误
                    </div>
                </div>
                <div class="registMainRegBtn">
                    注册
                </div>
            </div>
        </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'Regist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .regist {
        width: 100%;
        min-height: 728px;
        background: url(../../assets/loginbg.png) no-repeat center;
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
        color: #ff8000;
    }

    .regist .registContent .registMain .registMainReg {
        width: 428px;
        height: auto;
        padding: 16px 48px 16px 20px;
    }

    .regist .registContent .registMain .registMainReg .registMainRegItem {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 20px;
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
        color: #fd6e08;
        cursor: pointer;
    }

    .regist .registContent .registMain .registMainReg .registMainRegBtn {
        width: 268px;
        height: 46px;
        color: white;
        font-size: 16px;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        background-color: #ff8300;
        margin-left: 54px;
    }
</style>
