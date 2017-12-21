<template>
    <div class="fail">
        <div class="topNav">
            <router-link class="topNavLink" to='/'>收票中心</router-link> > 
            <span>预选的报价</span>
        </div>
        <ul class="failMain">
            <li class="failItem failTitle">
                <div class="failItemNav failItemName">出票人全称</div>
                <div class="failItemNav failItemArea">交易区域</div>
                <div class="failItemNav failItemMoney">票面金额</div>
                <div class="failItemNav failItemDeadline">到期时间</div>
                <div class="failItemNav failItemUp">上传日期</div>
                <div class="failItemNav failItemOperate">操作</div>
            </li>
            <li class="failItem">
                <div class="failItemNav failItemName">电票</div>
                <div class="failItemNav failItemArea">武汉</div>
                <div class="failItemNav failItemMoney">卖断</div>
                <div class="failItemNav failItemDeadline">1000万</div>
                <div class="failItemNav failItemUp">5%</div>
                <div class="failItemNav failItemOperate">
                    <router-link class="failItem_scan" to='/failDet'>查看详情</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'fail',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fail {
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

    .fail .failMain {
        width: 100%;
        height: 100%;
    }

    .fail .failMain .failItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .fail .failMain .failItem .failItemNav {
        width: 140px;
        text-align: center;
        float: left;
    }

    .fail .failMain .failItem .failItemOperate a:hover {
        color: #ff8000;
        border: 1px solid #ff8000;
    }

    .fail .failMain .failItem .failItemNav .failItem_scan {
        display: block;
        width: 82px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 3px;
        margin: 0 auto;
    }

    .fail .failMain .failTitle {
        font-size: 16px;
        background: #fdeaea;
        font-weight: 500;
    }
</style>
