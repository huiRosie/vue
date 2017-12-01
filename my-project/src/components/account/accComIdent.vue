<template>
    <div class="accComIdent">
        <h2 class="accComIdentTitle">
            <router-link to="/acc/accInfo" >账户信息</router-link> >
            <span >企业认证</span>
        </h2>
        <div class="accComIdentMain">
            <div class="accComIdentRight">
                <div class="accComIdentRightTitle">
                    企业认证状态 <span> (未认证)</span>
                </div>
                <div class="accComIdentRightName">
                    <div class="accComIdentRightName_label">
                        企业名称：
                    </div>
                    <div class="accComIdentRightName_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                </div>
                <div class="accComIdentRightLicense">
                    <div class="accComIdentRightLicense_label">
                        营业执照：
                    </div>
                    <div class="accComIdentRightLicense_img">
                        <input type="file" name="" id="" value="" />
                    </div>
                </div>
                <div class="accComIdentRightBtn">
                    <a class="accComIdentRightBtnSubmit">提交申请</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccComIdent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accComIdent {
        width: 982px;
        height: auto;
    }

    .accComIdent .accComIdentTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accComIdent .accComIdentMain {
        width: 100%;
        height: auto;
        overflow: hidden;
        background: white;
    }

    .accComIdent .accComIdentMain .accComIdentRight {
        width: 431px;
        height: auto;
        padding: 50px 0;
        margin: 0 auto;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightTitle {
        margin-bottom: 17px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightTitle span {
        color: #878787;
        font-size: 12px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName .accComIdentRightName_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName .accComIdentRightName_text {
        float: left;
        width: 312px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightName .accComIdentRightName_text input {
        width: 310px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense .accComIdentRightLicense_label {
        float: left;
        width: 84px;
        height: 46px;
        line-height: 46px;
        margin-right: 10px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense .accComIdentRightLicense_img {
        float: left;
        width: 310px;
        height: auto;
        line-height: 44px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightLicense .accComIdentRightLicense_img input {
        width: 310px;
        height: 50px;
        display: block;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightBtn {
        width: 240px;
        height: 58px;
        margin: 0 auto 54px;
    }

    .accComIdent .accComIdentMain .accComIdentRight .accComIdentRightBtn .accComIdentRightBtnSubmit {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        border-radius: 4px;
    }
</style>
