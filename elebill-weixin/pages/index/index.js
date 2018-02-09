//index.js
var config = require('../../common/script/config');
var fetch = require('../../common/script/fetch');
//获取应用实例
const app = getApp()

Page({
  data: {
    billList: '',
    totalNum: '',
    leftDays: '',
    currentTime: '',
    currentPage: '',
    billListBottom:false,
    phoneCall:'400-9929-272',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), 
    typeIndex: 0,
    moneyIndex: 0,
    orgIndex: 0,
    dateIndex: 0,
    dataList: [
      {
        index: 0,
        list: [
          {
            id: 0,
            name: '所有金额',
            value: '所有金额'
          },
          {
            id: 1,
            name: '50万以下',
            value: '0,500000'
          },
          {
            id: 2,
            name: '50-500万',
            value: '500000,5000000'
          },
          {
            id: 3,
            name: '500-1000万',
            value: '5000000,10000000'
          },
          {
            id: 4,
            name: '1000万以上',
            value: '10000000,1.7976931348623157e+308'
          }
        ]
      },
      {
        index: 0,
        list: [
          {
            id: 0,
            name: '所有类型',
            value: '所有类型'
          },
          {
            id: 1,
            name: '银票',
            value: '银票'
          },
          {
            id: 2,
            name: '商票',
            value: '商票'
          }
        ]
      },
      {
        index: 0,
        list: [
          {
            id: 0,
            name: '所有机构',
            value: '所有机构'
          },
          {
            id: 1,
            name: '国股',
            value: '国股'
          },
          {
            id: 2,
            name: '城商',
            value: '城商'
          },
          {
            id: 3,
            name: '三农',
            value: '三农'
          },
          {
            id: 4,
            name: '财务公司',
            value: '财务公司'
          },
          {
            id: 5,
            name: '其它',
            value: '其它'
          }
        ]
      },
      {
        index: 0,
        list: [
          {
            id: 0,
            name: '所有期限',
            value: '所有期限'
          },
          {
            id: 1,
            name: '90天以内',
            value: '0,90'
          },
          {
            id: 2,
            name: '90-180天',
            value: '90,180'
          },
          {
            id: 3,
            name: '180-360天',
            value: '180,360'
          },
          {
            id: 4,
            name: '360天以上',
            value: '360,1.7976931348623157e+308'
          }
        ]
      }
    ],
    moneyList: [
      {
        id: 0,
        name: '所有金额',
        value: '所有金额'
      },
      {
        id: 1,
        name: '50万以下',
        value: '0,500000'
      },
      {
        id: 2,
        name: '50-500万',
        value: '500000,5000000'
      },
      {
        id: 3,
        name: '500-1000万',
        value: '5000000,10000000'
      },
      {
        id: 4,
        name: '1000万以上',
        value: '10000000,1.7976931348623157e+308'
      }
    ],
    typeList: [
      {
        id: 0,
        name: '所有类型',
        value: '所有类型'
      },
      {
        id: 1,
        name: '银票',
        value: '银票'
      },
      {
        id: 2,
        name: '商票',
        value: '商票'
      }
    ],
    orgList: [
      {
        id: 0,
        name: '所有机构',
        value: '所有机构'
      },
      {
        id: 1,
        name: '国股',
        value: '国股'
      },
      {
        id: 2,
        name: '城商',
        value: '城商'
      },
      {
        id: 3,
        name: '三农',
        value: '三农'
      },
      {
        id: 4,
        name: '财务公司',
        value: '财务公司'
      },
      {
        id: 5,
        name: '其它',
        value: '其它'
      }
    ],
    dateList: [
      {
        id: 0,
        name: '所有期限',
        value: '所有期限'
      },
      {
        id: 1,
        name: '90天以内',
        value: '0,90'
      },
      {
        id: 2,
        name: '90-180天',
        value: '90,180'
      },
      {
        id: 3,
        name: '180-360天',
        value: '180,360'
      },
      {
        id: 4,
        name: '360天以上',
        value: '360,1.7976931348623157e+308'
      }
    ],
  },
  onLoad: function () {
    var that = this;
    // 调用接口 获取票据列表
    fetch.fetchBillList(config.apiList.billListUrl, { 
      pageSize: 10 ,
      billStatus: '待交易',
    }, that)
    that.getNewTime(that)
  },
  // 上拉加载更多
  onReachBottom: function (e) {
    var that = this
    if (that.data.totalNum<=10){
      return;
    }
    let currentPage = that.data.currentPage++;
    // console.log(that)
    fetch.fetchBillList(config.apiList.billListUrl, {
      pageSize: 10,
      billStatus: '待交易',
      currentPage: currentPage
    }, that)
  },
  onPullDownRefresh:function() {
    // 下拉刷新
    var that = this;
    // 调用接口 获取票据列表
    fetch.fetchBillList(config.apiList.billListUrl, {
      pageSize: 10,
      billStatus: '待交易',
    }, that)
    that.getNewTime(that)
  },
  //事件处理函数 查看详情
  viewBillDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../billDetail/billDetail?billId=' + data.id,
    })
  },
  // 联系我们 拨打电话
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneCall
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取当前时间
  getNewTime: function (that){
    var date = new Date();
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = that.addNum(date.getHours());
    //分  
    var m = that.addNum(date.getMinutes());
    //秒  
    var s = that.addNum(date.getSeconds());
    that.setData({
      currentTime: Y + '-' + M + '-' + D + ' ' + h + ":" + m + ":" + s
    })
  },
  addNum:function(num){
    return num > 9 ? num : '0' + num 
  },
  // 切换条件
  bindPickerChange: function (e) {
    var that = this;
    that.setData({
      typeIndex: e.detail.value
    })
    var billType, billMoney, billOrg, billDate;
    billType = that.data.typeList[e.detail.value].value;
    billMoney = that.data.moneyList[that.data.moneyIndex].value;
    billOrg = that.data.orgList[that.data.orgIndex].value;
    billDate = that.data.dateList[that.data.dateIndex].value;
    fetch.fetchBillList(config.apiList.billListUrl, {
      pageSize: 10,
      billStatus: '待交易',
      billClassify: billType,
      billMoney: billMoney,
      billAcceptOrg: billOrg,
      billLimit: billDate,
    }, that);
  },
  bindPickerChange2: function (e) {
    var that = this;
    that.setData({
      moneyIndex: e.detail.value
    })
    // console.log(that)
    // console.log(e)
    var billType, billMoney, billOrg, billDate;
    billType = that.data.typeList[that.data.typeIndex].value;
    billMoney = that.data.moneyList[e.detail.value].value;
    billOrg = that.data.orgList[that.data.orgIndex].value;
    billDate = that.data.dateList[that.data.dateIndex].value;
    fetch.fetchBillList(config.apiList.billListUrl, {
      pageSize: 10,
      billStatus: '待交易',
      billClassify: billType,
      billMoney: billMoney,
      billAcceptOrg: billOrg,
      billLimit: billDate,
    }, that);
  },
  bindPickerChange3: function (e) {
    var that = this;
    that.setData({
      orgIndex: e.detail.value
    })
    var billType, billMoney, billOrg, billDate;
    billType = that.data.typeList[that.data.typeIndex].value;
    billMoney = that.data.moneyList[that.data.moneyIndex].value;
    billOrg = that.data.orgList[e.detail.value].value;
    billDate = that.data.dateList[that.data.dateIndex].value;
    fetch.fetchBillList(config.apiList.billListUrl, {
      pageSize: 10,
      billStatus: '待交易',
      billClassify: billType,
      billMoney: billMoney,
      billAcceptOrg: billOrg,
      billLimit: billDate,
    }, that);
  },
  bindPickerChange4: function (e) {
    var that = this;
    that.setData({
      dateIndex: e.detail.value
    })
    var billType, billMoney, billOrg, billDate;
    billType = that.data.typeList[that.data.typeIndex].value;
    billMoney = that.data.moneyList[that.data.moneyIndex].value;
    billOrg = that.data.orgList[that.data.orgIndex].value;
    billDate = that.data.dateList[e.detail.value].value;
    fetch.fetchBillList(config.apiList.billListUrl, {
      pageSize: 10,
      billStatus: '待交易',
      billClassify: billType,
      billMoney: billMoney,
      billAcceptOrg: billOrg,
      billLimit: billDate,
    }, that);
  }
})
