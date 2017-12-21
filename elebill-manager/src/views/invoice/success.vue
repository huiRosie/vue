<template>
    <div class="success">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>收票中心</router-link> > 
            <span>预选的报价</span>
        </div>
        <ul class="successMain">
            <li class="successItem successTitle">
                <div class="successItemNav successItemName">出票人全称</div>
                <div class="successItemNav successItemArea">交易区域</div>
                <div class="successItemNav successItemMoney">票面金额</div>
                <div class="successItemNav successItemDeadline">到期时间</div>
                <div class="successItemNav successItemUp">上传日期</div>
                <div class="successItemNav successItemOperate">操作</div>
            </li>
            <li class="successItem">
                <div class="successItemNav successItemName">电票</div>
                <div class="successItemNav successItemArea">武汉</div>
                <div class="successItemNav successItemMoney">卖断</div>
                <div class="successItemNav successItemDeadline">1000万</div>
                <div class="successItemNav successItemUp">5%</div>
                <div class="successItemNav successItemOperate">
                    <router-link class="successItem_scan" to='/successDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'success',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .success {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
    }

    .success .successMain {
        width: 100%;
        height: 100%;
    }

    .success .successMain .successItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .success .successMain .successItem .successItemNav {
        width: 140px;
        text-align: center;
        float: left;
    }

    .success .successMain .successItem .successItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .success .successMain .successItem .successItemNav .successItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .success .successMain .successTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
    }
</style>
