<template>
    <div class="helpIn">
        <div class="helpInContent">
            <h2 class="helpInTitle">
                <router-link  to="/hel">帮助中心</router-link>  >
                <span>买家操作流程</span>
            </h2>
            <div class="helpInMain">
                <h3 class="helpInMainTitle">买家操作流程</h3>
                <div class="helpInMainTip">
                    登录成功后点击导航栏中的【我要收票】
                </div>
                <img src="../../assets/helpin1.png"/>
                <div class="helpInMainTip">
                    然后根据页面上方的筛选条件，筛选符合自身条件的汇票。
                </div>
                <img src="../../assets/helpin2.png"/>
                <div class="helpInMainTip">
                    根据筛选出来的汇票，选择想要的汇票点击【参与竞价】
                </div>
                <img src="../../assets/helpin3.png"/>
                <div class="helpInMainTip">
                    对照汇票详情，确认无误后点击【我要竞价】
                </div>
                <img src="../../assets/helpin4.png"/>
                <div class="helpInMainTip">
                    填写报价信息 
                </div>
                <img src="../../assets/helpin5.png"/>
                <div class="helpInMainTip">
                    个人中心查看竞价状态 
                </div>
                <img src="../../assets/helpin6.png"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelpIn',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .helpIn {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }

    .helpIn .helpInContent {
        width: 1280px;
        height: auto;
        margin: 0 auto;
    }

    .helpIn .helpInContent .helpInTitle {
        width: 1280px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .helpIn .helpInContent .helpInMain {
        width: 1200px;
        height: auto;
        padding: 24px 40px;
        background: white;
    }

    .helpIn .helpInContent .helpInMain .helpInMainTitle {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #434343;
        margin-bottom: 10px;
    }

    .helpIn .helpInContent .helpInMain .helpInMainTip {
        width: 1067px;
        height: auto;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .helpIn .helpInContent .helpInMain img {
        display: block;
        margin-bottom: 24px;
    }
</style>
