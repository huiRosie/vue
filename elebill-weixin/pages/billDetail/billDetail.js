// pages/billDetail/billDetail.js
var config = require('../../common/script/config');
var fetch = require('../../common/script/fetch');
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    billDetail:'',
    phoneCall:'400-9929-272'
  },

  //事件处理函数
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneCall
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var billId = options.billId;
    // console.log(billId)
    fetch.fetchBillDetail(config.apiList.billDetailUrl, { billId: billId }, that)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})