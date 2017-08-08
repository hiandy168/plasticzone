//login.js
var common = require('../../common/common.js');
//获取应用实例
var app = getApp();

Page({
  data: {
    mobile: "",
    pwd: ""
  },
  bindMobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindPwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  toProtocol:function(){
    wx.navigateTo({
      url: '../protocol/protocol',
    })
  },
  login: function () {
    var _this = this;
    if (common.helper.verifyMobile(this.data.mobile)){
      console.log(true);
    }else{
      common.helper.showVerifyToast("请输入正确的手机号码!")
      console.log(false);
    }
    
    wx.setStorageSync('userid', "");
    wx.setStorageSync('token', "");
    wx.setStorageSync('XUA', "weixin|5.5|" + wx.getStorageSync("userid") + "|" + wx.getStorageSync("token") + "|0|Win32|Win32|Win32|Netscape|Mozilla|0|0|0");
    wx.request({
      url: app.globalData.apiHost + '/user/login',
      data: {
        username: _this.data.mobile,
        password: _this.data.pwd
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'X-UA': wx.getStorageSync("XUA")
      },
      success: function (res) {
        if (res.data.err == 0) {
          wx.setStorageSync('token', res.data.dataToken);
          wx.setStorageSync('userid', res.data.user_id);
          wx.setStorageSync('XUA', "weixin|5.5|" + wx.getStorageSync("userid") + "|" + wx.getStorageSync("token") + "|0|Win32|Win32|Win32|Netscape|Mozilla|0|0|0");
          wx.redirectTo({
            url: '../index/index',
          })
        }
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function () {

      },
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    //String2
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    //String3
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    //String6
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    //String7
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    //String8
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})