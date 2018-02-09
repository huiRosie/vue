var config = require('./config.js');

// 获取汇票列表
function fetchBillList(url, datas, that) {
  wx.request({
    url: url,
    data: datas,
    method: 'POST',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      // console.log(res)
      if (res.data.data.totalCount <= res.data.data.pageSize) {
        that.setData({
          billListBottom:true
        })
      }
      var data = res.data.data.recordList;
      for(var i=0;i<data.length;i++){
        var cYear = data[i].billExpire.slice(0,4);
        var cMonth = data[i].billExpire.slice(5,7);
        var cDay = data[i].billExpire.slice(8, 10);
        // 剩余天数
        var leftDate = (new Date(cYear, cMonth - 1, cDay)) - (new Date());
        var leftDays = parseInt(leftDate / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
        data[i]['leftDays']=leftDays;
      }
      // console.log(data)
      that.setData({
        billList: data,
        totalNum: res.data.data.totalCount,
        currentPage: res.data.data.currentPage
      })
    },
    fail: function () {
      // message.show.call(that, {
      //   content: '网络开小差了',
      //   icon: 'offline',
      //   duration: 3000
      // })
    },
    complete: function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }
  })
}

// 获取汇票详情
function fetchBillDetail(url, datas, that) {
  // message.hide.call(that)
  wx.request({
    url: url,
    data: datas,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      var data = res.data.data;
      var cYear = data.billExpire.slice(0, 4);
      var cMonth = data.billExpire.slice(5, 7);
      var cDay = data.billExpire.slice(8, 10);
      // 剩余天数
      var leftDate = (new Date(cYear, cMonth - 1, cDay)) - (new Date());
      var leftDays = parseInt(leftDate / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
      data['leftDays'] = leftDays;
      that.setData({
        billDetail: data,
      })
    },
    fail: function () {
      // that.setData({
      //   newsDetail: '网络开小差了',
      // })
    }
  })
}





module.exports = {
  fetchBillList: fetchBillList,
  fetchBillDetail: fetchBillDetail
}