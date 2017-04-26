//protocol.js
//获取应用实例
var app = getApp();

Page({
  data: {
   
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    wx.request({
      url: app.globalData.apiHost + '/getZoneFriend',
      data: {
        userid:5258,
        token: wx.getStorageSync('token'),
        size:10
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded/json'
      },
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    //String3
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