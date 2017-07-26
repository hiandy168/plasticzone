// pages/plasticconfig/plasticconfig.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    configLi: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.apiHost + '/credit/creditLimitPage',
      data: {

      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-UA': wx.getStorageSync('XUA')
      },
      success: function (res) {
        var data = res.data.data;
        data.forEach(function (v, i, array) {
          v.a = v.a.replace(/<\/?[^>]*>/g, '');
        });
        if (res.data.err == 0) {
          _this.setData({
            configLi: data
          });
          console.log(data);
        } else if (res.data.err == 1) {

        }
      },
      fail: function (res) {

      },
      complete: function () {

      }
    });  
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