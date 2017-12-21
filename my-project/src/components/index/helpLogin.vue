<template>
    <div class="helpLogin">
        <div class="helpLoginContent">
            <h2 class="helpLoginTitle">
                <router-link class="helperItem"  to="/hel">帮助中心</router-link>  >
                <span>一笔银票网注册/登录</span>
            </h2>
            <div class="helpLoginMain">
                <h3 class="helpLoginMainTitle">注册</h3>
                <div class="helpLoginMainTip">
                    您可以按照以下步骤完成一笔银票网的【注册】
                </div>
                <div class="helpLoginMainTip">
                    一、进入一笔银票官网：www.elebill.com，点击右上角【注册】
                </div>
                <div class="helpLoginMainTip">
                    二、进入注册界面，在新用户注册栏输入您的手机号，并设置您的登录密码（6-18位），确认手机号和密码设置无误后点击【发送验证码】，请填写您手机号收到的验证码，
                    点击【注册并登录】即可完成注册。
                </div>
                <img src="../../assets/help-zhuce.png"/>
                <h3 class="helpLoginMainTitle">登录</h3>
                <div class="helpLoginMainTip">
                    一、进入一笔银票官网：www.elebill.com，点击右上角【登录】
                </div>
                <div class="helpLoginMainTip">
                    二、输入手机号、密码，点击登录。
                </div>
                <img src="../../assets/help-denglu.png"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelpLogin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .helpLogin {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }

    .helpLogin .helpLoginContent {
        width: 1280px;
        height: auto;
        margin: 0 auto;
    }

    .helpLogin .helpLoginContent .helpLoginTitle {
        width: 1280px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .helpLogin .helpLoginContent .helpLoginMain {
        width: 1200px;
        height: auto;
        padding: 24px 40px;
        background: white;
    }

    .helpLogin .helpLoginContent .helpLoginMain .helpLoginMainTitle {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #434343;
        margin-bottom: 10px;
    }

    .helpLogin .helpLoginContent .helpLoginMain .helpLoginMainTip {
        width: 1067px;
        height: auto;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .helpLogin .helpLoginContent .helpLoginMain img {
        display: block;
        width: 490px;
        height: 284px;
        margin-bottom: 24px;
    }
</style>
