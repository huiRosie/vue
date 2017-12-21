<template>
    <!-- 侧边栏导航 -->
    <div class="indexLeft">
        <div class="indexSubBox">
            <div class="indexSub" onclick="disabled">
                <h2 class="indexSubTitle">出票中心</h2>
            </div>
            <router-link class="indexSubNav" to="/sale/index">· 出售中的汇票</router-link>
            <router-link class="indexSubNav" to="/pre">· 我预选的报价</router-link>
            <router-link class="indexSubNav" to="/off">· 已完成的汇票</router-link>
        </div>
        <div class="indexSubBox">
            <div class="indexSub">
                <h2 class="indexSubTitle">收票中心</h2>
            </div>
            <router-link class="indexSubNav" to="/check">· 待审核</router-link>
            <router-link class="indexSubNav" to="/hand">· 待处理</router-link>	
            <router-link class="indexSubNav" to="/suc">· 交易成功</router-link>	
            <router-link class="indexSubNav" to="/fail">· 交易失败</router-link>	
        </div>
        <div class="indexSubBox">
            <div class="indexSub indexSubActive">
                <h2 class="indexSubTitle">认证审核</h2>
            </div>
            <router-link class="indexSubNav" to="/acc/accInfo">· 用户认证信息</router-link>
            <router-link class="indexSubNav" to="/acc/accMes">· 企业认证信息</router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data() { 
      return {
        oheight:' ' 
      }
    },
    methods: { 
　　   
    }
  }
</script>

<style>
    .indexLeft {
        width: 280px;
        height: 696px;
        float: left;
        margin-right: 18px;
        background: white;
    }

    .indexLeft .indexSub {
        width: 280px;
        height: 58px;
        padding: 18px 20px;
        background: #fdeaea;
    }

    .indexLeft .indexSub .indexSubTitle {
        width: 240px;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #f71327;
    }

    .indexLeft .indexSub:hover {
        color: #fff;
        background: #f71327;
    }

    .indexLeft .indexSubActive {
        color: #fff;
        background: #f71327;
    }

    .indexLeft .indexSubNav {
        width: 280px;
        height: 58px;
        display: block;
        padding: 18px 40px;
    }

    .indexLeft .router-link-active {
        color: #f71327;
    }

</style>
