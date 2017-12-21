<template>
    <!--公共底部-->
    <div class="bottom">
        <div class="bottomBox">
            <div class="bottomLeft">
                <ul class="bottomLeftNav">
                    <li class="bottomLeftNavItem">
                        <router-link class="bottomNavItem_link" to="/us">联系我们</router-link>
                    </li>
                    <li class="bottomLeftNavItem">
                        <router-link class="bottomNavItem_link" to="/helper">帮助中心</router-link>
                    </li>
                    <li class="bottomLeftNavItem">
                        <router-link class="bottomNavItem_link" to="/aide">汇票助手</router-link>
                    </li>
                </ul>
                <p class="bottomLeftCopyright">Copyright © 2002-2011. 武汉华四投资顾问有限公司 版权所有 Power by Mereca 鄂ICP备14007080号-1</p>
            </div>
            <div class="bottomRight">
                <p class="bottomRightTel">客服热线（工作日9:00~17:30）</p>
                <p class="bottomRightNum">400-9929-272</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bottom',
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
  .wrap .bottom {
    min-width: 1280px;
    height: 128px;
    color: white;
    background: #323232;
  }

  .wrap .bottom .bottomBox {
    width: 1280px;
    margin: 0 auto;
    padding-top: 40px;
  }

  .wrap .bottom .bottomBox .bottomLeft {
    float: left;
  }

  .wrap .bottom .bottomBox .bottomLeft .bottomLeftNav {
    width: auto;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
  }

  .wrap .bottom .bottomBox .bottomLeft .bottomLeftNav .bottomLeftNavItem {
    float: left;
    padding: 0 5px;
    height: 14px;
    line-height: 14px;
    margin: 2px 0;
    border-left: 1px solid white;
  }

  .wrap .bottom .bottomBox .bottomLeft .bottomLeftNav .bottomLeftNavItem a {
    color: white;
    font-size: 14px;
  }

  .wrap .bottom .bottomBox .bottomLeft .bottomLeftNav .bottomLeftNavItem:first-child {
    border: 0;
    padding-left: 0;
  }

  .wrap .bottom .bottomBox .bottomLeft .bottomLeftCopyright {
    font-size: 14px;
    height: 36px;
    line-height: 36px;
  }

  .wrap .bottom .bottomBox .bottomRight {
    float: right;
  }

  .wrap .bottom .bottomBox .bottomRight .bottomRightTel {
    font-size: 14px;
    height: 14px;
    line-height: 14px;
  }

  .wrap .bottom .bottomBox .bottomRight .bottomRightNum {
    color: #f71327;
    font-size: 20px;
    height: 36px;
    line-height: 36px;
  }
</style>
