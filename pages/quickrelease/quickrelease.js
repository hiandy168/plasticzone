//mysupply.js

//获取应用实例
var app = getApp();
Page({
  data: {
    buy: [],
    supply: []
  },
  toBack:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/supplyDemandList',
      data: {
        page: 1,
        size: 5,
        type: 1,
        token: wx.getStorageSync('token')
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.err == 0) {
          _this.setData({
            buy: res.data.data
          });
        } else if (res.data.err == 1) {
          _this.setData({
            buy: []
          });
        } else if (res.data.err == 2) {
          _this.setData({
            buy: []
          });
        }

      },
      fail: function () {

      },
      complete: function () {

      }
    });
    wx.request({
      url: app.globalData.apiHost + '/supplyDemandList',
      data: {
        page: 1,
        size: 5,
        type: 2,
        token: wx.getStorageSync('token')
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.err == 0) {
          _this.setData({
            supply: res.data.data
          });
        } else if (res.data.err == 1) {
          _this.setData({
            supply: []
          });
        } else if (res.data.err == 2) {
          _this.setData({
            supply: []
          });
        }

      },
      fail: function () {

      },
      complete: function () {

      }
    })

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  }
})