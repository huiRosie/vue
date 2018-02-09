<template>
    <div class="helpIdent">
        <div class="helpIdentContent">
            <h2 class="helpIdentTitle">
                <router-link  to="/hel">帮助中心</router-link>  >
                <span>认证流程</span>
            </h2>
            <div class="helpIdentMain">
                <h3 class="helpIdentMainTitle">认证流程</h3>
                <div class="helpIdentMainTip">
                    登录成功后点击右上角【个人中心】
                </div>
                <img src="../../../assets/renzheng1.png"/>
                <div class="helpIdentMainTip">
                    第一步：账号信息完善，联系电话、Email作为买家、卖家的第一联系方式一定要填写正确。
                </div>
                <img src="../../../assets/renzheng2.png"/>
                <div class="helpIdentMainTip">
                    第二步：上传认证信息，根据个人实际情况完成个人认证及企业认证（需要提供身份证正、反两面照和企业营业执照扫描件），提交认证信息后等待审核。
                </div>
                <img src="../../../assets/renzheng3.png"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelpIdent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .helpIdent {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }

    .helpIdent .helpIdentContent {
        width: 1280px;
        height: auto;
        margin: 0 auto;
    }

    .helpIdent .helpIdentContent .helpIdentTitle {
        width: 1280px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .helpIdent .helpIdentContent .helpIdentMain {
        width: 1200px;
        height: auto;
        padding: 24px 40px;
        background: white;
    }

    .helpIdent .helpIdentContent .helpIdentMain .helpIdentMainTitle {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #434343;
        margin-bottom: 10px;
    }

    .helpIdent .helpIdentContent .helpIdentMain .helpIdentMainTip {
        width: 1067px;
        height: auto;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .helpIdent .helpIdentContent .helpIdentMain img {
        display: block;
        margin-bottom: 24px;
    }
</style>
