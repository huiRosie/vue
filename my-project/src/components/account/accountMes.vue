<template>
    <div class="accountMes">
        <h2 class="accountMesTitle">消息中心</h2>
        <div class="accMesMain">
            <div class="accMesList">
                <router-link class="accMesItem"  to="/acc/accMesDet">
                    <div class="accMesItem_dot"></div>
                    <div class="accMesItem_text">
                        您有新的交易请求！请尽快到“我收到的交易请求”中查看卖家的联系方式与卖家进行交易协商。
                    </div>
                    <div class="accMesItem_time">
                        2017.11.24 13:53:59
                    </div>
                </router-link>
                <router-link class="accMesItem accMesItemRead"  to="/acc/accMesDet">
                    <div class="accMesItem_dot"></div>
                    <div class="accMesItem_text">
                        您有新的交易请求！请尽快到“我收到的交易请求”中查看卖家的联系方式与卖家进行交易协商。
                    </div>
                    <div class="accMesItem_time">
                        2017.11.24 13:53:59
                    </div>
                </router-link> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccountMes',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountMes {
        width: 982px;
        height: auto;
    }

    .accountMes .accountMesTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accountMes .accMesMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .accountMes .accMesMain .accMesList {
        width: 100%;
        height: auto;
    }

    .accountMes .accMesMain .accMesList .accMesItem {
        display: block;
        width: 982px;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        background: #fffbf6;
    }

    .accountMes .accMesMain .accMesList .accMesItem .accMesItem_dot {
        width: 6px;
        height: 6px;
        float: left;
        margin: 26px 5px 26px 0;
        border-radius: 3px;
        background: #ff8000;
    }

    .accountMes .accMesMain .accMesList .accMesItem .accMesItem_text {
        float: left;
    }

    .accountMes .accMesMain .accMesList .accMesItem .accMesItem_time {
        float: right;
        color: #999;
        font-size: 12px;
    }

    .accountMes .accMesMain .accMesList .accMesItemRead {
        background: white;
    }

    .accountMes .accMesMain .accMesList .accMesItemRead .accMesItem_dot {
        background: #999;
    }
</style>
