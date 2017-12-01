<template>
    <div class="account">
        <div class="accountMain">
            <div class="accountLeft">
                <div class="accountSubBox">
                    <div class="accountSub" onclick="disabled">
                        <h2 class="accountSubTitle">我的发布</h2>
                    </div>
                    <router-link class="accountSubNav" to="/acc/accAnn">· 交易中</router-link>
                    <router-link class="accountSubNav" to="/acc/accAnn">· 交易成功</router-link>
                    <router-link class="accountSubNav" to="/acc/accAnn">· 交易失败</router-link>
                </div>
                <div class="accountSubBox">
                    <div class="accountSub">
                        <h2 class="accountSubTitle">我是买家</h2>
                    </div>
                    <router-link class="accountSubNav" to="/acc/accOffer">· 我报价的汇票</router-link>
                    <router-link class="accountSubNav" to="/acc/accBuy">· 我买到的汇票</router-link>	
                </div>
                <div class="accountSubBox">
                    <div class="accountSub accountSubActive">
                        <h2 class="accountSubTitle">账户设置</h2>
                    </div>
                    <router-link class="accountSubNav" to="/acc/accInfo">· 账户信息</router-link>
                    <router-link class="accountSubNav" to="/acc/accMes">· 消息中心</router-link>
                    <router-link class="accountSubNav" to="/acc/changePass">· 修改密码</router-link>
                </div>
            </div>
            <div class="accountRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .account {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .account .accountMain {
        width: 1280px;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
    }

    .account .accountMain .accountLeft {
        width: 280px;
        height: 638px;
        float: left;
        margin-right: 18px;
        background: white;
    }

    .account .accountMain .accountLeft .accountSub {
        width: 280px;
        height: 58px;
        padding: 18px 20px;
        background: #ffefdd;
    }

    .account .accountMain .accountLeft .accountSub .accountSubTitle {
        width: 240px;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #ff8000;
    }

    .account .accountMain .accountLeft .accountSub:hover {
        color: #fff;
        background: #ff8000;
    }

    .account .accountMain .accountLeft .accountSubActive {
        color: #fff;
        background: #ff8000;
    }

    .account .accountMain .accountLeft .accountSubNav {
        width: 280px;
        height: 58px;
        display: block;
        padding: 18px 40px;
    }

    .account .accountMain .accountLeft .router-link-active {
        color: #ff8000;
    }

    .account .accountMain .accountRight {
        width: 982px;
        min-height: 357px;
        float: left;
    }
</style>
