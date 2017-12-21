<template>
    <div class="check">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>收票中心</router-link> > 
            <span>预选的报价</span>
        </div>
        <ul class="checkMain">
            <li class="checkItem checkTitle">
                <div class="checkItemNav checkItemName">出票人全称</div>
                <div class="checkItemNav checkItemArea">交易区域</div>
                <div class="checkItemNav checkItemMoney">票面金额</div>
                <div class="checkItemNav checkItemDeadline">到期时间</div>
                <div class="checkItemNav checkItemUp">上传日期</div>
                <div class="checkItemNav checkItemOperate">操作</div>
            </li>
            <li class="checkItem">
                <div class="checkItemNav checkItemName">电票</div>
                <div class="checkItemNav checkItemArea">武汉</div>
                <div class="checkItemNav checkItemMoney">卖断</div>
                <div class="checkItemNav checkItemDeadline">1000万</div>
                <div class="checkItemNav checkItemUp">5%</div>
                <div class="checkItemNav checkItemOperate">
                    <router-link class="checkItem_check" to='/checkDet'>立即审核</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'check',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .check {
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

    .check .checkMain {
        width: 100%;
        height: 100%;
    }

    .check .checkMain .checkItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .check .checkMain .checkItem .checkItemNav {
        width: 140px;
        text-align: center;
        float: left;
    }

    .check .checkMain .checkItem .checkItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .check .checkMain .checkItem .checkItemNav .checkItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .check .checkMain .checkTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
    }
</style>
