<template>
    <!-- 公共头部 -->
    <div class="top">
        <div class="topB">
            <div class="topBBox">
                <h1 class="topBLogo"><img class="logoImg" src="../../assets/images/elebill-com-logo.png"/></h1>
                <div class="topSear">
                  <div class="topSearBox">
                    <input type="text" placeholder="请输入汇票信息">
                    <Icon class="topSearBtn" type="search"></Icon>
                  </div>
                  <router-link class="topSearOut topSearItem" to="/">出票中心</router-link>
                  <router-link class="topSearIn topSearItem" to="/index">收票中心</router-link>
                </div>
                <div class="topBNav">
                    <router-link class="topBNav_mes topBNav_item" to="/index">
                      <Icon class="topBNavMes" type="chatbubble-working"></Icon>
                    </router-link>
                    <router-link class="topBNav_name topBNav_item" to="/out">黑不溜秋</router-link>
                    <router-link class="topBNav_pass topBNav_item" to="/in">修改登录密码</router-link>
                    <router-link class="topBNav_loginout topBNav_item" to="/login">退出登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'top',
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
    .top {
        width: 100%;
        height:76px;
        background: #fff;
    }

    .top .topB {
        width: 100%;
        height: 76px;
    }

    .top .topB .topBBox {
        width: 1280px;
        margin: 0 auto;
    }

    .top .topB .topBBox .topBLogo {
        float: left;
        margin-right: 76px;
    }

    .top .topB .topBBox .topBLogo .logoImg {
        display: block;
        width: 284px;
        height: 43px;
        margin: 16px 0;
    }
    
    .top .topB .topBBox .topSear {
        float: left;
        width: 580px;
        height: 46px;
        margin: 15px 0;
        overflow: hidden;
    }

    .top .topB .topBBox .topSear .topSearBox{
        float: left;
        width: 440px;
        height: 46px;
        margin-right: 12px;
        border-radius: 100px;
        border: 1px solid #f71327;
    }

    .top .topB .topBBox .topSear .topSearBox input{
        float: left;
        width: 392px;
        height: 44px;
        text-indent: 20px;
        border-radius: 100px;
    }

    .top .topB .topBBox .topSear .topSearBox .topSearBtn{
        float: right;
        width: 30px;
        height: 30px;
        font-size: 26px;
        font-weight: 100;
        color: #f71327;
        margin: 8px;
        cursor: pointer;
    }

    .top .topB .topBBox .topSear .topSearItem{
        display: block;
        float: left;
        width: 60px;
        height: 46px;
        line-height: 46px;
        font-size: 12px;
        text-align: center;
    }

    .top .topB .topBBox .topBNav {
        float: right;
    }

    .top .topB .topBBox .topBNav .topBNav_item {
        color: #555;
        display: block;
        float: left;
        width: auto;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        padding: 0 5px;
        margin: 31px 0 31px;
        border-right: 1px solid #999;
    }

    .top .topB .topBBox .topBNav .topBNav_item:last-child{
        border: 0;
    }

    .top .topB .topBBox .topBNav .topBNav_mes {
        color: #f71327;
        display: block;
        float: left;
        width: 34;
        height: 34px;
        line-height: 34px;
        font-size: 28px;
        margin: 21px 5px 21px;
        border: 0;
    }

    .top .topB .topBBox .topBNav .topBNav_item:hover {
        color: #f71327;
    }

    .top .topB .topBBox .topBNav .router-link-active {
        color: #f71327;
    }
</style>
