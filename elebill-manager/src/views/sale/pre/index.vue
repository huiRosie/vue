<template>
    <div class="pre">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>出票中心</router-link> > 
            <span>预选的报价</span>
        </div>
        <ul class="preMain">
            <li class="preItem preTitle">
                <div class="preItemNav preItemName">出票人全称</div>
                <div class="preItemNav preItemMoney">票面金额</div>
                <div class="preItemNav preItemDeadline">剩余天数（天）</div>
                <div class="preItemNav preItemUser">报价用户</div>
                <div class="preItemNav preItemIntere">报价利率</div>
                <div class="preItemNav preItemTel">联系电话</div>
                <div class="preItemNav preItemOperate">操作</div>
            </li>
            <li class="preItem">
                <div class="preItemNav preItemName">电票</div>
                <div class="preItemNav preItemMoney">卖断</div>
                <div class="preItemNav preItemDeadline">中国建设银行</div>
                <div class="preItemNav preItemUser">1000万</div>
                <div class="preItemNav preItemIntere">5%</div>
                <div class="preItemNav preItemTel">15688888888</div>
                <div class="preItemNav preItemOperate">
                    <router-link class="preItem_scan" to='/preDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'pre',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pre {
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

    .pre .preMain {
        width: 100%;
        height: 100%;
    }

    .pre .preMain .preItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .pre .preMain .preItem .preItemNav {
        width: 140px;
        text-align: center;
        float: left;
    }

    .pre .preMain .preItem .preItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .pre .preMain .preItem .preItemNav .preItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .pre .preMain .preTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
    }
</style>
