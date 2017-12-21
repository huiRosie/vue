<template>
    <div class="accountMesDet">
        <h2 class="accMesDetTitle">
            <router-link to="/acc/set/accMes" >消息中心</router-link> >
            <span >消息详情</span>
        </h2>
        <div class="accMesDetMain">
            <div class="accMesDetMainTitle">
                <div class="accMesDetItem_dot"></div>
                <div class="accMesDetItem_text">
                    您有新的交易请求！请尽快到“我收到的交易请求”中查看卖家的联系方式与卖家进行交易协商。
                </div>
                <div class="accMesDetItem_time">
                    2017.11.24 13:53:59
                </div>
            </div>
            <div class="accMesDetMainDet">
                买家嘿卟溜湫于2017年11月24日 17:30:24 请求与您交易，
                请尽快“我收到的交易请求”中查看买家联系方式与卖家进行交易协商。预祝您交易愉快！
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccountMesDet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountMesDet {
        width: 982px;
        height: auto;
    }

    .accountMesDet .accMesDetTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accountMesDet .accMesDetMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle {
        display: block;
        width: 982px;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle .accMesDetItem_dot {
        width: 6px;
        height: 6px;
        float: left;
        margin: 26px 5px 26px 0;
        border-radius: 3px;
        background: #f71327;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle .accMesDetItem_text {
        float: left;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle .accMesDetItem_time {
        float: right;
        color: #999;
        font-size: 12px;
    }

    .accountMesDet .accMesDetMain .accMesDetMainDet {
        padding: 0 39px 39px;
        line-height: 20px;
    }
</style>
