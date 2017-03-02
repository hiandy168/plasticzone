//login.js
//获取应用实例
var app = getApp();

Page({
  data: {
    mobile: "",
    pwd: ""
  },
  bindMobileInput:function(e){
    this.setData({
      mobile:e.detail.value
    })
  },
  bindPwdInput:function(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  login: function () {
    var _this=this;
    wx.request({
      url: app.globalData.apiHost + '/login',
      data: {
        username: _this.data.mobile,
        password: _this.data.pwd
      },
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if(res.data.err==0){
          wx.setStorageSync('token', res.data.dataToken);
          wx.navigateBack({
            delta: 5
          })
        }
      },
      fail: function () {

      },
      complete: function () {

      }
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