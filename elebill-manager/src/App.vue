<template>
  <div id="app" class="wrap">
    <div class="top">
        <div class="topB">
            <div class="topBBox">
                <h1 class="topBLogo"><img class="logoImg" src="./assets/elebill-com-logo.png"/></h1>
                <div class="topSear">
                  <div class="topSearBox">
                    <input type="text" placeholder="请输入汇票信息">
                    <Icon class="topSearBtn" type="search"></Icon>
                  </div>
                  <router-link class="topSearOut topSearItem" to="/index">出票中心</router-link>
                  <router-link class="topSearIn topSearItem" to="/index">收票中心</router-link>
                </div>
                <div class="topBNav">
                    <router-link class="topBNav_mes topBNav_item" to="/index">
                      <Icon class="topBNavMes" type="chatbubble-working"></Icon>
                    </router-link>
                    <router-link class="topBNav_name topBNav_item" to="/out">黑不溜秋</router-link>
                    <router-link class="topBNav_pass topBNav_item" to="/in">修改登录密码</router-link>
                    <router-link class="topBNav_loginout topBNav_item" to="/us">退出登录</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- 路由出口 -->
			<!-- 路由匹配到的组件将渲染在这里 -->
			<div class="container">
				<div class="index">
          <div class="indexMain">
              <div class="indexLeft">
                  <div class="indexSubBox">
                      <div class="indexSub" onclick="disabled">
                          <h2 class="indexSubTitle">出票中心</h2>
                      </div>
                      <router-link class="indexSubNav" to="/acc/accAnn">· 出售中的汇票</router-link>
                      <router-link class="indexSubNav" to="/acc/accAnn">· 我预选的报价</router-link>
                      <router-link class="indexSubNav" to="/acc/accAnn">· 已完成的汇票</router-link>
                  </div>
                  <div class="indexSubBox">
                      <div class="indexSub">
                          <h2 class="indexSubTitle">收票中心</h2>
                      </div>
                      <router-link class="indexSubNav" to="/acc/accOffer">· 待审核</router-link>
                      <router-link class="indexSubNav" to="/acc/accBuy">· 待处理</router-link>	
                      <router-link class="indexSubNav" to="/acc/accBuy">· 交易成功</router-link>	
                      <router-link class="indexSubNav" to="/acc/accBuy">· 交易失败</router-link>	
                  </div>
                  <div class="indexSubBox">
                      <div class="indexSub indexSubActive">
                          <h2 class="indexSubTitle">认证审核</h2>
                      </div>
                      <router-link class="indexSubNav" to="/acc/accInfo">· 用户认证信息</router-link>
                      <router-link class="indexSubNav" to="/acc/accMes">· 企业认证信息</router-link>
                  </div>
              </div>
              <div class="indexRight">
                  <router-view></router-view>
              </div>
          </div>
      </div>
			</div>
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
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        oheight:' ' 
      }
    },
    methods: {
　　   
    }
  }
</script>

<style>
  .wrap {
    width: 100%;
    height: auto;
  }

  .wrap .top {
    width: 100%;
    height:76px;
    background: #fff;
  }

  .wrap .top .topB {
    width: 100%;
    height: 76px;
  }

  .wrap .top .topB .topBBox {
    width: 1280px;
    margin: 0 auto;
  }

  .wrap .top .topB .topBBox .topBLogo {
    float: left;
    margin-right: 168px;
  }

  .wrap .top .topB .topBBox .topBLogo .logoImg {
    display: block;
    width: 132px;
    height: 43px;
    margin: 16px 0;
  }
  
  .wrap .top .topB .topBBox .topSear {
    float: left;
    width: 580px;
    height: 46px;
    margin: 15px 0;
    overflow: hidden;
  }

  .wrap .top .topB .topBBox .topSear .topSearBox{
    float: left;
    width: 440px;
    height: 46px;
    margin-right: 12px;
    border-radius: 100px;
    border: 1px solid #ff8000;
  }

  .wrap .top .topB .topBBox .topSear .topSearBox input{
    float: left;
    width: 392px;
    height: 44px;
    text-indent: 20px;
    border-radius: 100px;
  }

  .wrap .top .topB .topBBox .topSear .topSearBox .topSearBtn{
    float: right;
    width: 30px;
    height: 30px;
    font-size: 26px;
    font-weight: 100;
    color: #ff8000;
    margin: 8px;
    cursor: pointer;
  }

  .wrap .top .topB .topBBox .topSear .topSearItem{
    display: block;
    float: left;
    width: 60px;
    height: 46px;
    line-height: 46px;
    font-size: 12px;
    text-align: center;
  }

  .wrap .top .topB .topBBox .topBNav {
    float: right;
  }

  .wrap .top .topB .topBBox .topBNav .topBNav_item {
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

  .wrap .top .topB .topBBox .topBNav .topBNav_item:last-child{
    border: 0;
  }

  .wrap .top .topB .topBBox .topBNav .topBNav_mes {
    color: #ff8000;
    display: block;
    float: left;
    width: 34;
    height: 34px;
    line-height: 34px;
    font-size: 28px;
    margin: 21px 5px 21px;
    border: 0;
  }

  .wrap .top .topB .topBBox .topBNav .topBNav_item:hover {
    color: #ff8000;
  }

  .wrap .top .topB .topBBox .topBNav .router-link-active {
    color: #ff8000;
  }

  .wrap .container {
    width: 100%;
    min-height: 743px;
    background: #f1f1f1;
  }

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
    color: #ff8000;
    font-size: 20px;
    height: 36px;
    line-height: 36px;
  }

  .index {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .index .indexMain {
        width: 1280px;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
    }

    .index .indexMain .indexLeft {
        width: 280px;
        height: 696px;
        float: left;
        margin-right: 18px;
        background: white;
    }

    .index .indexMain .indexLeft .indexSub {
        width: 280px;
        height: 58px;
        padding: 18px 20px;
        background: #ffefdd;
    }

    .index .indexMain .indexLeft .indexSub .indexSubTitle {
        width: 240px;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #ff8000;
    }

    .index .indexMain .indexLeft .indexSub:hover {
        color: #fff;
        background: #ff8000;
    }

    .index .indexMain .indexLeft .indexSubActive {
        color: #fff;
        background: #ff8000;
    }

    .index .indexMain .indexLeft .indexSubNav {
        width: 280px;
        height: 58px;
        display: block;
        padding: 18px 40px;
    }

    .index .indexMain .indexLeft .router-link-active {
        color: #ff8000;
    }

    .index .indexMain .indexRight {
        width: 982px;
        min-height: 357px;
        float: left;
    }


  

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-size: 14px;
    color: #555;
    font-family: Verdana, "Microsoft YaHei", Simsun;
  }

  fieldset,
  img {
    border: 0;
  }

  ol,
  ul,
  dl {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 100;
  }

  em {
    font-style: normal;
  }

  input,
  button,
  select,
  textarea {
    outline: none;
  }

  textarea {
    resize: none;
  }

  b,
  strong {
    font-weight: normal;
  }

  a {
    color: #616161;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #ff8000;
    text-decoration: none;
  }

  .clear:before,
  .clearfix:after {
    content: "";
    display: table;
  }

  .clear:after {
    content: ".";
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .clearfix {
    zoom: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
</style>
