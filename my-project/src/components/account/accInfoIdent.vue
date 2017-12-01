<template>
    <div class="accInfoIdent">
        <h2 class="accInfoIdentTitle">
            <router-link to="/acc/accInfo" >账户信息</router-link> >
            <span >个人认证</span>
        </h2>
        <div class="accInfoIdentMain">
            <div class="accInfoIdentLeft">
                <div class="accInfoIdentLeftTitle">
                    个人认证状态 <span>(未认证)</span>
                </div>
                <div class="accInfoIdentLeftName">
                    <div class="accInfoIdentLeftName_label">
                        真实姓名：
                    </div>
                    <div class="accInfoIdentLeftName_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                </div>
                <div class="accInfoIdentLeftIdcard">
                    <div class="accInfoIdentLeftIdcard_label">
                        身份证号：
                    </div>
                    <div class="accInfoIdentLeftIdcard_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                </div>
                <div class="accInfoIdentLeftIdfont">
                    <div class="accInfoIdentLeftIdfont_label">
                        身份证正面：
                    </div>
                    <div class="accInfoIdentLeftIdfont_img">
                        <input type="file" name="" id="" value="" />
                    </div>
                </div>
                <div class="accInfoIdentLeftIdback">
                    <div class="accInfoIdentLeftIdback_label">
                        身份证反面：
                    </div>
                    <div class="accInfoIdentLeftIdback_img">
                        <input type="file" name="" id="" value="" />
                    </div>
                </div>
                <div class="accInfoIdentLeftBtn">
                    <a class="accInfoIdentLeftBtnSubmit">提交申请</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccInfoIdent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accInfoIdent {
        width: 982px;
        height: auto;
    }

    .accInfoIdent .accInfoIdentTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accInfoIdent .accInfoIdentMain {
        width: 100%;
        height: auto;
        overflow: hidden;
        background: white;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft {
        width: 454px;
        height: auto;
        padding: 50px 0;
        margin: 0 auto;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftTitle {
        margin-bottom: 17px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftTitle span {
        color: #878787;
        font-size: 12px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName .accInfoIdentLeftName_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName .accInfoIdentLeftName_text {
        float: left;
        width: 312px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftName .accInfoIdentLeftName_text input {
        width: 310px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard .accInfoIdentLeftIdcard_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard .accInfoIdentLeftIdcard_text {
        float: left;
        width: 312px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdcard .accInfoIdentLeftIdcard_text input {
        width: 310px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont .accInfoIdentLeftIdfont_label {
        float: left;
        width: 84px;
        height: 46px;
        line-height: 46px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont .accInfoIdentLeftIdfont_img {
        float: left;
        width: 310px;
        height: auto;
        line-height: 44px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdfont .accInfoIdentLeftIdfont_img input {
        width: 310px;
        height: 23px;
        display: block;
        margin: 12px 0 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback .accInfoIdentLeftIdback_label {
        float: left;
        width: 84px;
        height: 46px;
        line-height: 46px;
        margin-right: 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback .accInfoIdentLeftIdback_img {
        float: left;
        width: 310px;
        height: auto;
        line-height: 44px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftIdback .accInfoIdentLeftIdback_img input {
        width: 310px;
        height: 23px;
        display: block;
        margin: 12px 0 10px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftBtn {
        width: 240px;
        height: 58px;
        margin: 0 auto 54px;
    }

    .accInfoIdent .accInfoIdentMain .accInfoIdentLeft .accInfoIdentLeftBtn .accInfoIdentLeftBtnSubmit {
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
