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
                        <router-link class="topTRightPersonLink" to="/acc/set/accInfo">账户中心</router-link>
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
                    <router-link class="topBNav_out topBNav_item" to="/bill/out">我要出票</router-link>
                    <router-link class="topBNav_in topBNav_item" to="/bill/in">我要收票</router-link>
                    <router-link class="topBNav_in topBNav_item" to="/bill/log">交易记录</router-link>
                    <a class="topBNav_in topBNav_item" :class="{activeSecurity:currentUrl=='/bill/security'}" @click="security">风控中心</a>
                    <a class="topBNav_in topBNav_item" href="http://www.chuasi.com" target="blank">百万理财</a>
                    <router-link class="topBNav_us topBNav_item" to="/us">联系我们</router-link>
                    <!-- 点击出现弹框 -->
                    <Modal
                        v-model="modal"
                        title="邀请码(请输入您的邀请码)"
                        footer=''
                        class-name="vertical-center-modal">
                        <div slot="header" class="bidPouupTop">
                            <h2 class="bidPouupTopTitle">邀请码</h2>
                        </div>
                        <div class="bidPouupMain">
                            <div class="bidPouupInterest">
                                <div class="bidPouupInterest_label">
                                    手机号:
                                </div>
                                <div class="bidPouupInterest_text" ref="interestMoney" >
                                    <input autofocus placeholder="" v-model="userPhone" @keyup.enter="gotoScan()"  value="" />
                                </div>
                                <div class="getCode" @click="getCode()">获取邀请码</div>
                                <div class="bidAdd_tip" ref="phone_tip">请正确输入手机号</div>
                            </div>
                            <div class="bidPouupInterest">
                                <div class="bidPouupInterest_label">
                                    邀请码:
                                </div>
                                <div class="bidPouupInterest_text" ref="interestMoney" >
                                    <input autofocus placeholder="" v-model="inviteCode" @keyup.enter="gotoScan()"  value="" />
                                </div>
                                <!-- <div class="getCode" @click="getCode()">获取邀请码</div> -->
                                <div class="bidAdd_tip" ref="code_tip">请正确输入邀请码</div>
                            </div>
                        </div>
                        <div slot="footer" class="bidPouupBtn">
                            <a @click="gotoScan()" class="bidPouupOffer">立即查看</a>
                        </div>
                    </Modal>
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
          <p class="bottomLeftCopyright">Copyright © 2017-2018. 武汉华四投资顾问有限公司 | 武汉小墨科技有限公司 版权所有 Power by Mereca 鄂ICP备16019978号-3
