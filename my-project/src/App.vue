<template>
  <div id="app" class="wrap">
    <div class="top">
        <div class="topT">
            <div class="topTBox">
                <div class="topTLeft">
                    <div class="topTLeftTel">
                        <span>客服热线：400-9929-272</span>
                    </div>
                    <div class="topTLeftTime">
                        <span>客服时间：上午9:00-下午17:30（工作日）</span>
                    </div>
                </div>
                <ul class="topTRight">
                    <li class="topTRightGreet"><span>欢迎您！</span></li>
                    <li class="topTRightPerson">
                        <router-link class="topTRightPersonLink" to="/acc">账户中心</router-link>
                    </li>
                    <li class="topTRightLogin">
                        <router-link v-if="loginStatus=='登录'" class="topTRightLoginLink" to="/login" >{{loginStatus}}</router-link>
                        <a v-if="loginStatus=='退出登录'" @click="userSignOut" class="topTRightLoginLink" >{{loginStatus}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="topB">
            <div class="topBBox">
                <h1 class="topBLogo">
                  <router-link to="/index"><img class="logoImg" src="./assets/elebill-com-logo.png"/></router-link>
                </h1>
                <div class="topBNav">
                    <router-link class="topBNav_index topBNav_item" to="/index">首页</router-link>
                    <router-link class="topBNav_out topBNav_item" to="/bill/out">我要贴现</router-link>
                    <router-link class="topBNav_in topBNav_item" to="/bill/in">我要收票</router-link>
                    <router-link class="topBNav_us topBNav_item" to="/us">联系我们</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div class="container">
      <router-view></router-view>
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
              <router-link class="bottomNavItem_link" to="/hel">帮助中心</router-link>
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
import globalData from "./components/globalData";

export default {
  name: "app",
  data() {
    return {
      loginStatus: "登录",
      loginOutStatus: "退出登录",
    };
  },
  created:function(){
    this.getData();
  },
  methods: {
    userSignOut: function() {
      var self = this;
      self.$Modal.confirm({
        title:'提示',
        content:'您确定要退出登录吗？',
        onOk:function(){
          self.$http.get(globalData.data.Ip+'/user/logouted',{emulateJSON:true,credentials:true}).then(function(res){ 
            console.log(res);   
            self.loginStatus = '登录';
            // 删除存储的登录信息
            globalData.methods.deleteItem('loginStatus');
            self.$router.push('/login');
          })
        }
      })
    },
    getData:function(){
      var data = localStorage.getItem('loginStatus');
      var dataObj = JSON.parse(data);
      // console.log(dataObj)
      if(data==null){
          this.loginStatus = '登录';
          return;
      }
      var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
      if (dataObiTime>120) {
          this.loginStatus = '登录';
          return;
      }else{
        this.loginStatus = '退出登录';
      }
    },
  },
  watch: {
     '$route': 'getData'
  }
};
</script>

<style>
.wrap {
  width: 100%;
  height: auto;
}

.wrap .top {
  width: 100%;
  height: 116px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: #fff;
}

.wrap .top .topT {
  width: 100%;
  height: 40px;
  color: white;
  background: #999;
}

.wrap .top .topT .topTBox {
  width: 1280px;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
}

.wrap .top .topT .topTBox .topTLeft {
  float: left;
  width: 700px;
}

.wrap .top .topT .topTBox .topTLeft .topTLeftTel {
  float: left;
  width: 300px;
}

.wrap .top .topT .topTBox .topTLeft .topTLeftTime {
  float: left;
  width: 300px;
}

.wrap .top .topT .topTBox .topTRight {
  float: right;
  width: auto;
  height: 40px;
  line-height: 14px;
  padding: 13px 0;
}

.wrap .top .topT .topTBox .topTRight li {
  float: left;
  width: auto;
  padding: 0 10px;
  text-align: right;
  border-right: 1px solid #fff;
}

.wrap .top .topT .topTBox .topTRight li:last-child {
  border: 0;
}

.wrap .top .topT .topTBox .topTRight li a {
  color: white;
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
}

.wrap .top .topB .topBBox .topBLogo .logoImg {
  display: block;
  width: 284px;
  height: 43px;
  margin: 16px 0;
}

.wrap .top .topB .topBBox .topBNav {
  float: right;
}

.wrap .top .topB .topBBox .topBNav .topBNav_item {
  color: #555;
  display: block;
  float: left;
  width: auto;
  height: 26px;
  line-height: 26px;
  font-size: 18px;
  margin: 25px 0 25px 55px;
}

.wrap .top .topB .topBBox .topBNav .topBNav_item:hover {
  color: #f71327;
}

.wrap .top .topB .topBBox .topBNav .router-link-active {
  color: #f71327;
}

.wrap .container {
  width: 100%;
  margin-top: 116px;
  min-height: 678px;
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

.wrap
  .bottom
  .bottomBox
  .bottomLeft
  .bottomLeftNav
  .bottomLeftNavItem:first-child {
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

.mark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);
  display: none;
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
  font-weight: 500;
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
  color: #f71327;
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
