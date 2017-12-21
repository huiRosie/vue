<template>
    <div class="helpOut">
        <div class="helpOutContent">
            <h2 class="helpOutTitle">
                <router-link  to="/hel">帮助中心</router-link>  >
                <span>卖家操作流程</span>
            </h2>
            <div class="helpOutMain">
                <h3 class="helpOutMainTitle">卖家操作流程</h3>
                <div class="helpOutMainTip">
                    登录成功后点击导航栏中的【我要贴现】
                </div>
                <img src="../../assets/helpout1.png"/>
                <div class="helpOutMainTip">
                    填写票据信息，上传票据
                </div>
                <img src="../../assets/helpout2.png"/>
                <div class="helpOutMainTip">
                    上传票据后，我们的工作人员会尽快与您取得联系，协商交易详情。达成协议后，线下完成交易。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelpOut',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .helpOut {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }

    .helpOut .helpOutContent {
        width: 1280px;
        height: auto;
        margin: 0 auto;
    }

    .helpOut .helpOutContent .helpOutTitle {
        width: 1280px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .helpOut .helpOutContent .helpOutMain {
        width: 1200px;
        height: auto;
        padding: 24px 40px;
        background: white;
    }

    .helpOut .helpOutContent .helpOutMain .helpOutMainTitle {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #434343;
        margin-bottom: 10px;
    }

    .helpOut .helpOutContent .helpOutMain .helpOutMainTip {
        width: 1067px;
        height: auto;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .helpOut .helpOutContent .helpOutMain img {
        display: block;
        margin-bottom: 24px;
    }
</style>
