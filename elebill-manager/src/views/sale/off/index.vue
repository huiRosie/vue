<template>
    <div class="off">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>出票中心</router-link> > 
            <span>已完成的汇票</span>
        </div>
        <ul class="offMain">
            <li class="offItem offTitle">
                <div class="offItemNav offItemName">出票人全称</div>
                <div class="offItemNav offItemMoney">票面金额</div>
                <div class="offItemNav offItemDeadline">剩余天数（天）</div>
                <div class="offItemNav offItemUser">报价用户</div>
                <div class="offItemNav offItemIntere">报价利率</div>
                <div class="offItemNav offItemTel">联系电话</div>
                <div class="offItemNav offItemOperate">操作</div>
            </li>
            <li class="offItem">
                <div class="offItemNav offItemName">电票</div>
                <div class="offItemNav offItemMoney">卖断</div>
                <div class="offItemNav offItemDeadline">中国建设银行</div>
                <div class="offItemNav offItemUser">1000万</div>
                <div class="offItemNav offItemIntere">5%</div>
                <div class="offItemNav offItemTel">15688888888</div>
                <div class="offItemNav offItemOperate">
                    <router-link class="offItem_scan" to='/offDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'off',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .off {
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

    .off .offMain {
        width: 100%;
        height: 100%;
    }

    .off .offMain .offItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .off .offMain .offItem .offItemNav {
        width: 140px;
        text-align: center;
        float: left;
    }

    .off .offMain .offItem .offItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .off .offMain .offItem .offItemNav .offItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .off .offMain .offTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
    }
</style>