</p>
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
      modal:false,
      inviteCode:'',
      currentUrl:'/',
      msgId:'',
      userPhone:''
      
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
            // console.log(res);   
            self.loginStatus = '登录';
            // 删除存储的登录信息
            globalData.methods.deleteItem('loginStatus');
            self.$router.push('/login');
          })
        }
      })
    },
    security: function() {
      // 判断的登录与否
      var data = localStorage.getItem('loginStatus');
      var dataObj = JSON.parse(data);
      if(data==null){
          this.$router.push('/login');
          return;
      }
      var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
      if (dataObiTime>60) {
          this.$router.push('/login');
          return;
      }else{
        this.modal = true
      }
    },
    getCode: function() {
      var  self = this;
      if((/^[1][3,4,5,6,7,8][0-9]{9}$/).test(self.userPhone)){
          self.$refs.phone_tip.style.display = 'none';   
          self.$http.post(globalData.data.Ip+'/common/sms',
            {userPhone:self.userPhone},{emulateJSON:true}).then((res) => {
            if(res.data.code == 200) {
                // console.log(res);
                self.msgId = res.data.data.msgId;
                self.$Message.success({
                      content: '请输入验证码！',
                      duration: 10,
                      closable: true
                  });
            } else {
                console.log(res);
            }
          })
      }else{
        self.$refs.phone_tip.style.display = 'block';   
        return false;
      }
      
    },
    gotoScan: function() {
      var self = this;
      // 验证短信验证码
      self.$http.post(globalData.data.Ip+'/common/sms/validate',{
          smsCode:self.inviteCode,
          smsId:self.msgId,
        },{emulateJSON:true}).then((res) => {
          if(res.data.code == 200) {
              self.modal = false;
              self.$refs.code_tip.style.display = 'none';  
              self.$router.push('/bill/security/endorse');  
              self.inviteCode = '';
          } else {
              self.$refs.code_tip.style.display = 'block';   
              return;
          }
      })
    },
    getData:function(){
      // 判断的登录与否
      var data = localStorage.getItem('loginStatus');
      var dataObj = JSON.parse(data);
      if(data==null){
          this.loginStatus = '登录';
          return;
      }
      var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
      if (dataObiTime>60) {
          this.loginStatus = '登录';
          return;
      }else{
        this.loginStatus = '退出登录';
      }
    },
    //  调取接口，获取用户认证信息
    getUserInfo:function(){
        var self = this;
        self.$http.get(globalData.data.Ip+'/user/info',{credentials:true}).then(function(res){ 
            console.log(res);   
            self.userName = res.data.data.userName;                          
            self.userPhone = res.data.data.userPhone;                          
            self.userEmail = res.data.data.userEmail;                          
            self.userAuth = res.data.data.userAuth;                          
            self.companyAuth = res.data.data.companyAuth;
            localStorage.setItem('eleUserAuth',self.userAuth);                         
            localStorage.setItem('eleCompanyAuth',self.companyAuth);            
        })
    },
  },
  watch: {
     '$route': 'getData'
  }
};
</script>

<style>
.wrap {
  min-width: 1280px;
  height: auto;
}

.wrap .top {
  width: 100%;
  height: 116px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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

.wrap .top .topB .topBBox .topBNav .router-link-active, 
.wrap .top .topB .topBBox .topBNav .activeSecurity {
  color: #f71327;
}

.wrap .container {
  width: 100%;
  margin-top: 116px;
  min-height: 750px;
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

 /* 弹框内容 */
    .vertical-center-modal{
        /* display: flex; */
        /* align-items: center; */
        /* justify-content: center; */
    }

    .bidPouupTop {
        width: 488px;
        height:18px;
        margin-bottom: 1px;
        background: white;
    }

    .bidPouupTop .bidPouupTopTitle {
        width: 380px;
        height: 18px;
        float: left;
        color: #f71327;
        font-size: 16px;
    }

    .bidPouupTop .bidPouupTopTitle span {
        color: #878787;
        font-size: 12px;
    }
    .bidPouupTop .bidPouupTopTitle span b{
        color: #000;
        font-weight: 600;
    }

    .bidPouupMain {
        width: 424px;
        height:160px;
        padding: 20px 0;
        background: white;
    }

    .bidPouupMain .bidPouupInterest {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_text {
        width: 208px;
        height: 46px;
        float: left;
        border: 1px solid #878787;
        border-radius: 4px;
    }

    .bidPouupMain .bidPouupInterest .bidPouupInterest_text input{
        width: 206px;
        height: 44px;
        float: left;
        border-radius: 4px;
        text-indent: 14px;
    }

    .bidPouupMain .bidPouupInterest .getCode{
        width: 90px;
        height: 46px;
        float: left;
        color: #f71327;
        text-align: center;
        cursor: pointer;
    }
    
    .bidPouupMain .bidAdd_tip {
        width: 298px;
        height: 24px;
        color: red;
        line-height: 24px;
        display: none;
        margin-left: 124px;
    }

    .ivu-modal-footer{
        border: 0;
        padding: 10px 0 40px;
    }

    .bidPouupBtn {
        width: 240px;
        height: 46px;
        color: white;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        background-color: #f71327;
    }

    .bidPouupBtn .bidPouupOffer {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
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
