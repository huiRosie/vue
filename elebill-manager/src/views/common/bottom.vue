<template>
    <!--公共底部-->
    <div class="bottom">
        <div class="bottomBox">
            <div class="bottomLeft">
                <ul class="bottomLeftNav">
                    <li class="bottomLeftNavItem">
                        <router-link class="bottomNavItem_link" to="">联系我们</router-link>
                    </li>
                    <li class="bottomLeftNavItem">
                        <router-link class="bottomNavItem_link" to="">帮助中心</router-link>
                    </li>
                    <li class="bottomLeftNavItem">
                        <router-link class="bottomNavItem_link" to="">汇票助手</router-link>
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

<style rel="stylesheet/less" lang="less" scoped>
  .wrap .bottom {
    min-width: 1280px;
    height: 128px;
    color: white;
    background: #323232;
    .bottomBox {
      width: 1280px;
      height: 128px;
      margin: 0 auto;
      padding-top: 40px;
      overflow: hidden;
      .bottomLeft {
        float: left;
        .bottomLeftNav {
          width: auto;
          height: 18px;
          line-height: 18px;
          overflow: hidden;
          .bottomLeftNavItem {
            float: left;
            padding: 0 5px;
            height: 14px;
            line-height: 14px;
            margin: 2px 0;
            border-left: 1px solid white;
            a {
              color: white;
              font-size: 14px;
            }
          }
          .bottomLeftNavItem:first-child {
            border: 0;
            padding-left: 0;
          }
        }
        .bottomLeftCopyright {
          font-size: 14px;
          height: 36px;
          line-height: 36px;
        }
      }
      .bottomRight {
        float: right;
        .bottomRightTel {
          font-size: 14px;
          height: 14px;
          line-height: 14px;
        }
        .bottomRightNum {
          color: #f71327;
          font-size: 20px;
          height: 36px;
          line-height: 36px;
        }
      }
    }
  }
</style>
