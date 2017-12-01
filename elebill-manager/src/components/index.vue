<template>
    <div class="index">
        <div class="indexMain">
            <div class="indexLeft">
                <div class="indexSubBox">
                    <div class="indexSub" onclick="disabled">
                        <h2 class="indexSubTitle">我的发布</h2>
                    </div>
                    <router-link class="indexSubNav" to="/acc/accAnn">· 交易中</router-link>
                    <router-link class="indexSubNav" to="/acc/accAnn">· 交易成功</router-link>
                    <router-link class="indexSubNav" to="/acc/accAnn">· 交易失败</router-link>
                </div>
                <div class="indexSubBox">
                    <div class="indexSub">
                        <h2 class="indexSubTitle">我是买家</h2>
                    </div>
                    <router-link class="indexSubNav" to="/acc/accOffer">· 我报价的汇票</router-link>
                    <router-link class="indexSubNav" to="/acc/accBuy">· 我买到的汇票</router-link>	
                </div>
                <div class="indexSubBox">
                    <div class="indexSub indexSubActive">
                        <h2 class="indexSubTitle">账户设置</h2>
                    </div>
                    <router-link class="indexSubNav" to="/acc/accInfo">· 账户信息</router-link>
                    <router-link class="indexSubNav" to="/acc/accMes">· 消息中心</router-link>
                    <router-link class="indexSubNav" to="/acc/changePass">· 修改密码</router-link>
                </div>
            </div>
            <div class="indexRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Index1',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .index .indexMain {
        width: 1280px;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
    }

    .index .indexMain .indexLeft {
        width: 280px;
        height: 638px;
        float: left;
        margin-right: 18px;
        background: white;
    }

    .index .indexMain .indexLeft .indexSub {
        width: 280px;
        height: 58px;
        padding: 18px 20px;
        background: #ffefdd;
    }

    .index .indexMain .indexLeft .indexSub .indexSubTitle {
        width: 240px;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #ff8000;
    }

    .index .indexMain .indexLeft .indexSub:hover {
        color: #fff;
        background: #ff8000;
    }

    .index .indexMain .indexLeft .indexSubActive {
        color: #fff;
        background: #ff8000;
    }

    .index .indexMain .indexLeft .indexSubNav {
        width: 280px;
        height: 58px;
        display: block;
        padding: 18px 40px;
    }

    .index .indexMain .indexLeft .router-link-active {
        color: #ff8000;
    }

    .index .indexMain .indexRight {
        width: 982px;
        min-height: 357px;
        float: left;
    }
</style>
